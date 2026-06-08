/* ═══════════════════════════════════════════════════════════════
   animations.js — Parallax, apertura de carta y scroll reveal
   ═══════════════════════════════════════════════════════════════ */

/* ─────────────────────────────────────────────────────────────
   PARALLAX — el sol y las montañas siguen el cursor
   ───────────────────────────────────────────────────────────── */
function initParallax() {
  document.addEventListener('mousemove', e => {
    const cx = window.innerWidth  / 2;
    const cy = window.innerHeight / 2;
    const dx = (e.clientX - cx) / cx; /* -1 a 1 */
    const dy = (e.clientY - cy) / cy;

    const mountains = document.querySelector('.mountains');
    const sun       = document.querySelector('.sun');
    if (mountains) mountains.style.transform = `translateX(${dx * 12}px)`;
    if (sun)       sun.style.transform = `translate(calc(-50% + ${dx * 6}px), calc(-50% + ${dy * 4}px))`;
  });
}

/* ─────────────────────────────────────────────────────────────
   SCROLL REVEAL — aparición al entrar en viewport
   ───────────────────────────────────────────────────────────── */
function initScrollReveal() {
  const observer = new IntersectionObserver(
    entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    }),
    { threshold: 0.12 }
  );
  document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
}

/** Re-observa los elementos del main-content después de que se muestre */
function reobservarScrollReveal() {
  const observer = new IntersectionObserver(
    entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    }),
    { threshold: 0.10 }
  );
  document.querySelectorAll('#main-content .scroll-reveal').forEach(el => {
    el.classList.remove('visible');
    observer.observe(el);
  });
}

/* ─────────────────────────────────────────────────────────────
   BOTONES CONTINUAR — scroll suave hacia la sección destino
   ───────────────────────────────────────────────────────────── */
function initBotonesContinuar() {
  document.querySelectorAll('.btn-continuar').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.target;
      if (target) {
        document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/* ─────────────────────────────────────────────────────────────
   APERTURA DE LA CARTA — secuencia cinematográfica
   ───────────────────────────────────────────────────────────── */

/** Escribe el contenido de la carta párrafo a párrafo */
async function escribirCarta() {
  html('carta-lugar',        CONFIG.cartaLugar);
  html('carta-fecha-display', new Date().toLocaleDateString('es-ES', {
    year: 'numeric', month: 'long', day: 'numeric'
  }));
  html('carta-saludo',       CONFIG.cartaSaludo);
  html('carta-nombre-firma', CONFIG.nombreEl);

  const cuerpoEl = $('carta-cuerpo');
  if (!cuerpoEl) return;
  cuerpoEl.textContent = '';

  const parrafos = CONFIG.mensajePrincipal.split('\n\n');
  for (const parrafo of parrafos) {
    const p = document.createElement('p');
    p.style.cssText = 'margin-bottom:1rem; opacity:0; transition:opacity .7s ease;';
    p.textContent = parrafo;
    cuerpoEl.appendChild(p);
    await sleep(100);
    p.style.opacity = '1';
    await sleep(500);
  }
}

/** Secuencia completa: fade intro → sobre → carta → texto */
async function abrirCarta() {
  /* Desactiva el botón para evitar doble clic */
  const btn = $('btn-abrir');
  btn.disabled    = true;
  btn.style.opacity = '.5';

  /* 1 — Fade out de la intro */
  const intro = document.getElementById('intro');
  intro.classList.add('fade-out');
  await sleep(900);
  intro.style.display = 'none';

  /* 2 — Muestra el contenido principal */
  $('main-content').classList.remove('hidden');

  /* 3 — La solapa del sobre sube */
  await sleep(400);
  document.querySelector('.sobre-flap')?.classList.add('abierto');

  /* 4 — El sobre se desvanece hacia arriba */
  await sleep(1000);
  document.querySelector('.sobre-animacion')?.classList.add('oculto');

  /* 5 — La carta cae desde arriba */
  await sleep(600);
  $('carta-paper')?.classList.add('visible');

  /* 6 — El texto se escribe solo */
  await sleep(700);
  await escribirCarta();
}