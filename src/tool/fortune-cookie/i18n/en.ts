import type { FortuneCookieLocaleContent } from '../index';

export const content: FortuneCookieLocaleContent = {
  slug: 'fortune-cookie',
  title: 'Fortune Cookie',
  description: 'Check your daily destiny and discover your lucky numbers.',
  faqTitle: 'Frequently Asked Questions',
  bibliographyTitle: 'Destiny Bibliography',
  ui: {
    title: 'Online Fortune Cookie',
    description: 'Your daily digital oracle.',
    instruction: 'Hit the cookie to open your destiny',
    dailyStatus: 'Your destiny has been revealed for today.',
    shareBtn: 'Share Wisdom',
    shareTitle: 'My Fortune Cookie 🥠',
    shareText: '🥠 Destiny has spoken: "$TEXT"\n✨ My numbers: $NUMS\n\nDiscover your fortune here:',
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
    bibliographyTitle: 'References'
  },
  seo: [
    { type: 'title', text: 'The Mystery of the Fortune Cookie', level: 2 },
    { type: 'paragraph', html: 'Ever wondered where these curious cookies come from? Although we associate them with Chinese food, their origin is a fascinating journey between Japan and the United States.' }
  ],
  faq: [],
  bibliography: [],
  howTo: [],
  schemas: []
};
