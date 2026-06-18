import { metricMeta } from '../game/selectors.js';
import { REVIVE_RESET_VALUE } from '../game/constants.js';
import { MetricIcon, IconRevive } from './icons/Icons.jsx';

// Contextual recovery flavor, keyed by metric + which edge failed. Restoring a
// pillar to 50% should feel earned and in-world.
const REVIVAL = {
  FI: {
    low: 'Emergency credit lines open and remittances surge home. Salaries are paid, the panic subsides, and the treasury breathes again.',
    high: 'A swift currency reform tames the inflation. Prices steady and the markets exhale.',
  },
  GL: {
    low: 'The UN extends its hand — envoys arrive to retrain your ministries and rebuild your standing abroad. The world listens again.',
    high: 'You quietly claw back sovereignty. The foreign handlers step back and the leash loosens.',
  },
  MI: {
    low: 'Loyalist officers rally the barracks. The coup fizzles before dawn and the chain of command holds.',
    high: 'You purge the plotters and reward the faithful. The generals fall back in line behind you.',
  },
  RE: {
    low: 'Engineers reroute the grid and sealed reserves are reopened. Across the country, the lights flicker back to life.',
    high: 'The resource barons are reined in and supply is rationed fairly. The shortages ease.',
  },
  EN: {
    low: 'The public renews its trust in you — with no credible leader left to rally behind, the streets quiet and the wards reopen.',
    high: 'Concessions are announced and the squares slowly empty. The fever of revolt breaks.',
  },
  FA: {
    low: 'Old loyalties hold. The family steps back from the knife — for now — and the bloodline closes ranks.',
    high: 'You reassert command of the dynasty. The ambitious relatives retreat to their corners.',
  },
};

export default function RevivalScreen({ revival, onContinue }) {
  const meta = metricMeta(revival.metric);
  const text = REVIVAL[revival.metric]?.[revival.edge] || 'Order is restored, and your reign continues.';

  return (
    <div className="grid min-h-screen place-items-center p-6">
      <div className="panel flex w-full max-w-sm flex-col items-center gap-5 p-7 text-center">
        <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
          <IconRevive size={14} /> Revived
        </div>

        <span style={{ color: meta.color, filter: `drop-shadow(0 0 14px ${meta.color})` }}>
          <MetricIcon id={revival.metric} size={52} stroke={1.4} />
        </span>

        <h1 className="font-tech text-2xl font-bold text-parchment">{meta.name} restored</h1>
        <p className="max-w-xs font-serif text-sm leading-relaxed text-parchment/80">{text}</p>

        <div className="flex items-center gap-2 rounded-md border border-accent/40 bg-accent/10 px-3 py-1.5 font-mono text-sm text-accent">
          <span style={{ color: meta.color }}>{meta.short}</span>
          <span className="tabular-nums">restored to {REVIVE_RESET_VALUE}%</span>
        </div>

        <button className="btn-primary mt-1 flex w-full items-center justify-center gap-2" onClick={onContinue}>
          Resume your reign
        </button>
      </div>
    </div>
  );
}
