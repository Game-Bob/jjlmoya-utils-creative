import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { SynesthesiaPainterLocaleContent } from '../index';

const slug = 'synesthesia-painter';
const title = 'Synesthesia Painter';
const description = 'Visualize the color of words according to grapheme-color synesthesia. Each letter has its own color, turning text into chromatic art.';

const faq: SynesthesiaPainterLocaleContent['faq'] = [
  {
    question: 'Do all synesthetes see the same colors for each letter?',
    answer: 'No. Synesthetic colors are unique to each person. Statistical tendencies exist (A tends to be red for many), but no two synesthetes have exactly the same palette. This tool uses the colors most frequently reported in population studies, not the "correct" ones.',
  },
  {
    question: 'Can I develop synesthesia by using this tool continuously?',
    answer: 'Not in the strict neurological sense. Genuine synesthesia is a characteristic of the nervous system, not a learned skill. However, repeated use of color-letter associations can create strong associative memories. Some studies suggest that practicing these associations can improve text memory.',
  },
  {
    question: 'What is the "Aura" mode for?',
    answer: 'Aura mode simulates how some synesthetes describe seeing colors "floating" or "glowing" around letters rather than integrated into them. It creates a more atmospheric and immersive visual experience, especially on a dark background.',
  },
  {
    question: 'Does the "Dots" mode have any scientific basis?',
    answer: 'It is an artistic abstraction. It reduces the text to its "chromatic essence" by eliminating the recognizable shape of the letters. The result resembles chromatic data visualizations or pointillist paintings, and allows you to see the "color signature" of a text without meaning interfering.',
  },
  {
    question: 'Why are some letters like I and O white or black?',
    answer: 'In synesthesia studies, the vowels I and O, and the letter W, are frequently described as white, transparent, or black. This tool adapts those colors to the active background: white on dark background, black on light background, to always guarantee visibility.',
  },
];

const howTo: SynesthesiaPainterLocaleContent['howTo'] = [
  { name: 'Write text', text: 'Click the writing area and start typing. Each letter will appear colored according to its statistical synesthetic association.' },
  { name: 'Change visualization mode', text: 'Use the buttons in the top right corner to switch between Letters (colored text), Dots (color circles), and Aura (luminous letters with chromatic halos).' },
  { name: 'Explore different texts', text: 'Write names, words in different languages, or sentences to discover their unique chromatic palette. Long words create fascinating visual gradients.' },
  { name: 'Clear and start again', text: 'Use the "Clear" button in the bottom bar to wipe the canvas and explore a new text.' },
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

export const content: SynesthesiaPainterLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  ui: {
    title: 'Synesthesia Painter',
    description: 'Transform your words into chromatic art.',
    modeLetters: 'Letters',
    modeDots: 'Dots',
    modeAura: 'Aura',
    placeholder: 'Type here...',
    footerText: 'Type to discover your personal color palette',
    clearBtn: 'Clear',
    faqTitle: 'FAQ',
    bibliographyTitle: 'References'
  },
  seo: [
    { type: 'title', text: 'What Is Grapheme-Color Synesthesia?', level: 2 },
    { type: 'paragraph', html: '<strong>Synesthesia</strong> is a neurological condition in which the stimulation of one sense automatically triggers a response in another. The most studied and prevalent variant is <strong>grapheme-color synesthesia</strong>: those who have it perceive each letter or number with an intrinsic, constant, and vivid color. It is not imagination or metaphor; for a synesthete, the letter "A" is red in the same way that fire is hot. This tool applies a <em>statistical palette</em> based on the colors most frequently reported for each grapheme in population studies.' },
    { type: 'title', text: 'Neuroscience: The Cross-Activation Theory', level: 3 },
    { type: 'paragraph', html: 'The most widely accepted neurological model for grapheme-color synesthesia is <strong>cross-activation</strong>. The areas of the temporal cortex involved in recognizing letter shapes (fusiform gyrus) are anatomically adjacent to the regions that process color (area V4). In people with synesthesia, there is greater structural or functional connectivity between these regions, so recognizing a letter also activates color neurons. Functional neuroimaging (fMRI) research has confirmed that synesthetes show genuine activation in V4 when reading text, even when it is monochromatic.' },
    { type: 'tip', title: 'The Three Visualization Modes', html: '<strong>Letters:</strong> The original text colored by grapheme. Ideal for seeing the "chromatic melody" of a full text. <strong>Dots:</strong> Each character becomes a circle of its color; the text disappears and only the color music remains. <strong>Aura:</strong> Letters emit a halo of their color, as if the text glows with its own energy.' },
    { type: 'title', text: 'Statistics and Color Universals', level: 3 },
    { type: 'paragraph', html: 'Although synesthetic colors are unique to each individual, studies by Simner et al. (2006) and Eagleman et al. (2007) found significant statistical patterns. The vowel <strong>A</strong> tends to be red for most; <strong>O</strong> is white or black; <strong>S</strong> appears in teal or green tones; <strong>E</strong> appears as green or white. Interestingly, color-letter associations are more consistent within a linguistic culture than across different cultures, suggesting a role for early alphabet learning.' },
    { type: 'list', items: [
      '<strong>Prevalence:</strong> Approximately 4% of the population has grapheme-color synesthesia to some degree, though more recent studies raise this figure to 6–8% when subclinical forms are included.',
      '<strong>Gender bias:</strong> Synesthesia is 3 to 6 times more common in women than in men, though the causes of this difference are not yet fully explained.',
      '<strong>Heritability:</strong> It has a clear genetic component: it tends to run in families, though not always with the same type of synesthesia.',
      '<strong>Consistency:</strong> Unlike learned associations, synesthetic colors are extraordinarily stable over time. 10-year follow-up studies demonstrate over 90% consistency in grapheme-color associations.',
      '<strong>Famous synesthetes:</strong> Vladimir Nabokov, Wassily Kandinsky, Nikola Tesla, and Billy Joel have publicly described synesthetic experiences that influenced their work.',
    ]},
    { type: 'stats', items: [
      { value: '4–8%', label: 'Population with synesthesia', icon: 'mdi:brain' },
      { value: '90%+', label: 'Color consistency over 10 years', icon: 'mdi:check-circle' },
      { value: '3–6×', label: 'More common in women', icon: 'mdi:gender-female' },
      { value: '26+10', label: 'Colored letters & digits', icon: 'mdi:alphabetical' },
    ], columns: 4 },
    { type: 'title', text: 'Art and Synesthesia: When the Senses Merge', level: 3 },
    { type: 'paragraph', html: '<strong>Wassily Kandinsky</strong>, founder of abstract expressionism, experienced both grapheme-color and music-color synesthesia: he heard instruments in colors (yellow was a trumpet, deep blue a cello) and used these perceptions to create his theory of abstract art. In music, <strong>Alexander Scriabin</strong> composed <em>Prometheus: The Poem of Fire</em> with a part for "tastiera per luce" (light keyboard), designed to project colors corresponding to each note.' },
    { type: 'tip', title: 'Color Palette of This Tool', html: 'The color assignments are inspired by the most common statistical data in scientific literature. <strong>A → red</strong>, <strong>E → green</strong>, <strong>I → white/black depending on background</strong>, <strong>O → black/white</strong>, <strong>U → amber</strong>. Consonants follow less uniform patterns, but contrast with the background is always prioritized to guarantee readability.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
