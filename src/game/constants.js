// ─────────────────────────────────────────────────────────────────────────────
// Core tunable constants. Change balance here, not scattered through the engine.
// ─────────────────────────────────────────────────────────────────────────────

export const SCHEMA_VERSION = 1;

// The 6 metrics. Order here is the canonical display order.
// `color` drives every gauge/ring/glow in the UI. Icons are SVG components
// resolved by id via components/icons/Icons.jsx (no emoji).
export const METRICS = [
  { id: 'FI', name: 'Finance', short: 'FINANCE', color: '#f5c542' },
  { id: 'GL', name: 'Global Relations', short: 'GLOBAL', color: '#38bdf8' },
  { id: 'MI', name: 'Military Security', short: 'MILITARY', color: '#ff5470' },
  { id: 'RE', name: 'Natural Resources', short: 'RESOURCE', color: '#ffa726' },
  { id: 'EN', name: 'Environment & Wellbeing', short: 'WELFARE', color: '#34d399' },
  { id: 'FA', name: 'Family Ties', short: 'FAMILY', color: '#b06bff' },
];

export const METRIC_IDS = METRICS.map((m) => m.id);
export const METRIC_BY_ID = Object.fromEntries(METRICS.map((m) => [m.id, m]));

// Metric bounds. Hitting 0 is fatal (collapse). The top is no longer an instant
// edge: at OVERFLOW_THRESHOLD (100%) a pillar starts "OVERFLOWING" — too much of
// a good thing — and only at OVERFLOW_FATAL (120%) does the surplus collapse the
// regime (idle budget, a coup, a pre-emptive strike, a spoilt dynasty…).
export const METRIC_MIN = 0;
export const OVERFLOW_THRESHOLD = 100; // enters the danger "overflowing" band
export const OVERFLOW_FATAL = 120; // surplus collapse — fatal high edge
export const METRIC_MAX = OVERFLOW_FATAL; // clamp ceiling
export const METRIC_START = 50; // every metric begins at a neutral 50%
export const REVIVE_RESET_VALUE = 50; // a revived pillar is restored to 50%

// Map / pacing rules.
export const MAX_CONSECUTIVE_PER_LOCATION = 5; // answer 5 here, then it locks until you Sleep

// Insight power-up.
export const INSIGHT_QUESTIONS_GRANTED = 10;

// ─────────────────────────────────────────────────────────────────────────────
// Game modes. Two ways to play, chosen at New Game:
//   STORY    — the long campaign with ad-revives (up to MAX_TOTAL_REVIVES) and
//              the rapid-death rate limits. Forgiving; built to reach day 2000.
//   CAMPAIGN — one life. The FIRST removal ends the run, no revives. To offset
//              that, all three power-ups are offered up front (claim each by ad)
//              so a careful player can stockpile buffers before the knives come.
// ─────────────────────────────────────────────────────────────────────────────
export const MODES = { STORY: 'story', CAMPAIGN: 'campaign' };
export const DEFAULT_MODE = MODES.STORY;

// Revival economy: you may revive (by ad) up to MAX_TOTAL_REVIVES times over a
// run. Beyond that the people no longer trust you and the run restarts. On top
// of the lifetime cap, dying too fast also collapses the regime — each windowed
// rule = {deaths, days}.
export const MAX_TOTAL_REVIVES = 25; // 25 ad-revives; the 26th removal is terminal
export const DEATH_LIMITS = [
  { deaths: 3, days: 20 }, // 3 removals within 20 days -> restart
  { deaths: 5, days: 50 }, // 5 removals within 50 days -> restart
];

// ── Favors (power-ups) ───────────────────────────────────────────────────────
// Favors are claimed from the Favors panel. One random LOCKED favor UNLOCKS
// every POWERUP_INTERVAL decisions (a "favor unlocked" notice fires).
// Applying an unlocked favor costs a rewarded ad. Each favor has its own effect:
//   un_support  — buff: for the next 3 decisions no pillar can fall below 25%;
//                 pillars already under 25% are protected from dropping (they can
//                 still rise).
//   finance_fill— instant: Finance restored to 50% (usable only when FI < 50).
//   advisor     — buff: Insight (exact deltas) for the next 7 decisions.
export const POWERUP_INTERVAL = 15; // decisions between favor unlocks

export const FAVOR_FLOOR = 25; // UN stabilisation floor
export const UN_SUPPORT_DURATION = 3; // decisions the UN floor lasts
export const ADVISOR_DURATION = 7; // decisions of Insight from the advisor
export const FINANCE_RESET_VALUE = 50; // Foreign Donations restores Finance to this

export const FAVOR_UNLOCK_NOTICE = { en: 'You have unlocked a favor' };

export const POWERUPS = [
  {
    id: 'un_support',
    name: 'UN Stabilisation',
    blurb: 'The UN is propping up your government.',
    effect: `For ${UN_SUPPORT_DURATION} decisions no pillar can fall below ${FAVOR_FLOOR}%; pillars already below ${FAVOR_FLOOR}% can't drop, but can still recover.`,
  },
  {
    id: 'finance_fill',
    name: 'Foreign Donations',
    blurb: 'A wave of donations steadies the books.',
    effect: `Finance is restored to ${FINANCE_RESET_VALUE}% (only usable below ${FINANCE_RESET_VALUE}%).`,
  },
  {
    id: 'advisor',
    name: 'Wise Advisor',
    blurb: 'An incorruptible advisor walks beside you.',
    effect: `For ${ADVISOR_DURATION} decisions, every choice reveals exactly what it changes.`,
  },
];
export const POWERUP_BY_ID = Object.fromEntries(POWERUPS.map((p) => [p.id, p]));
export const FAVOR_IDS = POWERUPS.map((p) => p.id);

// Favors unlocked from the very start in CAMPAIGN (claim each by ad). Advise
// players to bank all three early — they have no second life.
export const STARTUP_POWERUPS = FAVOR_IDS;

// ── Sleep & Lobby/Trade (map actions) ────────────────────────────────────────
export const SLEEP_DELTA = 5; // sleeping shifts every pillar by ±this, at random
// Lobby & Trade: sacrifice TRADE_COST of Finance OR Military to buy TRADE_GAIN
// of any pillar (you lobby with your money/muscle for a point elsewhere).
export const TRADE_COST = 4; // spent from a source pillar...
export const TRADE_GAIN = 1; // ...to gain this on any target pillar
export const TRADE_SOURCES = ['FI', 'MI']; // only Finance/Military can be spent

// ── Difficulty ───────────────────────────────────────────────────────────────
// On top of the baked-in card tilt, negative effects bite harder the longer you
// rule: every DIFFICULTY_RAMP_EVERY decisions adds DIFFICULTY_STEP, capped.
export const DIFFICULTY_RAMP_EVERY = 40; // ramps sooner
export const DIFFICULTY_STEP = 0.06; // and steeper
export const DIFFICULTY_CAP = 1.9; // up to +90% on negatives late game

// Campaign timeline.
export const DAY_START = 1;
export const ENDGAME_START_DAY = 1801; // map locks; forced linear election deck
export const FINAL_DAY = 2000; // survive past this to trigger the win check
export const WIN_AVERAGE_THRESHOLD = 50; // strictly ABOVE this average = reelection

// Location ids. The endgame deck is a virtual "location" the engine forces you into.
//   coords:        { x, y } as percentages on the map canvas (hub-and-spoke).
//   district:      the on-map place name (flavor, Dhaka-inspired like the ref).
//   primaryMetric: the metric whose health drives this node's crisis status.
//   icon is resolved by id in components/icons/Icons.jsx.
// Hexagonal hub-and-spoke: 'home' (the Residence) sits dead center — the seat of
// power — and the six ministries/offices ring it evenly. Coordinates are kept
// clear of each other so labels never collide.
export const LOCATIONS = [
  { id: 'home', name: 'Residence', district: 'GANABHABAN', blurb: 'Family, affairs, betrayals.', primaryMetric: 'FA', coords: { x: 50, y: 50 } },
  { id: 'un', name: 'Global Relations', district: 'GULSHAN', blurb: 'Geopolitics, treaties, crises.', primaryMetric: 'GL', coords: { x: 50, y: 13 } },
  { id: 'resources', name: 'Resources Ministry', district: 'BASHUNDHARA', blurb: 'Energy, mining, trade.', primaryMetric: 'RE', coords: { x: 82, y: 32 } },
  { id: 'party', name: 'Party Office', district: 'BANANI', blurb: 'Backroom deals, election prep.', primaryMetric: 'MI', coords: { x: 18, y: 32 } },
  { id: 'interior', name: 'Home Ministry', district: 'TEJGAON', blurb: 'Police, surveillance, riots.', primaryMetric: 'MI', coords: { x: 82, y: 68 } },
  { id: 'environment', name: 'Environment Ministry', district: 'DHANMONDI', blurb: 'Green policy, healthcare.', primaryMetric: 'EN', coords: { x: 18, y: 68 } },
  { id: 'finance', name: 'Finance Ministry', district: 'MOTIJHEEL', blurb: 'Budgets, taxes, corporate deals.', primaryMetric: 'FI', coords: { x: 50, y: 87 } },
];

// The center node every spoke connects to (the seat of power on the map).
export const MAP_HUB_ID = 'home';

export const ENDGAME_LOCATION_ID = 'endgame';
export const LOCATION_IDS = LOCATIONS.map((l) => l.id);

// Game status enum.
export const STATUS = {
  PLAYING: 'playing',
  DEATH_PENDING: 'death_pending', // a metric hit an edge; awaiting revive-or-quit
  GAME_OVER: 'game_over', // permanent loss (out of revives, or lost election)
  WON: 'won', // survived to 2000 with average > 50
};

export const PHASE = {
  STANDARD: 'standard', // days 1–1800, free map navigation
  ENDGAME: 'endgame', // days 1801–2000, linear election deck
};
