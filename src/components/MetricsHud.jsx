import { metricRows } from '../game/selectors.js';
import { OVERFLOW_THRESHOLD } from '../game/constants.js';
import { MetricIcon } from './icons/Icons.jsx';

const OVERFLOW_COLOR = '#ffae34'; // amber — "too much of a good thing"
const UP_COLOR = '#34d399'; // green — pillar rose this answer
const DOWN_COLOR = '#ff5470'; // red — pillar fell this answer

// Always-visible bar of 6 pillars, rendered as command-console gauges.
// `glow`   = ids to pulse because the hovered choice affects them (no magnitude).
// `deltas` = { id: change } from the LAST answer; shown as a coloured +n / −n
//            beside the value until the next answer (unaffected pillars show none).
export default function MetricsHud({ metrics, glow = new Set(), deltas = {} }) {
  const rows = metricRows(metrics);
  return (
    <div className="panel grid grid-cols-6 gap-px overflow-hidden bg-line/40 p-px">
      {rows.map((m) => {
        const overflow = m.value >= OVERFLOW_THRESHOLD;
        const lowDanger = m.value <= 15;
        const isGlowing = glow.has(m.id);
        const tone = overflow ? OVERFLOW_COLOR : m.color;
        const delta = deltas[m.id] || 0;
        const valueColor = overflow ? OVERFLOW_COLOR : lowDanger ? '#ff5470' : '#e3ece6';
        return (
          <div
            key={m.id}
            title={overflow ? `${m.name}: ${m.value}% — OVERFLOWING (fatal at 120%)` : `${m.name}: ${m.value}%`}
            className="relative z-0 flex flex-col items-center gap-1 bg-panel/90 px-1 py-2.5 transition-transform duration-300"
            style={{
              ...(overflow ? { boxShadow: `inset 0 0 0 1px ${OVERFLOW_COLOR}66` } : {}),
              ...(isGlowing ? { transform: 'scale(1.12)', zIndex: 10 } : {}),
            }}
          >
            <span
              className={isGlowing || overflow ? 'animate-metric-pulse' : ''}
              style={{ color: tone, filter: isGlowing || overflow ? `drop-shadow(0 0 7px ${tone})` : 'none' }}
            >
              <MetricIcon id={m.id} size={19} stroke={1.8} />
            </span>

            {/* segmented gauge — 10 cells over 0–100; full + amber once overflowing */}
            <div className="flex h-2 w-full gap-px">
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

            {/* value + the change from the last answer (green up / red down) */}
            <div className="flex items-baseline justify-center gap-0.5 leading-none">
              <span
                className={`font-mono text-base font-bold tabular-nums ${lowDanger || overflow ? 'animate-pulse' : ''}`}
                style={{ color: valueColor }}
              >
                {String(m.value).padStart(2, '0')}
              </span>
              {delta !== 0 && (
                <span
                  className="font-mono text-[10px] font-bold tabular-nums"
                  style={{ color: delta > 0 ? UP_COLOR : DOWN_COLOR }}
                >
                  {delta > 0 ? `+${delta}` : delta}
                </span>
              )}
            </div>

            {/* The pillar name always stays; an OVERFLOW badge marks it beneath when overflowing. */}
            <span className="font-tech text-[8px] font-semibold uppercase leading-none tracking-wide text-parchment/70">
              {m.short}
            </span>
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
