import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { FortuneCookieLocaleContent } from '../index';
import { bibliography } from '../bibliography';

const slug = 'fortune-cookie';
const title = 'Fortune Cookie';
const description = 'Check your daily destiny and discover your lucky numbers. One fortune per day, revealed with a click.';

const faq: FortuneCookieLocaleContent['faq'] = [
  {
    question: 'Can I open more than one cookie per day?',
    answer: 'Destiny only speaks once a day. We save your fortune on the device so it guides you throughout the day.'
  },
  {
    question: 'Are the fortunes randomly generated?',
    answer: 'Yes — a random fortune is selected each day and saved locally. Each of the 25 fortunes has an equal chance of being chosen, ensuring variety over time.'
  }
];

const howTo: FortuneCookieLocaleContent['howTo'] = [
  { name: 'Break the cookie', text: 'Click repeatedly on the cookie to crack it open.' },
  { name: 'Read your fortune', text: 'Discover the hidden message inside and your lucky numbers for the day.' }
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

export const content: FortuneCookieLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  ui: {
    title: 'Online Fortune Cookie',
    description: 'Your daily digital oracle.',
    instruction: 'Hit the cookie to open your destiny',
    dailyStatus: 'Your destiny has been revealed for today.',
    shareBtn: 'Share Wisdom',
    shareTitle: 'My Fortune Cookie',
    shareText: 'Destiny has spoken: "$TEXT"\nMy numbers: $NUMS\n\nDiscover your fortune here:',
    copied: 'Copied!',
    fortunes: JSON.stringify([
      "The fortune you seek is in another cookie.",
      "Don't count the days, make the days count.",
      "A journey of a thousand miles begins with a single step.",
      "Mistake is the preamble of discovery.",
      "Your capacity to learn is your greatest asset.",
      "Smile, the universe is watching you.",
      "Patience is a tree with a bitter root but very sweet fruit.",
      "Don't fear growing slowly, fear only staying still.",
      "Today is the tomorrow you worried about yesterday.",
      "Happiness is not something made. It comes from your own actions.",
      "If you cannot change the direction of the wind, adjust your sails.",
      "What you plant now, you will harvest later.",
      "Creativity is intelligence having fun.",
      "Don't look for errors, look for solutions.",
      "Your attitude, not your aptitude, will determine your altitude.",
      "Success is the sum of small efforts repeated day after day.",
      "Believe you can and you're halfway there.",
      "The only way to do great work is to love what you do.",
      "Life is 10% what happens to you and 90% how you react to it.",
      "Be the change you want to see in the world.",
      "The best way to predict the future is to invent it.",
      "Simplicity is the ultimate sophistication.",
      "You are the master of your destiny and the captain of your soul.",
      "Soon you will receive news that will change your perspective.",
      "An unexpected trip will bring you great joys."
    ]),
    faqTitle: 'FAQ',
  },
  seo: [
    { type: 'title', text: 'The Mystery of the Fortune Cookie', level: 2 },
    { type: 'paragraph', html: 'Ever wondered where these curious cookies come from? Although we associate them with Chinese food, their origin is a fascinating journey between Japan and the United States. The fortune cookie as we know it today was likely invented in early 20th-century California, not China — where they are virtually unknown.' },
    { type: 'tip', title: 'How Our Oracle Works', html: 'Each day you can open one cookie. The system saves your destiny so you remember it for 24 hours. The fortune is stored locally in your browser — completely private, no server involved. Come back tomorrow for a new prediction!' },
    { type: 'title', text: 'The Philosophy of Oracles', level: 3 },
    { type: 'paragraph', html: 'Humans have always sought guidance in uncertain times. From the Oracle of Delphi to the I Ching, fortune-telling systems serve a consistent psychological function: they give us permission to <strong>pause and reflect</strong>. A fortune cookie does not predict the future — it prompts you to think about it.' },
    { type: 'list', items: [
      '<strong>Ancient China:</strong> The I Ching (Book of Changes, ~1000 BC) used hexagrams to guide decisions and interpret destiny.',
      '<strong>Classical Greece:</strong> The Oracle of Delphi attracted rulers and citizens alike with cryptic pronouncements interpreted as divine guidance.',
      '<strong>Modern Japan:</strong> Omikuji fortune slips at Shinto shrines, tied to tree branches, blend fate with ritual.',
      '<strong>20th-century USA:</strong> Fortune cookies emerged in Japanese-American communities before becoming synonymous with Chinese-American cuisine.',
    ]},
    { type: 'stats', items: [
      { value: '3 billion+', label: 'Fortune cookies made annually', icon: 'mdi:cookie' },
      { value: '~1000 BC', label: 'I Ching origin', icon: 'mdi:book-open-variant' },
      { value: '25', label: 'Fortunes in this oracle', icon: 'mdi:star-shooting' },
      { value: '1/day', label: 'One destiny per day', icon: 'mdi:calendar-today' },
    ], columns: 4 },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
