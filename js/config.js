/* ═══════════════════════════════════════════════════════════════
   config.js — Toda la configuración del proyecto
   Edita aquí nombres, fechas, textos, fotos y mensajes.
   ═══════════════════════════════════════════════════════════════ */

const CONFIG = {
  /* ── Nombres de la pareja ─────────────────────────────────── */
  nombreEl:   "Lucas",
  nombreElla: "Maca",

  /* ── Fecha de inicio de la relación (para el contador) ────── */
  fechaRelacion: "2025-04-10T21:00:00",

  /* ── Intro ──────────────────────────────────────────────────  */
  textoIntro: "Para la mujer que cambió mi vida...",

  /* ── Carta principal ─────────────────────────────────────── */
  cartaLugar:  "Somewhere, Texas",
  cartaSaludo: "Mi querida Maca,",
  mensajePrincipal: `Nunca fui bueno escribiendo cartas.

Tampoco hablando de lo que siento.

Si soy sincero, muchas veces ni siquiera entiendo bien lo que siento hasta que me quedo solo pensando en ello durante horas.

Pero hay cosas que no quiero dejar guardadas para siempre.

Todavía recuerdo la primera vez que te vi.

Estabas sola.

Seria.

Tan seria que cuando me miraste pensé por un momento que me ibas a echar del lugar con la mirada.

Cualquier persona normal probablemente habría seguido de largo.

Yo también debería haberlo hecho.

Pero no pude.

Algo en vos llamó mi atención de una forma que nunca había sentido antes.

Y aunque estaba terriblemente nervioso, fui a hablarte.

Todavía creo que fue una de las decisiones más valientes que tomé en mi vida.

Lo curioso es que no fue un solo momento lo que me hizo enamorarme de vos.

Fue algo mucho más simple.

Empecé a pensar en vos más de lo normal.

Después empecé a esperar nuestras conversaciones.

Después me descubrí sonriendo cuando veía un mensaje tuyo.

Y cuando quise darme cuenta ya era demasiado tarde.

Me gustaba escucharte.

Me gustaba cómo pensabas.

Me gustaba lo directa que eras conmigo.

Me gustaba esa forma tan tuya de ser fuerte cuando la vida se pone difícil.

Y también esa parte más sensible que escondés cuando creés que nadie está mirando.

Hay muchos momentos que podría escribir aquí.

Pero si tuviera que guardar uno solo, creo que sería aquel abrazo.

Vos ya tenías que irte.

Te acercaste despacio y abriste los brazos.

Yo no tenía idea de qué hacer.

La verdad es que nunca fui una persona muy cariñosa.

Ni siquiera me gustan mucho los abrazos.

Pero ese fue distinto.

Porque eras vos.

No se sintió incómodo.

No se sintió extraño.

Se sintió natural.

Cálido.

Como si fuera exactamente donde tenía que estar en ese momento.

A veces tengo miedo.

No de lo que siento por vos.

Eso lo tengo claro desde hace mucho tiempo.

Lo que me asusta es no estar a la altura.

No ser lo que esperás.

Equivocarme.

Lastimarte sin querer.

Porque si algo aprendí durante este tiempo es que tu bienestar me importa mucho más de lo que me gusta admitir.

Pero incluso con todos esos miedos, hay algo que nunca cambió.

Cada mañana sigo alegrándome cuando pienso en vos.

Cada día sigo queriendo saber cómo estás.

Y cada vez que aparece tu nombre, sigo sintiendo esa misma felicidad que sentí cuando empezamos a conocernos.

Quizá no sepa exactamente qué nos espera más adelante.

Pero sí sé algo.

Me alegra que hayas aparecido en mi vida.

Más de lo que estas palabras pueden explicar.
`,

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
      titulo:    "Lo que admiro de vos",
      subtitulo: "Las cosas que quizá no ves",
      sello:     "✦",
      cuerpo:    `Maca,

Hay algo que siempre me llamó la atención de vos.

No fue tu sonrisa.

No fueron tus ojos

Ni siquiera fue lo hermosa que me pareciste aquella primera vez.

Fue tu forma de seguir adelante.

La vida no siempre fue amable con vos y aun así seguís levantándote cada mañana para enfrentar lo que venga.

Hay una fuerza en vos que admiro más de lo que puedo explicar.

Y lo curioso es que muchas veces esa misma fuerza convive con una sensibilidad enorme.

A veces te veo intentando cargar con todo sola.

Como si no quisieras preocupar a nadie.

Como si mostrar que algo te duele fuera una derrota.

Pero nunca pensé que fueras débil por sentir.

Al contrario.

Creo que hace falta mucho valor para seguir siendo buena persona después de haber pasado por cosas difíciles.

Y eso es algo que siempre voy a admirar de vos.

Quizá no te lo digo lo suficiente.

Pero muchas de las cosas que más me gustan de vos no se ven a simple vista.

Son esas pequeñas partes de tu corazón que descubrí con el tiempo.

Y son las que más valoro.`,
      firma: "Tuyo, siempre —Lucas."
    },
    {
      titulo:    "El día que me di cuenta",
      subtitulo: "Demasiado tarde para escapar",
      sello:     "♥",
      cuerpo:    `Maca,

Durante mucho tiempo pensé que podía entender mis propios sentimientos.

Resulta que estaba equivocado.

Porque no hubo un momento exacto en el que decidiera enamorarme de vos.

Simplemente ocurrió.

Un día nuestras conversaciones dejaron de ser una parte cualquiera de mi rutina.

Y empezaron a convertirse en algo que esperaba.

Me encontraba pensando en cosas que quería contarte.

En cosas que te harían reír.

En cómo había sido tu día.

Y cuando intentaba distraerme terminaba pensando en vos otra vez.

Recuerdo perfectamente aquella noche.

La noche en la que me quedé despierto dándole vueltas a todo.

Intentando encontrar una explicación.

Intentando convencerme de que estaba exagerando.

Pero cuanto más pensaba, más evidente se volvía.

No era costumbre.

No era cariño.

No era simple interés.

Me había enamorado de vos.

Y para cuando lo entendí ya era demasiado tarde para escapar.

La verdad es que tampoco quería hacerlo.`,
      firma: "Con todo lo que tengo — Lucas."
    },
    {
      titulo:    "Lo que todavía no te digo",
      subtitulo: "Entre miedo y esperanza",
      sello:     "🌟",
      cuerpo:    `Maca,

Si hay algo que rara vez muestro es el miedo.

Pero la verdad es que existe.

Y aparece más seguido de lo que me gustaría admitir.

No tengo miedo de sentir lo que siento por vos.

Eso nunca me preocupó.

Lo que me preocupa es no ser suficiente.

No cumplir tus expectativas.

Equivocarme.

Decir algo mal.

Hacer algo mal.

Lastimarte sin querer.

Porque aunque a veces me hago el fuerte, la realidad es que me importás muchísimo.

Y cuando alguien te importa de verdad, también aparece el miedo a perderlo.

Pero entre todos esos miedos también hay algo más.

Esperanza.

La esperanza de seguir compartiendo días contigo.

Seguir recibiendo tus buenos días.

Seguir escuchando tus historias.

Seguir descubriendo cosas nuevas sobre vos.

No sé qué nos espera más adelante.

Y quizá nadie puede saberlo.

Pero si algo aprendí durante este tiempo es que hay caminos que vale la pena recorrer incluso cuando no conocemos el destino.

Y vos sos uno de ellos.`,
      firma: "Para siempre tuyo — Lucas."
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
