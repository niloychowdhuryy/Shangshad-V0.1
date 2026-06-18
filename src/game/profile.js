// Player profile: username, leaderboard privacy, avatar, and linked accounts.
// Stored locally (works in OFFLINE_MODE and as a cache otherwise). The leaderboard
// honours `publicProfile`: when off, only the username + a generated avatar are
// shown — never the real name or photo.

const KEY = (uid) => `regime:profile:${uid}`;

export function defaultProfile(user) {
  return {
    username: user?.displayName || (user?.isGuest ? 'Guest Leader' : 'Leader'),
    // Default: real-account players show their name; guests stay private.
    publicProfile: !user?.isGuest && !!user?.displayName,
    avatarSeed: user?.uid || 'seed',
    photoURL: user?.photoURL || null,
    displayName: user?.displayName || null,
    email: user?.email || null,
    // Show the in-game tutorial at the start of each new run (toggle in Settings).
    tutorialEnabled: true,
    // Meta-progression: unlocked achievement ids, the distinct leader titles
    // earned, runs finished, and the best single-run day count.
    achievements: [],
    titlesEarned: [],
    runsPlayed: 0,
    bestDays: 0,
    // Accounts the player has linked (email/Google/Facebook/Guest).
    linkedAccounts: user?.isGuest
      ? [{ provider: 'guest', label: 'Guest (local)' }]
      : [{ provider: 'account', label: user?.email || user?.displayName || 'Account' }],
  };
}

export function loadProfile(user) {
  const base = defaultProfile(user);
  try {
    const raw = localStorage.getItem(KEY(user.uid));
    return raw ? { ...base, ...JSON.parse(raw) } : base;
  } catch {
    return base;
  }
}

export function saveProfile(uid, patch) {
  let cur;
  try {
    cur = JSON.parse(localStorage.getItem(KEY(uid)) || '{}');
  } catch {
    cur = {};
  }
  const next = { ...cur, ...patch };
  localStorage.setItem(KEY(uid), JSON.stringify(next));
  return next;
}

/** The identity fields a finished run should publish, honouring the privacy toggle. */
export function leaderboardIdentity(profile) {
  if (profile.publicProfile) {
    return {
      displayName: profile.displayName || profile.username,
      username: profile.username,
      photoURL: profile.photoURL || null,
      avatarSeed: profile.avatarSeed,
      publicProfile: true,
    };
  }
  return {
    displayName: profile.username, // never the real name when private
    username: profile.username,
    photoURL: null,
    avatarSeed: profile.avatarSeed,
    publicProfile: false,
  };
}
