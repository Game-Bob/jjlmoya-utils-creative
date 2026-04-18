import type { ToolDefinition } from '../../types';
import { diceRoller } from './entry';
export * from './entry';
export const DICE_ROLLER_TOOL: ToolDefinition = {
  entry: diceRoller,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
