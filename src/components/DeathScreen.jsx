import { useState } from 'react';
import { metricMeta } from '../game/selectors.js';
import { REVIVE_RESET_VALUE, DEATH_LIMITS, MAX_TOTAL_REVIVES } from '../game/constants.js';
import { deathsWithin } from '../game/engine.js';
import { MetricIcon, IconRevive, IconAlert } from './icons/Icons.jsx';

// Per-metric flavor. `low` = the pillar collapsed to 0; `high` = it OVERFLOWED
// (surplus to 120) — too much of a good thing curdles into its own ruin.
const SCENARIOS = {
  FI: {
    low: 'The treasury is empty. Civil servants march unpaid.',
    high: 'The treasury overflows untouched. A leader who hoards the budget and cannot spend it is no leader — the people remove you for the waste.',
  },
  GL: {
    low: 'Sanctions seal the borders. You are a pariah.',
    high: 'You loom too large. A frightened neighbour, certain you mean to become a superpower, strikes first.',
  },
  MI: {
    low: 'The barracks empty. Tanks roll toward the palace.',
    high: 'An army swollen past all restraint no longer needs you. The generals stage their coup.',
  },
  RE: {
    low: 'The lights go out nationwide. The grid is dead.',
    high: 'Resources glut and rot, hoarded and unspent. The barons seize the surplus — and the seat.',
  },
  EN: {
    low: 'Plague and famine. The streets are a funeral.',
    high: 'Welfare without limit breeds idleness; a nation at rest stops working and the economy crumbles beneath you.',
  },
  FA: {
    low: 'Your own blood signs the assassination order.',
    high: 'The family, untouchable and utterly spoilt, kills with impunity until the outrage consumes you.',
  },
};

export default function DeathScreen({ pendingDeath, deaths, busy, onRevive, onDecline }) {
  const [progress, setProgress] = useState(0);
  const meta = metricMeta(pendingDeath.metric);
  const scenario = SCENARIOS[pendingDeath.metric]?.[pendingDeath.edge] || 'The regime collapses.';
  const watching = busy === 'revive';

  // How close each rate-limit is to triggering a permanent collapse.
  const risks = DEATH_LIMITS.map((r) => ({ ...r, count: deathsWithin(deaths, r.days) }));
  // Lifetime revives left (current pending removal isn't a used revive yet).
  const revivesLeft = Math.max(0, MAX_TOTAL_REVIVES - Math.max(0, deaths.length - 1));

  return (
    <div className="grid min-h-screen place-items-center p-6">
      <div className="panel flex w-full max-w-sm flex-col items-center gap-5 p-7 text-center">
        <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-red-400">
          <IconAlert size={14} /> Removed from power
        </div>

        <span style={{ color: meta.color, filter: `drop-shadow(0 0 14px ${meta.color})` }}>
          <MetricIcon id={pendingDeath.metric} size={56} stroke={1.4} />
        </span>

        <h1 className="font-tech text-2xl font-bold text-red-400">
          {meta.short} {pendingDeath.edge === 'low' ? 'COLLAPSED' : 'OVERFLOWED'}
        </h1>
        <p className="max-w-xs font-serif text-sm text-parchment/75">{scenario}</p>

        <button
          className="btn-primary flex w-full items-center justify-center gap-2"
          disabled={!!busy}
          onClick={async () => {
            setProgress(0);
            await onRevive((p) => setProgress(p));
            setProgress(0);
          }}
        >
          <IconRevive size={16} />
          {watching ? `REVIVING · ${Math.round(progress * 100)}%` : `WATCH AD · REVIVE TO ${REVIVE_RESET_VALUE}%`}
        </button>

        {/* Rate-limit warnings */}
        <div className="flex w-full flex-col gap-1">
          {risks.map((r) => (
            <div key={`${r.deaths}/${r.days}`} className="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider">
              <span className="text-parchment/45">{r.deaths} removals in {r.days} days = collapse</span>
              <span className={r.count >= r.deaths - 1 ? 'text-bdred' : 'text-parchment/60'}>{r.count}/{r.deaths}</span>
            </div>
          ))}
        </div>
        <span className="hud-label">Removal {deaths.length} · {revivesLeft} of {MAX_TOTAL_REVIVES} ad-revives left</span>

        <button className="btn-ghost w-full text-xs" disabled={!!busy} onClick={onDecline}>
          Step down (end the run)
        </button>
      </div>
    </div>
  );
}
