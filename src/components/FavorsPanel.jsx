import { useState } from 'react';
import { POWERUPS, POWERUP_INTERVAL } from '../game/constants.js';
import { isFavorActive, favorRemaining, isFavorUnlocked, canApplyFavor } from '../game/engine.js';
import { IconGlobal, IconFinance, IconInsight, IconClose, IconPlay, IconLock } from './icons/Icons.jsx';

const ICONS = { un_support: IconGlobal, finance_fill: IconFinance, advisor: IconInsight };

// One favor row: shows ACTIVE (with countdown), UNLOCKED (claim by ad), or LOCKED.
function FavorRow({ favor, state, onApply, busy }) {
  const [progress, setProgress] = useState(0);
  const Icon = ICONS[favor.id] || IconInsight;
  const active = isFavorActive(state, favor.id);
  const unlocked = isFavorUnlocked(state, favor.id);
  const applicable = canApplyFavor(state, favor.id); // e.g. Donations needs FI < 50
  const watching = busy === 'powerup';

  return (
    <div
      className="flex items-center gap-3 rounded-lg border p-3"
      style={{
        borderColor: active ? 'rgba(245,197,66,0.5)' : unlocked ? 'rgba(22,199,154,0.45)' : 'rgba(120,130,145,0.3)',
        background: active
          ? 'linear-gradient(90deg, rgba(245,197,66,0.14), transparent)'
          : unlocked
          ? 'linear-gradient(90deg, rgba(22,199,154,0.12), transparent)'
          : 'rgba(255,255,255,0.02)',
      }}
    >
      <span
        className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${
          active ? 'bg-amber-400/15 text-amber-300' : unlocked ? 'bg-accent/15 text-accent' : 'bg-white/5 text-parchment/35'
        }`}
      >
        {unlocked || active ? <Icon size={20} /> : <IconLock size={18} />}
      </span>

      <div className="min-w-0 flex-1">
        <div className="font-tech text-sm font-semibold text-parchment">{favor.name}</div>
        <div className="font-tech text-[11px] leading-snug text-parchment/55">{favor.effect}</div>
      </div>

      {active ? (
        <span className="shrink-0 rounded bg-amber-400/15 px-2 py-1 text-center font-mono text-[10px] font-bold uppercase tracking-wider text-amber-300">
          Active
          <span className="block tabular-nums">{favorRemaining(state, favor.id)} left</span>
        </span>
      ) : unlocked && applicable ? (
        <button
          className="btn-primary relative flex shrink-0 touch-manipulation items-center gap-1.5 overflow-hidden px-3 py-1.5 text-xs"
          disabled={!!busy}
          onClick={async () => {
            setProgress(0);
            await onApply(favor.id, (v) => setProgress(v));
            setProgress(0);
          }}
        >
          <IconPlay size={11} />
          {watching ? `${Math.round(progress * 100)}%` : 'Watch ad'}
          {watching && <span className="absolute bottom-0 left-0 h-0.5 bg-ink/40" style={{ width: `${Math.round(progress * 100)}%` }} />}
        </button>
      ) : unlocked ? (
        <span className="shrink-0 text-center font-mono text-[9px] uppercase leading-tight tracking-wider text-parchment/40">
          Ready
          <span className="block text-bdred">FI ≥ 50</span>
        </span>
      ) : (
        <span className="shrink-0 font-mono text-[9px] uppercase leading-tight tracking-wider text-parchment/40">
          Locked
        </span>
      )}
    </div>
  );
}

export default function FavorsPanel({ open, onClose, state, onApply, busy }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/75 p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="panel w-full max-w-sm p-5" onClick={(e) => e.stopPropagation()}>
        <div className="mb-3 flex items-center justify-between border-b border-line/50 pb-3">
          <h2 className="flex items-center gap-2 font-tech text-lg font-bold uppercase tracking-wide text-accent">
            Favors
          </h2>
          <button className="rail-btn h-8 w-8" onClick={onClose}>
            <IconClose size={14} />
          </button>
        </div>

        <p className="mb-3 font-serif text-[12px] leading-snug text-parchment/65">
          Each favor is a short buff or a one-off boon — see its effect below. Applying one costs a short ad,
          then it resets. A new favor unlocks every <b>{POWERUP_INTERVAL}</b> decisions.
        </p>

        <div className="flex flex-col gap-2">
          {POWERUPS.map((favor) => (
            <FavorRow key={favor.id} favor={favor} state={state} onApply={onApply} busy={busy} />
          ))}
        </div>
      </div>
    </div>
  );
}
