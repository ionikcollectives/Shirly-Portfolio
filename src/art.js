// Illustrated key art for each work. Pure SVG, coloured by CSS variables so it
// follows day/night mode. Compositions are centre-weighted so they survive the
// 2.39:1 → 16:9 → 4:5 crops used across breakpoints.

const W = 2390, H = 1000, CX = 1195;

const wrap = (id, inner, defs = '') =>
  `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id="${id}-sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" style="stop-color:var(--art-bg)"/>
        <stop offset="1" style="stop-color:var(--art-low)"/>
      </linearGradient>
      <radialGradient id="${id}-halo" cx="50%" cy="50%" r="50%">
        <stop offset="0" style="stop-color:var(--art-ink);stop-opacity:.22"/>
        <stop offset="1" style="stop-color:var(--art-ink);stop-opacity:0"/>
      </radialGradient>
      ${defs}
    </defs>
    ${inner}
  </svg>`;

const range = (n, f) => Array.from({ length: n }, (_, i) => f(i)).join('');

// deterministic wobble so the ridgelines are the same on every load
const wob = (x, s) => Math.sin(x * .0021 + s) * .55 + Math.sin(x * .0057 + s * 2.3) * .3 + Math.sin(x * .013 + s * 4.1) * .15;
const ridgePath = (base, amp, seed) => {
  let d = `M -40 ${H}`;
  for (let x = -40; x <= W + 40; x += 60) d += ` L ${x} ${(base - wob(x, seed) * amp).toFixed(1)}`;
  return d + ` L ${W + 40} ${H} Z`;
};

const PRESETS = {
  ridge(id) {
    const ex = CX - 140, ey = 470;
    return wrap(id, `
      <rect width="${W}" height="${H}" fill="url(#${id}-sky)"/>
      <g fill="none" class="a-ink-stroke">
        ${range(7, i => `<path class="anim-ripple" style="animation-delay:${i * -1.1}s" d="M ${ex - 90 - i * 85} ${ey} A ${90 + i * 85} ${90 + i * 85} 0 0 1 ${ex + 90 + i * 85} ${ey}" stroke-width="${2 - i * .16}" opacity="${.55 - i * .07}"/>`)}
      </g>
      <circle cx="${ex}" cy="${ey}" r="9" class="a-acc"/>
      <circle cx="${ex}" cy="${ey}" r="160" fill="url(#${id}-halo)"/>
      <g class="anim-drift"><path d="${ridgePath(600, 130, 1.3)}" class="a-low" opacity=".7"/></g>
      <path d="${ridgePath(680, 110, 2.9)}" class="a-mid" opacity=".75"/>
      <path d="${ridgePath(770, 90, 4.4)}" class="a-mid"/>
      <path d="${ridgePath(860, 60, 6.1)}" class="a-bg"/>
      <path d="${ridgePath(860, 60, 6.1).replace(/ L [-\d.]+ 1000 Z$/, '').replace(/^M -40 1000/, 'M -40 860')}" fill="none" class="a-ink-stroke" stroke-width="1.6" opacity=".35"/>
    `);
  },

  dusk(id) {
    const hz = 640;
    return wrap(id, `
      <rect width="${W}" height="${H}" fill="url(#${id}-sky)"/>
      <circle cx="${CX}" cy="${hz}" r="520" fill="url(#${id}-halo)"/>
      <g class="anim-sink" clip-path="url(#${id}-above)">
        <circle cx="${CX}" cy="${hz + 40}" r="250" class="a-ink" opacity=".92"/>
        ${range(7, i => `<rect x="${CX - 300}" y="${hz - 20 - i * 34 + i * i * 1.2}" width="600" height="${10 - i * 1.2}" class="a-bg"/>`)}
      </g>
      <rect y="${hz}" width="${W}" height="${H - hz}" class="a-mid"/>
      <line x1="0" x2="${W}" y1="${hz}" y2="${hz}" class="a-acc-stroke" stroke-width="3"/>
      ${range(9, i => { const w = 460 - i * 44 + (i % 2) * 60; return `<rect class="a-ink anim-shimmer" style="animation-delay:${i * -0.4}s" x="${CX - w / 2}" y="${hz + 26 + i * 30}" width="${w}" height="${5 - i * .35}" opacity="${.5 - i * .045}"/>`; })}
    `, `<clipPath id="${id}-above"><rect width="${W}" height="${hz}"/></clipPath>`);
  },

  ripples(id) {
    const cy = 600;
    return wrap(id, `
      <rect width="${W}" height="${H}" class="a-bg"/>
      <rect y="300" width="${W}" height="${H - 300}" fill="url(#${id}-sky)" opacity=".9"/>
      <g fill="none" class="a-ink-stroke">
        ${range(12, i => { const rx = 160 + i * i * 14 + i * 60; return `<ellipse class="anim-ripple" style="animation-delay:${i * -0.7}s" cx="${CX}" cy="${cy}" rx="${rx}" ry="${rx * .26}" stroke-width="${2.2 - i * .12}" opacity="${.75 - i * .055}"/>`; })}
      </g>
      <g class="anim-float">
        ${(() => {
          const px = CX + 150, py = cy + 10, rx = 250, ry = 64;
          const P = d => [px + rx * Math.cos(d * Math.PI / 180), py + ry * Math.sin(d * Math.PI / 180)];
          const [x1, y1] = P(166), [x2, y2] = P(194);
          const fx = px - rx * .62, fy = py - 6;
          const petal = (deg, len, w, cls) => {
            const a = (deg - 90) * Math.PI / 180, n = a + Math.PI / 2;
            const tx = fx + Math.cos(a) * len, ty = fy + Math.sin(a) * len;
            const mx = fx + Math.cos(a) * len * .5, my = fy + Math.sin(a) * len * .5;
            return `<path class="${cls}" d="M ${fx} ${fy} Q ${mx + Math.cos(n) * w} ${my + Math.sin(n) * w} ${tx} ${ty} Q ${mx - Math.cos(n) * w} ${my - Math.sin(n) * w} ${fx} ${fy} Z"/>`;
          };
          return `
            <ellipse cx="${px}" cy="${py + 10}" rx="${rx + 30}" ry="${ry * .6}" class="a-bg" opacity=".5"/>
            <path d="M ${px} ${py} L ${x1} ${y1} A ${rx} ${ry} 0 1 0 ${x2} ${y2} Z" class="a-mid"/>
            <path d="M ${px} ${py} L ${px + rx * .9} ${py - 8}" class="a-ink-stroke" stroke-width="1.5" opacity=".35"/>
            ${petal(-58, 92, 24, 'a-low')}${petal(58, 92, 24, 'a-low')}
            ${petal(-32, 120, 26, 'a-ink')}${petal(32, 120, 26, 'a-ink')}
            ${petal(0, 140, 28, 'a-acc')}`;
        })()}
      </g>
    `);
  },

  facets(id) {
    const cy = 500, s = 330;
    return wrap(id, `
      <rect width="${W}" height="${H}" fill="url(#${id}-sky)"/>
      <g class="a-ink-stroke" stroke-width="1.4" opacity=".28" fill="none">
        <line x1="0" y1="${cy}" x2="${W}" y2="${cy}"/>
        <line x1="${CX}" y1="0" x2="${CX}" y2="${H}"/>
        <circle cx="${CX}" cy="${cy}" r="${s * 1.42}"/>
        <line x1="${CX - 900}" y1="0" x2="${CX + 900}" y2="${H}"/>
        <line x1="${CX + 900}" y1="0" x2="${CX - 900}" y2="${H}"/>
      </g>
      <g class="anim-turn" style="transform-origin:${CX}px ${cy}px">
        <polygon points="${CX},${cy - s} ${CX + s},${cy} ${CX},${cy}" class="a-mid"/>
        <polygon points="${CX + s},${cy} ${CX},${cy + s} ${CX},${cy}" class="a-low"/>
        <polygon points="${CX},${cy + s} ${CX - s},${cy} ${CX},${cy}" class="a-ink" opacity=".86"/>
        <polygon points="${CX - s},${cy} ${CX},${cy - s} ${CX},${cy}" class="a-low" opacity=".6"/>
        <polygon points="${CX},${cy - s} ${CX + s * .5},${cy - s * .5} ${CX},${cy - s * .2}" class="a-acc"/>
      </g>
    `);
  },

  between(id) {
    const hz = 560;
    return wrap(id, `
      <rect width="${W}" height="${H}" fill="url(#${id}-sky)"/>
      <circle cx="${CX}" cy="250" r="16" class="a-acc"/>
      <circle cx="${CX}" cy="250" r="180" fill="url(#${id}-halo)"/>
      <path d="M ${CX - 1300} ${H} C ${CX - 900} ${hz - 120}, ${CX - 420} ${hz - 60}, ${CX - 120} ${H} Z" class="a-mid"/>
      <path d="M ${CX + 1300} ${H} C ${CX + 900} ${hz - 140}, ${CX + 420} ${hz - 40}, ${CX + 120} ${H} Z" class="a-low"/>
      ${range(6, i => `<rect x="${CX - 640 + i * 52}" y="${hz + 40 - Math.sin(i / 1.6) * 40}" width="30" height="${36 + (i % 3) * 14}" class="a-ink" opacity=".8"/>`)}
      ${range(5, i => `<rect x="${CX + 380 + i * 56}" y="${hz + 30 - Math.cos(i / 1.4) * 34}" width="30" height="${34 + (i % 2) * 16}" class="a-ink" opacity=".75"/>`)}
      <path class="a-ink-stroke anim-dash" fill="none" stroke-width="4" stroke-dasharray="18 22"
        d="M ${CX} ${H + 10} C ${CX - 80} ${H - 160}, ${CX + 120} ${H - 260}, ${CX + 10} ${H - 340} S ${CX - 30} ${hz - 10}, ${CX} 280"/>
    `);
  },

  altar(id) {
    const cy = 520, w = 360, h = 660, top = cy - h / 2;
    return wrap(id, `
      <rect width="${W}" height="${H}" fill="url(#${id}-sky)"/>
      ${range(5, i => `<rect x="${CX - 900 + i * 360}" y="0" width="2" height="${H}" class="a-ink" opacity=".07"/>`)}
      <path d="M ${CX - w / 2} ${top + h} V ${top + w / 2} A ${w / 2} ${w / 2} 0 0 1 ${CX + w / 2} ${top + w / 2} V ${top + h} Z" class="a-mid"/>
      <path d="M ${CX - w / 2 + 50} ${top + h} V ${top + w / 2 + 20} A ${w / 2 - 50} ${w / 2 - 50} 0 0 1 ${CX + w / 2 - 50} ${top + w / 2 + 20} V ${top + h} Z" class="a-bg"/>
      <circle cx="${CX}" cy="${cy + 40}" r="210" fill="url(#${id}-halo)" class="anim-flicker"/>
      <g class="anim-flicker" style="transform-origin:${CX}px ${cy + 120}px">
        <path d="M ${CX} ${cy - 30} C ${CX + 40} ${cy + 40}, ${CX + 34} ${cy + 96}, ${CX} ${cy + 110} C ${CX - 34} ${cy + 96}, ${CX - 40} ${cy + 40}, ${CX} ${cy - 30} Z" class="a-ink"/>
        <path d="M ${CX} ${cy + 30} C ${CX + 16} ${cy + 64}, ${CX + 14} ${cy + 96}, ${CX} ${cy + 104} C ${CX - 14} ${cy + 96}, ${CX - 16} ${cy + 64}, ${CX} ${cy + 30} Z" class="a-acc"/>
      </g>
      <rect x="${CX - 40}" y="${cy + 112}" width="80" height="18" class="a-ink" opacity=".7"/>
      ${range(3, i => `<rect x="${CX - w / 2 - 80 - i * 70}" y="${top + h + i * 34}" width="${w + 160 + i * 140}" height="34" class="${i % 2 ? 'a-low' : 'a-mid'}"/>`)}
    `);
  },

  bloom(id) {
    const cy = 500;
    return wrap(id, `
      <rect width="${W}" height="${H}" fill="url(#${id}-sky)"/>
      <circle cx="${CX}" cy="${cy}" r="420" fill="none" class="a-ink-stroke" stroke-width="1.5" opacity=".25"/>
      <circle cx="${CX}" cy="${cy}" r="300" fill="url(#${id}-halo)"/>
      <g class="anim-spin" style="transform-origin:${CX}px ${cy}px">
        ${range(5, i => `<ellipse cx="${CX}" cy="${cy - 150}" rx="96" ry="160" transform="rotate(${i * 72} ${CX} ${cy})" class="a-mid" stroke-width="2" style="stroke:var(--art-ink);stroke-opacity:.5"/>`)}
        ${range(5, i => `<line x1="${CX}" y1="${cy}" x2="${CX}" y2="${cy - 230}" transform="rotate(${i * 72} ${CX} ${cy})" class="a-ink-stroke" stroke-width="1.5" opacity=".45"/>`)}
      </g>
      <circle cx="${CX}" cy="${cy}" r="44" class="a-acc"/>
      <circle cx="${CX}" cy="${cy}" r="18" class="a-ink"/>
    `);
  },

  plume(id) {
    return wrap(id, `
      <rect width="${W}" height="${H}" fill="url(#${id}-sky)"/>
      <g class="anim-sway" style="transform-origin:${CX - 380}px ${H}px" fill="none">
        ${range(22, i => {
          const t = i / 21;
          const x2 = CX - 200 + t * 700, y2 = 120 + Math.sin(t * Math.PI) * 120;
          return `<path d="M ${CX - 380} ${H + 20} C ${CX - 300 + t * 120} ${700 - t * 140}, ${CX - 120 + t * 360} ${360 - t * 60}, ${x2} ${y2}" class="${i === 14 ? 'a-acc-stroke' : 'a-ink-stroke'}" stroke-width="${i === 14 ? 5 : 2.2}" opacity="${i === 14 ? 1 : .2 + Math.sin(t * Math.PI) * .55}"/>`;
        })}
      </g>
      <circle cx="${CX + 560}" cy="240" r="60" class="a-mid"/>
    `);
  },

  junction(id) {
    const vy = 380;
    return wrap(id, `
      <rect width="${W}" height="${vy}" fill="url(#${id}-sky)"/>
      <rect y="${vy}" width="${W}" height="${H - vy}" class="a-low"/>
      <polygon points="${CX - 30},${vy} ${CX + 30},${vy} ${CX + 300},${H} ${CX - 300},${H}" class="a-mid"/>
      <polygon points="${CX - 26},${vy + 4} ${CX - 4},${vy + 4} ${CX - 1250},${H} ${CX - 1250},${H - 210}" class="a-mid"/>
      <polygon points="${CX + 4},${vy + 4} ${CX + 26},${vy + 4} ${CX + 1250},${H - 210} ${CX + 1250},${H}" class="a-mid"/>
      <g class="a-ink-stroke anim-dash" stroke-width="5" stroke-dasharray="30 34" fill="none" opacity=".75">
        <line x1="${CX}" y1="${H}" x2="${CX}" y2="${vy + 8}"/>
        <line x1="${CX - 1250}" y1="${H - 100}" x2="${CX - 14}" y2="${vy + 6}"/>
        <line x1="${CX + 1250}" y1="${H - 100}" x2="${CX + 14}" y2="${vy + 6}"/>
      </g>
      <line x1="0" x2="${W}" y1="${vy}" y2="${vy}" class="a-ink-stroke" stroke-width="2" opacity=".5"/>
      <circle cx="${CX}" cy="${vy}" r="12" class="a-acc"/>
      <circle cx="${CX}" cy="${vy}" r="240" fill="url(#${id}-halo)"/>
    `);
  },

  seven(id) {
    const base = 860, heights = [300, 420, 360, 560, 400, 470, 330];
    return wrap(id, `
      <rect width="${W}" height="${H}" fill="url(#${id}-sky)"/>
      <g class="anim-drift"><circle cx="${CX + 330}" cy="210" r="54" class="a-acc"/></g>
      ${heights.map((h, i) => {
        const w = 120, x = CX - (7 * w + 6 * 18) / 2 + i * (w + 18);
        return `<path d="M ${x} ${base} V ${base - h + w / 2} A ${w / 2} ${w / 2} 0 0 1 ${x + w} ${base - h + w / 2} V ${base} Z" class="${i % 2 ? 'a-low' : 'a-mid'}"/>`;
      }).join('')}
      <rect y="${base}" width="${W}" height="${H - base}" class="a-mid"/>
      <line x1="0" x2="${W}" y1="${base}" y2="${base}" class="a-ink-stroke" stroke-width="2" opacity=".55"/>
    `);
  },

  monolith(id) {
    return wrap(id, `
      <rect width="${W}" height="${H}" fill="url(#${id}-sky)"/>
      <g class="a-ink-stroke anim-rain" stroke-width="2" opacity=".22">
        ${range(40, i => `<line x1="${-400 + i * 80}" y1="-40" x2="${-100 + i * 80}" y2="${H + 40}"/>`)}
      </g>
      <rect x="${CX - 110}" y="160" width="220" height="700" class="a-mid"/>
      <rect x="${CX - 110}" y="160" width="220" height="700" fill="url(#${id}-halo)"/>
      <rect x="${CX - 110}" y="160" width="220" height="5" class="a-acc"/>
      <rect y="860" width="${W}" height="${H - 860}" class="a-low"/>
      <ellipse cx="${CX}" cy="864" rx="300" ry="14" class="a-ink" opacity=".18"/>
    `);
  },

  pages(id) {
    const px = CX, py = 860;
    return wrap(id, `
      <rect width="${W}" height="${H}" fill="url(#${id}-sky)"/>
      <g class="anim-fan">
        ${range(11, i => {
          const a = -50 + i * 10;
          return `<rect x="${px - 6}" y="${py - 600}" width="12" height="600" rx="2" transform="rotate(${a} ${px} ${py})" class="${i === 7 ? 'a-acc' : (i % 2 ? 'a-mid' : 'a-ink')}" opacity="${i === 7 ? 1 : .35 + (i % 3) * .2}"/>`;
        })}
      </g>
      <path d="M ${px - 620} ${py} Q ${px} ${py - 70} ${px + 620} ${py}" fill="none" class="a-ink-stroke" stroke-width="3" opacity=".6"/>
      <rect y="${py}" width="${W}" height="${H - py}" class="a-mid"/>
    `);
  }
};

export function art(preset, id) {
  const make = PRESETS[preset] || PRESETS.facets;
  return make(id);
}
