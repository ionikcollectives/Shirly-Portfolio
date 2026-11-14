// Laurel branches: the film-poster way of naming an award. Drawn from a few
// numbers, so every wreath on the site (opening screen, Recognition) matches.
const f = n => +n.toFixed(2);
const rad = d => (d * Math.PI) / 180;
const LEAVES = 7;

// a pointed leaf from (x, y), `len` long, pointing along `ang`
function leaf(x, y, ang, len, w) {
  const tx = x + Math.cos(ang) * len, ty = y + Math.sin(ang) * len;
  const mx = x + Math.cos(ang) * len * .5, my = y + Math.sin(ang) * len * .5;
  const nx = Math.cos(ang + Math.PI / 2) * w, ny = Math.sin(ang + Math.PI / 2) * w;
  return `M${f(x)} ${f(y)}Q${f(mx + nx)} ${f(my + ny)} ${f(tx)} ${f(ty)}Q${f(mx - nx)} ${f(my - ny)} ${f(x)} ${f(y)}Z`;
}

let cache = '';
function paths() {
  if (cache) return cache;
  // the stem is an arc that bows to the left, from the foot (a0) up to the tip (a1)
  const cx = 54, cy = 48, r = 42, a0 = 116, a1 = 246;
  const P = a => [cx + r * Math.cos(rad(a)), cy + r * Math.sin(rad(a))];
  const [sx, sy] = P(a0), [ex, ey] = P(a1);
  let out = `<path class="laurel__stem" d="M${f(sx)} ${f(sy)}A${r} ${r} 0 0 1 ${f(ex)} ${f(ey)}"/>`;
  for (let i = 0; i < LEAVES; i++) {
    const a = a0 + ((i + .55) / LEAVES) * (a1 - a0);
    const [x, y] = P(a);
    const along = a + 90;                 // direction of travel up the stem
    const k = 1 - (i / LEAVES) * .3;      // leaves get smaller towards the tip
    out += `<path class="laurel__leaf" d="${leaf(x, y, rad(along - 44), 14 * k, 3.6 * k)}"/>`;
    out += `<path class="laurel__leaf" d="${leaf(x, y, rad(along + 40), 11.5 * k, 3.2 * k)}"/>`;
  }
  out += `<path class="laurel__leaf" d="${leaf(ex, ey, rad(a1 + 90), 10, 3)}"/>`;
  return (cache = out);
}

// leaves on one branch, for staggering the two sides together
export const LEAVES_PER_BRANCH = LEAVES * 2 + 1;

export const branch = (right = false) =>
  `<svg class="laurel__b${right ? ' laurel__b--r' : ''}" viewBox="0 0 48 96" aria-hidden="true" focusable="false">${paths()}</svg>`;
