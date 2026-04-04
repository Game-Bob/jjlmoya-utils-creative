import type { BeadPatternGeneratorLocaleContent } from '../index';

export const content: BeadPatternGeneratorLocaleContent = {
  slug: 'bead-pattern-generator',
  title: 'Pattern Generator',
  description: 'Create pixel art and bead schemes for Miyuki or Hama from your photos.',
  faqTitle: 'Frequently Asked Questions',
  bibliographyTitle: 'Artisan Bibliography',
  ui: {
    title: 'Pattern Generator',
    description: 'From photo to bead scheme.',
    uploadLabel: 'Upload your photo',
    gridSizeLabel: 'Grid size (beads)',
    pixelateBtn: 'Generate Pattern',
    downloadBtn: 'Download Scheme',
    faqTitle: 'FAQ',
    bibliographyTitle: 'References'
  },
  seo: [
    { type: 'title', text: 'The Art of Miyuki and Hama Beads', level: 2 },
    { type: 'paragraph', html: 'Creating patterns by hand can be tedious. Our tool uses color quantization algorithms to convert any image into a manageable bead scheme.' }
  ],
  faq: [],
  bibliography: [],
  howTo: [],
  schemas: []
};
