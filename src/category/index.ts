import type { CreativeToolEntry, ToolDefinition } from '../types';
import { EXCUSE_GENERATOR_TOOL } from '../tool/excuse-generator';
import { FORTUNE_COOKIE_TOOL } from '../tool/fortune-cookie';
import { SYNESTHESIA_PAINTER_TOOL } from '../tool/synesthesia-painter';
import { ZALGO_GENERATOR_TOOL } from '../tool/zalgo-generator';
import { BEAD_PATTERN_GENERATOR_TOOL } from '../tool/bead-pattern-generator';
import { DICE_ROLLER_TOOL } from '../tool/dice-roller';

export const CREATIVE_TOOLS: Record<string, ToolDefinition> = {
  'excuse-generator': EXCUSE_GENERATOR_TOOL,
  'fortune-cookie': FORTUNE_COOKIE_TOOL,
  'synesthesia-painter': SYNESTHESIA_PAINTER_TOOL,
  'zalgo-generator': ZALGO_GENERATOR_TOOL,
  'bead-pattern-generator': BEAD_PATTERN_GENERATOR_TOOL,
  'dice-roller': DICE_ROLLER_TOOL,
};

export const CREATIVE_CATEGORY: {
  id: string;
  icons: { bg: string; fg: string };
  i18n: {
    es: () => Promise<any>;
    en: () => Promise<any>;
    fr: () => Promise<any>;
  };
} = {
  id: 'creative',
  icons: { bg: 'mdi:palette', fg: 'mdi:brush' },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};
