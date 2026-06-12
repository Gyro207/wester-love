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
    nombre: "La Primera Mirada",
    left: 18,
    top: 38,
    emoji: "👀",
    historia: "Todavía me parece raro pensar que todo empezó porque me miraste mal. Cualquier otra persona probablemente habría decidido mantenerse lejos. Yo decidí acercarme igual."
  },

  {
    nombre: "La Notificación",
    left: 35,
    top: 55,
    emoji: "📱",
    historia: "Nunca te lo dije, pero cuando vi que también me habías seguido pensé que tal vez no había arruinado todo después de hablarte. Ese día fui ridículamente feliz."
  },

  {
    nombre: "La Segunda Oportunidad",
    left: 52,
    top: 30,
    emoji: "🤍",
    historia: "Siempre dijiste que no dabas segundas oportunidades. Por eso nunca voy a olvidar que me dieras una a mí."
  },

  {
    nombre: "El Abrazo",
    left: 68,
    top: 48,
    emoji: "🤗",
    historia: "No creo haberte contado que probablemente fue el peor abrazo que di en mi vida. Pero también fue el único que realmente quise dar."
  },

  {
    nombre: "Los Buenos Días",
    left: 82,
    top: 62,
    emoji: "☀️",
    historia: "Es extraño cómo algo tan simple puede volverse tan importante. Hay días donde un simple 'buenos días' tuyo mejora todo."
  }
],

  /* ── Álbum polaroid ──────────────────────────────────────── */
  fotos: [
    { emoji: "🌅", nota: "El primer buenos días",      fecha: "Aquel día que empezó la costumbre"  },
    { emoji: "🐎", nota: "Las conversaciones infinitas",           fecha: "Cuando hablar contigo se volvió rutina"  },
    { emoji: "🔥", nota: "El abrazo que aún recuerdo",               fecha: "El único abrazo que se sintió natural"   },
    { emoji: "⛰️",  nota: "El detalle de One Piece",       fecha: "Pequeño para el mundo, enorme para mí"  },
    { emoji: "🌹", nota: "Las cosas que no te digo",         fecha: "Todo lo que admiro de vos"  },
    { emoji: "🌙", nota: "Incluso en los días silenciosos",     fecha: "Sigo pensando en vos" },
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
      fecha:   "El comienzo del camino",
      titulo:  "La chica del bar",
      emoji:   "🌸",
      texto: `No recuerdo qué música estaba sonando.

No recuerdo qué estaba tomando.

Pero sí recuerdo verte.

Estabas sola.

Y parecías tan seria que cualquier persona con sentido común hubiera seguido de largo.

Yo también debería haberlo hecho.

Pero algo me decía que si no lo intentaba me iba a arrepentir.

Y por primera vez en mi vida reuní el valor suficiente para hablar con una desconocida.

Todavía no sabía que terminarías cambiando tantas cosas. Pero desde ese momento supe que no iba a olvidarte.`,
        detalle: "— Guardado con amor"
      },
    {
      fecha:   "Nuestra primera conversación",
      titulo:  "La notificación que no esperaba",
      emoji:   "☀️",
      texto:   `Cuando me diste tu Instagram pensé que lo habías hecho por amabilidad.

Durante todo el camino de vuelta estuve convencido de eso.

Pero cuando vi que también me habías seguido de vuelta sentí algo que todavía recuerdo perfectamente.

Esperanza.

Te escribí sin esperar respuesta.

Y cuando respondiste me convertí en el hombre más feliz del mundo por unas horas.

Aquella noche hablamos hasta la madrugada.

Y sin darme cuenta, empezó algo que terminaría siendo mucho más importante de lo que imaginaba.`,
      detalle: "— El inicio de algo especial"
    },
    {
      fecha:   "La primera tormenta",
      titulo:  "Cuando regresaste",
      emoji:   "⛈️",
      texto:   `Hubo momentos difíciles.

Momentos donde pensé que todo había terminado.

Y aunque intenté seguir adelante, la verdad es que me dolió más de lo que me gusta admitir.

Pero entonces pasó algo que jamás esperé.

Volviste.

No buscaste excusas.

No intentaste justificar nada.

Simplemente reconociste tus errores y me pediste disculpas.

Y fue en ese momento cuando entendí algo.

La persona perfecta no es alguien que nunca se equivoca.

Es alguien que tiene el valor suficiente para reconocer cuando lo hace.

Y vos lo hiciste.`,
      detalle: "— El valor de volver a intentarlo"
    },
    {
      fecha:   "El primer abrazo",
      titulo:  "Lo que nunca olvidaré",
      emoji:   "❄️",
      texto:   `Hay muchos recuerdos bonitos.

Pero si tuviera que guardar uno para siempre sería aquel abrazo.

No porque fuera perfecto.

Probablemente lo abracé de la forma más torpe posible.

Pero porque fue real.

Nunca fui una persona que disfrute demasiado del contacto físico.

Sin embargo, por alguna razón, cuando fuiste vos se sintió diferente.

Natural.

Cálido.

Como si durante unos segundos el mundo hubiera dejado de hacer ruido.`,
      detalle: "— El abrazo que cambió todo"
    },
    {
      fecha:   "El camino que seguimos recorriendo",
      titulo:  "El camino que seguimos recorriendo",
      emoji:   "🌄",
      texto:   `Todavía hay cosas que no sabemos.

Todavía existen dudas.

Todavía hay días difíciles.

Exámenes.

Trabajo.

Distancias.

Miedos.

Pero si algo aprendí durante este tiempo es que los caminos importantes rara vez son sencillos.

Y aun así sigo aquí.

Porque cada buenos días.

Cada conversación.

Cada sticker extraño.

Cada pequeño momento compartido.

Me recuerda que conocerte fue una de las mejores cosas que me han pasado.

Y todavía quiero seguir descubriendo hacia dónde nos lleva este camino.`,
      detalle: "— El camino que seguimos recorriendo"
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
 fraseFinal: `No sé qué nos espera más adelante.

Pero si pudiera volver a aquella noche en el bar y elegir otra vez si acercarme o no...

Volvería a hacerlo.
Sin dudarlo...`,
};
