/* ═══════════════════════════════════════════════════════════════
   sounds.js — Sistema de sonidos con Web Audio API
   ═══════════════════════════════════════════════════════════════ */

let audioCtx = null;

function getAudioCtx() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioCtx;
}

/* ── Generador base de tono ── */
function playTone({ frequency = 440, type = 'sine', duration = 0.1, volume = 0.1, decay = 0.08 } = {}) {
  try {
    const ctx = getAudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.type = type;
    osc.frequency.setValueAtTime(frequency, ctx.currentTime);

    gain.gain.setValueAtTime(volume, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + duration + decay);
  } catch (e) {
    /* Silencioso si el navegador bloquea audio */
  }
}

/* ── Ruido blanco corto (papel, sobre) ── */
function playNoise({ duration = 0.15, volume = 0.05 } = {}) {
  try {
    const ctx = getAudioCtx();
    const bufferSize = ctx.sampleRate * duration;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1);
    }
    const source = ctx.createBufferSource();
    source.buffer = buffer;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(volume, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

    source.connect(gain);
    gain.connect(ctx.destination);
    source.start();
  } catch (e) {}
}

/* ─────────────────────────────────────────────────────────────
   SONIDOS ESPECÍFICOS
   ───────────────────────────────────────────────────────────── */

/* Tecla de máquina de escribir */
function sonidoTypewriter() {
  playTone({ frequency: 600 + Math.random() * 200, type: 'square', duration: 0.05, volume: 0.06 });
  playNoise({ duration: 0.04, volume: 0.03 });
}

/* Abrir la carta / sobre */
function sonidoAbrirCarta() {
  playNoise({ duration: 0.4, volume: 0.08 });
  setTimeout(() => playTone({ frequency: 320, type: 'sine', duration: 0.3, volume: 0.07 }), 200);
}

/* Pasar página del libro */
function sonidoPagina() {
  playNoise({ duration: 0.2, volume: 0.06 });
  playTone({ frequency: 480, type: 'sine', duration: 0.12, volume: 0.05 });
}

/* Revelar mensaje oculto */
function sonidoRevelar() {
  playTone({ frequency: 880, type: 'sine', duration: 0.2, volume: 0.08 });
  setTimeout(() => playTone({ frequency: 1100, type: 'sine', duration: 0.15, volume: 0.06 }), 100);
}

/* ─────────────────────────────────────────────────────────────
   INIT — desbloquea AudioContext en primer gesto del usuario
   ───────────────────────────────────────────────────────────── */
function initSonidos() {
  const desbloquear = () => {
    getAudioCtx();
    document.removeEventListener('click', desbloquear);
    document.removeEventListener('keydown', desbloquear);
  };
  document.addEventListener('click', desbloquear);
  document.addEventListener('keydown', desbloquear);
}
