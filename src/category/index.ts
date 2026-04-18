import type { CategoryLocaleContent } from '../types';
import { excuseGenerator } from '../tool/excuse-generator/entry';
import { fortuneCookie } from '../tool/fortune-cookie/entry';
import { synesthesiaPainter } from '../tool/synesthesia-painter/entry';
import { zalgoGenerator } from '../tool/zalgo-generator/entry';
import { beadPatternGenerator } from '../tool/bead-pattern-generator/entry';
import { diceRoller } from '../tool/dice-roller/entry';

export const CREATIVE_TOOLS = {
  'excuse-generator': excuseGenerator,
  'fortune-cookie': fortuneCookie,
  'synesthesia-painter': synesthesiaPainter,
  'zalgo-generator': zalgoGenerator,
  'bead-pattern-generator': beadPatternGenerator,
  'dice-roller': diceRoller,
};

export const creativeCategory: {
  id: string;
  icons: { bg: string; fg: string };
  i18n: {
    es: () => Promise<CategoryLocaleContent>;
    en: () => Promise<CategoryLocaleContent>;
    fr: () => Promise<CategoryLocaleContent>;
  };
} = {
  id: 'creative',
  icons: { bg: 'mdi:palette', fg: 'mdi:brush' },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
    de: () => import('./i18n/de').then((m) => m.content),
    id: () => import('./i18n/id').then((m) => m.content),
    it: () => import('./i18n/it').then((m) => m.content),
    ja: () => import('./i18n/ja').then((m) => m.content),
    ko: () => import('./i18n/ko').then((m) => m.content),
    nl: () => import('./i18n/nl').then((m) => m.content),
    pl: () => import('./i18n/pl').then((m) => m.content),
    pt: () => import('./i18n/pt').then((m) => m.content),
    ru: () => import('./i18n/ru').then((m) => m.content),
    sv: () => import('./i18n/sv').then((m) => m.content),
    tr: () => import('./i18n/tr').then((m) => m.content),
    zh: () => import('./i18n/zh').then((m) => m.content),
  },
};
