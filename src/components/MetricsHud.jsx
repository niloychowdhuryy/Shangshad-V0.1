import { metricRows } from '../game/selectors.js';
import { OVERFLOW_THRESHOLD } from '../game/constants.js';
import { MetricIcon } from './icons/Icons.jsx';

const OVERFLOW_COLOR = '#ffae34'; // amber — "too much of a good thing"

// Always-visible bar of 6 metrics, rendered as command-console gauges.
// `glow` = set of metric ids to pulse because the hovered choice affects them.
// We pulse the icon but NEVER reveal direction/magnitude — that is Insight's job.
// A pillar at/above OVERFLOW_THRESHOLD (100) is "OVERFLOWING" and heads toward
// a fatal surplus at 120.
export default function MetricsHud({ metrics, glow = new Set() }) {
  const rows = metricRows(metrics);
  return (
    <div className="panel grid grid-cols-6 gap-px overflow-hidden bg-line/40 p-px">
      {rows.map((m) => {
        const overflow = m.value >= OVERFLOW_THRESHOLD;
        const lowDanger = m.value <= 15;
        const isGlowing = glow.has(m.id);
        const tone = overflow ? OVERFLOW_COLOR : m.color;
        return (
          <div
            key={m.id}
            title={overflow ? `${m.name}: ${m.value}% — OVERFLOWING (fatal at 120%)` : `${m.name}: ${m.value}%`}
            className="relative flex flex-col items-center gap-1 bg-panel/90 px-1 py-2"
            style={overflow ? { boxShadow: `inset 0 0 0 1px ${OVERFLOW_COLOR}66` } : undefined}
          >
            <span
              className={isGlowing || overflow ? 'animate-metric-pulse' : ''}
              style={{ color: tone, filter: isGlowing || overflow ? `drop-shadow(0 0 7px ${tone})` : 'none' }}
            >
              <MetricIcon id={m.id} size={18} stroke={1.7} />
            </span>

            {/* segmented gauge — 10 cells over 0–100; full + amber once overflowing */}
            <div className="flex h-1.5 w-full gap-px">
              {Array.from({ length: 10 }).map((_, i) => {
                const filled = m.value >= (i + 1) * 10 - 5;
                return (
                  <span
                    key={i}
                    className="flex-1 rounded-[1px] transition-colors duration-500"
                    style={{ backgroundColor: overflow ? OVERFLOW_COLOR : filled ? m.color : 'rgba(255,255,255,0.08)' }}
                  />
                );
              })}
            </div>

            <span
              className={`font-mono text-[11px] leading-none tabular-nums ${
                lowDanger ? 'animate-pulse text-red-400' : overflow ? 'animate-pulse' : 'text-parchment/55'
              }`}
              style={overflow ? { color: OVERFLOW_COLOR } : undefined}
            >
              {String(m.value).padStart(2, '0')}
            </span>
            {/* The pillar name always stays; when overflowing, a highlighted
                OVERFLOW badge is marked beneath it. */}
            <span className="hud-label leading-none text-parchment/55">{m.short}</span>
            {overflow && (
              <span
                className="mt-0.5 animate-pulse rounded-[2px] px-1 font-mono text-[7px] font-bold uppercase leading-none tracking-[0.12em]"
                style={{ color: '#06100b', backgroundColor: OVERFLOW_COLOR }}
              >
                Overflow
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
