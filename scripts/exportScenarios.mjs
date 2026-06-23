// Exports every scenario (question + its two answers) to a numbered text file
// you can edit by number. Numbering is deterministic (fixed deck order), so when
// you send back "0347: <new question>" it maps to exactly the same scenario.
//
//   node scripts/exportScenarios.mjs   ->  writes scenarios-list.txt
//
// Edit the lines marked Q:, 1:, 2: in place. Leave the [NNNN] tags untouched.

import { writeFileSync } from 'node:fs';
import { HOME } from './content/home.mjs';
import { UN } from './content/un.mjs';
import { FINANCE } from './content/finance.mjs';
import { INTERIOR } from './content/interior.mjs';
import { RESOURCES } from './content/resources.mjs';
import { ENVIRONMENT } from './content/environment.mjs';
import { PARTY } from './content/party.mjs';

const DECKS = [
  ['HOME', HOME],
  ['UN', UN],
  ['FINANCE', FINANCE],
  ['INTERIOR', INTERIOR],
  ['RESOURCES', RESOURCES],
  ['ENVIRONMENT', ENVIRONMENT],
  ['PARTY', PARTY],
];

const out = [];
out.push('SHANGSHAD — ALL SCENARIOS (edit Q / 1 / 2 by number; keep the [NNNN] tags)');
out.push('='.repeat(72));
out.push('');

let n = 0;
for (const [name, arr] of DECKS) {
  for (const arc of arr) {
    for (const st of arc.stages) {
      n += 1;
      const id = String(n).padStart(4, '0');
      out.push(`[${id}] ${name} · ${arc.speaker}`);
      out.push(`Q: ${st.prompt}`);
      out.push(`1: ${st.left[0]}`);
      out.push(`2: ${st.right[0]}`);
      out.push('');
    }
  }
}

writeFileSync('scenarios-list.txt', out.join('\n'));
console.log(`Wrote scenarios-list.txt — ${n} scenarios.`);
