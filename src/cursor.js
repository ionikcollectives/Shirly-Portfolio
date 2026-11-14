// Autofocus cursor: four brackets that follow the pointer and lock onto
// whatever interactive element is under it, like a camera's focus box.
import { sound } from './sound.js';

const LOCK = 'a, button, [data-lock]';

export function createCursor(el, { reduced }) {
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!fine || !el) return null;
  document.documentElement.classList.add('has-cursor');

  el.innerHTML = `
    <div class="cursor__box">
      <span class="cursor__b cursor__b--tl"></span><span class="cursor__b cursor__b--tr"></span>
      <span class="cursor__b cursor__b--bl"></span><span class="cursor__b cursor__b--br"></span>
      <span class="cursor__label"></span>
    </div>
    <span class="cursor__dot"></span>`;
  const box = el.querySelector('.cursor__box');
  const dot = el.querySelector('.cursor__dot');
  const label = el.querySelector('.cursor__label');

  const S = 26;
  const p = { x: innerWidth / 2, y: innerHeight / 2 };
  const b = { x: p.x - S / 2, y: p.y - S / 2, w: S, h: S };
  const t = { ...b };
  let target = null, visible = false, labelText = '';
  const k = reduced ? 1 : .2;

  function aim() {
    if (target && target.isConnected) {
      const r = target.getBoundingClientRect();
      const pad = 7;
      t.x = r.left - pad; t.y = r.top - pad; t.w = r.width + pad * 2; t.h = r.height + pad * 2;
    } else {
      const s = labelText ? 58 : S;
      t.x = p.x - s / 2; t.y = p.y - s / 2; t.w = s; t.h = s;
    }
  }

  function frame() {
    aim();
    b.x += (t.x - b.x) * k; b.y += (t.y - b.y) * k;
    b.w += (t.w - b.w) * k; b.h += (t.h - b.h) * k;
    box.style.transform = `translate3d(${b.x}px, ${b.y}px, 0)`;
    box.style.width = b.w + 'px';
    box.style.height = b.h + 'px';
    dot.style.transform = `translate3d(${p.x - 2}px, ${p.y - 2}px, 0)`;
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  addEventListener('pointermove', e => {
    if (e.pointerType !== 'mouse') return;
    p.x = e.clientX; p.y = e.clientY;
    if (!visible) { visible = true; el.style.opacity = 1; }
    const over = e.target.closest?.(LOCK);
    const big = over && over.getBoundingClientRect().width > 520;
    const next = over && !big && !over.matches('input, textarea') ? over : null;
    if (next !== target) {
      target = next;
      el.classList.toggle('is-locked', !!target);
      if (target) sound.tick();
    }
    const lab = e.target.closest?.('[data-cursor]');
    const txt = !target && lab ? lab.getAttribute('data-cursor') : '';
    if (txt !== labelText) {
      labelText = txt;
      label.textContent = txt;
      el.classList.toggle('has-label', !!txt);
    }
    el.classList.toggle('is-text', !!e.target.closest?.('input, textarea'));
  }, { passive: true });

  document.addEventListener('pointerleave', () => { visible = false; el.style.opacity = 0; });
  addEventListener('pointerdown', () => el.classList.add('is-down'));
  addEventListener('pointerup', () => el.classList.remove('is-down'));
  addEventListener('scroll', () => { if (target) aim(); }, { passive: true });

  return { release() { target = null; el.classList.remove('is-locked'); } };
}

// Buttons that lean towards the pointer.
export function magnetic(gsap) {
  if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  document.querySelectorAll('[data-magnetic]').forEach(btn => {
    const xTo = gsap.quickTo(btn, 'x', { duration: .6, ease: 'power3.out' });
    const yTo = gsap.quickTo(btn, 'y', { duration: .6, ease: 'power3.out' });
    btn.addEventListener('pointermove', e => {
      const r = btn.getBoundingClientRect();
      xTo((e.clientX - (r.left + r.width / 2)) * .28);
      yTo((e.clientY - (r.top + r.height / 2)) * .38);
    });
    btn.addEventListener('pointerleave', () => { xTo(0); yTo(0); });
  });
}
