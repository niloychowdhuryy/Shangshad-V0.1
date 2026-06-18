import { useState } from 'react';
import { METRICS, TRADE_COST, TRADE_GAIN, TRADE_SOURCES, OVERFLOW_FATAL } from '../game/constants.js';
import { metricMeta } from '../game/selectors.js';
import { MetricIcon, IconClose, IconTrade } from './icons/Icons.jsx';

// Lobby & Trade: spend TRADE_COST of Finance OR Military to buy TRADE_GAIN on any
// other pillar — you lobby with money or muscle for a point elsewhere. Free (no
// ad, no day). Self-limiting: a source can't be spent into collapse, nor a
// target pushed into overflow.
export default function TradePanel({ open, onClose, metrics, onTrade }) {
  const [from, setFrom] = useState(null);
  if (!open) return null;

  const canSpend = (id) => (metrics[id] ?? 0) >= TRADE_COST + 1;
  const targetFull = (id) => (metrics[id] ?? 0) >= OVERFLOW_FATAL - TRADE_GAIN;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/75 p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="panel w-full max-w-sm p-5" onClick={(e) => e.stopPropagation()}>
        <div className="mb-3 flex items-center justify-between border-b border-line/50 pb-3">
          <h2 className="flex items-center gap-2 font-tech text-lg font-bold uppercase tracking-wide text-accent">
            <IconTrade size={18} /> Lobby &amp; Trade
          </h2>
          <button className="rail-btn h-8 w-8" onClick={onClose}>
            <IconClose size={14} />
          </button>
        </div>

        <p className="mb-3 font-serif text-[12px] leading-snug text-parchment/65">
          Lobby with money or muscle: spend <b>{TRADE_COST}</b> Finance or Military to buy <b>+{TRADE_GAIN}</b> on
          any other pillar. Pick what to spend:
        </p>

        {/* Source picker — only Finance / Military can be spent */}
        <div className="mb-4 grid grid-cols-2 gap-1.5">
          {TRADE_SOURCES.map((id) => {
            const meta = metricMeta(id);
            const disabled = !canSpend(id);
            const selected = from === id;
            return (
              <button
                key={id}
                disabled={disabled}
                onClick={() => setFrom(id)}
                className={`flex touch-manipulation items-center justify-center gap-2 rounded border px-2 py-2.5 transition ${
                  selected ? 'border-accent/70 bg-accent/10' : 'border-line/40 bg-white/[0.02]'
                } ${disabled ? 'opacity-30' : 'hover:border-line/70'}`}
                style={selected ? { borderColor: `${meta.color}aa` } : undefined}
              >
                <span style={{ color: meta.color }}><MetricIcon id={id} size={16} /></span>
                <span className="font-tech text-xs text-parchment">{meta.short}</span>
                <span className="font-mono text-xs font-bold tabular-nums text-parchment/70">{metrics[id]}</span>
                <span className="font-mono text-[10px] text-bdred">−{TRADE_COST}</span>
              </button>
            );
          })}
        </div>

        {/* Target — buy +1 on any other pillar */}
        <div className="hud-label mb-1.5">Buy +{TRADE_GAIN} on</div>
        <div className="grid grid-cols-3 gap-1.5">
          {METRICS.map((m) => {
            const blocked = !from || from === m.id || targetFull(m.id);
            return (
              <button
                key={m.id}
                disabled={blocked}
                onClick={() => onTrade(from, m.id)}
                className="flex touch-manipulation flex-col items-center gap-1 rounded border border-line/40 bg-white/[0.02] px-1 py-2 transition hover:border-accent/60 disabled:opacity-25"
              >
                <span style={{ color: m.color }}><MetricIcon id={m.id} size={16} /></span>
                <span className="font-mono text-xs font-bold tabular-nums text-parchment">{metrics[m.id]}</span>
                <span className="hud-label leading-none">{m.short}</span>
              </button>
            );
          })}
        </div>

        <p className="mt-3 text-center font-mono text-[9px] uppercase tracking-wider text-parchment/35">
          {from ? `Spending ${metricMeta(from).short} · tap a pillar to buy +${TRADE_GAIN}` : `Select Finance or Military (needs ${TRADE_COST + 1}+)`}
        </p>
      </div>
    </div>
  );
}
