// Auth wrappers for Google, Facebook, and Email/Password. In OFFLINE_MODE these
// resolve a stable local "guest" identity so the rest of the app is identical.

import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
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

// Guest play. Offline this is the local guest; online it would use anonymous
// auth (wired when Firebase is configured).
export async function signInAsGuest() {
  return GUEST;
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
