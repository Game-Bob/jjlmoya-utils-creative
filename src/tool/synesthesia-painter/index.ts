import type { ToolDefinition } from '../../types';
import { synesthesiaPainter } from './entry';
export * from './entry';
export const SYNESTHESIA_PAINTER_TOOL: ToolDefinition = {
  entry: synesthesiaPainter,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
