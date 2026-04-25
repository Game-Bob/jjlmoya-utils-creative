import type { CreativeToolEntry, ToolLocaleContent } from '../../types';

export interface GlitchImageDistorterUI {
  [key: string]: string;
  title: string;
  description: string;
  dragDropText: string;
  pasteHint: string;
  exampleImageBtn: string;
  corruptionLabel: string;
  interferenceLabel: string;
  tremorLabel: string;
  pixelSortLabel: string;
  pixelSortDirectionLabel: string;
  noiseLabel: string;
  animateBtn: string;
  chaosBtn: string;
  downloadPngBtn: string;
  downloadGifBtn: string;
  undoBtn: string;
  redoBtn: string;
  footerText: string;
  faqTitle: string;
}

export type GlitchImageDistorterLocaleContent = ToolLocaleContent<GlitchImageDistorterUI>;

export const glitchImageDistorter: CreativeToolEntry<GlitchImageDistorterUI> = {
  id: 'glitch-image-distorter',
  icons: { bg: 'mdi:image-broken-variant', fg: 'mdi:flash-outline' },
  i18n: {
    en: () => import('./i18n/en').then((m) => m.content),
  },
};
