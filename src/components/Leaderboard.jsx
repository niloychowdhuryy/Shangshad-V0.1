import { useEffect, useState } from 'react';
import { fetchLeaderboard } from '../firebase/firestore.js';
import { MODES } from '../game/constants.js';
import { IconRank, IconClose, IconCrown, IconAlert, IconShare } from './icons/Icons.jsx';
import Avatar from './Avatar.jsx';
import ShareModal from './ShareModal.jsx';

const TABS = [
  { id: MODES.CAMPAIGN, label: 'Campaign', sub: 'Longest run · one life' },
  { id: MODES.STORY, label: 'Story', sub: 'Most days governed' },
];
const MEDAL = ['#f5c542', '#c9d1da', '#cd7f32']; // gold / silver / bronze

function RankRow({ r, rank, currentUid, onShare, podium }) {
  const mine = r.uid === currentUid;
  const medal = podium ? MEDAL[rank - 1] : null;
  return (
    <li
      className={`flex items-center justify-between rounded border px-3 ${podium ? 'py-2.5' : 'py-2'} ${
        mine ? 'border-accent/60 bg-accent/10' : podium ? 'border-line/60 bg-white/[0.04]' : 'border-line/40 bg-white/[0.02]'
      }`}
      style={medal ? { borderColor: `${medal}66`, background: `linear-gradient(90deg, ${medal}18, transparent)` } : undefined}
    >
      <span className="flex min-w-0 items-center gap-2 text-sm">
        <span
          className={`grid ${podium ? 'h-6 w-6' : 'w-5'} shrink-0 place-items-center font-mono font-bold tabular-nums ${podium ? 'rounded-full' : ''}`}
          style={medal ? { background: medal, color: '#10141b' } : { color: 'rgba(245,238,220,0.4)' }}
        >
          {podium ? rank : String(rank).padStart(2, '0')}
        </span>
        <Avatar seed={r.avatarSeed || r.uid} name={r.displayName} photoURL={r.photoURL} size={podium ? 26 : 22} />
        <span className={`truncate font-tech ${podium ? 'text-parchment' : 'text-parchment/90'}`}>{r.displayName}</span>
        <span className={r.won ? 'text-emerald-400' : 'text-red-400'}>
          {r.won ? <IconCrown size={13} /> : <IconAlert size={13} />}
        </span>
      </span>
      <span className="flex shrink-0 items-center gap-2.5">
        <span className="text-right leading-tight">
          <span className={`block font-mono font-semibold tabular-nums text-parchment ${podium ? 'text-base' : 'text-sm'}`}>
            {(r.days ?? 0).toLocaleString()}d
          </span>
          <span className="block font-mono text-[9px] tabular-nums text-parchment/40">avg {Number(r.average ?? 0).toFixed(0)}%</span>
        </span>
        {mine && (
          <button title="Share my best" className="text-accent/70 hover:text-accent" onClick={() => onShare(r)}>
            <IconShare size={15} />
          </button>
        )}
      </span>
    </li>
  );
}

export default function Leaderboard({ open, onClose, currentUid, defaultMode = MODES.STORY }) {
  const [tab, setTab] = useState(defaultMode);
  const [weekly, setWeekly] = useState(false);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [shareRow, setShareRow] = useState(null);

  useEffect(() => {
    if (open) setTab(defaultMode);
  }, [open, defaultMode]);

  useEffect(() => {
    if (!open) return;
    setLoading(true);
    fetchLeaderboard(tab, { weekly, max: 100 })
      .then(setRows)
      .catch(() => setRows([]))
      .finally(() => setLoading(false));
  }, [open, tab, weekly]);

  if (!open) return null;

  const podium = rows.slice(0, 3);
  const rest = rows.slice(3);

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/75 p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="panel flex max-h-[88vh] w-full max-w-sm flex-col p-5" onClick={(e) => e.stopPropagation()}>
        <div className="mb-3 flex items-center justify-between border-b border-line/50 pb-3">
          <h2 className="flex items-center gap-2 font-tech text-lg font-bold uppercase tracking-wide text-accent">
            <IconRank size={18} /> Standings
          </h2>
          <button className="rail-btn h-8 w-8" onClick={onClose}>
            <IconClose size={14} />
          </button>
        </div>

        {/* Mode tabs */}
        <div className="mb-2 grid grid-cols-2 gap-1.5">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`touch-manipulation rounded border px-2 py-1.5 text-left transition ${
                tab === t.id ? 'border-accent/60 bg-accent/10' : 'border-line/40 bg-white/[0.02] hover:border-line/70'
              }`}
            >
              <div className={`font-tech text-sm font-bold ${tab === t.id ? 'text-accent' : 'text-parchment/80'}`}>{t.label}</div>
              <div className="font-mono text-[9px] uppercase tracking-wider text-parchment/40">{t.sub}</div>
            </button>
          ))}
        </div>

        {/* All-time / Weekly */}
        <div className="mb-3 inline-flex self-start rounded border border-line/50 p-0.5">
          {[
            { id: false, label: 'All-time' },
            { id: true, label: 'This week' },
          ].map((p) => (
            <button
              key={String(p.id)}
              onClick={() => setWeekly(p.id)}
              className={`touch-manipulation rounded px-3 py-1 font-mono text-[10px] uppercase tracking-wider transition ${
                weekly === p.id ? 'bg-accent/20 text-accent' : 'text-parchment/45 hover:text-parchment/70'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        {loading ? (
          <p className="py-8 text-center font-mono text-xs text-parchment/50">LOADING…</p>
        ) : rows.length === 0 ? (
          <p className="py-8 text-center font-mono text-xs text-parchment/50">
            NO {weekly ? 'RUNS THIS WEEK' : `${tab === MODES.CAMPAIGN ? 'CAMPAIGN' : 'STORY'} RUNS YET`}
          </p>
        ) : (
          <>
            {podium.length > 0 && (
              <ol className="mb-2 flex flex-col gap-1.5">
                {podium.map((r, i) => (
                  <RankRow key={r.uid} r={r} rank={i + 1} currentUid={currentUid} onShare={setShareRow} podium />
                ))}
              </ol>
            )}
            {rest.length > 0 && (
              <ol className="flex flex-col gap-1 overflow-y-auto pr-1" style={{ maxHeight: '34vh' }}>
                {rest.map((r, i) => (
                  <RankRow key={r.uid} r={r} rank={i + 4} currentUid={currentUid} onShare={setShareRow} />
                ))}
              </ol>
            )}
          </>
        )}
        <p className="mt-3 shrink-0 text-center font-mono text-[9px] uppercase tracking-wider text-parchment/35">
          {weekly ? 'Best runs of the past 7 days' : tab === MODES.CAMPAIGN ? 'Longest single-life runs' : 'Most days governed'}
        </p>
      </div>

      <ShareModal
        open={!!shareRow}
        onClose={() => setShareRow(null)}
        stats={
          shareRow && {
            days: shareRow.days,
            won: shareRow.won,
            average: typeof shareRow.average === 'number' ? shareRow.average : undefined,
            displayName: shareRow.displayName || shareRow.username || undefined,
            metrics: shareRow.metrics, // present on runs recorded after this update
            title: shareRow.title,
          }
        }
      />
    </div>
  );
}
