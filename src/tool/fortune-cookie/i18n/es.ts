import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { FortuneCookieLocaleContent } from '../index';

const slug = 'galleta-fortuna';
const title = 'Galleta de la Fortuna';
const description = 'Consulta tu destino diario y descubre tus números de la suerte. Una fortuna al día, revelada con un clic.';

const faq: FortuneCookieLocaleContent['faq'] = [
  {
    question: '¿Puedo abrir más de una galleta al día?',
    answer: 'El destino solo habla una vez al día. Guardamos tu fortuna en el dispositivo para que sea tu guía durante la jornada.'
  },
  {
    question: '¿Las fortunas se generan aleatoriamente?',
    answer: 'Sí: se selecciona una fortuna aleatoria cada día y se guarda localmente. Las 25 fortunas tienen la misma probabilidad de ser elegidas, asegurando variedad con el tiempo.'
  }
];

const howTo: FortuneCookieLocaleContent['howTo'] = [
  { name: 'Golpear', text: 'Haz clic varias veces sobre la galleta para romperla.' },
  { name: 'Leer', text: 'Descubre el mensaje oculto en su interior y tus números de la suerte.' }
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step) => ({
    '@type': 'HowToStep',
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'es',
};

export const content: FortuneCookieLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  bibliographyTitle: 'Bibliografía del Destino',
  ui: {
    title: 'Galleta de la Fortuna Online',
    description: 'Tu oráculo digital diario.',
    instruction: 'Golpea la galleta para abrir tu destino',
    dailyStatus: 'Tu destino ha sido revelado por hoy.',
    shareBtn: 'Compartir Sabiduría',
    shareTitle: 'Mi Galleta de la Fortuna',
    shareText: 'El destino me ha hablado: "$TEXT"\nMis números: $NUMS\n\nDescubre tu fortuna aquí:',
    copied: '¡Copiado!',
    fortunes: JSON.stringify([
      "La suerte que buscas está en otra galleta.",
      "No cuentes los días, haz que los días cuenten.",
      "Un viaje de mil millas comienza con un solo paso.",
      "El error es el preámbulo del descubrimiento.",
      "Tu capacidad de aprender es tu mayor activo.",
      "Sonríe, el universo te está mirando.",
      "La paciencia es un árbol de raíz amarga pero de frutos muy dulces.",
      "No temas crecer lentamente, teme solo quedarte quieto.",
      "Hoy es el mañana que tanto te preocupaba ayer.",
      "La felicidad no es algo hecho. Proviene de tus propias acciones.",
      "Si no puedes cambiar la dirección del viento, ajusta tus velas.",
      "Lo que plantas ahora, lo cosecharás más tarde.",
      "La creatividad es la inteligencia divirtiéndose.",
      "No busques errores, busca soluciones.",
      "Tu actitud, no tu aptitud, determinará tu altitud.",
      "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
      "Cree que puedes y ya estarás a medio camino.",
      "La única forma de hacer un gran trabajo es amar lo que haces.",
      "La vida es un 10% lo que te sucede y un 90% cómo reaccionas ante ello.",
      "Sé el cambio que quieres ver en el mundo.",
      "La mejor manera de predecir el futuro es inventarlo.",
      "La simplicidad es la máxima sofisticación.",
      "Eres el dueño de tu destino y el capitán de tu alma.",
      "Pronto recibirás una noticia que cambiará tu perspectiva.",
      "Un viaje inesperado te traerá grandes alegrías."
    ]),
    faqTitle: 'FAQ',
    bibliographyTitle: 'Referencias'
  },
  seo: [
    { type: 'title', text: 'El Misterio de la Galleta de la Fortuna', level: 2 },
    { type: 'paragraph', html: '¿Alguna vez te has preguntado de dónde vienen estas curiosas galletas? Aunque las asociamos con la comida china, su origen es un fascinante viaje entre Japón y los Estados Unidos. La galleta de la fortuna tal como la conocemos hoy fue probablemente inventada en la California de principios del siglo XX, no en China, donde son prácticamente desconocidas.' },
    { type: 'tip', title: '¿Cómo funciona nuestro oráculo?', html: 'Cada día puedes abrir una galleta. El sistema guarda tu destino en el navegador de forma completamente privada, sin servidor. ¡Vuelve mañana para una nueva predicción!' },
    { type: 'title', text: 'La Filosofía de los Oráculos', level: 3 },
    { type: 'paragraph', html: 'Los seres humanos siempre han buscado orientación en tiempos de incertidumbre. Desde el Oráculo de Delfos hasta el I Ching, los sistemas de adivinación cumplen una función psicológica constante: nos dan permiso para <strong>detenernos y reflexionar</strong>. Una galleta de la fortuna no predice el futuro, sino que te invita a pensar en él.' },
    { type: 'list', items: [
      '<strong>China Antigua (~1000 a.C.):</strong> El I Ching (Libro de los Cambios) utilizaba hexagramas para orientar decisiones e interpretar el destino.',
      '<strong>Grecia Clásica:</strong> El Oráculo de Delfos atraía a gobernantes y ciudadanos con pronunciamientos crípticos interpretados como guía divina.',
      '<strong>Japón Moderno:</strong> Los omikuji, papelitos de la fortuna en los santuarios sintoístas, mezclan el destino con el ritual.',
      '<strong>EE.UU. Siglo XX:</strong> Las galletas de la fortuna surgieron en comunidades japonés-americanas antes de convertirse en símbolo de la cocina chino-americana.',
    ]},
    { type: 'stats', items: [
      { value: '+3.000M', label: 'Galletas fabricadas al año', icon: 'mdi:cookie' },
      { value: '~1000 a.C.', label: 'Origen del I Ching', icon: 'mdi:book-open-variant' },
      { value: '25', label: 'Fortunas en este oráculo', icon: 'mdi:star-shooting' },
      { value: '1/día', label: 'Un destino diario', icon: 'mdi:calendar-today' },
    ], columns: 4 },
    { type: 'proscons', items: [
      { pro: 'Momento de pausa y reflexión diaria', con: 'Sin base científica predictiva real' },
      { pro: 'Inspiración positiva con frases atemporales', con: 'El mensaje es el mismo sin importar el contexto' },
      { pro: 'Completamente privado, sin datos enviados al servidor', con: 'Solo una fortuna al día (¡diseño intencionado!)' },
    ]},
  ],
  faq,
  bibliography: [
    { name: 'Historia de la Galleta de la Fortuna', url: 'https://es.wikipedia.org/wiki/Galleta_de_la_fortuna' }
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
