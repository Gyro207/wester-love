/* ═══════════════════════════════════════════════════════════════
   config.js — Toda la configuración del proyecto
   Edita aquí nombres, fechas, textos, fotos y mensajes.
   ═══════════════════════════════════════════════════════════════ */

const CONFIG = {
  /* ── Nombres de la pareja ─────────────────────────────────── */
  nombreEl:   "Lucas",
  nombreElla: "Macarena",

  /* ── Fecha de inicio de la relación (para el contador) ────── */
  fechaRelacion: "2022-03-15T20:00:00",

  /* ── Intro ──────────────────────────────────────────────────  */
  textoIntro: "Para la mujer que cambió mi vida...",

  /* ── Carta principal ─────────────────────────────────────── */
  cartaLugar:  "Somewhere, Texas",
  cartaSaludo: "Mi querida Eleanor,",
  mensajePrincipal: `Cuando las palabras se niegan a salir con gracia, el lápiz vacila sobre el papel y las noches se hacen largas, es tu recuerdo el que me guía como un farol en la oscuridad del desierto.

Hay lugares que solo existen porque tú y yo los pisamos juntos. Hay atardeceres que no tendrían sentido sin tus ojos reflejando el mismo cielo. Cada kilómetro de polvo rojo que he cruzado lleva grabado tu nombre en la suela de mis botas.

No soy hombre de muchas palabras bonitas, lo sabes bien. Pero sé que cuando el viento sopla desde el norte y las estrellas aparecen sobre las montañas, pienso en ti con una fuerza que ningún caballo podría desbocarse tanto.

Guarda esta carta cerca del corazón. Algún día estaremos sentados frente a la misma fogata, y entonces no habrá necesidad de palabras.

Hasta ese día, cada amanecer lo vivo pensando en ti.`,

  /* ── Puntos del mapa ─────────────────────────────────────── */
  recuerdos: [
    {
      nombre:  "Río Rojo",
      left: 18, top: 38,
      emoji:   "🌊",
      historia: "La primera vez que cruzamos el río juntos. El agua estaba fría y reíste tanto que casi caes del caballo."
    },
    {
      nombre:  "Cabaña del Pino",
      left: 35, top: 55,
      emoji:   "🏚️",
      historia: "Aquella tormenta de nieve nos atrapó tres días. Nunca más he tomado café tan bueno ni dormido tan tranquilo."
    },
    {
      nombre:  "Cañón Dorado",
      left: 52, top: 30,
      emoji:   "🏜️",
      historia: "El amanecer desde el borde del cañón. Dijiste que parecía el fin del mundo, y yo dije que prefería ese fin a cualquier otro comienzo."
    },
    {
      nombre:  "Estación Meridian",
      left: 68, top: 48,
      emoji:   "🚂",
      historia: "Te despedí en ese andén durante seis meses. Cada tren que llegaba sin ti era un pequeño funeral."
    },
    {
      nombre:  "Pradera Alta",
      left: 82, top: 62,
      emoji:   "🌾",
      historia: "Picnic entre la hierba alta. Robaste mi sombrero y corriste hasta que te alcancé entre risas y promesas."
    },
  ],

  /* ── Álbum polaroid ──────────────────────────────────────── */
  fotos: [
    { emoji: "🌅", nota: "Nuestro primer amanecer",      fecha: "Marzo, 1899"  },
    { emoji: "🐎", nota: "Cabalgando al oeste",           fecha: "Abril, 1899"  },
    { emoji: "🔥", nota: "Noche de fogata",               fecha: "Mayo, 1899"   },
    { emoji: "⛰️",  nota: "Las montañas del norte",       fecha: "Junio, 1899"  },
    { emoji: "🌹", nota: "Las flores del camino",         fecha: "Julio, 1899"  },
    { emoji: "🌙", nota: "Luna llena en el desierto",     fecha: "Agosto, 1899" },
  ],

  /* ── Cartas secretas ─────────────────────────────────────── */
  cartas: [
    {
      titulo:    "La primera promesa",
      subtitulo: "Bajo las estrellas",
      sello:     "✦",
      cuerpo:    `Aquella noche prometí que nunca dejaría que el mundo te apagara. Que mientras yo respirara, habría alguien que viera la luz que llevas dentro, esa que tú misma a veces no alcanzas a ver.

No soy perfecto. Tengo el alma llena de cicatrices y los bolsillos llenos de polvo. Pero tengo también un corazón que late solo por ti.

Eso es lo único que sé dar, y lo doy entero.`,
      firma: "Tuyo, siempre — W."
    },
    {
      titulo:    "Lo que nunca dije",
      subtitulo: "Guardado por años",
      sello:     "♥",
      cuerpo:    `Hay cosas que un hombre del oeste no sabe decir mirando a los ojos. Así que lo escribo aquí, donde el papel puede aguantar el peso.

Me enamoré de tu risa antes que de todo lo demás. Después de tu terquedad. Después de cómo te defiendes cuando crees en algo. Después de esa manera tuya de mirar el horizonte como si supieras exactamente qué hay detrás.

Llevo todos estos años tratando de ser alguien digno de todo eso. No sé si lo he logrado. Pero lo sigo intentando, cada maldito día, por ti.`,
      firma: "Con todo lo que tengo — W."
    },
    {
      titulo:    "Carta para el futuro",
      subtitulo: "Cuando lleguemos al final",
      sello:     "🌟",
      cuerpo:    `Si algún día encuentras esta carta, quiero que sepas que todo lo que vivimos fue real. Cada kilómetro, cada tormenta, cada amanecer compartido.

Envejecer contigo es el único plan que me importa. Sentarme en el porche cuando las rodillas ya no aguanten el galope, tomarte la mano y decir: valió la pena. Cada paso, cada bache, cada desvío.

El camino fue duro. Tú lo hiciste hermoso.`,
      firma: "Para siempre tuyo — W."
    },
  ],

  /* ── Páginas del libro ───────────────────────────────────── */
  paginas: [
    {
      fecha:   "Primavera, 1899",
      titulo:  "El comienzo del camino",
      emoji:   "🌸",
      texto:   "Nadie nos advirtió que aquel primer día juntos cambiaría el mapa de nuestras vidas. Fue como si el destino hubiera trazado una ruta nueva, solo para nosotros, en la tierra roja del oeste.",
      detalle: "— Guardado con amor"
    },
    {
      fecha:   "Verano, 1899",
      titulo:  "Los días dorados",
      emoji:   "☀️",
      texto:   "El calor del verano texano no tiene piedad. Pero contigo hasta el sol parecía una gentileza. Recuerdo cada siesta bajo la sombra del roble viejo, cada tarde lenta que se negaba a convertirse en noche.",
      detalle: "— Esos días brillaron más"
    },
    {
      fecha:   "Otoño, 1899",
      titulo:  "La primera tormenta",
      emoji:   "⛈️",
      texto:   "Llegaron tiempos difíciles. El dinero escaso, el camino incierto, el miedo a perder lo que habíamos construido. Pero en las tormentas también descubrí lo que eras de verdad: la persona más valiente que he conocido.",
      detalle: "— Las tormentas nos forjaron"
    },
    {
      fecha:   "Invierno, 1899",
      titulo:  "El calor de quedarse",
      emoji:   "❄️",
      texto:   "Cuando el invierno llegó al norte, nos quedamos. No por falta de camino, sino porque descubrimos que el hogar no es un lugar. Es la persona con quien eliges enfrentar el frío.",
      detalle: "— Contigo, nunca tuve frío"
    },
    {
      fecha:   "Primavera, 1900",
      titulo:  "Un nuevo horizonte",
      emoji:   "🌄",
      texto:   "Con el deshielo llegaron nuevas promesas. Decidimos que el siguiente trecho del camino lo haríamos a propósito, eligiéndonos cada mañana, como se elige la dirección antes de montar.",
      detalle: "— El mejor viaje empieza aquí"
    },
  ],

  /* ── Mensajes ocultos ────────────────────────────────────── */
  mensajesOcultos: [
    { icono: "🌹", frase: "Eres el lugar al que siempre quiero volver." },
    { icono: "⭐", frase: "Te encontré cuando ya había dejado de buscar." },
    { icono: "🔥", frase: "Contigo, incluso el frío tiene nombre bonito." },
    { icono: "🐎", frase: "Me enseñaste que hay destinos más importantes que los del mapa." },
    { icono: "🌙", frase: "Eres mi norte cuando pierdo la dirección." },
    { icono: "✉️", frase: "Cada carta que escribí te la escribí a ti, aunque no lo supiera." },
    { icono: "⛰️",  frase: "Las montañas más altas las escalo pensando en tu sonrisa." },
    { icono: "🌅", frase: "Mi amanecer favorito es cualquiera en el que estás tú." },
  ],

  /* ── Frase final de la fogata ────────────────────────────── */
  fraseFinal: "Y si tuviera que vivir mil vidas más,\nvolvería a encontrarte en cada una de ellas.",
};
