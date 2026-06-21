// Generates an attractive 1080×1350 share image on a <canvas> — the same verdict
// the end screen shows: leader title, days in power, the five personality traits,
// and the six pillar scores. Posts cleanly to Facebook / Instagram stories.
//
// Returns { blob, dataUrl }. Pure browser API; no network.

import { BRAND } from '../game/brand.js';
import { METRICS } from '../game/constants.js';
import { evaluateLegacy, TRAIT_ORDER } from '../game/legacy.js';

const W = 1080;
const H = 1350;

const TRAIT_COLORS = {
  fascist: '#ff5470',
  corrupt: '#c98bff',
  kindHearted: '#34d399',
  extremist: '#ffae34',
  pragmatic: '#38bdf8',
};

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

// Pick the largest font size (<= max) at which `text` fits within `maxWidth`.
function fitFont(ctx, text, maxWidth, maxPx, weight = '700', family = 'Rajdhani, sans-serif') {
  let px = maxPx;
  do {
    ctx.font = `${weight} ${px}px ${family}`;
    if (ctx.measureText(text).width <= maxWidth) break;
    px -= 4;
  } while (px > 24);
  return px;
}

export async function generateShareCard({ days, won, average, displayName, metrics, title }) {
  // Wait for web fonts so the Bangla + Rajdhani text renders correctly.
  try {
    await document.fonts.ready;
  } catch {
    /* fonts API unavailable — fall back to system fonts */
  }

  // Derive the verdict from the final pillars, exactly as the end screen does.
  const legacy = metrics ? evaluateLegacy(metrics, days) : null;
  const verdictTitle = (title || legacy?.title || '').toString().toUpperCase();
  const traits = legacy?.traits || null;

  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');

  // ── Background: deep green-black gradient ──
  const bg = ctx.createLinearGradient(0, 0, 0, H);
  bg.addColorStop(0, '#04140d');
  bg.addColorStop(0.55, '#06231a');
  bg.addColorStop(1, '#03110b');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  // ── Flag motif: green field + red sun ──
  ctx.save();
  ctx.globalAlpha = 0.16;
  ctx.fillStyle = BRAND.green;
  roundRect(ctx, 70, 70, W - 140, H - 140, 36);
  ctx.fill();
  const sun = ctx.createRadialGradient(W * 0.42, 300, 20, W * 0.42, 300, 230);
  sun.addColorStop(0, BRAND.red);
  sun.addColorStop(1, 'rgba(244,42,65,0)');
  ctx.globalAlpha = 0.5;
  ctx.fillStyle = sun;
  ctx.beginPath();
  ctx.arc(W * 0.42, 300, 230, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  // ── Border frame ──
  ctx.strokeStyle = 'rgba(22,199,154,0.45)';
  ctx.lineWidth = 3;
  roundRect(ctx, 40, 40, W - 80, H - 80, 30);
  ctx.stroke();

  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';

  // ── Title ──
  ctx.fillStyle = '#eafff7';
  ctx.font = '700 76px "Noto Sans Bengali", sans-serif';
  ctx.fillText(BRAND.bangla, W / 2, 175);
  ctx.fillStyle = BRAND.greenBright;
  ctx.font = '700 46px Rajdhani, sans-serif';
  ctx.fillText('S H A N G S H A D', W / 2, 235);

  // ── Result banner ──
  ctx.font = '700 34px Rajdhani, sans-serif';
  ctx.fillStyle = won ? '#37e0a0' : '#ff5470';
  ctx.fillText(won ? 'RE-ELECTED' : 'OVERTHROWN', W / 2, 300);

  // ── Days headline ──
  ctx.fillStyle = '#ffffff';
  ctx.font = '700 170px Rajdhani, sans-serif';
  ctx.fillText(String(days), W / 2, 470);
  ctx.fillStyle = BRAND.greenBright;
  ctx.font = '600 46px Rajdhani, sans-serif';
  ctx.fillText('DAYS IN POWER', W / 2, 528);

  // ── Leader title (verdict) ──
  if (verdictTitle) {
    ctx.fillStyle = 'rgba(227,236,230,0.5)';
    ctx.font = '600 24px Rajdhani, sans-serif';
    ctx.fillText('REMEMBERED AS', W / 2, 600);
    const titlePx = fitFont(ctx, verdictTitle, W - 200, 62);
    ctx.fillStyle = BRAND.greenBright;
    ctx.font = `700 ${titlePx}px Rajdhani, sans-serif`;
    ctx.fillText(verdictTitle, W / 2, 662);
  }

  // ── Trait bars ──
  if (traits) {
    const left = 150;
    const barX = 360;
    const barW = 560;
    const barH = 18;
    const rowH = 52;
    const top = 720;
    ctx.textBaseline = 'middle';
    TRAIT_ORDER.forEach(([key, label], i) => {
      const v = traits[key] ?? 0;
      const color = TRAIT_COLORS[key] || BRAND.greenBright;
      const cy = top + i * rowH;
      ctx.textAlign = 'left';
      ctx.fillStyle = 'rgba(227,236,230,0.8)';
      ctx.font = '700 28px Rajdhani, sans-serif';
      ctx.fillText(label.toUpperCase(), left, cy);
      // bar track
      ctx.fillStyle = 'rgba(255,255,255,0.12)';
      roundRect(ctx, barX, cy - barH / 2, barW, barH, barH / 2);
      ctx.fill();
      // bar fill
      ctx.fillStyle = color;
      roundRect(ctx, barX, cy - barH / 2, Math.max(barH, (barW * Math.min(100, Math.max(0, v))) / 100), barH, barH / 2);
      ctx.fill();
      // percent
      ctx.textAlign = 'right';
      ctx.font = '700 28px "Share Tech Mono", monospace';
      ctx.fillText(`${v}%`, W - 150, cy);
    });
    ctx.textBaseline = 'alphabetic';
    ctx.textAlign = 'center';
  }

  // ── Pillar chips ──
  if (metrics) {
    const startX = 130;
    const gap = (W - 260) / 6;
    const chipTop = traits ? 1010 : 1000;
    METRICS.forEach((m, i) => {
      const cx = startX + gap * i + gap / 2;
      const val = metrics[m.id];
      ctx.fillStyle = 'rgba(255,255,255,0.06)';
      roundRect(ctx, cx - gap / 2 + 8, chipTop, gap - 16, 104, 14);
      ctx.fill();
      ctx.fillStyle = m.color;
      ctx.font = '700 28px Rajdhani, sans-serif';
      ctx.fillText(m.id, cx, chipTop + 42);
      ctx.fillStyle = '#ffffff';
      ctx.font = '700 38px "Share Tech Mono", monospace';
      ctx.fillText(String(val).padStart(2, '0'), cx, chipTop + 86);
    });
    if (typeof average === 'number') {
      ctx.fillStyle = 'rgba(227,236,230,0.7)';
      ctx.font = '500 32px Rajdhani, sans-serif';
      ctx.fillText(`National average ${average.toFixed(1)}%`, W / 2, traits ? 1180 : 1170);
    }
  }

  // ── Footer: player + tagline ──
  ctx.fillStyle = 'rgba(227,236,230,0.55)';
  ctx.font = '600 32px Rajdhani, sans-serif';
  ctx.fillText((displayName || 'A reluctant leader').toUpperCase(), W / 2, 1258);
  ctx.fillStyle = BRAND.greenBright;
  ctx.font = '500 28px Rajdhani, sans-serif';
  ctx.fillText(BRAND.tagline, W / 2, 1302);

  const dataUrl = canvas.toDataURL('image/png');
  const blob = await new Promise((res) => canvas.toBlob(res, 'image/png'));
  return { blob, dataUrl };
}
