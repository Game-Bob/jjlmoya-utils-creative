import type { SynesthesiaPainterLocaleContent } from '../index';

export const content: SynesthesiaPainterLocaleContent = {
  slug: 'pintor-sinestesia',
  title: 'Pintor de Sinestesia',
  description: 'Visualiza el color de las palabras según la sinestesia grafema-color.',
  faqTitle: 'Preguntas Frecuentes',
  bibliographyTitle: 'Bibliografía de la Mente',
  ui: {
    title: 'Pintor de Sinestesia',
    description: 'Convierte tus palabras en arte cromático.',
    modeLetters: 'Letras',
    modeDots: 'Puntos',
    modeAura: 'Aura',
    placeholder: 'Escribe aquí...',
    footerText: '✨ Escribe para descubrir tu paleta de colores personal',
    clearBtn: 'Borrar',
    faqTitle: 'FAQ',
    bibliographyTitle: 'Referencias'
  },
  seo: [
    { type: 'title', text: '¿Qué es la Sinestesia Grafema-Color?', level: 2 },
    { type: 'paragraph', html: 'La sinestesia es una condición neurológica donde la estimulación de un sentido provoca una reacción en un segundo sentido. En el caso de la sinestesia grafema-color, las letras y números se perciben intrínsecamente asociados a colores específicos.' },
    { type: 'tip', title: 'Explora tu percepción', html: 'Usa los diferentes modos de visualización para ver cómo cambian las palabras cuando solo nos enfocamos en su esencia cromática.' }
  ],
  faq: [
    {
      question: '¿Todos los sinestésicos ven los mismos colores?',
      answer: 'No, los colores asociados a cada letra son únicos para cada individuo, aunque existen algunas tendencias estadísticas (como la letra "A" siendo roja para muchos).'
    }
  ],
  bibliography: [
    { name: 'Sinestesia - Wikipedia', url: 'https://es.wikipedia.org/wiki/Sinestesia' }
  ],
  howTo: [
    { name: 'Escribir', text: 'Introduce cualquier texto en el área de escritura.' },
    { name: 'Cambiar Modo', text: 'Prueba los modos "Puntos" o "Aura" para una experiencia más abstracta.' }
  ],
  schemas: []
};
