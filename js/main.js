/* ═══════════════════════════════════════════════════════════════
   main.js — Punto de entrada principal
   Carga las secciones HTML, conecta todos los módulos JS
   ═══════════════════════════════════════════════════════════════ */

/* ─────────────────────────────────────────────────────────────
   CARGA DE SECCIONES — inyecta cada archivo HTML en el DOM
   ───────────────────────────────────────────────────────────── */

/**
 * Carga un archivo HTML parcial y lo inyecta en un contenedor
 * @param {string} url        - Ruta del archivo HTML
 * @param {string} contenedorId - ID del elemento destino
 */
async function cargarSeccion(url, contenedorId) {
  try {
    const res  = await fetch(url);
    if (!res.ok) throw new Error(`No se pudo cargar: ${url}`);
    const text = await res.text();
    const el   = document.getElementById(contenedorId);
    if (el) el.innerHTML = text;
  } catch (err) {
    console.warn('[main.js] cargarSeccion →', err.message);
  }
}

/**
 * Carga todas las secciones en paralelo y luego los componentes
 */
async function cargarTodo() {
  /* Muestra el loader mientras carga */
  mostrarLoader(true);

  /* Secciones principales (en orden de aparición) */
  await Promise.all([
    cargarSeccion('sections/intro.html',    'slot-intro'),
    cargarSeccion('sections/carta.html',    'slot-carta'),
    cargarSeccion('sections/mapa.html',     'slot-mapa'),
    cargarSeccion('sections/album.html',    'slot-album'),
    cargarSeccion('sections/sobres.html',   'slot-sobres'),
    cargarSeccion('sections/contador.html', 'slot-contador'),
    cargarSeccion('sections/libro.html',    'slot-libro'),
    cargarSeccion('sections/ocultos.html',  'slot-ocultos'),
    cargarSeccion('sections/fogata.html',   'slot-fogata'),
  ]);

  /* Componentes flotantes */
  await Promise.all([
    cargarSeccion('components/modal.html',  'slot-modal'),
    cargarSeccion('components/navbar.html', 'slot-navbar'),
  ]);

  mostrarLoader(false);
}

/* ─────────────────────────────────────────────────────────────
   LOADER
   ───────────────────────────────────────────────────────────── */
function mostrarLoader(visible) {
  const loader = document.getElementById('loader');
  if (!loader) return;
  if (visible) {
    loader.classList.remove('oculto');
  } else {
    loader.classList.add('oculto');
    setTimeout(() => loader.style.display = 'none', 600);
  }
}

/* ─────────────────────────────────────────────────────────────
   NAVBAR — resalta la sección activa al hacer scroll
   ───────────────────────────────────────────────────────────── */
function initNavbar() {
  const secciones = [
    'intro', 'carta', 'mapa', 'album',
    'cartas-secretas', 'contador', 'libro',
    'mensajes-ocultos', 'fogata'
  ];

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;

      /* Marca el enlace activo en la navbar */
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('activo', link.dataset.target === id);
      });
    });
  }, { threshold: 0.35 });

  secciones.forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });

  /* Toggle del menú hamburguesa en móvil */
  const toggle = document.getElementById('nav-toggle');
  const menu   = document.getElementById('nav-menu');
  toggle?.addEventListener('click', () => {
    menu?.classList.toggle('abierto');
    toggle.setAttribute('aria-expanded',
      menu?.classList.contains('abierto') ? 'true' : 'false'
    );
  });

  /* Cierra el menú al elegir una sección */
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      menu?.classList.remove('abierto');
      const target = link.dataset.target;
      document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

/* ─────────────────────────────────────────────────────────────
   INICIALIZACIÓN GENERAL
   ───────────────────────────────────────────────────────────── */
async function init() {
  /* 1 — Carga todos los HTML parciales */
  await cargarTodo();

  /* 2 — Arranca partículas de polvo y parallax de la intro */
  initDust();
  initParallax();
  initScrollReveal();

  /* 3 — Navbar flotante */
  initNavbar();

  /* 4 — Sistema de sonidos */
  initSonidos();

  /* 5 — Efecto máquina de escribir en la intro
         Cada carácter dispara el sonido de tecla */
  await sleep(800);
  const textoIntro = CONFIG.textoIntro;
  const elTW = document.getElementById('intro-typewriter');
  if (elTW) {
    elTW.textContent = '';
    for (let i = 0; i < textoIntro.length; i++) {
      elTW.textContent += textoIntro[i];
      sonidoTypewriter();
      await sleep(65);
    }
  }

  /* 6 — Botón "Abrir la Carta" */
  document.getElementById('btn-abrir')?.addEventListener('click', async () => {
    sonidoAbrirCarta();   /* ← sonido sobre + papel */
    await abrirCarta();

    /* Inicializa el resto del contenido una vez visible */
    initMapa();
    initAlbum();
    initSobres();
    initContador();
    initLibro();
    initOcultos();
    initFogata();
    initBotonesContinuar();
    reobservarScrollReveal();

    /* Conecta sonido al pasar páginas del libro */
    document.getElementById('btn-prev')?.addEventListener('click', sonidoPagina);
    document.getElementById('btn-next')?.addEventListener('click', sonidoPagina);

    /* Conecta sonido al revelar mensajes ocultos */
    document.getElementById('ocultos-grid')?.addEventListener('click', e => {
      if (e.target.closest('.oculto-item')) sonidoRevelar();
    });
  });

  /* 7 — Modal (cerrar con X, overlay y Escape) */
  initModal();
}

/* Arranca cuando el DOM esté listo */
document.addEventListener('DOMContentLoaded', init);