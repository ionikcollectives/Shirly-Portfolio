import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { createLens } from './lens.js';
import { createIris } from './iris.js';
import { createShow, tally } from './slideshow.js';
import { createAwards, isDirection } from './awards.js';
import { createGuide } from './guide.js';
import { createCursor, magnetic } from './cursor.js';
import { branch, LEAVES_PER_BRANCH } from './laurel.js';
import { sound } from './sound.js';
import { ICONS } from './icons.js';

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

const SITE = window.SITE || {};
// works are always shown newest first, by the year they finished (a series that
// ran 2015–2019 counts as 2019), so edits to content.js can't put them out of order
const lastYear = w => (w.years || [0])[1] || (w.years || [0])[0];
const WORKS = (SITE.works || []).map((w, i) => ({ w, i }))
  .sort((a, b) => lastYear(b.w) - lastYear(a.w) || b.w.years[0] - a.w.years[0] || a.i - b.i)
  .map(x => x.w);
const NOW = new Date().getFullYear();
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
// *phrase* in content.js becomes a quiet underlined highlight
const rich = s => esc(s).replace(/\*([^*]+)\*/g, '<mark class="hl">$1</mark>');
const root = document.documentElement;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
if (!reduced) root.classList.add('motion');

const splitChars = (el, text) => {
  el.setAttribute('aria-label', text);
  el.innerHTML = `<span aria-hidden="true">${text.split(' ').map(w =>
    `<span class="word">${[...w].map(c => `<span class="ch">${esc(c)}</span>`).join('')}</span>`).join(' ')}</span>`;
  return $$('.ch', el);
};

/* ------------------------------------------------------------------ numbers */
function figures() {
  const t = WORKS.reduce((acc, w) => { const x = tally(w); acc.won += x.won; acc.nom += x.nom; return acc; }, { won: 0, nom: 0 });
  return [
    { n: NOW - (SITE.careerStart || 1988), label: 'years in drama and television' },
    { n: WORKS.length, label: 'films and teledramas directed' },
    { n: WORKS.reduce((s, w) => s + (w.episodes || 0), 0), label: 'episodes directed' },
    { n: t.won, label: 'awards won by his productions' }
  ];
}

/* ------------------------------------------------------------------ headline honours */
// The laurels. Taken from `honours` in content.js; if that list is empty, every
// win for direction or for the production itself is picked instead.
function honours() {
  let list = (SITE.honours || []).filter(h => h && h.award);
  if (!list.length) {
    WORKS.forEach(w => (w.awards || []).forEach(([res, cat, ceremony, year]) => {
      const dir = isDirection(cat);
      if (res === 'won' && (dir || /\b(series|film|picture)\b/i.test(cat))) list.push({ award: cat, ceremony, year, work: w.title, dir });
    }));
    list = list.sort((a, b) => (b.dir - a.dir) || (b.year - a.year)).slice(0, 6);
  }
  return list.map(h => ({ ...h, i: WORKS.findIndex(w => w.title === h.work) }));
}

/* ------------------------------------------------------------------ render */
function render() {
  const n = SITE.name || {};
  $('[data-first]').textContent = n.first || '';
  splitChars($('[data-last]'), n.last || '');
  $('[data-role]').textContent = SITE.role || '';
  $('[data-position]').textContent = SITE.position || '';
  $('#heroName').setAttribute('aria-label', `${n.first || ''} ${n.last || ''}`.trim());

  // latest release notice
  const L = SITE.latest;
  const latest = $('#latest');
  if (L && L.title) {
    const k = Math.max(0, WORKS.findIndex(w => w.title === L.title));
    latest.dataset.slide = k;
    $('.latest__label', latest).textContent = L.label || '';
    $('.latest__title', latest).textContent = L.title;
    latest.setAttribute('aria-label', `${L.label || ''} ${L.title}, view in Work`.trim());
    latest.hidden = false;
  }

  // laurels: a few on the opening screen, all of them at the top of Recognition
  const H = honours();
  const when = h => `${esc(h.ceremony || '')}${h.year ? ` ${esc(h.year)}` : ''}`.trim();
  $('#heroLaurels').innerHTML = H.slice(0, Math.max(0, SITE.heroHonours ?? 2)).map(h => `
    <li class="laurel">${branch()}<p class="laurel__t"><span class="laurel__a">${esc(h.award)}</span><span class="laurel__c">${when(h)}</span></p>${branch(true)}</li>`).join('');
  const plaqueBody = h => `
      <span class="plaque__in">
        ${branch()}
        <span class="plaque__t">
          <span class="plaque__k">Winner</span>
          <span class="plaque__a">${esc(h.award)}</span>
          <span class="plaque__c">${when(h)}</span>
          ${h.work ? `<span class="plaque__w">${esc(h.work)}${h.i >= 0 ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M6 13l6 6 6-6"/></svg>' : ''}</span>` : ''}
        </span>
        ${branch(true)}
      </span>`;
  const laurels = $('#laurels');
  laurels.innerHTML = H.map(h => h.i >= 0
    ? `<li><button type="button" class="plaque" data-work="${h.i}">${plaqueBody(h)}<span class="sr">. Show its full record</span></button></li>`
    : `<li><div class="plaque">${plaqueBody(h)}</div></li>`).join('');
  laurels.hidden = !H.length;

  // about
  const a = SITE.about || {};
  $('#aboutBody').innerHTML = (a.paragraphs || []).map(p => `<p>${rich(p)}</p>`).join('');
  $('#aboutQuote p').textContent = a.quote || '';
  $('#aboutQuote').hidden = !a.quote;

  // figures, as rolling counters
  $('#stats').innerHTML = figures().map(f => `
    <div class="stat">
      <dt>${esc(f.label)}</dt>
      <dd class="odo" aria-label="${f.n}" data-n="${f.n}">${[...String(f.n)].map(d =>
        `<span class="odo__d" aria-hidden="true"><span class="odo__col" data-d="${d}">${'0123456789'.repeat(3).split('').map(x => `<span>${x}</span>`).join('')}</span></span>`).join('')}</dd>
    </div>`).join('');

  // career: the film strip always reads left to right in time, with blank
  // leader at each end so it runs off the edge of the screen
  const career = [...(SITE.career || [])].sort((x, y) => x.start - y.start);
  const leader = '<li class="frame frame--leader" aria-hidden="true"><div class="frame__inner"></div></li>'.repeat(2);
  $('#reelTrack').innerHTML = leader + career.map(c => {
    const open = c.end === '' || c.end == null;
    const until = open ? 'to present' : (c.end !== c.start ? `to ${c.end}` : '');
    return `
    <li class="frame${open ? ' is-open' : ''}">
      <div class="frame__inner">
        <div class="frame__top">
          <p class="frame__year">${esc(c.start)}<span>${esc(until)}</span></p>
          ${(ICONS[c.icon] || '').replace('class=""', 'class="frame__icon"')}
        </div>
        <div>
          <p class="frame__role">${esc(c.role)}</p>
          <p class="frame__place">${esc(c.place)}</p>
          <p class="frame__text">${esc(c.text)}</p>
        </div>
      </div>
    </li>`;
  }).join('') + leader;
  if (career.length) $('#careerHint').textContent = `Since ${career[0].start}`;

  // acknowledgements (Recognition, under the full record)
  const acks = (SITE.acknowledgements || []).filter(x => x && x.title);
  $('#ackList').innerHTML = acks.map(x => `
    <li><span class="ack__year">${esc(x.years || '')}</span><span class="ack__title">${esc(x.title)}</span><span class="ack__role">${esc(x.role || '')}</span></li>`).join('');
  $('#ack').hidden = !acks.length;

  // end credits
  $('#creditsRoll').innerHTML = (SITE.credits || []).map(g => `
    <div class="credits__group">
      <h3 data-roll>${esc(g.group)}</h3>
      <ul>${g.items.map(([k, v]) => `<li class="credits__row" data-roll><span class="credits__role">${esc(k)}</span><span class="credits__name">${esc(v)}</span></li>`).join('')}</ul>
    </div>`).join('');
  $('#credits').hidden = !(SITE.credits || []).length;

  // contact
  const c = SITE.contact || {};
  if (c.heading) $('#contactTitle').textContent = c.heading;
  if (c.sub) $('#contactSub').textContent = c.sub;
  const direct = [];
  if (c.email) direct.push(`<li><a href="mailto:${esc(c.email)}" data-lock><span class="direct__k">Email</span><span class="direct__v">${esc(c.email)}</span>${ICONS.mail}</a></li>`);
  if (c.whatsapp) direct.push(`<li><a href="https://wa.me/${esc(c.whatsapp)}" target="_blank" rel="noopener" data-lock><span class="direct__k">WhatsApp</span><span class="direct__v">${esc(c.whatsappDisplay || c.whatsapp)}</span>${ICONS.whatsapp}<span class="sr"> (opens in a new tab)</span></a></li>`);
  $('#direct').innerHTML = direct.join('');

  // footer: social links, and who made the website on the last line
  $('#social').innerHTML = (SITE.social || []).filter(s => s.url && /^https?:\/\//i.test(s.url)).map(s =>
    `<li><a href="${esc(s.url)}" target="_blank" rel="noopener me">${ICONS[String(s.label).toLowerCase()] || ICONS.out}${esc(s.label)}<span class="sr"> (opens in a new tab)</span></a></li>`).join('');
  const made = SITE.madeBy;
  if (made && made.label) {
    const a = $('#madeBy a');
    a.textContent = made.label;
    if (made.url) a.href = made.url; else a.removeAttribute('target');
    $('#madeBy').hidden = false;
  }
  $('#year').textContent = NOW;
}

/* ------------------------------------------------------------------ grain */
// Pre-tinted noise with its own alpha: no blend mode, so it costs almost nothing.
function grain() {
  const c = document.createElement('canvas');
  c.width = c.height = 160;
  const g = c.getContext('2d');
  const img = g.createImageData(160, 160);
  for (let i = 0; i < img.data.length; i += 4) {
    const light = Math.random() > .5;
    const v = light ? 255 : 0;
    img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
    img.data[i + 3] = Math.random() * (light ? 46 : 60);
  }
  g.putImageData(img, 0, 0);
  $('.grain').style.backgroundImage = `url(${c.toDataURL('image/png')})`;
}

/* ------------------------------------------------------------------ theme */
let lens = null;
function setTheme(t, persist = true) {
  root.setAttribute('data-theme', t);
  $('meta[name="theme-color"]').setAttribute('content', t === 'day' ? '#E9DFCF' : '#18110C');
  $('#themeToggle').setAttribute('aria-label', t === 'day' ? 'Switch to night mode' : 'Switch to day mode');
  if (persist) { try { localStorage.setItem('spd-theme', t); } catch (e) {} }
  lens?.setTheme(t);
}
function themeToggle() {
  const btn = $('#themeToggle');
  btn.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'day' ? 'night' : 'day';
    sound.shutter();
    if (!document.startViewTransition || reduced) { setTheme(next); return; }
    const r = btn.getBoundingClientRect();
    const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    const R = Math.hypot(Math.max(cx, innerWidth - cx), Math.max(cy, innerHeight - cy)) * 1.25;
    const vt = document.startViewTransition(() => setTheme(next));
    vt.ready.then(() => {
      // a rotating nine-sided iris opening from the toggle
      const frames = [];
      for (let k = 0; k <= 12; k++) {
        const t = k / 12, e = 1 - Math.pow(1 - t, 3);
        const rad = Math.max(.5, e * R), rot = (1 - e) * 1.2;
        const pts = [];
        for (let i = 0; i < 9; i++) {
          const a = rot + (i / 9) * Math.PI * 2;
          pts.push(`${(cx + Math.cos(a) * rad).toFixed(1)}px ${(cy + Math.sin(a) * rad).toFixed(1)}px`);
        }
        frames.push({ clipPath: `polygon(${pts.join(',')})` });
      }
      root.animate(frames, { duration: 950, easing: 'linear', pseudoElement: '::view-transition-new(root)' });
    }).catch(() => {});
  });
  // follow the device while the visitor hasn't chosen a mode themselves
  matchMedia('(prefers-color-scheme: light)').addEventListener?.('change', e => {
    let saved = null;
    try { saved = localStorage.getItem('spd-theme'); } catch (err) {}
    if (!saved) setTheme(e.matches ? 'day' : 'night', false);
  });
  setTheme(root.getAttribute('data-theme') || 'night', false);
}

/* ------------------------------------------------------------------ sound UI */
function soundToggle() {
  const btn = $('#soundToggle');
  const sync = on => {
    btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    btn.setAttribute('aria-label', on ? 'Turn sound off' : 'Turn sound on');
  };
  sound.onChange(sync);
  btn.addEventListener('click', () => sound.toggle());
  let pref = null;
  try { pref = localStorage.getItem('spd-sound'); } catch (e) {}
  if (pref === '1') addEventListener('pointerdown', () => sound.set(true), { once: true });
  document.addEventListener('click', e => {
    if (e.target.closest('a, button:not(#soundToggle)')) sound.click();
  });
}

/* ------------------------------------------------------------------ header */
let holdBar = 0;
function header(getY) {
  const bar = $('#bar');
  const prog = $('.bar__progress');
  const cssTimeline = CSS.supports?.('animation-timeline: scroll()');
  if (cssTimeline) prog.classList.add('is-css');
  let lastY = 0;
  return () => {
    const y = getY();
    bar.classList.toggle('is-scrolled', y > 30);
    const menuOpen = !$('#menu').hidden;
    // never hide the bar from someone tabbing through it
    const inUse = menuOpen || bar.contains(document.activeElement);
    if (performance.now() < holdBar || inUse) bar.classList.remove('is-hidden');
    else if (y > lastY + 2 && y > innerHeight * .8) bar.classList.add('is-hidden');
    else if (y < lastY - 2) bar.classList.remove('is-hidden');
    if (!cssTimeline) {
      const max = document.documentElement.scrollHeight - innerHeight;
      prog.style.transform = `scaleX(${max > 0 ? (y / max).toFixed(4) : 0})`;
    }
    lastY = y;
  };
}

/* ------------------------------------------------------------------ tilt */
// A surface that leans towards the pointer, with a light that follows it.
function tilt(el, inner, max = 7) {
  if (!el || !inner || !finePointer) return;
  const rx = reduced ? null : gsap.quickTo(inner, 'rotationX', { duration: .8, ease: 'power3.out' });
  const ry = reduced ? null : gsap.quickTo(inner, 'rotationY', { duration: .8, ease: 'power3.out' });
  el.addEventListener('pointermove', e => {
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
    ry?.((x - .5) * max * 2);
    rx?.(-(y - .5) * max * 1.6);
    el.style.setProperty('--gx', (x * 100).toFixed(1) + '%');
    el.style.setProperty('--gy', (y * 100).toFixed(1) + '%');
  });
  el.addEventListener('pointerleave', () => { rx?.(0); ry?.(0); });
}

/* ------------------------------------------------------------------ main */
function boot() {
  // always open at the top so the opening sequence plays; a #section link is honoured after it
  const deepLink = /^#[a-z-]+$/.test(location.hash) && document.querySelector(location.hash) ? location.hash : '';
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  scrollTo(0, 0);
  render();
  // decode the portrait early so it is ready the moment About scrolls in
  $('.about__photo img')?.decode?.().catch(() => {});
  grain();
  themeToggle();
  soundToggle();

  const bar = $('#bar');
  const iris = createIris($('#iris'));
  const leaderEl = $('#leader');
  if (!finePointer) $('#leaderHint').textContent = 'Tap to skip';

  // smooth scroll
  let lenis = null;
  if (!reduced) {
    lenis = new Lenis({ lerp: .1, wheelMultiplier: .95, smoothWheel: true });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(t => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
    lenis.stop();
  }
  const getY = () => (lenis ? lenis.scroll : scrollY);
  const hd = header(getY);
  const onScroll = () => hd();
  lenis ? lenis.on('scroll', onScroll) : addEventListener('scroll', onScroll, { passive: true });
  bar.addEventListener('focusin', onScroll);
  onScroll();

  // cursor + magnetic
  createCursor($('#cursor'), { reduced });
  magnetic(gsap);

  // hero lens, placed around the words so the name stays clear of the barrel
  const heroStage = $('.hero__stage');
  const heroLast = $('.hero__last');
  const heroCopy = $('#heroCopy');
  const lensCanvas = $('#lens');
  lens = createLens(lensCanvas, {
    reduced,
    getAvoid: () => {
      if (getY() > 4) return null;         // the words move once the page scrolls
      const st = heroStage.getBoundingClientRect();
      const name = heroLast.getBoundingClientRect();
      const size = parseFloat(getComputedStyle(heroLast).fontSize) || 0;
      return {
        right: name.right - st.left,
        top: name.top - st.top + size * .08,
        copyTop: heroCopy.getBoundingClientRect().top - st.top,
        copyRight: heroCopy.getBoundingClientRect().right - st.left,
        bar: bar.offsetHeight
      };
    },
    onFrame: ({ x, y }) => {
      heroStage.style.setProperty('--fx', (x * 100).toFixed(2) + '%');
      heroStage.style.setProperty('--fy', (y * 100).toFixed(2) + '%');
    }
  });
  if (lens) {
    lens.setTheme(root.getAttribute('data-theme'));
    if (!reduced) lens.setActive(false);   // stay idle while the leader counts down
    addEventListener('pointermove', e => {
      lens.setPointer((e.clientX / innerWidth) * 2 - 1, (e.clientY / innerHeight) * 2 - 1);
    }, { passive: true });
    // the lens can be "fired": the iris snaps shut and opens, like a shutter
    let snapping = false;
    lensCanvas.addEventListener('pointermove', e => {
      const over = lens.progress < .05 && lens.hit(e.clientX, e.clientY);
      over ? lensCanvas.setAttribute('data-cursor', 'Capture') : lensCanvas.removeAttribute('data-cursor');
      lensCanvas.style.cursor = over ? 'pointer' : '';
    });
    lensCanvas.addEventListener('click', e => {
      if (snapping || lens.progress > .05 || !lens.hit(e.clientX, e.clientY)) return;
      snapping = true;
      sound.shutter();
      const s = { v: 1 };
      gsap.timeline({ onComplete: () => { snapping = false; } })
        .to(s, { v: 0, duration: .13, ease: 'power2.in', onUpdate: () => lens.setShutter(s.v) })
        .to('#flash', { opacity: .16, duration: .05 }, .12)
        .to('#flash', { opacity: 0, duration: .7, ease: 'power2.out' }, .17)
        .to(s, { v: 1, duration: .9, ease: 'expo.out', onUpdate: () => lens.setShutter(s.v) }, .16);
    });
  } else {
    lensCanvas.remove();
  }

  // awards explorer, slideshow, programme guide
  const awards = createAwards({
    works: WORKS, list: $('#awardsList'), sum: $('#recSum'), gsap, reduced
  });
  let navigate = () => {};
  const show = createShow($('#show'), WORKS, {
    gsap, reduced,
    onAwards: i => { awards.show(i); navigate('#record'); }
  });
  createGuide({
    data: SITE.television || {}, root: $('#guide'), intro: $('#tvIntro'),
    monitor: $('#monitor'), gsap, reduced
  });

  // Where "the record" is on screen: the production that is open, else its heading.
  const recordTarget = () => $('.ledger__row[aria-expanded="true"]')?.parentElement || $('#record');

  // a laurel opens that production's line in the full record, just below
  $('#laurels').addEventListener('click', e => {
    const p = e.target.closest('.plaque[data-work]');
    if (!p) return;
    const to = awards.show(+p.dataset.work) || $('#record');
    holdBar = performance.now() + 1600;
    if (lenis) lenis.scrollTo(to, { offset: -(bar.offsetHeight + 16), duration: 1.2 });
    else scrollTo(0, to.getBoundingClientRect().top + scrollY - bar.offsetHeight - 16);
    $('.ledger__row', to)?.focus({ preventScroll: true });
  });
  $$('#laurels .plaque').forEach(p => tilt(p, $('.plaque__in', p), 6));

  // hero name: letters gain weight as the pointer nears, like light falling on them.
  // Letter centres are measured once (and on resize) to avoid layout work every frame.
  const heroChars = $$('.hero__last .ch');
  let centres = [];
  // the hero is pinned while this runs, so screen positions stay put
  const measure = () => { if (getY() > 10) return; centres = heroChars.map(ch => { const r = ch.getBoundingClientRect(); return [r.left + r.width / 2, r.top + r.height / 2]; }); };
  if (!reduced && finePointer) {
    const wts = heroChars.map(() => 340);
    let mx = -9999, my = -9999;
    addEventListener('pointermove', e => { mx = e.clientX; my = e.clientY; }, { passive: true });
    addEventListener('resize', () => setTimeout(measure, 100));
    gsap.ticker.add(() => {
      const y = getY();
      if (y > innerHeight * .5 || !centres.length) return;
      heroChars.forEach((ch, i) => {
        const d = Math.hypot(mx - centres[i][0], my - centres[i][1]);
        const t = 340 + Math.max(0, 1 - d / 320) * 380;
        const v = wts[i] + (t - wts[i]) * .12;
        if (Math.abs(v - wts[i]) > .3) { wts[i] = v; ch.style.fontWeight = v.toFixed(0); }
      });
    });
  }

  // ------------- intro (leader → iris → hero)
  const firstName = $('[data-first]');
  const introTargets = ['.latest', '.hero__meta', '.hero__laurels', '.hero__cta', '.hero__scroll', '.bar'];
  if (!reduced) {
    gsap.set(heroChars, { yPercent: 40, rotateX: -80, opacity: 0, transformPerspective: 900, transformOrigin: '50% 100%' });
    gsap.set(firstName, { opacity: 0, y: 20, filter: 'blur(10px)' });
    gsap.set(introTargets, { opacity: 0 });
    gsap.set('.finder__c', { scale: 2.4, opacity: 0 });
  }

  const intro = () => {
    lenis?.start();
    lens?.setActive(true);
    if (deepLink) setTimeout(() => navigate(deepLink), reduced ? 0 : 900);
    if (reduced) { lens?.setOpen(1); measure(); return; }
    const tl = gsap.timeline({ defaults: { ease: 'expo.out' }, onComplete: measure });
    if (lens) {
      const o = { v: 0 };
      tl.to(o, { v: 1, duration: 2.6, ease: 'expo.out', onUpdate: () => lens.setOpen(o.v) }, 0);
    }
    tl.to(heroChars, { yPercent: 0, rotateX: 0, opacity: 1, duration: 1.6, stagger: .05, clearProps: 'transform' }, .15)
      .to(firstName, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.4, clearProps: 'filter' }, .3)
      .to('.finder__c', { scale: 1, opacity: .38, duration: 1.4, stagger: .06 }, .4)
      .to(introTargets, { opacity: 1, duration: 1.2, stagger: .08, clearProps: 'opacity' }, .8)
      // the laurels grow, leaf by leaf, both sides together
      .from('.hero__laurels .laurel__leaf', {
        scale: 0, opacity: 0, transformOrigin: '50% 50%', duration: .7, ease: 'back.out(2.2)',
        stagger: i => (i % LEAVES_PER_BRANCH) * .035
      }, 1.15);
  };

  // ------------- leader countdown
  let seen = false;
  try { seen = sessionStorage.getItem('spd-seen') === '1'; sessionStorage.setItem('spd-seen', '1'); } catch (e) {}
  let leaderDone = false;
  const finishLeader = async () => {
    if (leaderDone) return;
    leaderDone = true;
    iris.set(0);
    leaderEl.classList.add('is-clear');
    gsap.to(leaderEl.querySelector('.leader__frame'), { opacity: 0, scale: .9, duration: .35, ease: 'power2.in' });
    gsap.to(leaderEl.querySelector('.leader__hint'), { opacity: 0, duration: .25 });
    sound.iris();
    setTimeout(intro, 380);
    await iris.open(1300);
    leaderEl.classList.add('is-done');
  };
  if (reduced) {
    leaderEl.classList.add('is-done');
    iris.set(1);
    intro();
  } else {
    leaderEl.addEventListener('click', finishLeader);
    addEventListener('keydown', function k(e) { if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') { finishLeader(); removeEventListener('keydown', k); } });
    const num = $('#leaderNum'), sweep = $('.leader__sweep');
    const counts = seen ? [1] : [3, 2, 1];
    const start = () => {
      const STEP = 560;
      const t0 = performance.now();
      const tick = now => {
        if (leaderDone) return;
        const el = Math.max(0, now - t0);
        const k = Math.floor(el / STEP);
        if (k >= counts.length) { finishLeader(); return; }
        num.textContent = counts[k];
        const a = ((el % STEP) / STEP) * Math.PI * 2;
        const x = 100 + Math.sin(a) * 92, y = 100 - Math.cos(a) * 92;
        sweep.setAttribute('d', `M100 100 L100 8 A92 92 0 ${a > Math.PI ? 1 : 0} 1 ${x.toFixed(2)} ${y.toFixed(2)} Z`);
        requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    Promise.race([document.fonts?.ready || Promise.resolve(), new Promise(r => setTimeout(r, 1200))]).then(start);
    setTimeout(finishLeader, 6000);   // never leave a visitor waiting
  }

  // ------------- navigation with iris transition
  const menu = $('#menu'), menuBtn = $('#menuToggle');
  const behind = [$('main'), $('.foot')];
  const setMenu = open => {
    menu.hidden = !open;
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    behind.forEach(el => { el.inert = open; });      // keep focus in the header and the menu
    open ? lenis?.stop() : lenis?.start();
    if (open) {
      if (!reduced) gsap.fromTo($$('a', menu), { yPercent: 60, opacity: 0 }, { yPercent: 0, opacity: 1, stagger: .06, duration: 1, ease: 'expo.out' });
      $('a', menu)?.focus({ preventScroll: true });
    }
  };
  menuBtn.addEventListener('click', () => setMenu(menu.hidden));
  addEventListener('keydown', e => { if (e.key === 'Escape' && !menu.hidden) { setMenu(false); menuBtn.focus(); } });
  // the full-screen menu belongs to small screens only
  matchMedia('(min-width: 861px)').addEventListener?.('change', e => { if (e.matches && !menu.hidden) setMenu(false); });

  const jump = hash => {
    holdBar = performance.now() + 1400;
    const el = hash === '#top' ? null : hash === '#record' ? recordTarget() : $(hash);
    // sections carry their own top padding; anything else is cleared of the header
    const offset = el && !el.matches('section') ? -(bar.offsetHeight + 16) : 0;
    if (lenis) { lenis.start(); lenis.scrollTo(el || 0, { immediate: true, force: true, offset }); }
    else scrollTo(0, el ? el.getBoundingClientRect().top + scrollY + offset : 0);
    ScrollTrigger.update();
    // move keyboard and screen-reader focus along with the view
    const to = el ? ($('h2, h3', el) || el) : $('#heroName');
    if (to) { to.setAttribute('tabindex', '-1'); to.focus({ preventScroll: true }); }
  };
  let moving = false;
  navigate = (hash, after) => {
    if (moving || (hash !== '#top' && !$(hash))) return;
    const wasOpen = !menu.hidden;
    if (hash !== '#top') { try { history.replaceState(null, '', hash); } catch (err) {} }
    else { try { history.replaceState(null, '', location.pathname + location.search); } catch (err) {} }
    if (reduced) { if (wasOpen) setMenu(false); jump(hash); after?.(); return; }
    moving = true;
    sound.iris();
    iris.transition(() => { if (wasOpen) setMenu(false); jump(hash); })
      .then(() => { moving = false; after?.(); });
  };
  document.addEventListener('click', e => {
    const a = e.target.closest('[data-nav]');
    if (!a) return;
    const hash = a.getAttribute('href');
    if (!hash || !hash.startsWith('#')) return;
    e.preventDefault();
    const slide = a.dataset.slide;
    navigate(hash, slide != null ? () => show.go(+slide) : null);
  });

  $('#rewind').addEventListener('click', () => {
    sound.whoosh(1.6);
    if (lenis) lenis.scrollTo(0, { duration: 2.4, easing: t => (t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2) });
    else scrollTo({ top: 0, behavior: 'auto' });
  });

  // portrait and monitor lean towards the pointer
  tilt($('#portrait'), $('.about__print'), 5);
  tilt($('#monitor'), $('.monitor__screen'), 6);

  if (!reduced) scrollScenes();
  else {
    $$('.odo').forEach(o => $$('.odo__col', o).forEach(c => (c.style.transform = `translateY(${-(+c.dataset.d + 20)}em)`)));
    $$('.hl').forEach(el => el.classList.add('is-in'));
  }
  signature();

  // active nav link (created after the pinned scenes so positions include pin spacing)
  ['work', 'recognition', 'about', 'contact'].forEach(id => {
    ScrollTrigger.create({
      trigger: `#${id}`, start: 'top 55%', end: 'bottom 55%',
      onToggle: s => $$(`.bar__nav a[href="#${id}"]`).forEach(a => {
        a.classList.toggle('is-active', s.isActive);
        s.isActive ? a.setAttribute('aria-current', 'true') : a.removeAttribute('aria-current');
      })
    });
  });

  // triggers were created section by section; put them in page order so each one is
  // measured after the pinned sections above it (hero, career) add their scroll length
  ScrollTrigger.sort();
  ScrollTrigger.refresh();

  // an award record can be longer or shorter than the last one: when that changes
  // the length of the page, re-measure everything below it (the pinned film strip)
  if ('ResizeObserver' in window) {
    let was = 0, timer = 0;
    new ResizeObserver(([entry]) => {
      const h = Math.round(entry.contentRect.height);
      if (was && Math.abs(h - was) > 2) { clearTimeout(timer); timer = setTimeout(() => ScrollTrigger.refresh(), 250); }
      was = h;
    }).observe($('#awardsList'));
  }

  formSetup();
  const settle = () => { lens?.relayout(); ScrollTrigger.refresh(); measure(); };
  document.fonts?.ready.then(settle);
  addEventListener('load', settle);
}

/* ------------------------------------------------------------------ scroll scenes */
function scrollScenes() {
  const mm = gsap.matchMedia();

  // hero: push through the lens (opacity and movement only; no blur, it is costly per frame)
  const heroCopy = $('.hero__copy');
  const flood = $('.hero__flood');
  gsap.timeline({
    scrollTrigger: {
      trigger: '.hero', start: 'top top', end: () => '+=' + innerHeight * (innerWidth < 760 ? .75 : 1),
      pin: true, scrub: true, anticipatePin: 1,
      onUpdate: s => {
        lens?.setProgress(s.progress);
        const f = Math.max(0, Math.min(1, (s.progress - .62) / .38));
        flood.style.clipPath = f > 0 ? `circle(${(Math.pow(f, 1.6) * 80).toFixed(2)}% at var(--fx, 50%) var(--fy, 50%))` : 'circle(0% at 50% 50%)';
      }
    }
  })
    .to(heroCopy, { yPercent: -16, opacity: 0, ease: 'power2.in', duration: .5 }, 0)
    .to('.hero__last', { letterSpacing: '.06em', ease: 'power1.in', duration: .5 }, 0)
    .to('.hero__scroll', { opacity: 0, duration: .2 }, 0)
    .to({}, { duration: .5 }, .5);

  // rack-focus headings
  $$('[data-focus]').forEach(el => {
    if (el.matches('h2')) {
      const chars = splitChars(el, el.textContent.trim());
      gsap.set(el, { opacity: 1 });
      gsap.fromTo(chars, { opacity: 0, filter: 'blur(16px)', yPercent: 30, scale: 1.15 },
        { opacity: 1, filter: 'blur(0px)', yPercent: 0, scale: 1, duration: 1.5, stagger: .04, ease: 'expo.out', clearProps: 'filter',
          scrollTrigger: { trigger: el, start: 'top 88%' } });
    } else {
      gsap.fromTo(el, { opacity: 0, filter: 'blur(14px)', y: 24 },
        { opacity: 1, filter: 'blur(0px)', y: 0, duration: 1.6, ease: 'expo.out', clearProps: 'filter', scrollTrigger: { trigger: el, start: 'top 86%' } });
    }
  });
  $$('.head').forEach(h => {
    const side = $$('.head__aside, .head__note', h);
    if (side.length) gsap.from(side, { opacity: 0, y: 16, duration: 1.2, delay: .15, ease: 'expo.out', scrollTrigger: { trigger: h, start: 'top 88%' } });
  });

  // slideshow frame rises with depth; timeline clips print in
  gsap.fromTo('#showFrame', { rotateX: 10, y: 80, scale: .94, transformPerspective: 1600, transformOrigin: '50% 100%' },
    { rotateX: 0, y: 0, scale: 1, ease: 'none', scrollTrigger: { trigger: '#show', start: 'top 100%', end: 'top 35%', scrub: true } });
  gsap.from('#sheet > li', { opacity: 0, y: 26, duration: 1.1, stagger: .05, ease: 'expo.out', scrollTrigger: { trigger: '#sheet', start: 'top 92%' } });

  // recognition: the ruled grid fades up, then each laurel grows around its award
  gsap.from('#laurels', { opacity: 0, y: 36, duration: 1.3, ease: 'expo.out', scrollTrigger: { trigger: '#laurels', start: 'top 86%' } });
  $$('#laurels .plaque').forEach((p, k) => {
    const stems = $$('.laurel__stem', p);
    gsap.set(stems, { strokeDasharray: 100 });
    gsap.timeline({ delay: .15 + (k % 3) * .12, scrollTrigger: { trigger: p, start: 'top 90%' } })
      .from(stems, { strokeDashoffset: 100, duration: 1, ease: 'power2.out' }, 0)
      .from($$('.laurel__leaf', p), {
        scale: 0, opacity: 0, transformOrigin: '50% 50%', duration: .7, ease: 'back.out(2.2)',
        stagger: i => (i % LEAVES_PER_BRANCH) * .04
      }, .05)
      .from($$('.plaque__t > *', p), { opacity: 0, y: 14, duration: 1, stagger: .07, ease: 'expo.out' }, .15);
  });
  // the full record and the acknowledgements: label first, then the lines one by one
  $$('.split').forEach(sp => {
    gsap.from($$('.split__label > *', sp), { opacity: 0, y: 18, duration: 1.1, stagger: .08, ease: 'expo.out', scrollTrigger: { trigger: sp, start: 'top 86%' } });
    gsap.from($$('.ledger__item, .acklist li', sp), { opacity: 0, y: 18, duration: 1, stagger: .05, ease: 'expo.out', scrollTrigger: { trigger: sp, start: 'top 84%' } });
  });

  // about: portrait develops like a print in the tray
  const photo = $('.about__photo'), img = $('.about__photo img');
  gsap.fromTo(photo, { '--develop': 1 }, { '--develop': 0, ease: 'none', scrollTrigger: { trigger: '#portrait', start: 'top 85%', end: 'center 55%', scrub: true } });
  gsap.fromTo(img, { scale: 1.1, yPercent: 5, transformOrigin: '50% 100%' }, { scale: 1, yPercent: 0, ease: 'none', scrollTrigger: { trigger: '#portrait', start: 'top 100%', end: 'bottom 40%', scrub: true } });
  gsap.from('.about__bracket', { scale: 2, opacity: 0, duration: 1.4, ease: 'expo.out', stagger: .1, scrollTrigger: { trigger: '#portrait', start: 'top 70%' } });
  gsap.from('.about__portrait figcaption', { opacity: 0, y: 10, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: '#portrait', start: 'center 80%' } });
  gsap.from('#aboutBody p', { opacity: 0, y: 26, duration: 1.3, stagger: .12, ease: 'expo.out', scrollTrigger: { trigger: '#aboutBody', start: 'top 85%' } });

  // figures roll like a footage counter
  ScrollTrigger.create({
    trigger: '#stats', start: 'top 85%', once: true,
    onEnter: () => {
      $$('.stat').forEach((s, k) => {
        gsap.from(s, { opacity: 0, y: 30, duration: 1.2, delay: k * .1, ease: 'expo.out' });
        $$('.odo__col', s).forEach((c, j, arr) => {
          gsap.fromTo(c, { yPercent: 0 }, { yPercent: -((+c.dataset.d + 20) * 100) / 30, duration: 2.2 + (arr.length - j) * .25, delay: k * .1, ease: 'expo.out' });
        });
      });
      sound.whoosh(1);
    }
  });

  // career: a film strip wrapped over a wide drum, running sideways as you scroll.
  // Each frame sits on the drum by its flat distance from the middle of the screen,
  // so the strip stays in one piece however far it has travelled.
  mm.add('(min-width: 761px)', () => {
    const track = $('#reelTrack');
    const frames = $$('.frame', track);
    const real = frames.filter(f => !f.classList.contains('frame--leader'));
    if (!real.length) return;
    let geo = [], x0 = 0, x1 = 0, R = 2000;
    const measure = () => {
      const left = $('.career .head').getBoundingClientRect().left;
      const last = real[real.length - 1];
      geo = frames.map(f => f.offsetLeft + f.offsetWidth / 2);
      x0 = left - real[0].offsetLeft;                                                   // first frame on the left margin
      x1 = Math.min(x0, innerWidth - left - (last.offsetLeft + last.offsetWidth));      // last frame on the right margin
      R = Math.max(1500, innerWidth * 1.45);
    };
    const bend = () => {
      const x = +gsap.getProperty(track, 'x'), half = innerWidth / 2;
      frames.forEach((f, i) => {
        const d = geo[i] + x - half;
        const th = Math.max(-1.3, Math.min(1.3, d / R));
        f.style.transform = `translate3d(${(R * Math.sin(th) - d).toFixed(1)}px,0,${(R * Math.cos(th) - R).toFixed(1)}px) rotateY(${(th * 57.2958).toFixed(2)}deg)`;
      });
    };
    measure();
    const tw = gsap.fromTo(track, { x: () => x0 }, {
      x: () => x1, ease: 'none', onUpdate: bend,
      scrollTrigger: {
        trigger: '.career', start: 'top top', end: () => '+=' + Math.max(1, x0 - x1),
        pin: true, scrub: .6, invalidateOnRefresh: true, onRefreshInit: measure, onRefresh: bend
      }
    });
    bend();
    return () => { tw.scrollTrigger?.kill(); tw.kill(); gsap.set(track, { clearProps: 'transform' }); frames.forEach(f => (f.style.transform = '')); };
  });
  mm.add('(max-width: 760px)', () => {
    $$('.frame:not(.frame--leader)').forEach(f => gsap.from(f, { opacity: 0, y: 40, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: f, start: 'top 88%' } }));
  });

  // television: the titles tune in, the monitor swings round
  gsap.from('.guide__group', { opacity: 0, y: 30, duration: 1.2, stagger: .15, ease: 'expo.out', scrollTrigger: { trigger: '#guide', start: 'top 85%' } });
  gsap.from('#monitor', { opacity: 0, y: 40, rotateY: -16, transformPerspective: 900, duration: 1.5, ease: 'expo.out', scrollTrigger: { trigger: '#monitor', start: 'top 88%' } });

  // credits roll into focus
  $$('[data-roll]').forEach(el => {
    gsap.fromTo(el, { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 92%' } });
  });

  // key phrases: a hairline draws under them as they come into view
  $$('.hl').forEach(el => ScrollTrigger.create({ trigger: el, start: 'top 82%', once: true, onEnter: () => el.classList.add('is-in') }));

  // contact
  gsap.from('.direct li, .social li', { opacity: 0, y: 20, duration: 1, stagger: .07, ease: 'expo.out', scrollTrigger: { trigger: '#direct', start: 'top 90%' } });
  gsap.from('.field, .form__actions', { opacity: 0, y: 24, duration: 1.1, stagger: .08, ease: 'expo.out', scrollTrigger: { trigger: '#form', start: 'top 85%' } });

  // footer signature drifts up
  gsap.fromTo('#sign', { yPercent: 30 }, { yPercent: 0, ease: 'none', scrollTrigger: { trigger: '.foot', start: 'top bottom', end: 'bottom bottom', scrub: true } });
}

/* ------------------------------------------------------------------ footer signature */
// The name is drawn in outline; a soft spotlight follows the pointer and fills it.
function signature() {
  const el = $('#sign');
  if (!el) return;
  if (finePointer && !reduced) {
    const x = gsap.quickTo(el, '--mx', { duration: .9, ease: 'power3.out' });
    const y = gsap.quickTo(el, '--my', { duration: .9, ease: 'power3.out' });
    gsap.set(el, { '--mx': 50, '--my': 50 });
    $('.foot').addEventListener('pointermove', e => {
      const r = el.getBoundingClientRect();
      x(((e.clientX - r.left) / r.width) * 100);
      y(((e.clientY - r.top) / r.height) * 100);
    });
  } else if (!reduced) {
    gsap.fromTo(el, { '--mx': 10 }, { '--mx': 90, '--my': 50, duration: 6, ease: 'sine.inOut', repeat: -1, yoyo: true });
  } else {
    el.style.setProperty('--mx', 50); el.style.setProperty('--my', 50);
  }
}

/* ------------------------------------------------------------------ form */
function formSetup() {
  const form = $('#form'), status = $('#formStatus');
  const c = SITE.contact || {};
  const fields = $$('.field', form).map(f => ({ f, input: $('input, textarea', f), err: $('.field__err', f) }));
  const buttons = $$('[data-channel]', form);

  // only offer the ways of sending that are set up in content.js
  buttons.forEach(b => {
    const ok = b.dataset.channel === 'whatsapp' ? !!c.whatsapp : !!(c.email || c.formEndpoint);
    b.hidden = !ok;
  });
  if (c.formEndpoint) $('[data-channel="email"]', form).textContent = 'Send message';

  const check = ({ f, input, err }) => {
    const v = input.value.trim();
    const bad = !v || (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v));
    f.classList.toggle('is-invalid', bad);
    input.setAttribute('aria-invalid', bad ? 'true' : 'false');
    if (err) err.hidden = !bad;
    return !bad;
  };
  // a line of status text, with an optional fallback link
  const say = (text, link) => {
    status.textContent = text;
    if (!link) return;
    const a = Object.assign(document.createElement('a'), { href: link.href, textContent: link.text });
    if (link.blank) { a.target = '_blank'; a.rel = 'noopener'; }
    status.append(' ', a, '.');
  };

  // which button was used; `submitter` covers Enter in a field and modern browsers
  let lastChannel = 'email';
  buttons.forEach(b => b.addEventListener('click', () => { lastChannel = b.dataset.channel; }));

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const channel = e.submitter?.dataset.channel || lastChannel;
    const bad = fields.filter(x => !check(x));
    if (bad.length) {
      say(bad.length === 1 ? 'One field needs another look.' : `${bad.length} fields need another look.`);
      bad[0].input.focus();
      return;
    }
    const data = Object.fromEntries(new FormData(form));
    if (data._gotcha) return;                      // filled in by a robot
    const name = data.name.trim(), email = data.email.trim(), message = data.message.trim();

    if (channel === 'whatsapp' && c.whatsapp) {
      const url = `https://wa.me/${encodeURIComponent(c.whatsapp)}?text=${encodeURIComponent(`Hello Shirly, I'm ${name}.\n\n${message}\n\n${email}`)}`;
      // opened through a link, so no window handle is needed to know it was allowed
      const a = Object.assign(document.createElement('a'), { href: url, target: '_blank', rel: 'noopener' });
      document.body.append(a); a.click(); a.remove();
      say('WhatsApp should open with your message ready to send. If it doesn\'t,', { href: url, text: 'open WhatsApp here', blank: true });
      return;
    }
    if (c.formEndpoint) {
      say('Sending…');
      buttons.forEach(b => (b.disabled = true));
      try {
        const res = await fetch(c.formEndpoint, { method: 'POST', headers: { Accept: 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify({ name, email, message }) });
        if (!res.ok) throw new Error(String(res.status));
        form.reset();
        say('Message sent. Thank you, I will reply soon.');
      } catch (err) {
        say('The message didn\'t go through. Please write to', { href: `mailto:${c.email}`, text: c.email });
      } finally {
        buttons.forEach(b => (b.disabled = false));
      }
      return;
    }
    const mail = `mailto:${c.email}?subject=${encodeURIComponent('Project enquiry from ' + name)}&body=${encodeURIComponent(`${message}\n\n${name} (${email})`)}`;
    location.href = mail;
    say('Your email app should open with the message ready to send. If it doesn\'t, write to', { href: mail, text: c.email });
  });
  // clear a field's error as soon as it is put right
  form.addEventListener('input', e => {
    const x = fields.find(y => y.input === e.target);
    if (x && x.f.classList.contains('is-invalid')) check(x);
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
else boot();
