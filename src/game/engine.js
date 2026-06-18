// ─────────────────────────────────────────────────────────────────────────────
// PURE GAME ENGINE
//
// Every function here is a pure function of (state, args) -> newState (or a
// derived value). No React, no Firebase, no Date.now(), no Math.random() except
// where explicitly seeded/passed in. This is what makes the rules testable and
// the save format trivially serializable.
// ─────────────────────────────────────────────────────────────────────────────

import {
  SCHEMA_VERSION,
  METRIC_IDS,
  METRIC_MIN,
  METRIC_MAX,
  METRIC_START,
  OVERFLOW_THRESHOLD,
  OVERFLOW_FATAL,
  REVIVE_RESET_VALUE,
  MAX_CONSECUTIVE_PER_LOCATION,
  INSIGHT_QUESTIONS_GRANTED,
  DEATH_LIMITS,
  MAX_TOTAL_REVIVES,
  POWERUP_INTERVAL,
  FAVOR_IDS,
  FAVOR_FLOOR,
  UN_SUPPORT_DURATION,
  ADVISOR_DURATION,
  FINANCE_RESET_VALUE,
  SLEEP_DELTA,
  TRADE_COST,
  TRADE_GAIN,
  TRADE_SOURCES,
  DIFFICULTY_RAMP_EVERY,
  DIFFICULTY_STEP,
  DIFFICULTY_CAP,
  DAY_START,
  ENDGAME_START_DAY,
  FINAL_DAY,
  WIN_AVERAGE_THRESHOLD,
  LOCATION_IDS,
  ENDGAME_LOCATION_ID,
  STATUS,
  PHASE,
  MODES,
  DEFAULT_MODE,
  STARTUP_POWERUPS,
} from './constants.js';

// ── Construction ─────────────────────────────────────────────────────────────

/**
 * Build a fresh, Day-1 save state.
 * @param {'story'|'campaign'} mode  which ruleset this run plays under.
 * @param {number} seed  per-run seed; permutes the order cards are drawn so each
 *                       new run sees a different sequence. Supplied by the hook
 *                       (Math.random) so the engine itself stays pure/testable.
 */
export function createInitialState(mode = DEFAULT_MODE, seed = 0) {
  // CAMPAIGN unlocks all three favors up front (claim each by ad). STORY earns
  // them over time — one random favor unlocks every POWERUP_INTERVAL decisions.
  const unlockedFavors = mode === MODES.CAMPAIGN ? [...STARTUP_POWERUPS] : [];

  return {
    schemaVersion: SCHEMA_VERSION,
    mode,
    seed: seed >>> 0, // per-run shuffle seed for deck order
    createdAt: null, // stamped by the persistence layer, not the engine
    updatedAt: null,

    day: DAY_START,
    phase: PHASE.STANDARD,
    status: STATUS.PLAYING,

    metrics: Object.fromEntries(METRIC_IDS.map((id) => [id, METRIC_START])),

    // Per-location pacing state.
    // answered: consecutive answers since this location was last (un)locked.
    // lockedAtTotal: total questions answered globally at the moment it locked,
    //                or null if currently unlocked. Used to compute unlock progress.
    locations: Object.fromEntries(
      LOCATION_IDS.map((id) => [id, { answered: 0, lockedAtTotal: null }]),
    ),

    insightRemaining: 0,

    totalAnswered: 0, // global counter; drives unlock math + endgame cursor
    endgameCursor: 0, // index into the endgame deck once phase === ENDGAME

    deaths: [], // day-number of every removal; drives the rate-limit restart
    unlockedFavors, // favor ids available to apply (by ad) right now
    activeFavors: {}, // favorId -> decisions remaining on the active buff
    unSupportFrozen: {}, // metricId -> value, pillars frozen by UN Stabilisation
    favorNotice: null, // favorId just unlocked, for the one-shot popup
    pendingRevival: null, // { metric, edge } shown on the revival screen

    pendingDeath: null, // { metric, value, edge } while STATUS.DEATH_PENDING
    finalResult: null, // { won, average, metrics, cause } once the run ends

    history: [], // append-only log of resolved choices (capped)
  };
}

// ── Power-up offering ────────────────────────────────────────────────────────

// A favor is "available to earn" only if it is neither already unlocked nor
// currently running as a buff.
function lockedFavors(state) {
  return FAVOR_IDS.filter((id) => !state.unlockedFavors.includes(id) && !state.activeFavors[id]);
}

// Deterministic "random" pick so the engine stays pure/testable: the favor that
// unlocks on this interval is a hash of the interval index.
function pickLockedFavor(state, totalAnswered) {
  const locked = lockedFavors(state);
  if (locked.length === 0) return null;
  const interval = Math.floor(totalAnswered / POWERUP_INTERVAL);
  const h = (interval * 2654435761) >>> 0; // Knuth multiplicative hash
  return locked[h % locked.length];
}

// Apply active favor buffs to the post-decision metrics. UN Stabilisation, for
// the duration of the buff:
//   • a pillar that was at/above FAVOR_FLOOR (25%) cannot be pushed below it; and
//   • a pillar that was ALREADY below 25% when the favor was taken is protected
//     from DROPPING — it holds against any loss — but a decision can still RAISE
//     it (it only ever goes up while the buff lasts). `frozen` keys mark those
//     protected pillars; `preMetrics` is the value before this decision.
function applySustainedFavors(preMetrics, postMetrics, activeFavors, frozen = {}) {
  const m = { ...postMetrics };
  if (activeFavors.un_support) {
    for (const id of METRIC_IDS) {
      if (Object.prototype.hasOwnProperty.call(frozen, id)) {
        if (m[id] < preMetrics[id]) m[id] = preMetrics[id]; // never drops; can rise
      } else if (m[id] < FAVOR_FLOOR) {
        m[id] = FAVOR_FLOOR; // floor pillars that started at/above 25%
      }
    }
  }
  return m;
}

// Tick every active favor's countdown by one decision; drop the expired ones.
function decayFavors(activeFavors) {
  const next = {};
  for (const [id, n] of Object.entries(activeFavors)) if (n - 1 > 0) next[id] = n - 1;
  return next;
}

/** Is a given favor currently running as a buff? */
export function isFavorActive(state, id) {
  return (state.activeFavors?.[id] || 0) > 0;
}
/** Decisions left on a favor's buff (0 if inactive). */
export function favorRemaining(state, id) {
  return state.activeFavors?.[id] || 0;
}
/** Is a favor unlocked and ready to apply right now? */
export function isFavorUnlocked(state, id) {
  return state.unlockedFavors?.includes(id);
}

// ── Metric helpers ───────────────────────────────────────────────────────────

export function clampMetric(v) {
  if (v < METRIC_MIN) return METRIC_MIN;
  if (v > METRIC_MAX) return METRIC_MAX;
  return v;
}

// ── Difficulty (progressive) ─────────────────────────────────────────────────
// Negative effects bite harder the longer you have ruled: the multiplier climbs
// every DIFFICULTY_RAMP_EVERY decisions, capped at DIFFICULTY_CAP. Applied to
// the *applied* deltas AND surfaced to Insight so the revealed numbers stay true.
export function difficultyFactor(totalAnswered = 0) {
  return Math.min(DIFFICULTY_CAP, 1 + DIFFICULTY_STEP * Math.floor(totalAnswered / DIFFICULTY_RAMP_EVERY));
}

/** The delta actually applied for one metric, after the progressive penalty. */
export function effectiveDelta(delta, totalAnswered = 0) {
  return delta < 0 ? Math.round(delta * difficultyFactor(totalAnswered)) : delta;
}

export function metricAverage(metrics) {
  const vals = METRIC_IDS.map((id) => metrics[id]);
  return vals.reduce((a, b) => a + b, 0) / vals.length;
}

/**
 * Find the first metric sitting at a fatal edge (<= MIN or >= MAX).
 * Returns { metric, value } or null. Deterministic by METRIC_IDS order.
 */
export function findFatalMetric(metrics) {
  for (const id of METRIC_IDS) {
    const v = metrics[id];
    if (v <= METRIC_MIN) return { metric: id, value: METRIC_MIN, edge: 'low' };
    // The top edge is no longer 100 — a pillar must OVERFLOW all the way to
    // OVERFLOW_FATAL (120) before the surplus collapses the regime.
    if (v >= OVERFLOW_FATAL) return { metric: id, value: OVERFLOW_FATAL, edge: 'high' };
  }
  return null;
}

/** Is a pillar in the danger "overflowing" band (>= threshold, not yet fatal)? */
export function isOverflowing(value) {
  return value >= OVERFLOW_THRESHOLD && value < OVERFLOW_FATAL;
}

// ── Locking / availability ───────────────────────────────────────────────────

export function isLocationLocked(state, locId) {
  return state.locations[locId]?.lockedAtTotal != null;
}

/** True when every office is closed — Sleep is then the only way forward. */
export function allLocationsLocked(state) {
  return LOCATION_IDS.every((id) => isLocationLocked(state, id));
}

/** Can the player open this location and draw a card right now? */
export function canEnterLocation(state, locId) {
  if (state.status !== STATUS.PLAYING) return false;
  if (state.phase === PHASE.ENDGAME) return false; // map is locked in endgame
  return !isLocationLocked(state, locId);
}

// ── The main loop: answering a card ──────────────────────────────────────────

/**
 * Apply a choice to the state. Pure.
 *
 * @param {object} state   current save state
 * @param {object} card    the card being answered (needs `id`, `location`)
 * @param {object} choice  the chosen option; `choice.effects` is { metricId: delta }
 * @returns {object} new state
 *
 * Resolution order (intentional and tested):
 *   1. reject if not actively playing
 *   2. apply + clamp metric deltas
 *   3. advance the day by exactly 1
 *   4. bump per-location + global answer counters
 *   5. lock the location if it just hit the consecutive cap
 *   6. unlock any locations that have met their unlock threshold
 *   7. decrement the insight counter (if active)
 *   8. transition into endgame if we crossed ENDGAME_START_DAY
 *   9. check win (survived past FINAL_DAY)
 *  10. check fatal metric -> DEATH_PENDING
 */
export function applyChoice(state, card, choice) {
  if (state.status !== STATUS.PLAYING) return state;

  // Defensive: a locked location can never be answered (the 5-answer cap). This
  // keeps the unlock counter honest even if the UI ever lets a stale card slip
  // through, since otherwise repeat answers here would count toward its unlock.
  if (state.phase === PHASE.STANDARD && card?.location && isLocationLocked(state, card.location)) {
    return state;
  }

  const locId = state.phase === PHASE.ENDGAME ? ENDGAME_LOCATION_ID : card.location;

  // 2. metrics: apply the choice (negatives scaled up by the progressive
  //    difficulty), then any active favor buff (the UN floor) so a favor can
  //    still save you from a fatal blow this turn.
  let metrics = { ...state.metrics };
  const effects = choice.effects || {};
  for (const id of METRIC_IDS) {
    if (effects[id]) metrics[id] = clampMetric(metrics[id] + effectiveDelta(effects[id], state.totalAnswered));
  }
  metrics = applySustainedFavors(state.metrics, metrics, state.activeFavors, state.unSupportFrozen);

  // 3–4. clocks & counters
  const day = state.day + 1;
  const totalAnswered = state.totalAnswered + 1;
  const activeFavors = decayFavors(state.activeFavors); // tick each active favor's countdown

  let next = {
    ...state,
    metrics,
    day,
    totalAnswered,
    insightRemaining: Math.max(0, state.insightRemaining - 1),
    activeFavors,
    // When UN Stabilisation expires, release the frozen pillars.
    unSupportFrozen: activeFavors.un_support ? state.unSupportFrozen : {},
    history: appendHistory(state.history, {
      day: state.day,
      location: locId,
      cardId: card.id,
      choiceId: choice.id,
      effects,
    }),
  };

  // 5. per-location consecutive cap -> lock (standard phase only). A locked
  //    office stays closed until the player Sleeps — there is no unlock-by-
  //    answering-elsewhere; Sleep is the only thing that reopens the map.
  if (state.phase === PHASE.STANDARD) {
    const loc = state.locations[locId];
    const answered = (loc?.answered || 0) + 1;
    const justLocked = answered >= MAX_CONSECUTIVE_PER_LOCATION;
    next.locations = {
      ...state.locations,
      [locId]: {
        answered: justLocked ? 0 : answered,
        lockedAtTotal: justLocked ? totalAnswered : loc.lockedAtTotal,
      },
    };
  } else {
    // endgame: advance the linear cursor
    next.endgameCursor = state.endgameCursor + 1;
  }

  // 7. unlock one random favor every POWERUP_INTERVAL answers (fires the popup)
  if (totalAnswered % POWERUP_INTERVAL === 0) {
    const id = pickLockedFavor(next, totalAnswered);
    if (id) next = { ...next, unlockedFavors: [...next.unlockedFavors, id], favorNotice: id };
  }

  // 8. endgame transition
  if (next.phase === PHASE.STANDARD && next.day >= ENDGAME_START_DAY) {
    next = enterEndgame(next);
  }

  // 9. survival win check — surviving past the final day
  if (next.day > FINAL_DAY) {
    return finishRun(next);
  }

  // 10. fatal metric check -> record the removal and resolve by mode
  return resolveFatal(next);
}

/**
 * If any pillar sits at a fatal edge (0, or overflowed to 120), record the
 * removal and resolve it by mode: CAMPAIGN ends instantly, STORY pauses for a
 * revive unless the rate limits have been breached. No-op if nothing is fatal.
 * Shared by applyChoice and sleep.
 */
function resolveFatal(state) {
  const fatal = findFatalMetric(state.metrics);
  if (!fatal) return state;
  const deaths = [...state.deaths, state.day];
  const next = { ...state, deaths };
  if (next.mode === MODES.CAMPAIGN) return endCampaign(next, fatal);
  if (exceedsDeathLimit(deaths)) return endByPurge(next, fatal);
  return { ...next, status: STATUS.DEATH_PENDING, pendingDeath: fatal };
}

// ── Sleep: reset the week's office locks, at the cost of a random ±shift ──────

/**
 * Sleep through the week. Clears every location's 5-answer lock so the player
 * can work any office again — but the night shifts every pillar by ±SLEEP_DELTA
 * at random (a swing that can itself be fatal). Does not advance the day.
 *
 * @param {object} state
 * @param {number[]} rolls  one sign (+1/-1) per metric, in METRIC_IDS order.
 *                          The hook supplies real randomness; the engine stays pure.
 */
export function sleep(state, rolls = []) {
  if (state.status !== STATUS.PLAYING || state.phase !== PHASE.STANDARD) return state;
  const metrics = { ...state.metrics };
  METRIC_IDS.forEach((id, i) => {
    const sign = rolls[i] < 0 ? -1 : 1;
    metrics[id] = clampMetric(metrics[id] + sign * SLEEP_DELTA);
  });
  const locations = Object.fromEntries(LOCATION_IDS.map((id) => [id, { answered: 0, lockedAtTotal: null }]));
  return resolveFatal({ ...state, metrics, locations });
}

// ── Lobby & Trade: spend TRADE_COST of Finance/Military for TRADE_GAIN anywhere ─
// You lobby with money or muscle: sacrifice 4 Finance OR 4 Military to buy 1
// point on any other pillar.

export function canTrade(state, fromId, toId) {
  if (state.status !== STATUS.PLAYING) return false;
  if (!TRADE_SOURCES.includes(fromId)) return false; // only FI / MI can be spent
  if (fromId === toId) return false;
  if (!METRIC_IDS.includes(toId)) return false;
  if ((state.metrics[fromId] ?? 0) < TRADE_COST + 1) return false; // keep the source alive
  return true;
}

/** Spend TRADE_COST off `fromId` (FI/MI) and add TRADE_GAIN to any `toId`. */
export function trade(state, fromId, toId) {
  if (!canTrade(state, fromId, toId)) return state;
  const metrics = { ...state.metrics };
  metrics[fromId] = clampMetric(metrics[fromId] - TRADE_COST);
  // Never let a free trade detonate an overflow; stop just below the fatal edge.
  metrics[toId] = Math.min(OVERFLOW_FATAL - 1, metrics[toId] + TRADE_GAIN);
  return { ...state, metrics };
}

function enterEndgame(state) {
  // Lock the whole map and reset cursors; metrics & day carry over.
  return {
    ...state,
    phase: PHASE.ENDGAME,
    endgameCursor: 0,
    locations: Object.fromEntries(
      LOCATION_IDS.map((id) => [id, { answered: 0, lockedAtTotal: state.totalAnswered }]),
    ),
  };
}

function finishRun(state) {
  const average = metricAverage(state.metrics);
  const won = average > WIN_AVERAGE_THRESHOLD;
  return {
    ...state,
    status: won ? STATUS.WON : STATUS.GAME_OVER,
    finalResult: { won, average, metrics: { ...state.metrics } },
  };
}

// ── Death / revival ──────────────────────────────────────────────────────────

/** Total removals so far. */
export function deathCount(state) {
  return state.deaths.length;
}

/**
 * Removals counted within `days` days of the latest one (inclusive span). So
 * removals on days 5, 15, 25 count as 3 "within 20 days" (25 - 5 = 20).
 */
export function deathsWithin(deaths, days) {
  if (deaths.length === 0) return 0;
  const latest = deaths[deaths.length - 1];
  return deaths.filter((d) => latest - d <= days).length;
}

/**
 * Does the removal history end the run? Returns the breached condition or null:
 *   { total: MAX_TOTAL_REVIVES }  — lifetime revive cap exhausted, or
 *   { deaths, days }              — too many removals in a short span.
 * The lifetime cap is checked first.
 */
export function exceedsDeathLimit(deaths) {
  // You get MAX_TOTAL_REVIVES revives; the removal *after* that (the 26th) ends it.
  if (deaths.length > MAX_TOTAL_REVIVES) return { total: MAX_TOTAL_REVIVES };
  for (const rule of DEATH_LIMITS) {
    if (deathsWithin(deaths, rule.days) >= rule.deaths) return rule;
  }
  return null;
}

/** Ad-revives still available before the lifetime cap ends the run. */
export function revivesRemaining(state) {
  // deaths includes the currently-pending removal, which isn't a "used" revive yet.
  const used = Math.max(0, state.deaths.length - 1);
  return Math.max(0, MAX_TOTAL_REVIVES - used);
}

/** Average days survived per removal — the headline leaderboard stat. */
export function daysPerRemoval(state) {
  const n = state.deaths.length;
  return n === 0 ? state.day : state.day / n;
}

// A removal is always revivable while DEATH_PENDING — the run only ends through
// the rate-limit (endByPurge) or a voluntary decline.
export function canRevive(state) {
  return state.status === STATUS.DEATH_PENDING;
}

/**
 * Spend a revive: restore the failed pillar to REVIVE_RESET_VALUE (50%) and
 * resume. Records a pendingRevival so the UI can show the contextual recovery
 * scene. Caller must have awarded the ad first.
 */
export function applyRevive(state) {
  if (!canRevive(state)) return state;
  const { metric, edge } = state.pendingDeath;
  return {
    ...state,
    metrics: { ...state.metrics, [metric]: REVIVE_RESET_VALUE },
    pendingDeath: null,
    pendingRevival: { metric, edge },
    status: STATUS.PLAYING,
  };
}

/** Acknowledge the revival scene and return to play. */
export function dismissRevival(state) {
  if (!state.pendingRevival) return state;
  return { ...state, pendingRevival: null };
}

/** Decline to revive -> the run ends here. */
export function applyPermanentGameOver(state) {
  return {
    ...state,
    status: STATUS.GAME_OVER,
    finalResult: {
      won: false,
      average: metricAverage(state.metrics),
      metrics: { ...state.metrics },
      cause: state.pendingDeath?.metric ?? null,
    },
  };
}

// CAMPAIGN mode: the first removal is final. The run ends immediately, no revive.
function endCampaign(state, fatal) {
  return {
    ...state,
    status: STATUS.GAME_OVER,
    pendingDeath: null,
    finalResult: {
      won: false,
      average: metricAverage(state.metrics),
      metrics: { ...state.metrics },
      cause: fatal.metric,
      campaign: true, // ended by the one-life rule
    },
  };
}

// Removed too often, too fast: the state collapses and the run is over.
function endByPurge(state, fatal) {
  const breach = exceedsDeathLimit(state.deaths);
  return {
    ...state,
    status: STATUS.GAME_OVER,
    pendingDeath: null,
    finalResult: {
      won: false,
      average: metricAverage(state.metrics),
      metrics: { ...state.metrics },
      cause: fatal.metric,
      purge: breach, // { deaths, days } that triggered the collapse
    },
  };
}

// ── Favors (the power-up buffs) ──────────────────────────────────────────────

/** Can this unlocked favor be applied right now? (Donations need FI below 50.) */
export function canApplyFavor(state, favorId) {
  if (state.status !== STATUS.PLAYING) return false;
  if (!state.unlockedFavors?.includes(favorId)) return false;
  if (favorId === 'finance_fill') return state.metrics.FI < FINANCE_RESET_VALUE;
  return true;
}

/**
 * Apply an unlocked favor, then consume the unlock (it relocks until earned
 * again). Caller awards the ad first.
 *   un_support  — buff: UN floor at 25% for 3 decisions; pillars already below
 *                 25% at activation are protected from dropping (they can still
 *                 rise) for the duration.
 *   finance_fill— instant: Finance restored to 50% (only if it was below 50).
 *   advisor     — buff: Insight (exact deltas) for the next 7 decisions.
 */
export function applyFavor(state, favorId) {
  if (!canApplyFavor(state, favorId)) return state;
  const consumed = state.unlockedFavors.filter((id) => id !== favorId);
  let next = { ...state, unlockedFavors: consumed, favorNotice: null };

  if (favorId === 'un_support') {
    next.activeFavors = { ...state.activeFavors, un_support: UN_SUPPORT_DURATION };
    // Snapshot the pillars already below the floor — they freeze where they are.
    next.unSupportFrozen = {};
    for (const id of METRIC_IDS) {
      if (state.metrics[id] < FAVOR_FLOOR) next.unSupportFrozen[id] = state.metrics[id];
    }
  } else if (favorId === 'advisor') {
    next.activeFavors = { ...state.activeFavors, advisor: ADVISOR_DURATION };
    next.insightRemaining = ADVISOR_DURATION; // light Insight immediately
  } else if (favorId === 'finance_fill') {
    next.metrics = { ...state.metrics, FI: FINANCE_RESET_VALUE }; // instant, no buff
  }
  return next;
}

/** Dismiss the "favor unlocked" popup. */
export function clearFavorNotice(state) {
  if (state.favorNotice == null) return state;
  return { ...state, favorNotice: null };
}

// ── Insight power-up ─────────────────────────────────────────────────────────

/** Grant the Insight window. Caller awards the ad first. */
export function grantInsight(state) {
  if (state.status !== STATUS.PLAYING) return state;
  return { ...state, insightRemaining: INSIGHT_QUESTIONS_GRANTED };
}

export function isInsightActive(state) {
  return state.insightRemaining > 0;
}

// ── History (bounded log) ────────────────────────────────────────────────────

const HISTORY_CAP = 200;
function appendHistory(history, entry) {
  const next = history.length >= HISTORY_CAP ? history.slice(1) : history.slice();
  next.push(entry);
  return next;
}

// ── Migration ────────────────────────────────────────────────────────────────

/**
 * Forward-migrate an older save into the current schema. Keeps players from
 * losing progress when the metric/rule model evolves. Extend the switch as the
 * schema version climbs.
 */
export function migrateState(raw) {
  if (!raw || typeof raw !== 'object') return createInitialState();
  const base = createInitialState();
  // Merge against a fresh state so any missing/renamed keys are backfilled.
  const s = { ...base, ...raw, schemaVersion: SCHEMA_VERSION };

  // Repair fields the UI depends on, in case an old/corrupt save has bad shapes.
  s.metrics = { ...base.metrics, ...(s.metrics && typeof s.metrics === 'object' ? s.metrics : {}) };
  for (const id of METRIC_IDS) {
    const v = Number(s.metrics[id]);
    s.metrics[id] = Number.isFinite(v) ? clampMetric(v) : METRIC_START;
  }
  if (!Array.isArray(s.deaths)) s.deaths = [];
  if (!Array.isArray(s.history)) s.history = [];
  if (s.mode !== MODES.STORY && s.mode !== MODES.CAMPAIGN) s.mode = DEFAULT_MODE;
  // Favor system (replaces the old pending power-up queue).
  if (!Array.isArray(s.unlockedFavors)) s.unlockedFavors = [];
  s.unlockedFavors = s.unlockedFavors.filter((id) => FAVOR_IDS.includes(id));
  if (!s.activeFavors || typeof s.activeFavors !== 'object') s.activeFavors = {};
  if (!s.unSupportFrozen || typeof s.unSupportFrozen !== 'object') s.unSupportFrozen = {};
  if (s.favorNotice != null && !FAVOR_IDS.includes(s.favorNotice)) s.favorNotice = null;
  delete s.pendingPowerUp;
  delete s.powerUpQueue;
  if (!s.locations || typeof s.locations !== 'object') s.locations = base.locations;
  for (const id of LOCATION_IDS) {
    if (!s.locations[id] || typeof s.locations[id] !== 'object') s.locations[id] = { answered: 0, lockedAtTotal: null };
  }
  if (!Object.values(STATUS).includes(s.status)) s.status = STATUS.PLAYING;
  if (!Object.values(PHASE).includes(s.phase)) s.phase = PHASE.STANDARD;
  if (!Number.isFinite(Number(s.day))) s.day = DAY_START;
  if (!Number.isFinite(Number(s.seed))) s.seed = 0; // legacy saves: stable order on resume
  // A pending-death save must carry a usable shape, else clear it.
  if (s.status === STATUS.DEATH_PENDING && (!s.pendingDeath || !s.pendingDeath.metric)) {
    s.status = STATUS.PLAYING;
    s.pendingDeath = null;
  }
  return s;
}
