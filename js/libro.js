/* ═══════════════════════════════════════════════════════════════
   libro.js — Libro de recuerdos con paginación animada
   ═══════════════════════════════════════════════════════════════ */

let paginaActual = 0;

/** Renderiza todas las páginas en el DOM */
function renderPaginas() {
  const container = $('libro-paginas');
  if (!container) return;
  container.innerHTML = '';

  CONFIG.paginas.forEach((pag, i) => {
    const div = document.createElement('div');
    div.className = 'pagina' + (i === 0 ? ' activa' : '');
    div.dataset.index = i;
    div.innerHTML = `
      <p class="pagina-numero-texto">— Página ${i + 1} de ${CONFIG.paginas.length} —</p>
      <span class="pagina-fecha-tag">${pag.fecha}</span>
      <h3 class="pagina-titulo-p">${pag.titulo}</h3>
      <div class="pagina-emoji">${pag.emoji}</div>
      <p class="pagina-texto-p">${pag.texto}</p>
      <p class="pagina-detalle">${pag.detalle}</p>
    `;
    container.appendChild(div);
  });
}

/** Actualiza qué página es visible y el estado de los botones */
function actualizarLibro() {
  const paginas = document.querySelectorAll('.pagina');
  const total   = CONFIG.paginas.length;

  paginas.forEach((p, i) => {
    p.classList.remove('activa', 'saliendo-izq', 'saliendo-der');
    if (i === paginaActual) p.classList.add('activa');
  });

  html('pagina-indicador', `${paginaActual + 1} / ${total}`);

  /* Opacidad de botones según límites */
  const btnPrev = $('btn-prev');
  const btnNext = $('btn-next');
  if (btnPrev) btnPrev.style.opacity = paginaActual === 0         ? '.3' : '1';
  if (btnNext) btnNext.style.opacity = paginaActual === total - 1 ? '.3' : '1';
}

/**
 * Cambia de página con animación de deslizamiento
 * @param {number} direccion  +1 siguiente | -1 anterior
 */
async function cambiarPagina(direccion) {
  const total   = CONFIG.paginas.length;
  const nueva   = paginaActual + direccion;
  if (nueva < 0 || nueva >= total) return;

  const paginas  = document.querySelectorAll('.pagina');
  const actual   = paginas[paginaActual];
  const siguiente = paginas[nueva];

  /* Clase de salida según dirección */
  const claseSalida  = direccion > 0 ? 'saliendo-izq' : 'saliendo-der';
  const claseEntrada = direccion > 0 ? 'entrando-der' : 'entrando-izq';

  actual.classList.add(claseSalida);
  siguiente.classList.add(claseEntrada);
  siguiente.classList.add('activa');

  await sleep(350);

  actual.classList.remove('activa', claseSalida);
  siguiente.classList.remove(claseEntrada);

  paginaActual = nueva;
  actualizarLibro();
}

/** Inicializa el libro completo */
function initLibro() {
  renderPaginas();
  actualizarLibro();

  $('btn-prev')?.addEventListener('click', () => cambiarPagina(-1));
  $('btn-next')?.addEventListener('click', () => cambiarPagina(+1));

  /* Soporte swipe táctil */
  const libroEl = $('libro');
  if (!libroEl) return;

  let touchStartX = 0;

  libroEl.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });

  libroEl.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) < 40) return; /* umbral mínimo */
    cambiarPagina(dx < 0 ? +1 : -1);
  }, { passive: true });

  /* Soporte teclado ← → cuando el libro está en foco */
  libroEl.setAttribute('tabindex', '0');
  libroEl.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') cambiarPagina(+1);
    if (e.key === 'ArrowLeft')  cambiarPagina(-1);
  });
}