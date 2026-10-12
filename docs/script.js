'use strict';

const sceneLayouts = {
  desktop: {
    w: 1060, h: 430, mobile: false,
    student: [78, 114], prefix: [[225, 114], [351, 114]], wrong: [[517, 114], [649, 114], [782, 114]],
    corrected: [[546, 189], [688, 189], [848, 189]], boundary: [421, 114], hint: [495, 247],
    dataset: [902, 323], train: [638, 323], evaluate: [407, 323], selection: [165, 323], base: [638, 251], feedback: [407, 391],
    prefixPath: 'M109 114H351', wrongPath: 'M374 114H782', correctPath: 'M374 114C445 114 445 189 498 189H848',
    rollbackPath: 'M786 88C786 45 421 45 421 112', hintPath: 'M496 230C452 223 421 188 421 134',
    targetPath: 'M875 189C992 189 1004 323 951 323', dataPath: 'M854 323H674', basePath: 'M638 272V287',
    modelPath: 'M602 323H444', feedbackPath: 'M407 374V352', selectionPath: 'M372 323H227', returnPath: 'M110 323H78V148',
    localTitle: [26, 25], outerTitle: [26, 412], prefixLabel: [288, 71], wrongLabel: [650, 72], suffixLabel: [630, 227], modelLabel: [524, 303],
  },
  mobile: {
    w: 540, h: 590, mobile: true,
    student: [45, 88], prefix: [[149, 88], [258, 88]], wrong: [[375, 88], [473, 88]],
    corrected: [[373, 164], [476, 164]], boundary: [310, 88], hint: [413, 239],
    dataset: [438, 344], train: [264, 344], evaluate: [98, 344], selection: [180, 503], base: [264, 269], feedback: [97, 420],
    prefixPath: 'M77 88H258', wrongPath: 'M280 88H473', correctPath: 'M280 88C332 88 332 164 349 164H476',
    rollbackPath: 'M473 61C473 21 310 21 310 85', hintPath: 'M393 221C329 214 310 174 310 111',
    targetPath: 'M498 164C534 194 523 343 487 344', dataPath: 'M390 344H300', basePath: 'M264 290V308',
    modelPath: 'M228 344H135', feedbackPath: 'M97 403V373', selectionPath: 'M98 375C98 463 210 458 210 479', returnPath: 'M124 503C19 503 22 194 45 120',
    localTitle: [23, 23], outerTitle: [310, 553], prefixLabel: [205, 48], wrongLabel: [426, 47], suffixLabel: [372, 205], modelLabel: [182, 323],
  },
};

function buildScene(c) {
  const xy = a => a.join(' ');
  const text = (x, y, value, cls = '', anchor = 'middle') => `<text x="${x}" y="${y}" class="${cls}" text-anchor="${anchor}">${value}</text>`;
  const check = '<path d="M-7 0l5 5 10-11" class="check"/>';
  const line = (id, path, cls = '') => `<path id="${id}" d="${path}" class="route ${cls}" fill="none"/>`;
  const node = (id, pos, cls, symbol) => `<g id="${id}" transform="translate(${xy(pos)})"><circle r="22" class="node ${cls}"/>${symbol}</g>`;
  const [sx, sy] = c.student, [dx, dy] = c.dataset, [tx, ty] = c.train, [ex, ey] = c.evaluate, [qx, qy] = c.selection;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${c.w} ${c.h}" role="img" aria-labelledby="scene-title scene-description" data-mobile="${c.mobile}">
<title id="scene-title">Knowledge Navigation in MedEvo</title>
<desc id="scene-description">A schematic. Supported reasoning is preserved while the first erroneous operation is rolled back. A gold-blind auditor supplies an answer-free hint and the same student regenerates the suffix. A screened repair replaces a training target in the evolving dataset. Each round trains from the same base model M zero. Independent feedback identifies remaining gaps and redirects the next training questions.</desc>
<style>
svg{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;background:#fbfcfa;color:#213e43}text{font-size:${c.mobile ? 18 : 14}px;fill:#34585e}text.small{font-size:${c.mobile ? 16 : 11}px;fill:#708387}text.label{font-size:${c.mobile ? 11 : 10}px;letter-spacing:1.8px;fill:#648084;font-weight:650}text.good-label{fill:#176d76;font-size:${c.mobile ? 17 : 12}px}text.bad-label{fill:#9b615a;font-size:${c.mobile ? 16 : 12}px}text.white{fill:white;font-size:20px;font-weight:600}text.base{font-size:${c.mobile ? 17 : 13}px;fill:#44676d}text.title{font-weight:650;fill:#24484e}text.violet{fill:#735788;font-size:${c.mobile ? 17 : 12}px}.route{stroke:#dce6e3;stroke-width:2.3;stroke-linecap:round;stroke-linejoin:round}.draw-blue{stroke:#247d85;stroke-width:3}.draw-red{stroke:#c18276;stroke-width:2.5}.draw-violet{stroke:#85689a;stroke-width:3}.rollback{stroke:#b58579;stroke-width:1.8;stroke-dasharray:5 6}.node{stroke-width:1.8;fill:#fcfdfa}.node.good{stroke:#78a9a8;fill:#edf5f1}.node.bad{stroke:#c59d90;fill:#f8f0eb}.node.repaired{stroke:#247d85;fill:#e6f3ec}.check{fill:none;stroke:#297c75;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}.cross{stroke:#b4776d;stroke-width:1.9;stroke-linecap:round}.plain{fill:#fff;stroke:#cad9d4;stroke-width:1.5}.paper-line{stroke:#b5cac6;stroke-width:2;stroke-linecap:round}.violet-line{stroke:#957cac;stroke-width:2;stroke-linecap:round}.ghost{fill:#edf1eb;stroke:#d3ded7;stroke-width:1.2}.active-target{fill:#e1f0e8;stroke:#5f9b87;stroke-width:1.4}.hint-shape{fill:#fff9e9;stroke:#c5b786;stroke-width:1.3}.sft{fill:#edf5f1;stroke:#95b2a9;stroke-width:1.5}.feedback-shape{fill:#f4eef7;stroke:#c4b5ce;stroke-width:1.4}.small-arrow{fill:none;stroke:#729994;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}.ring{fill:none;stroke:#b88072;stroke-width:1.5;stroke-dasharray:4 5}.marker-blue{fill:#247d85}.marker-violet{fill:#85689a}.boundary{stroke:#89aaa3;stroke-width:1;stroke-dasharray:3 5}
</style>
<defs><marker id="arrow-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M1 1L8 5L1 9" fill="none" stroke="#247d85" stroke-width="1.7"/></marker><marker id="arrow-violet" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M1 1L8 5L1 9" fill="none" stroke="#85689a" stroke-width="1.7"/></marker></defs>
${text(...c.localTitle, 'LOCAL REPAIR', 'label', 'start')}
${text(...c.outerTitle, 'DATA EVOLUTION', 'label', 'start')}
<g id="outer-track">
${line('target-track', c.targetPath)}${line('data-track', c.dataPath)}${line('model-track', c.modelPath)}${line('selection-track', c.selectionPath)}${line('return-track', c.returnPath)}
</g>
<g id="trace-core">
${line('prefix-path', c.prefixPath, 'draw-blue')}
<g id="student" transform="translate(${sx} ${sy})"><circle r="31" fill="#205f68"/>${text(0, 7, 'Mₜ', 'white')}${text(0, 51, 'Student', 'small')}</g>
${c.prefix.map((p, i) => node(`prefix-${i}`, p, 'good', check)).join('')}
${text(...c.prefixLabel, 'Supported prefix', 'good-label')}
<g id="failed-branch">${line('wrong-path', c.wrongPath, 'draw-red')}${c.wrong.map((p, i) => node(`wrong-${i}`, p, 'bad', '<path d="M-6-6L6 6M6-6L-6 6" class="cross"/>')).join('')}${text(...c.wrongLabel, 'First error → failed suffix', 'bad-label')}</g>
<circle id="error-ring" cx="${c.wrong[0][0]}" cy="${c.wrong[0][1]}" r="30" class="ring"/>
${line('rollback-path', c.rollbackPath, 'rollback')}
<path id="safe-boundary" d="M${c.boundary[0]} ${c.boundary[1] - 24}v${c.mobile ? 105 : 108}" class="boundary"/>
<g id="new-branch">${line('correct-path', c.correctPath, 'draw-blue')}${c.corrected.map((p, i) => node(`corrected-${i}`, p, 'repaired', check)).join('')}${text(...c.suffixLabel, c.mobile ? 'New suffix' : 'Same student, new suffix', 'good-label')}${text(c.corrected.at(-1)[0], c.corrected.at(-1)[1] + (c.mobile ? 41 : 38), c.mobile ? 'Screened' : 'Screened target', 'small')}</g>
<g id="hint" transform="translate(${xy(c.hint)})"><rect x="-75" y="-18" width="150" height="36" rx="18" class="hint-shape"/>${text(0, 5, 'Answer-free hint', 'base')}${text(0, 35, 'Gold-blind auditor', 'small')}</g>
${line('hint-path', c.hintPath, 'draw-blue')}
</g>
<g id="dataset" transform="translate(${dx} ${dy})">
<rect x="-38" y="-30" width="78" height="50" rx="5" class="ghost"/><rect x="-43" y="-24" width="82" height="51" rx="5" class="plain"/>
<g id="old-target"><rect x="-49" y="-16" width="91" height="47" rx="5" class="plain"/><path d="M-33-2H25M-33 7H17M-33 16H25" class="paper-line"/></g>
<g id="new-target"><rect x="-49" y="-16" width="91" height="47" rx="5" class="active-target"/><path d="M-33-2H6M-33 7H0M-33 16H6" class="paper-line"/><g transform="translate(24 7)">${check}</g></g>
${text(0, 55, 'Evolving dataset', 'title')}${text(0, 72, 'Replace one target', 'small')}
</g>
${line('target-path', c.targetPath, 'draw-blue')}${line('data-path', c.dataPath, 'draw-blue')}
<g id="training">
<g transform="translate(${tx} ${ty})"><circle r="34" class="sft"/>${text(0, 6, 'SFT', 'title')}</g>
<g id="base-model" transform="translate(${xy(c.base)})"><rect x="${c.mobile ? -65 : -55}" y="-17" width="${c.mobile ? 130 : 110}" height="34" rx="17" class="plain"/>${text(0, 5, 'Same base M₀', 'base')}</g>
${line('base-path', c.basePath, 'draw-blue')}${line('model-path', c.modelPath, 'draw-blue')}${text(...c.modelLabel, 'Mₜ₊₁', 'base')}
</g>
<g id="evaluation" transform="translate(${ex} ${ey})"><circle r="29" class="feedback-shape"/><path d="M-14 4l9-11 8 15 12-14" class="violet-line" fill="none"/>${text(0, -43, 'Evaluate', 'title')}</g>
<g id="feedback" transform="translate(${xy(c.feedback)})"><rect x="-75" y="-17" width="150" height="34" rx="5" class="feedback-shape"/>${text(0, 5, 'Held-out feedback', 'violet')}</g>
${line('feedback-path', c.feedbackPath, 'draw-violet')}${line('selection-path', c.selectionPath, 'draw-violet')}
<g id="selection" transform="translate(${qx} ${qy})">
<rect x="-50" y="-29" width="89" height="51" rx="5" class="ghost" transform="rotate(-9)"/><rect x="-42" y="-22" width="87" height="50" rx="5" class="plain" transform="rotate(6)"/>
<g id="selected-question"><rect x="-47" y="-24" width="94" height="52" rx="5" class="feedback-shape"/><rect x="-33" y="-10" width="17" height="17" rx="3" fill="#c4d8d0"/><path d="M-8-7H31M-8 1H22M-32 17H31" class="paper-line"/><path d="M30-15l5 5 9-10" class="violet-line" fill="none"/></g>
${text(0, 54, 'Next questions', 'title')}${text(0, 72, 'Medical tags + errors', 'small')}
</g>
${line('return-path', c.returnPath, 'draw-violet')}
<g id="repair-packet"><rect x="-19" y="-13" width="38" height="26" rx="4" class="active-target"/>${check}</g>
<circle id="learning-packet" r="5" class="marker-blue"/>
<circle id="feedback-packet" r="5" class="marker-violet"/>
<g id="question-packet"><rect x="-15" y="-11" width="30" height="22" rx="4" class="feedback-shape"/><path d="M-8-3H8M-8 3H3" class="violet-line"/></g>
<circle id="rollback-packet" r="4" fill="#b88072"/>
</svg>`;
}

// Browser controls
const animationHost = document.getElementById('animation-canvas');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const narrowScreen = window.matchMedia('(max-width: 640px)');
const duration = 16000;
const stageTitles = [
  'Keep the valid steps. Find the first error.',
  'Give a hint. Let the same student continue.',
  'Screen the repair. Update the training target.',
  'Measure gaps. Choose the next questions.',
];
const playButton = document.getElementById('play-animation');
const stageButtons = [...document.querySelectorAll('[data-step]')];
const stageTitle = document.getElementById('stage-title');
const progressBar = document.getElementById('animation-progress');
let svg, elements, pathLengths, playing = !reducedMotion.matches;
let cursor = reducedMotion.matches ? 15800 : 0;
let lastFrame = null;
let previousStage = -1;
const clamp = x => Math.max(0, Math.min(1, x));
const between = (t, start, end) => clamp((t - start) / (end - start));
const ease = x => x * x * (3 - 2 * x);
const opacity = (id, v) => elements[id].setAttribute('opacity', String(clamp(v)));
function draw(id, p) {
  const n = pathLengths[id];
  elements[id].style.strokeDasharray = `${n} ${n}`;
  elements[id].style.strokeDashoffset = String(n * (1 - clamp(p)));
}
function travel(id, pathId, p, visible = true) {
  const point = elements[pathId].getPointAtLength(pathLengths[pathId] * clamp(p));
  elements[id].setAttribute('transform', `translate(${point.x} ${point.y})`);
  opacity(id, visible ? 1 : 0);
}
function mountScene() {
  animationHost.innerHTML = buildScene(narrowScreen.matches ? sceneLayouts.mobile : sceneLayouts.desktop);
  svg = animationHost.querySelector('svg');
  elements = Object.fromEntries([...svg.querySelectorAll('[id]')].map(el => [el.id, el]));
  pathLengths = Object.fromEntries([...svg.querySelectorAll('path[id]')].map(el => [el.id, el.getTotalLength()]));
  render(cursor);
  document.getElementById('animation-controls').hidden = false;
}
function render(ms) {
  const t = Math.max(0, Math.min(duration - 1, ms));
  const phase = Math.min(3, Math.floor(t / 4000));
  const repaired = between(t, 4300, 6300);
  const admitted = between(t, 8200, 9900);
  if (phase !== previousStage) {
    stageTitle.textContent = stageTitles[phase];
    stageButtons.forEach((b, i) => b.setAttribute('aria-pressed', String(i === phase)));
    previousStage = phase;
  }
  animationHost.dataset.phase = String(phase);
  progressBar.style.transform = `scaleX(${t / duration})`;
  draw('prefix-path', between(t, 150, 1000));
  [...svg.querySelectorAll('[id^="prefix-"]:not(path)')].forEach((el, i) => el.setAttribute('opacity', between(t, 300 + i * 300, 600 + i * 300)));
  draw('wrong-path', between(t, 950, 1750));
  opacity('failed-branch', t < 4000 ? between(t, 900, 1500) : .1 + .9 * (1 - between(t, 4000, 4800)));
  opacity('error-ring', t < 2100 ? 0 : t < 4300 ? 1 : 0);
  draw('rollback-path', between(t, 2400, 3650));
  opacity('rollback-path', t < 4000 ? 1 : 1 - between(t, 4000, 4500));
  travel('rollback-packet', 'rollback-path', ease(between(t, 2400, 3650)), t > 2400 && t < 3650);
  opacity('safe-boundary', between(t, 3150, 3700));
  opacity('hint', t < 6800 ? between(t, 3600, 4100) : 1 - between(t, 6800, 7600));
  draw('hint-path', between(t, 4050, 4900));
  opacity('hint-path', t < 6700 ? 1 : 1 - between(t, 6700, 7400));
  draw('correct-path', repaired);
  const correctedNodes = [...svg.querySelectorAll('[id^="corrected-"]')];
  correctedNodes.forEach((el, i) => el.setAttribute('opacity', between(t, 4800 + i * 540, 5350 + i * 540)));
  opacity('new-branch', t < 4300 ? 0 : 1);
  opacity('trace-core', phase < 2 ? 1 : .64);
  opacity('outer-track', phase < 2 ? .45 : 1);
  opacity('dataset', phase < 2 ? .42 : 1);
  opacity('training', phase < 2 ? .42 : 1);
  opacity('evaluation', phase < 3 ? .42 : 1);
  opacity('feedback', phase < 3 ? .42 : 1);
  opacity('selection', phase < 3 ? .42 : 1);
  draw('target-path', admitted);
  travel('repair-packet', 'target-path', ease(admitted), t >= 8200 && t < 9900);
  opacity('new-target', between(t, 9600, 9950));
  elements['old-target'].setAttribute('transform', `translate(${ease(between(t, 9550, 10100)) * 50} ${ease(between(t, 9550, 10100)) * 35})`);
  opacity('old-target', 1 - between(t, 9550, 10100));
  draw('data-path', between(t, 10100, 10800));
  draw('base-path', between(t, 10400, 11100));
  draw('model-path', between(t, 11000, 11850));
  if (t < 10900) travel('learning-packet', 'data-path', ease(between(t, 10100, 10800)), t > 10100 && t < 10800);
  else travel('learning-packet', 'model-path', ease(between(t, 11000, 11850)), t >= 11000 && t < 11850);
  draw('feedback-path', between(t, 12100, 12800));
  draw('selection-path', between(t, 12800, 13700));
  if (t < 12900) travel('feedback-packet', 'feedback-path', ease(between(t, 12100, 12800)), t >= 12100 && t < 12800);
  else travel('feedback-packet', 'selection-path', ease(between(t, 12800, 13700)), t >= 12800 && t < 13700);
  elements['selected-question'].setAttribute('transform', `translate(0 ${-ease(between(t, 13400, 13900)) * 7})`);
  draw('return-path', between(t, 14000, 15500));
  travel('question-packet', 'return-path', ease(between(t, 14000, 15500)), t >= 14000 && t < 15500);
  opacity('base-model', phase < 2 ? .85 : 1);
  playButton.textContent = playing ? 'Pause' : 'Play';
  playButton.setAttribute('aria-label', playing ? 'Pause the evolution schematic' : 'Play the evolution schematic');
  playButton.setAttribute('aria-pressed', String(playing));
}
function setPlaying(value) {
  playing = value;
  lastFrame = null;
  render(cursor);
}
function seek(ms) {
  playing = false;
  lastFrame = null;
  cursor = Math.max(0, Math.min(duration - 1, Number(ms) || 0));
  render(cursor);
}
function frame(now) {
  if (playing && !document.hidden) {
    if (lastFrame !== null) cursor = (cursor + Math.min(80, now - lastFrame)) % duration;
    render(cursor);
  }
  lastFrame = now;
  window.requestAnimationFrame(frame);
}
mountScene();
playButton.addEventListener('click', () => setPlaying(!playing));
stageButtons.forEach((b, i) => b.addEventListener('click', () => seek([3650, 6250, 11400, 15550][i])));
narrowScreen.addEventListener('change', () => { previousStage = -1; mountScene(); });
reducedMotion.addEventListener('change', e => { if (e.matches) seek(15800); });
document.addEventListener('visibilitychange', () => { lastFrame = null; });
window.medEvoEvolution = { seek, play: () => setPlaying(true), pause: () => setPlaying(false), duration, get currentTime() { return cursor; } };
window.requestAnimationFrame(frame);

const copyButton = document.getElementById('copy-citation');
copyButton.addEventListener('click', async () => {
  const citation = document.getElementById('bibtex');
  const status = document.getElementById('copy-status');
  try {
    await navigator.clipboard.writeText(citation.textContent);
    status.textContent = 'Copied';
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(citation);
    selection.removeAllRanges();
    selection.addRange(range);
    status.textContent = 'Selected. Press Ctrl+C or ⌘C.';
  }
});
