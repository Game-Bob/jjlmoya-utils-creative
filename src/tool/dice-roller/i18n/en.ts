import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { DiceRollerLocaleContent } from '../index';

const slug = 'dice-roller';
const title = 'Dice Roller';
const description = 'A complete dice simulator for your RPG and board games. Roll d4, d6, d8, d10, d12, d20 and d100 with modifiers and history.';

const faq: DiceRollerLocaleContent['faq'] = [
  {
    question: 'How can I simulate a roll with advantage (D&D)?',
    answer: 'Add two d20 dice to the bag by clicking the d20 button twice. When rolling, observe the two individual results and keep the higher one. The displayed total will be the sum, but you can see each die separately in the result breakdown.',
  },
  {
    question: 'What does the green or red color on results mean?',
    answer: 'Green results indicate that die rolled its maximum possible value (a "critical"). Red results indicate the minimum value (a "1", the worst possible result). This makes it easy to spot crits and fumbles at a glance.',
  },
  {
    question: 'Can I add multiple dice of the same type?',
    answer: 'Yes. Each click on a die adds it to the bag. If you click the d6 three times, the bag will show "3d6". To reduce the count, click the "−" button that appears next to each die group in the bag.',
  },
  {
    question: 'Are digital dice as random as physical ones?',
    answer: 'Statistically, yes. Modern JavaScript engines use pseudorandom algorithms (xorshift128+) with very high quality uniform distribution. A real physical die can have small manufacturing imperfections that bias results; the digital die does not have that problem.',
  },
  {
    question: 'What is the d100 and how is it used?',
    answer: 'The d100 (or d%) generates a number from 1 to 100 and is used in percentage-based game systems, such as Call of Cthulhu or Warhammer Fantasy Roleplay. It represents "direct probability": if your Stealth skill is 65%, you need to roll 65 or less to succeed.',
  },
];

const howTo: DiceRollerLocaleContent['howTo'] = [
  { name: 'Build the dice pool', text: 'Click the die buttons (d4, d6, d8...) to add them to your pool. Each click adds one die of the selected type. You can mix different types in the same roll.' },
  { name: 'Adjust the modifier', text: 'Use the "+" and "−" buttons next to the modifier to apply bonuses or penalties (like the ability modifier in D&D). The modifier is automatically added to the total.' },
  { name: 'Roll the dice', text: 'Press the "Roll Dice" button. The right panel shows the final total and the breakdown of each individual die, with crits (maximum) in green and fumbles (minimum) in red.' },
  { name: 'Check the history', text: 'Each roll is recorded in the history with the dice expression used, the total result, and the exact time. You can clear the history with the corresponding button.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step) => ({
    '@type': 'HowToStep',
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'en',
};

export const content: DiceRollerLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  ui: {
    title: 'Dice Roller',
    description: 'May luck be with you.',
    rollBtn: 'Roll Dice',
    totalLabel: 'Total',
    historyLabel: 'History',
    clearHistoryBtn: 'Clear History',
    faqTitle: 'FAQ',
    bibliographyTitle: 'References',
    addDiceLabel: 'Add dice to the bag',
    bagLabel: 'Dice bag',
    emptyBagBtn: 'Empty',
    emptyBagText: 'Click the dice to add them',
    modifierLabel: 'Modifier',
    rollManyLabel: 'Roll $COUNT dice',
    rollOneLabel: 'Roll $COUNT die',
    preRollText: 'Add dice and roll',
    emptyHistoryText: 'Roll history will appear here'
  },
  seo: [
    { type: 'title', text: 'The Art of Randomness: History and Mathematics of Dice', level: 2 },
    { type: 'paragraph', html: 'Dice are one of humanity\'s oldest randomness generators. <strong>Astragali</strong> — ankle bones of sheep and goats — were used as primitive four-sided dice as far back as 5000 BC in Mesopotamia and Egypt. The evolution from carved bone to modern epoxy resin icosahedra is not just aesthetic: it is a journey through probability theory and game mechanics design.' },
    { type: 'title', text: 'The Standard Dice Family', level: 3 },
    { type: 'paragraph', html: 'The most widespread set of dice in role-playing games — popularized by <strong>Dungeons &amp; Dragons</strong> in 1974 — consists of the five Platonic solids plus two additional shapes: d4 (tetrahedron), d6 (cube), d8 (octahedron), d10 (pentagonal trapezohedron), d12 (dodecahedron), d20 (icosahedron) and d100 (percentile die). Each polyhedron guarantees uniform distribution: all faces have exactly the same probability of landing.' },
    { type: 'list', items: [
      '<strong>d4 – Tetrahedron:</strong> The most dangerous if stepped on barefoot. Four triangular faces, 25% probability per face. Commonly used for dagger damage or low-level spells.',
      '<strong>d6 – Cube:</strong> The most universal die. Present in all board games since the Egyptian senet. Its cubic geometry guarantees perfect equidistribution.',
      '<strong>d8 – Octahedron:</strong> The die of the spear or battle axe. Eight equilateral triangular faces. 12.5% probability per face.',
      '<strong>d10 – Pentagonal Trapezohedron:</strong> The only non-Platonic solid in the standard set. Two opposite faces per "vertex". Essential for the d100 (two d10 combined).',
      '<strong>d12 – Dodecahedron:</strong> The barbarian\'s die. Twelve pentagonal faces. Underrated in many systems, protagonist in D&D 5e Barbarian.',
      '<strong>d20 – Icosahedron:</strong> The king of RPG. Twenty triangular faces. Protagonist of the d20 system: determines success or failure of almost all actions.',
      '<strong>d100 – Percentile:</strong> Two d10 combined (tens + units). Defines fine probabilities in systems like Call of Cthulhu or Warhammer Fantasy.',
    ]},
    { type: 'stats', items: [
      { value: '5000 BC', label: 'First dice (astragali)', icon: 'mdi:history' },
      { value: '1974', label: 'D&D popularized the set', icon: 'mdi:sword' },
      { value: '7 types', label: 'Standard RPG dice', icon: 'mdi:dice-multiple' },
      { value: '2¹²⁸', label: 'JS random period', icon: 'mdi:function-variant' },
    ], columns: 4 },
    { type: 'title', text: 'Probabilities and Distribution Curves', level: 3 },
    { type: 'paragraph', html: 'When you roll a single die, you get a <strong>discrete uniform distribution</strong>: every result has exactly the same probability (1/n). But as soon as you combine multiple dice, mathematical magic transforms that flat curve into an <strong>approximate normal distribution</strong>. That is why 2d6 is not the same as 1d12: with two six-sided dice the probability of rolling a 7 is 6/36 ≈ 16.7%, while the extremes (2 and 12) only occur 2.8% of the time.' },
    { type: 'tip', title: 'Advantage and Disadvantage (D&D 5e)', html: 'The <strong>Advantage</strong> mechanic consists of rolling 2d20 and keeping the higher result. Mathematically, this raises the average from 10.5 to approximately 13.8. <strong>Disadvantage</strong> does the opposite: take the lower, dropping the average to about 7.2. Our roller lets you simulate this by adding two d20s to the bag and comparing the individual results.' },
    { type: 'title', text: 'Modifiers: The Bridge Between Dice and Character', level: 3 },
    { type: 'paragraph', html: 'In most RPG systems, the die does not act alone: a <strong>modifier</strong> representing the character\'s abilities is added or subtracted. In D&D 5e, a Strength modifier of +5 means you roll 1d20, add 5, and check the result against the enemy\'s Armor Class. Our roller includes a modifier control to faithfully reflect these mechanics.' },
    { type: 'tip', title: 'Dice Notation Standard', html: 'The <strong>XdY+Z</strong> notation is the de facto standard in role-playing games: X dice of Y faces with modifier Z. "3d6+2" means roll three six-sided dice and add 2 to the total. Our tool uses this notation in the history so you can easily share or record your rolls.' },
    { type: 'glossary', items: [
      { term: 'Critical Hit', definition: 'A roll of the maximum value on a die (e.g., rolling 20 on a d20). Usually triggers special bonus effects in most RPG systems.' },
      { term: 'Fumble / Nat 1', definition: 'Rolling the minimum value (1) on a die. Often results in a dramatic failure or negative consequence.' },
      { term: 'Dice Pool', definition: 'A collection of dice rolled simultaneously. The pool in our tool shows each die type grouped by count (e.g., 3d6 + 2d8).' },
      { term: 'Modifier', definition: 'A fixed number added or subtracted from a roll result, representing a character\'s skill, attribute bonus, or situational penalty.' },
      { term: 'Percentile Roll', definition: 'A roll using two d10 to produce a result from 1–100, used in skill-based systems where abilities are measured as percentages.' },
    ]},
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
