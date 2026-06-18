import { describe, it, expect } from 'vitest';
import { computeTraits, leaderTitle, evaluateLegacy } from './legacy.js';

const M = (o = {}) => ({ FI: 50, GL: 50, MI: 50, RE: 50, EN: 50, FA: 50, ...o });

describe('legacy: trait math', () => {
  it('computes the five traits from the six pillars (all 50 → all 50)', () => {
    expect(computeTraits(M())).toEqual({ fascist: 50, corrupt: 50, kindHearted: 50, extremist: 50, pragmatic: 50 });
  });

  it('matches the exact weighted formulas', () => {
    // FI60 GL40 MI80 RE30 EN20 FA70
    const t = computeTraits(M({ FI: 60, GL: 40, MI: 80, RE: 30, EN: 20, FA: 70 }));
    expect(t.fascist).toBe(Math.round(80 * 0.4 + 70 * 0.3 + 80 * 0.2 + 60 * 0.1)); // 75
    expect(t.corrupt).toBe(Math.round(70 * 0.4 + 30 * 0.3 + 80 * 0.2 + 60 * 0.1)); // 59
    expect(t.kindHearted).toBe(Math.round(20 * 0.5 + 40 * 0.3 + 30 * 0.2)); // 28
    expect(t.extremist).toBe(Math.round(80 * 0.35 + 70 * 0.35 + 60 * 0.3)); // 71
    expect(t.pragmatic).toBe(Math.round(60 * 0.35 + 40 * 0.35 + 30 * 0.3)); // 44
  });

  it('clamps overflowing pillars (120) to 100 before the math', () => {
    expect(computeTraits(M({ MI: 120 })).fascist).toBe(70); // MI treated as 100
  });

  it('traits never leave 0–100', () => {
    const hi = computeTraits(M({ FI: 120, GL: 120, MI: 120, RE: 120, EN: 120, FA: 120 }));
    const lo = computeTraits(M({ FI: 0, GL: 0, MI: 0, RE: 0, EN: 0, FA: 0 }));
    for (const v of [...Object.values(hi), ...Object.values(lo)]) {
      expect(v).toBeGreaterThanOrEqual(0);
      expect(v).toBeLessThanOrEqual(100);
    }
  });
});

describe('legacy: leader titles', () => {
  const titleFor = (m) => leaderTitle(computeTraits(m), m);

  it('special combinations win over single-trait brackets', () => {
    // MI100 FA100 EN0 GL0 RE100 → fascist & corrupt both 100
    expect(titleFor(M({ MI: 100, FA: 100, EN: 0, GL: 0, RE: 100 }))).toBe('THE TYRANT');
  });

  it('all traits 40–60 → THE BALANCED POLITICIAN', () => {
    expect(titleFor(M())).toBe('THE BALANCED POLITICIAN'); // all 50
  });

  it('NATION BUILDER needs pragmatic>80 and finance>80', () => {
    // EN kept low so kind-hearted stays ≤70 (else GREAT REFORMER would win first).
    expect(titleFor(M({ FI: 100, GL: 100, RE: 100, MI: 0, EN: 20, FA: 0 }))).toBe('THE NATION BUILDER');
  });

  it('highest single trait at 75 lands in the middle bracket', () => {
    // pragmatic = 75, no special combo (finance only 75, not >80)
    expect(titleFor(M({ FI: 75, GL: 75, RE: 75, MI: 0, EN: 0, FA: 0 }))).toBe('STATESMAN');
  });

  it('highest single trait at 90 lands in the top bracket', () => {
    // kindHearted = 90, welfare 90 (not >90) → no special combo
    expect(titleFor(M({ EN: 90, GL: 90, FA: 10, MI: 0, RE: 0, FI: 0 }))).toBe('NATIONAL GUARDIAN');
  });
});

describe('legacy: full evaluation', () => {
  it('returns days, title, traits and a non-empty epitaph', () => {
    const out = evaluateLegacy(M({ MI: 100, FA: 100, EN: 0, GL: 0, RE: 100 }), 1234);
    expect(out.days).toBe(1234);
    expect(out.title).toBe('THE TYRANT');
    expect(out.traits.fascist).toBe(100);
    expect(out.summary).toMatch(/1234/);
    expect(out.summary.length).toBeGreaterThan(20);
  });
});
