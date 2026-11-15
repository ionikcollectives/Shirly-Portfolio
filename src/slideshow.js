// Work slideshow: wipe-and-push transitions, light leak, drag, keys, autoplay,
// and a contact sheet underneath: every work as a small frame, with the one on
// screen marked, the way a director marks a frame on a sheet of stills.
import { art } from './art.js';
import { sound } from './sound.js';

const pad = n => String(n).padStart(2, '0');
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const words = s => s.split(' ').map(w => `<span class="word">${[...w].map(c => `<span class="ch">${esc(c)}</span>`).join('')}</span>`).join(' ');
export const yearLabel = w => (w.years[1] && w.years[1] !== w.years[0] ? `${w.years[0]}–${w.years[1]}` : `${w.years[0]}`);
export const tally = w => ({
  won: (w.awards || []).filter(a => a[0] === 'won').length,
  nom: (w.awards || []).filter(a => a[0] === 'nominated').length
});
const plural = (n, one, many) => `${n} ${n === 1 ? one : many}`;

export function createShow(root, works, { gsap, reduced, onAwards }) {
  const frame = root.querySelector('#showFrame');
  const slidesEl = root.querySelector('#showSlides');
  const textEl = root.querySelector('#showText');
  const leak = root.querySelector('.show__leak');
  const sheet = root.querySelector('#sheet');
  const nowEl = document.getElementById('slideNow');
  const pauseBtn = root.querySelector('#pauseSlide');
  document.getElementById('slideAll').textContent = pad(works.length);

  const picture = (w, id) => (w.still ? `<img src="${esc(w.still)}" alt="" loading="lazy" decoding="async">` : art(w.art, id));

  slidesEl.innerHTML = works.map((w, i) => `
    <article class="slide" data-i="${i}" aria-roledescription="slide" aria-label="${i + 1} of ${works.length}: ${esc(w.title)}">
      <div class="slide__art">${picture(w, `a${i}`)}</div>
      <div class="slide__vignette"></div>
      <p class="slide__year">${w.isNew ? '<span class="slide__new">New</span>' : ''}${esc(yearLabel(w))}</p>
      <h3 class="slide__title${w.title.length > 13 ? ' is-long' : ''}" aria-label="${esc(w.title)}"><span aria-hidden="true">${words(w.title)}</span></h3>
    </article>`).join('');

  // the contact sheet
  sheet.innerHTML = works.map((w, i) => `
    <li><button type="button" class="cell" data-go="${i}" aria-current="false" aria-label="${esc(w.title)}, ${esc(yearLabel(w))}">
      <span class="cell__art">${picture(w, `t${i}`)}<span class="cell__n">${pad(i + 1)}</span></span>
      <span class="cell__cap"><span class="cell__title">${esc(w.title)}</span><span class="cell__year">${esc(yearLabel(w))}</span></span>
    </button></li>`).join('');
  const cells = [...sheet.querySelectorAll('.cell')];

  const slides = [...slidesEl.children];
  let index = 0, busy = false, inView = false, hovering = false, focusWithin = false, paused = false;
  let auto = null;
  const DURATION = 7;

  const info = (w, i) => {
    const t = tally(w);
    const where = [w.channel, w.episodes ? `${w.episodes} episodes` : ''].filter(Boolean).join(', ');
    const count = t.won || t.nom
      ? `<button type="button" class="show__awards" data-awards="${i}">${[t.won ? plural(t.won, 'award', 'awards') : '', t.nom ? plural(t.nom, 'nomination', 'nominations') : ''].filter(Boolean).join(' and ')}<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8"/></svg></button>`
      : '';
    return `
      <div class="show__meta">
        <span class="show__type">${esc(w.type || 'Teledrama')}</span>
        <strong>${esc(w.title)}</strong>
        ${where ? `<span>${esc(where)}</span>` : ''}
        <span>${esc(yearLabel(w))}</span>
      </div>
      <div class="show__desc">
        <p class="show__note">${esc(w.note)}</p>
        ${count}
      </div>`;
  };

  // when someone is swiping through the rail of frames themselves, autoplay leaves it where they put it
  let railTouched = -1e9;
  ["pointerdown", "wheel", "touchmove"].forEach(t => sheet.addEventListener(t, () => { railTouched = performance.now(); }, { passive: true }));

  function mark(i, byUser = true) {
    cells.forEach((c, j) => {
      c.classList.toggle('is-active', j === i);
      c.setAttribute('aria-current', j === i ? 'true' : 'false');
      if (j !== i) c.style.setProperty('--p', 0);
    });
    nowEl.textContent = pad(i + 1);
    // keep the marked frame in view when the sheet is a rail that scrolls sideways (phones)
    if (sheet.scrollWidth > sheet.clientWidth + 4 && (byUser || performance.now() - railTouched > 6000)) {
      const li = cells[i].parentElement;
      sheet.scrollTo({ left: li.offsetLeft - (sheet.clientWidth - li.offsetWidth) / 2, behavior: reduced ? 'auto' : 'smooth' });
    }
  }

  // initial
  slides[0].classList.add('is-active');
  textEl.innerHTML = info(works[0], 0);
  mark(0);

  sheet.addEventListener('click', e => {
    const c = e.target.closest('.cell');
    if (c) go(+c.dataset.go);
  });
  textEl.addEventListener('click', e => {
    const b = e.target.closest('[data-awards]');
    if (b && onAwards) onAwards(+b.dataset.awards);
  });

  /* ---------- autoplay ---------- */
  const live = () => textEl.setAttribute('aria-live', paused || reduced ? 'polite' : 'off');
  function startAuto() {
    stopAuto();
    live();
    if (reduced || paused || !inView || hovering || focusWithin || document.hidden) return;
    const c = cells[index];
    const prog = { p: parseFloat(c.style.getPropertyValue('--p')) || 0 };
    auto = gsap.to(prog, {
      p: 1, duration: DURATION * (1 - prog.p), ease: 'none',
      onUpdate: () => c.style.setProperty('--p', prog.p.toFixed(4)),
      onComplete: () => go(index + 1, 1, true)
    });
  }
  function stopAuto() { if (auto) { auto.kill(); auto = null; } }

  if (reduced) { paused = true; pauseBtn.hidden = true; }
  pauseBtn.addEventListener('click', () => {
    paused = !paused;
    pauseBtn.setAttribute('aria-pressed', paused ? 'true' : 'false');
    pauseBtn.setAttribute('aria-label', paused ? 'Play slideshow' : 'Pause slideshow');
    pauseBtn.classList.toggle('is-paused', paused);
    paused ? stopAuto() : startAuto();
    live();
  });

  function go(i, dir, fromAuto = false) {
    const n = works.length;
    i = (i + n) % n;
    if (busy || i === index) return;
    busy = true;
    stopAuto();
    if (!fromAuto) sound.whoosh(.6);
    dir = dir || (i > index ? 1 : -1);
    const from = slides[index], to = slides[i];
    const fromArt = from.querySelector('.slide__art'), toArt = to.querySelector('.slide__art');
    const toChars = to.querySelectorAll('.slide__title .ch');
    const fromChars = from.querySelectorAll('.slide__title .ch');
    const toYear = to.querySelector('.slide__year');
    index = i;
    mark(i, !fromAuto);

    from.classList.add('is-leaving');
    from.classList.remove('is-active');
    to.classList.add('is-active');

    if (reduced) {
      from.classList.remove('is-leaving');
      textEl.innerHTML = info(works[i], i);
      busy = false;
      return;
    }

    const tl2 = gsap.timeline({
      defaults: { ease: 'expo.inOut' },
      onComplete: () => {
        from.classList.remove('is-leaving');
        gsap.set([fromArt, ...fromChars], { clearProps: 'transform,opacity,filter' });
        gsap.set(to, { clearProps: 'clipPath' });
        busy = false;
        startAuto();
      }
    });
    tl2.fromTo(to, { clipPath: dir > 0 ? 'inset(0% 0% 0% 100%)' : 'inset(0% 100% 0% 0%)' },
                   { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.25 }, 0)
      .fromTo(toArt, { scale: 1.22, xPercent: dir * 8 }, { scale: 1, xPercent: 0, duration: 1.6, ease: 'expo.out' }, .1)
      .to(fromArt, { xPercent: -dir * 14, scale: 1.08, duration: 1.25 }, 0)
      .to(fromChars, { yPercent: -60, opacity: 0, filter: 'blur(8px)', stagger: .012, duration: .6, ease: 'power3.in' }, 0)
      .fromTo(toChars, { yPercent: 70, opacity: 0, filter: 'blur(12px)' },
                       { yPercent: 0, opacity: 1, filter: 'blur(0px)', stagger: .03, duration: 1.1, ease: 'expo.out' }, .55)
      .fromTo(toYear, { opacity: 0, y: -8 }, { opacity: .8, y: 0, duration: .8, ease: 'power2.out' }, .8)
      .fromTo(leak, { opacity: 0, '--lx': dir > 0 ? '90%' : '10%' },
                    { opacity: .9, '--lx': '50%', duration: .55, ease: 'power2.in' }, .15)
      .to(leak, { opacity: 0, '--lx': dir > 0 ? '10%' : '90%', duration: .9, ease: 'power2.out' }, .7);

    const old = [...textEl.children];
    tl2.to(old, { opacity: 0, y: -10, duration: .4, stagger: .05, ease: 'power2.in' }, 0)
      .add(() => {
        textEl.innerHTML = info(works[i], i);
        gsap.fromTo(textEl.children, { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: .9, stagger: .08, ease: 'expo.out' });
      }, .45);
  }

  root.querySelector('#nextSlide').addEventListener('click', () => go(index + 1, 1));
  root.querySelector('#prevSlide').addEventListener('click', () => go(index - 1, -1));

  addEventListener('keydown', e => {
    if (!inView || e.target.closest('input, textarea')) return;
    if (e.key === 'ArrowRight') go(index + 1, 1);
    if (e.key === 'ArrowLeft') go(index - 1, -1);
  });

  // drag / swipe
  let sx = 0, sy = 0, dragging = false, dx = 0;
  frame.addEventListener('pointerdown', e => {
    if (busy) return;
    dragging = true; sx = e.clientX; sy = e.clientY; dx = 0;
    frame.setPointerCapture?.(e.pointerId);
    stopAuto();
  });
  frame.addEventListener('pointermove', e => {
    const r = frame.getBoundingClientRect();
    const mx = (e.clientX - r.left) / r.width - .5, my = (e.clientY - r.top) / r.height - .5;
    if (dragging) {
      dx = e.clientX - sx;
      if (Math.abs(e.clientY - sy) > Math.abs(dx) && e.pointerType !== 'mouse') return;
      gsap.to(slides[index].querySelector('.slide__art'), { x: dx * .2, duration: .4, ease: 'power3.out', overwrite: 'auto' });
    } else if (!reduced && e.pointerType === 'mouse' && !busy) {
      const s = slides[index];
      gsap.to(s.querySelector('.slide__art'), { x: -mx * 26, y: -my * 16, duration: 1.2, ease: 'power3.out', overwrite: 'auto' });
      gsap.to(s.querySelector('.slide__title'), { x: mx * 14, y: my * 8, duration: 1.2, ease: 'power3.out', overwrite: 'auto' });
    }
  });
  const end = () => {
    if (!dragging) return;
    dragging = false;
    gsap.to(slides[index].querySelector('.slide__art'), { x: 0, duration: .6, ease: 'power3.out' });
    if (dx < -60) go(index + 1, 1);
    else if (dx > 60) go(index - 1, -1);
    else startAuto();
  };
  frame.addEventListener('pointerup', end);
  frame.addEventListener('pointercancel', end);
  frame.addEventListener('pointerleave', () => {
    const s = slides[index];
    gsap.to([s.querySelector('.slide__art'), s.querySelector('.slide__title')], { x: 0, y: 0, duration: 1.2, ease: 'power3.out' });
  });

  root.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') { hovering = true; stopAuto(); } });
  root.addEventListener('pointerleave', () => { hovering = false; startAuto(); });
  root.addEventListener('focusin', () => { focusWithin = true; stopAuto(); });
  root.addEventListener('focusout', () => { focusWithin = false; startAuto(); });
  document.addEventListener('visibilitychange', () => (document.hidden ? stopAuto() : startAuto()));

  new IntersectionObserver(([e]) => {
    inView = e.isIntersecting;
    inView ? startAuto() : stopAuto();
  }, { threshold: .45 }).observe(frame);

  return { go, get index() { return index; } };
}
