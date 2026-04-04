import type { CreativeToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import DiceRollerComponent from './component.astro';
import DiceRollerSEO from './seo.astro';
import DiceRollerBibliography from './bibliography.astro';

export interface DiceRollerUI {
  [key: string]: string;
  title: string;
  description: string;
  rollBtn: string;
  totalLabel: string;
  historyLabel: string;
  clearHistoryBtn: string;
  faqTitle: string;
  bibliographyTitle: string;
}

export type DiceRollerLocaleContent = ToolLocaleContent<DiceRollerUI>;

export const diceRoller: CreativeToolEntry<DiceRollerUI> = {
  id: 'dice-roller',
  icons: { bg: 'mdi:dice-6', fg: 'mdi:refresh' },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export { DiceRollerComponent, DiceRollerSEO, DiceRollerBibliography };

export const DICE_ROLLER_TOOL: ToolDefinition = {
  entry: diceRoller,
  Component: DiceRollerComponent,
  SEOComponent: DiceRollerSEO,
  BibliographyComponent: DiceRollerBibliography,
};
