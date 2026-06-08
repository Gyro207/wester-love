/* ═══════════════════════════════════════════════════════════════
   utils.js — Funciones auxiliares reutilizables
   ═══════════════════════════════════════════════════════════════ */

/** Pausa async */
const sleep = ms => new Promise(r => setTimeout(r, ms));

/** Número decimal aleatorio entre min y max */
const rand = (min, max) => Math.random() * (max - min) + min;

/** Número entero aleatorio entre min y max */
const randInt = (min, max) => Math.floor(rand(min, max));

/** Selecciona elemento por ID */
const $ = id => document.getElementById(id);

/** Inyecta HTML en un elemento por ID */
const html = (id, content) => {
  const el = $(id);
  if (el) el.innerHTML = content;
};

/**
 * Efecto máquina de escribir
 * @param {string} elementId  - ID del elemento destino
 * @param {string} text       - Texto a escribir
 * @param {number} speed      - Milisegundos por carácter
 */
async function typewriter(elementId, text, speed = 60) {
  const el = $(elementId);
  if (!el) return;
  el.textContent = '';
  for (let i = 0; i < text.length; i++) {
    el.textContent += text[i];
    await sleep(speed);
  }
}

/**
 * Muestra un mensaje flotante en la parte inferior
 * @param {string} texto - Mensaje a mostrar
 */
function mostrarMensajeFlotante(texto) {
  const el = $('mensaje-flotante');
  if (!el) return;
  el.textContent = `"${texto}"`;
  el.classList.add('visible');
  clearTimeout(el._timer);
  el._timer = setTimeout(() => el.classList.remove('visible'), 4000);
}

/**
 * Lanza pequeñas estrellas / corazones desde un elemento (feedback visual)
 * @param {HTMLElement} origen - Elemento desde el que salen las partículas
 */
function lanzarEstrellas(origen) {
  const rect = origen.getBoundingClientRect();
  for (let i = 0; i < 8; i++) {
    const s = document.createElement('div');
    s.textContent = Math.random() > 0.5 ? '✦' : '♥';
    s.style.cssText = `
      position: fixed;
      left: ${rect.left + rect.width / 2}px;
      top:  ${rect.top  + rect.height / 2}px;
      font-size: ${rand(12, 22)}px;
      color: ${Math.random() > 0.5 ? '#c9963a' : '#8b2020'};
      pointer-events: none;
      z-index: 999;
      transition: transform ${rand(0.6, 1.2).toFixed(2)}s ease,
                  opacity   ${rand(0.6, 1.2).toFixed(2)}s ease;
      opacity: 1;
    `;
    document.body.appendChild(s);
    requestAnimationFrame(() => {
      s.style.transform = `translate(${rand(-80, 80)}px, ${rand(-100, -30)}px) scale(0)`;
      s.style.opacity   = '0';
    });
    setTimeout(() => s.remove(), 1400);
  }
}