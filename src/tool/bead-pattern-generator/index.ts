import type { CreativeToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import BeadPatternGeneratorComponent from './component.astro';
import BeadPatternGeneratorSEO from './seo.astro';
import BeadPatternGeneratorBibliography from './bibliography.astro';

export interface BeadPatternGeneratorUI {
  [key: string]: string;
  title: string;
  description: string;
  uploadLabel: string;
  gridSizeLabel: string;
  pixelateBtn: string;
  downloadBtn: string;
  faqTitle: string;
  bibliographyTitle: string;
}

export type BeadPatternGeneratorLocaleContent = ToolLocaleContent<BeadPatternGeneratorUI>;

export const beadPatternGenerator: CreativeToolEntry<BeadPatternGeneratorUI> = {
  id: 'bead-pattern-generator',
  icons: { bg: 'mdi:grid', fg: 'mdi:palette' },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export { BeadPatternGeneratorComponent, BeadPatternGeneratorSEO, BeadPatternGeneratorBibliography };

export const BEAD_PATTERN_GENERATOR_TOOL: ToolDefinition = {
  entry: beadPatternGenerator,
  Component: BeadPatternGeneratorComponent,
  SEOComponent: BeadPatternGeneratorSEO,
  BibliographyComponent: BeadPatternGeneratorBibliography,
};
