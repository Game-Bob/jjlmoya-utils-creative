import type { ToolDefinition } from '../../types';
import { glitchImageDistorter } from './entry';
export * from './entry';
export const GLITCH_IMAGE_DISTORTER_TOOL: ToolDefinition = {
  entry: glitchImageDistorter,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
