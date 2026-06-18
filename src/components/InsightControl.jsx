import { useState } from 'react';
import { IconInsight, IconPlay } from './icons/Icons.jsx';

// Rewarded-ad button that grants the Insight window. Lives in the right rail.
// When Insight is active it is disabled and the count is shown on the left rail.
export default function InsightControl({ insightRemaining, onWatchAd, busy }) {
  const [progress, setProgress] = useState(0);
  const active = insightRemaining > 0;
  const watching = busy === 'insight';

  return (
    <button
      title={active ? `Insight active (${insightRemaining} left)` : 'Watch ad for Insight (next 10)'}
      disabled={!!busy || active}
      onClick={async () => {
        setProgress(0);
        await onWatchAd((p) => setProgress(p));
        setProgress(0);
      }}
      className="rail-btn relative overflow-hidden"
      style={active ? { color: '#f5c542', boxShadow: '0 0 16px -4px #f5c542' } : undefined}
    >
      {watching ? (
        <>
          <IconInsight size={18} />
          <span
            className="absolute bottom-0 left-0 h-0.5 bg-amber-300"
            style={{ width: `${Math.round(progress * 100)}%` }}
          />
        </>
      ) : active ? (
        <IconInsight size={18} />
      ) : (
        <span className="relative">
          <IconInsight size={18} />
          <IconPlay size={9} className="absolute -bottom-1 -right-1.5 text-accent" />
        </span>
      )}
    </button>
  );
}
