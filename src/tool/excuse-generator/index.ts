import type { CreativeToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import ExcuseGeneratorComponent from './component.astro';
import ExcuseGeneratorSEO from './seo.astro';
import ExcuseGeneratorBibliography from './bibliography.astro';

export interface ExcuseGeneratorUI {
  [key: string]: string;
  title: string;
  description: string;
  subjectLabel: string;
  actionLabel: string;
  victimLabel: string;
  generateBtn: string;
  copyBtn: string;
  copied: string;
  starts: string;
  middles: string;
  ends: string;
  faqTitle: string;
  bibliographyTitle: string;
}

export type ExcuseGeneratorLocaleContent = ToolLocaleContent<ExcuseGeneratorUI>;

export const excuseGenerator: CreativeToolEntry<ExcuseGeneratorUI> = {
  id: 'excuse-generator',
  icons: { bg: 'mdi:slot-machine', fg: 'mdi:emoticon-poop' },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export { ExcuseGeneratorComponent, ExcuseGeneratorSEO, ExcuseGeneratorBibliography };

export const EXCUSE_GENERATOR_TOOL: ToolDefinition = {
  entry: excuseGenerator,
  Component: ExcuseGeneratorComponent,
  SEOComponent: ExcuseGeneratorSEO,
  BibliographyComponent: ExcuseGeneratorBibliography,
};
