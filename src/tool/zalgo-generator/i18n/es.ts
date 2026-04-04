import type { ZalgoGeneratorLocaleContent } from '../index';

export const content: ZalgoGeneratorLocaleContent = {
  slug: 'generador-zalgo',
  title: 'Generador Zalgo',
  description: 'Corrompe tus mensajes con cascadas de caracteres Unicode desbordantes.',
  faqTitle: 'Preguntas Frecuentes',
  bibliographyTitle: 'Bibliografía del Caos',
  ui: {
    title: 'Generador Zalgo',
    description: 'T̸o̶d̸o̵ ̸e̴s̸t̴á̷ ̵c̵o̶r̶r̵u̸p̸t̵o̴',
    inputPlaceholder: 'Escribe tu mensaje normal aquí...',
    intensityLabel: 'Nivel de Corrupción',
    outputLabel: 'Resultado Corrompido',
    copyBtn: 'Copiar Caos',
    copied: '¡Copiado!',
    faqTitle: 'FAQ',
    bibliographyTitle: 'Referencias'
  },
  seo: [
    { type: 'title', text: 'H̷E̵ ̸C̸O̵M̷E̴S̸: El Origen de Zalgo', level: 2 },
    { type: 'paragraph', html: 'Zalgo es una "creepypasta" de internet que representa una entidad maligna capaz de corromper el tejido de la realidad, manifestándose comúnmente a través de texto distorsionado y visualmente "glitchy".' },
    { type: 'tip', title: '¿Cómo funciona?', html: 'Utilizamos caracteres Unicode combinados que se apilan por encima y por debajo del texto base, creando ese efecto de cascada visual que rompe los límites de la línea.' }
  ],
  faq: [
    {
      question: '¿Por qué mi navegador se bloquea con mucho texto Zalgo?',
      answer: 'El texto Zalgo utiliza cientos de caracteres combinados por cada letra normal. Procesar visualmente estos "glitches" puede ser muy exigente para el motor de renderizado de algunos navegadores antiguos o móviles.'
    }
  ],
  bibliography: [
    { name: 'Zalgo - Know Your Meme', url: 'https://knowyourmeme.com/memes/zalgo' }
  ],
  howTo: [
    { name: 'Escribir', text: 'Introduce el texto que deseas corromper.' },
    { name: 'Ajustar', text: 'Usa el control deslizante para aumentar o disminuir el nivel de caos.' }
  ],
  schemas: []
};
