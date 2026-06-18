import {
  LOCATIONS,
  MAP_HUB_ID,
  MAX_CONSECUTIVE_PER_LOCATION,
} from '../game/constants.js';
import { isLocationLocked } from '../game/engine.js';
import { locationStatus } from '../game/status.js';
import { LocationIcon, IconLock } from './icons/Icons.jsx';

const HUB = LOCATIONS.find((l) => l.id === MAP_HUB_ID);

// The drawing canvas is 100 (w) × 150 (h) to match the panel's 2:3 aspect, so a
// location's {x, y} percentage maps straight onto it: X = x, Y = y · 1.5.
const VB_W = 100;
const VB_H = 150;
const px = (loc) => loc.coords.x;
const py = (loc) => loc.coords.y * (VB_H / 100);

// A gently bowed road from the central Residence to a ministry. The control
// point is pushed perpendicular to the straight line so roads curve like streets
// rather than radiating as spokes.
function roadPath(loc, bow) {
  const hx = px(HUB);
  const hy = py(HUB);
  const nx = px(loc);
  const ny = py(loc);
  const mx = (hx + nx) / 2;
  const my = (hy + ny) / 2;
  const dx = nx - hx;
  const dy = ny - hy;
  const len = Math.hypot(dx, dy) || 1;
  // perpendicular unit vector
  const ux = -dy / len;
  const uy = dx / len;
  const cx = mx + ux * bow;
  const cy = my + uy * bow;
  return `M ${hx} ${hy} Q ${cx} ${cy} ${nx} ${ny}`;
}

// Deterministic bow per location id so the road layout is stable.
const BOWS = { un: 0, resources: 10, party: -10, interior: -12, environment: 12, finance: 0 };

// ── Decorative basemap: ground wash, the Buriganga winding through, and a few
//    Dhaka landmarks (parliament, bridge, towers, a factory, parks). Purely
//    illustrative — non-interactive — so the district boxes read on top.
function MapBackdrop() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox={`0 0 ${VB_W} ${VB_H}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="mapGround" cx="50%" cy="42%" r="75%">
          <stop offset="0%" stopColor="#0e1d17" />
          <stop offset="60%" stopColor="#0a1611" />
          <stop offset="100%" stopColor="#06100b" />
        </radialGradient>
        <linearGradient id="river" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#16c79a" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.16" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width={VB_W} height={VB_H} fill="url(#mapGround)" />

      {/* faint block grid — city fabric */}
      <g stroke="#16c79a" strokeOpacity="0.05" strokeWidth="0.25" vectorEffect="non-scaling-stroke">
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`v${i}`} x1={(i + 1) * 10} y1="0" x2={(i + 1) * 10} y2={VB_H} />
        ))}
        {Array.from({ length: 14 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={(i + 1) * 10} x2={VB_W} y2={(i + 1) * 10} />
        ))}
      </g>

      {/* The river — a winding band across the city */}
      <path
        d="M -6 34 C 22 26, 30 58, 52 56 C 74 54, 80 86, 106 80 L 106 96 C 78 102, 70 70, 50 72 C 30 74, 22 44, -6 50 Z"
        fill="url(#river)"
      />
      <path
        d="M -6 42 C 22 34, 32 64, 52 62 C 72 60, 82 90, 106 86"
        fill="none"
        stroke="#9fe7d6"
        strokeOpacity="0.18"
        strokeWidth="0.4"
        vectorEffect="non-scaling-stroke"
      />

      {/* bridge over the river, near the centre */}
      <g stroke="#5b7a70" strokeOpacity="0.5" strokeWidth="0.5" vectorEffect="non-scaling-stroke" fill="none">
        <path d="M 40 70 Q 50 60 60 70" />
        <line x1="42" y1="66" x2="42" y2="71" />
        <line x1="50" y1="63" x2="50" y2="68" />
        <line x1="58" y1="66" x2="58" y2="71" />
      </g>

      {/* landmark glyphs (low-opacity ink) */}
      <g fill="#2c4a40" fillOpacity="0.55" stroke="none">
        {/* Parliament (Sangsad) silhouette, upper-centre */}
        <g transform="translate(43 24)">
          <rect x="0" y="6" width="14" height="6" rx="0.5" />
          <path d="M 0 6 Q 7 -2 14 6 Z" />
          <rect x="2" y="2" width="10" height="1.4" />
        </g>
        {/* tower cluster, lower-centre (Motijheel CBD) */}
        <g transform="translate(45 122)">
          <rect x="0" y="-2" width="3" height="12" />
          <rect x="4" y="-6" width="3" height="16" />
          <rect x="8" y="-1" width="3" height="11" />
        </g>
        {/* factory, upper-right (Bashundhara/industry) */}
        <g transform="translate(78 40)">
          <rect x="0" y="2" width="10" height="6" />
          <rect x="2" y="-2" width="1.6" height="4" />
          <path d="M 0 2 l 3 -3 l 0 3 Z" />
        </g>
        {/* tower block, upper-left (Banani) */}
        <g transform="translate(12 40)">
          <rect x="0" y="-3" width="4" height="11" />
          <rect x="5" y="0" width="3" height="8" />
        </g>
        {/* park / trees, lower-left (Dhanmondi) */}
        <g transform="translate(12 104)">
          <circle cx="2" cy="2" r="2.2" />
          <circle cx="6" cy="3" r="1.8" />
          <circle cx="9" cy="1.5" r="2" />
        </g>
        {/* embassy/dome, top (Gulshan) */}
        <g transform="translate(58 14)">
          <path d="M 0 4 Q 3 0 6 4 Z" />
          <rect x="0" y="4" width="6" height="3" />
        </g>
      </g>
    </svg>
  );
}

// ── The curved road network, drawn over the basemap ──────────────────────────
function Roads({ state }) {
  const spokes = LOCATIONS.filter((l) => l.id !== MAP_HUB_ID);
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox={`0 0 ${VB_W} ${VB_H}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {spokes.map((l) => {
        const locked = isLocationLocked(state, l.id);
        const d = roadPath(l, BOWS[l.id] ?? 0);
        return (
          <g key={l.id}>
            {/* road casing */}
            <path d={d} fill="none" stroke="#0c1a14" strokeWidth="1.6" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
            {/* road surface + animated dashes when open */}
            <path
              d={d}
              fill="none"
              stroke={locked ? '#283a32' : '#3f6a5c'}
              strokeWidth="0.9"
              strokeLinecap="round"
              strokeDasharray="2 2"
              className={locked ? '' : 'animate-dash'}
              vectorEffect="non-scaling-stroke"
            />
          </g>
        );
      })}
    </svg>
  );
}

// ── A single highlighted, tappable district box ──────────────────────────────
function DistrictBox({ loc, state, isActive, onOpen }) {
  const locked = isLocationLocked(state, loc.id);
  const status = locationStatus(state, loc.id);
  const answered = state.locations[loc.id]?.answered || 0;
  const isHub = loc.id === MAP_HUB_ID;
  const accent = locked ? '#46566b' : status.accent;

  return (
    <button
      type="button"
      disabled={locked}
      onClick={() => onOpen(loc.id)}
      className="group absolute z-10 w-[84px] -translate-x-1/2 -translate-y-1/2 touch-manipulation"
      style={{ left: `${loc.coords.x}%`, top: `${loc.coords.y}%` }}
    >
      <span className="mb-1 block text-center font-mono text-[7.5px] tracking-[0.22em] text-parchment/40">
        {loc.district}
      </span>

      <span
        className={`relative flex flex-col items-center gap-1 rounded-xl border px-2 py-1.5 transition ${
          isActive ? 'animate-ring-pulse' : ''
        } ${locked ? '' : 'group-hover:-translate-y-0.5 group-active:translate-y-0'}`}
        style={{
          borderColor: locked ? '#2c3a48' : `${accent}cc`,
          background: locked
            ? 'linear-gradient(180deg, rgba(16,28,24,0.92), rgba(8,16,12,0.92))'
            : `linear-gradient(180deg, ${accent}1f, rgba(8,18,14,0.92))`,
          boxShadow: locked ? 'none' : `0 0 18px -6px ${accent}, inset 0 0 0 1px ${accent}33`,
          opacity: locked ? 0.62 : 1,
        }}
      >
        <span style={{ color: accent }}>
          <LocationIcon id={loc.id} size={isHub ? 22 : 19} stroke={1.7} />
        </span>
        <span className="block w-[74px] text-center font-tech text-[9.5px] font-bold uppercase leading-[1.05] tracking-wide text-parchment">
          {loc.name}
        </span>

        {/* status / pacing */}
        {locked ? (
          <span className="font-mono text-[7px] uppercase tracking-[0.15em] text-parchment/45">
            Closed · Sleep
          </span>
        ) : (
          <span className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: status.color }} />
            <span className="font-mono text-[7px] font-bold uppercase tracking-[0.12em]" style={{ color: status.color }}>
              {status.label}
            </span>
          </span>
        )}

        {/* answer pips (open offices only) */}
        {!locked && (
          <span className="flex gap-0.5">
            {Array.from({ length: MAX_CONSECUTIVE_PER_LOCATION }).map((_, i) => (
              <span
                key={i}
                className="h-0.5 w-2 rounded-[1px]"
                style={{ backgroundColor: i < answered ? accent : 'rgba(255,255,255,0.14)' }}
              />
            ))}
          </span>
        )}

        {/* lock chip */}
        {locked && (
          <span className="absolute -right-1.5 -top-1.5 grid h-5 w-5 place-items-center rounded-full border border-line bg-panel text-parchment/60">
            <IconLock size={11} stroke={2} />
          </span>
        )}

        {/* seat-of-power marker on the hub */}
        {isHub && !locked && (
          <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 rounded-full bg-bdred px-1.5 font-mono text-[6.5px] font-bold uppercase tracking-wider text-white">
            Seat
          </span>
        )}
      </span>
    </button>
  );
}

export default function MapView({ state, activeLocation, onOpen }) {
  return (
    <div className="panel relative aspect-[2/3] w-full overflow-hidden">
      <MapBackdrop />
      <Roads state={state} />
      {LOCATIONS.map((loc) => (
        <DistrictBox
          key={loc.id}
          loc={loc}
          state={state}
          isActive={activeLocation === loc.id}
          onOpen={onOpen}
        />
      ))}
    </div>
  );
}
