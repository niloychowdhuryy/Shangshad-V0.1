import { useState } from 'react';
import { SLEEP_DELTA } from '../game/constants.js';
import { IconClose, IconSleep, IconRevive } from './icons/Icons.jsx';

// Sleep options: rest now (a random ±5 jolt to every pillar) or watch a rewarded
// ad to "rest easy" — reopen every office with the pillars left untouched.
export default function SleepPanel({ open, onClose, onSleepFree, onSleepAd, busy, allLocked }) {
  const [progress, setProgress] = useState(0);
  if (!open) return null;
  const watching = busy === 'sleep';

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/75 p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="panel w-full max-w-sm p-5" onClick={(e) => e.stopPropagation()}>
        <div className="mb-3 flex items-center justify-between border-b border-line/50 pb-3">
          <h2 className="flex items-center gap-2 font-tech text-lg font-bold uppercase tracking-wide text-accent">
            <IconSleep size={16} /> Sleep
          </h2>
          <button className="rail-btn h-8 w-8" onClick={onClose}>
            <IconClose size={14} />
          </button>
        </div>

        <p className="mb-4 font-serif text-[13px] leading-relaxed text-parchment/75">
          {allLocked
            ? 'Every office is closed. Resting reopens the whole map so you can govern again.'
            : 'Resting reopens every closed office so you can return to any district.'}
        </p>

        {/* Rest now — free, ±5 jolt */}
        <button
          className="mb-2 flex w-full items-start gap-3 rounded-md border border-line/60 bg-white/[0.02] px-3 py-3 text-left disabled:opacity-50"
          disabled={!!busy}
          onClick={() => { onSleepFree(); onClose(); }}
        >
          <span className="mt-0.5 shrink-0 text-parchment/70"><IconSleep size={18} /></span>
          <span>
            <span className="block font-tech text-sm font-semibold text-parchment">Rest now</span>
            <span className="block font-tech text-[11px] leading-snug text-parchment/55">
              Reopens every office. A restless night shifts each pillar by ±{SLEEP_DELTA} at random.
            </span>
          </span>
        </button>

        {/* Rest easy — rewarded ad, no penalty */}
        <button
          className="flex w-full items-start gap-3 rounded-md border border-accent/50 bg-accent/[0.06] px-3 py-3 text-left disabled:opacity-50"
          disabled={!!busy}
          onClick={async () => {
            const ok = await onSleepAd((p) => setProgress(p));
            setProgress(0);
            if (ok) onClose();
          }}
        >
          <span className="mt-0.5 shrink-0 text-accent"><IconRevive size={18} /></span>
          <span className="min-w-0 flex-1">
            <span className="block font-tech text-sm font-semibold text-accent">Rest easy · watch ad</span>
            <span className="block font-tech text-[11px] leading-snug text-parchment/60">
              Reopens every office with your pillars left exactly as they are.
            </span>
            {watching && (
              <span className="mt-1.5 block h-1 w-full overflow-hidden rounded bg-white/10">
                <span className="block h-full rounded bg-accent transition-all" style={{ width: `${Math.round(progress * 100)}%` }} />
              </span>
            )}
          </span>
        </button>
      </div>
    </div>
  );
}
