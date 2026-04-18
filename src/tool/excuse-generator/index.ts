import type { ToolDefinition } from '../../types';
import { excuseGenerator } from './entry';
export * from './entry';
export const EXCUSE_GENERATOR_TOOL: ToolDefinition = {
  entry: excuseGenerator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
