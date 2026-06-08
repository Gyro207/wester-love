/* ═══════════════════════════════════════════════════════════════
   particles.js — Polvo, estrellas, humo y chispas
   ═══════════════════════════════════════════════════════════════ */

/** Partículas de polvo flotando en la intro */
function initDust() {
  const container = $('dust-container');
  if (!container) return;
  for (let i = 0; i < 40; i++) {
    const p = document.createElement('div');
    p.className = 'dust-particle';
    const size = rand(2, 6);
    p.style.cssText = `
      width:  ${size}px;
      height: ${size}px;
      left:   ${rand(0, 100)}%;
      top:    ${rand(20, 100)}%;
      --drift: ${rand(-60, 60)}px;
      animation-duration: ${rand(8, 20)}s;
      animation-delay:    ${rand(0, 12)}s;
      opacity: ${rand(0.2, 0.7)};
    `;
    container.appendChild(p);
  }
}

/** Estrellas del cielo nocturno (sección fogata) */
function initEstrellas() {
  const container = $('estrellas');
  if (!container) return;
  for (let i = 0; i < 160; i++) {
    const s = document.createElement('div');
    s.className = 'estrella-item';
    s.style.cssText = `
      left:   ${rand(0, 100)}%;
      top:    ${rand(0, 85)}%;
      width:  ${rand(1, 3)}px;
      height: ${rand(1, 3)}px;
      animation-duration: ${rand(2, 5)}s;
      animation-delay:    ${rand(0, 5)}s;
      opacity: ${rand(0.3, 1)};
    `;
    container.appendChild(s);
  }
}

/** Partículas de humo sobre la fogata */
function initHumo() {
  const container = $('humo-container');
  if (!container) return;
  for (let i = 0; i < 6; i++) {
    const h = document.createElement('div');
    h.className = 'humo-particula';
    h.style.cssText = `
      --drift: ${rand(-30, 30)}px;
      width:   ${rand(10, 20)}px;
      height:  ${rand(10, 20)}px;
      animation-duration: ${rand(2.5, 4.5)}s;
      animation-delay:    ${rand(0, 3)}s;
    `;
    container.appendChild(h);
  }
}

/** Chispas volando desde la fogata */
function initChispas() {
  const container = $('chispas-container');
  if (!container) return;
  for (let i = 0; i < 18; i++) {
    const c = document.createElement('div');
    c.className = 'chispa';
    c.style.cssText = `
      bottom: 22%;
      left:   calc(50% + ${rand(-20, 20)}px);
      --dx: ${rand(-60, 60)}px;
      --dy: ${rand(-80, -160)}px;
      animation-duration: ${rand(1.5, 3)}s;
      animation-delay:    ${rand(0, 4)}s;
      opacity: ${rand(0.5, 1)};
      width:  ${rand(2, 4)}px;
      height: ${rand(2, 4)}px;
    `;
    container.appendChild(c);
  }
}