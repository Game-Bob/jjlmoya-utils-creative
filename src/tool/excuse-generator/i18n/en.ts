import type { ExcuseGeneratorLocaleContent } from '../index';

export const content: ExcuseGeneratorLocaleContent = {
  slug: 'excuse-generator',
  title: 'Excuse Generator',
  description: 'Semantic gambling machine to get rid of commitments with style.',
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
    ])
  },
  seo: [
    { type: 'title', text: 'The Scientific Art of the Perfect Excuse', level: 2 },
    { type: 'paragraph', html: 'We live in the era of hyperconnectivity. Your phone vibrates, your watch notifies you, and your social agenda looks like a game of Tetris about to lose. The pressure to say "yes" to everything has created an epidemic of social exhaustion.' },
    { type: 'title', text: 'The Renaissance of JOMO (Joy of Missing Out)', level: 3 },
    { type: 'paragraph', html: 'While FOMO (Fear of Missing Out) dominated the last decade, digital wellness experts now advocate for <strong>JOMO: The Joy of Missing Out</strong>. It\'s not about isolation, but about intentionality.' }
  ],
  faq: [
    {
      question: 'Can this generator save my marriage?',
      answer: 'While we are not therapists, avoiding that dinner with the in-laws using a plausible technical emergency can significantly reduce tension. Use responsibly.'
    }
  ],
  bibliography: [],
  howTo: [],
  schemas: []
};
