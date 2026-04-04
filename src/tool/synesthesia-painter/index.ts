import type { CreativeToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import SynesthesiaPainterComponent from './component.astro';
import SynesthesiaPainterSEO from './seo.astro';
import SynesthesiaPainterBibliography from './bibliography.astro';

export interface SynesthesiaPainterUI {
  [key: string]: string;
  title: string;
  description: string;
  modeLetters: string;
  modeDots: string;
  modeAura: string;
  placeholder: string;
  footerText: string;
  clearBtn: string;
  faqTitle: string;
  bibliographyTitle: string;
}

export type SynesthesiaPainterLocaleContent = ToolLocaleContent<SynesthesiaPainterUI>;

export const synesthesiaPainter: CreativeToolEntry<SynesthesiaPainterUI> = {
  id: 'synesthesia-painter',
  icons: { bg: 'mdi:brush', fg: 'mdi:eye' },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export { SynesthesiaPainterComponent, SynesthesiaPainterSEO, SynesthesiaPainterBibliography };

export const SYNESTHESIA_PAINTER_TOOL: ToolDefinition = {
  entry: synesthesiaPainter,
  Component: SynesthesiaPainterComponent,
  SEOComponent: SynesthesiaPainterSEO,
  BibliographyComponent: SynesthesiaPainterBibliography,
};
