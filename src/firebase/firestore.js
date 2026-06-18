// Persistence layer. One interface, two backends:
//   - OFFLINE_MODE  -> window.localStorage
//   - online        -> Firestore (users/{uid}, leaderboard/{uid})
//
// The game never imports Firestore directly; it calls saveGame / loadGame /
// submitScore / fetchLeaderboard so the backend can be swapped freely.

import {
  doc,
  getDoc,
  setDoc,
  collection,
  query,
  where,
  orderBy,
  limit,
  getDocs,
  serverTimestamp,
} from 'firebase/firestore';
import { db, OFFLINE_MODE } from './config.js';
import { MODES, DEFAULT_MODE } from '../game/constants.js';

// Saves are kept PER MODE so a story run and a campaign run never overwrite each
// other. The legacy single-save key folds into the story slot.
const LS_SAVE = (uid, mode) => `regime:save:${uid}:${mode}`;
const LS_SAVE_LEGACY = (uid) => `regime:save:${uid}`;
// All-time board per mode (best run per user) + a rolling log of recent runs the
// weekly board is derived from. campaign = longest run before the single death;
// story = most days governed. Legacy single-board key folds into the story board.
const LS_BOARD = (mode) => `regime:leaderboard:${mode}`;
const LS_RUNS = (mode) => `regime:runs:${mode}`; // recent finished runs, for weekly
const LS_BOARD_LEGACY = 'regime:leaderboard';
const normMode = (m) => (m === MODES.CAMPAIGN ? MODES.CAMPAIGN : MODES.STORY);
const WEEK_MS = 7 * 24 * 60 * 60 * 1000;

// Reduce a list of runs to the best (most days) per user, ranked descending.
function bestPerUser(runs) {
  const by = new Map();
  for (const r of runs) {
    const cur = by.get(r.uid);
    if (!cur || (r.days ?? 0) > (cur.days ?? 0)) by.set(r.uid, r);
  }
  return [...by.values()].sort((a, b) => (b.days ?? 0) - (a.days ?? 0));
}

// ── Save / Load ──────────────────────────────────────────────────────────────

export async function saveGame(uid, mode, state) {
  const m = normMode(mode ?? state?.mode);
  const payload = { ...state, updatedAt: Date.now() };
  if (OFFLINE_MODE) {
    localStorage.setItem(LS_SAVE(uid, m), JSON.stringify(payload));
    return;
  }
  await setDoc(
    doc(db, 'users', uid),
    { [`save_${m}`]: payload, updatedAt: serverTimestamp() },
    { merge: true },
  );
}

export async function loadGame(uid, mode) {
  const m = normMode(mode);
  if (OFFLINE_MODE) {
    let raw = localStorage.getItem(LS_SAVE(uid, m));
    // Migrate the old single save into the story slot the first time it's read.
    if (!raw && m === MODES.STORY) raw = localStorage.getItem(LS_SAVE_LEGACY(uid));
    return raw ? JSON.parse(raw) : null;
  }
  const snap = await getDoc(doc(db, 'users', uid));
  if (!snap.exists()) return null;
  const d = snap.data();
  return d[`save_${m}`] ?? (m === MODES.STORY ? d.save ?? null : null);
}

// ── Leaderboard ──────────────────────────────────────────────────────────────

/**
 * Record a finished run on its mode's board. We keep the best (most days) per
 * user, per mode.
 * @param {object} entry { uid, displayName, mode, days, deaths, avgPerRemoval, average, won }
 */
export async function submitScore(entry) {
  const mode = normMode(entry.mode);
  const record = { ...entry, mode, ts: Date.now() };
  if (OFFLINE_MODE) {
    // 1) all-time best per user
    const key = LS_BOARD(mode);
    const board = JSON.parse(localStorage.getItem(key) || '[]');
    const existing = board.find((e) => e.uid === entry.uid);
    if (!existing || entry.days > (existing.days ?? 0)) {
      const next = board.filter((e) => e.uid !== entry.uid);
      next.push(record);
      next.sort((a, b) => b.days - a.days);
      localStorage.setItem(key, JSON.stringify(next.slice(0, 200)));
    }
    // 2) append to the rolling run log (drives the weekly board)
    const runs = JSON.parse(localStorage.getItem(LS_RUNS(mode)) || '[]');
    runs.push(record);
    const trimmed = runs.filter((r) => Date.now() - (r.ts ?? 0) <= WEEK_MS * 4).slice(-400);
    localStorage.setItem(LS_RUNS(mode), JSON.stringify(trimmed));
    return;
  }
  // Online: per-user all-time doc + an append-only run for the weekly board.
  const ref = doc(db, 'leaderboard', `${mode}:${entry.uid}`);
  const snap = await getDoc(ref);
  if (!snap.exists() || entry.days > (snap.data().days ?? 0)) {
    await setDoc(ref, { ...record, ts: serverTimestamp() });
  }
  await setDoc(doc(db, 'runs', `${mode}:${entry.uid}:${Date.now()}`), { ...record, ts: serverTimestamp() });
}

/**
 * Fetch a ranked board for one mode.
 * @param {string} mode  story | campaign
 * @param {object} opts  { weekly?: boolean, max?: number }
 */
export async function fetchLeaderboard(mode = DEFAULT_MODE, opts = {}) {
  const { weekly = false, max = 100 } = opts;
  const m = normMode(mode);
  if (OFFLINE_MODE) {
    if (weekly) {
      const runs = JSON.parse(localStorage.getItem(LS_RUNS(m)) || '[]');
      const recent = runs.filter((r) => Date.now() - (r.ts ?? 0) <= WEEK_MS);
      return bestPerUser(recent).slice(0, max);
    }
    let board = JSON.parse(localStorage.getItem(LS_BOARD(m)) || '[]');
    // One-time migration: fold the old single board into the story board.
    if (m === MODES.STORY) {
      const legacy = JSON.parse(localStorage.getItem(LS_BOARD_LEGACY) || '[]');
      if (legacy.length) {
        board = bestPerUser([...board, ...legacy.map((e) => ({ ...e, mode: MODES.STORY }))]);
        localStorage.setItem(LS_BOARD(m), JSON.stringify(board.slice(0, 200)));
        localStorage.removeItem(LS_BOARD_LEGACY);
      }
    }
    return board.slice(0, max);
  }
  if (weekly) {
    const weekAgo = Date.now() - WEEK_MS;
    const q = query(collection(db, 'runs'), where('mode', '==', m), orderBy('days', 'desc'), limit(max * 4));
    const snap = await getDocs(q);
    const recent = snap.docs.map((d) => d.data()).filter((r) => {
      const t = r.ts?.toMillis ? r.ts.toMillis() : r.ts;
      return t >= weekAgo;
    });
    return bestPerUser(recent).slice(0, max);
  }
  const q = query(collection(db, 'leaderboard'), where('mode', '==', m), orderBy('days', 'desc'), limit(max));
  const snap = await getDocs(q);
  return snap.docs.map((d) => d.data());
}

/**
 * Top N CAMPAIGN players of the past 7 days — the menu's "Star Leaders".
 * Campaign only (one-life runs), ranked by days survived; Story runs excluded.
 */
export async function fetchWeeklyStars(n = 3) {
  const campaign = await fetchLeaderboard(MODES.CAMPAIGN, { weekly: true, max: 50 });
  return campaign.slice(0, n);
}
