import { useState } from 'react';
import {
  signInWithGoogle,
  signInWithFacebook,
  signInWithEmail,
  registerWithEmail,
  signInAsGuest,
} from '../firebase/auth.js';
import { OFFLINE_MODE } from '../firebase/config.js';

// Login wall. In OFFLINE_MODE the provider buttons resolve a guest instantly,
// so the same screen works with or without Firebase configured.
export default function AuthGate({ children, user, loading }) {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [mode, setMode] = useState('signin');
  const [err, setErr] = useState(null);
  const [busy, setBusy] = useState(false);

  if (loading) {
    return <div className="grid min-h-screen place-items-center text-white/60">Loading regime…</div>;
  }
  if (user) return children;

  const run = (fn) => async (e) => {
    e?.preventDefault?.();
    setErr(null);
    setBusy(true);
    try {
      await fn();
    } catch (ex) {
      setErr(ex.message || 'Authentication failed');
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="grid min-h-screen place-items-center p-6 font-tech">
      <div className="panel w-full max-w-sm p-6">
        <h1 className="mb-1 text-center text-3xl font-bold tracking-[0.4em] text-bdjade">SHANGSHAD</h1>
        <p className="mb-4 text-center font-mono text-[10px] uppercase tracking-[0.25em] text-parchment/40">
          Sign in to save your reign &amp; rank
        </p>

        {OFFLINE_MODE && (
          <p className="ribbon mb-4 bg-amber-400/10 px-3 py-2 text-center font-mono text-[10px] uppercase tracking-wider text-amber-300">
            Offline dev mode · sign-in creates a local guest
          </p>
        )}

        <div className="flex flex-col gap-2">
          <button className="btn-ghost" disabled={busy} onClick={run(signInWithGoogle)}>
            Continue with Google
          </button>
          <button className="btn-ghost" disabled={busy} onClick={run(signInWithFacebook)}>
            Continue with Facebook
          </button>
          <button className="btn-ghost" disabled={busy} onClick={run(signInAsGuest)}>
            Play as guest
          </button>
        </div>

        <div className="my-4 flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-white/30">
          <span className="h-px flex-1 bg-line/60" /> or email <span className="h-px flex-1 bg-line/60" />
        </div>

        <form className="flex flex-col gap-2" onSubmit={run(() =>
          mode === 'signin' ? signInWithEmail(email, pw) : registerWithEmail(email, pw),
        )}>
          <input
            type="email"
            required
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-md border border-line/70 bg-black/30 px-3 py-2 font-mono text-sm text-parchment outline-none focus:border-accent/50"
          />
          <input
            type="password"
            required
            minLength={6}
            placeholder="password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            className="rounded-md border border-line/70 bg-black/30 px-3 py-2 font-mono text-sm text-parchment outline-none focus:border-accent/50"
          />
          <button className="btn-primary" disabled={busy} type="submit">
            {mode === 'signin' ? 'Sign in' : 'Create account'}
          </button>
        </form>

        {err && <p className="mt-3 text-center text-xs text-red-400">{err}</p>}

        <button
          className="mt-3 w-full text-center text-xs text-white/40 hover:text-white/70"
          onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}
        >
          {mode === 'signin' ? 'No account? Register' : 'Have an account? Sign in'}
        </button>
      </div>
    </div>
  );
}
