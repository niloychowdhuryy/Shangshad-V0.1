// Per-location crisis status. Each node shows a state ribbon (like SCARCITY /
// AUSTERITY / COLLAPSE in the reference). The label is chosen from the health of
// the location's primaryMetric so the ribbons actually mean something.

import { LOCATIONS, METRIC_BY_ID } from './constants.js';
import { isLocationLocked } from './engine.js';

const LOC_BY_ID = Object.fromEntries(LOCATIONS.map((l) => [l.id, l]));

// tone -> color used by the ribbon + ring accents.
export const TONE_COLOR = {
  crisis: '#ff4d5e',
  volatile: '#ff8a3d',
  warn: '#ffc24b',
  ok: '#37e0a0',
  locked: '#5b6675',
};

// Flavor labels per location, indexed by tone. crisis/volatile are the failure
// edges; warn is "watch it"; ok is stable.
const LABELS = {
  home: { crisis: 'SIEGE', volatile: 'PURGE', warn: 'UNREST', ok: 'GUARDED' },
  party: { crisis: 'FACTIONALISM', volatile: 'MUTINY', warn: 'INTRIGUE', ok: 'ALIGNED' },
  finance: { crisis: 'AUSTERITY', volatile: 'BUBBLE', warn: 'DEFICIT', ok: 'SOLVENT' },
  un: { crisis: 'ISOLATION', volatile: 'OVERREACH', warn: 'PRESSURE', ok: 'ENGAGED' },
  interior: { crisis: 'DEPLOYMENT', volatile: 'CRACKDOWN', warn: 'TENSION', ok: 'SECURED' },
  resources: { crisis: 'SCARCITY', volatile: 'GLUT', warn: 'STRAIN', ok: 'SUPPLIED' },
  environment: { crisis: 'COLLAPSE', volatile: 'OUTBREAK', warn: 'BLIGHT', ok: 'STABLE' },
};

/**
 * @returns {{ tone, label, color, metricId, value, locked }}
 */
export function locationStatus(state, locId) {
  const loc = LOC_BY_ID[locId];
  const metricId = loc.primaryMetric;
  const value = state.metrics[metricId];
  const locked = isLocationLocked(state, locId);

  let tone;
  if (value <= 18) tone = 'crisis';
  else if (value >= 82) tone = 'volatile';
  else if (value <= 35) tone = 'warn';
  else tone = 'ok';

  return {
    tone,
    label: locked ? 'LOCKED' : LABELS[locId][tone],
    color: locked ? TONE_COLOR.locked : TONE_COLOR[tone],
    accent: METRIC_BY_ID[metricId].color,
    metricId,
    value,
    locked,
  };
}
