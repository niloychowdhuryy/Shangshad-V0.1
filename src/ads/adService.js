// ─────────────────────────────────────────────────────────────────────────────
// REWARDED AD SERVICE
//
// A single promise-based entry point the whole game uses. Swap the body of
// triggerRewardedAd() for the real SDK (AdMob / Unity Ads / IronSource) later;
// nothing else in the codebase needs to change.
//
// Contract:
//   triggerRewardedAd(placement) -> Promise<{ completed: boolean }>
//   - resolves { completed: true }  when the user watched the full 30s
//   - resolves { completed: false } if the user skipped/closed early
//   - rejects only on a hard failure (no ad available / network)
//
// Callers MUST check `completed` before granting the reward.
// ─────────────────────────────────────────────────────────────────────────────

// Every rewarded-ad opportunity in the game. Each grants its reward only when
// the player watches to completion (the caller checks `completed`).
export const AD_PLACEMENTS = {
  INSIGHT: 'insight', // (reserved) granted today via the Wise Advisor favor
  REVIVE: 'revive', // Story mode: revive a collapsed pillar after a removal
  POWERUP: 'powerup', // claim/apply a Favor (UN floor · Foreign Donations · Advisor)
  SLEEP: 'sleep', // "Rest easy": reopen every office with NO ±5 pillar shake
};

// Flip to false to simulate a user who skips the ad, for testing the unhappy path.
const SIMULATE_COMPLETION = true;
const SIMULATED_DURATION_MS = 1200; // pretend "30s" ad; short for dev ergonomics

/**
 * @param {string} placement one of AD_PLACEMENTS
 * @param {(progress01:number)=>void} [onProgress] optional 0..1 progress hook for UI
 * @returns {Promise<{completed:boolean, placement:string}>}
 */
export function triggerRewardedAd(placement = 'generic', onProgress) {
  // ── REAL INTEGRATION (example shape) ──
  // return new Promise((resolve, reject) => {
  //   rewardedAd.show({
  //     onRewarded: () => resolve({ completed: true, placement }),
  //     onClosed:   (watchedFully) => resolve({ completed: watchedFully, placement }),
  //     onFailed:   (err) => reject(err),
  //   });
  // });

  // ── DUMMY INTEGRATION ──
  return new Promise((resolve) => {
    const start = Date.now();
    const tick = setInterval(() => {
      const p = Math.min(1, (Date.now() - start) / SIMULATED_DURATION_MS);
      onProgress?.(p);
      if (p >= 1) {
        clearInterval(tick);
        resolve({ completed: SIMULATE_COMPLETION, placement });
      }
    }, 60);
  });
}
