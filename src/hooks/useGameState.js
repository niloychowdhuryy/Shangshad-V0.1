import { useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react';

import { gameReducer, ACTIONS } from '../game/gameReducer.js';
import { createInitialState, migrateState, metricAverage, daysPerRemoval } from '../game/engine.js';
import { STATUS } from '../game/constants.js';
import { nextCard } from '../game/deck.js';
import { loadDecks } from '../data/decks.js';
import { saveGame, loadGame, submitScore } from '../firebase/firestore.js';
import { loadProfile, saveProfile, leaderboardIdentity } from '../game/profile.js';
import { evaluateLegacy } from '../game/legacy.js';
import { newlyUnlocked } from '../game/achievements.js';
import { triggerRewardedAd, AD_PLACEMENTS } from '../ads/adService.js';

const DECKS = loadDecks();
const AUTOSAVE_DEBOUNCE_MS = 600;

// A fresh per-run seed so every new game / restart reshuffles the question order.
// Generated here (not in the pure engine) and threaded through RESTART.
const newSeed = () => Math.floor(Math.random() * 0xffffffff) >>> 0;

/**
 * The single gameplay orchestrator a screen consumes.
 *
 * Responsibilities:
 *  - hold reducer state
 *  - hydrate from cloud/local on mount, autosave on change (debounced)
 *  - expose the current visible card for the open location
 *  - wrap ad-gated actions (Insight, Revive) so the ad is awarded BEFORE the
 *    state mutation, and refused/skipped ads grant nothing
 *  - submit a leaderboard score exactly once when a run ends
 */
export function useGameState(user, startMode = 'continue', gameMode) {
  const [state, dispatch] = useReducer(gameReducer, undefined, createInitialState);
  const [activeLocation, setActiveLocation] = useState(null); // location panel open
  const [hydrated, setHydrated] = useState(false);
  const [adBusy, setAdBusy] = useState(null); // placement string while an ad runs
  const [awards, setAwards] = useState(null); // { title, newly:[achId] } once a run ends

  const saveTimer = useRef(null);
  const scoreSubmitted = useRef(false);

  // ── Hydrate once we know who the player is ────────────────────────────────
  // startMode === 'new' starts a fresh Day-1 run (overwriting the old save on
  // the first autosave); 'continue' loads the existing save if any.
  useEffect(() => {
    if (!user) return;
    if (startMode === 'new') {
      dispatch({ type: ACTIONS.RESTART, payload: { mode: gameMode, seed: newSeed() } });
      setHydrated(true);
      return;
    }
    let cancelled = false;
    (async () => {
      try {
        const raw = await loadGame(user.uid, gameMode); // mode-specific slot
        if (!cancelled && raw) dispatch({ type: ACTIONS.HYDRATE, payload: migrateState(raw) });
      } catch (e) {
        console.warn('[shangshad] load failed, starting fresh:', e);
      } finally {
        if (!cancelled) setHydrated(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [user, startMode, gameMode]);

  // ── Debounced autosave ────────────────────────────────────────────────────
  useEffect(() => {
    if (!user || !hydrated) return;
    clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      saveGame(user.uid, state.mode, state).catch((e) => console.warn('[shangshad] save failed:', e));
    }, AUTOSAVE_DEBOUNCE_MS);
    return () => clearTimeout(saveTimer.current);
  }, [state, user, hydrated]);

  // ── Submit score once when the run terminates ─────────────────────────────
  useEffect(() => {
    const terminal = state.status === STATUS.WON || state.status === STATUS.GAME_OVER;
    if (terminal && user && !scoreSubmitted.current) {
      scoreSubmitted.current = true;
      // Leaderboard is ranked by days survived; we also store removals and the
      // average days-per-removal stat.
      const deaths = state.deaths.length;
      const identity = leaderboardIdentity(loadProfile(user)); // honours the privacy toggle
      submitScore({
        uid: user.uid,
        ...identity, // displayName, username, photoURL, avatarSeed, publicProfile
        mode: state.mode, // routes to the campaign vs storyline board
        days: state.day,
        deaths,
        avgPerRemoval: Number(daysPerRemoval(state).toFixed(1)),
        average: Number(metricAverage(state.metrics).toFixed(1)),
        won: state.status === STATUS.WON,
      }).catch((e) => console.warn('[shangshad] score submit failed:', e));

      // ── Meta-progression: record the leader title + unlock achievements ──
      try {
        const { title } = evaluateLegacy(state.metrics, state.day);
        const profile = loadProfile(user);
        const prevAch = Array.isArray(profile.achievements) ? profile.achievements : [];
        const titles = new Set(Array.isArray(profile.titlesEarned) ? profile.titlesEarned : []);
        titles.add(title);
        const totalRuns = (profile.runsPlayed || 0) + 1;
        const ctx = {
          won: state.status === STATUS.WON,
          days: state.day,
          mode: state.mode,
          title,
          deaths,
          distinctTitles: titles.size,
          totalRuns,
        };
        const fresh = newlyUnlocked(ctx, prevAch);
        saveProfile(user.uid, {
          achievements: [...new Set([...prevAch, ...fresh])],
          titlesEarned: [...titles],
          runsPlayed: totalRuns,
          bestDays: Math.max(profile.bestDays || 0, state.day),
        });
        setAwards({ title, newly: fresh });
      } catch (e) {
        console.warn('[shangshad] achievement update failed:', e);
      }
    }
  }, [state.status, state.metrics, state.day, user]);

  // ── Derived: the card currently in front of the player ────────────────────
  const card = useMemo(
    () => nextCard(state, DECKS, activeLocation),
    [state, activeLocation],
  );

  // ── Actions ───────────────────────────────────────────────────────────────

  const answer = useCallback(
    (choiceSide) => {
      if (!card) return;
      const choice = choiceSide === 'left' ? card.left : card.right;
      dispatch({ type: ACTIONS.ANSWER, payload: { card, choice } });
    },
    [card],
  );

  // Insight: watch ad -> if completed, grant the 10-question window.
  const watchAdForInsight = useCallback(async (onProgress) => {
    setAdBusy(AD_PLACEMENTS.INSIGHT);
    try {
      const { completed } = await triggerRewardedAd(AD_PLACEMENTS.INSIGHT, onProgress);
      if (completed) dispatch({ type: ACTIONS.GRANT_INSIGHT });
      return completed;
    } finally {
      setAdBusy(null);
    }
  }, []);

  // Revive: watch ad -> if completed, reset failed metric to 40% and resume.
  const watchAdForRevive = useCallback(async (onProgress) => {
    setAdBusy(AD_PLACEMENTS.REVIVE);
    try {
      const { completed } = await triggerRewardedAd(AD_PLACEMENTS.REVIVE, onProgress);
      if (completed) dispatch({ type: ACTIONS.REVIVE });
      return completed;
    } finally {
      setAdBusy(null);
    }
  }, []);

  const declineRevive = useCallback(() => dispatch({ type: ACTIONS.DECLINE_REVIVE }), []);
  const dismissRevival = useCallback(() => dispatch({ type: ACTIONS.DISMISS_REVIVAL }), []);

  // Favor: applying an unlocked favor requires watching a rewarded ad. On
  // completion it becomes an active buff for the next 7 decisions.
  const applyFavor = useCallback(async (favorId, onProgress) => {
    setAdBusy(AD_PLACEMENTS.POWERUP);
    try {
      const { completed } = await triggerRewardedAd(AD_PLACEMENTS.POWERUP, onProgress);
      if (completed) dispatch({ type: ACTIONS.APPLY_FAVOR, payload: { favorId } });
      return completed;
    } finally {
      setAdBusy(null);
    }
  }, []);
  const clearFavorNotice = useCallback(() => dispatch({ type: ACTIONS.CLEAR_FAVOR_NOTICE }), []);

  // Sleep: reset the office locks at the cost of a random ±5 to every pillar.
  // Randomness lives here so the engine stays pure.
  const sleep = useCallback(() => {
    const rolls = Array.from({ length: 6 }, () => (Math.random() < 0.5 ? -1 : 1));
    dispatch({ type: ACTIONS.SLEEP, payload: { rolls } });
  }, []);

  // "Rest easy": watch a rewarded ad to reopen every office with NO pillar shake
  // (zero rolls). Reward granted only on full completion.
  const watchAdForSleep = useCallback(async (onProgress) => {
    setAdBusy(AD_PLACEMENTS.SLEEP);
    try {
      const { completed } = await triggerRewardedAd(AD_PLACEMENTS.SLEEP, onProgress);
      if (completed) dispatch({ type: ACTIONS.SLEEP, payload: { rolls: [0, 0, 0, 0, 0, 0] } });
      return completed;
    } finally {
      setAdBusy(null);
    }
  }, []);

  // Trade: sacrifice a point of any pillar for +4 Finance or +4 Military. Free.
  const trade = useCallback((from, to) => dispatch({ type: ACTIONS.TRADE, payload: { from, to } }), []);

  const restart = useCallback(() => {
    scoreSubmitted.current = false;
    setActiveLocation(null);
    setAwards(null);
    dispatch({ type: ACTIONS.RESTART, payload: { seed: newSeed() } });
  }, []);

  // Leaving a location panel just clears the open panel; locks live in state.
  const openLocation = useCallback((locId) => setActiveLocation(locId), []);
  const closeLocation = useCallback(() => setActiveLocation(null), []);

  return {
    state,
    card,
    activeLocation,
    hydrated,
    adBusy,
    awards,
    // actions
    answer,
    watchAdForInsight,
    watchAdForRevive,
    declineRevive,
    dismissRevival,
    applyFavor,
    clearFavorNotice,
    sleep,
    watchAdForSleep,
    trade,
    restart,
    openLocation,
    closeLocation,
  };
}
