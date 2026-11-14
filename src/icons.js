// Hand-drawn line icons (24×24 grid unless noted).
const svg = (d, cls = '') => `<svg viewBox="0 0 32 32" class="${cls}" aria-hidden="true" focusable="false">${d}</svg>`;

export const ICONS = {
  // stage curtains
  stage: svg('<path d="M4 6h24M5 6c0 9 3 15 7 19M27 6c0 9-3 15-7 19M5 6c2 5 4 7 7 8M27 6c-2 5-4 7-7 8M3 27h26"/>'),
  // shoulder camera
  camera: svg('<rect x="4" y="11" width="17" height="11" rx="1.5"/><path d="m21 14 7-3v11l-7-3M8 11V8h6v3M9 26l3-4M17 26l-3-4"/><circle cx="9" cy="16.5" r="2"/>'),
  // clapperboard
  clapper: svg('<rect x="4" y="13" width="24" height="14" rx="1"/><path d="m4 13 22-6 1.2 4.2L5 13M10 11.4l2.8 3.4M16 9.8l2.8 3.4M22 8.2l2.6 3.2M4 19h24"/>'),
  // vintage tv screen
  screen: svg('<rect x="3" y="8" width="26" height="18" rx="3"/><rect x="7" y="12" width="15" height="10" rx="2"/><path d="m11 3 5 5 5-5M25 13v.01M25 17v.01M10 26l-1 3M22 26l1 3"/>'),
  // broadcast tower
  broadcast: svg('<path d="M16 14v15M11 29l5-15 5 15M12.6 24h6.8"/><circle cx="16" cy="12" r="2"/><path d="M11 7a7 7 0 0 0 0 10M21 7a7 7 0 0 1 0 10M7.5 4a12 12 0 0 0 0 16M24.5 4a12 12 0 0 1 0 16"/>'),
  // boardroom / institution
  board: svg('<path d="M4 12 16 5l12 7M6 12v12M11 12v12M16 12v12M21 12v12M26 12v12M3 27h26M4 24h24"/>'),

  // film reel
  film: svg('<circle cx="14" cy="15" r="10"/><circle cx="14" cy="15" r="2"/><circle cx="14" cy="9" r="2.2"/><circle cx="14" cy="21" r="2.2"/><circle cx="8" cy="15" r="2.2"/><circle cx="20" cy="15" r="2.2"/><path d="M14 25h14"/>'),

  mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="m3.5 6 8.5 7 8.5-7"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20l1.2-4A8 8 0 1 1 8.3 19Z"/><path d="M9.2 8.6c.2 2.9 2.9 5.7 6 6.1l1-1.3-1.9-1-.9.8a4.6 4.6 0 0 1-2.6-2.6l.8-.9-1-1.9Z"/></svg>',
  out: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8"/></svg>',

  // social marks for the footer, drawn in the same line as the rest
  facebook: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8.6V7.2c0-.9.6-1.5 1.5-1.5H17V2.6h-2.4A4.4 4.4 0 0 0 10.2 7v1.6H7.6v3.1h2.6v9.7H14v-9.7h2.6l.5-3.1Z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.4" y="3.4" width="17.2" height="17.2" rx="4.8"/><circle cx="12" cy="12" r="3.9"/><path d="M17.1 6.9v.01"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.4" y="3.4" width="17.2" height="17.2" rx="2.6"/><path d="M8 10.6v6M8 7.5v.01M11.6 16.6v-6M11.6 13.2a2.25 2.25 0 0 1 4.5 0v3.4"/></svg>',
  youtube: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.6" y="5.8" width="18.8" height="12.4" rx="3.6"/><path d="m10.3 9.5 4.4 2.5-4.4 2.5Z"/></svg>'
};
