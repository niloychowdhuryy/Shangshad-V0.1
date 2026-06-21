import { useEffect, useState } from 'react';
import { BACKSTORY } from '../game/brand.js';
import { loadGame, fetchWeeklyStars } from '../firebase/firestore.js';
import { migrateState } from '../game/engine.js';
import { STATUS, MODES } from '../game/constants.js';
import { loadProfile, saveProfile } from '../game/profile.js';
import Leaderboard from './Leaderboard.jsx';
import HowToPlay from './HowToPlay.jsx';
import SettingsPanel from './SettingsPanel.jsx';
import AchievementsPanel from './AchievementsPanel.jsx';
import Avatar from './Avatar.jsx';
import { useT, LanguageToggle, LanguageGate } from '../i18n/i18n.jsx';
import {
  IconShapla, IconPlay, IconNew, IconBook, IconRank, IconAlert,
  IconChevronLeft, IconLock, IconSettings, IconStar,
} from './icons/Icons.jsx';

// The two ways to play, shown (with the backstory) after pressing New Game.
// Labels/blurbs come from the i18n dictionary (keyed by mode) so they translate.
const MODE_INFO = [
  { id: MODES.STORY, nameKey: 'modeStory', taglineKey: 'storyTagline', blurbKey: 'storyBlurb' },
  { id: MODES.CAMPAIGN, nameKey: 'modeCampaign', taglineKey: 'campaignTagline', blurbKey: 'campaignBlurb' },
];

const isInProgress = (s) => s && s.status !== STATUS.GAME_OVER && s.status !== STATUS.WON && s.day > 1;

// A "Continue <mode>" button — enabled only when that mode has a live save.
function ContinueBtn({ live, day, label, onClick }) {
  const { t } = useT();
  return (
    <button
      disabled={!live}
      onClick={onClick}
      className={`flex items-center justify-between gap-2 rounded-md px-3 py-2.5 text-sm transition ${
        live ? 'btn-ghost border-accent/40' : 'cursor-not-allowed border border-line/40 bg-white/[0.01] text-parchment/30'
      }`}
    >
      <span className="flex items-center gap-2 font-tech font-semibold">
        {live ? <IconPlay size={14} /> : <IconLock size={13} />} {label}
      </span>
      <span className="font-mono text-[10px] uppercase tracking-wider text-parchment/45">
        {live ? `${t('day')} ${day}` : t('noRun')}
      </span>
    </button>
  );
}

export default function HomeScreen({ user, onPlay }) {
  const { t } = useT();
  const [saves, setSaves] = useState(undefined); // undefined = loading; { story, campaign }
  const [profile, setProfile] = useState(() => loadProfile(user));
  const [stars, setStars] = useState([]);
  const [board, setBoard] = useState(false);
  const [help, setHelp] = useState(false);
  const [settings, setSettings] = useState(false);
  const [hall, setHall] = useState(false); // Hall of Leaders (achievements + titles)
  const [logoOk, setLogoOk] = useState(true); // fall back to the icon if /logo.png is missing
  const [picking, setPicking] = useState(false); // New Game -> backstory + mode select
  const [pendingMode, setPendingMode] = useState(null); // awaiting overwrite confirm

  useEffect(() => {
    let alive = true;
    Promise.all([loadGame(user.uid, MODES.STORY), loadGame(user.uid, MODES.CAMPAIGN)])
      .then(([s, c]) => alive && setSaves({ story: s ? migrateState(s) : null, campaign: c ? migrateState(c) : null }))
      .catch(() => alive && setSaves({ story: null, campaign: null }));
    fetchWeeklyStars(3).then((r) => alive && setStars(r)).catch(() => {});
    return () => {
      alive = false;
    };
  }, [user.uid]);

  const progress = saves
    ? { [MODES.STORY]: isInProgress(saves.story), [MODES.CAMPAIGN]: isInProgress(saves.campaign) }
    : {};

  const chooseMode = (mode) => {
    if (progress[mode]) {
      // That mode has a live run — show the overwrite confirm. Leave the picking
      // screen first, or its branch would keep rendering and nothing would show.
      setPicking(false);
      setPendingMode(mode);
    } else {
      onPlay('new', mode);
    }
  };

  return (
    <div
      className="relative grid min-h-screen place-items-center overflow-hidden p-5 font-tech"
      style={{ paddingTop: 'calc(1.25rem + env(safe-area-inset-top))', paddingBottom: 'calc(1.25rem + env(safe-area-inset-bottom))' }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-90">
        <div className="absolute left-1/2 top-[26%] h-72 w-72 -translate-x-[58%] -translate-y-1/2 rounded-full bg-bdred/20 blur-3xl" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(70% 50% at 50% 6%, rgba(0,106,78,0.35), transparent 60%)' }} />
      </div>

      <LanguageGate />
      {/* Tiny language toggle, top-right */}
      <div className="absolute right-4 z-20" style={{ top: 'calc(0.75rem + env(safe-area-inset-top))' }}>
        <LanguageToggle />
      </div>

      <div className="relative z-10 w-full max-w-sm">
        {/* Title block */}
        <div className="mb-5 text-center">
          <div className="mb-1 flex justify-center text-bdjade" style={{ filter: 'drop-shadow(0 0 22px rgba(22,199,154,0.45))' }}>
            {logoOk ? (
              <img
                src="/logo.png"
                alt="Shangshad"
                className="h-24 w-auto max-w-[78%] object-contain"
                onError={() => setLogoOk(false)}
              />
            ) : (
              <IconShapla size={48} stroke={1.4} />
            )}
          </div>
          <h1 className="font-tech text-3xl font-bold tracking-[0.42em] text-bdjade">SHANGSHAD</h1>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.3em] text-parchment/40">{t('tagline')}</p>
        </div>

        {saves === undefined ? (
          <div className="py-6 text-center font-mono text-xs text-parchment/40">{t('checkingSaves')}</div>
        ) : picking ? (
          /* New Game → the story, then the mode choice */
          <div className="flex flex-col gap-2">
            <div className="panel max-h-40 overflow-y-auto p-4">
              <p className="font-serif text-[13px] leading-relaxed text-parchment/75">
                {BACKSTORY[0]} {BACKSTORY[1]} <span className="text-parchment/90">{BACKSTORY[2]}</span> {BACKSTORY[3]}
              </p>
            </div>
            <p className="mt-1 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-parchment/45">{t('choosePath')}</p>
            {MODE_INFO.map((m) => (
              <button
                key={m.id}
                className="panel flex touch-manipulation flex-col gap-1 p-3 text-left transition hover:border-accent/60"
                onClick={() => chooseMode(m.id)}
              >
                <span className="flex items-center gap-2">
                  <span className={m.id === MODES.CAMPAIGN ? 'text-bdred' : 'text-accent'}>
                    {m.id === MODES.CAMPAIGN ? <IconAlert size={16} /> : <IconNew size={16} />}
                  </span>
                  <span className="font-tech text-base font-bold text-parchment">{t(m.nameKey)}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-parchment/45">{t(m.taglineKey)}</span>
                </span>
                <span className="font-serif text-[12px] leading-snug text-parchment/65">{t(m.blurbKey)}</span>
              </button>
            ))}
            <button className="btn-ghost flex items-center justify-center gap-1 text-xs" onClick={() => setPicking(false)}>
              <IconChevronLeft size={13} /> {t('back')}
            </button>
          </div>
        ) : pendingMode ? (
          <div className="panel flex flex-col gap-2 p-3">
            <p className="text-center font-mono text-[11px] uppercase tracking-wider text-bdred">
              {t('restartConfirm')} {t(pendingMode === MODES.CAMPAIGN ? 'modeCampaign' : 'modeStory')}? {t('overwritesRun')} {t('day').toLowerCase()} {saves[pendingMode]?.day}
            </p>
            <p className="text-center font-mono text-[9px] uppercase tracking-wider text-parchment/45">
              {t('otherUntouched')}
            </p>
            <div className="grid grid-cols-2 gap-2">
              <button className="btn-ghost text-xs" onClick={() => setPendingMode(null)}>{t('cancel')}</button>
              <button className="btn-primary text-xs" onClick={() => onPlay('new', pendingMode)}>{t('overwrite')}</button>
            </div>
          </div>
        ) : (
          /* Main menu */
          <div className="flex flex-col gap-2">
            {/* This week's star leaders */}
            {stars.length > 0 && (
              <div className="panel mb-1 p-3">
                <div className="mb-2 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-amber-300">
                  <IconStar size={12} /> {t('starLeaders')}
                </div>
                <ol className="flex flex-col gap-1.5">
                  {stars.map((r, i) => (
                    <li key={r.uid} className="flex items-center gap-2">
                      <span className="w-4 text-center font-mono text-xs font-bold tabular-nums" style={{ color: ['#f5c542', '#c9d1da', '#cd7f32'][i] }}>{i + 1}</span>
                      <Avatar seed={r.avatarSeed || r.uid} name={r.displayName} photoURL={r.photoURL} size={22} />
                      <span className="min-w-0 flex-1 truncate font-tech text-sm text-parchment">{r.displayName}</span>
                      <span className="font-mono text-sm font-semibold tabular-nums text-parchment/80">{(r.days ?? 0).toLocaleString()}d</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            <button className="btn-primary flex touch-manipulation items-center justify-center gap-2 py-3 text-base" onClick={() => setPicking(true)}>
              <IconNew size={16} /> {t('newGame')}
            </button>

            <ContinueBtn
              live={progress[MODES.CAMPAIGN]}
              day={saves[MODES.CAMPAIGN]?.day}
              label={t('continueCampaign')}
              onClick={() => onPlay('continue', MODES.CAMPAIGN)}
            />
            <ContinueBtn
              live={progress[MODES.STORY]}
              day={saves[MODES.STORY]?.day}
              label={t('continueStory')}
              onClick={() => onPlay('continue', MODES.STORY)}
            />

            <div className="mt-1 grid grid-cols-2 gap-2">
              <button className="btn-ghost flex items-center justify-center gap-2 text-sm" onClick={() => setHelp(true)}>
                <IconBook size={15} /> {t('howToPlay')}
              </button>
              <button className="btn-ghost flex items-center justify-center gap-2 text-sm" onClick={() => setBoard(true)}>
                <IconRank size={15} /> {t('leaderboard')}
              </button>
            </div>
            <button className="btn-ghost flex items-center justify-center gap-2 text-sm" onClick={() => setHall(true)}>
              <IconStar size={15} /> {t('hallOfLeaders')}
            </button>
          </div>
        )}

        {/* Footer / account + settings */}
        {!picking && !pendingMode && (
          <div className="mt-6 flex items-center justify-between border-t border-line/40 pt-3">
            <button className="flex min-w-0 items-center gap-2" onClick={() => setSettings(true)}>
              <Avatar seed={profile.avatarSeed || user.uid} name={profile.username} photoURL={profile.publicProfile ? profile.photoURL : null} size={22} />
              <span className="truncate font-mono text-[10px] uppercase tracking-wider text-parchment/45">{profile.username}</span>
            </button>
            <button className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-parchment/50 hover:text-accent" onClick={() => setSettings(true)}>
              <IconSettings size={14} /> {t('settings')}
            </button>
          </div>
        )}
      </div>

      <Leaderboard open={board} onClose={() => setBoard(false)} currentUid={user.uid} />
      <HowToPlay open={help} onClose={() => setHelp(false)} />
      <AchievementsPanel open={hall} onClose={() => setHall(false)} profile={profile} />
      <SettingsPanel
        open={settings}
        onClose={() => setSettings(false)}
        user={user}
        profile={profile}
        onSave={(patch) => setProfile(saveProfile(user.uid, { ...profile, ...patch }))}
      />
    </div>
  );
}
