import type { ToolDefinition } from './types';
import { BEAD_PATTERN_GENERATOR_TOOL } from './tool/bead-pattern-generator/index';
import { DICE_ROLLER_TOOL } from './tool/dice-roller/index';
import { EXCUSE_GENERATOR_TOOL } from './tool/excuse-generator/index';
import { FORTUNE_COOKIE_TOOL } from './tool/fortune-cookie/index';
import { SYNESTHESIA_PAINTER_TOOL } from './tool/synesthesia-painter/index';
import { ZALGO_GENERATOR_TOOL } from './tool/zalgo-generator/index';

export const ALL_TOOLS: ToolDefinition[] = [
  BEAD_PATTERN_GENERATOR_TOOL,
  DICE_ROLLER_TOOL,
  EXCUSE_GENERATOR_TOOL,
  FORTUNE_COOKIE_TOOL,
  SYNESTHESIA_PAINTER_TOOL,
  ZALGO_GENERATOR_TOOL,
];


export const ALL_ENTRIES = ALL_TOOLS.map(t => t.entry);
