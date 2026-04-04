import type { FortuneCookieLocaleContent } from '../index';

export const content: FortuneCookieLocaleContent = {
  slug: 'galleta-fortuna',
  title: 'Galleta de la Fortuna',
  description: 'Consulta tu destino diario y descubre tus números de la suerte.',
  faqTitle: 'Preguntas Frecuentes',
  bibliographyTitle: 'Bibliografía del Destino',
  ui: {
    title: 'Galleta de la Fortuna Online',
    description: 'Tu oráculo digital diario.',
    instruction: 'Golpea la galleta para abrir tu destino',
    dailyStatus: 'Tu destino ha sido revelado por hoy.',
    shareBtn: 'Compartir Sabiduría',
    shareTitle: 'Mi Galleta de la Fortuna 🥠',
    shareText: '🥠 El destino me ha hablado: "$TEXT"\n✨ Mis números: $NUMS\n\nDescubre tu fortuna aquí:',
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
    { type: 'paragraph', html: '¿Alguna vez te has preguntado de dónde vienen estas curiosas galletas? Aunque las asociamos con la comida china, su origen es un fascinante viaje entre Japón y los Estados Unidos.' },
    { type: 'tip', title: '¿Cómo funciona nuestro oráculo?', html: 'Cada día puedes abrir una galleta. El sistema guarda tu destino para que no lo olvides durante las 24 horas. ¡Vuelve mañana para una nueva predicción!' }
  ],
  faq: [
    {
      question: '¿Puedo abrir más de una galleta al día?',
      answer: 'El destino solo habla una vez al día. Guardamos tu fortuna en el dispositivo para que sea tu guía durante la jornada.'
    }
  ],
  bibliography: [
    { name: 'Historia de la Galleta de la Fortuna', url: 'https://es.wikipedia.org/wiki/Galleta_de_la_fortuna' }
  ],
  howTo: [
    { name: 'Golpear', text: 'Haz clic varias veces sobre la galleta para romperla.' },
    { name: 'Leer', text: 'Descubre el mensaje oculto en su interior.' }
  ],
  schemas: []
};
