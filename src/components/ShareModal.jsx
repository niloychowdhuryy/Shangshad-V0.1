import { useEffect, useState } from 'react';
import { generateShareCard } from '../share/shareCard.js';
import {
  buildShareText,
  nativeShare,
  shareToFacebook,
  downloadImage,
  copyText,
  supportsNativeFileShare,
} from '../share/shareService.js';
import { IconClose, IconShare, IconFacebook, IconInstagram } from './icons/Icons.jsx';

// stats: { days, won, average, displayName, metrics? }
export default function ShareModal({ open, stats, onClose }) {
  const [card, setCard] = useState(null); // { blob, dataUrl }
  const [busy, setBusy] = useState(true);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (!open || !stats) return;
    let alive = true;
    setBusy(true);
    setCard(null);
    generateShareCard(stats)
      .then((c) => alive && setCard(c))
      .catch(() => alive && setToast('Could not render image'))
      .finally(() => alive && setBusy(false));
    return () => {
      alive = false;
    };
  }, [open, stats]);

  if (!open) return null;
  const text = stats ? buildShareText(stats) : '';
  const canNative = card && supportsNativeFileShare(card.blob);

  const flash = (m) => {
    setToast(m);
    setTimeout(() => setToast(null), 2200);
  };

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="panel w-full max-w-sm p-5" onClick={(e) => e.stopPropagation()}>
        <div className="mb-3 flex items-center justify-between border-b border-line/50 pb-3">
          <h2 className="flex items-center gap-2 font-tech text-lg font-bold uppercase tracking-wide text-accent">
            <IconShare size={18} /> Share your reign
          </h2>
          <button className="rail-btn h-8 w-8" onClick={onClose}>
            <IconClose size={14} />
          </button>
        </div>

        {/* Preview */}
        <div className="mb-4 overflow-hidden rounded-lg border border-line/50 bg-black/40">
          {busy ? (
            <div className="grid aspect-[4/5] place-items-center font-mono text-xs text-parchment/50">
              RENDERING…
            </div>
          ) : card ? (
            <img src={card.dataUrl} alt="Shareable result card" className="w-full" />
          ) : (
            <div className="grid aspect-[4/5] place-items-center font-mono text-xs text-red-400">FAILED</div>
          )}
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-2">
          {canNative && (
            <button
              className="btn-primary col-span-2 flex items-center justify-center gap-2"
              onClick={async () => {
                const r = await nativeShare({ blob: card.blob, text });
                if (r === 'unsupported') flash('Sharing not available');
              }}
            >
              <IconShare size={15} /> Share…
            </button>
          )}

          <button
            className="btn-ghost flex items-center justify-center gap-2"
            disabled={!card}
            onClick={() => shareToFacebook(text)}
          >
            <IconFacebook size={16} /> Facebook
          </button>

          <button
            className="btn-ghost flex items-center justify-center gap-2"
            disabled={!card}
            onClick={async () => {
              // Instagram has no web intent: native sheet on mobile, else download.
              const r = await nativeShare({ blob: card.blob, text });
              if (r === 'unsupported' || r === 'shared-text') {
                downloadImage(card.dataUrl);
                flash('Image saved — post it to your IG story');
              }
            }}
          >
            <IconInstagram size={16} /> Instagram
          </button>

          <button className="btn-ghost text-xs" disabled={!card} onClick={() => downloadImage(card.dataUrl)}>
            Download image
          </button>
          <button
            className="btn-ghost text-xs"
            onClick={async () => flash((await copyText(text)) ? 'Caption copied' : 'Copy failed')}
          >
            Copy caption
          </button>
        </div>

        {toast && (
          <p className="mt-3 text-center font-mono text-[11px] uppercase tracking-wider text-accent">{toast}</p>
        )}
      </div>
    </div>
  );
}
