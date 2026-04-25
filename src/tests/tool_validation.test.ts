import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';
import { creativeCategory } from '../data';

describe('Tool Validation Suite', () => {
  describe('Library Registration', () => {
    it('should have 7 tools in ALL_TOOLS', () => {
      expect(ALL_TOOLS.length).toBe(7);
    });

    it('creativeCategory should be defined', () => {
      expect(creativeCategory).toBeDefined();
      expect(creativeCategory.i18n).toBeDefined();
    });
  });
});

