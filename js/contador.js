/* ═══════════════════════════════════════════════════════════════
   contador.js — Reloj de bolsillo con contador en tiempo real
   ═══════════════════════════════════════════════════════════════ */

/** Actualiza los números del contador cada segundo */
function actualizarContador() {
  const inicio = new Date(CONFIG.fechaRelacion).getTime();
  const ahora  = Date.now();
  const diff   = Math.max(0, ahora - inicio);

  const dias  = Math.floor(diff / 86400000);
  const horas = Math.floor((diff % 86400000) / 3600000);
  const min   = Math.floor((diff % 3600000)  / 60000);
  const seg   = Math.floor((diff % 60000)    / 1000);

  const pad = (n, l = 2) => String(n).padStart(l, '0');

  html('cnt-dias',  pad(dias, 3));
  html('cnt-horas', pad(horas));
  html('cnt-min',   pad(min));
  html('cnt-seg',   pad(seg));

  /* Pulso visual en los segundos cada tick */
  const segEl = $('cnt-seg');
  if (segEl) {
    segEl.classList.remove('pulso-tick');
    /* Fuerza reflow para reiniciar la animación */
    void segEl.offsetWidth;
    segEl.classList.add('pulso-tick');
  }
}

/** Inicializa el contador y arranca el intervalo */
function initContador() {
  /* Texto descriptivo de la fecha de inicio */
  const fechaObj = new Date(CONFIG.fechaRelacion);
  html('contador-fecha-texto', fechaObj.toLocaleDateString('es-ES', {
    weekday: 'long',
    year:    'numeric',
    month:   'long',
    day:     'numeric'
  }));

  /* Primera actualización inmediata + intervalo de 1 segundo */
  actualizarContador();
  setInterval(actualizarContador, 1000);

  /* Animación de apertura de la tapa del reloj al entrar en viewport */
  const tapa = document.querySelector('.reloj-tapa');
  if (!tapa) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        tapa.classList.add('abierta');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  const seccion = $('contador');
  if (seccion) observer.observe(seccion);
}