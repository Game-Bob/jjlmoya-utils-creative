import type { BeadPatternGeneratorLocaleContent } from '../index';

export const content: BeadPatternGeneratorLocaleContent = {
  slug: 'generateur-modeles-perles',
  title: 'Générateur de Modèles',
  description: 'Créez des schémas de pixel art et de perles pour Miyuki ou Hama à partir de vos photos.',
  faqTitle: 'Foire Aux Questions',
  bibliographyTitle: 'Bibliographie de l\'Artisan',
  ui: {
    title: 'Générateur de Modèles',
    description: 'De la photo au schéma de perles.',
    uploadLabel: 'Téléchargez votre photo',
    gridSizeLabel: 'Taille de la grille (perles)',
    pixelateBtn: 'Générer le Modèle',
    downloadBtn: 'Télécharger le Schéma',
    faqTitle: 'FAQ',
    bibliographyTitle: 'Références'
  },
  seo: [
    { type: 'title', text: 'L\'Art des Perles Miyuki et Hama', level: 2 },
    { type: 'paragraph', html: "La création de modèles à la main peut être fastidieuse. Notre outil utilise des algorithmes de quantification de couleur pour convertir n'importe quelle image en un schéma de perles gérable." }
  ],
  faq: [],
  bibliography: [],
  howTo: [],
  schemas: []
};
