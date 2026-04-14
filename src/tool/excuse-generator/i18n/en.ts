import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ExcuseGeneratorLocaleContent } from '../index';

const slug = 'excuse-generator';
const title = 'Excuse Generator';
const description = 'Semantic gambling machine to get rid of commitments with style. Generate surreal and irrefutable excuses instantly.';

const faq: ExcuseGeneratorLocaleContent['faq'] = [
  {
    question: 'Can this generator save my marriage?',
    answer: 'While we are not therapists, avoiding that dinner with the in-laws using a plausible technical emergency can significantly reduce tension. Use responsibly.'
  },
  {
    question: 'Why such surreal phrases?',
    answer: 'The strategy is based on Cognitive Dissonance. If you say something boring it is verifiable. If you say something absurd, the surprise blocks the capacity for anger.'
  }
];

const howTo: ExcuseGeneratorLocaleContent['howTo'] = [
  { name: 'Generate', text: 'Click the generate button to create a new excuse.' },
  { name: 'Copy', text: 'Click the copy button to bring the excuse to your clipboard.' }
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

export const content: ExcuseGeneratorLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  bibliographyTitle: 'Leisure Bibliography',
  ui: {
    title: 'Surreal Excuse Generator',
    description: 'Next-generation alibi calculator.',
    subjectLabel: 'Subject',
    actionLabel: 'Action',
    victimLabel: 'Victim',
    generateBtn: 'GENERATE EXCUSE',
    copyBtn: 'Copy this craziness',
    copied: 'Copied!',
    starts: JSON.stringify([
      "My cat", "My grandmother", "The president", "An alien", "My neighbor from the 5th floor",
      "The wifi", "My horoscope", "A time traveler", "The washing machine", "My fridge",
      "The spirit of Christmas", "My shadow", "A ninja", "The vegan police", "Siri",
      "My carnivorous plant", "The Amazon delivery guy", "My evil clone", "A wizard", "Godzilla"
    ]),
    middles: JSON.stringify([
      "has declared war on", "has eaten", "has kidnapped", "has set fire to",
      "is organizing a party in", "has vomited on", "refuses to leave",
      "has hacked", "has stolen", "has fallen in love with", "is meditating on",
      "has cast a spell on", "is protesting against", "has founded a cult in",
      "is dancing samba in", "has summoned a demon in", "has blocked access to",
      "has turned into gold", "is trying to sell", "has written a book about"
    ]),
    ends: JSON.stringify([
      "my house keys.", "my will to live.", "the garage door.",
      "my favorite pants.", "the living room router.", "my only pair of shoes.",
      "the laws of physics.", "my dignity.", "the building's elevator.",
      "my Netflix account.", "my toothbrush.", "my house deeds.",
      "my pogs collection.", "the car's handbrake.", "my desire to socialize.",
      "my coffee supply.", "the toilet lid.", "the TV remote.",
      "my lucky socks.", "Western civilization."
    ]),
    faqTitle: 'FAQ',
    bibliographyTitle: 'References'
  },
  seo: [
    { type: 'title', text: 'The Scientific Art of the Perfect Excuse', level: 2 },
    { type: 'paragraph', html: 'We live in the era of hyperconnectivity. Your phone vibrates, your watch notifies you, and your social agenda looks like a game of Tetris about to lose. The pressure to say "yes" to everything has created an epidemic of social exhaustion.' },
    { type: 'title', text: 'The Renaissance of JOMO (Joy of Missing Out)', level: 3 },
    { type: 'paragraph', html: 'While FOMO (Fear of Missing Out) dominated the last decade, digital wellness experts now advocate for <strong>JOMO: The Joy of Missing Out</strong>. It\'s not about isolation, but about intentionality.' },
    { type: 'tip', title: 'The Formula for the Irrefutable Alibi', html: '<strong>The Dissociated Subject:</strong> You are never the culprit. It is "the wifi", "my cat", "the universe". Shift the blame to an external entity.<br><strong>The Hyperbolic Action:</strong> The situation must be absurd or technical enough that nobody asks for details.<br><strong>The Physical Block:</strong> The final outcome must be binary: either I go or I stay home.' },
    { type: 'title', text: 'A Brief History of the Excuse', level: 3 },
    { type: 'list', items: [
      '<strong>Middle Ages:</strong> "My horse has lost a horseshoe" (A timeless classic).',
      '<strong>Industrial Revolution:</strong> "The steam engine overheated".',
      '<strong>Digital Era:</strong> "My internet dropped right in the middle of an update".',
    ]},
    { type: 'proscons', items: [
      { pro: 'Instantly relieves social pressure', con: 'Overuse erodes trust' },
      { pro: 'Protects your energy and boundaries', con: 'May generate guilt if used carelessly' },
      { pro: 'Creative and humorous tone defuses tension', con: 'Not suitable for formal or professional contexts' },
    ]},
  ],
  faq,
  bibliography: [
    { name: 'Procrastinator\'s Manifesto', url: 'https://example.com/manifesto' }
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
