// Optional sound design, synthesised with the Web Audio API (no audio files).
// Off by default; the visitor turns it on with the Sound button.
let ctx = null, master = null, noise = null, ambient = null;
let enabled = false;
const listeners = new Set();

function init() {
  if (ctx) return;
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return;
  ctx = new AC();
  master = ctx.createGain();
  master.gain.value = .9;
  master.connect(ctx.destination);
  const len = ctx.sampleRate * 2;
  noise = ctx.createBuffer(1, len, ctx.sampleRate);
  const d = noise.getChannelData(0);
  let last = 0;
  for (let i = 0; i < len; i++) {
    const white = Math.random() * 2 - 1;
    last = (last + .02 * white) / 1.02;          // brown-ish
    d[i] = i % 2 ? white * .5 : last * 3.5;
  }
}

function burst({ t = 0, dur = .012, freq = 4200, q = 1.5, gain = .05, type = 'bandpass' } = {}) {
  if (!enabled || !ctx) return;
  const now = ctx.currentTime + t;
  const src = ctx.createBufferSource();
  src.buffer = noise;
  const f = ctx.createBiquadFilter();
  f.type = type; f.frequency.value = freq; f.Q.value = q;
  const g = ctx.createGain();
  g.gain.setValueAtTime(0, now);
  g.gain.linearRampToValueAtTime(gain, now + .002);
  g.gain.exponentialRampToValueAtTime(.0001, now + dur);
  src.connect(f).connect(g).connect(master);
  src.start(now, Math.random() * 1.5);
  src.stop(now + dur + .05);
}

function thump(t = 0, freq = 90, gain = .06) {
  if (!enabled || !ctx) return;
  const now = ctx.currentTime + t;
  const o = ctx.createOscillator();
  o.frequency.setValueAtTime(freq, now);
  o.frequency.exponentialRampToValueAtTime(freq * .5, now + .08);
  const g = ctx.createGain();
  g.gain.setValueAtTime(gain, now);
  g.gain.exponentialRampToValueAtTime(.0001, now + .1);
  o.connect(g).connect(master);
  o.start(now); o.stop(now + .12);
}

function startAmbient() {
  if (!ctx || ambient) return;
  const src = ctx.createBufferSource();
  src.buffer = noise; src.loop = true;
  const lp = ctx.createBiquadFilter();
  lp.type = 'lowpass'; lp.frequency.value = 520;
  const g = ctx.createGain();
  g.gain.value = 0;
  // 24 fps shutter flutter
  const lfo = ctx.createOscillator();
  lfo.frequency.value = 24;
  const depth = ctx.createGain();
  depth.gain.value = .006;
  lfo.connect(depth).connect(g.gain);
  src.connect(lp).connect(g).connect(master);
  src.start(); lfo.start();
  g.gain.linearRampToValueAtTime(.016, ctx.currentTime + 1.2);
  ambient = { src, lfo, g };
}
function stopAmbient() {
  if (!ambient) return;
  const { src, lfo, g } = ambient;
  g.gain.cancelScheduledValues(ctx.currentTime);
  g.gain.setValueAtTime(g.gain.value, ctx.currentTime);
  g.gain.linearRampToValueAtTime(0, ctx.currentTime + .4);
  setTimeout(() => { try { src.stop(); lfo.stop(); } catch (e) {} }, 500);
  ambient = null;
}

export const sound = {
  get enabled() { return enabled; },
  onChange(fn) { listeners.add(fn); },
  async set(on) {
    if (on) {
      init();
      if (!ctx) return;
      try { await ctx.resume(); } catch (e) { return; }
      enabled = true;
      startAmbient();
      this.shutter();
    } else {
      enabled = false;
      stopAmbient();
    }
    try { localStorage.setItem('spd-sound', on ? '1' : '0'); } catch (e) {}
    listeners.forEach(f => f(enabled));
  },
  toggle() { return this.set(!enabled); },
  tick() { burst({ dur: .01, freq: 5200, gain: .018 }); },
  click() { burst({ dur: .02, freq: 2600, gain: .05 }); thump(0, 140, .025); },
  shutter() { burst({ dur: .025, freq: 3200, gain: .07 }); thump(0, 110, .04); burst({ t: .06, dur: .03, freq: 2400, gain: .05 }); },
  whoosh(dur = .55) {
    if (!enabled || !ctx) return;
    const now = ctx.currentTime;
    const src = ctx.createBufferSource();
    src.buffer = noise;
    const f = ctx.createBiquadFilter();
    f.type = 'bandpass'; f.Q.value = .9;
    f.frequency.setValueAtTime(300, now);
    f.frequency.exponentialRampToValueAtTime(2600, now + dur * .6);
    f.frequency.exponentialRampToValueAtTime(900, now + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, now);
    g.gain.linearRampToValueAtTime(.07, now + dur * .35);
    g.gain.linearRampToValueAtTime(0, now + dur);
    src.connect(f).connect(g).connect(master);
    src.start(now, Math.random()); src.stop(now + dur + .05);
  },
  iris() { this.whoosh(.7); for (let i = 0; i < 6; i++) burst({ t: i * .05, dur: .012, freq: 3000 + i * 300, gain: .02 }); }
};
