# Shangshad — সংসদ

A narrative-driven political-survival game (think **Lapse** × **Reigns**), themed on a fictional
near-future Bangladesh and built with **React + Vite + Tailwind + Firebase**. You are the reluctant
face of an uprising, handed the seal of a broken nation. Power is a cage — superpowers, a restless
military, and your own corrupt family all want a piece. Balance 6 pillars across 2,000 days without
letting any of them collapse.

The game ships with **1,000 distinct, hand-authored scenarios** — no single dilemma repeats more
than twice across a 2,000-decision game — generated from the arc sources in `scripts/content/`.

---

## Quick start

```bash
cd political-survival-game
npm install
cp .env.example .env      # leave VITE_OFFLINE_MODE=true to run without Firebase
npm run dev               # http://localhost:5173
npm test                  # run the engine rule tests
npm run lint              # eslint (flat config)
npm run build             # production build (code-split, lazy-loaded decks)
```

`VITE_OFFLINE_MODE=true` (the default) skips Firebase entirely: auth resolves a local **guest**,
saves go to `localStorage`, and the leaderboard is local. Flip it off and fill the `VITE_FIREBASE_*`
keys to go online.

---

## The 6 metrics

| id | Metric | Hitting 0% or 100% = instant death |
|----|--------|------------------------------------|
| FI | Finance | bankruptcy / hyperinflation |
| GL | Global Relations | pariah / puppet state |
| MI | Military Security | coup / junta |
| RE | Natural Resources | blackout / resource-baron capture |
| EN | Environment & Wellbeing | famine / revolt |
| FA | Family Ties | assassination / dynastic ouster |

All start at **50%**. A revive resets the failed metric to a safe **40%**.

---

## Project structure

```
political-survival-game/
├── index.html
├── package.json
├── vite.config.js            # Vite + Vitest config
├── tailwind.config.js
├── postcss.config.js
├── firestore.rules           # security rules (own-save-only, scoped leaderboard)
├── .env.example
└── src/
    ├── main.jsx
    ├── App.jsx               # auth gate -> game
    ├── index.css             # Tailwind + component classes
    │
    ├── game/                 # ── PURE, TESTABLE GAME CORE (no React/Firebase) ──
    │   ├── constants.js      # all tunables: metrics, pacing, timeline, thresholds
    │   ├── engine.js         # createInitialState, applyChoice, revive, insight, locks…
    │   ├── gameReducer.js    # thin reducer delegating to the engine
    │   ├── deck.js           # which card to show next (standard vs endgame)
    │   ├── selectors.js      # UI-facing derived helpers
    │   └── engine.test.js    # rule tests (locks, insight, revival cap, endgame, win)
    │
    ├── data/
    │   ├── decks.js          # registry: { home:[…], …, endgame:[…] }
    │   └── cards/*.json      # one deck per location + endgame.json
    │
    ├── firebase/
    │   ├── config.js         # init + OFFLINE_MODE detection
    │   ├── auth.js           # Google / Facebook / Email (guest in offline)
    │   └── firestore.js      # saveGame / loadGame / submitScore / fetchLeaderboard
    │
    ├── ads/
    │   └── adService.js      # triggerRewardedAd() — dummy promise, swap for AdMob/Unity
    │
    ├── hooks/
    │   ├── useAuth.js
    │   └── useGameState.js   # orchestrator: reducer + autosave + decks + ad-gated actions
    │
    ├── components/
    │   ├── MetricsHud.jsx     # 6 metric bars; pulses affected icons on hover
    │   ├── MapView.jsx        # 7 locations, lock state + unlock progress
    │   ├── CardView.jsx       # the decision card; Insight reveals signed deltas
    │   ├── InsightControl.jsx # ad button + "Insight Remaining: N"
    │   ├── DeathScreen.jsx    # per-metric overthrow scenario + revive
    │   ├── EndScreen.jsx      # win (re-elected) / game over
    │   ├── Leaderboard.jsx
    │   └── AuthGate.jsx
    │
    └── screens/
        └── GameScreen.jsx     # composes the whole loop
```

---

## How the rules map to code

| Rule | Where |
|------|-------|
| 6 metrics, edges are fatal | `engine.findFatalMetric`, `constants.METRIC_MIN/MAX` |
| Max 5 answers per location, then lock | `engine.applyChoice` step 5 |
| Unlock by answering 5 elsewhere | `engine.reconcileLocks`, `unlockProgress` |
| Hover shows *which* metrics, not how much | `CardView` chips (icon + `?`) + `MetricsHud` glow |
| Insight = watch ad → next 10 questions reveal `+/-` | `adService` → `grantInsight`; `CardView` shows `formatDelta` |
| 1 question = 1 day | `engine.applyChoice` step 3 |
| Revive resets metric to 40%, max 5/run | `engine.applyRevive`, `MAX_REVIVES` |
| Day 1801 locks the map → linear election deck | `engine.enterEndgame`, `deck.nextCard` |
| Survive day 2000, average > 50 = win | `engine.finishRun`, `WIN_AVERAGE_THRESHOLD` |
| Autosave & resume | `useGameState` (debounced) → `firestore.saveGame/loadGame` |

---

## Content pipeline (generated — never hand-edit the card JSON)

The decks in `src/data/cards/*.json` are **generated**, not hand-written. The authored source lives
in `scripts/content/<deck>.mjs` as **arcs** (`ax(...)`) of ordered **stages** (`sx(...)`), each stage
being one scenario: a prompt and two choices (`[label, tooltip, reveal, effects]`).

```bash
node scripts/genDecks.mjs           # regenerate all decks
node scripts/genDecks.mjs home un   # regenerate named decks
```

`genDecks.mjs`:

1. flattens the authored arcs into base cards,
2. applies a global **difficulty tilt** (negatives bite harder, gains shrink),
3. **expands** each deck to its target by replaying scenarios across later "eras" (a distinct framing
   line per tier), **capped at `MAX_REPEAT = 2`** so no scenario is ever seen more than twice,
4. **validates** the engine contract and fails loudly if a deck has fewer than `target / 2` distinct
   scenarios (it tells you exactly how many more to author).

Targets: **home 100 distinct → 200 cards**, each of the **6 offices 150 distinct → 300 cards**
(= **1,000 distinct / 2,000 cards**), plus a separate linear `endgame` deck (days 1801–2000) that is
exempt from the repeat cap.

The generated card shape (the only contract the engine cares about is `id`, `location`, and each
choice's `effects` map):

```jsonc
{
  "id": "home-0001",                 // unique, stable
  "location": "home",                // must match a location id (or "endgame")
  "speaker": "Nasrin, your spouse",
  "portrait": "spouse",
  "tags": ["family", "blackmail"],
  "prompt": "…the narrative text…",
  "left":  { "id": "a", "label": "…", "tooltip": "…", "reveal": "…",
             "effects": { "FA": 10, "GL": -8, "MI": -6 } },
  "right": { "id": "b", "label": "…", "effects": { "FA": -14, "MI": 8 } }
}
```

`effects` only lists the metrics a choice touches; omit the rest. The generator clamps every delta to
`±MAX_DELTA` and guarantees the two choices never resolve to identical effects.

---

## Swapping in real ads

`src/ads/adService.js` exports `triggerRewardedAd(placement, onProgress) => Promise<{completed}>`.
Replace the dummy body with your SDK; resolve `{ completed: true }` only when the user watched the
full video. Every reward in the game (Insight, Revive) already checks `completed` before granting.

---

## Anti-cheat note

The offline/online leaderboard writes the client-computed average. For a shipped game, move
`submitScore` into a Cloud Function that re-derives the score from the server-validated save, and
set the `leaderboard` collection to deny direct client writes in `firestore.rules`.
