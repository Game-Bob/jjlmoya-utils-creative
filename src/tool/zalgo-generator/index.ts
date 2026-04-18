import type { ToolDefinition } from '../../types';
import { zalgoGenerator } from './entry';
export * from './entry';
export const ZALGO_GENERATOR_TOOL: ToolDefinition = {
  entry: zalgoGenerator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
