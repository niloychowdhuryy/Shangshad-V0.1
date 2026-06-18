import { describe, it, expect } from 'vitest';
import { pickCard } from './deck.js';

// Synthetic deck: arc A (3 stages), arc B (2 stages), arc C (1 stage).
const mk = (arc, stage) => ({ id: `${arc}${stage}`, arc, stage });
const DECK = [mk('A', 0), mk('A', 1), mk('A', 2), mk('B', 0), mk('B', 1), mk('C', 0)];

function walk(seed, n = DECK.length) {
  const seen = new Set();
  const seq = [];
  for (let i = 0; i < n; i++) {
    const c = pickCard(DECK, seen, seed, i);
    if (!c) break;
    seq.push(c);
    seen.add(c.id);
  }
  return seq;
}

describe('deck: arc-aware ordering', () => {
  it('plays each arc as a contiguous block with stages in order', () => {
    const seq = walk(1234);
    expect(seq).toHaveLength(DECK.length);

    const stagesByArc = {};
    const blocks = [];
    for (const c of seq) {
      if (!stagesByArc[c.arc]) {
        stagesByArc[c.arc] = [];
        if (!blocks.length || blocks[blocks.length - 1] !== c.arc) blocks.push(c.arc);
      }
      stagesByArc[c.arc].push(c.stage);
    }
    // Each arc's stages ascend from 0 with no gaps.
    for (const a of Object.keys(stagesByArc)) {
      expect(stagesByArc[a]).toEqual(stagesByArc[a].map((_, i) => i));
    }
    // No interleaving: every arc forms one contiguous block.
    const compressed = seq.map((c) => c.arc).filter((a, i, arr) => i === 0 || a !== arr[i - 1]);
    expect(new Set(compressed).size).toBe(compressed.length);
  });

  it('is deterministic for a given seed and reshuffles across seeds', () => {
    const a = walk(7).map((c) => c.id);
    const a2 = walk(7).map((c) => c.id);
    expect(a).toEqual(a2); // stable within a run
    // Across many seeds the opening arc varies (not always the same first card).
    const firsts = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((s) => walk(s)[0].arc));
    expect(firsts.size).toBeGreaterThan(1);
  });

  it('recycles (returns a card) once every card is seen', () => {
    const seen = new Set(DECK.map((c) => c.id));
    expect(pickCard(DECK, seen, 99, 7)).not.toBeNull();
  });
});
