// Full-screen mechanical iris, drawn on a 2D canvas.
// Used for the opening reveal and for jumps between sections.
const N = 9;

export function createIris(canvas) {
  const ctx = canvas.getContext('2d');
  let w = 0, h = 0, cx = 0, cy = 0, maxR = 0, value = 1, raf = 0;

  function resize() {
    const dpr = Math.min(devicePixelRatio || 1, 1.5);
    w = innerWidth; h = innerHeight;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    cx = w / 2; cy = h / 2;
    maxR = Math.hypot(w, h) / 2 + 60;
    draw(value);
  }

  // open: 0 = closed, 1 = fully open
  function draw(open) {
    value = open;
    ctx.clearRect(0, 0, w, h);
    if (open >= 1) return;
    const r = Math.max(0, open) * maxR;
    const twist = (1 - open) * 1.05;
    const far = maxR * 2.4;
    for (let i = 0; i < N; i++) {
      const a = (i / N) * Math.PI * 2 + twist;
      const dx = Math.cos(a), dy = Math.sin(a);
      const px = -dy, py = dx;
      // chord on the inner edge, then out past the screen
      const ix = cx + dx * r, iy = cy + dy * r;
      const L = far;
      ctx.beginPath();
      ctx.moveTo(ix - px * L, iy - py * L);
      ctx.lineTo(ix + px * L * .35, iy + py * L * .35);
      ctx.lineTo(ix + px * L * .35 + dx * far, iy + py * L * .35 + dy * far);
      ctx.lineTo(ix - px * L + dx * far, iy - py * L + dy * far);
      ctx.closePath();
      const g = ctx.createLinearGradient(ix, iy, ix + dx * maxR, iy + dy * maxR);
      g.addColorStop(0, i % 2 ? '#2A1F17' : '#261C15');
      g.addColorStop(.35, '#1C140F');
      g.addColorStop(1, '#130D0A');
      ctx.fillStyle = g;
      ctx.shadowColor = 'rgba(0,0,0,.55)';
      ctx.shadowBlur = 28;
      ctx.fill();
      ctx.shadowBlur = 0;
      // machined edge highlight
      ctx.beginPath();
      ctx.moveTo(ix - px * L, iy - py * L);
      ctx.lineTo(ix + px * L * .35, iy + py * L * .35);
      ctx.strokeStyle = 'rgba(234,223,204,.16)';
      ctx.lineWidth = 1.2;
      ctx.stroke();
    }
    // faint copper glint in the centre while closing
    if (open < .25) {
      const glint = ctx.createRadialGradient(cx, cy, 0, cx, cy, 160);
      glint.addColorStop(0, `rgba(226,160,91,${.14 * (1 - open * 4)})`);
      glint.addColorStop(1, 'rgba(226,160,91,0)');
      ctx.fillStyle = glint;
      ctx.fillRect(cx - 160, cy - 160, 320, 320);
    }
  }

  function tween(to, duration, ease) {
    cancelAnimationFrame(raf);
    canvas.classList.remove('is-idle');
    const from = value, t0 = performance.now();
    return new Promise(res => {
      const step = now => {
        const t = Math.min(1, (now - t0) / duration);
        draw(from + (to - from) * ease(t));
        if (t < 1) raf = requestAnimationFrame(step);
        else { if (to >= 1) canvas.classList.add('is-idle'); res(); }
      };
      raf = requestAnimationFrame(step);
    });
  }

  const easeIn = t => t * t * t;
  const easeOut = t => 1 - Math.pow(1 - t, 4);

  addEventListener('resize', resize);
  resize();

  return {
    set(v) { canvas.classList.toggle('is-idle', v >= 1); draw(v); },
    open: (d = 1100) => tween(1, d, easeOut),
    close: (d = 520) => tween(0, d, easeIn),
    async transition(mid) {
      canvas.style.pointerEvents = 'auto';
      await tween(0, 520, easeIn);
      await mid?.();
      await new Promise(r => setTimeout(r, 90));
      await tween(1, 780, easeOut);
      canvas.style.pointerEvents = '';
    }
  };
}
