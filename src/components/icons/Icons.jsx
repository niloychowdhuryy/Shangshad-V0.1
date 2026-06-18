// ─────────────────────────────────────────────────────────────────────────────
// SVG ICON SET
// Line-art, currentColor-driven icons. Replaces all emoji in the UI so the look
// stays consistent and "tech". Each icon takes { size, stroke } and inherits
// color from CSS `color`.
// ─────────────────────────────────────────────────────────────────────────────

function S({ size = 24, stroke = 1.6, children, ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      {children}
    </svg>
  );
}

// ── Metric glyphs ────────────────────────────────────────────────────────────
export const IconFinance = (p) => (
  <S {...p}>
    <path d="M3 21h18" />
    <path d="M6 21v-7M11 21V8M16 21v-5M21 21V4" />
  </S>
);
export const IconGlobal = (p) => (
  <S {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3c3.2 2.6 3.2 15.4 0 18M12 3c-3.2 2.6-3.2 15.4 0 18" />
  </S>
);
export const IconMilitary = (p) => (
  <S {...p}>
    <path d="M12 3l8 3v6c0 4.7-3.6 7.8-8 9-4.4-1.2-8-4.3-8-9V6z" />
    <path d="M8.5 12l2.4 2.4L15.5 10" />
  </S>
);
export const IconResource = (p) => (
  <S {...p}>
    <path d="M12 3l9 5-9 5-9-5z" />
    <path d="M3 12l9 5 9-5" />
    <path d="M3 16.5l9 5 9-5" />
  </S>
);
export const IconWellbeing = (p) => (
  <S {...p}>
    <path d="M3 12h4l2-5 3.5 11L15 12h6" />
  </S>
);
export const IconFamily = (p) => (
  <S {...p}>
    <circle cx="6" cy="6" r="2.4" />
    <circle cx="18" cy="6" r="2.4" />
    <circle cx="12" cy="18" r="2.4" />
    <path d="M8.4 6h7.2M7.4 7.9l3.4 8.2M16.6 7.9l-3.4 8.2" />
  </S>
);

// ── Location glyphs ──────────────────────────────────────────────────────────
export const IconHome = (p) => (
  <S {...p}>
    <path d="M3 11l9-7 9 7" />
    <path d="M5 10v9h14v-9" />
    <path d="M10 19v-5h4v5" />
  </S>
);
export const IconParty = (p) => (
  <S {...p}>
    <path d="M6 3v18" />
    <path d="M6 4h11l-2.5 3.2L17 10.5H6" />
  </S>
);
export const IconUN = (p) => (
  <S {...p}>
    <circle cx="12" cy="12" r="8" />
    <path d="M4 12h16M12 4v16" />
    <path d="M6.5 6.5l11 11M17.5 6.5l-11 11" opacity="0.5" />
  </S>
);
export const IconInterior = (p) => (
  <S {...p}>
    <path d="M4 21v-9h2v-2h2v2h2v-3h4v3h2v-2h2v2h2v9z" />
    <path d="M10.5 21v-4h3v4" />
  </S>
);
export const IconPipes = (p) => (
  <S {...p}>
    <path d="M4 8h6a3 3 0 0 1 3 3v3a3 3 0 0 0 3 3h4" />
    <path d="M4 5v6M20 13v6" />
    <circle cx="4" cy="8" r="1.3" />
    <circle cx="20" cy="17" r="1.3" />
  </S>
);
export const IconLeaf = (p) => (
  <S {...p}>
    <path d="M5 21c-1-8 5-16 16-16 1 8-5 16-16 16z" />
    <path d="M5 21C9 15 14 11 19 9" />
  </S>
);
export const IconBallot = (p) => (
  <S {...p}>
    <path d="M12 3l2.5 5.4 5.9.6-4.4 4 1.3 5.8L12 21l-5.3 2.4 1.3-5.8-4.4-4 5.9-.6z" />
  </S>
);

// ── UI glyphs ────────────────────────────────────────────────────────────────
export const IconLock = (p) => (
  <S {...p}>
    <rect x="5" y="11" width="14" height="9" rx="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </S>
);
export const IconPlay = (p) => (
  <S {...p}>
    <path d="M8 5.5v13l11-6.5z" />
  </S>
);
export const IconInsight = (p) => (
  <S {...p}>
    <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
    <circle cx="12" cy="12" r="3" />
  </S>
);
export const IconChevronLeft = (p) => (
  <S {...p}>
    <path d="M15 5l-7 7 7 7" />
  </S>
);
export const IconPower = (p) => (
  <S {...p}>
    <path d="M12 3v9" />
    <path d="M6.5 6.5a8 8 0 1 0 11 0" />
  </S>
);
export const IconRank = (p) => (
  <S {...p}>
    <path d="M4 20V11M10 20V5M16 20v-6M22 20H2" />
    <path d="M10 5l-2-2 4-1-1 4z" opacity="0.8" />
  </S>
);
export const IconClose = (p) => (
  <S {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </S>
);
export const IconRevive = (p) => (
  <S {...p}>
    <path d="M21 12a9 9 0 1 1-3-6.7" />
    <path d="M21 4v5h-5" />
  </S>
);
export const IconAlert = (p) => (
  <S {...p}>
    <path d="M12 3l9 16H3z" />
    <path d="M12 10v4M12 17.5v.5" />
  </S>
);
export const IconCrown = (p) => (
  <S {...p}>
    <path d="M3 8l4 4 5-7 5 7 4-4-2 12H5z" />
  </S>
);

export const IconSleep = (p) => (
  // Crescent moon — rest / reset the week.
  <S {...p}>
    <path d="M21 12.8A8 8 0 1 1 11.2 3a6.2 6.2 0 0 0 9.8 9.8z" />
  </S>
);
export const IconFavor = (p) => (
  // Gift / boon — the favors stash.
  <S {...p}>
    <rect x="4" y="9" width="16" height="11" rx="1.5" />
    <path d="M3 9h18M12 9v11" />
    <path d="M12 9S10.5 4 8.2 4.3C6.6 4.5 6.6 7 8 8s4 1 4 1zM12 9s1.5-5 3.8-4.7C17.4 4.5 17.4 7 16 8s-4 1-4 1z" />
  </S>
);
export const IconTrade = (p) => (
  // Two-way swap.
  <S {...p}>
    <path d="M4 8h13l-3-3M20 16H7l3 3" />
  </S>
);

export const IconSettings = (p) => (
  <S {...p}>
    <circle cx="12" cy="12" r="3.2" />
    <path d="M12 2.5l1.4 2.6 2.9-.5.5 2.9 2.6 1.4-1.3 2.6 1.3 2.6-2.6 1.4-.5 2.9-2.9-.5L12 21.5l-1.4-2.6-2.9.5-.5-2.9-2.6-1.4 1.3-2.6L2.1 9.9l2.6-1.4.5-2.9 2.9.5z" />
  </S>
);
export const IconLink = (p) => (
  <S {...p}>
    <path d="M9 15l6-6" />
    <path d="M11 6l1-1a4 4 0 0 1 6 6l-1 1M13 18l-1 1a4 4 0 0 1-6-6l1-1" />
  </S>
);
export const IconUser = (p) => (
  <S {...p}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21a8 8 0 0 1 16 0" />
  </S>
);
export const IconStar = (p) => (
  <S {...p}>
    <path d="M12 3l2.6 5.6 6 .7-4.4 4.1 1.2 6L12 17.8 6.6 19.4l1.2-6L3.4 9.3l6-.7z" />
  </S>
);

export const IconShapla = (p) => (
  // Stylised water lily (Shapla) — Bangladesh's national flower.
  <S {...p}>
    <path d="M12 21c-5.5 0-9.5-3.3-9.5-7.6 2.2-1.2 4.4-1 6 .3-1-3.4.6-6.4 3.5-8.7 2.9 2.3 4.5 5.3 3.5 8.7 1.6-1.3 3.8-1.5 6-.3C21.5 17.7 17.5 21 12 21z" />
    <path d="M12 21c-2.6 0-4.6-3.1-4.6-7 0-2.6 1.8-5.2 4.6-7 2.8 1.8 4.6 4.4 4.6 7 0 3.9-2 7-4.6 7z" />
  </S>
);
export const IconNew = (p) => (
  <S {...p}>
    <path d="M12 5v14M5 12h14" />
  </S>
);
export const IconBook = (p) => (
  <S {...p}>
    <path d="M4 5a2 2 0 0 1 2-2h13v15H6a2 2 0 0 0-2 2z" />
    <path d="M4 20a2 2 0 0 1 2-2h13" />
  </S>
);
export const IconShare = (p) => (
  <S {...p}>
    <circle cx="6" cy="12" r="2.4" />
    <circle cx="17.5" cy="6" r="2.4" />
    <circle cx="17.5" cy="18" r="2.4" />
    <path d="M8.1 10.9l7.3-3.9M8.1 13.1l7.3 3.9" />
  </S>
);
export const IconInstagram = (p) => (
  <S {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.6" />
  </S>
);
export function IconFacebook({ size = 24 }) {
  // Filled "f" glyph (uses fill, not stroke).
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13 21v-7h2.4l.4-3H13V9.1c0-.9.3-1.4 1.5-1.4H16V5.1c-.3 0-1.2-.1-2.2-.1-2.2 0-3.8 1.4-3.8 3.9V11H7.8v3H10v7z" />
    </svg>
  );
}

// ── Lookup maps ──────────────────────────────────────────────────────────────
const METRIC_ICONS = {
  FI: IconFinance,
  GL: IconGlobal,
  MI: IconMilitary,
  RE: IconResource,
  EN: IconWellbeing,
  FA: IconFamily,
};
const LOCATION_ICONS = {
  home: IconHome,
  party: IconParty,
  finance: IconFinance,
  un: IconUN,
  interior: IconInterior,
  resources: IconPipes,
  environment: IconLeaf,
  endgame: IconBallot,
};

export function MetricIcon({ id, ...rest }) {
  const C = METRIC_ICONS[id] || IconGlobal;
  return <C {...rest} />;
}
export function LocationIcon({ id, ...rest }) {
  const C = LOCATION_ICONS[id] || IconHome;
  return <C {...rest} />;
}
