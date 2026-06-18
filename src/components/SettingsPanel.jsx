import { useState } from 'react';
import { signOut, linkGoogle, linkFacebook, linkedProviderIds } from '../firebase/auth.js';
import { OFFLINE_MODE } from '../firebase/config.js';
import Avatar from './Avatar.jsx';
import { IconClose, IconUser, IconLink, IconPower } from './icons/Icons.jsx';

// Profile & privacy settings. The privacy toggle controls what the leaderboard
// shows: real name + photo, or just the username + a generated avatar.
export default function SettingsPanel({ open, onClose, user, profile, onSave }) {
  const [username, setUsername] = useState(profile.username || '');
  const [pub, setPub] = useState(!!profile.publicProfile);
  const [tut, setTut] = useState(profile.tutorialEnabled !== false);
  const [saved, setSaved] = useState(false);
  const [linkErr, setLinkErr] = useState(null);
  const [, setTick] = useState(0); // bump to re-read linked providers after a link

  if (!open) return null;

  const linked = OFFLINE_MODE ? [] : linkedProviderIds();
  const LINK_PROVIDERS = [
    ['google.com', 'Google', linkGoogle],
    ['facebook.com', 'Facebook', linkFacebook],
  ];
  const doLink = (fn) => async () => {
    setLinkErr(null);
    try {
      await fn();
      setTick((t) => t + 1);
    } catch (e) {
      setLinkErr(e.message || 'Linking failed');
    }
  };

  const canShowReal = !!profile.photoURL || !!profile.displayName; // only meaningful with a real account
  const save = () => {
    onSave({ username: username.trim() || 'Leader', publicProfile: pub && canShowReal, tutorialEnabled: tut });
    setSaved(true);
    setTimeout(() => setSaved(false), 1600);
  };

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/75 p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="panel w-full max-w-sm p-5" onClick={(e) => e.stopPropagation()}>
        <div className="mb-3 flex items-center justify-between border-b border-line/50 pb-3">
          <h2 className="flex items-center gap-2 font-tech text-lg font-bold uppercase tracking-wide text-accent">
            <IconUser size={16} /> Profile &amp; Settings
          </h2>
          <button className="rail-btn h-8 w-8" onClick={onClose}>
            <IconClose size={14} />
          </button>
        </div>

        {/* Identity preview */}
        <div className="mb-4 flex items-center gap-3">
          <Avatar seed={profile.avatarSeed || user.uid} name={username} photoURL={pub ? profile.photoURL : null} size={48} />
          <div className="min-w-0">
            <div className="truncate font-tech text-base font-semibold text-parchment">{username || 'Leader'}</div>
            <div className="font-mono text-[10px] uppercase tracking-wider text-parchment/45">
              {user.isGuest ? 'Guest · local only' : user.email || 'Account'}
            </div>
          </div>
        </div>

        {/* Username */}
        <label className="hud-label mb-1 block">Username (shown on leaderboard)</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          maxLength={24}
          className="mb-4 w-full rounded-md border border-line/70 bg-black/30 px-3 py-2 font-tech text-sm text-parchment outline-none focus:border-accent/50"
          placeholder="Your handle"
        />

        {/* Privacy toggle */}
        <button
          onClick={() => setPub((v) => !v)}
          disabled={!canShowReal}
          className="mb-3 flex w-full items-center justify-between rounded-md border border-line/60 bg-white/[0.02] px-3 py-2.5 text-left disabled:opacity-50"
        >
          <span className="pr-3">
            <span className="block font-tech text-sm text-parchment">Show real name &amp; photo</span>
            <span className="block font-tech text-[11px] leading-snug text-parchment/55">
              {pub && canShowReal
                ? 'Your account name and picture appear on the leaderboard.'
                : 'Only your username and a random avatar are shown.'}
            </span>
          </span>
          <span className={`relative h-6 w-11 shrink-0 rounded-full transition ${pub && canShowReal ? 'bg-accent' : 'bg-line/70'}`}>
            <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-all ${pub && canShowReal ? 'left-[22px]' : 'left-0.5'}`} />
          </span>
        </button>
        {!canShowReal && (
          <p className="mb-3 font-mono text-[10px] uppercase tracking-wider text-parchment/40">
            Link a Google/Facebook/email account to use a real name &amp; photo.
          </p>
        )}

        {/* Tutorial toggle */}
        <button
          onClick={() => setTut((v) => !v)}
          className="mb-3 flex w-full items-center justify-between rounded-md border border-line/60 bg-white/[0.02] px-3 py-2.5 text-left"
        >
          <span className="pr-3">
            <span className="block font-tech text-sm text-parchment">Show tutorial on new games</span>
            <span className="block font-tech text-[11px] leading-snug text-parchment/55">
              {tut ? 'The how-to-play cards appear when you start a new run.' : 'New runs start straight away, no tutorial.'}
            </span>
          </span>
          <span className={`relative h-6 w-11 shrink-0 rounded-full transition ${tut ? 'bg-accent' : 'bg-line/70'}`}>
            <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-all ${tut ? 'left-[22px]' : 'left-0.5'}`} />
          </span>
        </button>

        {/* Linked accounts */}
        <div className="mb-4">
          <div className="hud-label mb-1.5">Linked accounts</div>
          {OFFLINE_MODE ? (
            <div className="flex flex-col gap-1.5">
              {(profile.linkedAccounts || []).map((a, i) => (
                <div key={i} className="flex items-center gap-2 rounded border border-line/40 bg-white/[0.02] px-3 py-1.5">
                  <span className="text-accent"><IconLink size={14} /></span>
                  <span className="font-tech text-xs text-parchment/80">{a.label}</span>
                </div>
              ))}
              <p className="font-mono text-[9px] uppercase tracking-wider text-parchment/35">
                Account linking activates in the online build.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-1.5">
              {LINK_PROVIDERS.map(([id, name, fn]) => {
                const has = linked.includes(id);
                return (
                  <div key={id} className="flex items-center justify-between gap-2 rounded border border-line/40 bg-white/[0.02] px-3 py-1.5">
                    <span className="flex items-center gap-2 font-tech text-xs text-parchment/80">
                      <IconLink size={14} /> {name}
                    </span>
                    {has ? (
                      <span className="font-mono text-[10px] uppercase tracking-wider text-accent">Linked ✓</span>
                    ) : (
                      <button className="btn-ghost px-2 py-1 text-[11px]" onClick={doLink(fn)}>Link</button>
                    )}
                  </div>
                );
              })}
              {linkErr && <p className="text-center text-[10px] text-red-400">{linkErr}</p>}
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button className="btn-ghost flex items-center justify-center gap-2 text-sm" onClick={signOut}>
            <IconPower size={14} /> Sign out
          </button>
          <button className="btn-primary text-sm" onClick={save}>
            {saved ? 'Saved ✓' : 'Save'}
          </button>
        </div>
      </div>
    </div>
  );
}
