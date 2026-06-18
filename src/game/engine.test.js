import { describe, it, expect } from 'vitest';
import {
  createInitialState,
  applyChoice,
  applyRevive,
  applyPermanentGameOver,
  applyFavor,
  canApplyFavor,
  sleep,
  trade,
  isFavorActive,
  isFavorUnlocked,
  favorRemaining,
  isOverflowing,
  difficultyFactor,
  effectiveDelta,
  grantInsight,
  isLocationLocked,
  allLocationsLocked,
  findFatalMetric,
  metricAverage,
  exceedsDeathLimit,
  migrateState,
} from './engine.js';
import {
  MAX_CONSECUTIVE_PER_LOCATION,
  LOCATION_IDS,
  INSIGHT_QUESTIONS_GRANTED,
  REVIVE_RESET_VALUE,
  FAVOR_FLOOR,
  UN_SUPPORT_DURATION,
  ADVISOR_DURATION,
  FINANCE_RESET_VALUE,
  FAVOR_IDS,
  MAX_TOTAL_REVIVES,
  POWERUP_INTERVAL,
  OVERFLOW_THRESHOLD,
  OVERFLOW_FATAL,
  TRADE_COST,
  TRADE_GAIN,
  SLEEP_DELTA,
  DIFFICULTY_RAMP_EVERY,
  DIFFICULTY_STEP,
  ENDGAME_START_DAY,
  FINAL_DAY,
  STATUS,
  PHASE,
  MODES,
  DEFAULT_MODE,
  STARTUP_POWERUPS,
} from './constants.js';

// Helpers to fabricate cards/choices with arbitrary effects.
const card = (location, effects = {}) => ({ id: `${location}-x`, location, left: { id: 'a', effects }, right: { id: 'b', effects: {} } });
const choose = (effects = {}) => ({ id: 'a', effects });
const answerAt = (s, location, effects = {}) => applyChoice(s, card(location, effects), choose(effects));

describe('clock & counters', () => {
  it('advances the day by exactly 1 per answer', () => {
    let s = createInitialState();
    expect(s.day).toBe(1);
    s = answerAt(s, 'home');
    expect(s.day).toBe(2);
    expect(s.totalAnswered).toBe(1);
  });

  it('clamps metric deltas to [0, OVERFLOW_FATAL]', () => {
    let s = createInitialState();
    s = answerAt(s, 'finance', { FI: +999 });
    expect(s.metrics.FI).toBe(OVERFLOW_FATAL); // 120, the overflow ceiling
    expect(OVERFLOW_FATAL).toBe(120);
  });
});

describe('location locking', () => {
  it('locks a location after 5 consecutive answers', () => {
    let s = createInitialState();
    for (let i = 0; i < MAX_CONSECUTIVE_PER_LOCATION; i++) s = answerAt(s, 'home');
    expect(isLocationLocked(s, 'home')).toBe(true);
  });

  it('refuses further answers at a locked location (no-op)', () => {
    let s = createInitialState();
    for (let i = 0; i < MAX_CONSECUTIVE_PER_LOCATION; i++) s = answerAt(s, 'home');
    expect(isLocationLocked(s, 'home')).toBe(true);
    const before = s;
    const after = answerAt(s, 'home'); // attempt a 6th at the locked location
    expect(after).toBe(before); // unchanged: no day advance
    expect(after.day).toBe(before.day);
  });

  it('stays locked no matter how many answers are made elsewhere', () => {
    let s = createInitialState();
    for (let i = 0; i < MAX_CONSECUTIVE_PER_LOCATION; i++) s = answerAt(s, 'home');
    expect(isLocationLocked(s, 'home')).toBe(true);
    // Answering elsewhere never reopens it — only Sleep does.
    for (let i = 0; i < 10; i++) s = answerAt(s, 'party');
    expect(isLocationLocked(s, 'home')).toBe(true);
  });

  it('Sleep reopens every locked office', () => {
    let s = createInitialState();
    for (let i = 0; i < MAX_CONSECUTIVE_PER_LOCATION; i++) s = answerAt(s, 'home');
    for (let i = 0; i < MAX_CONSECUTIVE_PER_LOCATION; i++) s = answerAt(s, 'party');
    expect(isLocationLocked(s, 'home')).toBe(true);
    expect(isLocationLocked(s, 'party')).toBe(true);
    s = sleep(s, [1, 1, 1, 1, 1, 1]);
    expect(isLocationLocked(s, 'home')).toBe(false);
    expect(isLocationLocked(s, 'party')).toBe(false);
  });

  it('allLocationsLocked flips true when every office is closed, false after Sleep', () => {
    let s = createInitialState();
    expect(allLocationsLocked(s)).toBe(false);
    for (const id of LOCATION_IDS) {
      for (let i = 0; i < MAX_CONSECUTIVE_PER_LOCATION; i++) s = answerAt(s, id);
    }
    expect(allLocationsLocked(s)).toBe(true);
    s = sleep(s, [1, 1, 1, 1, 1, 1]);
    expect(allLocationsLocked(s)).toBe(false);
  });
});

describe('insight power-up', () => {
  it('grants a 10-question window that decrements per answer', () => {
    let s = grantInsight(createInitialState());
    expect(s.insightRemaining).toBe(INSIGHT_QUESTIONS_GRANTED);
    s = answerAt(s, 'home');
    expect(s.insightRemaining).toBe(INSIGHT_QUESTIONS_GRANTED - 1);
  });

  it('never goes below zero', () => {
    let s = createInitialState();
    s = answerAt(s, 'home');
    expect(s.insightRemaining).toBe(0);
  });
});

describe('death & revival', () => {
  it('records a removal and enters DEATH_PENDING when a metric hits an edge', () => {
    let s = createInitialState();
    s = answerAt(s, 'finance', { FI: -50 }); // 50 -> 0
    expect(s.status).toBe(STATUS.DEATH_PENDING);
    expect(s.pendingDeath.metric).toBe('FI');
    expect(s.pendingDeath.edge).toBe('low');
    expect(s.deaths).toEqual([s.day]); // the removal day was recorded
  });

  it('revive restores the failed pillar to 50% and queues the recovery scene', () => {
    let s = createInitialState();
    s = { ...s, metrics: { ...s.metrics, GL: 0 }, deaths: [10], status: STATUS.DEATH_PENDING, pendingDeath: { metric: 'GL', value: 0, edge: 'low' } };
    s = applyRevive(s);
    expect(s.metrics.GL).toBe(REVIVE_RESET_VALUE);
    expect(REVIVE_RESET_VALUE).toBe(50);
    expect(s.status).toBe(STATUS.PLAYING);
    expect(s.pendingRevival).toEqual({ metric: 'GL', edge: 'low' });
  });

  it('rate limit: 3 removals within 20 days collapses the run', () => {
    // deaths on days 5, 15, 24 -> within the latest 20-day window there are 3.
    let s = createInitialState();
    s = { ...s, day: 24, deaths: [5, 15], metrics: { ...s.metrics, MI: 5 } };
    s = answerAt(s, 'interior', { MI: -10 }); // MI -> 0 at day 25, deaths -> [5,15,25]
    expect(s.deaths).toEqual([5, 15, 25]);
    expect(s.status).toBe(STATUS.GAME_OVER); // restart, no revive offered
    expect(s.finalResult.purge).toEqual({ deaths: 3, days: 20 });
  });

  it('rate limit: removals spread out do NOT collapse the run', () => {
    // 3 removals across 60 days -> never 3-in-20 nor 5-in-50.
    expect(exceedsDeathLimit([1, 30, 60])).toBeNull();
    let s = createInitialState();
    s = { ...s, day: 60, deaths: [1, 30], metrics: { ...s.metrics, EN: 5 } };
    s = answerAt(s, 'environment', { EN: -10 }); // EN -> 0 at day 61
    expect(s.status).toBe(STATUS.DEATH_PENDING); // still revivable
  });

  it('rate limit: 5 removals within 50 days collapses the run', () => {
    expect(exceedsDeathLimit([10, 20, 30, 40, 55])).toEqual({ deaths: 5, days: 50 });
  });

  it('lifetime cap: the run ends after MAX_TOTAL_REVIVES revives are spent', () => {
    // Removals spaced far apart (no windowed breach). 25 removals are still
    // revivable; the 26th ends the run.
    const spaced = (n) => Array.from({ length: n }, (_, i) => 1 + i * 100);
    expect(exceedsDeathLimit(spaced(MAX_TOTAL_REVIVES))).toBeNull(); // 25 ok
    expect(exceedsDeathLimit(spaced(MAX_TOTAL_REVIVES + 1))).toEqual({ total: MAX_TOTAL_REVIVES }); // 26th
  });

  it('declining a revive ends the run', () => {
    let s = createInitialState();
    s = { ...s, status: STATUS.DEATH_PENDING, pendingDeath: { metric: 'FI', value: 0, edge: 'low' } };
    expect(applyPermanentGameOver(s).status).toBe(STATUS.GAME_OVER);
  });
});

describe('favors', () => {
  const locs = ['home', 'party', 'finance', 'un', 'interior', 'environment', 'resources'];

  it('unlocks one favor every POWERUP_INTERVAL answers, with a notice', () => {
    let s = createInitialState(); // story: nothing unlocked at first
    expect(s.unlockedFavors).toEqual([]);
    for (let i = 0; i < POWERUP_INTERVAL - 1; i++) s = answerAt(s, locs[i % locs.length]);
    expect(s.unlockedFavors).toEqual([]); // 14 answers — not yet
    s = answerAt(s, locs[(POWERUP_INTERVAL - 1) % locs.length]); // the 15th
    expect(s.unlockedFavors.length).toBe(1);
    expect(FAVOR_IDS).toContain(s.favorNotice);
  });

  it('advisor lights Insight for ADVISOR_DURATION decisions and consumes the unlock', () => {
    let s = { ...createInitialState(), unlockedFavors: ['advisor'] };
    s = applyFavor(s, 'advisor');
    expect(isFavorActive(s, 'advisor')).toBe(true);
    expect(favorRemaining(s, 'advisor')).toBe(ADVISOR_DURATION);
    expect(s.insightRemaining).toBe(ADVISOR_DURATION);
    expect(isFavorUnlocked(s, 'advisor')).toBe(false); // consumed
  });

  it('UN stabilisation floors pillars at 25 and protects already-low pillars from dropping (but lets them rise)', () => {
    let s = { ...createInitialState(), unlockedFavors: ['un_support'], metrics: { FI: 27, GL: 80, MI: 50, RE: 50, EN: 10, FA: 50 } };
    s = applyFavor(s, 'un_support');
    expect(favorRemaining(s, 'un_support')).toBe(UN_SUPPORT_DURATION);
    expect(s.unSupportFrozen).toEqual({ EN: 10 }); // EN was the only pillar below 25
    // FI 27 (>=25) would drop below 25 -> held at the floor; EN (protected) can't drop.
    s = answerAt(s, 'home', { FI: -10, EN: -3 });
    expect(s.metrics.FI).toBe(FAVOR_FLOOR); // 25
    expect(s.metrics.EN).toBe(10); // protected from the loss
    expect(s.metrics.GL).toBe(80);
    // A protected pillar CAN still rise.
    s = answerAt(s, 'party', { EN: 8 });
    expect(s.metrics.EN).toBe(18);
  });

  it('UN stabilisation protects from drops for its duration, then releases', () => {
    let s = { ...createInitialState(), unlockedFavors: ['un_support'], metrics: { ...createInitialState().metrics, EN: 10 } };
    s = applyFavor(s, 'un_support');
    s = answerAt(s, 'home', { EN: -2 }); // protected -> stays 10
    s = answerAt(s, 'party', { EN: -2 }); // 10
    s = answerAt(s, 'un', { EN: -2 }); // 10, then the favor expires
    expect(s.metrics.EN).toBe(10);
    expect(isFavorActive(s, 'un_support')).toBe(false);
    expect(s.unSupportFrozen).toEqual({}); // released
    s = answerAt(s, 'finance', { EN: -2 }); // no longer protected -> drops
    expect(s.metrics.EN).toBe(8);
  });

  it('foreign donations restore Finance to 50 (and only when it is below 50)', () => {
    let low = { ...createInitialState(), unlockedFavors: ['finance_fill'], metrics: { ...createInitialState().metrics, FI: 8 } };
    expect(canApplyFavor(low, 'finance_fill')).toBe(true);
    low = applyFavor(low, 'finance_fill');
    expect(low.metrics.FI).toBe(FINANCE_RESET_VALUE);
    expect(isFavorActive(low, 'finance_fill')).toBe(false); // instant, not a buff

    const high = { ...createInitialState(), unlockedFavors: ['finance_fill'], metrics: { ...createInitialState().metrics, FI: 70 } };
    expect(canApplyFavor(high, 'finance_fill')).toBe(false); // FI already >= 50
    expect(applyFavor(high, 'finance_fill')).toBe(high); // no-op
  });

  it('the UN buff expires after UN_SUPPORT_DURATION decisions', () => {
    let s = { ...createInitialState(), unlockedFavors: ['un_support'] };
    s = applyFavor(s, 'un_support');
    for (let i = 0; i < UN_SUPPORT_DURATION; i++) s = answerAt(s, locs[i % locs.length]);
    expect(isFavorActive(s, 'un_support')).toBe(false);
  });
});

describe('endgame transition & win condition', () => {
  it('flips to ENDGAME phase and locks the map at day 1801', () => {
    let s = createInitialState();
    s = { ...s, day: ENDGAME_START_DAY - 1 }; // next answer reaches 1801
    s = answerAt(s, 'home');
    expect(s.day).toBe(ENDGAME_START_DAY);
    expect(s.phase).toBe(PHASE.ENDGAME);
    expect(isLocationLocked(s, 'home')).toBe(true);
  });

  it('wins when surviving past day 2000 with average > 50', () => {
    let s = createInitialState();
    s = { ...s, day: FINAL_DAY, phase: PHASE.ENDGAME, metrics: { FI: 60, GL: 60, MI: 60, RE: 60, EN: 60, FA: 60 } };
    s = answerAt(s, 'endgame');
    expect(s.day).toBe(FINAL_DAY + 1);
    expect(s.status).toBe(STATUS.WON);
    expect(s.finalResult.average).toBeGreaterThan(50);
  });

  it('loses the election at exactly 50 average (must be strictly above)', () => {
    let s = createInitialState();
    s = { ...s, day: FINAL_DAY, phase: PHASE.ENDGAME, metrics: { FI: 50, GL: 50, MI: 50, RE: 50, EN: 50, FA: 50 } };
    s = answerAt(s, 'endgame');
    expect(s.status).toBe(STATUS.GAME_OVER);
    expect(metricAverage(s.metrics)).toBe(50);
  });
});

describe('game modes', () => {
  it('defaults to story mode', () => {
    expect(createInitialState().mode).toBe(DEFAULT_MODE);
    expect(DEFAULT_MODE).toBe(MODES.STORY);
  });

  it('campaign unlocks all three favors from the start; story starts with none', () => {
    const c = createInitialState(MODES.CAMPAIGN);
    expect(c.mode).toBe(MODES.CAMPAIGN);
    expect([...c.unlockedFavors].sort()).toEqual([...STARTUP_POWERUPS].sort());
    expect(STARTUP_POWERUPS.length).toBe(3);
    expect(createInitialState(MODES.STORY).unlockedFavors).toEqual([]);
  });

  it('campaign: the FIRST removal ends the run immediately — no revive', () => {
    let s = createInitialState(MODES.CAMPAIGN);
    s = answerAt(s, 'finance', { FI: -50 }); // 50 -> 0
    expect(s.status).toBe(STATUS.GAME_OVER);
    expect(s.pendingDeath).toBeNull();
    expect(s.finalResult.campaign).toBe(true);
    expect(s.finalResult.cause).toBe('FI');
    expect(s.deaths.length).toBe(1);
  });

  it('story: the same removal is revivable, not terminal', () => {
    let s = createInitialState(MODES.STORY);
    s = answerAt(s, 'finance', { FI: -50 });
    expect(s.status).toBe(STATUS.DEATH_PENDING);
  });

  it('migrateState backfills mode + favor fields and drops the legacy queue', () => {
    const old = { day: 5, metrics: { FI: 40 }, pendingPowerUp: 'advisor', powerUpQueue: ['finance_fill'] };
    const s = migrateState(old);
    expect(s.mode).toBe(DEFAULT_MODE);
    expect(Array.isArray(s.unlockedFavors)).toBe(true);
    expect(s.activeFavors).toEqual({});
    expect(s.pendingPowerUp).toBeUndefined();
    expect(s.powerUpQueue).toBeUndefined();
  });
});

describe('overflow (the high edge)', () => {
  it('reaching 100 is overflowing but NOT fatal', () => {
    let s = createInitialState();
    s = answerAt(s, 'finance', { FI: +50 }); // 50 -> 100
    expect(s.metrics.FI).toBe(OVERFLOW_THRESHOLD);
    expect(s.status).toBe(STATUS.PLAYING);
    expect(isOverflowing(s.metrics.FI)).toBe(true);
  });

  it('overflowing all the way to 120 collapses the pillar', () => {
    let s = createInitialState();
    s = { ...s, metrics: { ...s.metrics, MI: 110 } };
    s = answerAt(s, 'party', { MI: +18 }); // 110 -> 120 (clamped)
    expect(s.metrics.MI).toBe(OVERFLOW_FATAL);
    expect(s.status).toBe(STATUS.DEATH_PENDING);
    expect(s.pendingDeath).toEqual({ metric: 'MI', value: OVERFLOW_FATAL, edge: 'high' });
  });
});

describe('sleep', () => {
  const allUp = [1, 1, 1, 1, 1, 1];

  it('resets every office lock', () => {
    let s = createInitialState();
    for (let i = 0; i < MAX_CONSECUTIVE_PER_LOCATION; i++) s = answerAt(s, 'home');
    expect(isLocationLocked(s, 'home')).toBe(true);
    s = sleep(s, allUp);
    expect(isLocationLocked(s, 'home')).toBe(false);
  });

  it('shifts every pillar by ±SLEEP_DELTA per the rolls, without advancing the day', () => {
    let s = createInitialState(); // all 50, day 1
    s = sleep(s, [1, -1, 1, -1, 1, -1]); // FI,GL,MI,RE,EN,FA
    expect(s.metrics.FI).toBe(50 + SLEEP_DELTA);
    expect(s.metrics.GL).toBe(50 - SLEEP_DELTA);
    expect(s.day).toBe(1);
  });
});

describe('lobby & trade', () => {
  it('spends TRADE_COST of Finance/Military for TRADE_GAIN on any pillar', () => {
    let s = createInitialState(); // all 50
    s = trade(s, 'FI', 'EN');
    expect(s.metrics.FI).toBe(50 - TRADE_COST);
    expect(s.metrics.EN).toBe(50 + TRADE_GAIN);
  });

  it('only Finance or Military may be spent', () => {
    const s = createInitialState();
    expect(trade(s, 'EN', 'FI')).toBe(s); // EN is not a spendable source -> no-op
  });

  it('refuses to spend a source down toward collapse', () => {
    const s = { ...createInitialState(), metrics: { ...createInitialState().metrics, MI: TRADE_COST } };
    expect(trade(s, 'MI', 'EN')).toBe(s); // spending would leave 0 -> no-op
  });

  it('never pushes a target into instant overflow death', () => {
    let s = { ...createInitialState(), metrics: { ...createInitialState().metrics, FI: 50, GL: OVERFLOW_FATAL - 1 } };
    s = trade(s, 'FI', 'GL'); // 119 + 1 would be fatal -> capped at 119
    expect(s.metrics.GL).toBe(OVERFLOW_FATAL - 1);
  });
});

describe('progressive difficulty', () => {
  it('is neutral early, then climbs every DIFFICULTY_RAMP_EVERY decisions', () => {
    expect(difficultyFactor(0)).toBe(1);
    expect(difficultyFactor(DIFFICULTY_RAMP_EVERY - 1)).toBe(1);
    expect(difficultyFactor(DIFFICULTY_RAMP_EVERY)).toBeCloseTo(1 + DIFFICULTY_STEP);
  });

  it('effectiveDelta amplifies negatives but never positives', () => {
    expect(effectiveDelta(-10, 0)).toBe(-10);
    expect(effectiveDelta(10, DIFFICULTY_RAMP_EVERY * 9)).toBe(10);
    expect(effectiveDelta(-18, DIFFICULTY_RAMP_EVERY * 5)).toBeLessThan(-18);
  });

  it('applyChoice applies the progressive penalty to negative card effects', () => {
    const total = DIFFICULTY_RAMP_EVERY * 5;
    let s = { ...createInitialState(), totalAnswered: total, metrics: { ...createInitialState().metrics, FI: 90 } };
    s = answerAt(s, 'finance', { FI: -10 });
    // The applied delta is the progressive-penalty delta, not the raw -10.
    expect(s.metrics.FI).toBe(90 + effectiveDelta(-10, total));
    expect(s.metrics.FI).toBeLessThan(80); // and it bites harder than the raw -10
  });
});

describe('fatal detection ordering', () => {
  it('reports the first fatal metric deterministically', () => {
    expect(findFatalMetric({ FI: 0, GL: 120, MI: 50, RE: 50, EN: 50, FA: 50 })).toEqual({ metric: 'FI', value: 0, edge: 'low' });
    expect(findFatalMetric({ FI: 50, GL: 120, MI: 50, RE: 50, EN: 50, FA: 50 })).toEqual({ metric: 'GL', value: OVERFLOW_FATAL, edge: 'high' });
    expect(findFatalMetric({ FI: 50, GL: 100, MI: 50, RE: 50, EN: 50, FA: 50 })).toBeNull(); // 100 overflows, not fatal
  });
});
