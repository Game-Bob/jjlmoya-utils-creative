import { CREATIVE_CATEGORY, CREATIVE_TOOLS } from './category';
export const creativeCategory = CREATIVE_CATEGORY;
export const templateCategory = CREATIVE_CATEGORY;
export const ALL_TOOLS = Object.values(CREATIVE_TOOLS);

export * from './tool/excuse-generator';
export * from './tool/fortune-cookie';
export * from './tool/synesthesia-painter';
export * from './tool/zalgo-generator';
export * from './tool/bead-pattern-generator';
export * from './tool/dice-roller';
export { default as creativeCategorySEO } from './category/seo.astro';

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

