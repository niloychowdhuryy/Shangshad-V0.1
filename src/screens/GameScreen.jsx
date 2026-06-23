import { useState, useEffect, useRef } from 'react';

import { useGameState } from '../hooks/useGameState.js';
import { STATUS, PHASE, MODES, ENDGAME_START_DAY, FINAL_DAY, LOCATIONS, SLEEP_DELTA, FAVOR_UNLOCK_NOTICE, POWERUP_BY_ID } from '../game/constants.js';
import { isInsightActive, isLocationLocked, allLocationsLocked, difficultyFactor } from '../game/engine.js';

import MetricsHud from '../components/MetricsHud.jsx';
import MapView from '../components/MapView.jsx';
import CardView from '../components/CardView.jsx';
import DeathScreen from '../components/DeathScreen.jsx';
import RevivalScreen from '../components/RevivalScreen.jsx';
import FavorsPanel from '../components/FavorsPanel.jsx';
import TradePanel from '../components/TradePanel.jsx';
import SleepPanel from '../components/SleepPanel.jsx';
import EndScreen from '../components/EndScreen.jsx';
import Leaderboard from '../components/Leaderboard.jsx';
import TutorialOverlay from '../components/TutorialOverlay.jsx';
import { loadProfile, saveProfile } from '../game/profile.js';
import { BRAND } from '../game/brand.js';
import { LocationIcon, IconRank, IconHome, IconChevronLeft, IconAlert, IconSleep, IconFavor, IconTrade } from '../components/icons/Icons.jsx';
import { useT, LanguageToggle } from '../i18n/i18n.jsx';

export default function GameScreen({ user, startMode = 'continue', gameMode, onExit }) {
  const { t } = useT();
  const g = useGameState(user, startMode, gameMode);
  const { state } = g;
  const isCampaign = state.mode === MODES.CAMPAIGN;
  const [glow, setGlow] = useState(new Set());
  const [boardOpen, setBoardOpen] = useState(false);
  const [favorsOpen, setFavorsOpen] = useState(false);
  const [tradeOpen, setTradeOpen] = useState(false);
  const [sleepOpen, setSleepOpen] = useState(false);
  const [toast, setToast] = useState(null);
  // Feedback "beat": after a choice, hold the answered card (highlighted) while
  // the pillars visibly move, then advance. { card, side } | null.
  const [review, setReview] = useState(null);
  const reviewTimer = useRef(null);
  // Tutorial: shown at the start of every fresh run while it's enabled in the profile.
  const [tutorialEnabled, setTutorialEnabled] = useState(() => loadProfile(user).tutorialEnabled !== false);
  const [showTutorial, setShowTutorial] = useState(false);
  // Refs the guided tutorial points its bubbles at.
  const hudRef = useRef(null);
  const mapRef = useRef(null);
  const sleepRef = useRef(null);
  const favorsRef = useRef(null);

  useEffect(() => () => clearTimeout(reviewTimer.current), []);

  // An office that just locked sends the player to the map — but not until the
  // feedback beat for the locking answer has finished.
  useEffect(() => {
    if (!review && g.activeLocation && isLocationLocked(state, g.activeLocation)) g.closeLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, g.activeLocation, review]);

  // When a favor unlocks (every 15 decisions), pop a Bangla notice, then clear it.
  useEffect(() => {
    if (!state.favorNotice) return;
    const favor = POWERUP_BY_ID[state.favorNotice];
    setToast(favor?.name || '');
    const t = setTimeout(() => {
      setToast(null);
      g.clearFavorNotice();
    }, 3800);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.favorNotice]);

  // Show the tutorial at the start of each fresh run (day 1, nothing answered).
  // Keyed on state.seed so it re-fires on New Game and on Play Again (restart).
  useEffect(() => {
    if (!g.hydrated || !tutorialEnabled) return;
    if (
      state.totalAnswered === 0 &&
      state.day === 1 &&
      state.status === STATUS.PLAYING &&
      state.phase === PHASE.STANDARD
    ) {
      setShowTutorial(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.seed, g.hydrated]);

  const finishTutorial = (keepNextTime) => {
    setShowTutorial(false);
    setTutorialEnabled(keepNextTime);
    saveProfile(user.uid, { tutorialEnabled: keepNextTime });
  };

  // Guided tutorial steps — each bubble points at a live element on the map screen.
  const tutorialSteps = [
    {
      ref: hudRef,
      title: 'Your six pillars',
      text: 'These are the pillars that will be affected by your decisions. Keep each one off 0% and 100% — let any hit an edge and your rule ends.',
    },
    {
      ref: mapRef,
      title: 'Run the country',
      text: 'Tap a district on the map to face your people and their situations, and decide how to govern. Every choice shifts your pillars.',
    },
    {
      ref: sleepRef,
      title: 'Locks & Sleep',
      text: `After 5 decisions a department locks. All locked departments reopen only when you Sleep — then you can run the country again, though a night's rest jolts every pillar by ±${SLEEP_DELTA}.`,
    },
    {
      ref: favorsRef,
      title: 'Favors',
      text: 'Favors are buffers you bank here — a UN floor against collapse, an instant Finance rescue, and an Insight that reveals a choice’s exact effects before you commit.',
    },
  ];

  if (!g.hydrated) {
    return (
      <div className="grid min-h-screen place-items-center font-mono text-xs uppercase tracking-[0.3em] text-parchment/50">
        Restoring regime…
      </div>
    );
  }

  // Terminal & interstitial screens
  if (state.status === STATUS.DEATH_PENDING) {
    return (
      <DeathScreen
        pendingDeath={state.pendingDeath}
        deaths={state.deaths}
        busy={g.adBusy}
        onRevive={g.watchAdForRevive}
        onDecline={g.declineRevive}
      />
    );
  }
  if (state.pendingRevival) {
    return <RevivalScreen revival={state.pendingRevival} onContinue={g.dismissRevival} />;
  }
  if (state.status === STATUS.WON || state.status === STATUS.GAME_OVER) {
    return (
      <EndScreen
        status={state.status}
        result={state.finalResult}
        day={state.day}
        metrics={state.metrics}
        awards={g.awards}
        displayName={user.displayName || user.email}
        onRestart={g.restart}
        onExit={onExit}
      />
    );
  }

  const insightOn = isInsightActive(state);
  const df = difficultyFactor(state.totalAnswered);
  const endgame = state.phase === PHASE.ENDGAME;
  // A just-locked office is treated as "no office open" so the player drops back
  // to the map (the effect above also clears the activeLocation state).
  const openLoc = g.activeLocation && !isLocationLocked(state, g.activeLocation) ? g.activeLocation : null;
  const dayPct = Math.min(100, (state.day / FINAL_DAY) * 100);
  // Every office closed (standard phase): Sleep is the only way forward — flag it.
  const allLocked = !endgame && allLocationsLocked(state);

  // Answer flow with a brief feedback beat: hold the answered card (chosen side
  // highlighted) and glow the affected pillars while their bars move, then advance.
  const reviewing = !!review;
  const cardToShow = review ? review.card : g.card;
  const headerLoc = openLoc || review?.card?.location || g.activeLocation;
  const headerMeta = LOCATIONS.find((l) => l.id === headerLoc);
  const decide = (side) => {
    if (reviewing) return;
    const chosen = side === 'left' ? g.card?.left : g.card?.right;
    if (!chosen) return;
    setReview({ card: g.card, side });
    setGlow(new Set(Object.keys(chosen.effects || {})));
    g.answer(side);
    reviewTimer.current = setTimeout(() => {
      setReview(null);
      setGlow(new Set());
    }, 1600); // long enough to read the before → after breakdown
  };

  return (
    <div
      className="mx-auto flex h-[100dvh] max-w-xl flex-col gap-3 overflow-hidden p-3 font-tech"
      style={{
        paddingTop: 'calc(0.75rem + env(safe-area-inset-top))',
        paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))',
        paddingLeft: 'calc(0.75rem + env(safe-area-inset-left))',
        paddingRight: 'calc(0.75rem + env(safe-area-inset-right))',
      }}
    >
      <header className="flex items-end justify-between">
        <div>
          <div className="flex items-center gap-2">
            <div className="hud-label">{t('day')}</div>
            <LanguageToggle />
          </div>
          <div className="font-mono text-2xl font-bold leading-none tabular-nums text-parchment">
            {String(state.day).padStart(4, '0')}
            <span className="ml-1 text-xs font-normal text-parchment/35">/ {FINAL_DAY}</span>
          </div>
        </div>
        <div className="text-right">
          <div className="font-tech text-lg font-bold tracking-[0.2em] text-accent">
            {BRAND.name}
          </div>
          <div className="hud-label tracking-[0.12em] flex items-center justify-end gap-1.5">
            <span className={isCampaign ? 'text-bdred' : 'text-parchment/45'}>{isCampaign ? 'Campaign · one life' : 'Story'}</span>
            <span className="text-parchment/30">·</span>
            <span>{endgame ? 'Election' : 'Governance'}</span>
          </div>
        </div>
      </header>

      {/* timeline sliver */}
      <div className="h-0.5 w-full overflow-hidden rounded bg-white/10">
        <div className="h-full rounded bg-accent/70" style={{ width: `${dayPct}%` }} />
      </div>

      <div ref={hudRef}>
        <MetricsHud metrics={state.metrics} glow={glow} deltas={state.lastDelta} />
      </div>

      {/* ── Action toolbar: one horizontal row under the pillars ── */}
      <div className="grid grid-cols-5 gap-1.5">
        <button
          ref={sleepRef}
          className={`flex flex-col items-center gap-0.5 rounded-md border bg-steel/40 py-2 text-parchment/80 transition active:scale-95 disabled:opacity-40 ${allLocked ? 'animate-pulse border-accent' : 'border-line/60'}`}
          title={allLocked ? 'All offices closed — Sleep to reopen them' : 'Sleep · reopen the offices'}
          disabled={endgame}
          onClick={() => setSleepOpen(true)}
          style={allLocked ? { color: '#16c79a', boxShadow: '0 0 16px -4px #16c79a' } : undefined}
        >
          <IconSleep size={18} />
          <span className="hud-label leading-none">{t('sleep')}</span>
        </button>

        <button ref={favorsRef} className="relative flex flex-col items-center gap-0.5 rounded-md border border-line/60 bg-steel/40 py-2 text-parchment/80 transition active:scale-95" title="Favors" onClick={() => setFavorsOpen(true)}>
          <IconFavor size={18} />
          <span className="hud-label leading-none">{t('favors')}</span>
          {state.unlockedFavors.length > 0 && (
            <span className="absolute -right-1 -top-1 grid h-4 min-w-4 place-items-center rounded-full bg-accent px-1 font-mono text-[9px] font-bold text-ink">
              {state.unlockedFavors.length}
            </span>
          )}
        </button>

        <button className="flex flex-col items-center gap-0.5 rounded-md border border-line/60 bg-steel/40 py-2 text-parchment/80 transition active:scale-95" title="Lobbying · trade pillar points" onClick={() => setTradeOpen(true)}>
          <IconTrade size={18} />
          <span className="hud-label leading-none">{t('lobbying')}</span>
        </button>

        <button className="flex flex-col items-center gap-0.5 rounded-md border border-line/60 bg-steel/40 py-2 text-parchment/80 transition active:scale-95" title="Standings · leaderboard" onClick={() => setBoardOpen(true)}>
          <IconRank size={18} />
          <span className="hud-label leading-none">{t('standings')}</span>
        </button>

        <button className="flex flex-col items-center gap-0.5 rounded-md border border-line/60 bg-steel/40 py-2 text-parchment/80 transition active:scale-95" title="Main menu" onClick={onExit}>
          <IconHome size={18} />
          <span className="hud-label leading-none">{t('home')}</span>
        </button>
      </div>

      {/* ── Scrolling content (only this area scrolls; the bars above stay put) ── */}
      <div className="flex flex-1 flex-col gap-3 overflow-y-auto">
        {isCampaign && state.day === 1 && state.status === STATUS.PLAYING && (
          <button
            onClick={() => setFavorsOpen(true)}
            className="ribbon flex w-full items-start gap-2 border border-bdred/40 bg-bdred/10 px-3 py-2 text-left font-tech text-[11px] leading-snug text-parchment/80"
          >
            <span className="mt-0.5 shrink-0 text-bdred"><IconAlert size={13} /></span>
            <span>
              <b className="text-bdred">One life — no revives.</b> Open <b className="text-accent">Favors</b> and claim
              all three now (watch each ad) to bank buffers before the knives come out.
            </span>
          </button>
        )}

        {endgame && (
          <div className="ribbon flex items-center justify-center gap-2 border border-red-500/30 bg-red-500/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-red-300">
            <IconAlert size={13} /> Endgame · Days {ENDGAME_START_DAY}–{FINAL_DAY} · Map locked
          </div>
        )}

        <main className="flex flex-1 flex-col items-center justify-center gap-3 py-1">
          {endgame ? (
            <CardView card={cardToShow} insightActive={insightOn} difficultyFactor={df} selectedSide={review?.side} appliedDeltas={review ? state.lastDelta : null} metricsAfter={review ? state.metrics : null} onHoverSide={(ids) => setGlow(new Set(ids))} onAnswer={decide} />
          ) : openLoc || reviewing ? (
            <div className="flex w-full flex-col items-center gap-3">
              <div className="flex w-full items-center justify-between">
                <span className="flex items-center gap-2 font-tech text-sm font-semibold uppercase tracking-wide text-parchment">
                  <span className="text-accent"><LocationIcon id={headerLoc} size={18} /></span>
                  {headerMeta?.name}
                </span>
                <button className="btn-ghost flex items-center gap-1 px-2 py-1 text-[11px]" disabled={reviewing} onClick={g.closeLocation}>
                  <IconChevronLeft size={13} /> Map
                </button>
              </div>

              <CardView card={cardToShow} insightActive={insightOn} difficultyFactor={df} selectedSide={review?.side} appliedDeltas={review ? state.lastDelta : null} metricsAfter={review ? state.metrics : null} onHoverSide={(ids) => setGlow(new Set(ids))} onAnswer={decide} />
              <span className="hud-label">
                {state.locations[headerLoc]?.answered || 0}/5 answered · this department locks at 5
              </span>
            </div>
          ) : (
            <div className="w-full" ref={mapRef}>
              <p className="mb-2 text-center font-mono text-[11px] uppercase tracking-[0.15em] text-parchment/40">
                Tap a district · five answers locks it until you Sleep
              </p>
              <MapView state={state} activeLocation={openLoc} onOpen={g.openLocation} />
            </div>
          )}
        </main>
      </div>

      {showTutorial && <TutorialOverlay steps={tutorialSteps} onDone={finishTutorial} />}

      <Leaderboard open={boardOpen} onClose={() => setBoardOpen(false)} currentUid={user.uid} defaultMode={state.mode} />
      <FavorsPanel open={favorsOpen} onClose={() => setFavorsOpen(false)} state={state} onApply={g.applyFavor} busy={g.adBusy} />
      <TradePanel open={tradeOpen} onClose={() => setTradeOpen(false)} metrics={state.metrics} onTrade={g.trade} />
      <SleepPanel
        open={sleepOpen}
        onClose={() => setSleepOpen(false)}
        onSleepFree={g.sleep}
        onSleepAd={g.watchAdForSleep}
        busy={g.adBusy}
        allLocked={allLocked}
      />

      {/* Favor-unlocked popup */}
      {toast && (
        <div className="pointer-events-none fixed inset-x-0 top-6 z-[60] flex justify-center px-4">
          <div className="panel animate-card-in flex items-center gap-3 border border-accent/50 px-4 py-2.5" style={{ boxShadow: '0 0 24px -6px rgba(22,199,154,0.6)' }}>
            <span className="text-accent"><IconFavor size={20} /></span>
            <div className="leading-tight">
              <div className="font-tech text-sm font-semibold text-parchment">{FAVOR_UNLOCK_NOTICE.en}</div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-parchment/55">{toast}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
