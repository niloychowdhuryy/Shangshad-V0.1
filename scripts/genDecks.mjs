// ─────────────────────────────────────────────────────────────────────────────
// genDecks.mjs — authors the location card decks for "Shangshad".
//
// Content is hand-written as ARCS (recurring conflicts told as ordered, distinct
// STAGES). See scripts/content/*.mjs. This builder:
//   1. flattens the authored arcs into base cards,
//   2. applies a global DIFFICULTY tilt (negatives bite harder, gains shrink) so
//      the game is harder for everyone and removals come more often,
//   3. EXPANDS each location to its DECK_TARGET by replaying the authored cards
//      across later "eras" of the long reign — each era prepends a distinct
//      framing line and ramps the stakes. Expansion is CAPPED at MAX_REPEAT (2):
//      no scenario is ever seen more than twice, so a deck must author at least
//      target/2 distinct scenarios (~1000 across the whole 2000-card game) or
//      generation fails loudly. Era variants reuse a card's two choices but
//      never its prompt, and the authored stages always come first.
//   4. validates the engine contract and writes src/data/cards/<loc>.json.
//
//   run:  node scripts/genDecks.mjs            (all decks)
//         node scripts/genDecks.mjs home un    (named decks)
// ─────────────────────────────────────────────────────────────────────────────

import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

import { HOME } from './content/home.mjs';
import { UN } from './content/un.mjs';
import { FINANCE } from './content/finance.mjs';
import { INTERIOR } from './content/interior.mjs';
import { RESOURCES } from './content/resources.mjs';
import { ENVIRONMENT } from './content/environment.mjs';
import { PARTY } from './content/party.mjs';
import { ENDGAME } from './content/endgame.mjs';

const METRICS = ['FI', 'GL', 'MI', 'RE', 'EN', 'FA'];
const MAX_DELTA = 18;

// No authored scenario may appear more than this many times across its deck.
// With ~1000 distinct scenarios authored, 1000 × 2 = 2000 fills the game with no
// prompt seen more than twice. A deck must author at least target/2 distinct
// scenarios or generation fails loudly (see validate()).
const MAX_REPEAT = 2;

// The endgame is the linear election finale (days 1801–2000), played once in
// sequence — not part of the 2000-card "question span" the cap governs. It keeps
// filling its 200 slots from its authored stages, so it is exempt from the cap.
const NO_CAP = new Set(['endgame']);
const repeatCap = (loc) => (NO_CAP.has(loc) ? Infinity : MAX_REPEAT);

// Total questions across home + the six offices = 2000 (Home gets 200 so the
// dynastic storyline stays prominent). The endgame is a separate linear finale.
const DECK_TARGETS = {
  home: 200,
  un: 300,
  finance: 300,
  interior: 300,
  resources: 300,
  environment: 300,
  party: 300,
  endgame: 200,
};

const DECKS = {
  home: HOME,
  un: UN,
  finance: FINANCE,
  interior: INTERIOR,
  resources: RESOURCES,
  environment: ENVIRONMENT,
  party: PARTY,
  endgame: ENDGAME,
};

// ── Difficulty (baked-in tilt) ───────────────────────────────────────────────
// A flat tilt applied to every card: negatives bite harder, gains shrink. The
// PROGRESSIVE difficulty (harder every 50 decisions) is applied at runtime in
// the engine, so it scales with the player, not with which card was drawn.
const DIFFICULTY = { neg: 1.6, pos: 0.8 };

function shapeDelta(v) {
  const sign = Math.sign(v) || 1;
  const mag = Math.min(MAX_DELTA, Math.max(1, Math.round(Math.abs(v)))); // never 0, never > cap
  return sign * mag;
}

function effectsFor(baseEffects) {
  const out = {};
  for (const [k, v] of Object.entries(baseEffects)) {
    out[k] = v < 0 ? shapeDelta(v * DIFFICULTY.neg) : shapeDelta(v * DIFFICULTY.pos);
  }
  return out;
}

// Era framings prepended to a card when it returns in a later term. Generic
// enough to lead any dilemma; one distinct line per tier keeps prompts unique.
const ERA_FRAMES = [
  'A term later, the same fault line tears open again.',
  'Years into your rule, the matter you thought buried resurfaces — harder.',
  'A new season of power, an old problem with sharper teeth.',
  'The crisis returns, and this time the cabinet is watching.',
  'Once more the issue lands on your desk, the stakes higher than before.',
  'Another year survived, and the reckoning circles back.',
  'The ground has shifted; the same demand arrives with new menace.',
  'History rhymes: the conflict reopens deeper than last time.',
  'Mid-reign, the old wound is torn afresh.',
  'The pressure you deferred has come due, larger now.',
  'A later term, and the quarrel has hardened into a test.',
  'The country has changed, but this fault line has not — only worsened.',
  'It returns, as these things do, with the patience gone.',
  'Years on, the matter is no longer private; the press is already circling.',
  'The same knot, retied tighter, lands before you once more.',
  'Another monsoon, another return of an argument you cannot end.',
  'Deep into the reign, the issue demands a final-sounding answer.',
  'The reckoning you postponed has matured into a crisis.',
  'A new chapter, the same antagonists, less room to manoeuvre.',
  'The old fault line widens; this time there is no quiet option.',
  'Time has not healed it — the conflict comes back armed.',
  'Once again, and with the whole house holding its breath.',
  'The matter resurfaces in a harder year, patience exhausted.',
  'A later season of rule, the stakes now openly existential.',
  'It comes around again, and the margin for error is gone.',
  'The same demand, but the reign is older and the knives sharper.',
  'Years deep, the unresolved returns to be resolved for good.',
  'The conflict reignites, and the world is watching this time.',
  'A familiar crisis, escalated by everything you let slide.',
  'The fault line cracks wider; the decision can no longer wait.',
  'Late in the reign, the old question demands a heavier answer.',
  'It returns once more — and this round may be the one remembered.',
  'The reckoning circles back, grown teeth in the waiting.',
  'Another term, the same antagonist, the stakes raised again.',
  'The matter, long deferred, lands with the force of a verdict.',
  'Years on and unhealed, the conflict returns to claim its answer.',
  'The same fault line, the harder hour, the narrower path.',
  'It comes back sharpened by every season you survived.',
  'A later year of power, the old crisis now a true test of it.',
  'The unresolved returns, and this time it will not be deferred.',
];

// ── BUILD ────────────────────────────────────────────────────────────────────
function flattenBase(location, arcs) {
  const base = [];
  // Keep each card's arc index + stage so the deck can play an arc's stages in
  // order (escalating, resolving storylines) rather than as scattered one-offs.
  arcs.forEach((a, arcSeq) => {
    a.stages.forEach((st, stage) => {
      base.push({ speaker: a.speaker, portrait: a.portrait, tags: a.tags, arcSeq, stage, ...st });
    });
  });
  return base;
}

function makeChoice(side, [label, tooltip, reveal, effects]) {
  return {
    id: side,
    label,
    ...(tooltip ? { tooltip } : {}),
    ...(reveal ? { reveal } : {}),
    effects: effectsFor(effects),
  };
}

function buildDeck(location, arcs, target) {
  const base = flattenBase(location, arcs);
  const cap = repeatCap(location);
  const cards = [];
  let n = 0;
  let tier = 0;
  while (cards.length < target && tier < cap) {
    for (let bi = 0; bi < base.length; bi++) {
      if (cards.length >= target) break;
      const b = base[bi];
      // Vary the era framing PER CARD (not per tier) so a single line isn't
      // stamped on every repeat — spread all 40 framings across the deck.
      const frame = tier === 0 ? '' : ERA_FRAMES[(bi + (tier - 1) * 13) % ERA_FRAMES.length] + ' ';
      n += 1;
      let left = makeChoice('a', b.left);
      let right = makeChoice('b', b.right);
      // Guard: scaling must never collapse the two choices into the same effects.
      if (JSON.stringify(left.effects) === JSON.stringify(right.effects)) {
        const k = Object.keys(right.effects)[0];
        right = { ...right, effects: { ...right.effects, [k]: shapeDelta(right.effects[k] - 2) } };
      }
      cards.push({
        id: `${location}-${String(n).padStart(4, '0')}`,
        location,
        // A unique arc instance per (tier, authored-arc): each era replay is its
        // own thread, played stage-by-stage. `stage` orders the cards within it.
        arc: `${location}-t${tier}-a${b.arcSeq}`,
        stage: b.stage,
        speaker: b.speaker,
        portrait: b.portrait,
        tags: b.tags,
        prompt: frame + b.prompt,
        left,
        right,
      });
    }
    tier += 1;
  }
  return cards;
}

function validate(location, cards, target) {
  const errs = [];
  const ids = new Set();
  const prompts = new Set();
  for (const c of cards) {
    if (ids.has(c.id)) errs.push(`dup id ${c.id}`);
    ids.add(c.id);
    if (prompts.has(c.prompt)) errs.push(`${c.id}: duplicate prompt text`);
    prompts.add(c.prompt);
    if (c.location !== location) errs.push(`${c.id}: wrong location`);
    if (!c.prompt || c.prompt.length < 20) errs.push(`${c.id}: thin prompt`);
    for (const side of ['left', 'right']) {
      const ch = c[side];
      if (!ch?.label) errs.push(`${c.id}.${side}: no label`);
      const fx = ch?.effects || {};
      if (Object.keys(fx).length === 0) errs.push(`${c.id}.${side}: empty effects`);
      for (const [k, v] of Object.entries(fx)) {
        if (!METRICS.includes(k)) errs.push(`${c.id}.${side}: bad metric ${k}`);
        if (typeof v !== 'number' || v === 0 || Math.abs(v) > MAX_DELTA) errs.push(`${c.id}.${side}.${k}: bad delta ${v}`);
      }
    }
    if (JSON.stringify(c.left.effects) === JSON.stringify(c.right.effects)) errs.push(`${c.id}: identical choice effects`);
  }
  if (cards.length !== target) errs.push(`expected ${target} cards, got ${cards.length}`);
  return errs;
}

const __dirname = dirname(fileURLToPath(import.meta.url));
const only = process.argv.slice(2);
const targets = only.length ? only : Object.keys(DECKS);

let total = 0;
let officeTotal = 0;
const allErrs = [];
for (const loc of targets) {
  const arcs = DECKS[loc];
  if (!arcs) {
    console.error(`unknown deck: ${loc}`);
    process.exit(1);
  }
  const target = DECK_TARGETS[loc];
  const base = flattenBase(loc, arcs).length;
  const cap = repeatCap(loc);
  if (base * cap < target) {
    const need = Math.ceil(target / cap);
    allErrs.push(`${loc}: only ${base} distinct scenarios — need ${need} to fill ${target} at ≤${cap}× (author ${need - base} more).`);
    continue;
  }
  const cards = buildDeck(loc, arcs, target);
  const errs = validate(loc, cards, target);
  if (errs.length) {
    allErrs.push(...errs);
    continue;
  }
  writeFileSync(resolve(__dirname, `../src/data/cards/${loc}.json`), JSON.stringify(cards, null, 2) + '\n');
  total += cards.length;
  if (loc !== 'endgame') officeTotal += cards.length;
  console.log(`  ${loc.padEnd(12)} ${String(cards.length).padStart(4)} cards  (${base} authored × era expansion)`);
}

if (allErrs.length) {
  console.error('\nVALIDATION FAILED:\n' + allErrs.slice(0, 30).join('\n'));
  process.exit(1);
}
console.log(`\n  Home + offices: ${officeTotal} questions (target 2000)`);
console.log(`OK: ${total} cards across ${targets.length} decks.`);
