// Auth wrappers for Google, Facebook, and Email/Password. In OFFLINE_MODE these
// resolve a stable local "guest" identity so the rest of the app is identical.

import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  EmailAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInAnonymously,
  linkWithPopup,
  linkWithCredential,
  signOut as fbSignOut,
  onAuthStateChanged as fbOnAuthStateChanged,
} from 'firebase/auth';
import { auth, OFFLINE_MODE } from './config.js';

const GUEST = { uid: 'guest-local', displayName: 'Guest Leader', email: null, isGuest: true };

export function onAuthStateChanged(cb) {
  if (OFFLINE_MODE) {
    cb(GUEST);
    return () => {};
  }
  return fbOnAuthStateChanged(auth, cb);
}

export async function signInWithGoogle() {
  if (OFFLINE_MODE) return GUEST;
  const res = await signInWithPopup(auth, new GoogleAuthProvider());
  return res.user;
}

// Guest play. Offline this is the local guest; online it uses Firebase anonymous
// auth so the guest has a real uid that can later be UPGRADED by linking a
// Google / Facebook / email account (keeping their saves & rank).
export async function signInAsGuest() {
  if (OFFLINE_MODE) return GUEST;
  const res = await signInAnonymously(auth);
  return res.user;
}

export async function signInWithFacebook() {
  if (OFFLINE_MODE) return GUEST;
  const res = await signInWithPopup(auth, new FacebookAuthProvider());
  return res.user;
}

export async function signInWithEmail(email, password) {
  if (OFFLINE_MODE) return GUEST;
  const res = await signInWithEmailAndPassword(auth, email, password);
  return res.user;
}

export async function registerWithEmail(email, password) {
  if (OFFLINE_MODE) return GUEST;
  const res = await createUserWithEmailAndPassword(auth, email, password);
  return res.user;
}

export async function signOut() {
  if (OFFLINE_MODE) return;
  await fbSignOut(auth);
}

// ── Account linking (online only) ────────────────────────────────────────────
// Attach a new provider to the CURRENT user — e.g. upgrade an anonymous guest,
// or add Facebook to a Google account — without losing their uid, saves or rank.
export async function linkGoogle() {
  if (OFFLINE_MODE || !auth.currentUser) return null;
  const res = await linkWithPopup(auth.currentUser, new GoogleAuthProvider());
  return res.user;
}

export async function linkFacebook() {
  if (OFFLINE_MODE || !auth.currentUser) return null;
  const res = await linkWithPopup(auth.currentUser, new FacebookAuthProvider());
  return res.user;
}

export async function linkEmail(email, password) {
  if (OFFLINE_MODE || !auth.currentUser) return null;
  const cred = EmailAuthProvider.credential(email, password);
  const res = await linkWithCredential(auth.currentUser, cred);
  return res.user;
}

/** Provider ids already linked to the current user (online), e.g. ['google.com']. */
export function linkedProviderIds() {
  if (OFFLINE_MODE || !auth?.currentUser) return [];
  return (auth.currentUser.providerData || []).map((p) => p.providerId);
}
