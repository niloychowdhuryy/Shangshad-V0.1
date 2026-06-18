// ─────────────────────────────────────────────────────────────────────────────
// END-GAME LEGACY EVALUATION (pure, deterministic)
//
// Personality traits are NOT tracked during play. They are derived ENTIRELY from
// the six final pillar values at the moment the run ends — no choice history, no
// hidden scores. From those traits we pick a leader title (special combinations
// first, then the highest single trait) and a short historical epitaph.
//
// Pillar → spec name:  FI=Finance · GL=Global · MI=Military · RE=Resource ·
//                      EN=Welfare · FA=Family.  Pillars may overflow to 120 in
// play, but the formulas assume 0–100, so every input is clamped to [0,100].
// ─────────────────────────────────────────────────────────────────────────────

const c100 = (x) => Math.max(0, Math.min(100, Number(x) || 0));
const round = (x) => Math.round(x);

/** The five trait percentages (0–100), from the six final pillars. */
export function computeTraits(metrics) {
  const FI = c100(metrics.FI);
  const GL = c100(metrics.GL);
  const MI = c100(metrics.MI);
  const RE = c100(metrics.RE);
  const EN = c100(metrics.EN); // Welfare
  const FA = c100(metrics.FA);

  return {
    fascist: round(MI * 0.4 + FA * 0.3 + (100 - EN) * 0.2 + (100 - GL) * 0.1),
    corrupt: round(FA * 0.4 + RE * 0.3 + (100 - EN) * 0.2 + (100 - GL) * 0.1),
    kindHearted: round(EN * 0.5 + GL * 0.3 + (100 - FA) * 0.2),
    extremist: round(MI * 0.35 + FA * 0.35 + (100 - GL) * 0.3),
    pragmatic: round(FI * 0.35 + GL * 0.35 + RE * 0.3),
  };
}

// Highest-single-trait brackets: [60–75) · [75–90) · [90+].
const SINGLE_TITLES = {
  fascist: ['STRONGMAN LEADER', 'IRON-FISTED LEADER', 'SUPREME STRONGMAN'],
  corrupt: ['PATRONAGE LEADER', 'CORRUPT RULER', 'KLEPTOCRAT'],
  kindHearted: ["PEOPLE'S LEADER", 'BELOVED LEADER', 'NATIONAL GUARDIAN'],
  extremist: ['RADICAL LEADER', 'REVOLUTIONARY FIREBRAND', 'FANATICAL VISIONARY'],
  pragmatic: ['STRATEGIC LEADER', 'STATESMAN', 'MASTER STATESMAN'],
};

/** The leader title: special combinations are checked first, then highest trait. */
export function leaderTitle(traits, metrics) {
  const { fascist, corrupt, kindHearted, extremist, pragmatic } = traits;
  const family = c100(metrics.FA);
  const welfare = c100(metrics.EN);
  const finance = c100(metrics.FI);
  const all = [fascist, corrupt, kindHearted, extremist, pragmatic];

  // ── Priority 1: special combinations (first match wins) ──
  if (fascist > 70 && corrupt > 70) return 'THE TYRANT';
  if (fascist > 70 && kindHearted > 70) return 'THE BENEVOLENT DICTATOR';
  if (fascist > 70 && pragmatic > 70) return 'THE IRON STRATEGIST';
  if (corrupt > 70 && family > 80) return 'THE DYNASTY BUILDER';
  if (kindHearted > 70 && pragmatic > 70) return 'THE GREAT REFORMER';
  if (kindHearted > 80 && welfare > 90) return "THE PEOPLE'S CHAMPION";
  if (extremist > 70 && fascist > 70) return 'THE IDEOLOGICAL ENFORCER';
  if (pragmatic > 80 && finance > 80) return 'THE NATION BUILDER';
  if (all.every((t) => t >= 40 && t <= 60)) return 'THE BALANCED POLITICIAN';
  if (all.every((t) => t < 50)) return 'THE FORGETTABLE LEADER';

  // ── Priority 2: highest single trait (ties resolve in declared order) ──
  const ranked = [
    ['fascist', fascist],
    ['corrupt', corrupt],
    ['kindHearted', kindHearted],
    ['extremist', extremist],
    ['pragmatic', pragmatic],
  ];
  let top = ranked[0];
  for (const r of ranked) if (r[1] > top[1]) top = r;
  const v = top[1];
  const bracket = v >= 90 ? 2 : v >= 75 ? 1 : v >= 60 ? 0 : -1;
  if (bracket >= 0) return SINGLE_TITLES[top[0]][bracket];

  // No trait reaches the 60 floor and no combination matched.
  return 'THE UNREMARKABLE LEADER';
}

// Deterministic epitaphs, one per title. `d` = days survived.
const NARRATIVES = {
  'THE TYRANT': (d) =>
    `Your reign was a fist closed around the nation's throat. For ${d} days the country obeyed out of fear, and history records only the silence you enforced and what that silence buried.`,
  'THE BENEVOLENT DICTATOR': (d) =>
    `You ruled with an iron hand and an open palm — feared and, somehow, loved. History remembers ${d} days of order bought with freedom, and a people who never knew whether to thank you or flee you.`,
  'THE IRON STRATEGIST': (d) =>
    `Cold, calculating, unbending — you bent the state to your will and made it work. History grants you ${d} days of ruthless competence, and very few tears.`,
  'THE DYNASTY BUILDER': (d) =>
    `You ruled less a nation than a family firm: what you could not earn you inherited, and what you inherited you kept. In ${d} days the republic quietly became your estate.`,
  'THE GREAT REFORMER': (d) =>
    `You balanced the ledger and the conscience at once, and the country grew kinder and stronger under your hand. History remembers ${d} days of patient, principled progress.`,
  "THE PEOPLE'S CHAMPION": (d) =>
    `You gave everything to the welfare of the many, and the many never forgot. For ${d} days the nation came first, and history carves your name beside the word "beloved".`,
  'THE IDEOLOGICAL ENFORCER': (d) =>
    `Belief was your blade and the state your altar. For ${d} days you purified the nation in the name of the cause, and history still shudders at the certainty of it.`,
  'THE NATION BUILDER': (d) =>
    `Roads, banks, ports, ledgers — you built, and the country rose on what you laid down. History records ${d} days of bricks and balance sheets, and a state that outlived you.`,
  'THE BALANCED POLITICIAN': (d) =>
    `You offended no one and inspired no one, steering a steady middle course for ${d} days. History files you under "competent" and turns the page.`,
  'THE FORGETTABLE LEADER': (d) =>
    `You held the chair for ${d} days and left it warm and little else. History struggles to recall your name, let alone your deeds.`,
  'STRONGMAN LEADER': (d) =>
    `You ruled with a hard hand and a harder jaw, and the nation learned not to test you. ${d} days of order, and a long shadow.`,
  'IRON-FISTED LEADER': (d) =>
    `Dissent withered wherever your gaze fell. For ${d} days the iron held, and history remembers the grip far more than the good.`,
  'SUPREME STRONGMAN': (d) =>
    `Total, unquestioned, absolute — for ${d} days you were the state itself, and the nation breathed only when you allowed it.`,
  'PATRONAGE LEADER': (d) =>
    `You ran the country on favours and loyalty paid by the envelope. ${d} days of greased palms, and a treasury that never quite added up.`,
  'CORRUPT RULER': (d) =>
    `The state was your purse and the people your customers. History remembers ${d} days of back-room deals and roads that went unbuilt.`,
  'KLEPTOCRAT': (d) =>
    `You did not govern the nation so much as strip it. ${d} days of plunder, and a country left poorer for having known you.`,
  "PEOPLE'S LEADER": (d) =>
    `You kept the people close and their welfare closer. ${d} days of a government that, for once, seemed to care.`,
  'BELOVED LEADER': (d) =>
    `They lined the streets for you, and meant it. For ${d} days you put the nation's wellbeing first, and history remembers the warmth.`,
  'NATIONAL GUARDIAN': (d) =>
    `You stood over the nation like a sheltering hand. For ${d} days the vulnerable were safe, and history enshrines you as the people's protector.`,
  'RADICAL LEADER': (d) =>
    `You had no patience for the slow middle and dragged the nation to the edge of your convictions. ${d} days of upheaval, and no one left unmoved.`,
  'REVOLUTIONARY FIREBRAND': (d) =>
    `You set the old order alight and warmed your hands at the blaze. ${d} days of fervour, and a country remade in the heat.`,
  'FANATICAL VISIONARY': (d) =>
    `You saw a future no one else could and forced the nation toward it at any cost. ${d} days of zeal — and history cannot decide between prophet and madman.`,
  'STRATEGIC LEADER': (d) =>
    `You played the angles, kept the books, and made the hard trades. ${d} days of cool calculation, and a state that simply ran.`,
  'STATESMAN': (d) =>
    `Measured, shrewd, and trusted abroad, you steered by reason over passion. History grants you ${d} days of steady, capable rule.`,
  'MASTER STATESMAN': (d) =>
    `Few hands have held the levers so deftly. For ${d} days you balanced every interest and out-thought every rival, and history bows to the craft.`,
  'THE UNREMARKABLE LEADER': (d) =>
    `You governed for ${d} days without ever quite deciding what kind of leader to be. History remembers a question mark.`,
};

/** A 2–3 sentence historical epitaph for the given title. */
export function legacyNarrative(title, days) {
  const make = NARRATIVES[title] || NARRATIVES['THE UNREMARKABLE LEADER'];
  return make(Number(days) || 0);
}

/**
 * The full end-screen verdict, derived purely from the final pillars + days.
 * @returns {{ days, title, traits, summary }}
 */
export function evaluateLegacy(metrics, days) {
  const traits = computeTraits(metrics);
  const title = leaderTitle(traits, metrics);
  return { days, title, traits, summary: legacyNarrative(title, days) };
}

// Trait rows in display order, with labels matching the spec output.
export const TRAIT_ORDER = [
  ['fascist', 'Fascist'],
  ['corrupt', 'Corrupt'],
  ['kindHearted', 'Kind-Hearted'],
  ['extremist', 'Extremist'],
  ['pragmatic', 'Pragmatic'],
];
