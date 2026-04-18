import type { ToolDefinition } from '../../types';
import { fortuneCookie } from './entry';
export * from './entry';
export const FORTUNE_COOKIE_TOOL: ToolDefinition = {
  entry: fortuneCookie,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
