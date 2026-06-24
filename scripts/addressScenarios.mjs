// Wraps every scenario prompt so it reads as someone addressing YOU, the Prime
// Minister — with real variety: deferential openers, ministry-note framings,
// spoken reports, and question closers. Officials/aides address you formally and
// by department; family speak personally and by name.
//
//   node scripts/addressScenarios.mjs   (run on un-addressed bodies)
//
// Openers/closers are punctuated so the original sentence stays grammatical.

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

// Each deck's "ministry" / source, for note-style framings.
const MINISTRY = {
  HOME: 'the Residence',
  UN: 'the Foreign Ministry',
  FINANCE: 'the Finance Ministry',
  INTERIOR: 'the Home Ministry',
  RESOURCES: 'the Energy Ministry',
  ENVIRONMENT: 'the Welfare Ministry',
  PARTY: 'the Party Office',
};

const PERSONAL = new Set(['spouse', 'sibling', 'child', 'inlaw', 'matriarch']);

// Template builders. `b` = original prompt body, `s` = speaker, `m` = ministry,
// `n` = speaker's first name (before any comma).
const OFFICIAL = [
  (b) => `Sir! ${b}`,
  (b) => `Mr. Prime Minister, sir! ${b}`,
  (b) => `Your Excellency! ${b}`,
  (b) => `Dear Sir — ${b}`,
  (b) => `Honourable leader! ${b}`,
  (b, s) => `${s} reports: ${b}`,
  (b, s, m) => `A note from ${m} reads: ${b}`,
  (b, s, m) => `Word from ${m}, sir — ${b}`,
  (b, s) => `${s}: ${b}`,
  (b, s, m) => `Sir, a message from ${m}: ${b}`,
  (b) => `${b} What are your orders, sir?`,
  (b, s) => `${s} awaits your word. ${b}`,
];

const FAMILY = [
  (b) => `Listen to me — ${b}`,
  (b) => `We need to talk. ${b}`,
  (b, s, m, n) => `${n} pulls you aside. ${b}`,
  (b) => `Between us — ${b}`,
  (b, s, m, n) => `${n} says, quietly: ${b}`,
  (b) => `Hear me out — ${b}`,
  (b) => `${b} What will you do?`,
];

function variants(str) {
  return {
    '"': '"' + str.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"',
    "'": "'" + str.replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'",
  };
}
function findLiteral(text, str, from) {
  const v = variants(str);
  let i = text.indexOf(v['"'], from);
  if (i >= 0) return { idx: i, len: v['"'].length, quote: '"' };
  i = text.indexOf(v["'"], from);
  if (i >= 0) return { idx: i, len: v["'"].length, quote: "'" };
  return null;
}

let oIdx = 0;
let fIdx = 0;
let changed = 0;
const problems = [];

for (const [name, arr, file] of DECKS) {
  const path = `scripts/content/${file}`;
  let text = readFileSync(path, 'utf8');
  let cursor = 0;
  const ministry = MINISTRY[name];

  for (const arc of arr) {
    const personal = PERSONAL.has(arc.portrait);
    const speaker = arc.speaker;
    const firstName = speaker.split(',')[0].trim();
    for (const st of arc.stages) {
      const body = st.prompt;
      const f = findLiteral(text, body, cursor);
      if (!f) {
        problems.push(`${name}: prompt not found — ${body.slice(0, 40)}…`);
        continue;
      }
      const tpl = personal
        ? FAMILY[fIdx++ % FAMILY.length]
        : OFFICIAL[oIdx++ % OFFICIAL.length];
      const next = tpl(body, speaker, ministry, firstName);
      const lit = variants(next)[f.quote];
      text = text.slice(0, f.idx) + lit + text.slice(f.idx + f.len);
      cursor = f.idx + lit.length;
      changed += 1;
    }
  }
  writeFileSync(path, text);
}

console.log(`Addressed ${changed} prompts.`);
if (problems.length) {
  console.log(`⚠ ${problems.length} not located:`);
  problems.slice(0, 10).forEach((p) => console.log('  ' + p));
}
