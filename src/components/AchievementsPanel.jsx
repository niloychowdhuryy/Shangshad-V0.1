import { ACHIEVEMENTS } from '../game/achievements.js';
import { IconClose, IconStar, IconLock, IconCrown } from './icons/Icons.jsx';

// Hall of Leaders: meta-progression — achievements earned and leader titles
// collected across all runs. Read-only; data lives in the profile.
export default function AchievementsPanel({ open, onClose, profile }) {
  if (!open) return null;
  const earned = new Set(profile?.achievements || []);
  const titles = profile?.titlesEarned || [];
  const runs = profile?.runsPlayed || 0;
  const best = profile?.bestDays || 0;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="panel max-h-[85vh] w-full max-w-md overflow-y-auto p-5" onClick={(e) => e.stopPropagation()}>
        <div className="mb-3 flex items-center justify-between border-b border-line/50 pb-3">
          <h2 className="flex items-center gap-2 font-tech text-lg font-bold uppercase tracking-wide text-accent">
            <IconStar size={16} /> Hall of Leaders
          </h2>
          <button className="rail-btn h-8 w-8" onClick={onClose}>
            <IconClose size={14} />
          </button>
        </div>

        {/* Career stats */}
        <div className="mb-4 grid grid-cols-3 gap-1.5">
          {[
            ['Runs', runs.toLocaleString()],
            ['Best days', best.toLocaleString()],
            ['Earned', `${earned.size}/${ACHIEVEMENTS.length}`],
          ].map(([label, value]) => (
            <div key={label} className="rounded border border-line/50 bg-white/[0.02] px-2 py-1.5 text-center">
              <div className="font-mono text-base font-bold tabular-nums text-parchment">{value}</div>
              <div className="hud-label leading-tight">{label}</div>
            </div>
          ))}
        </div>

        {/* Titles collected */}
        <div className="mb-2 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-parchment/50">
          <IconCrown size={12} /> Titles collected ({titles.length})
        </div>
        {titles.length > 0 ? (
          <div className="mb-4 flex flex-wrap gap-1.5">
            {titles.map((t) => (
              <span key={t} className="rounded border border-accent/40 bg-accent/[0.08] px-2 py-0.5 font-tech text-[10px] uppercase tracking-wide text-accent">
                {t}
              </span>
            ))}
          </div>
        ) : (
          <p className="mb-4 font-serif text-[12px] italic text-parchment/45">No reigns recorded yet — history awaits.</p>
        )}

        {/* Achievements */}
        <div className="mb-2 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-parchment/50">
          <IconStar size={12} /> Achievements
        </div>
        <div className="flex flex-col gap-1.5">
          {ACHIEVEMENTS.map((a) => {
            const got = earned.has(a.id);
            return (
              <div
                key={a.id}
                className={`flex items-start gap-2 rounded border px-2.5 py-1.5 ${got ? 'border-accent/40 bg-accent/[0.05]' : 'border-line/40 bg-white/[0.01] opacity-60'}`}
              >
                <span className={`mt-0.5 shrink-0 ${got ? 'text-amber-300' : 'text-parchment/40'}`}>
                  {got ? <IconStar size={13} /> : <IconLock size={12} />}
                </span>
                <div className="min-w-0">
                  <div className="font-tech text-xs font-semibold text-parchment">{a.name}</div>
                  <div className="font-serif text-[11px] leading-snug text-parchment/60">{a.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
