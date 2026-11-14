// The full record: one line per production (year, title, tally). A line opens
// to show that production's awards, grouped by ceremony. Nothing else to learn.
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const PREFERRED = ['State Television Awards', 'Sumathi Awards', 'Raigam Tele Awards', 'SLIM Awards', 'OCIC Awards'];
export const isDirection = cat => /direct(or|ion)/i.test(cat) && !/photography|art director/i.test(cat);
const yearOf = w => (w.years[1] && w.years[1] !== w.years[0] ? `${w.years[0]}–${w.years[1]}` : `${w.years[0]}`);
const rank = c => PREFERRED.indexOf(c) + 1 || 99;

export function createAwards({ works, list, sum, gsap, reduced }) {
  const items = works.map((w, i) => ({ w, i })).filter(({ w }) => (w.awards || []).length);
  if (!items.length) { list.closest('.record')?.setAttribute('hidden', ''); sum.textContent = ''; return { show() {} }; }

  const ceremonies = [...new Set(items.flatMap(({ w }) => w.awards.map(a => a[2])))].sort((a, b) => rank(a) - rank(b) || a.localeCompare(b));
  const won = items.reduce((n, { w }) => n + w.awards.filter(a => a[0] === 'won').length, 0);
  const nom = items.reduce((n, { w }) => n + w.awards.filter(a => a[0] === 'nominated').length, 0);
  const names = ceremonies.map(c => c.replace(/ Awards$/, '').replace(/ Tele$/, ''));
  const where = names.length > 1 ? `${names.slice(0, -1).join(', ')} and ${names.slice(-1)}` : names[0];
  sum.textContent = `${won} awards and ${nom} nominations across ${items.length} productions, at the ${where} awards.`;

  list.innerHTML = items.map(({ w, i }) => {
    const ww = w.awards.filter(a => a[0] === 'won').length, nn = w.awards.length - ww;
    // by ceremony, wins before nominations within each
    const groups = {};
    w.awards.forEach(a => { const k = `${a[2]} ${a[3]}`; (groups[k] = groups[k] || { c: a[2], rows: [] }).rows.push(a); });
    const body = Object.entries(groups).sort((x, y) => rank(x[1].c) - rank(y[1].c)).map(([k, g]) => `
          <div class="lgroup">
            <p class="lgroup__name">${esc(k)}</p>
            <ul>${g.rows.slice().sort((x, y) => (x[0] === 'won' ? 0 : 1) - (y[0] === 'won' ? 0 : 1)).map(a =>
              `<li class="${a[0] === 'won' ? 'is-won' : ''}">${esc(a[1])}<span class="sr">, ${a[0] === 'won' ? 'won' : 'nominated'}</span></li>`).join('')}</ul>
          </div>`).join('');
    return `
      <li class="ledger__item" data-i="${i}">
        <button type="button" class="ledger__row" id="recb-${i}" aria-expanded="false" aria-controls="rec-${i}">
          <span class="ledger__year">${esc(yearOf(w))}</span>
          <span class="ledger__title">${esc(w.title)}</span>
          <span class="ledger__tally">${ww ? `<b>${ww} won</b>` : ''}${nn ? `<span>${nn} nominated</span>` : ''}</span>
          <span class="ledger__sign" aria-hidden="true"></span>
        </button>
        <div class="ledger__body" id="rec-${i}" role="region" aria-labelledby="recb-${i}" hidden>
          <div class="ledger__in">${body}</div>
        </div>
      </li>`;
  }).join('');

  const row = i => list.querySelector(`.ledger__item[data-i="${i}"]`);

  function set(item, open, animate = true) {
    const btn = item.querySelector('.ledger__row'), body = item.querySelector('.ledger__body');
    if ((btn.getAttribute('aria-expanded') === 'true') === open) return;
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    gsap.killTweensOf(body);
    if (reduced || !animate) { body.hidden = !open; body.style.height = ''; return; }
    if (open) {
      body.hidden = false;
      gsap.fromTo(body, { height: 0 }, { height: 'auto', duration: .7, ease: 'expo.out', clearProps: 'height' });
      gsap.fromTo(body.querySelectorAll('.lgroup'), { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: .8, stagger: .06, ease: 'expo.out', overwrite: true });
    } else {
      gsap.to(body, { height: 0, duration: .5, ease: 'expo.out', onComplete: () => { body.hidden = true; body.style.height = ''; } });
    }
  }

  list.addEventListener('click', e => {
    const btn = e.target.closest('.ledger__row');
    if (!btn) return;
    set(btn.parentElement, btn.getAttribute('aria-expanded') !== 'true');
  });

  // open one production's record (from a laurel or the slideshow), closing the rest
  function show(i) {
    const item = row(i);
    if (!item) return null;
    list.querySelectorAll('.ledger__item').forEach(el => { if (el !== item) set(el, false, false); });
    set(item, true);
    return item;
  }

  return { show, row };
}
