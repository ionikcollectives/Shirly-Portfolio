// Hero: a real-time 3D cine lens with a working nine-blade iris.
// Tungsten key light, warm rim light, dust drifting in the projector beam.
import {
  WebGLRenderer, Scene, PerspectiveCamera, Group, Mesh, Points, Color,
  LatheGeometry, RingGeometry, CylinderGeometry, SphereGeometry, TorusGeometry, ConeGeometry, CircleGeometry,
  BufferGeometry, BufferAttribute, Float32BufferAttribute, Vector2, Vector3,
  MeshStandardMaterial, MeshPhysicalMaterial, MeshBasicMaterial, PointsMaterial,
  DirectionalLight, PointLight, CanvasTexture, SRGBColorSpace, ACESFilmicToneMapping,
  DoubleSide, BackSide, AdditiveBlending, NormalBlending, PMREMGenerator, MathUtils
} from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

const BLADES = 9;
const BORE = 1.19;          // inner radius of the barrel
const R_BLADE = 1.26;       // blade outer radius (hidden behind the bore wall)
const R_OPEN = 1.3;         // aperture radius when fully open
const R_REST = 0.46;        // resting aperture

const easeInOut = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

function ringText(text, { size = 2048, inner, outer, font, color, ticks = 0, tickColor, accentArc }) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const g = c.getContext('2d');
  const s = size / 2;
  g.fillStyle = '#17110d';
  g.fillRect(0, 0, size, size);
  // subtle machining rings
  for (let i = 0; i < 40; i++) {
    const r = (inner + (outer - inner) * (i / 40)) / outer * s;
    g.strokeStyle = `rgba(255,240,220,${i % 2 ? .018 : .035})`;
    g.lineWidth = 2;
    g.beginPath(); g.arc(s, s, r, 0, Math.PI * 2); g.stroke();
  }
  const mid = (inner + (outer - inner) * .36) / outer * s;
  g.translate(s, s);
  g.fillStyle = color;
  g.font = font;
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  const chars = [...text];
  const step = (Math.PI * 2) / chars.length;
  chars.forEach((ch, i) => {
    g.save();
    g.rotate(i * step - Math.PI / 2 + Math.PI / 2);
    g.translate(0, -mid);
    g.fillText(ch, 0, 0);
    g.restore();
  });
  if (ticks) {
    g.strokeStyle = tickColor || color;
    g.lineWidth = 3;
    for (let i = 0; i < ticks; i++) {
      g.save();
      g.rotate((i / ticks) * Math.PI * 2);
      const r0 = (outer - .025) / outer * s, r1 = (outer - (i % 5 ? .045 : .075)) / outer * s;
      g.beginPath(); g.moveTo(0, -r0); g.lineTo(0, -r1); g.stroke();
      g.restore();
    }
  }
  if (accentArc) {
    g.strokeStyle = accentArc;
    g.lineWidth = 7;
    g.beginPath(); g.arc(0, 0, (inner + .03) / outer * s, 0, Math.PI * 2); g.stroke();
  }
  const t = new CanvasTexture(c);
  t.colorSpace = SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}

function bandText(items, { w = 2048, h = 90, color, accent }) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const g = c.getContext('2d');
  g.fillStyle = '#16100c';
  g.fillRect(0, 0, w, h);
  g.fillStyle = color;
  g.font = `500 ${h * .34}px "Hanken Grotesk", Arial, sans-serif`;
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  const n = items.length;
  for (let rep = 0; rep < 2; rep++) {
    items.forEach((it, i) => {
      const x = ((i + rep * n) / (n * 2)) * w + w / (n * 4);
      g.fillStyle = it.accent ? accent : color;
      g.fillText(it.t, x, h * .58);
      g.fillRect(x - 1.5, 4, 3, h * .18);
    });
  }
  const t = new CanvasTexture(c);
  t.colorSpace = SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}

function glowTexture(stops) {
  const c = document.createElement('canvas');
  c.width = c.height = 512;
  const g = c.getContext('2d');
  const gr = g.createRadialGradient(256, 256, 0, 256, 256, 256);
  stops.forEach(([o, col]) => gr.addColorStop(o, col));
  g.fillStyle = gr;
  g.fillRect(0, 0, 512, 512);
  const t = new CanvasTexture(c);
  t.colorSpace = SRGBColorSpace;
  return t;
}

function beamTexture() {
  const c = document.createElement('canvas');
  c.width = 8; c.height = 256;
  const g = c.getContext('2d');
  const gr = g.createLinearGradient(0, 0, 0, 256);
  gr.addColorStop(0, 'rgba(255,230,200,.9)');
  gr.addColorStop(.4, 'rgba(255,214,170,.25)');
  gr.addColorStop(1, 'rgba(255,220,180,0)');
  g.fillStyle = gr;
  g.fillRect(0, 0, 8, 256);
  const t = new CanvasTexture(c);
  t.colorSpace = SRGBColorSpace;
  return t;
}

function dotTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d');
  const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  gr.addColorStop(0, 'rgba(255,255,255,1)');
  gr.addColorStop(.4, 'rgba(255,255,255,.5)');
  gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr;
  g.fillRect(0, 0, 64, 64);
  return new CanvasTexture(c);
}

// One iris blade: the part of the disc (radius R_BLADE) beyond a chord at
// distance r from the centre. Vertex count stays fixed so we can update in place.
const ARC = 36;
function bladeGeometry() {
  const g = new BufferGeometry();
  const verts = new Float32Array((ARC + 1) * 3);
  const idx = [];
  // arc runs clockwise, so wind (centre, k+1, k) to face +z (towards the camera)
  for (let k = 1; k < ARC; k++) idx.push(0, k + 1, k);
  idx.push(0, 1, ARC);
  g.setAttribute('position', new BufferAttribute(verts, 3));
  g.setAttribute('normal', new Float32BufferAttribute(new Array((ARC + 1) * 3).fill(0).map((_, i) => (i % 3 === 2 ? 1 : 0)), 3));
  g.setIndex(idx);
  return g;
}
function updateBlade(g, r) {
  const p = g.attributes.position.array;
  r = Math.min(r, R_BLADE - .001);
  const a0 = Math.acos(r / R_BLADE);
  // centre of fan
  p[0] = (r + R_BLADE) / 2; p[1] = 0; p[2] = 0;
  for (let k = 0; k < ARC; k++) {
    const a = a0 - (k / (ARC - 1)) * a0 * 2;
    p[(k + 1) * 3] = Math.cos(a) * R_BLADE;
    p[(k + 1) * 3 + 1] = Math.sin(a) * R_BLADE;
    p[(k + 1) * 3 + 2] = 0;
  }
  // replace the two arc ends with chord ends so the inner edge is straight
  p[3] = r; p[4] = Math.sqrt(R_BLADE * R_BLADE - r * r);
  p[ARC * 3] = r; p[ARC * 3 + 1] = -Math.sqrt(R_BLADE * R_BLADE - r * r);
  g.attributes.position.needsUpdate = true;
  g.computeBoundingSphere();
}

export function createLens(canvas, { reduced = false, onFrame, getAvoid } = {}) {
  let renderer;
  try {
    renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  } catch (e) {
    return null;
  }
  if (!renderer.getContext()) return null;

  const isSmall = () => innerWidth < 760;
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, isSmall() ? 1.5 : 1.75));
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.setClearColor(0x000000, 0);

  const scene = new Scene();
  const pmrem = new PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), .04).texture;
  scene.environmentIntensity = .62;

  const camera = new PerspectiveCamera(30, 1, .1, 100);
  camera.position.set(0, 0, 9);

  // ---------- Lens body ----------
  const rig = new Group();     // positioned on screen
  const lens = new Group();    // rotated by pointer / scroll
  rig.add(lens);
  scene.add(rig);

  const metal = new MeshStandardMaterial({ color: '#1b1511', metalness: .78, roughness: .36, envMapIntensity: 1.1, side: DoubleSide });
  const satin = new MeshStandardMaterial({ color: '#211913', metalness: .55, roughness: .5, envMapIntensity: .9, side: DoubleSide });
  const rubber = new MeshStandardMaterial({ color: '#130e0b', metalness: .15, roughness: .78, side: DoubleSide });
  const matte = new MeshStandardMaterial({ color: '#0a0705', metalness: .1, roughness: .95, side: BackSide });

  const lathe = (pts, mat, seg = 128) => {
    const g = new LatheGeometry(pts.map(([x, y]) => new Vector2(x, y)), seg);
    g.rotateX(-Math.PI / 2);          // lathe y → -z (positive y sits behind the face)
    const m = new Mesh(g, mat);
    lens.add(m);
    return m;
  };
  // rear barrel + mount  (profile: [radius, depth behind the face])
  lathe([[1.06, 2.6], [1.08, 2.3], [1.22, 2.25], [1.24, 1.5], [1.36, 1.45], [1.37, 1.0]], satin);
  // focus grip ridges
  const ridges = [];
  for (let i = 0; i <= 34; i++) {
    const z = 1.0 - i * .026;
    ridges.push([i % 2 ? 1.47 : 1.5, z]);
  }
  lathe([[1.37, 1.0], ...ridges, [1.44, .1]], rubber, 160);
  // front ring
  lathe([[1.44, .1], [1.55, .05], [1.56, -.24], [1.52, -.3], [1.43, -.32]], metal);

  // aperture scale band (visible when lens turns)
  const band = new Mesh(
    new CylinderGeometry(1.372, 1.372, .38, 160, 1, true),
    new MeshStandardMaterial({
      map: bandText(
        [{ t: '1.4' }, { t: '2' }, { t: '2.8', accent: true }, { t: '4' }, { t: '5.6' }, { t: '8' }, { t: '11' }, { t: '16' }],
        { color: '#d8c8ae', accent: '#e2a05b' }
      ),
      metalness: .4, roughness: .55
    })
  );
  band.rotation.x = Math.PI / 2;
  band.position.z = -1.22;
  lens.add(band);

  // front face with engraving
  const faceTex = ringText('SHIRLY P. DELANKAWALA  •  TELEDRAMA DIRECTOR  •  COLOMBO  •  T1.5  •  Ø 95 MM  •  ', {
    inner: BORE, outer: 1.43, font: '600 40px "Hanken Grotesk", Arial, sans-serif',
    color: 'rgba(222,206,180,.92)', ticks: 120, tickColor: 'rgba(222,206,180,.35)'
  });
  const face = new Mesh(new RingGeometry(BORE, 1.43, 160, 1), new MeshStandardMaterial({ map: faceTex, metalness: .5, roughness: .42 }));
  face.position.z = .32;
  lens.add(face);

  // copper signature ring
  const accentMat = new MeshStandardMaterial({ color: '#c9803f', metalness: .6, roughness: .28, emissive: '#5a2e0c', emissiveIntensity: .4 });
  const accentRing = new Mesh(new TorusGeometry(1.495, .018, 12, 200), accentMat);
  accentRing.position.z = .02;
  lens.add(accentRing);

  // bore wall
  const bore = new Mesh(new CylinderGeometry(BORE, BORE, .9, 128, 1, true), matte);
  bore.rotation.x = Math.PI / 2;
  bore.position.z = -.1;
  lens.add(bore);

  // ---------- Iris ----------
  const iris = new Group();
  iris.position.z = -.38;
  lens.add(iris);
  const bladeMat = new MeshStandardMaterial({ color: '#2a211b', metalness: .7, roughness: .42, side: DoubleSide, envMapIntensity: .55 });
  const blades = [];
  for (let i = 0; i < BLADES; i++) {
    const holder = new Group();
    holder.rotation.z = (i / BLADES) * Math.PI * 2;
    const tilt = new Group();
    tilt.rotation.x = .12;               // shingle overlap: one edge up, one down
    tilt.rotation.y = -.06;
    tilt.position.z = i * .0015;
    const geo = bladeGeometry();
    const mesh = new Mesh(geo, bladeMat);
    tilt.add(mesh);
    holder.add(tilt);
    iris.add(holder);
    blades.push(geo);
  }

  // light behind the iris
  const glowMat = new MeshBasicMaterial({
    map: glowTexture([[0, 'rgba(255,246,228,1)'], [.25, 'rgba(255,214,164,.95)'], [.6, 'rgba(214,132,70,.45)'], [1, 'rgba(120,60,20,0)']]),
    transparent: true, depthWrite: false, blending: AdditiveBlending
  });
  const glow = new Mesh(new CircleGeometry(1.22, 64), glowMat);
  glow.position.z = -1.0;
  lens.add(glow);
  const back = new Mesh(new CircleGeometry(1.2, 64), new MeshBasicMaterial({ color: '#0d0907' }));
  back.position.z = -1.05;
  lens.add(back);

  // inner element (adds depth reflections)
  const innerGlass = new Mesh(
    new SphereGeometry(2.6, 64, 16, 0, Math.PI * 2, 0, .45),
    new MeshPhysicalMaterial({ color: '#ffffff', metalness: 0, roughness: .04, transparent: true, opacity: .05, envMapIntensity: 1.1, iridescence: .8, iridescenceIOR: 1.35, depthWrite: false })
  );
  innerGlass.rotation.x = Math.PI / 2;
  innerGlass.position.z = -3.2;
  lens.add(innerGlass);

  // front element with coating sheen
  const frontGlass = new Mesh(
    new SphereGeometry(3.2, 96, 20, 0, Math.PI * 2, 0, .385),
    new MeshPhysicalMaterial({
      color: '#ffffff', metalness: 0, roughness: .02, transparent: true, opacity: .045,
      envMapIntensity: 1.3, clearcoat: 1, clearcoatRoughness: .02,
      iridescence: 1, iridescenceIOR: 1.32, depthWrite: false
    })
  );
  frontGlass.rotation.x = Math.PI / 2;
  frontGlass.position.z = -2.86;
  lens.add(frontGlass);

  // ---------- Projector beam + dust ----------
  const beam = new Mesh(
    new ConeGeometry(2.2, 7, 64, 1, true),
    new MeshBasicMaterial({ map: beamTexture(), transparent: true, opacity: .07, depthWrite: false, blending: AdditiveBlending, side: DoubleSide })
  );
  beam.rotation.x = -Math.PI / 2;
  beam.position.z = 3.8;
  lens.add(beam);

  const DUST = isSmall() ? 90 : 170;
  const dustGeo = new BufferGeometry();
  const dp = new Float32Array(DUST * 3), seeds = new Float32Array(DUST);
  for (let i = 0; i < DUST; i++) {
    const t = Math.random();
    const rad = Math.sqrt(Math.random()) * (.5 + t * 1.5);
    const a = Math.random() * Math.PI * 2;
    dp[i * 3] = Math.cos(a) * rad;
    dp[i * 3 + 1] = Math.sin(a) * rad;
    dp[i * 3 + 2] = .5 + t * 4.8;
    seeds[i] = Math.random() * 100;
  }
  dustGeo.setAttribute('position', new BufferAttribute(dp, 3));
  const dustBase = dp.slice();
  const dustMat = new PointsMaterial({
    size: .022, map: dotTexture(), transparent: true, opacity: .55, depthWrite: false,
    blending: AdditiveBlending, color: new Color('#ffdcb0'), sizeAttenuation: true
  });
  const dust = new Points(dustGeo, dustMat);
  lens.add(dust);

  // ---------- Lights ----------
  const key = new DirectionalLight('#ffd4a3', 2.4);       // tungsten key
  key.position.set(-4, 3, 6);
  scene.add(key);
  const rim = new DirectionalLight('#ffe2bd', 1.7);       // warm rim, so the barrel reads bronze rather than blue
  rim.position.set(5, 2, -4);
  scene.add(rim);
  const fill = new DirectionalLight('#ffe6c8', .5);
  fill.position.set(0, -4, 3);
  scene.add(fill);
  const spot = new PointLight('#ffe2bf', 7, 12, 1.6);     // follows the pointer, kept off-axis
  spot.position.set(0, 0, 3.5);
  scene.add(spot);

  // ---------- State ----------
  const state = {
    open: 0,            // intro 0 → 1
    progress: 0,        // scroll through hero 0 → 1
    pointer: new Vector2(0, 0),
    pointerT: new Vector2(0, 0),
    theme: 'night',
    visible: true,
    active: true,
    shut: 1,            // shutter: 1 open, 0 closed
    t: 0,
    lastR: -1
  };
  const anchor = new Vector2(.68, .45);
  const tmpV = new Vector3(), tmpE = new Vector3();
  const screen = { x: .68, y: .44, r: .18 };
  let scaleBase = 1, viewW = 1, viewH = 1;

  // Where the lens sits. It is sized and placed around the words on the opening
  // screen (getAvoid reports where they are), so the name stays readable in both
  // modes instead of running across the dark barrel.
  const CAM_Z = 9;            // camera distance at rest (it pushes in on scroll)
  const FRONT = 1.56;         // outer radius of the front ring, in scene units
  let avoid = null;
  function layout() {
    const w = canvas.clientWidth || innerWidth, h = canvas.clientHeight || innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    const halfH = Math.tan(MathUtils.degToRad(camera.fov / 2)) * CAM_Z;
    viewW = halfH * camera.aspect; viewH = halfH;
    const unit = h / (2 * halfH);                 // screen px per scene unit at the lens
    avoid = getAvoid?.() || avoid;                // keep the last good measurement
    const top = (avoid?.bar ?? 76) + 10;
    let R, cx, cy;
    if (w < 600 || w < h * .9) {
      // phones and upright tablets: centred in the space between the header and the words
      const room = avoid ? avoid.copyTop - top - 12 : h * .4;
      R = Math.max(w * .26, Math.min(w * .4, room / 2));
      cx = w * .46; cy = top + R + 4;
    } else {
      // wider screens: top right, shrunk until it clears the name's top-right corner
      R = Math.min(w * .19, h * .34);
      const min = Math.min(w * .12, h * .2);
      const edge = Math.max(w * .075, 56);        // room for the barrel and the scroll cue
      for (;;) {
        // on very wide screens the words stop short of the edge; the lens stays with them
        cx = Math.min(w, avoid?.copyRight ?? w) - edge - R * 1.18; cy = top + R;
        if (!avoid || R <= min) break;
        const dx = Math.max(0, cx - avoid.right), dy = Math.max(0, avoid.top - cy);
        if (Math.hypot(dx, dy) >= R * .88) break;  // a light kiss is fine
        R *= .96;
      }
      if (avoid) cy += Math.max(0, avoid.top - (cy + R)) * .35;
    }
    anchor.set(cx / w, cy / h);
    scaleBase = R / (FRONT * unit);
  }

  function applyTheme(t) {
    state.theme = t;
    const night = t === 'night';
    dustMat.blending = night ? AdditiveBlending : NormalBlending;
    dustMat.color.set(night ? '#ffdcb0' : '#6b4a33');
    dustMat.opacity = night ? .55 : .35;
    dustMat.needsUpdate = true;
    beam.visible = night;
    renderer.toneMappingExposure = night ? 1.05 : 1.12;
    key.intensity = night ? 2.4 : 2.8;
    if (reduced) render();
  }

  function render() {
    const p = state.progress;
    const pe = easeInOut(Math.min(1, p * 1.05));

    // aperture
    const breathe = reduced ? 0 : Math.sin(state.t * .55) * .025;
    const rest = R_REST * state.open + breathe * state.open;
    const r = MathUtils.lerp(rest, R_OPEN, Math.pow(pe, 1.4)) * state.shut;
    if (Math.abs(r - state.lastR) > .0005) {
      blades.forEach(g => updateBlade(g, Math.max(.0001, r)));
      state.lastR = r;
    }
    iris.rotation.z = (1 - r / R_OPEN) * 1.15 + .2;
    glowMat.opacity = .35 + (r / R_OPEN) * .65;

    // pointer easing
    state.pointer.lerp(state.pointerT, reduced ? 1 : .06);
    const px = state.pointer.x, py = state.pointer.y;

    // placement: drift to centre as we push in
    const ax = MathUtils.lerp(anchor.x, .5, pe), ay = MathUtils.lerp(anchor.y, .5, pe);
    rig.position.x = (ax - .5) * 2 * viewW;
    rig.position.y = -(ay - .5) * 2 * viewH;
    const s = scaleBase * (1 + pe * .15);
    rig.scale.setScalar(s);

    const turn = 1 - pe;
    lens.rotation.y = (-.42 + px * .22) * turn;
    lens.rotation.x = (.14 - py * .16) * turn;
    lens.rotation.z = state.t * .01;

    camera.position.z = MathUtils.lerp(9, 1.15, Math.pow(pe, 1.8));
    camera.position.x = rig.position.x * Math.pow(pe, 1.5);
    camera.position.y = rig.position.y * Math.pow(pe, 1.5);
    camera.lookAt(rig.position.x * pe, rig.position.y * pe, 0);

    spot.position.set(rig.position.x - 1.8 + px * 3.2, rig.position.y + 1.4 - py * 2.4, 2.4);

    // dust drift
    if (!reduced) {
      const a = dustGeo.attributes.position.array;
      for (let i = 0; i < DUST; i++) {
        const sd = seeds[i];
        a[i * 3] = dustBase[i * 3] + Math.sin(state.t * .2 + sd) * .12;
        a[i * 3 + 1] = dustBase[i * 3 + 1] + Math.sin(state.t * .07 + sd * 1.7) * .5 + Math.cos(state.t * .3 + sd) * .06;
      }
      dustGeo.attributes.position.needsUpdate = true;
    }
    dustMat.opacity = (state.theme === 'night' ? .55 : .35) * state.open * (1 - pe);
    beam.material.opacity = .07 * state.open * (1 - pe);

    renderer.render(scene, camera);

    // screen position and radius of the lens front, for hit-testing and the flood
    const v = tmpV.setFromMatrixPosition(rig.matrixWorld).project(camera);
    screen.x = (v.x + 1) / 2; screen.y = (1 - v.y) / 2;
    const e = tmpE.set(1.55, 0, 0).applyMatrix4(rig.matrixWorld).project(camera);
    screen.r = Math.abs(e.x - v.x) / 2;     // as a fraction of the canvas width
    if (onFrame) onFrame({ x: screen.x, y: screen.y, r, progress: p });
  }

  let raf = 0, last = performance.now();
  // adaptive quality: drop resolution if frames are slow
  let slow = 0, dprCap = Math.min(devicePixelRatio || 1, isSmall() ? 1.5 : 1.75);
  function loop(now) {
    raf = requestAnimationFrame(loop);
    if (!state.visible || !state.active || document.hidden) { last = now; return; }
    const ms = now - last;
    const dt = Math.min(.05, ms / 1000);
    last = now;
    state.t += dt;
    if (ms > 28 && ms < 400) slow++; else if (slow > 0) slow -= .5;
    if (slow > 40 && dprCap > 1) {
      dprCap = Math.max(1, dprCap - .35); slow = 0;
      renderer.setPixelRatio(dprCap); layout();
    }
    render();
  }

  layout();
  const ro = new ResizeObserver(() => { layout(); render(); });
  ro.observe(canvas);
  const io = new IntersectionObserver(([e]) => { state.visible = e.isIntersecting; }, { threshold: 0 });
  io.observe(canvas);

  if (!reduced) raf = requestAnimationFrame(loop);
  render();

  return {
    setPointer(x, y) { state.pointerT.set(x, y); if (reduced) render(); },
    setProgress(p) { state.progress = p; if (reduced) render(); },
    setOpen(v) { state.open = v; if (reduced) render(); },
    setActive(v) { state.active = v; if (v) render(); },
    setShutter(v) { state.shut = v; if (reduced || !state.active) render(); },
    // is a point (client px) over the lens front?
    hit(cx, cy) {
      const rect = canvas.getBoundingClientRect();
      const dx = cx - (rect.left + screen.x * rect.width), dy = cy - (rect.top + screen.y * rect.height);
      return Math.hypot(dx, dy) < screen.r * rect.width * 1.05;
    },
    get progress() { return state.progress; },
    get open() { return state.open; },
    setTheme: applyTheme,
    relayout() { layout(); render(); },
    render,
    destroy() { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); renderer.dispose(); }
  };
}
