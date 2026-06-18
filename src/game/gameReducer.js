// Thin reducer that delegates all rules to the pure engine. Keeping the switch
// dumb means the engine stays the single source of truth for game logic.

import {
  createInitialState,
  applyChoice,
  applyRevive,
  dismissRevival,
  applyPermanentGameOver,
  applyFavor,
  clearFavorNotice,
  sleep,
  trade,
  grantInsight,
} from './engine.js';

export const ACTIONS = {
  ANSWER: 'ANSWER', // payload: { card, choice }
  REVIVE: 'REVIVE', // ad already awarded by the caller
  DISMISS_REVIVAL: 'DISMISS_REVIVAL', // acknowledge the recovery scene
  DECLINE_REVIVE: 'DECLINE_REVIVE',
  APPLY_FAVOR: 'APPLY_FAVOR', // payload: { favorId }; ad already awarded
  CLEAR_FAVOR_NOTICE: 'CLEAR_FAVOR_NOTICE',
  SLEEP: 'SLEEP', // payload: { rolls } — per-metric ±1 signs
  TRADE: 'TRADE', // payload: { from, to }
  GRANT_INSIGHT: 'GRANT_INSIGHT', // ad already awarded by the caller
  HYDRATE: 'HYDRATE', // payload: full state loaded from disk/cloud
  RESTART: 'RESTART',
};

export function gameReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ANSWER:
      return applyChoice(state, action.payload.card, action.payload.choice);
    case ACTIONS.REVIVE:
      return applyRevive(state);
    case ACTIONS.DISMISS_REVIVAL:
      return dismissRevival(state);
    case ACTIONS.DECLINE_REVIVE:
      return applyPermanentGameOver(state);
    case ACTIONS.APPLY_FAVOR:
      return applyFavor(state, action.payload.favorId);
    case ACTIONS.CLEAR_FAVOR_NOTICE:
      return clearFavorNotice(state);
    case ACTIONS.SLEEP:
      return sleep(state, action.payload?.rolls);
    case ACTIONS.TRADE:
      return trade(state, action.payload.from, action.payload.to);
    case ACTIONS.GRANT_INSIGHT:
      return grantInsight(state);
    case ACTIONS.HYDRATE:
      return action.payload;
    case ACTIONS.RESTART:
      // Carry the chosen/active mode forward (New Game picks it; Play Again reuses it).
      // A fresh per-run seed (from the hook) reshuffles the whole question order.
      return createInitialState(action.payload?.mode ?? state?.mode, action.payload?.seed);
    default:
      return state;
  }
}
