// Television: the programmes run on as a line of titles in two groups (TV1 and
// Sirasa TV). A small vintage monitor scans through them on its own; pointing at,
// focusing or tapping a title tunes it in (static, then a title card).
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

export function createGuide({ data, root, intro, monitor, gsap, reduced }) {
  const groups = data.groups || [];
  intro.textContent = data.intro || '';
  const flat = [];

  root.innerHTML = groups.map(g => `
    <div class="guide__group">
      <p class="guide__head"><span class="guide__role">${esc(g.role)}</span><span class="guide__where">${esc([g.place, g.years].filter(Boolean).join(', '))}</span></p>
      <ul class="guide">
        ${(g.programmes || []).map(p => {
          const i = flat.push({ ...p, place: g.place }) - 1;
          // the monitor is decorative, so the details are also here for screen readers
          const detail = [p.format, p.when, p.live ? 'live' : ''].filter(Boolean).join(', ');
          // the stroke after a title travels with it, so a line never starts with one
          return `<li class="guide__cell"><span class="guide__item" data-i="${i}" data-lock tabindex="0"><span class="guide__title">${esc(p.title)}</span>${p.live ? '<i class="guide__live" aria-hidden="true"></i>' : ''}${detail ? `<span class="sr">, ${esc(detail)}</span>` : ''}</span><span class="guide__sep" aria-hidden="true">/</span></li>`;
        }).join('')}
      </ul>
    </div>`).join('');

  const items = [...root.querySelectorAll('.guide__item')];
  if (!monitor || !flat.length) return;

  /* ---------- monitor ---------- */
  const cv = monitor.querySelector('#monitorStatic');
  const g = cv.getContext('2d');
  const img = g.createImageData(cv.width, cv.height);
  const card = monitor.querySelector('.monitor__card');
  const title = monitor.querySelector('.monitor__title');
  const meta = monitor.querySelector('.monitor__meta');
  const liveEl = monitor.querySelector('.monitor__live');
  const label = monitor.querySelector('.monitor__base span');
  let raf = 0, until = 0, current = -1;

  function noise() {
    const d = img.data;
    for (let i = 0; i < d.length; i += 4) {
      const v = Math.random() * 230;
      d[i] = v; d[i + 1] = v * .92; d[i + 2] = v * .82; d[i + 3] = 255;
    }
    g.putImageData(img, 0, 0);
    if (performance.now() < until) raf = requestAnimationFrame(noise);
    else monitor.classList.remove('is-tuning');
  }

  function tune(i) {
    if (i === current) return;
    current = i;
    const p = flat[i];
    items.forEach((el, k) => el.classList.toggle('is-on', k === i));
    monitor.classList.add('is-on');
    title.textContent = p.title;
    meta.textContent = [p.format, p.when].filter(Boolean).join(', ');
    liveEl.hidden = !p.live;
    label.textContent = (p.place || '').toUpperCase();
    if (reduced) return;
    monitor.classList.add('is-tuning');
    cancelAnimationFrame(raf);
    until = performance.now() + 240;
    noise();
    gsap.fromTo(card, { opacity: 0, scaleY: .7 }, { opacity: 1, scaleY: 1, duration: .5, delay: .2, ease: 'expo.out', overwrite: true });
  }

  /* ---------- scanning: one programme after another, until someone takes over ---------- */
  let timer = 0, inView = false, held = false;
  const play = () => {
    clearInterval(timer);
    if (reduced || !inView || held || document.hidden) return;
    timer = setInterval(() => tune((current + 1) % flat.length), 3200);
  };
  const hold = v => { held = v; play(); };

  items.forEach(el => {
    const i = +el.dataset.i;
    el.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') { hold(true); tune(i); } });
    el.addEventListener('focus', () => { hold(true); tune(i); });
    el.addEventListener('click', () => { tune(i); play(); });     // a tap on a phone
  });
  root.addEventListener('pointerleave', () => hold(false));
  root.addEventListener('focusout', e => { if (!root.contains(e.relatedTarget)) hold(false); });
  document.addEventListener('visibilitychange', play);

  new IntersectionObserver(([e]) => {
    inView = e.isIntersecting;
    if (inView && current < 0) tune(0);
    play();
  }, { threshold: .3 }).observe(monitor);
}
