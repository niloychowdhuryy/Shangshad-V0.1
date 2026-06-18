import { METRICS, MAX_CONSECUTIVE_PER_LOCATION, INSIGHT_QUESTIONS_GRANTED, REVIVE_RESET_VALUE, POWERUP_INTERVAL, SLEEP_DELTA, DEATH_LIMITS, MAX_TOTAL_REVIVES, FINAL_DAY, WIN_AVERAGE_THRESHOLD } from '../game/constants.js';
import { MetricIcon, IconClose } from './icons/Icons.jsx';

function Row({ children }) {
  return <li className="flex gap-2 text-sm text-parchment/80"><span className="text-accent">›</span><span>{children}</span></li>;
}

export default function HowToPlay({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="panel max-h-[85vh] w-full max-w-md overflow-y-auto p-5" onClick={(e) => e.stopPropagation()}>
        <div className="mb-3 flex items-center justify-between border-b border-line/50 pb-3">
          <h2 className="font-tech text-lg font-bold uppercase tracking-wide text-accent">How to rule</h2>
          <button className="rail-btn h-8 w-8" onClick={onClose}><IconClose size={14} /></button>
        </div>

        <p className="mb-3 font-serif text-sm text-parchment/75">
          Every card is a decision; every decision shifts the six pillars of the state. Keep them all
          alive. Let any one hit <b>0%</b> or <b>100%</b> and the regime falls.
        </p>

        <div className="mb-4 grid grid-cols-2 gap-1.5">
          {METRICS.map((m) => (
            <div key={m.id} className="flex items-center gap-2 rounded border border-line/50 bg-white/[0.02] px-2 py-1.5">
              <span style={{ color: m.color }}><MetricIcon id={m.id} size={15} /></span>
              <span className="font-tech text-xs text-parchment/80">{m.name}</span>
            </div>
          ))}
        </div>

        <div className="mb-3 grid grid-cols-2 gap-1.5">
          <div className="rounded border border-line/50 bg-white/[0.02] p-2">
            <div className="font-tech text-xs font-bold text-accent">Story</div>
            <div className="font-serif text-[11px] leading-snug text-parchment/65">Revive failed pillars by ad (up to {MAX_TOTAL_REVIVES}×). Built for the long reign to day {FINAL_DAY}.</div>
          </div>
          <div className="rounded border border-bdred/40 bg-bdred/5 p-2">
            <div className="font-tech text-xs font-bold text-bdred">Campaign · one life</div>
            <div className="font-serif text-[11px] leading-snug text-parchment/65">No revives — the first collapse ends it. All three power-ups are offered at the start; claim them.</div>
          </div>
        </div>

        <ul className="flex flex-col gap-2">
          <Row>Tap a district on the map to face its dilemmas. Each answer advances the clock by <b>one day</b>.</Row>
          <Row>Answer <b>{MAX_CONSECUTIVE_PER_LOCATION}</b> in one district and it <b>locks</b>. Only <b>Sleep</b> reopens the offices — and it jolts every pillar by <b>±{SLEEP_DELTA}</b>.</Row>
          <Row>Hovering a choice glows <i>which</i> pillars move — never by how much.</Row>
          <Row>Watch a short ad for <b>Insight</b>: the next <b>{INSIGHT_QUESTIONS_GRANTED}</b> cards reveal exact +/- values.</Row>
          <Row><b>Story mode:</b> fail a pillar and you may watch an ad to <b>revive</b> it to {REVIVE_RESET_VALUE}% — up to <b>{MAX_TOTAL_REVIVES}</b> times. Pace yourself: {DEATH_LIMITS.map((r, i) => (<span key={i}>{i > 0 && ', or '}<b>{r.deaths} removals in {r.days} days</b></span>))} also collapses the regime.</Row>
          <Row><b>Campaign mode:</b> there are <b>no revives</b> — one collapse ends the run. That is why all three power-ups are handed to you up front: claim every one to survive longer.</Row>
          <Row>Every <b>{POWERUP_INTERVAL}</b> decisions a random <b>power-up</b> is offered — UN stabilisation, foreign donations, or a wise advisor. Watch a short ad to unlock it.</Row>
          <Row>On day 1801 the map locks for the <b>election endgame</b>. Survive to day <b>{FINAL_DAY}</b>.</Row>
          <Row>Win re-election only if your six pillars average <b>above {WIN_AVERAGE_THRESHOLD}%</b> on the final day.</Row>
          <Row>Two leaderboards: longest <b>Campaign</b> run, and most days in <b>Story</b>.</Row>
        </ul>
      </div>
    </div>
  );
}
