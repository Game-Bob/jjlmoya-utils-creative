import type { CreativeToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import FortuneCookieComponent from './component.astro';
import FortuneCookieSEO from './seo.astro';
import FortuneCookieBibliography from './bibliography.astro';

export interface FortuneCookieUI {
  [key: string]: string;
  instruction: string;
  title: string;
  description: string;
  dailyStatus: string;
  shareBtn: string;
  shareTitle: string;
  shareText: string;
  copied: string;
  fortunes: string;
  faqTitle: string;
  bibliographyTitle: string;
}

export type FortuneCookieLocaleContent = ToolLocaleContent<FortuneCookieUI>;

export const fortuneCookie: CreativeToolEntry<FortuneCookieUI> = {
  id: 'fortune-cookie',
  icons: { bg: 'mdi:cookie', fg: 'mdi:sparkles' },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export { FortuneCookieComponent, FortuneCookieSEO, FortuneCookieBibliography };

export const FORTUNE_COOKIE_TOOL: ToolDefinition = {
  entry: fortuneCookie,
  Component: FortuneCookieComponent,
  SEOComponent: FortuneCookieSEO,
  BibliographyComponent: FortuneCookieBibliography,
};
