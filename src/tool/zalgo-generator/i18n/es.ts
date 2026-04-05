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
    { type: 'title', text: '¿Qué es el Texto Zalgo y cómo funciona la corrupción visual?', level: 2 },
    { type: 'paragraph', html: 'El Texto Zalgo es una forma de manipulación tipográfica que utiliza una característica específica del estándar Unicode: los <strong>caracteres combinados</strong>. A diferencia de los caracteres normales, estos diacríticos no ocupan espacio horizontal; se apilan verticalmente sobre la letra base, creando esa estética de "caos digital" o "terror cósmico" tan popular en la cultura de internet.' },
    { type: 'title', text: 'Anatomía del Proceso', level: 3 },
    { type: 'paragraph', html: 'Nuestro generador procesa cada carácter de forma independiente, inyectando ráfagas aleatorias de puntos de código Unicode en tres vectores distintos: <strong>superior</strong> (diacríticos que se apilan encima), <strong>central</strong> (que atraviesan la letra) e <strong>inferior</strong> (que cuelgan por debajo).' },
    { type: 'tip', title: 'Algoritmo de Corrupción', html: 'Para cada carácter base, se calcula un <code>count = intensity × 30</code>. Ese número de diacríticos aleatorios se añaden en cada vector. A intensidad 1.5 puedes obtener hasta 45 caracteres combinados por letra.' },
    { type: 'title', text: 'Etiqueta y Aplicaciones', level: 3 },
    { type: 'list', items: [
      '<strong>Social Media:</strong> Capta la atención en Instagram o TikTok. Perfecto para bios que buscan romper con lo convencional.',
      '<strong>Storytelling horror:</strong> Dramatiza narrativas de ficción, creepypastas o simulaciones de sistemas comprometidos.',
      '<strong>Accesibilidad:</strong> Cuidado — el texto Zalgo es ilegible para Screen Readers. Úsalo solo como acompañamiento visual, nunca para contenido crítico.',
      '<strong>SEO:</strong> No uses Zalgo en palabras clave fundamentales (H1, meta titles). Los bots de indexación pueden fallar al normalizar estos caracteres.',
    ]},
    { type: 'title', text: 'El Origen: De Something Awful al Glitch Art', level: 3 },
    { type: 'paragraph', html: 'Zalgo no nació como un generador, sino como una intervención en tiras cómicas clásicas. El usuario Shmorky, a mediados de los 2000, empezó a deformar personajes como Nancy o Archie, añadiendo manchas y distorsiones. La frase <strong>"He comes"</strong> sellaba el destino de estas obras, anunciando la llegada de una entidad que devoraba la realidad.' },
    { type: 'paragraph', html: 'La transición al texto puro fue un descubrimiento técnico fascinante. Al identificar los caracteres combinados destinados a lenguas con diacríticos complejos, los usuarios de foros aprendieron que podían "apuñalar" las palabras originales, creando esa sensación de sangrado tipográfico tan icónica.' },
  ],
  faq: [
    { question: '¿Qué es el texto Zalgo?', answer: 'Es un tipo de texto que utiliza caracteres Unicode de combinación (diacríticos) de forma excesiva. Al apilarse verticalmente, estos caracteres "desbordan" su línea original, creando un efecto visual de corrupción, desorden o terror muy popular en la cultura de internet.' },
    { question: '¿Por qué el texto Zalgo se ve tan extraño?', answer: 'Se aprovecha de una característica del estándar Unicode que permite añadir marcas encima, debajo o en medio de una letra base. Como no hay un límite estricto de cuántas marcas se pueden añadir, el texto puede "invadir" párrafos superiores o inferiores.' },
    { question: '¿Puedo usar este texto en redes sociales?', answer: 'Sí, la mayoría de plataformas modernas (Instagram, Twitter, Discord) soportan Unicode. Sin embargo, algunas redes o dispositivos pueden filtrar o recortar el exceso de caracteres si la intensidad es muy alta para mantener la legibilidad de la interfaz.' },
    { question: '¿Cómo puedo quitar el efecto Zalgo de un texto?', answer: 'Para limpiar un texto corrupto, puedes usar la normalización de strings de JavaScript o simplemente copiarlo en un editor básico que solo admita texto plano. Nuestra herramienta es puramente creativa y no daña el contenido original.' },
  ],
  bibliography: [
    { name: 'Unicode Standard - Combining Characters', url: 'https://www.unicode.org/standard/principles.html#Combining_Characters' },
    { name: 'The Zalgo Text Phenomenon', url: 'https://knowyourmeme.com/memes/zalgo' },
    { name: 'MDN - String normalization', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize' },
  ],
  howTo: [
    { name: 'Escribir el mensaje base', text: 'Introduce el texto que quieres "corromper" en el cuadro principal de la herramienta.' },
    { name: 'Ajustar la intensidad del caos', text: 'Mueve el selector para definir cuántos caracteres de combinación quieres apilar. A más intensidad, más difícil será de leer.' },
    { name: 'Seleccionar la dirección del desbordamiento', text: 'Elige si quieres que la corrupción crezca hacia arriba, hacia abajo o en todas las direcciones simultáneamente.' },
    { name: 'Copiar el texto resultante', text: 'Haz clic en el botón de copiar. El texto resultante incluirá todos los bytes invisibles necesarios para mantener el efecto glitch.' },
  ],
  schemas: []
};
