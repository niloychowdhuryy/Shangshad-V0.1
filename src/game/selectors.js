// UI-facing derived helpers. Kept out of the engine so view concerns don't leak
// into game rules.

import { METRICS, METRIC_BY_ID } from './constants.js';

/** Which metric ids a choice will touch (regardless of direction). */
export function affectedMetricIds(choice) {
  if (!choice?.effects) return [];
  return Object.keys(choice.effects).filter((id) => choice.effects[id] !== 0);
}

/** Union of metrics touched by either side — used to pre-glow on card entry. */
export function cardAffectedMetricIds(card) {
  const set = new Set([...affectedMetricIds(card?.left), ...affectedMetricIds(card?.right)]);
  return [...set];
}

/** Format a single delta for Insight mode, e.g. "+15% FI". */
export function formatDelta(metricId, delta) {
  const sign = delta > 0 ? '+' : '';
  return `${sign}${delta}% ${metricId}`;
}

/** Ordered list of { id, name, color, icon, value } for the HUD. */
export function metricRows(metrics) {
  return METRICS.map((m) => ({ ...m, value: metrics[m.id] }));
}

export function metricMeta(id) {
  return METRIC_BY_ID[id];
}
