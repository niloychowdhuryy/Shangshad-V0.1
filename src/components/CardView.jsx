import { useState } from 'react';
import { affectedMetricIds, formatDelta, metricMeta } from '../game/selectors.js';
import { MetricIcon } from './icons/Icons.jsx';

// One decision card with two choices (left / right, à la Reigns).
//
// Props:
//   card           the card to render
//   insightActive  when true, reveal exact signed deltas on each choice
//   onHoverSide(metricIds[])  bubble which metrics to glow in the HUD
//   onAnswer('left' | 'right')

function ChoiceButton({ choice, side, insightActive, difficultyFactor = 1, onHover, onLeave, onPick }) {
  const ids = affectedMetricIds(choice);
  // Insight reveals the *actually-applied* delta, including the progressive
  // difficulty penalty on negatives — so the number never lies.
  const shown = (delta) => (delta < 0 ? Math.round(delta * difficultyFactor) : delta);
  return (
    <button
      className="group relative flex flex-1 touch-manipulation flex-col gap-2 overflow-hidden rounded-lg border border-line/70 bg-white/[0.02] p-4 text-left transition hover:border-accent/50 hover:bg-white/[0.05] active:scale-[0.99]"
      onMouseEnter={() => onHover(ids)}
      onMouseLeave={onLeave}
      onPointerDown={() => onHover(ids)}
      onFocus={() => onHover(ids)}
      onBlur={onLeave}
      onClick={() => onPick(side)}
    >
      {/* hover sweep */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent transition-transform duration-500 group-hover:translate-x-full" />

      <span className="font-tech text-base font-semibold text-parchment">{choice.label}</span>
      {choice.tooltip && (
        <span className="font-serif text-xs italic text-parchment/40">“{choice.tooltip}”</span>
      )}

      <div className="mt-1 flex flex-wrap gap-1.5">
        {ids.map((id) => {
          const meta = metricMeta(id);
          const delta = choice.effects[id];
          return (
            <span
              key={id}
              className="inline-flex items-center gap-1 rounded px-1.5 py-0.5 font-mono text-[11px] font-medium"
              style={{
                backgroundColor: `${meta.color}1f`,
                color: meta.color,
                boxShadow: `inset 0 0 0 1px ${meta.color}55`,
              }}
            >
              <MetricIcon id={id} size={12} stroke={2} />
              {insightActive ? (
                <span className="tabular-nums">{formatDelta(id, shown(delta))}</span>
              ) : (
                <span className="opacity-60">··</span>
              )}
            </span>
          );
        })}
      </div>
    </button>
  );
}

export default function CardView({ card, insightActive, difficultyFactor = 1, onHoverSide, onAnswer }) {
  const [, setHovered] = useState(null);
  const clear = () => {
    setHovered(null);
    onHoverSide?.([]);
  };
  const hover = (ids) => {
    setHovered(ids);
    onHoverSide?.(ids);
  };

  if (!card) return null;
  const initial = (card.speaker || '?').trim().charAt(0).toUpperCase();

  return (
    <div className="panel animate-card-in flex w-full max-w-md flex-col gap-4 p-5">
      {/* speaker header */}
      <div className="flex items-center gap-3 border-b border-line/50 pb-3">
        <div className="relative grid h-12 w-12 place-items-center">
          <span className="absolute inset-0 rounded-md" style={{ boxShadow: 'inset 0 0 0 1px #2a3a4d' }} />
          <span className="font-tech text-xl font-bold text-accent">{initial}</span>
        </div>
        <div>
          <div className="font-tech text-sm font-semibold text-parchment">{card.speaker}</div>
          <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-parchment/35">
            {card.tags?.join(' · ')}
          </div>
        </div>
      </div>

      <p className="font-serif text-[15px] leading-relaxed text-parchment/90">{card.prompt}</p>

      <div className="flex flex-col gap-2 sm:flex-row">
        <ChoiceButton choice={card.left} side="left" insightActive={insightActive} difficultyFactor={difficultyFactor} onHover={hover} onLeave={clear} onPick={onAnswer} />
        <ChoiceButton choice={card.right} side="right" insightActive={insightActive} difficultyFactor={difficultyFactor} onHover={hover} onLeave={clear} onPick={onAnswer} />
      </div>
    </div>
  );
}
