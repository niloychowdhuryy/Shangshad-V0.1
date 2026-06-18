import { useState } from 'react';
import { WIN_AVERAGE_THRESHOLD, FINAL_DAY } from '../game/constants.js';
import { metricRows, metricMeta } from '../game/selectors.js';
import { evaluateLegacy, TRAIT_ORDER } from '../game/legacy.js';
import { ACHIEVEMENT_BY_ID } from '../game/achievements.js';
import { MetricIcon, IconCrown, IconAlert, IconRevive, IconShare, IconHome, IconStar } from './icons/Icons.jsx';
import ShareModal from './ShareModal.jsx';

const TRAIT_COLORS = {
  fascist: '#ff5470',
  corrupt: '#c98bff',
  kindHearted: '#34d399',
  extremist: '#ffae34',
  pragmatic: '#38bdf8',
};

// Terminal screen for both WON and GAME_OVER. The leader title, traits, and
// epitaph are derived purely from the final pillars + days (see game/legacy.js).
export default function EndScreen({ status, result, day, metrics, awards, displayName, onRestart, onExit }) {
  const won = status === 'won';
  const rows = metricRows(metrics);
  const avg = result?.average ?? 0;
  const purge = result?.purge;
  const campaign = result?.campaign;
  const causeName = result?.cause ? metricMeta(result.cause)?.short : null;
  const [share, setShare] = useState(false);

  const { title, traits, summary } = evaluateLegacy(metrics, day);

  return (
    <div className="grid min-h-screen place-items-center p-5">
      <div className="panel flex w-full max-w-sm flex-col items-center gap-4 p-6 text-center">
        <span className={won ? 'text-emerald-400' : 'text-red-400'} style={{ filter: `drop-shadow(0 0 14px ${won ? '#34d399' : '#ff5470'})` }}>
          {won ? <IconCrown size={40} /> : <IconAlert size={40} />}
        </span>

        {/* Days survived */}
        <div>
          <div className="hud-label tracking-[0.3em]">You survived</div>
          <div className="font-mono text-4xl font-bold tabular-nums text-parchment">
            {day.toLocaleString()} <span className="text-lg font-normal text-parchment/45">days</span>
          </div>
        </div>

        {/* Verdict */}
        <div className="w-full border-y border-line/50 py-3">
          <div className="hud-label tracking-[0.3em] text-parchment/45">You will be remembered as</div>
          <h1 className="mt-1 font-tech text-2xl font-bold uppercase leading-tight tracking-wide text-accent" style={{ filter: 'drop-shadow(0 0 12px rgba(22,199,154,0.35))' }}>
            {title}
          </h1>
        </div>

        {/* Trait breakdown */}
        <div className="flex w-full flex-col gap-1.5">
          {TRAIT_ORDER.map(([key, label]) => {
            const v = traits[key];
            const color = TRAIT_COLORS[key];
            return (
              <div key={key} className="flex items-center gap-2">
                <span className="w-24 shrink-0 text-left font-tech text-[11px] uppercase tracking-wide text-parchment/70">{label}</span>
                <span className="relative h-2 flex-1 overflow-hidden rounded bg-white/10">
                  <span className="absolute inset-y-0 left-0 rounded transition-all" style={{ width: `${v}%`, backgroundColor: color }} />
                </span>
                <span className="w-9 shrink-0 text-right font-mono text-xs font-bold tabular-nums" style={{ color }}>{v}%</span>
              </div>
            );
          })}
        </div>

        {/* Historical epitaph */}
        <p className="font-serif text-[13px] italic leading-relaxed text-parchment/75">{summary}</p>

        {/* How the run ended + final pillars */}
        <p className="font-mono text-[10px] uppercase tracking-wider text-parchment/40">
          {won
            ? `Re-elected · national average ${avg.toFixed(1)}% (above ${WIN_AVERAGE_THRESHOLD}%)`
            : campaign
              ? `Campaign · ${causeName ? `${causeName} collapsed` : 'a pillar fell'} · no second life`
              : purge?.total
                ? `Deposed ${purge.total} times · the order collapsed`
                : day > FINAL_DAY
                  ? `Reached day ${FINAL_DAY} · ${avg.toFixed(1)}% fell short of ${WIN_AVERAGE_THRESHOLD}%`
                  : `${causeName ? `${causeName} collapsed` : 'A pillar fell'} on day ${day}`}
        </p>

        <div className="grid w-full grid-cols-3 gap-1">
          {rows.map((m) => (
            <div key={m.id} className="flex items-center justify-center gap-1 rounded border border-line/40 bg-white/[0.02] px-1 py-1">
              <span style={{ color: m.color }}><MetricIcon id={m.id} size={11} /></span>
              <span className="font-mono text-[11px] font-semibold tabular-nums" style={{ color: m.color }}>{String(m.value).padStart(2, '0')}</span>
            </div>
          ))}
        </div>

        {/* Achievements unlocked this run */}
        {awards?.newly?.length > 0 && (
          <div className="w-full rounded-md border border-amber-300/40 bg-amber-300/[0.06] p-2.5">
            <div className="mb-1 flex items-center justify-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-amber-300">
              <IconStar size={12} /> Achievement{awards.newly.length > 1 ? 's' : ''} unlocked
            </div>
            <div className="flex flex-col gap-0.5">
              {awards.newly.map((id) => (
                <div key={id} className="font-tech text-xs font-semibold text-parchment">
                  {ACHIEVEMENT_BY_ID[id]?.name || id}
                </div>
              ))}
            </div>
          </div>
        )}

        <button className="btn-primary flex w-full items-center justify-center gap-2" onClick={() => setShare(true)}>
          <IconShare size={15} /> Share your reign
        </button>

        <div className="grid w-full grid-cols-2 gap-2">
          <button className="btn-ghost flex items-center justify-center gap-2 text-sm" onClick={onRestart}>
            <IconRevive size={14} /> Play again
          </button>
          <button className="btn-ghost flex items-center justify-center gap-2 text-sm" onClick={onExit}>
            <IconHome size={14} /> Main menu
          </button>
        </div>
      </div>

      <ShareModal
        open={share}
        onClose={() => setShare(false)}
        stats={{ days: day, won, average: avg, displayName, metrics, title }}
      />
    </div>
  );
}
