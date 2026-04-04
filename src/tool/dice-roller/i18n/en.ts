import type { DiceRollerLocaleContent } from '../index';

export const content: DiceRollerLocaleContent = {
  slug: 'dice-roller',
  title: 'Dice Roller',
  description: 'A complete dice simulator for your RPG and board games.',
  faqTitle: 'Frequently Asked Questions',
  bibliographyTitle: 'Chance Bibliography',
  ui: {
    title: 'Dice Roller',
    description: 'May luck be with you.',
    rollBtn: 'Roll Dice',
    totalLabel: 'Total',
    historyLabel: 'History',
    clearHistoryBtn: 'Clear History',
    faqTitle: 'FAQ',
    bibliographyTitle: 'References'
  },
  seo: [
    { type: 'title', text: 'Probability in Your Hands', level: 2 },
    { type: 'paragraph', html: 'From ancient astragali to modern 20-sided dice, chance has always fascinated humanity. Our tool ensures fair random results for your games.' }
  ],
  faq: [],
  bibliography: [],
  howTo: [],
  schemas: []
};
