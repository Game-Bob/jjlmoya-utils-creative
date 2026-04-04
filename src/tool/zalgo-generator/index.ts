import type { CreativeToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import ZalgoGeneratorComponent from './component.astro';
import ZalgoGeneratorSEO from './seo.astro';
import ZalgoGeneratorBibliography from './bibliography.astro';

export interface ZalgoGeneratorUI {
  [key: string]: string;
  title: string;
  description: string;
  inputPlaceholder: string;
  intensityLabel: string;
  outputLabel: string;
  copyBtn: string;
  copied: string;
  faqTitle: string;
  bibliographyTitle: string;
}

export type ZalgoGeneratorLocaleContent = ToolLocaleContent<ZalgoGeneratorUI>;

export const zalgoGenerator: CreativeToolEntry<ZalgoGeneratorUI> = {
  id: 'zalgo-generator',
  icons: { bg: 'mdi:skull-outline', fg: 'mdi:matrix' },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export { ZalgoGeneratorComponent, ZalgoGeneratorSEO, ZalgoGeneratorBibliography };

export const ZALGO_GENERATOR_TOOL: ToolDefinition = {
  entry: zalgoGenerator,
  Component: ZalgoGeneratorComponent,
  SEOComponent: ZalgoGeneratorSEO,
  BibliographyComponent: ZalgoGeneratorBibliography,
};
