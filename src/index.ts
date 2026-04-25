import { creativeCategory } from './category';
import type { ToolDefinition } from './types';
import { EXCUSE_GENERATOR_TOOL } from './tool/excuse-generator';
import { FORTUNE_COOKIE_TOOL } from './tool/fortune-cookie';
import { GLITCH_IMAGE_DISTORTER_TOOL } from './tool/glitch-image-distorter';
import { SYNESTHESIA_PAINTER_TOOL } from './tool/synesthesia-painter';
import { ZALGO_GENERATOR_TOOL } from './tool/zalgo-generator';
import { BEAD_PATTERN_GENERATOR_TOOL } from './tool/bead-pattern-generator';
import { DICE_ROLLER_TOOL } from './tool/dice-roller';

export { creativeCategory };
export const templateCategory = creativeCategory;
export const CREATIVE_TOOLS: Record<string, ToolDefinition> = {
  'excuse-generator': EXCUSE_GENERATOR_TOOL,
  'fortune-cookie': FORTUNE_COOKIE_TOOL,
  'glitch-image-distorter': GLITCH_IMAGE_DISTORTER_TOOL,
  'synesthesia-painter': SYNESTHESIA_PAINTER_TOOL,
  'zalgo-generator': ZALGO_GENERATOR_TOOL,
  'bead-pattern-generator': BEAD_PATTERN_GENERATOR_TOOL,
  'dice-roller': DICE_ROLLER_TOOL,
};
export const ALL_TOOLS = Object.values(CREATIVE_TOOLS);

export * from './tool/excuse-generator';
export * from './tool/fortune-cookie';
export * from './tool/glitch-image-distorter';
export * from './tool/synesthesia-painter';
export * from './tool/zalgo-generator';
export * from './tool/bead-pattern-generator';
export * from './tool/dice-roller';
export const creativeCategorySEO = () => import('./category/seo.astro').then((m) => m.default);

export type {
  KnownLocale,
  FAQItem,
  BibliographyEntry,
  HowToStep,
  ToolLocaleContent,
  CategoryLocaleContent,
  LocaleLoader,
  LocaleMap,
  CreativeToolEntry,
  CreativeCategoryEntry,
  ToolDefinition,
} from './types';

