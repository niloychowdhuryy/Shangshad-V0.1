// Share plumbing. Honest about platform limits:
//   - Native share (mobile): can attach the generated PNG directly → the OS
//     share sheet lets the user pick Instagram, Messenger, etc.
//   - Facebook: the web sharer cannot attach a local file; it scrapes the OG
//     image from the shared URL. So we open the sharer with the quote AND offer
//     a download so the player can attach the image manually.
//   - Instagram: has no web share intent at all. On mobile we route through the
//     native sheet; on desktop we download the image to post manually.

const APP_URL = 'https://shangshad.game'; // replace with your deployed URL

export function buildShareText({ days, won }) {
  const verb = won ? 'won re-election after surviving' : 'survived';
  return `I ${verb} ${days} days as the leader of Bangladesh in Shangshad. Can you outlast the Jatiya Sangsad?`;
}

export function supportsNativeFileShare(blob) {
  if (!navigator.canShare || !navigator.share) return false;
  try {
    const file = new File([blob], 'shangshad.png', { type: 'image/png' });
    return navigator.canShare({ files: [file] });
  } catch {
    return false;
  }
}

/** Returns 'shared' | 'shared-text' | 'cancelled' | 'unsupported'. */
export async function nativeShare({ blob, text }) {
  if (!navigator.share) return 'unsupported';
  try {
    if (blob && supportsNativeFileShare(blob)) {
      const file = new File([blob], 'shangshad.png', { type: 'image/png' });
      await navigator.share({ files: [file], text, title: 'Shangshad' });
      return 'shared';
    }
    await navigator.share({ text, title: 'Shangshad', url: APP_URL });
    return 'shared-text';
  } catch (e) {
    return e?.name === 'AbortError' ? 'cancelled' : 'unsupported';
  }
}

export function shareToFacebook(text) {
  const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    APP_URL,
  )}&quote=${encodeURIComponent(text)}`;
  window.open(url, '_blank', 'noopener,width=660,height=560');
}

export function downloadImage(dataUrl, filename = 'shangshad.png') {
  const a = document.createElement('a');
  a.href = dataUrl;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}
