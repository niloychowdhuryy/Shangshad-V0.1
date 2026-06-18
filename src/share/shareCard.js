// Generates an attractive 1080×1350 share image on a <canvas> — the kind of
// card you'd post to a Facebook feed or Instagram story:
//   "I survived ____ days as the leader of Bangladesh."
//
// Returns { blob, dataUrl }. Pure browser API; no network.

import { BRAND } from '../game/brand.js';
import { METRICS } from '../game/constants.js';

const W = 1080;
const H = 1350;

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

export async function generateShareCard({ days, won, average, displayName, metrics }) {
  // Wait for web fonts so the Bangla + Rajdhani text renders correctly.
  try {
    await document.fonts.ready;
  } catch {
    /* fonts API unavailable — fall back to system fonts */
  }

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

  // ── Flag motif: Bangladesh green field with the red sun, offset like the flag ──
  ctx.save();
  ctx.globalAlpha = 0.16;
  ctx.fillStyle = BRAND.green;
  roundRect(ctx, 70, 70, W - 140, H - 140, 36);
  ctx.fill();
  ctx.globalAlpha = 0.9;
  const sun = ctx.createRadialGradient(W * 0.42, 360, 20, W * 0.42, 360, 230);
  sun.addColorStop(0, BRAND.red);
  sun.addColorStop(1, 'rgba(244,42,65,0)');
  ctx.globalAlpha = 0.5;
  ctx.fillStyle = sun;
  ctx.beginPath();
  ctx.arc(W * 0.42, 360, 230, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  // ── Border frame ──
  ctx.strokeStyle = 'rgba(22,199,154,0.45)';
  ctx.lineWidth = 3;
  roundRect(ctx, 40, 40, W - 80, H - 80, 30);
  ctx.stroke();

  ctx.textAlign = 'center';

  // ── Title ──
  ctx.fillStyle = '#eafff7';
  ctx.font = '700 96px "Noto Sans Bengali", sans-serif';
  ctx.fillText(BRAND.bangla, W / 2, 250);
  ctx.fillStyle = BRAND.greenBright;
  ctx.font = '700 64px Rajdhani, sans-serif';
  ctx.fillText('S H A N G S H A D', W / 2, 330);

  // ── Result banner ──
  const resultText = won ? 'RE-ELECTED' : 'OVERTHROWN';
  const resultColor = won ? '#37e0a0' : '#ff5470';
  ctx.font = '700 40px Rajdhani, sans-serif';
  ctx.fillStyle = resultColor;
  ctx.fillText(resultText, W / 2, 430);

  // ── The headline number ──
  ctx.fillStyle = '#ffffff';
  ctx.font = '700 280px Rajdhani, sans-serif';
  ctx.fillText(String(days), W / 2, 760);
  ctx.fillStyle = BRAND.greenBright;
  ctx.font = '600 70px Rajdhani, sans-serif';
  ctx.fillText('DAYS IN POWER', W / 2, 850);

  ctx.fillStyle = 'rgba(227,236,230,0.85)';
  ctx.font = '500 42px Rajdhani, sans-serif';
  ctx.fillText('as the leader of Bangladesh', W / 2, 920);

  // ── Metric chips (optional) ──
  if (metrics) {
    const startX = 130;
    const gap = (W - 260) / 6;
    METRICS.forEach((m, i) => {
      const cx = startX + gap * i + gap / 2;
      const val = metrics[m.id];
      ctx.fillStyle = 'rgba(255,255,255,0.06)';
      roundRect(ctx, cx - gap / 2 + 8, 990, gap - 16, 110, 14);
      ctx.fill();
      ctx.fillStyle = m.color;
      ctx.font = '700 30px Rajdhani, sans-serif';
      ctx.fillText(m.id, cx, 1035);
      ctx.fillStyle = '#ffffff';
      ctx.font = '700 40px "Share Tech Mono", monospace';
      ctx.fillText(String(val).padStart(2, '0'), cx, 1080);
    });
    if (typeof average === 'number') {
      ctx.fillStyle = 'rgba(227,236,230,0.7)';
      ctx.font = '500 34px Rajdhani, sans-serif';
      ctx.fillText(`National average ${average.toFixed(1)}%`, W / 2, 1170);
    }
  }

  // ── Footer: player + tagline ──
  ctx.fillStyle = 'rgba(227,236,230,0.55)';
  ctx.font = '600 34px Rajdhani, sans-serif';
  ctx.fillText((displayName || 'A reluctant leader').toUpperCase(), W / 2, 1255);
  ctx.fillStyle = BRAND.greenBright;
  ctx.font = '500 30px Rajdhani, sans-serif';
  ctx.fillText(BRAND.tagline, W / 2, 1300);

  const dataUrl = canvas.toDataURL('image/png');
  const blob = await new Promise((res) => canvas.toBlob(res, 'image/png'));
  return { blob, dataUrl };
}
