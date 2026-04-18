import type { ToolDefinition } from '../../types';
import { beadPatternGenerator } from './entry';
export * from './entry';
export const BEAD_PATTERN_GENERATOR_TOOL: ToolDefinition = {
  entry: beadPatternGenerator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
