/* ═══════════════════════════════════════════════════════════════
   sections.js — Mapa, Álbum, Sobres, Mensajes ocultos y Modal
   ═══════════════════════════════════════════════════════════════ */

/* ─────────────────────────────────────────────────────────────
   SECCIÓN 3: MAPA INTERACTIVO
   ───────────────────────────────────────────────────────────── */
function initMapa() {
  const container = $('mapa-fondo');
  if (!container) return;

  /* Dibuja líneas de ruta entre puntos consecutivos */
  CONFIG.recuerdos.forEach((rec, i) => {
    if (i === 0) return;
    const prev = CONFIG.recuerdos[i - 1];

    const x1 = prev.left, y1 = prev.top;
    const x2 = rec.left,  y2 = rec.top;
    const dx = x2 - x1,   dy = y2 - y1;
    const len = Math.sqrt(dx * dx + dy * dy);
    const ang = Math.atan2(dy, dx) * 180 / Math.PI;

    const linea = document.createElement('div');
    linea.className = 'mapa-linea';
    linea.style.cssText = `
      left: ${x1}%;
      top:  ${y1}%;
      width: ${len}%;
      transform: rotate(${ang}deg);
      transform-origin: 0 50%;
    `;
    container.appendChild(linea);
  });

  /* Crea los puntos interactivos del mapa */
  CONFIG.recuerdos.forEach(rec => {
    const punto = document.createElement('div');
    punto.className = 'mapa-punto';
    punto.style.left = rec.left + '%';
    punto.style.top  = rec.top  + '%';
    punto.setAttribute('role',      'button');
    punto.setAttribute('tabindex',  '0');
    punto.setAttribute('aria-label', rec.nombre);
    punto.innerHTML = `
      <div class="mapa-punto-inner"></div>
      <span class="mapa-punto-label">${rec.nombre}</span>
    `;

    const mostrar = () => mostrarTooltipMapa(rec);
    punto.addEventListener('click',   mostrar);
    punto.addEventListener('keydown', e => { if (e.key === 'Enter') mostrar(); });
    container.appendChild(punto);
  });
}

function mostrarTooltipMapa(rec) {
  const tooltip = $('mapa-tooltip');
  if (!tooltip) return;
  $('tooltip-foto').textContent = rec.emoji;
  html('tooltip-titulo',   rec.nombre);
  html('tooltip-historia', rec.historia);
  tooltip.classList.add('visible');

  clearTimeout(tooltip._timer);
  tooltip._timer = setTimeout(() => tooltip.classList.remove('visible'), 5000);
}

/* ─────────────────────────────────────────────────────────────
   SECCIÓN 4: ÁLBUM POLAROID
   ───────────────────────────────────────────────────────────── */
function initAlbum() {
  const grid = $('album-grid');
  if (!grid) return;

  CONFIG.fotos.forEach(foto => {
    const rot = rand(-6, 6).toFixed(1);
    const div = document.createElement('div');
    div.className = 'polaroid';
    div.style.setProperty('--rot', rot + 'deg');
    div.innerHTML = `
      <div class="polaroid-foto">${foto.emoji}</div>
      <p class="polaroid-nota">${foto.nota}</p>
      <p class="polaroid-fecha">${foto.fecha}</p>
    `;

    /* Efecto hover: se endereza y lanza estrellas al hacer clic */
    div.addEventListener('click', () => lanzarEstrellas(div));
    grid.appendChild(div);
  });
}

/* ─────────────────────────────────────────────────────────────
   SECCIÓN 5: SOBRES / CARTAS SECRETAS
   ───────────────────────────────────────────────────────────── */
function initSobres() {
  const grid = $('sobres-grid');
  if (!grid) return;

  CONFIG.cartas.forEach(carta => {
    const div = document.createElement('div');
    div.className = 'sobre-item';
    div.setAttribute('role',       'button');
    div.setAttribute('tabindex',   '0');
    div.setAttribute('aria-label', 'Abrir: ' + carta.titulo);
    div.innerHTML = `
      <div class="sobre-front">
        <div class="sobre-sello-item">${carta.sello}</div>
      </div>
      <p class="sobre-titulo">${carta.titulo}</p>
      <p class="sobre-subtitulo">${carta.subtitulo}</p>
    `;

    const abrir = () => abrirModal(carta);
    div.addEventListener('click',   abrir);
    div.addEventListener('keydown', e => { if (e.key === 'Enter') abrir(); });
    grid.appendChild(div);
  });
}

/* ─────────────────────────────────────────────────────────────
   MODAL — carta desplegada
   ───────────────────────────────────────────────────────────── */
function abrirModal(carta) {
  html('modal-titulo', carta.titulo);
  html('modal-cuerpo', carta.cuerpo);
  html('modal-firma',  carta.firma);

  const overlay = $('modal-overlay');
  overlay.classList.add('visible');
  overlay.removeAttribute('aria-hidden');
  $('modal-cerrar').focus();

  /* Efecto de entrada: pequeño rebote */
  const modalCarta = overlay.querySelector('.modal-carta');
  modalCarta.style.transform = 'scale(.92) translateY(12px)';
  modalCarta.style.transition = 'transform .35s cubic-bezier(.34,1.56,.64,1)';
  requestAnimationFrame(() => {
    setTimeout(() => { modalCarta.style.transform = 'scale(1) translateY(0)'; }, 20);
  });
}

function cerrarModal() {
  const overlay = $('modal-overlay');
  overlay.classList.remove('visible');
  overlay.setAttribute('aria-hidden', 'true');
}

function initModal() {
  $('modal-cerrar').addEventListener('click', cerrarModal);
  $('modal-overlay').addEventListener('click', e => {
    if (e.target === $('modal-overlay')) cerrarModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') cerrarModal();
  });
}

/* ─────────────────────────────────────────────────────────────
   SECCIÓN 8: MENSAJES OCULTOS
   ───────────────────────────────────────────────────────────── */
function initOcultos() {
  const grid = $('ocultos-grid');
  if (!grid) return;

  CONFIG.mensajesOcultos.forEach(msg => {
    const div = document.createElement('div');
    div.className = 'oculto-item';
    div.setAttribute('role',       'button');
    div.setAttribute('tabindex',   '0');
    div.setAttribute('aria-label', 'Descubrir mensaje secreto');
    div.dataset.revelado = 'false';

    /* Icono de interrogación antes de revelar */
    div.textContent = '?';

    const revelar = () => {
      if (div.dataset.revelado === 'true') return;
      div.dataset.revelado = 'true';
      div.classList.add('revelado');
      div.textContent = msg.icono;
      mostrarMensajeFlotante(msg.frase);
      lanzarEstrellas(div);
    };

    div.addEventListener('click',   revelar);
    div.addEventListener('keydown', e => { if (e.key === 'Enter') revelar(); });
    grid.appendChild(div);
  });
}

/* ─────────────────────────────────────────────────────────────
   SECCIÓN 9: FOGATA — mensaje final
   ───────────────────────────────────────────────────────────── */
function initFogata() {
  initEstrellas();
  initHumo();
  initChispas();

  html('mensaje-final-cita', CONFIG.fraseFinal);
  html('firma-ella',         CONFIG.nombreElla);
  html('firma-el',           CONFIG.nombreEl);
}