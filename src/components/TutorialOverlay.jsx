import { useLayoutEffect, useRef, useState } from 'react';
import { IconChevronLeft } from './icons/Icons.jsx';

const ACCENT = '#16c79a';
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

/**
 * In-game guided tutorial: a dimming spotlight over each highlighted element with
 * a speech bubble pointing at it. Steps are { ref, title, text } where `ref`
 * targets a live DOM node. After the last step it asks whether to keep showing it.
 *
 * @param {{ref: object, title?: string, text: string}[]} steps
 * @param {(keepNextTime: boolean) => void} onDone
 */
export default function TutorialOverlay({ steps, onDone }) {
  const [i, setI] = useState(0);
  const [rect, setRect] = useState(null);
  const [bubbleH, setBubbleH] = useState(170); // measured bubble height for clamping
  const bubbleRef = useRef(null);
  const asking = i >= steps.length;
  const step = asking ? null : steps[i];

  useLayoutEffect(() => {
    if (asking) {
      setRect(null);
      return;
    }
    const measure = () => {
      const el = step?.ref?.current;
      setRect(el ? el.getBoundingClientRect() : null);
      if (bubbleRef.current) setBubbleH(bubbleRef.current.offsetHeight);
    };
    measure();
    const t = setTimeout(measure, 80); // re-measure once layout settles
    window.addEventListener('resize', measure);
    window.addEventListener('scroll', measure, true);
    return () => {
      clearTimeout(t);
      window.removeEventListener('resize', measure);
      window.removeEventListener('scroll', measure, true);
    };
  }, [i, asking, step]);

  const last = i === steps.length - 1;
  const next = () => setI((n) => n + 1);
  const skip = () => setI(steps.length);

  // ── Final "show next time?" prompt ──────────────────────────────────────────
  if (asking) {
    return (
      <div className="fixed inset-0 z-[80] grid place-items-center bg-black/85 p-5">
        <div className="panel animate-card-in w-full max-w-xs p-5 text-center">
          <h2 className="mb-2 font-tech text-base font-bold text-parchment">Show this tutorial next time?</h2>
          <p className="mb-4 font-serif text-[12px] leading-relaxed text-parchment/65">
            You can switch it back on any time in Settings.
          </p>
          <div className="grid grid-cols-2 gap-2">
            <button className="btn-ghost py-2.5 text-sm" onClick={() => onDone(false)}>Turn it off</button>
            <button className="btn-primary py-2.5 text-sm" onClick={() => onDone(true)}>Keep it on</button>
          </div>
        </div>
      </div>
    );
  }

  const vw = typeof window !== 'undefined' ? window.innerWidth : 360;
  const vh = typeof window !== 'undefined' ? window.innerHeight : 640;
  const pad = 6;
  const margin = 12;

  // Bubble width: never wider than the viewport.
  const bubbleW = Math.min(300, vw - margin * 2);
  const half = bubbleW / 2;
  const maxBubbleH = vh - margin * 2;

  // Horizontal: centre on the target, clamped so the bubble stays fully on-screen.
  const cx = rect ? rect.left + rect.width / 2 : vw / 2;
  const left = clamp(cx, half + margin, vw - half - margin);

  // Vertical: prefer below the target, else above; if neither fits, clamp into
  // view (the bubble scrolls internally if it's somehow taller than the screen).
  let top;
  let place = 'center';
  if (rect) {
    const belowTop = rect.bottom + 14;
    const aboveTop = rect.top - 14 - bubbleH;
    if (belowTop + bubbleH <= vh - margin) {
      top = belowTop;
      place = 'below';
    } else if (aboveTop >= margin) {
      top = aboveTop;
      place = 'above';
    } else {
      top = clamp(belowTop, margin, vh - bubbleH - margin);
      place = 'center';
    }
  } else {
    top = clamp((vh - bubbleH) / 2, margin, vh - bubbleH - margin);
  }
  top = clamp(top, margin, Math.max(margin, vh - bubbleH - margin));

  // Spotlight box around the target (a transparent hole in a screen-wide dim).
  const spotlight = rect
    ? {
        position: 'fixed',
        left: rect.left - pad,
        top: rect.top - pad,
        width: rect.width + pad * 2,
        height: rect.height + pad * 2,
        borderRadius: 14,
        border: `2px solid ${ACCENT}`,
        boxShadow: `0 0 0 9999px rgba(6,16,11,0.82), 0 0 22px -2px ${ACCENT}`,
        pointerEvents: 'none',
      }
    : null;

  const bubble = {
    position: 'fixed',
    left,
    top,
    transform: 'translateX(-50%)',
    width: bubbleW,
    maxHeight: maxBubbleH,
    overflowY: 'auto',
  };
  // Only show the arrow when the bubble sits cleanly above/below the target.
  const showArrow = rect && place !== 'center';

  return (
    // Full-screen catcher blocks game interaction during the tour.
    <div className="fixed inset-0 z-[80]" style={rect ? undefined : { background: 'rgba(6,16,11,0.82)' }}>
      {spotlight && <div style={spotlight} />}

      <div ref={bubbleRef} className="panel animate-card-in z-[81] p-4 text-left shadow-2xl" style={bubble}>
        {/* arrow */}
        {showArrow && (
          <span
            className="absolute h-3 w-3 rotate-45 border border-line bg-panel"
            style={
              place === 'below'
                ? { top: -6, left: '50%', marginLeft: -6, borderRight: 'none', borderBottom: 'none' }
                : { bottom: -6, left: '50%', marginLeft: -6, borderLeft: 'none', borderTop: 'none' }
            }
          />
        )}

        <div className="mb-1 font-mono text-[9px] uppercase tracking-[0.25em] text-accent">
          {i + 1} / {steps.length}
        </div>
        {step.title && <h3 className="mb-1 font-tech text-sm font-bold text-parchment">{step.title}</h3>}
        <p className="mb-3 font-serif text-[13px] leading-relaxed text-parchment/85">{step.text}</p>

        <div className="flex items-center justify-between gap-2">
          <button className="btn-ghost flex items-center gap-1 px-2 py-1 text-[11px]" onClick={skip}>
            <IconChevronLeft size={11} /> Skip
          </button>
          <button className="btn-primary px-4 py-1.5 text-xs" onClick={next}>
            {last ? 'Finish' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
}
