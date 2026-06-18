// Card selection. The engine owns the *rules*; this module owns *which card you
// see next*. Separated so the deck source (local JSON now, Firestore later) can
// change without touching gameplay logic.

import { ENDGAME_LOCATION_ID, PHASE } from './constants.js';

// Deterministic 32-bit hash of (seed, cardId) — an FNV-1a variant. Used to give
// every card a per-run "rank" so the draw order is a fresh permutation each run
// (different seed) yet stable within a run (so re-renders don't reshuffle).
function rankOf(seed, id) {
  let h = (2166136261 ^ (seed >>> 0)) >>> 0;
  for (let i = 0; i < id.length; i++) {
    h ^= id.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h >>> 0;
}

/**
 * Pick the next card for a location, ARC-AWARE so multi-stage storylines play in
 * order and resolve. Rules:
 *   1. If an arc is in progress (some of its cards seen, some not), continue it —
 *      its lowest unseen stage comes next, so the crisis escalates and pays off.
 *   2. Otherwise the seed picks which fresh arc opens (its first stage), giving a
 *      different but coherent run each time.
 *   3. When the whole deck is exhausted, recycle (continuity resets), rotating by
 *      `salt` so the recycled order still varies.
 *
 * @param {Array}  deck     cards for this location
 * @param {Set}    seenIds  card ids already answered (from history)
 * @param {number} seed     per-run seed (state.seed) — fixes the arc order
 * @param {number} salt     rotating value (e.g. totalAnswered) for the recycle case
 */
export function pickCard(deck, seenIds, seed = 0, salt = 0) {
  if (!deck || deck.length === 0) return null;
  const fresh = deck.filter((c) => !seenIds.has(c.id));
  if (fresh.length === 0) {
    const rs = (seed ^ Math.imul(salt + 1, 2654435761)) >>> 0;
    return lowestRank(deck, rs);
  }

  const arcOf = (c) => c.arc || c.id; // cards with no arc are their own one-shot

  // Arcs already opened this run (at least one card answered).
  const started = new Set();
  for (const c of deck) if (seenIds.has(c.id)) started.add(arcOf(c));

  // Prefer continuing an in-progress arc; if none, any fresh arc may open.
  const continuing = fresh.filter((c) => started.has(arcOf(c)));
  const candidates = continuing.length > 0 ? continuing : fresh;

  // For each candidate arc, the next card is its lowest unseen stage.
  const nextByArc = new Map();
  for (const c of candidates) {
    const a = arcOf(c);
    const cur = nextByArc.get(a);
    const cs = c.stage ?? 0;
    if (!cur || cs < (cur.stage ?? 0) || (cs === (cur.stage ?? 0) && c.id < cur.id)) {
      nextByArc.set(a, c);
    }
  }

  // The seed chooses which arc plays (stable within a run, varies across runs).
  let best = null;
  let bestR = Infinity;
  for (const [a, c] of nextByArc) {
    const r = rankOf(seed, a);
    if (r < bestR) {
      bestR = r;
      best = c;
    }
  }
  return best;
}

function lowestRank(pool, seed) {
  let best = pool[0];
  let bestR = rankOf(seed, best.id);
  for (let i = 1; i < pool.length; i++) {
    const r = rankOf(seed, pool[i].id);
    if (r < bestR) {
      bestR = r;
      best = pool[i];
    }
  }
  return best;
}

/** Build the set of card ids the player has resolved, optionally per location. */
export function seenCardIds(history, location) {
  const set = new Set();
  for (const h of history) {
    if (!location || h.location === location) set.add(h.cardId);
  }
  return set;
}

/**
 * Resolve the next card to show given full game state + the loaded decks.
 *
 * @param {object} state            game state
 * @param {object} decksByLocation  { home: [...], endgame: [...], ... }
 * @param {string|null} activeLocation  location the player has open (standard phase)
 */
export function nextCard(state, decksByLocation, activeLocation) {
  if (state.phase === PHASE.ENDGAME) {
    const deck = decksByLocation[ENDGAME_LOCATION_ID] || [];
    // Linear, ordered march through the election deck.
    return deck[state.endgameCursor] ?? deck[deck.length - 1] ?? null;
  }
  if (!activeLocation) return null;
  const deck = decksByLocation[activeLocation] || [];
  const seen = seenCardIds(state.history, activeLocation);
  return pickCard(deck, seen, state.seed ?? 0, state.totalAnswered);
}
