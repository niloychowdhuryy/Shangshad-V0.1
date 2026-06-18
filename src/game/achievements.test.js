import { describe, it, expect } from 'vitest';
import { satisfiedIds, newlyUnlocked, ACHIEVEMENTS } from './achievements.js';

const ctx = (o = {}) => ({ won: false, days: 100, mode: 'story', title: 'STATESMAN', deaths: 0, distinctTitles: 1, totalRuns: 1, ...o });

describe('achievements', () => {
  it('unlocks first_run on any finished run', () => {
    expect(satisfiedIds(ctx())).toContain('first_run');
  });

  it('milestones key off the run stats', () => {
    expect(satisfiedIds(ctx({ days: 600 }))).toContain('survive_500');
    expect(satisfiedIds(ctx({ days: 600 }))).not.toContain('survive_1000');
    expect(satisfiedIds(ctx({ days: 1200 }))).toContain('survive_1000');
    expect(satisfiedIds(ctx({ won: true }))).toContain('reelected');
    expect(satisfiedIds(ctx({ won: true, mode: 'campaign' }))).toContain('campaign_win');
    expect(satisfiedIds(ctx({ totalRuns: 10 }))).toContain('veteran_10');
    expect(satisfiedIds(ctx({ distinctTitles: 5 }))).toContain('titles_5');
  });

  it('collect-the-title achievements match the exact ending title', () => {
    expect(satisfiedIds(ctx({ title: 'THE TYRANT' }))).toContain('t_tyrant');
    expect(satisfiedIds(ctx({ title: 'KLEPTOCRAT' }))).toContain('t_klepto');
    expect(satisfiedIds(ctx({ title: 'STATESMAN' }))).not.toContain('t_master');
  });

  it('newlyUnlocked excludes already-earned ids', () => {
    const all = satisfiedIds(ctx({ days: 600 }));
    const fresh = newlyUnlocked(ctx({ days: 600 }), ['first_run']);
    expect(fresh).not.toContain('first_run');
    expect(fresh).toContain('survive_500');
    expect(fresh.length).toBe(all.length - 1);
  });

  it('every achievement has a unique id, name and description', () => {
    const ids = ACHIEVEMENTS.map((a) => a.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const a of ACHIEVEMENTS) {
      expect(a.name.length).toBeGreaterThan(0);
      expect(a.desc.length).toBeGreaterThan(0);
    }
  });
});
