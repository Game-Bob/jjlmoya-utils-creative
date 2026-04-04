import type { BeadPatternGeneratorLocaleContent } from '../index';

export const content: BeadPatternGeneratorLocaleContent = {
  slug: 'generador-patrones-cuentas',
  title: 'Generador de Patrones',
  description: 'Crea esquemas de pixel art y cuentas para Miyuki o Hama desde tus fotos.',
  faqTitle: 'Preguntas Frecuentes',
  bibliographyTitle: 'Bibliografía del Artesano',
  ui: {
    title: 'Generador de Patrones',
    description: 'De fotografía a esquema de cuentas.',
    uploadLabel: 'Sube tu foto',
    gridSizeLabel: 'Tamaño de la cuadrícula (beads)',
    pixelateBtn: 'Generar Patrón',
    downloadBtn: 'Descargar Esquema',
    faqTitle: 'FAQ',
    bibliographyTitle: 'Referencias'
  },
  seo: [
    { type: 'title', text: 'El Arte de las Cuentas Miyuki y Hama', level: 2 },
    { type: 'paragraph', html: 'Crear patrones a mano puede ser tedioso. Nuestra herramienta utiliza algoritmos de cuantización de color para convertir cualquier imagen en un esquema manejable de cuentas.' }
  ],
  faq: [],
  bibliography: [],
  howTo: [],
  schemas: []
};
