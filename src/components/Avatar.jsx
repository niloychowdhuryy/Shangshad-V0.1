// A leaderboard avatar. Shows the real photo when the player has opted in
// (publicProfile) and one exists; otherwise a deterministic "random" avatar
// generated from a seed (a coloured disc with the name's initial).

const COLORS = ['#16c79a', '#f5c542', '#38bdf8', '#ff5470', '#b06bff', '#34d399', '#ffa726', '#f42a41'];

function hash(s = '') {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

export default function Avatar({ seed = '', name = '?', photoURL = null, size = 28 }) {
  if (photoURL) {
    return <img src={photoURL} alt="" width={size} height={size} className="shrink-0 rounded-full object-cover" />;
  }
  const bg = COLORS[hash(seed || name) % COLORS.length];
  const initial = (name || '?').trim().charAt(0).toUpperCase() || '?';
  return (
    <span
      className="grid shrink-0 place-items-center rounded-full font-tech font-bold text-ink"
      style={{ width: size, height: size, background: bg, fontSize: Math.round(size * 0.44) }}
    >
      {initial}
    </span>
  );
}
