// Makes a clean, search-ready copy of only the files the website needs, in the folder "publish".
// Run with:  npm run export   — then upload or drag the "publish" folder to the host.
// (Vercel runs it on every deploy; see vercel.json.)
//
// On the way it:
//  • fills in the page address (canonical link, link-preview image, sitemap) from
//    `siteUrl` in content.js, or SITE_URL, or the address Vercel gives the site;
//  • rebuilds the structured data for search engines from content.js (every production and award);
//  • writes the About text and other words into the page itself, so search engines and
//    link previews see them without running any script;
//  • loads the fonts as files instead of embedded text, so the first paint is not held up;
//  • stamps the style and script links with a fingerprint, so visitors never get a stale copy;
//  • writes robots.txt and sitemap.xml.
import { cpSync, mkdirSync, rmSync, readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { dirname, join, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import vm from 'node:vm';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const out = join(root, 'publish');
const read = p => readFileSync(join(root, p), 'utf8');
const hash = buf => createHash('sha256').update(buf).digest('hex').slice(0, 10);

/* ---------- content ---------- */
const sandbox = { window: {} };
vm.runInNewContext(read('content.js'), sandbox, { filename: 'content.js' });
const SITE = sandbox.window.SITE || {};

/* ---------- the site's address ---------- */
function siteAddress() {
  const raw = String(SITE.siteUrl || process.env.SITE_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL || '').trim();
  if (!raw) return '';
  try {
    const u = new URL(/^https?:\/\//i.test(raw) ? raw : `https://${raw}`);
    return u.origin + (u.pathname.endsWith('/') ? u.pathname : u.pathname + '/');
  } catch (e) {
    console.warn(`siteUrl "${raw}" is not a web address; leaving the page address out.`);
    return '';
  }
}
const BASE = siteAddress();
const abs = p => (BASE ? new URL(p, BASE).href : p);

/* ---------- copy ---------- */
// leave out notes and system files
const wanted = src => !/(\.DS_Store|README\.txt)$/.test(src);
rmSync(out, { recursive: true, force: true });
mkdirSync(out);
for (const item of ['index.html', 'content.js', 'assets', 'favicon.ico', 'site.webmanifest', '404.html']) {
  if (existsSync(join(root, item))) cpSync(join(root, item), join(out, item), { recursive: true, filter: wanted });
}

/* ---------- fonts: files instead of embedded text ---------- */
// fonts.css carries the fonts inside it so index.html also works straight from a folder.
// Online, the same fonts load faster as separate files that the browser fetches in parallel.
const fontFiles = existsSync(join(root, 'assets/fonts')) ? readdirSync(join(root, 'assets/fonts')).filter(f => f.endsWith('.woff2')) : [];
const fontByHash = new Map(fontFiles.map(f => [hash(readFileSync(join(root, 'assets/fonts', f))), f]));
const preload = [];
const fontsCss = read('assets/css/fonts.css').replace(/url\(data:font\/woff2;base64,([^)]+)\)/g, (m, b64) => {
  const file = fontByHash.get(hash(Buffer.from(b64, 'base64')));
  if (!file) return m;                                   // no matching file: keep it embedded
  preload.push(`assets/fonts/${file}`);
  return `url("../fonts/${file}")`;
});
writeFileSync(join(out, 'assets/css/fonts.css'), preload.length ? fontsCss.replace(/^\/\*[\s\S]*?\*\//, '/* Imbue and Hanken Grotesk, licensed under the SIL Open Font License. */') : fontsCss);
if (!preload.length) rmSync(join(out, 'assets/fonts'), { recursive: true, force: true });

/* ---------- helpers ---------- */
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const rich = s => esc(s).replace(/\*([^*]+)\*/g, '<mark class="hl">$1</mark>');
const plain = s => String(s ?? '').replace(/\*([^*]+)\*/g, '$1');
const fill = (html, re, inner, label) => {
  if (!re.test(html)) { console.warn(`Could not find ${label} in index.html; left as it is.`); return html; }
  return html.replace(re, (m, open, _old, close) => open + inner + close);
};
const lastYear = w => (w.years || [0])[1] || (w.years || [0])[0];
const WORKS = (SITE.works || []).map((w, i) => ({ w, i }))
  .sort((a, b) => lastYear(b.w) - lastYear(a.w) || b.w.years[0] - a.w.years[0] || a.i - b.i)
  .map(x => x.w);
const fullName = [SITE.name?.first, SITE.name?.last].filter(Boolean).join(' ') || 'Shirly P. Delankawala';

/* ---------- headline honours: the same choice the page makes (see main.js) ---------- */
const isDirection = cat => /direct(or|ion)/i.test(cat) && !/photography|art director/i.test(cat);
function honours() {
  const list = (SITE.honours || []).filter(h => h && h.award);
  if (list.length) return list;
  return WORKS.flatMap(w => (w.awards || []).filter(([res, cat]) => res === 'won' && (isDirection(cat) || /\b(series|film|picture)\b/i.test(cat)))
    .map(([, award, ceremony, year]) => ({ award, ceremony, year, work: w.title })));
}

/* ---------- structured data (schema.org) ---------- */
function structuredData() {
  const id = k => `${BASE}#${k}`;
  const won = w => (w.awards || []).filter(a => a[0] === 'won');
  const credits = Object.fromEntries((SITE.credits || []).map(g => [g.group, g.items || []]));
  const orgName = v => String(v).replace(/,\s*\d{4}([–-]\d{4})?\s*$/, '').trim();
  const sameAs = (SITE.social || []).map(s => s.url).filter(u => /^https?:\/\//i.test(u || ''));
  const c = SITE.contact || {};
  const description = plain((SITE.about?.paragraphs || [])[0] || '');

  const person = {
    '@type': 'Person', '@id': id('person'), name: fullName,
    ...(BASE && { url: BASE }),
    image: abs('assets/img/portrait.webp'),
    jobTitle: SITE.role,
    description,
    nationality: { '@type': 'Country', name: 'Sri Lanka' },
    homeLocation: { '@type': 'Place', name: 'Colombo, Sri Lanka' },
    affiliation: { '@type': 'Organization', name: 'Independent Television Network (ITN)' },
    memberOf: (credits.Memberships || []).filter(([k]) => /member/i.test(k)).map(([, v]) => ({ '@type': 'Organization', name: orgName(v) })),
    alumniOf: (credits.Education || []).filter(([, v]) => /universit|college|institute|academy|school/i.test(v)).map(([, v]) => ({ '@type': 'EducationalOrganization', name: orgName(v) })),
    knowsAbout: ['Film direction', 'Teledrama', 'Television drama production', 'Television programming'],
    // only the awards that are his own (direction, and the series he made); the cast's awards stay with each production below
    award: honours().map(h => `${h.award}, ${h.ceremony} ${h.year}${h.work ? ` (${h.work})` : ''}`),
    ...(c.email && { email: `mailto:${c.email}` }),
    ...(sameAs.length && { sameAs })
  };
  const works = WORKS.map((w, k) => {
    const film = /film|movie/i.test(w.type || '');
    const [from, to] = w.years || [];
    return {
      '@type': film ? 'Movie' : 'TVSeries', '@id': id(`work-${k + 1}`), name: w.title,
      director: { '@id': id('person') },
      ...(w.note && { description: w.note }),
      countryOfOrigin: { '@type': 'Country', name: 'Sri Lanka' },
      ...(film ? { dateCreated: String(from) } : { startDate: String(from), ...(to && to !== from && { endDate: String(to) }) }),
      ...(!film && w.episodes && { numberOfEpisodes: w.episodes }),
      ...(won(w).length && { award: won(w).map(([, cat, ceremony, year]) => `${cat}, ${ceremony} ${year}`) })
    };
  });
  const graph = [
    { '@type': 'WebSite', '@id': id('website'), ...(BASE && { url: BASE }), name: fullName, inLanguage: 'en' },
    {
      '@type': 'ProfilePage', '@id': id('page'), ...(BASE && { url: BASE }),
      name: `${fullName}, film and teledrama director`, inLanguage: 'en',
      isPartOf: { '@id': id('website') }, mainEntity: { '@id': id('person') },
      dateModified: new Date().toISOString().slice(0, 10)
    },
    person,
    ...works
  ];
  // "<" is escaped so no text in content.js can close the script element early
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }, null, 2).replace(/</g, '\\u003c');
}

/* ---------- the page ---------- */
// fingerprints for everything the page links to, so a new version is always fetched
const stamp = p => `${p}?v=${hash(readFileSync(join(out, p)))}`;
const stampLinks = html => html
  .replace(/(href|src)="(assets\/(?:css|js)\/[^"?]+\.(?:css|js))"/g, (m, attr, p) => existsSync(join(out, p)) ? `${attr}="${stamp(p)}"` : m)
  .replace(/src="content\.js"/, `src="${stamp('content.js')}"`);

let html = read('index.html');

// address, manifest, font preloads
const headExtra = [
  BASE && `<link rel="canonical" href="${BASE}">`,
  BASE && `<meta property="og:url" content="${BASE}">`,
  '<link rel="manifest" href="site.webmanifest">',
  ...preload.map(p => `<link rel="preload" href="${p}" as="font" type="font/woff2" crossorigin>`)
].filter(Boolean).join('\n  ');
html = html.replace(/<!-- build:[^>]*-->/, headExtra);
if (BASE) {
  html = html
    .replace(/(<meta property="og:image" content=")([^"]+)(")/, (m, a, p, b) => a + abs(p) + b)
    .replace(/(<meta name="twitter:image" content=")([^"]+)(")/, (m, a, p, b) => a + abs(p) + b);
} else {
  console.warn('No site address yet (siteUrl in content.js): the canonical link and sitemap are left out,\n' +
    'and link previews use a relative image address. Add siteUrl once the domain is live.');
}
html = html.replace(/<!-- "npm run export" turns[^>]*-->\n\s*/, '');
html = html.replace(/<!-- Structured data[\s\S]*?-->\n\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/,
  `<script type="application/ld+json">\n${structuredData()}\n  </script>`);

// words written into the page (the script fills the same places, with the same words)
const about = SITE.about || {};
if (about.paragraphs?.length) html = fill(html, /(<div class="about__body" id="aboutBody">)([\s\S]*?)(\s*<\/div>)/, '\n              ' + about.paragraphs.map(p => `<p>${rich(p)}</p>`).join('\n              '), 'the About text');
if (about.quote) html = fill(html, /(<blockquote class="quote" id="aboutQuote" data-focus>\s*<p>)([\s\S]*?)(<\/p>)/, esc(about.quote), 'the quote');
if (SITE.role) html = fill(html, /(<p class="hero__role" data-role>)([\s\S]*?)(<\/p>)/, esc(SITE.role), 'the role');
if (SITE.position) html = fill(html, /(<p class="hero__pos" data-position>)([\s\S]*?)(<\/p>)/, esc(SITE.position), 'the position');
const c = SITE.contact || {};
if (c.heading) html = fill(html, /(<h2 class="contact__title" id="contactTitle" data-focus>)([\s\S]*?)(<\/h2>)/, esc(c.heading), 'the contact heading');
if (c.sub) html = fill(html, /(<p class="contact__sub" id="contactSub">)([\s\S]*?)(<\/p>)/, esc(c.sub), 'the contact line');

writeFileSync(join(out, 'index.html'), stampLinks(html));
if (existsSync(join(out, '404.html'))) writeFileSync(join(out, '404.html'), readFileSync(join(out, '404.html'), 'utf8').replace(/href="\/(assets\/css\/[^"?]+\.css)"/g, (m, p) => `href="/${stamp(p)}"`));

/* ---------- robots.txt and sitemap.xml ---------- */
writeFileSync(join(out, 'robots.txt'), `User-agent: *\nAllow: /\n${BASE ? `\nSitemap: ${abs('sitemap.xml')}\n` : ''}`);
if (BASE) {
  writeFileSync(join(out, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${esc(BASE)}</loc>
    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
    <image:image><image:loc>${esc(abs('assets/img/portrait.webp'))}</image:loc></image:image>
  </url>
</urlset>
`);
}

console.log(`Ready to publish: ${out}${BASE ? `\nSite address: ${BASE}` : ''}`);
