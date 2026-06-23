// Prepends a direct address to every scenario prompt so each one reads as a
// person speaking to YOU, the Prime Minister — e.g. "Sir! The treasury is empty."
// Officials/aides address you deferentially; family speak personally. Openers end
// in sentence punctuation, so the original prompt keeps its capitalisation.
//
//   node scripts/addressScenarios.mjs
//
// Idempotent: a prompt that already opens with an address is skipped.

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

// Family/personal speakers address you intimately; everyone else, deferentially.
const PERSONAL = new Set(['spouse', 'sibling', 'child', 'inlaw', 'matriarch']);

const DEFERENTIAL = [
  'Sir! ',
  'Mr. Prime Minister, sir! ',
  'Your Excellency! ',
  'Prime Minister! ',
  'Sir — ',
  'Honourable leader! ',
  'Sir, urgent news. ',
  'Sir, forgive me — ',
  'A word, sir! ',
  'Sir, we have a problem. ',
];
const PERSONAL_OPEN = [
  'Listen to me — ',
  'We need to talk. ',
  'Hear me out — ',
  'A word, in private. ',
  'Between us — ',
  'Please, listen to me. ',
];

// Detects a prompt that already starts with an address, so re-runs are safe.
const ALREADY = /^(Sir|Mr\. Prime Minister|Your Excellency|Prime Minister|Honourable|A word|Listen to me|We need to talk|Hear me out|Between us|Please, listen)/;

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

let dCount = 0;
let pCount = 0;
let changed = 0;
let skipped = 0;
const problems = [];

for (const [name, arr, file] of DECKS) {
  const path = `scripts/content/${file}`;
  let text = readFileSync(path, 'utf8');
  let cursor = 0;

  for (const arc of arr) {
    const personal = PERSONAL.has(arc.portrait);
    for (const st of arc.stages) {
      const oldP = st.prompt;
      const f = findLiteral(text, oldP, cursor);
      if (!f) {
        problems.push(`${name}: prompt not found — ${oldP.slice(0, 40)}…`);
        continue;
      }
      if (ALREADY.test(oldP)) {
        cursor = f.idx + f.len;
        skipped += 1;
        continue;
      }
      const opener = personal
        ? PERSONAL_OPEN[pCount++ % PERSONAL_OPEN.length]
        : DEFERENTIAL[dCount++ % DEFERENTIAL.length];
      const lit = variants(opener + oldP)[f.quote];
      text = text.slice(0, f.idx) + lit + text.slice(f.idx + f.len);
      cursor = f.idx + lit.length;
      changed += 1;
    }
  }
  writeFileSync(path, text);
}

console.log(`Addressed ${changed} prompts · skipped ${skipped} (already addressed).`);
if (problems.length) {
  console.log(`⚠ ${problems.length} prompts not located:`);
  problems.slice(0, 10).forEach((p) => console.log('  ' + p));
}
