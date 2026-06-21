// Lightweight i18n for Shangshad — Bangla / English.
//
// Two layers:
//   1. UI chrome (menus, buttons, HUD labels) — hand-written translations in UI.
//   2. Scenario text (prompts, choices) — far too much to hand-translate, so when
//      Bangla is selected it is auto-translated on demand via Google's public
//      endpoint and cached in localStorage. If the network/endpoint is
//      unavailable, it falls back gracefully to the English text.
//
// The language choice is a module-level store (no provider needed) read through
// useLang(); components re-render via useSyncExternalStore.

import { useSyncExternalStore, useEffect, useState, useRef } from 'react';

export const LANGS = ['en', 'bn'];
export const LANG_LABEL = { en: 'English', bn: 'বাংলা' };
const LANG_KEY = 'shangshad:lang';
const CHOSEN_KEY = 'shangshad:lang-chosen'; // whether the first-run picker has run

// ── store ───────────────────────────────────────────────────────────────────
let _lang = (() => {
  try {
    const v = localStorage.getItem(LANG_KEY);
    return LANGS.includes(v) ? v : 'en';
  } catch {
    return 'en';
  }
})();
const listeners = new Set();
function emit() {
  listeners.forEach((l) => l());
}
export function getLang() {
  return _lang;
}
export function setLang(lang) {
  if (!LANGS.includes(lang) || lang === _lang) {
    if (LANGS.includes(lang)) markChosen();
    return;
  }
  _lang = lang;
  try {
    localStorage.setItem(LANG_KEY, lang);
  } catch {
    /* ignore */
  }
  markChosen();
  emit();
}
export function langChosen() {
  try {
    return localStorage.getItem(CHOSEN_KEY) === '1';
  } catch {
    return true;
  }
}
function markChosen() {
  try {
    localStorage.setItem(CHOSEN_KEY, '1');
  } catch {
    /* ignore */
  }
}

/** Subscribe to the current language. */
export function useLang() {
  return useSyncExternalStore(
    (cb) => {
      listeners.add(cb);
      return () => listeners.delete(cb);
    },
    getLang,
    getLang,
  );
}

// ── UI dictionary ─────────────────────────────────────────────────────────────
// Keys are stable identifiers; values are { en, bn }. t() falls back to the
// English string (or the key) if a translation is missing.
const UI = {
  // HomeScreen
  tagline: { en: 'A political survival · Bangladesh 2045', bn: 'রাজনৈতিক টিকে থাকার লড়াই · বাংলাদেশ ২০৪৫' },
  checkingSaves: { en: 'CHECKING SAVES…', bn: 'সেভ পরীক্ষা করা হচ্ছে…' },
  newGame: { en: 'New Game', bn: 'নতুন খেলা' },
  continueCampaign: { en: 'Continue Campaign', bn: 'ক্যাম্পেইন চালিয়ে যান' },
  continueStory: { en: 'Continue Story', bn: 'স্টোরি চালিয়ে যান' },
  howToPlay: { en: 'How to play', bn: 'কীভাবে খেলবেন' },
  leaderboard: { en: 'Leaderboard', bn: 'লিডারবোর্ড' },
  hallOfLeaders: { en: 'Hall of Leaders', bn: 'নেতাদের তালিকা' },
  settings: { en: 'Settings', bn: 'সেটিংস' },
  choosePath: { en: 'Choose your path', bn: 'আপনার পথ বেছে নিন' },
  back: { en: 'Back', bn: 'পিছনে' },
  day: { en: 'Day', bn: 'দিন' },
  noRun: { en: 'No run', bn: 'কোনো খেলা নেই' },
  starLeaders: { en: 'Star Leaders · Campaign · 7 Days', bn: 'সেরা নেতা · ক্যাম্পেইন · ৭ দিন' },
  cancel: { en: 'Cancel', bn: 'বাতিল' },
  overwrite: { en: 'Overwrite', bn: 'মুছে নতুন করুন' },
  modeStory: { en: 'Story', bn: 'স্টোরি' },
  modeCampaign: { en: 'Campaign', bn: 'ক্যাম্পেইন' },
  storyTagline: { en: 'The long reign', bn: 'দীর্ঘ শাসন' },
  campaignTagline: { en: 'One life', bn: 'একটিমাত্র জীবন' },
  storyBlurb: {
    en: 'Govern toward day 2000. Fail a pillar and you may watch an ad to revive — up to 25 times. Forgiving; built to see the whole story.',
    bn: 'দিন ২০০০ পর্যন্ত শাসন করুন। কোনো স্তম্ভ ভেঙে পড়লে বিজ্ঞাপন দেখে ফিরে আসতে পারবেন — ২৫ বার পর্যন্ত। সহজ; পুরো গল্প দেখার জন্য তৈরি।',
  },
  campaignBlurb: {
    en: 'The first removal is final — no revives. Claim all three favors at the very start, and bank each one the game offers.',
    bn: 'প্রথম পতনই শেষ — কোনো পুনরুজ্জীবন নেই। শুরুতেই তিনটি সুবিধা নিন, আর খেলা যা দেয় তা জমিয়ে রাখুন।',
  },
  restartConfirm: { en: 'Restart', bn: 'আবার শুরু' },
  overwritesRun: { en: 'Overwrites that run on', bn: 'মুছে দেবে সেই খেলা —' },
  otherUntouched: { en: 'Your other run is untouched', bn: 'আপনার অন্য খেলাটি অক্ষত থাকবে' },

  // GameScreen toolbar / chrome
  sleep: { en: 'Sleep', bn: 'বিশ্রাম' },
  favors: { en: 'Favors', bn: 'সুবিধা' },
  lobbying: { en: 'Lobbying', bn: 'তদবির' },
  standings: { en: 'Standings', bn: 'অবস্থান' },
  home: { en: 'Home', bn: 'মেনু' },
  decisionMatters: { en: 'Your decision matters', bn: 'আপনার সিদ্ধান্তই গুরুত্বপূর্ণ' },
  restNow: { en: 'Rest', bn: 'বিশ্রাম' },

  // MetricsHud pillar labels + overflow
  FINANCE: { en: 'FINANCE', bn: 'অর্থ' },
  GLOBAL: { en: 'GLOBAL', bn: 'বিশ্ব' },
  MILITARY: { en: 'MILITARY', bn: 'সামরিক' },
  RESOURCE: { en: 'RESOURCE', bn: 'সম্পদ' },
  WELFARE: { en: 'WELFARE', bn: 'কল্যাণ' },
  FAMILY: { en: 'FAMILY', bn: 'পরিবার' },
  overflow: { en: 'Overflow', bn: 'উপচে পড়া' },

  // Settings
  language: { en: 'Language', bn: 'ভাষা' },
  languageHint: { en: 'Interface language. Scenarios auto-translate when online.', bn: 'ইন্টারফেসের ভাষা। অনলাইনে থাকলে দৃশ্যপটগুলো স্বয়ংক্রিয়ভাবে অনূদিত হয়।' },

  // First-run picker
  pickLanguage: { en: 'Choose your language', bn: 'আপনার ভাষা বেছে নিন' },
  pickLanguageSub: { en: 'You can change this any time in Settings.', bn: 'যেকোনো সময় সেটিংস থেকে বদলাতে পারবেন।' },
};

export function t(key, lang = getLang()) {
  const e = UI[key];
  if (!e) return key;
  return e[lang] ?? e.en ?? key;
}

/** Hook form: returns a t() bound to the live language and the language code. */
export function useT() {
  const lang = useLang();
  return { lang, t: (key) => t(key, lang) };
}

// ── scenario auto-translation (Google, cached) ───────────────────────────────
const memCache = new Map();
function cacheKey(text) {
  return 'shangshad:tr:bn:' + text;
}
function readCache(text) {
  if (memCache.has(text)) return memCache.get(text);
  try {
    const v = localStorage.getItem(cacheKey(text));
    if (v != null) memCache.set(text, v);
    return v;
  } catch {
    return null;
  }
}
function writeCache(text, translated) {
  memCache.set(text, translated);
  try {
    localStorage.setItem(cacheKey(text), translated);
  } catch {
    /* storage full — keep it in memory only */
  }
}

async function fetchTranslation(text) {
  const cached = readCache(text);
  if (cached != null) return cached;
  const url =
    'https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=bn&dt=t&q=' +
    encodeURIComponent(text);
  const res = await fetch(url);
  if (!res.ok) throw new Error('translate http ' + res.status);
  const data = await res.json();
  // data[0] is an array of [translatedChunk, originalChunk, ...]
  const out = (data?.[0] || []).map((c) => c?.[0] ?? '').join('');
  const result = out || text;
  writeCache(text, result);
  return result;
}

/**
 * Translate a single English string to Bangla when the language is bn.
 * Returns the English text immediately, then the Bangla once fetched/cached.
 */
export function useTranslated(text) {
  const lang = useLang();
  const [out, setOut] = useState(() => (lang === 'bn' && text ? readCache(text) || text : text));

  useEffect(() => {
    if (lang !== 'bn' || !text) {
      setOut(text);
      return;
    }
    const cached = readCache(text);
    if (cached != null) {
      setOut(cached);
      return;
    }
    let alive = true;
    setOut(text); // show English while the translation is in flight
    fetchTranslation(text)
      .then((tr) => alive && setOut(tr))
      .catch(() => alive && setOut(text));
    return () => {
      alive = false;
    };
  }, [text, lang]);

  return out;
}

/**
 * Translate a whole card (prompt + both choices' label/tooltip/reveal) to Bangla.
 * Returns a card-shaped object; English until the Bangla arrives, then swaps.
 */
export function useTranslatedCard(card) {
  const lang = useLang();
  const [tr, setTr] = useState(null);
  const idRef = useRef(null);

  useEffect(() => {
    if (lang !== 'bn' || !card) {
      setTr(null);
      return;
    }
    idRef.current = card.id;
    let alive = true;

    const strings = [];
    const push = (s) => {
      if (s) strings.push(s);
    };
    push(card.prompt);
    ['left', 'right'].forEach((side) => {
      push(card[side]?.label);
      push(card[side]?.tooltip);
      push(card[side]?.reveal);
    });

    Promise.all(strings.map((s) => fetchTranslation(s).catch(() => s)))
      .then(() => {
        if (!alive || idRef.current !== card.id) return;
        const tx = (s) => (s ? readCache(s) || s : s);
        setTr({
          ...card,
          prompt: tx(card.prompt),
          left: card.left && { ...card.left, label: tx(card.left.label), tooltip: tx(card.left.tooltip), reveal: tx(card.left.reveal) },
          right: card.right && { ...card.right, label: tx(card.right.label), tooltip: tx(card.right.tooltip), reveal: tx(card.right.reveal) },
        });
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, [card, lang]);

  return lang === 'bn' && tr && tr.id === card?.id ? tr : card;
}

// ── reusable toggle ───────────────────────────────────────────────────────────
export function LanguageToggle({ className = '' }) {
  const lang = useLang();
  return (
    <div className={`inline-flex overflow-hidden rounded-full border border-line/60 text-[10px] font-tech ${className}`}>
      {LANGS.map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-2 py-0.5 transition ${
            lang === l ? 'bg-accent/20 text-accent' : 'text-parchment/50 hover:text-parchment'
          }`}
          aria-pressed={lang === l}
        >
          {l === 'en' ? 'EN' : 'বাং'}
        </button>
      ))}
    </div>
  );
}

/** First-run language chooser overlay (shown once, until a choice is made). */
export function LanguageGate() {
  const [show, setShow] = useState(() => !langChosen());
  useLang(); // re-render on change
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-ink/90 p-6 font-tech backdrop-blur-sm">
      <div className="panel w-full max-w-xs p-5 text-center">
        <div className="mb-1 font-tech text-lg font-bold text-bdjade">{t('pickLanguage', 'en')}</div>
        <div className="mb-4 font-tech text-base text-bdjade">{t('pickLanguage', 'bn')}</div>
        <div className="flex flex-col gap-2">
          {LANGS.map((l) => (
            <button
              key={l}
              className="btn-primary py-2.5 text-base"
              onClick={() => {
                setLang(l);
                setShow(false);
              }}
            >
              {LANG_LABEL[l]}
            </button>
          ))}
        </div>
        <p className="mt-3 font-mono text-[9px] uppercase tracking-wider text-parchment/40">{t('pickLanguageSub', 'en')}</p>
      </div>
    </div>
  );
}
