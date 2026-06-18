// ─────────────────────────────────────────────────────────────────────────────
// ACHIEVEMENTS & TITLE COLLECTION (pure)
//
// Meta-progression across runs: milestones, mode wins, and a "collect the leader
// titles" set. Evaluated from a finished run plus the player's accumulated stats;
// the caller persists the unlocked ids and earned titles in the profile.
//
// Context (`ctx`) shape:
//   { won, days, mode, title, deaths, distinctTitles, totalRuns }
// ─────────────────────────────────────────────────────────────────────────────

export const ACHIEVEMENTS = [
  { id: 'first_run', name: 'Take the Seat', desc: 'Finish your first run.', test: (c) => c.totalRuns >= 1 },
  { id: 'survive_500', name: 'Half a Reign', desc: 'Survive 500 days in a single run.', test: (c) => c.days >= 500 },
  { id: 'survive_1000', name: 'The Long Haul', desc: 'Survive 1,000 days in a single run.', test: (c) => c.days >= 1000 },
  { id: 'reelected', name: 'Re-elected', desc: 'Survive to day 2,000 and win.', test: (c) => !!c.won },
  { id: 'campaign_win', name: 'One Life, One Legend', desc: 'Win a Campaign run.', test: (c) => c.won && c.mode === 'campaign' },
  { id: 'iron_will', name: 'Iron Will', desc: 'Survive 1,000 days in Campaign — no revives.', test: (c) => c.mode === 'campaign' && c.days >= 1000 },
  { id: 'veteran_10', name: 'Career Politician', desc: 'Finish 10 runs.', test: (c) => c.totalRuns >= 10 },
  { id: 'titles_5', name: 'Many Faces of Power', desc: 'Be remembered as 5 different leaders.', test: (c) => c.distinctTitles >= 5 },
  { id: 'titles_10', name: "Historian's Nightmare", desc: 'Be remembered as 10 different leaders.', test: (c) => c.distinctTitles >= 10 },

  // Collect-the-title achievements (one per signature ending).
  { id: 't_tyrant', name: 'Iron Fist', desc: 'End a reign as THE TYRANT.', test: (c) => c.title === 'THE TYRANT' },
  { id: 't_benevolent', name: 'Velvet & Steel', desc: 'End a reign as THE BENEVOLENT DICTATOR.', test: (c) => c.title === 'THE BENEVOLENT DICTATOR' },
  { id: 't_champion', name: 'Of the People', desc: "End a reign as THE PEOPLE'S CHAMPION.", test: (c) => c.title === "THE PEOPLE'S CHAMPION" },
  { id: 't_reformer', name: 'Builder of Bridges', desc: 'End a reign as THE GREAT REFORMER.', test: (c) => c.title === 'THE GREAT REFORMER' },
  { id: 't_dynasty', name: 'Keep It in the Family', desc: 'End a reign as THE DYNASTY BUILDER.', test: (c) => c.title === 'THE DYNASTY BUILDER' },
  { id: 't_nation', name: 'Founding Father', desc: 'End a reign as THE NATION BUILDER.', test: (c) => c.title === 'THE NATION BUILDER' },
  { id: 't_klepto', name: 'Pockets Lined', desc: 'End a reign as a KLEPTOCRAT.', test: (c) => c.title === 'KLEPTOCRAT' },
  { id: 't_fanatic', name: 'True Believer', desc: 'End a reign as a FANATICAL VISIONARY.', test: (c) => c.title === 'FANATICAL VISIONARY' },
  { id: 't_master', name: 'Master of the Game', desc: 'End a reign as a MASTER STATESMAN.', test: (c) => c.title === 'MASTER STATESMAN' },
  { id: 't_forgettable', name: 'Wait, Who?', desc: 'End a reign as THE FORGETTABLE LEADER.', test: (c) => c.title === 'THE FORGETTABLE LEADER' },
];

export const ACHIEVEMENT_BY_ID = Object.fromEntries(ACHIEVEMENTS.map((a) => [a.id, a]));

/** All achievement ids the context satisfies. */
export function satisfiedIds(ctx) {
  return ACHIEVEMENTS.filter((a) => {
    try {
      return !!a.test(ctx);
    } catch {
      return false;
    }
  }).map((a) => a.id);
}

/** Achievement ids newly unlocked this run (not already in `already`). */
export function newlyUnlocked(ctx, already = []) {
  const have = new Set(already);
  return satisfiedIds(ctx).filter((id) => !have.has(id));
}
