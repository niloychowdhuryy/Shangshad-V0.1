import { affectedMetricIds, formatDelta, metricMeta } from '../game/selectors.js';
import { MetricIcon } from './icons/Icons.jsx';

// One decision card with two choices (left / right, à la Reigns).
//
// Props:
//   card           the card to render
//   insightActive  when true, reveal exact signed deltas on each choice
//   selectedSide   'left' | 'right' once chosen — highlights it, dims the other,
//                  and locks the card during the brief "what happened" beat
//   onHoverSide(metricIds[])  bubble which metrics to glow in the HUD
//   onAnswer('left' | 'right')

function ChoiceButton({ choice, side, insightActive, difficultyFactor = 1, selected, locked, onHover, onLeave, onPick }) {
  const ids = affectedMetricIds(choice);
  const shown = (delta) => (delta < 0 ? Math.round(delta * difficultyFactor) : delta);
  return (
    <button
      disabled={locked}
      className={`group relative flex flex-1 touch-manipulation flex-col gap-2 overflow-hidden rounded-lg border p-4 text-left transition ${
        selected
          ? 'border-accent bg-accent/[0.12] scale-[1.02]'
          : locked
            ? 'border-line/40 bg-white/[0.01] opacity-40'
            : 'border-line/70 bg-white/[0.02] hover:border-accent/50 hover:bg-white/[0.05] active:scale-[0.99]'
      }`}
      style={selected ? { boxShadow: '0 0 20px -4px rgba(22,199,154,0.6)' } : undefined}
      onMouseEnter={() => onHover(ids)}
      onMouseLeave={onLeave}
      onPointerDown={() => onHover(ids)}
      onFocus={() => onHover(ids)}
      onBlur={onLeave}
      onClick={(e) => {
        e.currentTarget.blur();
        onPick(side);
      }}
    >
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
              {insightActive || selected ? (
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

export default function CardView({ card, insightActive, difficultyFactor = 1, selectedSide = null, onHoverSide, onAnswer, decisionLabel = 'Your decision matters' }) {
  const clear = () => onHoverSide?.([]);
  const hover = (ids) => onHoverSide?.(ids);

  if (!card) return null;
  const initial = (card.speaker || '?').trim().charAt(0).toUpperCase();

  return (
    // key on card.id remounts the card each question, so no hover/press state can
    // linger from the previous answer (and the entrance animation replays).
    <div key={card.id} className="panel animate-card-in flex w-full max-w-md flex-col gap-3 p-5">
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

      {/* small framing line above the question */}
      <div className="text-center font-mono text-[9px] uppercase tracking-[0.3em] text-accent/70">
        {decisionLabel}
      </div>

      <p className="font-serif text-[15px] leading-relaxed text-parchment/90">{card.prompt}</p>

      <div className="flex flex-col gap-2 sm:flex-row">
        <ChoiceButton choice={card.left} side="left" insightActive={insightActive} difficultyFactor={difficultyFactor} selected={selectedSide === 'left'} locked={!!selectedSide} onHover={hover} onLeave={clear} onPick={onAnswer} />
        <ChoiceButton choice={card.right} side="right" insightActive={insightActive} difficultyFactor={difficultyFactor} selected={selectedSide === 'right'} locked={!!selectedSide} onHover={hover} onLeave={clear} onPick={onAnswer} />
      </div>
    </div>
  );
}
