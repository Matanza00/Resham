import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const isTouch = matchMedia('(hover: none)').matches;
const money = n => '$' + n.toLocaleString('en-US');
const money2 = n => '$' + n.toLocaleString('en-US', { minimumFractionDigits: Number.isInteger(n) ? 0 : 2, maximumFractionDigits: 2 });

/* =========================================================
   Catalogue
   ========================================================= */
const products = [
  { id: 'p1', name: 'Gul organza set', fabric: 'Organza, floral threadwork, 3 pieces', price: 248, img: 'look', pos: '50% 20%', col: 'lawn', tag: 'New',
    occ: ['guest', 'party'], feel: 'light', pal: 'pastel', why: 'Soft ivory organza with pink and sage flowers. Light enough to dance in all night.' },
  { id: 'p2', name: 'Sabz chikan kurta', fabric: 'Cotton lawn, chikankari', price: 132, img: 'lawn', pos: '50% 25%', col: 'lawn',
    occ: ['day', 'party'], feel: 'light', pal: 'pastel', why: 'Featherweight lawn with white chikankari. Cool on the hottest days.' },
  { id: 'p3', name: 'Anaar raw-silk set', fabric: 'Raw silk, gota patti', price: 286, img: 'festive', pos: '50% 25%', col: 'festive', tag: 'Few left',
    occ: ['party', 'guest'], feel: 'rich', pal: 'jewel', why: 'Pomegranate raw silk edged in gold gota that catches every lamp in the room.' },
  { id: 'p4', name: 'Shisha mirror dupatta', fabric: 'Silk, hand mirror work', price: 74, img: 'mirror', pos: '50% 50%', col: 'festive',
    occ: ['party', 'day', 'guest'], feel: 'rich', pal: 'jewel', why: 'One dupatta that turns a plain outfit festive. Hundreds of hand-set mirrors.' },
  { id: 'p5', name: 'Neel block-print co-ord', fabric: 'Cotton, hand block print', price: 98, img: 'pret', pos: '50% 30%', col: 'pret',
    occ: ['day'], feel: 'light', pal: 'indigo', why: 'Cool cotton, easy to wash, and printed by hand in natural indigo.' },
  { id: 'p6', name: 'Surkh zardozi lehenga', fabric: 'Velvet, zardozi, made to order', price: 2400, img: 'bridal', pos: '50% 30%', col: 'bridal', fitting: true,
    occ: ['bride'], feel: 'rich', pal: 'jewel', why: 'Crimson velvet worked in gold zardozi over eight weeks, fitted to you.' }
];
const lookItems = [
  { id: 'l1', name: 'Gul organza kurta', note: 'Ivory, pink and sage threadwork', price: 164, pos: '50% 38%' },
  { id: 'l2', name: 'Scalloped organza dupatta', note: 'Blush, embroidered edge', price: 72, pos: '72% 58%' },
  { id: 'l3', name: 'Embroidered straight trousers', note: 'Ivory cotton silk', price: 48, pos: '45% 86%' },
  { id: 'l4', name: 'Embroidered juttis', note: 'Hand-stitched leather', price: 56, pos: '45% 98%' },
  { id: 'l5', name: 'Gold drop earrings', note: 'Gold-plated silver', price: 38, pos: '54% 10%' }
];
const allItems = Object.fromEntries([...products, ...lookItems.map(i => ({ ...i, img: 'look' }))].map(p => [p.id, p]));

/* =========================================================
   Embroidery textures, drawn procedurally
   ========================================================= */
function makePattern(kind, W, H) {
  const c = document.createElement('canvas'); c.width = W; c.height = H;
  const m = document.createElement('canvas'); m.width = W / 2; m.height = H / 2;
  const cx = c.getContext('2d'), mx = m.getContext('2d');
  mx.scale(.5, .5);
  const rand = (() => { let s = 1234 + kind * 99; return () => (s = (s * 16807) % 2147483647) / 2147483647; })();

  const P = [
    { base: '#CFE5D6', a: '#FFFFFF', b: '#F2FBF4', gold: null },
    { base: '#8C1336', a: '#E7B558', b: '#F0C878', gold: '#E7B558' },
    { base: '#8A0C1C', a: '#E9C066', b: '#CFC8BA', gold: '#E9C066' },
    { base: '#22386A', a: '#EEF1F7', b: '#C9D3E8', gold: null },
    { base: '#B0185E', a: '#F29A1D', b: '#1F8A54', gold: '#E9C066' }
  ][kind];

  // both canvases are painted through `both`; mask gets white only for metallic marks
  const both = (fn, metal = 0) => {
    cx.save(); fn(cx, false); cx.restore();
    if (metal > 0) { mx.save(); fn(mx, true, metal); mx.restore(); }
  };
  cx.fillStyle = P.base; cx.fillRect(0, 0, W, H);
  mx.fillStyle = '#000'; mx.fillRect(0, 0, W, H);

  const flower = (g, x, y, r, n, col, rot = 0) => {
    g.fillStyle = col;
    for (let i = 0; i < n; i++) {
      const a = rot + i / n * Math.PI * 2;
      g.beginPath(); g.ellipse(x + Math.cos(a) * r * .55, y + Math.sin(a) * r * .55, r * .5, r * .24, a, 0, Math.PI * 2); g.fill();
    }
    g.beginPath(); g.arc(x, y, r * .18, 0, Math.PI * 2); g.fill();
  };
  const leaf = (g, x, y, s, a, col) => { g.fillStyle = col; g.beginPath(); g.ellipse(x, y, s, s * .38, a, 0, Math.PI * 2); g.fill(); };
  const stagger = (sx, sy, fn) => {
    let row = 0;
    for (let y = sy * .5; y < H; y += sy, row++) for (let x = (row % 2 ? sx : sx * .5); x < W; x += sx) fn(x, y, row);
  };
  const bw = W * .11;

  if (kind === 0) { // chikankari lawn
    both(g => {
      stagger(64, 76, (x, y, r) => {
        if (x < bw + 10 || x > W - bw - 10) return;
        g.globalAlpha = .92;
        if (r % 2) flower(g, x, y, 13, 6, P.a, .3);
        else { g.strokeStyle = P.a; g.lineWidth = 1.6; g.beginPath(); g.moveTo(x - 14, y + 10); g.quadraticCurveTo(x, y - 14, x + 14, y + 10); g.stroke();
          leaf(g, x - 9, y + 2, 6, -.9, P.a); leaf(g, x + 9, y + 2, 6, .9, P.a); g.beginPath(); g.arc(x, y - 4, 2.4, 0, 7); g.fill(); }
        g.fillStyle = P.b; for (let k = 0; k < 4; k++) { g.beginPath(); g.arc(x + 30 * Math.cos(k * 1.57 + .78), y + 30 * Math.sin(k * 1.57 + .78), 1.6, 0, 7); g.fill(); }
      });
      // borders: shadow-work band + scallops
      g.globalAlpha = .55; g.fillStyle = '#fff';
      g.fillRect(0, 0, bw, H); g.fillRect(W - bw, 0, bw, H);
      g.globalAlpha = 1;
      for (let y = 0; y < H; y += 30) { flower(g, bw * .5, y + 15, 10, 5, '#fff', y); flower(g, W - bw * .5, y + 15, 10, 5, '#fff', y); }
      g.strokeStyle = '#fff'; g.lineWidth = 2;
      for (let y = 0; y < H; y += 22) { g.beginPath(); g.arc(bw + 2, y + 11, 9, -Math.PI / 2, Math.PI / 2); g.stroke(); g.beginPath(); g.arc(W - bw - 2, y + 11, 9, Math.PI / 2, Math.PI * 1.5); g.stroke(); }
    });
  }

  if (kind === 1) { // festive gota
    both((g, mask) => {
      const col = mask ? '#fff' : P.a;
      stagger(70, 84, (x, y) => {
        if (x < bw + 12 || x > W - bw - 12) return;
        flower(g, x, y, 14, 6, col, rand() * .3);
        g.fillStyle = col; for (let k = 0; k < 6; k++) { g.beginPath(); g.arc(x + 26 * Math.cos(k * 1.047), y + 26 * Math.sin(k * 1.047), 1.8, 0, 7); g.fill(); }
      });
      g.fillStyle = col; g.fillRect(0, 0, bw, H); g.fillRect(W - bw, 0, bw, H);
      g.fillRect(0, 0, W, 46); g.fillRect(0, H - 46, W, 46);
      if (!mask) {
        g.strokeStyle = P.base; g.lineWidth = 2.2;
        for (const x0 of [bw * .5, W - bw * .5]) {
          g.beginPath(); for (let y = 0; y <= H; y += 4) g.lineTo(x0 + Math.sin(y * .06) * bw * .22, y); g.stroke();
          for (let y = 10; y < H; y += 52) { leaf(g, x0 + Math.sin(y * .06) * bw * .22 + 9, y, 8, .6, P.base); leaf(g, x0 + Math.sin((y + 26) * .06) * bw * .22 - 9, y + 26, 8, -.6, P.base); }
        }
      }
    }, 1);
  }

  if (kind === 2) { // bridal zardozi jaal
    both((g, mask) => {
      const gold = mask ? '#fff' : P.a, silver = mask ? '#bbb' : P.b;
      g.strokeStyle = gold; g.lineWidth = 3.2;
      const sp = 92, amp = 22, f = Math.PI * 2 / 180;
      for (let x0 = bw + sp * .5; x0 < W - bw; x0 += sp) {
        for (const s of [1, -1]) { g.beginPath(); for (let y = 0; y <= H; y += 3) g.lineTo(x0 + s * amp * Math.sin(y * f), y); g.stroke(); }
        for (let y = 0; y < H; y += 90) { flower(g, x0, y, 16, 8, gold, .2); g.fillStyle = silver; g.beginPath(); g.arc(x0, y, 3.5, 0, 7); g.fill(); }
        for (let y = 45; y < H; y += 90) flower(g, x0 + sp * .5, y, 9, 5, silver, 0);
      }
      g.fillStyle = gold; g.fillRect(0, 0, bw, H); g.fillRect(W - bw, 0, bw, H);
      g.fillRect(0, 0, W, 60); g.fillRect(0, H - 60, W, 60);
      if (!mask) {
        g.fillStyle = P.base;
        for (let y = 0; y < H; y += 26) { g.beginPath(); g.arc(bw, y + 13, 10, -Math.PI / 2, Math.PI / 2); g.fill(); g.beginPath(); g.arc(W - bw, y + 13, 10, Math.PI / 2, Math.PI * 1.5); g.fill(); }
        for (let y = 20; y < H; y += 40) { flower(g, bw * .45, y, 11, 6, '#B8862F', 0); flower(g, W - bw * .45, y, 11, 6, '#B8862F', 0); }
      }
    }, 1);
  }

  if (kind === 3) { // indigo block print
    both(g => {
      stagger(78, 92, (x, y) => {
        if (x < bw + 8 || x > W - bw - 8) return;
        const j = () => (rand() - .5) * 2.4;
        g.globalAlpha = .78 + rand() * .22; g.strokeStyle = P.a; g.fillStyle = P.a; g.lineWidth = 3;
        g.beginPath(); g.moveTo(x + j(), y - 22 + j()); g.lineTo(x + 18 + j(), y + j()); g.lineTo(x + j(), y + 22 + j()); g.lineTo(x - 18 + j(), y + j()); g.closePath(); g.stroke();
        g.beginPath(); g.arc(x, y, 4.5, 0, 7); g.fill();
        for (const [dx, dy] of [[0, -32], [0, 32], [-28, 0], [28, 0]]) { g.beginPath(); g.arc(x + dx + j(), y + dy + j(), 2.4, 0, 7); g.fill(); }
      });
      g.globalAlpha = .9; g.fillStyle = P.a;
      for (const x0 of [0, W - bw]) {
        g.fillRect(x0 + (x0 ? 0 : bw - 4), 0, 4, H);
        for (let y = 0; y < H; y += 24) { g.beginPath(); g.moveTo(x0 + 6, y); g.lineTo(x0 + bw - 10, y + 12); g.lineTo(x0 + 6, y + 24); g.fill(); }
      }
    });
  }

  if (kind === 4) { // mirror work
    both((g, mask, metal) => {
      stagger(74, 80, (x, y, r) => {
        if (x < bw + 16 || x > W - bw - 16) return;
        const ring = r % 3 === 0 ? P.a : r % 3 === 1 ? P.b : (P.gold);
        if (!mask) {
          g.fillStyle = ring; for (let k = 0; k < 22; k++) { const a = k / 22 * 6.283; g.save(); g.translate(x + Math.cos(a) * 17, y + Math.sin(a) * 17); g.rotate(a); g.fillRect(-4, -1.3, 8, 2.6); g.restore(); }
          for (let k = 0; k < 6; k++) { const a = k / 6 * 6.283 + .5; leaf(g, x + Math.cos(a) * 29, y + Math.sin(a) * 29, 5, a, P.a); }
        }
        g.fillStyle = mask ? '#fff' : '#DDE6EC'; g.beginPath(); g.arc(x, y, 12, 0, 7); g.fill();
        g.fillStyle = mask ? '#999' : P.gold; for (let k = 0; k < 4; k++) { const a = k * 1.57 + .78; g.beginPath(); g.arc(x + Math.cos(a) * 34, y + Math.sin(a) * 34, 3.2, 0, 7); g.fill(); }
      });
      g.fillStyle = mask ? '#ddd' : P.gold; g.fillRect(0, 0, bw * .35, H); g.fillRect(W - bw * .35, 0, bw * .35, H);
      g.fillRect(0, 0, W, 40); g.fillRect(0, H - 40, W, 40);
      for (let y = 18; y < H; y += 34) { g.fillStyle = mask ? '#fff' : '#DDE6EC'; for (const x0 of [bw * .7, W - bw * .7]) { g.beginPath(); g.arc(x0, y, 7, 0, 7); g.fill(); } }
    }, 1);
  }

  // weave grain so the cloth reads as textile up close
  const id = cx.getImageData(0, 0, W, H), d = id.data;
  for (let i = 0; i < d.length; i += 4) {
    const px = (i / 4) % W, py = (i / 4 / W) | 0;
    const n = ((px & 1) ^ (py & 1) ? 5 : -5) + (rand() - .5) * 10;
    d[i] += n; d[i + 1] += n; d[i + 2] += n;
  }
  cx.putImageData(id, 0, 0);

  const map = new THREE.CanvasTexture(c); map.colorSpace = THREE.SRGBColorSpace; map.anisotropy = 8;
  const mask = new THREE.CanvasTexture(m);
  return { map, mask };
}

/* =========================================================
   Three.js stage: a silk dupatta + drifting sequins
   ========================================================= */
const canvas = $('#stage');
let renderer, scene, camera, group, cloth, sequins, clothMat, seqMat;
const textures = [];
const state = { a: 4, b: 4, m: 0, target: 4, prevTarget: 4 };
const pointer = { ndc: new THREE.Vector2(-9, -9), moved: false, speed: 0, lastX: 0, lastY: 0 };
let webglOK = true;

const clothVert = /* glsl */`
uniform float uTime, uAmp, uStr, uW, uL;
uniform vec2 uHit;
varying vec2 vUv; varying vec3 vN; varying vec3 vWPos; varying vec3 vT;
vec3 P(vec2 uv){
  float t = uTime, u = uv.x, v = uv.y;
  vec3 p = vec3((u - .5) * uW, (v - .5) * uL, 0.);
  float flutter = .35 + .65 * smoothstep(0., 1., 1. - v);
  float z = sin(v * 5.5 - t * 1.05 + u * 1.3) * .34
          + sin(v * 12.5 + t * 1.6 - u * 2.6) * .07
          + sin(u * 4.6 + v * 3.1 + t * .8) * .11;
  z *= uAmp * flutter;
  z += (u - .5) * sin(v * 3.6 + t * .55) * .9 * uAmp;        // twist along its length
  p.x += sin(v * 2.4 + t * .4) * .25 * uAmp;                 // lazy S-curve
  vec2 d = (uv - uHit) * vec2(uW, uL);
  float r = length(d);
  z += uStr * exp(-r * r * 2.2) * cos(r * 7. - t * 7.) * .42;  // finger ripple
  p.z += z;
  return p;
}
void main(){
  vUv = uv;
  vec3 p = P(uv);
  vec3 pu = P(uv + vec2(.004, 0.)), pv = P(uv + vec2(0., .002));
  vec3 n = normalize(cross(pu - p, pv - p));
  vN = normalize(mat3(modelMatrix) * n);
  vT = normalize(mat3(modelMatrix) * (pv - p));
  vec4 w = modelMatrix * vec4(p, 1.);
  vWPos = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`;
const clothFrag = /* glsl */`
uniform sampler2D uMapA, uMapB, uMaskA, uMaskB;
uniform float uMix, uTime, uOpacity, uWeave;
uniform vec3 uSheen;
varying vec2 vUv; varying vec3 vN; varying vec3 vWPos; varying vec3 vT;
float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
void main(){
  // fringe threads at both ends
  float endD = min(vUv.y, 1. - vUv.y);
  if (endD < .018 && fract(vUv.x * 70.) > .45) discard;
  // --- the cloth is woven: warp threads run down first, then the weft fills row by row ---
  float warpX = fract(vUv.x * 96.), warpI = floor(vUv.x * 96.);
  float rowI = floor(vUv.y * 420.);
  float warpLen = clamp((uWeave - hash(vec2(warpI, 3.)) * .3) / .4, 0., 1.);
  bool warpOn = warpX < .46 && (1. - vUv.y) < warpLen;
  float front = (uWeave - .32) / .62;
  float rowJit = (hash(vec2(rowI, 9.)) - .5) * .05 + (hash(vec2(floor(vUv.x * 12.), rowI)) - .5) * .02;
  bool weftOn = (1. - vUv.y) < front + rowJit;
  if (!weftOn && !warpOn) discard;
  // --- a new print is embroidered in, stitch by stitch, rather than cross-faded ---
  float sn = hash(vec2(floor(vUv.x * 40.), floor(vUv.y * 160.)));
  float sweep = (1. - vUv.y) * .3 + sn * .7;
  float mx = smoothstep(sweep - .05, sweep + .05, uMix * 1.1 - .05);
  vec3 base = mix(texture2D(uMapA, vUv).rgb, texture2D(uMapB, vUv).rgb, mx);
  float metal = mix(texture2D(uMaskA, vUv).r, texture2D(uMaskB, vUv).r, mx);
  vec3 N = normalize(vN); if (!gl_FrontFacing) N = -N;
  vec3 V = normalize(cameraPosition - vWPos);
  vec3 L1 = normalize(vec3(-.5, .75, .65)), L2 = normalize(vec3(.8, -.2, -.4));
  float wrap = max(dot(N, L1) * .6 + .4, 0.);
  float back = max(dot(N, L2), 0.) * .25;
  vec3 T = normalize(vT - N * dot(vT, N));
  vec3 H = normalize(L1 + V);
  float th = dot(T, H);
  float aniso = pow(sqrt(max(1. - th * th, 0.)), 70.);      // silk's long highlight across the weave
  float fres = pow(1. - max(dot(N, V), 0.), 3.);
  vec3 col = base * (wrap * .95 + .18) + base * back;
  col += aniso * .55 * mix(vec3(1.), base + .35, .45) + fres * uSheen * .45;
  // metallic thread
  float spec = pow(max(dot(N, H), 0.), 36.);
  vec3 goldCol = base * (.55 + wrap * .7) + spec * vec3(1., .86, .55) * 1.6 + aniso * .5;
  col = mix(col, goldCol, metal * .85);
  vec2 cell = floor(vUv * vec2(180., 720.));
  float g = step(.965, hash(cell)) * pow(.5 + .5 * sin(uTime * 3.2 + hash(cell + 7.) * 60.), 10.);
  col += g * metal * vec3(1.6, 1.35, 1.);
  if (!gl_FrontFacing) col *= .78;
  if (endD < .018) col = mix(col, base * .9, .4);
  if (!weftOn) col = base * (.7 + wrap * .5) + aniso * .3;                // bare warp threads
  float edgeGlow = smoothstep(.035, 0., abs((1. - vUv.y) - front - rowJit)) * step(uWeave, .995);
  col += vec3(1., .82, .5) * edgeGlow * .9;                                 // the shuttle line
  float seam = smoothstep(.06, 0., abs(mx - .5)) * step(.01, uMix) * step(uMix, .99);
  col += vec3(1., .86, .6) * seam * .35;
  gl_FragColor = vec4(col, uOpacity);
  #include <colorspace_fragment>
}`;
const seqVert = /* glsl */`
attribute vec4 aSeed; uniform float uTime;
varying float vGlint; varying vec2 vUv;
mat3 rotY(float a){ float c = cos(a), s = sin(a); return mat3(c,0.,-s, 0.,1.,0., s,0.,c); }
mat3 rotX(float a){ float c = cos(a), s = sin(a); return mat3(1.,0.,0., 0.,c,s, 0.,-s,c); }
void main(){
  vUv = uv;
  vec3 p = rotY(uTime * (.6 + aSeed.y) + aSeed.x * 20.) * rotX(aSeed.z * 6.) * position;
  vec3 off = instanceMatrix[3].xyz;
  off.y = mod(off.y + uTime * (.12 + aSeed.w * .18) + 4., 8.) - 4.;
  off.x += sin(uTime * .5 + aSeed.x * 10.) * .15;
  vGlint = pow(max(0., sin(uTime * (1.4 + aSeed.y * 2.) + aSeed.x * 30.)), 14.);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p + off, 1.);
}`;
const seqFrag = /* glsl */`
uniform float uOpacity; varying float vGlint; varying vec2 vUv;
void main(){
  float r = length(vUv - .5);
  vec3 c = mix(vec3(.82, .62, .28), vec3(1., .95, .82), vGlint);
  float ring = smoothstep(.5, .44, r) * (.55 + .45 * smoothstep(.2, .45, r));
  gl_FragColor = vec4(c * (.45 + vGlint * 2.2), ring * uOpacity * (.35 + vGlint));
}`;

const threadVert = /* glsl */`
attribute float aT; attribute float aDelay; attribute vec3 aCol;
varying float vT; varying float vD; varying vec3 vCol;
void main(){ vT = aT; vD = aDelay; vCol = aCol; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }`;
const threadFrag = /* glsl */`
uniform float uProg; varying float vT; varying float vD; varying vec3 vCol;
void main(){
  float p = clamp(uProg * 1.7 - vD, 0., 1.35);
  float a = smoothstep(p - .42, p, vT) * step(vT, p);
  if (a < .01) discard;
  gl_FragColor = vec4(vCol * (1. + smoothstep(p - .05, p, vT) * 1.5), a);
}`;
let threads, threadMat;
function buildThreads(n) {
  const SEG = 48, pos = [], aT = [], aD = [], aC = [];
  const cols = [[.95, .7, .3], [.9, .2, .45], [1, .95, .9], [.95, .78, .4]];
  for (let i = 0; i < n; i++) {
    const end = new THREE.Vector3((Math.random() - .5) * 1.4, (Math.random() - .5) * 5.6, 0);
    const a = Math.random() * Math.PI * 2, r = 4 + Math.random() * 4;
    const start = new THREE.Vector3(Math.cos(a) * r, Math.sin(a) * r * 1.2, (Math.random() - .3) * 5);
    const c1 = start.clone().lerp(end, .33).add(new THREE.Vector3((Math.random() - .5) * 3, (Math.random() - .5) * 3, Math.random() * 2));
    const c2 = start.clone().lerp(end, .7).add(new THREE.Vector3((Math.random() - .5) * 2, (Math.random() - .5) * 2, 1.5));
    const curve = new THREE.CubicBezierCurve3(start, c1, c2, end);
    const pts = curve.getPoints(SEG), col = cols[i % cols.length], d = Math.random() * .6;
    for (let k = 0; k < SEG; k++) {
      pos.push(...pts[k].toArray(), ...pts[k + 1].toArray());
      aT.push(k / SEG, (k + 1) / SEG); aD.push(d, d); aC.push(...col, ...col);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('aT', new THREE.Float32BufferAttribute(aT, 1));
  g.setAttribute('aDelay', new THREE.Float32BufferAttribute(aD, 1));
  g.setAttribute('aCol', new THREE.Float32BufferAttribute(aC, 3));
  threadMat = new THREE.ShaderMaterial({ vertexShader: threadVert, fragmentShader: threadFrag, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, uniforms: { uProg: { value: 0 } } });
  const l = new THREE.LineSegments(g, threadMat); l.frustumCulled = false; return l;
}
const threadAnim = { v: 1.4 };
function playThreads(dur = 1.9) {
  if (!threads || reduceMotion) return;
  gsap.killTweensOf(threadAnim); threadAnim.v = 0;
  gsap.to(threadAnim, { v: 1.4, duration: dur, ease: 'power1.inOut' });
}

function initStage() {
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  } catch (e) { webglOK = false; canvas.remove(); return; }
  const small = innerWidth < 760;
  renderer.setPixelRatio(Math.min(devicePixelRatio, small ? 1.75 : 2));
  renderer.setSize(innerWidth, innerHeight, false);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(35, innerWidth / innerHeight, .1, 60);
  camera.position.set(0, 0, 9);

  const TW = small ? 384 : 512, TH = TW * 4;
  for (let k = 0; k < 5; k++) textures.push(makePattern(k, TW, TH));
  textures.forEach(t => renderer.initTexture?.(t.map));

  const W = 1.5, L = 6;
  clothMat = new THREE.ShaderMaterial({
    vertexShader: clothVert, fragmentShader: clothFrag, transparent: true, side: THREE.DoubleSide, depthWrite: false,
    uniforms: {
      uTime: { value: 0 }, uAmp: { value: reduceMotion ? .35 : 1 }, uStr: { value: 0 }, uHit: { value: new THREE.Vector2(.5, .5) },
      uW: { value: W }, uL: { value: L }, uMix: { value: 0 }, uOpacity: { value: 0 }, uWeave: { value: 0 },
      uMapA: { value: textures[4].map }, uMapB: { value: textures[4].map }, uMaskA: { value: textures[4].mask }, uMaskB: { value: textures[4].mask },
      uSheen: { value: new THREE.Color('#ffd9e8') }
    }
  });
  const geo = new THREE.PlaneGeometry(W, L, small ? 36 : 56, small ? 150 : 230);
  cloth = new THREE.Mesh(geo, clothMat);
  group = new THREE.Group();
  group.add(cloth);
  threads = buildThreads(small ? 22 : 40);
  group.add(threads);

  const N = small ? 90 : 170;
  const sg = new THREE.PlaneGeometry(.075, .075);
  seqMat = new THREE.ShaderMaterial({ vertexShader: seqVert, fragmentShader: seqFrag, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
    uniforms: { uTime: { value: 0 }, uOpacity: { value: 0 } } });
  sequins = new THREE.InstancedMesh(sg, seqMat, N);
  const seed = new Float32Array(N * 4), mtx = new THREE.Matrix4();
  for (let i = 0; i < N; i++) {
    mtx.makeTranslation((Math.random() - .5) * 4.5, (Math.random() - .5) * 8, (Math.random() - .5) * 3);
    sequins.setMatrixAt(i, mtx);
    seed.set([Math.random(), Math.random(), Math.random(), Math.random()], i * 4);
  }
  sg.setAttribute('aSeed', new THREE.InstancedBufferAttribute(seed, 4));
  sequins.frustumCulled = false;
  scene.add(sequins);
  scene.add(group);
}

/* poses the cloth moves between as you scroll */
const POSES = {
  desktop: {
    hero:        { p: [2.25, .1, 0],   r: [-.35, .45, -.62], s: 1.05, o: 1,   so: 1,  w: 1 },
    collections: { p: [.6, .35, -3.2], r: [.25, .1, -1.38],  s: 1.3,  o: .9,  so: .6, w: 1 },
    craft:       { p: [2.35, .15, 0],  r: [-.2, -.38, -.32], s: .95,  o: 1,   so: .5, w: 1 },
    signup:      { p: [0, .1, -2.2],   r: [.12, 0, -1.5],    s: 1.35, o: .95, so: .9, w: 1 },
    hide:        { p: [.4, -.6, -1.4], r: [-.1, .2, -.9],    s: 1,    o: 1,   so: 0,  w: 0 }
  },
  mobile: {
    hero:        { p: [.3, 1.75, 0],   r: [-.3, .3, -1.1],   s: .5,   o: 1,   so: .8, w: 1 },
    collections: { p: [0, 2.9, -2],    r: [.2, .1, -1.5],    s: .6,   o: .55,  so: .5, w: 1 },
    craft:       { p: [-.2, 1.2, 0],   r: [-.2, -.3, -1.2],  s: .5,   o: 1,   so: .4, w: 1 },
    signup:      { p: [0, 2.35, -1.5], r: [.1, 0, -1.5],     s: .66,  o: .9,  so: .8, w: 1 },
    hide:        { p: [0, .2, -1.2],   r: [-.1, .2, -1.2],   s: .6,   o: 1,   so: 0,  w: 0 }
  }
};
const SCENE_TEX = { hero: 4, signup: 1 };
let craftTex = 0, collK = 0, collActive = false;
const cur = { p: new THREE.Vector3(2.25, .1, 0), r: new THREE.Vector3(-.35, .45, -.62), s: 1, o: 1, so: 0, w: 0 };
const sceneEls = () => $$('[data-scene]');

function scrollTargets() {
  const vh = innerHeight, mid = vh / 2;
  const set = innerWidth / innerHeight < .9 ? POSES.mobile : POSES.desktop;
  const widthK = innerWidth / innerHeight < .9 ? 1 : Math.min(1, (innerWidth / innerHeight) / 1.6);
  const acc = { p: [0, 0, 0], r: [0, 0, 0], s: 0, o: 0, so: 0, w: 0 }; let wsum = 0, best = null, bestW = 0;
  for (const el of sceneEls()) {
    const rc = el.getBoundingClientRect();
    if (rc.bottom < -vh || rc.top > vh * 2) continue;
    const dist = mid < rc.top ? (rc.top - mid) / vh : mid > rc.bottom ? (mid - rc.bottom) / vh : 0;
    const w = Math.max(0, 1 - dist / .55);
    if (!w) continue;
    const key = el.dataset.scene, pose = set[key];
    acc.p.forEach((_, i) => { acc.p[i] += pose.p[i] * w; acc.r[i] += pose.r[i] * w; });
    acc.s += pose.s * w; acc.o += pose.o * w; acc.so += pose.so * w; acc.w += pose.w * w; wsum += w;
    if (w > bestW) { bestW = w; best = key; }
  }
  if (!wsum) return { pose: set.hide, tex: null, scene: 'hide' };
  const k = 1 / wsum;
  const pose = { p: acc.p.map(v => v * k), r: acc.r.map(v => v * k), s: acc.s * k, o: acc.o * k, so: acc.so * k, w: acc.w * k };
  pose.p[0] *= widthK;
  pose.w = set[best].w;   // the section in front decides: woven or unravelled (the frame loop animates between)
  return { pose, scene: best };
}

function setTexPair(a, b, m) {
  const u = clothMat.uniforms;
  u.uMapA.value = textures[a].map; u.uMaskA.value = textures[a].mask;
  u.uMapB.value = textures[b].map; u.uMaskB.value = textures[b].mask;
  u.uMix.value = m;
}
const COLL_TEX = [0, 1, 2, 3];
function updateTexture(sceneKey, dt) {
  if (sceneKey === 'collections' && collActive) {
    const k = Math.min(Math.max(collK, 0), 2.999);
    const i = Math.floor(k);
    let f = k - i;
    f = f < .35 ? 0 : f > .65 ? 1 : (f - .35) / .3;   // hold each print, then cross-fade
    state.a = COLL_TEX[i]; state.b = COLL_TEX[i + 1]; state.m = f; state.target = f > .5 ? state.b : state.a;
    setTexPair(state.a, state.b, state.m);
    return;
  }
  let want = state.target;
  if (sceneKey === 'collections') want = COLL_TEX[0];
  else if (sceneKey === 'craft') want = craftTex;
  else if (sceneKey in SCENE_TEX) want = SCENE_TEX[sceneKey];
  const shown = state.m > .5 ? state.b : state.a;
  if (want !== state.target) {
    state.a = shown; state.b = want; state.m = state.a === want ? 1 : 0; state.target = want;
  }
  state.m = Math.min(1, state.m + dt * 1.6);
  setTexPair(state.a, state.b, state.m);
}

const raycaster = new THREE.Raycaster();
let hitStr = 0, hitUv = new THREE.Vector2(.5, .5);
function onPointer(x, y) {
  const nx = x / innerWidth * 2 - 1, ny = -(y / innerHeight) * 2 + 1;
  const dx = x - pointer.lastX, dy = y - pointer.lastY;
  pointer.speed = Math.min(1, pointer.speed + Math.hypot(dx, dy) / 160);
  pointer.lastX = x; pointer.lastY = y;
  pointer.ndc.set(nx, ny); pointer.moved = true;
}
addEventListener('pointermove', e => onPointer(e.clientX, e.clientY), { passive: true });
addEventListener('touchmove', e => { const t = e.touches[0]; if (t) onPointer(t.clientX, t.clientY); }, { passive: true });
addEventListener('touchstart', e => { const t = e.touches[0]; if (t) { pointer.lastX = t.clientX; pointer.lastY = t.clientY; } }, { passive: true });

const clock = new THREE.Clock();
let running = true;
function frame() {
  if (!running) return;
  const rawDt = clock.getDelta(), dt = Math.min(rawDt, .1), t = clock.elapsedTime;
  const { pose, scene: sk } = scrollTargets();
  const ease = 1 - Math.pow(.0025, dt);   // frame-rate independent smoothing
  cur.p.lerp(new THREE.Vector3(...pose.p), ease);
  cur.r.lerp(new THREE.Vector3(...pose.r), ease);
  cur.s += (pose.s - cur.s) * ease; cur.o += (pose.o - cur.o) * ease; cur.so += (pose.so - cur.so) * ease;
  const prevW = cur.w;
  cur.w += (pose.w - cur.w) * (1 - Math.pow(.12, dt));        // weave and unravel a little slower than the move
  if (prevW < .25 && cur.w >= .25 && introDone) playThreads(1.4);

  const tiltX = pointer.ndc.x > -2 ? pointer.ndc.y * .08 : 0, tiltY = pointer.ndc.x > -2 ? pointer.ndc.x * .12 : 0;
  group.position.copy(cur.p);
  group.rotation.set(cur.r.x - tiltX, cur.r.y + tiltY, cur.r.z);
  group.scale.setScalar(cur.s);
  sequins.position.set(cur.p.x * .6, 0, cur.p.z - .5);

  if (pointer.moved) {
    pointer.moved = false;
    raycaster.setFromCamera(pointer.ndc, camera);
    const hit = raycaster.intersectObject(cloth, false)[0];
    if (hit && hit.uv) { hitUv.lerp(hit.uv, hitStr < .05 ? 1 : .35); hitStr = Math.min(1, hitStr + pointer.speed * .9); if (cur.w > .9) { silkRub += pointer.speed; if (silkRub > 30) eggs.find('silk'); } }
  }
  pointer.speed *= .9;
  hitStr *= Math.pow(.25, dt);

  const u = clothMat.uniforms;
  u.uTime.value = reduceMotion ? t * .25 : t;
  u.uStr.value = hitStr * (reduceMotion ? .3 : 1);
  u.uHit.value.copy(hitUv);
  u.uOpacity.value = cur.o;
  u.uWeave.value = reduceMotion ? (cur.w > .5 ? 1 : 0) : Math.min(cur.w, introFade.v);
  if (threadMat) threadMat.uniforms.uProg.value = threadAnim.v;
  seqMat.uniforms.uTime.value = t; seqMat.uniforms.uOpacity.value = cur.so * introFade.v * (reduceMotion ? .4 : 1);
  updateTexture(sk, Math.min(rawDt, .25));

  canvas.style.visibility = (u.uWeave.value < .005 && threadAnim.v >= 1.4 && cur.so * introFade.v < .01) ? 'hidden' : 'visible';
  if (canvas.style.visibility === 'visible') renderer.render(scene, camera);
  requestAnimationFrame(frame);
}
const introFade = { v: 0 };
let introDone = false, silkRub = 0;

function onResize() {
  if (!webglOK) return;
  camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight, false);
}
addEventListener('resize', onResize);
document.addEventListener('visibilitychange', () => {
  if (!webglOK) return;
  if (document.hidden) running = false; else if (!running) { running = true; clock.getDelta(); requestAnimationFrame(frame); }
});

/* =========================================================
   Smooth scroll + scroll choreography
   ========================================================= */
let lenis = null;
function initScroll() {
  if (!reduceMotion) {
    lenis = new Lenis({ lerp: .1, smoothWheel: true });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(time => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }
  // anchor links
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]'); if (!a) return;
    const id = a.getAttribute('href'); if (id.length < 2) return;
    const el = $(id); if (!el) return;
    e.preventDefault();
    closeMenu();
    if (a.dataset.fitting !== undefined) { openFitting(); return; }
    if (a.dataset.filter) applyFilter(a.dataset.filter);
    if (lenis) lenis.scrollTo(el, { offset: id === '#top' ? 0 : -10, duration: 1.4 }); else el.scrollIntoView();
  });


  // header: hide on the way down, liquid-glass lens follows the section you're in
  const header = $('#header'); let lastY = 0;
  const lens = $('#navLens'), navLinks = $$('#nav a');
  const moveLens = id => {
    const a = navLinks.find(l => l.dataset.sec === id);
    if (!a) { lens.style.opacity = 0; return; }
    lens.style.opacity = 1; lens.style.width = a.offsetWidth + 'px'; lens.style.transform = `translateX(${a.offsetLeft}px)`;
  };
  navLinks.forEach(a => { const sec = $('#' + a.dataset.sec); if (sec) ScrollTrigger.create({ trigger: sec, start: 'top 50%', end: 'bottom 50%', onToggle: s => { if (s.isActive) moveLens(a.dataset.sec); } }); });
  ScrollTrigger.create({ trigger: '#hero', start: 'top top', end: 'bottom 50%', onToggle: s => { if (s.isActive) moveLens(null); } });
  ScrollTrigger.create({ trigger: '#signup', start: 'top 50%', end: 'bottom bottom', onToggle: s => { if (s.isActive) moveLens(null); } });
  const hg = $('#headerGlass');
  hg.addEventListener('pointermove', e => { const r = hg.getBoundingClientRect(); hg.style.setProperty('--gx', (e.clientX - r.left) + 'px'); hg.style.setProperty('--gy', (e.clientY - r.top) + 'px'); });
  hg.addEventListener('pointerleave', () => { hg.style.removeProperty('--gx'); hg.style.removeProperty('--gy'); });
  ScrollTrigger.create({ start: 0, end: 'max', onUpdate: self => {
    const y = self.scroll();
    header.classList.toggle('is-scrolled', y > 40);
    header.classList.toggle('is-hidden', y > 400 && y > lastY + 2 && !$('#mobileMenu').classList.contains('is-open'));
    if (y < lastY - 2 || y < 400) header.classList.remove('is-hidden');
    lastY = y;
  } });

  // collections: pinned horizontal reel on wide screens, native swipe on phones
  const track = $('#collTrack'), bars = $$('.coll-progress i');
  const mm = gsap.matchMedia();
  mm.add('(min-width: 821px)', () => {
    const dist = () => track.scrollWidth - innerWidth;
    const tween = gsap.to(track, { x: () => -dist(), ease: 'none',
      scrollTrigger: { trigger: '#collections', pin: '.coll-pin', start: 'top top', end: () => '+=' + dist(), scrub: true, invalidateOnRefresh: true,
        onUpdate: self => {
          const cardsStart = .18; // first part of the reel is the intro panel
          collK = Math.max(0, (self.progress - cardsStart) / (1 - cardsStart)) * 3;
          collActive = self.progress > 0 && self.progress < 1 || self.isActive;
          bars.forEach((b, i) => gsap.set(b, { scaleX: Math.min(1, Math.max(0, collK + 1 - i)) }));
        },
        onLeave: () => { collActive = false; }, onLeaveBack: () => { collActive = false; } } });
    $$('.coll-img img').forEach(img => gsap.fromTo(img, { xPercent: 6 }, { xPercent: -6, ease: 'none',
      scrollTrigger: { trigger: img.closest('.coll-card'), containerAnimation: tween, start: 'left right', end: 'right left', scrub: true } }));
    return () => { collActive = false; };
  });
  mm.add('(max-width: 820px)', () => {
    const onS = () => { const max = track.scrollWidth - track.clientWidth; collK = max > 0 ? track.scrollLeft / max * 3 : 0; };
    track.addEventListener('scroll', onS, { passive: true });
    const st = ScrollTrigger.create({ trigger: '#collections', start: 'top 60%', end: 'bottom 40%', onToggle: s => { collActive = s.isActive; onS(); } });
    return () => { track.removeEventListener('scroll', onS); st.kill(); collActive = false; };
  });

  // (created after the pin so positions include its scroll length)
  // light / dark body per section (sections with transparent backgrounds show the body colour)
  $$('[data-bg]').forEach(sec => ScrollTrigger.create({
    trigger: sec, start: 'top 55%', end: 'bottom 55%',
    onToggle: self => { if (self.isActive) document.body.classList.toggle('is-light', sec.dataset.bg === 'light'); }
  }));

  // running stitch sews itself in
  $$('.stitch-divider').forEach(svg => gsap.fromTo(svg, { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', ease: 'none',
    scrollTrigger: { trigger: svg, start: 'top 90%', end: 'top 40%', scrub: true } }));

  // studio photo opens out
  gsap.fromTo('#studioMedia', { clipPath: 'inset(12% 14% 12% 14% round 18px)' }, { clipPath: 'inset(0% 0% 0% 0% round 14px)', ease: 'none',
    scrollTrigger: { trigger: '#studioMedia', start: 'top 85%', end: 'center 55%', scrub: true } });
  gsap.fromTo('#studioMedia img', { scale: 1.18 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: '#studioMedia', start: 'top bottom', end: 'bottom top', scrub: true } });

  // footer wordmark drifts
  gsap.fromTo('.foot-word', { xPercent: 4 }, { xPercent: -4, ease: 'none', scrollTrigger: { trigger: 'footer', start: 'top bottom', end: 'bottom bottom', scrub: true } });
}

/* =========================================================
   Marquee that answers scroll speed
   ========================================================= */
function initMarquee() {
  const words = ['Chikankari', 'Gota patti', 'Mirror work', 'Zardozi', 'Block print', 'Phulkari', 'Tilla', 'Shadow work'];
  const star = '<svg viewBox="0 0 20 20" aria-hidden="true"><g fill="#F3B23A"><ellipse cx="10" cy="4.5" rx="2.4" ry="4.5"/><ellipse cx="10" cy="15.5" rx="2.4" ry="4.5"/><ellipse cx="4.5" cy="10" rx="4.5" ry="2.4"/><ellipse cx="15.5" cy="10" rx="4.5" ry="2.4"/></g><circle cx="10" cy="10" r="2.2" fill="#fff"/></svg>';
  const set = words.map(w => `<span>${w}${star}</span>`).join('');
  const track = $('#marquee'); track.innerHTML = set + set;
  if (reduceMotion) return;
  let x = 0, boost = 0, half = 0;
  const measure = () => { half = track.scrollWidth / 2; };
  measure(); addEventListener('resize', measure);
  gsap.ticker.add((_, dt) => {
    const v = lenis ? lenis.velocity : 0;
    boost += (Math.abs(v) * .6 - boost) * .08;
    x -= (dt / 1000) * (60 + boost * 22) * (v < -0.5 ? -1 : 1);
    if (half) { x = ((x % half) - half) % half; }
    track.style.transform = `translate3d(${x}px,0,0) skewX(${Math.max(-8, Math.min(8, -v * .35))}deg)`;
  });
}

/* =========================================================
   Craft tabs
   ========================================================= */
const stitchesSeen = new Set(['0']);
function initCraft() {
  const tabs = $$('.tech-btn'), imgs = $$('.craft-photo img');
  const select = btn => {
    tabs.forEach(b => b.setAttribute('aria-selected', String(b === btn)));
    craftTex = +btn.dataset.tech;
    imgs.forEach(i => i.classList.toggle('is-on', i.dataset.key === btn.dataset.img));
    hitStr = Math.min(1, hitStr + .8); hitUv.set(.5, .5);  // a little shiver when the print changes
    playThreads(1.3);
    stitchesSeen.add(btn.dataset.tech); if (stitchesSeen.size >= 4) eggs.find('stitches');
  };
  tabs.forEach((b, i) => {
    b.addEventListener('click', () => select(b));
    b.addEventListener('keydown', e => {
      if (!['ArrowDown', 'ArrowUp'].includes(e.key)) return;
      e.preventDefault(); const n = tabs[(i + (e.key === 'ArrowDown' ? 1 : tabs.length - 1)) % tabs.length]; n.focus(); select(n);
    });
  });
  if (isTouch) $('#touchHint').textContent = 'Touch and drag across the silk';
}

/* =========================================================
   Bag
   ========================================================= */
let bag = [];
try { bag = JSON.parse(localStorage.getItem('resham-bag') || '[]').filter(l => allItems[l.id]); } catch (e) { bag = []; }
const saveBag = () => { try { localStorage.setItem('resham-bag', JSON.stringify(bag)); } catch (e) {} };
function addToBag(id, size = 'M', qty = 1, silent = false) {
  const line = bag.find(l => l.id === id && l.size === size);
  if (line) line.qty += qty; else bag.push({ id, size, qty });
  saveBag(); renderBag();
  const c = $('#bagCount'); c.classList.remove('bump'); void c.offsetWidth; c.classList.add('bump');
  if (!silent) toast(`${allItems[id].name} added to your bag`);
}
function renderBag() {
  const list = $('#bagList');
  const count = bag.reduce((s, l) => s + l.qty, 0);
  $('#bagCount').textContent = count;
  const sub = bag.reduce((s, l) => s + allItems[l.id].price * l.qty, 0);
  const d = bestDiscount(), off = Math.round(sub * d.percent) / 100;
  $('#bagSub').textContent = money(sub);
  $('#discRow').hidden = !d.percent;
  $('#discLabel').textContent = d.percent ? `${d.label} (${d.percent}%, ${d.code})` : 'Discount';
  $('#discAmt').textContent = '−' + money2(off);
  $('#bagTotal').textContent = money2(sub - off);
  if (!bag.length) { list.innerHTML = '<li class="bag-empty">Your bag is empty. Everything in it stays here while you browse.</li>'; return; }
  list.innerHTML = bag.map((l, i) => { const p = allItems[l.id]; return `
    <li class="bag-line"><img src="img/${p.img}.webp" alt="" style="object-position:${p.pos || '50% 30%'}" width="76" height="95">
      <div><h3>${p.name}</h3><p>Size ${l.size}, ${money(p.price)} each</p>
        <div class="qty"><button aria-label="One fewer" data-dec="${i}">−</button><span aria-live="polite">${l.qty}</span><button aria-label="One more" data-inc="${i}">+</button><button class="rm" data-rm="${i}">Remove</button></div></div></li>`; }).join('');
}
function initBag() {
  renderBag();
  const drawer = $('#drawer'), scrim = $('#scrim');
  const open = () => { drawer.classList.add('is-open'); drawer.setAttribute('aria-hidden', 'false'); scrim.classList.add('is-on'); lenis?.stop(); setTimeout(() => $('#drawerClose').focus(), 300); };
  const close = () => { drawer.classList.remove('is-open'); drawer.setAttribute('aria-hidden', 'true'); scrim.classList.remove('is-on'); lenis?.start(); $('#checkoutMsg').textContent = ''; };
  window.__openBag = open;
  $('#codeForm').addEventListener('submit', e => {
    e.preventDefault();
    const code = $('#codeInput').value.trim().toUpperCase(), msg = $('#codeMsg');
    if (!code) { msg.textContent = 'Type a code, then press Apply.'; return; }
    if (code === 'RESHAM15') {
      if (eggs.count() === 5) { discounts.eggs = 15; saveDiscounts(); renderBag(); msg.textContent = 'RESHAM15 applied: 15% off.'; }
      else msg.textContent = `RESHAM15 unlocks once you find all five hidden threads. You have ${eggs.count()} of 5.`;
    } else if (discounts.voice && code === 'NOOR' + discounts.voice) { msg.textContent = `${code} is already on your bag.`; }
    else msg.textContent = `${code} isn't a code we recognise. Check the spelling and try again.`;
  });
  $('#bagBtn').addEventListener('click', open);
  $('#drawerClose').addEventListener('click', close);
  scrim.addEventListener('click', close);
  addEventListener('keydown', e => { if (e.key === 'Escape') { close(); closeMenu(); } });
  $('#bagList').addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    const i = +(b.dataset.inc ?? b.dataset.dec ?? b.dataset.rm);
    if (b.dataset.inc) bag[i].qty++;
    else if (b.dataset.dec) { bag[i].qty--; if (!bag[i].qty) bag.splice(i, 1); }
    else if (b.dataset.rm) bag.splice(i, 1);
    saveBag(); renderBag();
  });
  $('#checkout').addEventListener('click', () => {
    const d = bestDiscount();
    $('#checkoutMsg').textContent = bag.length ? `Checkout is not connected in this preview, so no order was placed.${d.percent ? ` Your ${d.percent}% (${d.code}) would apply.` : ''}` : 'Add a piece to your bag first.';
  });
}
let toastTimer;
function toast(text) {
  $('#toastText').textContent = text;
  const el = $('#toast'); el.classList.add('is-on');
  clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove('is-on'), 3200);
}

/* =========================================================
   Product grid, filters, wishlist
   ========================================================= */
function initShop() {
  const grid = $('#grid');
  grid.innerHTML = products.map(p => `
    <article class="card" data-col="${p.col}">
      <div class="card-media">
        <img src="img/${p.img}.webp" alt="${p.name}, ${p.fabric.toLowerCase()}" loading="lazy" width="960" height="1200" style="object-position:${p.pos}">
        ${p.tag ? `<span class="tag">${p.tag}</span>` : ''}
        <button class="wish" aria-pressed="false" aria-label="Save ${p.name} to wishlist"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg></button>
      </div>
      <div class="card-body">
        <h3>${p.name}</h3>
        <span class="fabric">${p.fabric}</span>
        <div class="card-row">
          <span class="price">${p.fitting ? 'From ' + money(p.price) : money(p.price)}</span>
          ${p.fitting ? '' : `<div class="sizes" role="group" aria-label="Size">${['XS', 'S', 'M', 'L', 'XL'].map(s => `<button class="size" aria-pressed="${s === 'M'}">${s}</button>`).join('')}</div>`}
        </div>
        <button class="btn ${p.fitting ? 'btn-line' : 'btn-rani'} btn-small add" data-id="${p.id}">${p.fitting ? 'Book a fitting' : 'Add to bag'}</button>
      </div>
    </article>`).join('');
  grid.addEventListener('click', e => {
    const size = e.target.closest('.size');
    if (size) { $$('.size', size.parentElement).forEach(s => s.setAttribute('aria-pressed', String(s === size))); return; }
    const wish = e.target.closest('.wish');
    if (wish) { const on = wish.getAttribute('aria-pressed') !== 'true'; wish.setAttribute('aria-pressed', String(on)); toast(on ? 'Saved to your wishlist' : 'Removed from your wishlist'); return; }
    const add = e.target.closest('.add');
    if (add) {
      const p = allItems[add.dataset.id];
      if (p.fitting) return openFitting();
      const s = $('.size[aria-pressed="true"]', add.closest('.card'))?.textContent || 'M';
      addToBag(p.id, s);
    }
  });
  $$('.filters .chip').forEach(c => c.addEventListener('click', () => applyFilter(c.dataset.f)));
}
function applyFilter(f) {
  $$('.filters .chip').forEach(c => c.setAttribute('aria-pressed', String(c.dataset.f === f)));
  $$('#grid .card').forEach(c => { c.hidden = !(f === 'all' || c.dataset.col === f); });
  ScrollTrigger.refresh();
}

/* =========================================================
   Shop the look
   ========================================================= */
function initLook() {
  const list = $('#lookItems');
  list.innerHTML = lookItems.map(i => `
    <li class="look-item" data-id="${i.id}">
      <div class="look-thumb"><img src="img/look.webp" alt="" style="object-position:${i.pos};transform:scale(2.4)" loading="lazy" width="72" height="72"></div>
      <div><h3>${i.name}</h3><p>${i.note}</p></div>
      <div style="text-align:right"><div class="price">${money(i.price)}</div><button class="link" style="border:0;background:none;padding:0 0 3px;font-size:.88rem;margin-top:4px" data-add="${i.id}">Add</button></div>
    </li>`).join('');
  $('#lookTotal').textContent = money(lookItems.reduce((s, i) => s + i.price, 0));
  const spots = $$('.hotspot');
  const activate = id => {
    spots.forEach(s => s.setAttribute('aria-pressed', String(s.dataset.item === id)));
    $$('.look-item').forEach(li => li.classList.toggle('is-active', li.dataset.id === id));
  };
  spots.forEach(s => s.addEventListener('click', () => activate(s.dataset.item)));
  $$('.look-item').forEach(li => li.addEventListener('mouseenter', () => activate(li.dataset.id)));
  list.addEventListener('click', e => { const b = e.target.closest('[data-add]'); if (b) { activate(b.dataset.add); addToBag(b.dataset.add); } });
  $('#addLook').addEventListener('click', () => { lookItems.forEach(i => addToBag(i.id, 'M', 1, true)); toast('The whole look is in your bag'); });
  activate('l1');
}

/* =========================================================
   Outfit finder
   ========================================================= */
function initFinder() {
  const pick = { occasion: 'day', feel: 'light', palette: 'indigo' };
  const qs = $$('.q');
  const show = () => {
    const scored = products.map(p => ({ p, s: (p.occ.includes(pick.occasion) ? 4 : 0) + (p.feel === pick.feel ? 1.2 : 0) + (p.pal === pick.palette ? 1 : 0) + (p.occ[0] === pick.occasion ? .3 : 0) }));
    const best = scored.sort((a, b) => b.s - a.s)[0].p;
    const img = $('#resImg');
    gsap.to(img, { opacity: 0, duration: .2, onComplete: () => { img.src = `img/${best.img}.webp`; img.style.objectPosition = best.pos; img.alt = best.name; gsap.to(img, { opacity: 1, duration: .45 }); } });
    $('#resName').textContent = best.name; $('#resWhy').textContent = best.why;
    $('#resPrice').textContent = best.fitting ? 'From ' + money(best.price) : money(best.price);
    const btn = $('#resAdd'); btn.textContent = best.fitting ? 'Book a fitting' : 'Add to bag'; btn.dataset.id = best.id;
  };
  qs.forEach(q => q.addEventListener('click', e => {
    const c = e.target.closest('.chip'); if (!c) return;
    $$('.chip', q).forEach(x => x.setAttribute('aria-pressed', String(x === c)));
    pick[q.dataset.q] = c.dataset.v; show();
  }));
  $('#resAdd').addEventListener('click', e => { const p = allItems[e.currentTarget.dataset.id || 'p5']; p.fitting ? openFitting() : addToBag(p.id); });
  show();
}

/* =========================================================
   Forms, dialog, menu
   ========================================================= */
function openFitting() {
  const d = $('#fitting'); $('#fittingMsg').textContent = '';
  if (d.showModal) d.showModal(); else d.setAttribute('open', '');
  lenis?.stop();
}
function initForms() {
  const d = $('#fitting');
  d.addEventListener('close', () => lenis?.start());
  $('#fittingForm').addEventListener('submit', e => {
    if (e.submitter?.value === 'cancel') return;
    e.preventDefault();
    const f = e.currentTarget;
    if (!f.reportValidity()) return;
    $('#fittingMsg').textContent = `Thank you, ${f.name.value.split(' ')[0]}. This preview isn't connected to a booking inbox yet, so the request wasn't sent.`;
  });
  $('#signupForm').addEventListener('submit', e => {
    e.preventDefault();
    const v = $('#email').value.trim();
    $('#signupMsg').textContent = /.+@.+\..+/.test(v)
      ? "You're almost on the list. This preview doesn't store emails yet, so nothing was sent."
      : 'Enter an email address like name@example.com.';
  });
  $('#toastBtn').addEventListener('click', () => window.__openBag());
}
const menu = () => $('#mobileMenu');
function closeMenu() { const m = menu(); if (!m.classList.contains('is-open')) return; m.classList.remove('is-open'); m.setAttribute('aria-hidden', 'true'); $('#menuBtn').setAttribute('aria-expanded', 'false'); lenis?.start(); }
function initMenu() {
  $('#menuBtn').addEventListener('click', () => {
    const m = menu(); m.classList.add('is-open'); m.setAttribute('aria-hidden', 'false'); $('#menuBtn').setAttribute('aria-expanded', 'true'); lenis?.stop();
    gsap.fromTo($$('a', m), { yPercent: 60, opacity: 0 }, { yPercent: 0, opacity: 1, stagger: .05, duration: .7, ease: 'power3.out', delay: .15 });
  });
  $('#menuClose').addEventListener('click', closeMenu);
}

/* =========================================================
   Preloader → hero entrance (the one orchestrated moment)
   ========================================================= */
function intro() {
  const loader = $('#loader');
  const lines = $$('.hero h1 .line > span');
  if (reduceMotion) { loader.remove(); introFade.v = 1; introDone = true; return; }
  gsap.set(lines, { yPercent: 110 });
  gsap.set('.hero-sub, .hero-ctas, .hero-foot', { opacity: 0 });
  const path = $('#loaderStitch'), needle = $('#loaderNeedle'), len = path.getTotalLength();
  // draw the running stitch by moving a clip edge with the needle
  const prog = { v: 0 };
  path.style.clipPath = 'inset(0 100% 0 0)';
  const tl = gsap.timeline();
  tl.to(prog, { v: 1, duration: 1.25, ease: 'power2.inOut', onUpdate: () => {
      const pt = path.getPointAtLength(prog.v * len);
      needle.setAttribute('cx', pt.x); needle.setAttribute('cy', pt.y);
      path.style.clipPath = `inset(0 ${100 - pt.x / 5.6}% 0 0)`;
    } })
    .to('#loaderWord', { opacity: 1, duration: .5 }, '-=.55')
    .to(loader, { clipPath: 'inset(0 0 100% 0)', duration: .9, ease: 'power3.inOut' }, '+=.25')
    .add(() => loader.remove())
    .add(() => playThreads(2.1), '-=.75')
    .to(introFade, { v: 1, duration: 2.6, ease: 'power1.inOut', onComplete: () => { introDone = true; } }, '-=.2')
    .to(lines, { yPercent: 0, duration: 1.1, ease: 'power4.out', stagger: .1 }, '-=2.4')
    .to('.hero-sub, .hero-ctas, .hero-foot', { opacity: 1, duration: .8, stagger: .08 }, '-=.6');
}

/* =========================================================
   Discounts: one per order, the bigger one wins
   ========================================================= */
let discounts = { voice: 0, voiceReason: '', eggs: 0 };
try { discounts = { ...discounts, ...JSON.parse(localStorage.getItem('resham-discounts') || '{}') }; } catch (e) {}
const saveDiscounts = () => { try { localStorage.setItem('resham-discounts', JSON.stringify(discounts)); } catch (e) {} };
function bestDiscount() {
  if (discounts.eggs >= discounts.voice && discounts.eggs) return { percent: discounts.eggs, code: 'RESHAM15', label: 'Hidden threads' };
  if (discounts.voice) return { percent: discounts.voice, code: 'NOOR' + discounts.voice, label: 'From Noor' };
  return { percent: 0, code: '', label: '' };
}

/* =========================================================
   Hidden threads: five easter eggs, 15% for finding them all
   ========================================================= */
const EGGS = [
  { id: 'needle',   name: 'The golden needle', hint: 'The needle by our name likes a few quick taps.' },
  { id: 'silk',     name: 'Silk whisper',      hint: 'The silk loves to be stroked. Keep going for a while.' },
  { id: 'stitches', name: 'Every stitch',      hint: 'In the craft section, try each of the four stitches.' },
  { id: 'mirror',   name: 'The lost mirror',   hint: 'A tiny mirror glints somewhere in the shop-the-look photo.' },
  { id: 'signature',name: 'Our signature',     hint: 'The giant word at the very bottom answers to five taps.' }
];
const ICON_ON = '<svg viewBox="0 0 26 26" aria-hidden="true"><circle cx="13" cy="13" r="11" fill="#F3B23A"/><path d="M8 13.5l3.2 3.2L18 9.8" fill="none" stroke="#2A0F24" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const ICON_OFF = '<svg viewBox="0 0 26 26" aria-hidden="true"><circle cx="13" cy="13" r="10" fill="none" stroke="currentColor" stroke-opacity=".45" stroke-width="1.5" stroke-dasharray="3 3"/></svg>';
const eggs = (() => {
  let found = [];
  try { found = JSON.parse(localStorage.getItem('resham-eggs') || '[]').filter(id => EGGS.some(e => e.id === id)); } catch (e) {}
  const save = () => { try { localStorage.setItem('resham-eggs', JSON.stringify(found)); } catch (e) {} };
  let lastPoint = [innerWidth / 2, innerHeight / 2];
  addEventListener('pointerdown', e => { lastPoint = [e.clientX, e.clientY]; }, { passive: true, capture: true });
  const render = () => {
    const n = found.length, pill = $('#eggPill');
    pill.hidden = n === 0;
    $('#eggCount').textContent = n === 5 ? 'All 5 threads found' : `${n} of 5 hidden threads`;
    $$('.spool i', pill).forEach((i, k) => i.classList.toggle('on', k < n));
    $('#eggList').innerHTML = EGGS.map(e => {
      const on = found.includes(e.id);
      return `<li class="${on ? 'found' : ''}">${on ? ICON_ON : ICON_OFF}<div><b>${on ? e.name : 'Not found yet'}</b><span>${on ? 'Found.' : e.hint}</span></div></li>`;
    }).join('');
    $('#eggMirror')?.classList.toggle('found', found.includes('mirror'));
  };
  return {
    count: () => found.length,
    has: id => found.includes(id),
    find(id) {
      if (found.includes(id)) return;
      found.push(id); save(); render();
      const egg = EGGS.find(e => e.id === id);
      threadBurst(...lastPoint);
      if (found.length === 5) { discounts.eggs = 15; saveDiscounts(); renderBag(); setTimeout(showReward, 700); }
      else toast(`You found a hidden thread: ${egg.name}. ${found.length} of 5.`);
    },
    init() {
      render();
      if (found.length === 5 && !discounts.eggs) { discounts.eggs = 15; saveDiscounts(); }
      const pill = $('#eggPill'), sheet = $('#eggSheet');
      pill.addEventListener('click', () => { const open = sheet.hidden; sheet.hidden = !open; pill.setAttribute('aria-expanded', String(open)); });
      document.addEventListener('click', e => { if (!sheet.hidden && !e.target.closest('#eggSheet,#eggPill')) { sheet.hidden = true; pill.setAttribute('aria-expanded', 'false'); } });
      // 1. the needle: three quick taps
      let taps = [];
      $('#needle').addEventListener('click', e => {
        e.preventDefault(); e.stopPropagation();
        const now = performance.now(); taps = taps.filter(t => now - t < 2000); taps.push(now);
        const m = $('#needle'); m.classList.add('spin'); setTimeout(() => m.classList.remove('spin'), 300);
        if (taps.length >= 3) { eggs.find('needle'); taps = []; }
      });
      // 4. the lost mirror
      $('#eggMirror').addEventListener('click', () => eggs.find('mirror'));
      // 5. the signature: five taps on the footer word
      let ftaps = [];
      $('#footWord').addEventListener('click', () => {
        const now = performance.now(); ftaps = ftaps.filter(t => now - t < 2500); ftaps.push(now);
        gsap.fromTo('#footWord', { scale: 1 }, { scale: 1.015, duration: .12, yoyo: true, repeat: 1 });
        if (ftaps.length >= 5) { eggs.find('signature'); ftaps = []; }
      });
      $('#rewardClose').addEventListener('click', () => { $('#reward').classList.remove('is-on'); lenis?.start(); });
    }
  };
})();

/* golden threads burst out of the spot you found */
function threadBurst(x, y) {
  if (reduceMotion) return;
  const NS = 'http://www.w3.org/2000/svg', svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('class', 'thread-burst'); svg.setAttribute('viewBox', `0 0 ${innerWidth} ${innerHeight}`);
  const cols = ['#F3B23A', '#D01A66', '#ffffff', '#E9C066'];
  for (let i = 0; i < 16; i++) {
    const a = i / 16 * Math.PI * 2 + Math.random() * .3, r = 90 + Math.random() * 120;
    const ex = x + Math.cos(a) * r, ey = y + Math.sin(a) * r;
    const cx = x + Math.cos(a + .9) * r * .5, cy = y + Math.sin(a + .9) * r * .5;
    const path = document.createElementNS(NS, 'path');
    path.setAttribute('d', `M${x} ${y} Q${cx} ${cy} ${ex} ${ey}`);
    path.setAttribute('fill', 'none'); path.setAttribute('stroke', cols[i % 4]); path.setAttribute('stroke-width', 2); path.setAttribute('stroke-linecap', 'round');
    svg.appendChild(path);
    const len = path.getTotalLength();
    path.style.strokeDasharray = `${len * .4} ${len}`; path.style.strokeDashoffset = len * .4;
    gsap.to(path, { strokeDashoffset: -len, duration: .9 + Math.random() * .4, ease: 'power2.out', delay: Math.random() * .1 });
  }
  for (let i = 0; i < 10; i++) {
    const c = document.createElementNS(NS, 'circle');
    c.setAttribute('cx', x); c.setAttribute('cy', y); c.setAttribute('r', 3 + Math.random() * 3); c.setAttribute('fill', i % 2 ? '#E8EEF2' : '#F3B23A');
    svg.appendChild(c);
    const a = Math.random() * Math.PI * 2, r = 60 + Math.random() * 140;
    gsap.to(c, { attr: { cx: x + Math.cos(a) * r, cy: y + Math.sin(a) * r + 40 }, opacity: 0, duration: 1.2, ease: 'power2.out' });
  }
  document.body.appendChild(svg);
  setTimeout(() => svg.remove(), 1600);
}

/* the reward: threads weave a little swatch */
function showReward() {
  const svg = $('#weaveSvg'), N = 9, step = 150 / (N + 1);
  const warpCol = i => (i % 2 ? '#D01A66' : '#F3B23A'), weftCol = j => (j % 2 ? '#F9EAF0' : '#E9C066');
  let html = '';
  for (let i = 1; i <= N; i++) html += `<line class="warp" x1="${i * step}" y1="10" x2="${i * step}" y2="140" stroke="${warpCol(i)}" stroke-width="7" stroke-linecap="round"/>`;
  for (let j = 1; j <= N; j++) html += `<line class="weft" x1="10" y1="${j * step}" x2="140" y2="${j * step}" stroke="${weftCol(j)}" stroke-width="7" stroke-linecap="round"/>`;
  // over-under: where the warp passes over, redraw a short piece of it on top of the weft
  for (let j = 1; j <= N; j++) for (let i = 1; i <= N; i++) if ((i + j) % 2 === 0)
    html += `<line class="over" data-row="${j}" x1="${i * step}" y1="${j * step - 6}" x2="${i * step}" y2="${j * step + 6}" stroke="${warpCol(i)}" stroke-width="7"/>`;
  svg.innerHTML = html;
  $('#reward').classList.add('is-on'); lenis?.stop();
  if (!reduceMotion) {
    gsap.fromTo($$('.warp', svg), { attr: { y2: 10 } }, { attr: { y2: 140 }, duration: .6, stagger: .05, ease: 'power2.out' });
    gsap.fromTo($$('.weft', svg), { attr: { x2: 10 } }, { attr: { x2: 140 }, duration: .45, stagger: .09, delay: .55, ease: 'power1.inOut' });
    $$('.over', svg).forEach(o => gsap.fromTo(o, { opacity: 0 }, { opacity: 1, duration: .15, delay: .55 + (+o.dataset.row - 1) * .09 + .3 }));
  }
  threadBurst(innerWidth / 2, innerHeight / 2 - 80);
}

/* =========================================================
   Noor, the voice concierge (ElevenLabs Agents)
   ========================================================= */
const NOOR_AGENT_ID = 'agent_7001m7aymmpaejgvxjavbj8e48dm';   // public agent; discounts are capped again below
const SDK_URL = 'https://cdn.jsdelivr.net/npm/@elevenlabs/client@1.36.0/dist/lib.iife.js';
function initVoice() {
  const fab = $('#voiceFab'), panel = $('#voicePanel'), log = $('#voiceLog'), status = $('#voiceStatus');
  const callBtn = $('#voiceCall'), muteBtn = $('#voiceMute'), orb = $('#voiceOrb');
  let conv = null, busy = false, muted = false, raf = 0;
  const line = (who, text) => { const li = document.createElement('li'); li.className = who; li.textContent = text; log.appendChild(li); log.scrollTop = log.scrollHeight; };
  const setStatus = t => { status.textContent = t; };
  const openPanel = () => { panel.hidden = false; fab.classList.add('is-hidden'); if (!log.children.length) line('ai', "Hi, I'm Noor. Press Start talking and ask me anything, including whether there's a discount for you today."); };
  const closePanel = async () => { panel.hidden = true; fab.classList.remove('is-hidden'); if (conv) { try { await conv.endSession(); } catch (e) {} } };
  const loadSDK = () => window.ElevenLabsClient ? Promise.resolve() : new Promise((res, rej) => {
    const s = document.createElement('script'); s.src = SDK_URL; s.onload = res; s.onerror = () => rej(new Error('sdk')); document.head.appendChild(s);
  });
  const sections = { collections: '#collections', craft: '#craft', shop_the_look: '#look', new_in: '#shop', makers: '#studio', outfit_finder: '#finder', journal: '#journal' };
  const clientTools = {
    apply_discount: ({ percent, reason }) => {
      const pct = Math.round(Number(percent));
      if (!(pct >= 5 && pct <= 10)) return 'Refused: the website only accepts a voice discount from 5 to 10 percent.';
      if (discounts.voice) return `Not applied: the shopper already has ${discounts.voice} percent from you (code NOOR${discounts.voice}). Only one voice discount per shopper.`;
      discounts.voice = pct; discounts.voiceReason = String(reason || '').slice(0, 80); saveDiscounts(); renderBag();
      line('sys', `${pct}% added to your bag (code NOOR${pct})`); toast(`Noor added ${pct}% off to your bag`);
      const best = bestDiscount();
      return `Applied ${pct} percent, code NOOR${pct}.${best.code === 'RESHAM15' ? ' Note: they already unlocked 15 percent from the hidden threads, and the bigger discount is the one used.' : ''}`;
    },
    show_on_site: ({ section }) => {
      if (section === 'bag') { window.__openBag(); return 'Opened the bag.'; }
      const el = $(sections[section] || '#top');
      if (lenis) lenis.scrollTo(el, { offset: -10, duration: 1.4 }); else el.scrollIntoView({ behavior: 'smooth' });
      return `Showing ${section.replace(/_/g, ' ')}.`;
    },
    get_bag: () => {
      const sub = bag.reduce((s, l) => s + allItems[l.id].price * l.qty, 0), d = bestDiscount();
      return JSON.stringify({
        items: bag.map(l => ({ name: allItems[l.id].name, size: l.size, qty: l.qty, price: allItems[l.id].price })),
        subtotal_usd: sub, discount_applied: d.percent ? `${d.percent}% (${d.code})` : 'none',
        voice_discount_already_given: !!discounts.voice, hidden_threads_found: eggs.count(), hidden_threads_total: 5
      });
    }
  };
  const end = () => {
    conv = null; cancelAnimationFrame(raf); orb.style.removeProperty('--lvl'); delete panel.dataset.mode;
    callBtn.textContent = 'Start talking'; muteBtn.disabled = true; setStatus('Call ended');
  };
  async function start() {
    if (conv || busy) return;
    busy = true; callBtn.textContent = 'Connecting…';
    try {
      setStatus('Waiting for your microphone…');
      try { const st = await navigator.mediaDevices.getUserMedia({ audio: true }); st.getTracks().forEach(t => t.stop()); }
      catch (e) { e.msg = 'Noor needs your microphone. Allow microphone access for this site and try again. (Previews inside other apps may block it; the live site works.)'; throw e; }
      setStatus('Connecting…');
      await loadSDK();
      conv = await window.ElevenLabsClient.Conversation.startSession({
        agentId: NOOR_AGENT_ID,
        clientTools,
        onConnect: () => { setStatus('Listening'); muteBtn.disabled = false; callBtn.textContent = 'End call'; },
        onDisconnect: () => { end(); line('sys', 'Call ended'); },
        onMessage: m => { if (m && m.message) line((m.role || m.source) === 'user' ? 'user' : 'ai', m.message); },
        onModeChange: ({ mode }) => { panel.dataset.mode = mode; if (!muted) setStatus(mode === 'speaking' ? 'Noor is speaking' : 'Listening'); },
        onError: msg => { line('sys', 'Connection problem. Please try again.'); console.warn('Noor:', msg); }
      });
      const tick = () => {
        if (!conv) return; let v = 0;
        try { v = panel.dataset.mode === 'speaking' ? conv.getOutputVolume() : conv.getInputVolume(); } catch (e) {}
        orb.style.setProperty('--lvl', (1 + Math.min(.3, v * .9)).toFixed(3));
        raf = requestAnimationFrame(tick);
      };
      tick();
    } catch (e) {
      conv = null; setStatus('Not connected'); callBtn.textContent = 'Try again';
      line('sys', e.msg || "Noor couldn't connect. Please try again in a moment.");
      console.warn('Noor:', e);
    } finally { busy = false; }
  }
  fab.addEventListener('click', openPanel);
  $('#voiceClose').addEventListener('click', closePanel);
  callBtn.addEventListener('click', async () => { if (conv) { try { await conv.endSession(); } catch (e) {} end(); } else start(); });
  muteBtn.addEventListener('click', () => {
    if (!conv) return; muted = !muted;
    try { conv.setMicMuted(muted); } catch (e) {}
    muteBtn.textContent = muted ? 'Unmute' : 'Mute'; setStatus(muted ? 'Muted' : 'Listening');
  });
}

/* =========================================================
   Boot
   ========================================================= */
function boot() {
  initStage();
  initScroll();
  initMarquee();
  initCraft();
  initBag();
  initShop();
  initLook();
  initFinder();
  initForms();
  initMenu();
  eggs.init();
  initVoice();
  renderBag();
  if (webglOK) requestAnimationFrame(frame);
  const go = () => { intro(); ScrollTrigger.refresh(); };
  (document.fonts?.ready || Promise.resolve()).then(go);
  addEventListener('load', () => ScrollTrigger.refresh());
}
boot();
