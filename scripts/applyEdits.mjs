// Applies edited scenario text from scenarios-list.txt back into the source
// content files. Maps each [NNNN] block to its scenario by the SAME deterministic
// order as exportScenarios.mjs, then replaces the prompt and the two answer
// labels in place — leaving tooltips, reveals, effects, speakers untouched.
//
//   node scripts/applyEdits.mjs
//
// Blocks missing from the file (or missing an answer) are skipped, so a partial
// edit list is safe.

import { readFileSync, writeFileSync } from 'node:fs';
import { HOME } from './content/home.mjs';
import { UN } from './content/un.mjs';
import { FINANCE } from './content/finance.mjs';
import { INTERIOR } from './content/interior.mjs';
import { RESOURCES } from './content/resources.mjs';
import { ENVIRONMENT } from './content/environment.mjs';
import { PARTY } from './content/party.mjs';

const DECKS = [
  ['HOME', HOME, 'home.mjs'],
  ['UN', UN, 'un.mjs'],
  ['FINANCE', FINANCE, 'finance.mjs'],
  ['INTERIOR', INTERIOR, 'interior.mjs'],
  ['RESOURCES', RESOURCES, 'resources.mjs'],
  ['ENVIRONMENT', ENVIRONMENT, 'environment.mjs'],
  ['PARTY', PARTY, 'party.mjs'],
];

// ── parse the edited file ─────────────────────────────────────────────────────
const lines = readFileSync('scenarios-list.txt', 'utf8').split('\n');
const edits = new Map(); // id -> { q, a1, a2 }
let cur = null;
for (const line of lines) {
  const m = line.match(/^\[(\d{4})\]/);
  if (m) {
    if (cur) commit(cur);
    cur = { id: Number(m[1]), q: null, a1: null, a2: null };
  } else if (cur) {
    if (line.startsWith('Q: ')) cur.q = line.slice(3).trim();
    else if (line.startsWith('1: ')) cur.a1 = line.slice(3).trim();
    else if (line.startsWith('2: ')) cur.a2 = line.slice(3).trim();
  }
}
if (cur) commit(cur);
function commit(b) {
  if (b.q && b.a1 && b.a2) edits.set(b.id, { q: b.q, a1: b.a1, a2: b.a2 });
}

// ── literal helpers (find/replace a JS string literal, single or double) ──────
function variants(s) {
  return {
    '"': '"' + s.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"',
    "'": "'" + s.replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'",
  };
}
function findLiteral(text, s, from) {
  const v = variants(s);
  let i = text.indexOf(v['"'], from);
  if (i >= 0) return { idx: i, len: v['"'].length, quote: '"' };
  i = text.indexOf(v["'"], from);
  if (i >= 0) return { idx: i, len: v["'"].length, quote: "'" };
  return null;
}

// ── walk decks in the canonical order, apply replacements per file ────────────
let n = 0;
const problems = [];
let changedTotal = 0;

for (const [name, arr, file] of DECKS) {
  const path = `scripts/content/${file}`;
  let text = readFileSync(path, 'utf8');
  let cursor = 0;
  let changedHere = 0;

  for (const arc of arr) {
    for (const st of arc.stages) {
      n += 1;
      const e = edits.get(n);
      const oldP = st.prompt;
      const oldL1 = st.left[0];
      const oldL2 = st.right[0];

      // Always advance the cursor past this scenario's three literals so later
      // scenarios (and duplicate labels) map positionally — even when unchanged.
      const replace = (oldStr, newStr, what) => {
        const f = findLiteral(text, oldStr, cursor);
        if (!f) {
          problems.push(`${name} #${n}: ${what} not found`);
          return;
        }
        if (e && newStr != null && newStr !== oldStr) {
          const lit = variants(newStr)[f.quote];
          text = text.slice(0, f.idx) + lit + text.slice(f.idx + f.len);
          cursor = f.idx + lit.length;
          changedHere += 1;
        } else {
          cursor = f.idx + f.len;
        }
      };

      replace(oldP, e?.q, 'prompt');
      replace(oldL1, e?.a1, 'answer1');
      replace(oldL2, e?.a2, 'answer2');
    }
  }

  if (changedHere) writeFileSync(path, text);
  changedTotal += changedHere;
  console.log(`${name.padEnd(12)} ${changedHere} strings updated`);
}

console.log(`\nApplied edits to ${edits.size} scenarios · ${changedTotal} strings changed.`);
if (problems.length) {
  console.log(`\n⚠ ${problems.length} literals not located (left unchanged):`);
  problems.slice(0, 20).forEach((p) => console.log('  ' + p));
}
