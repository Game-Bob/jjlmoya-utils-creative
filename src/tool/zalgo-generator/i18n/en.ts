import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { ZalgoGeneratorLocaleContent } from '../index';

const slug = 'zalgo-generator';
const title = 'Zalgo Generator';
const description = 'Corrupt your messages with cascading overflowing Unicode characters. Adjust intensity and direction of the glitch effect.';

const faq: ZalgoGeneratorLocaleContent['faq'] = [
  { question: 'What is Zalgo text?', answer: 'It is a type of text that uses Unicode combining characters (diacritics) excessively. When stacked vertically, these characters "overflow" their original line, creating a visual effect of corruption, disorder, or horror popular in internet culture.' },
  { question: 'Why does Zalgo text look so strange?', answer: 'It exploits a feature of the Unicode standard that allows adding marks above, below, or through a base letter. Since there is no strict limit on how many marks can be added, the text can "invade" lines above or below.' },
  { question: 'Can I use this text on social media?', answer: 'Yes, most modern platforms (Instagram, Twitter, Discord) support Unicode. However, some networks or devices may filter or truncate excess characters at very high intensity to maintain interface readability.' },
  { question: 'How can I remove the Zalgo effect from text?', answer: 'To clean corrupted text, you can use JavaScript string normalization or simply paste it into a basic text editor that only accepts plain text. Our tool is purely creative and does not damage the original content.' },
];

const howTo: ZalgoGeneratorLocaleContent['howTo'] = [
  { name: 'Write the base message', text: 'Enter the text you want to "corrupt" in the main text box.' },
  { name: 'Adjust the chaos intensity', text: 'Move the slider to define how many combining characters to stack. Higher intensity = harder to read.' },
  { name: 'Select the overflow direction', text: 'Choose whether corruption should grow upward, downward, or in all directions simultaneously.' },
  { name: 'Copy the result', text: 'Click the copy button. The resulting text includes all the invisible bytes needed to maintain the glitch effect.' },
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

export const content: ZalgoGeneratorLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  ui: {
    title: 'Zalgo Generator',
    description: 'E̴v̵e̸r̸y̵t̸h̵i̸n̴g̴ ̷i̸s̶ ̶c̶o̷r̵r̷u̷p̶t̸',
    inputPlaceholder: 'Type your normal message here...',
    intensityLabel: 'Corruption Level',
    outputLabel: 'Corrupted Result',
    copyBtn: 'Copy Chaos',
    copied: 'Copied!',
    faqTitle: 'FAQ',
    bibliographyTitle: 'References',
    configTitle: 'Configuration',
    intensity: 'Intensity',
    upLabel: 'Upper Corruption',
    midLabel: 'Middle Noise',
    downLabel: 'Lower Corruption',
    resetBtn: 'Reset Values',
    warningText: 'WARNING: Zalgo text uses combined Unicode characters that may visually overflow their container. Use with caution on social media.',
    previewLabel: 'Real-time Preview',
    emptyLabel: 'Empty',
    charLabel: 'CHARACTERS',
    noteText: 'Note: Some browsers may limit the rendering of combined characters'
  },
  seo: [
    { type: 'title', text: 'What Is Zalgo Text and How Does Visual Corruption Work?', level: 2 },
    { type: 'paragraph', html: 'Zalgo Text is a form of typographic manipulation that exploits a specific feature of the Unicode standard: <strong>combining characters</strong>. Unlike normal characters, these diacritics take up no horizontal space — they stack vertically on top of the base letter, creating that "digital chaos" or "cosmic horror" aesthetic so popular in internet culture.' },
    { type: 'title', text: 'Anatomy of the Process', level: 3 },
    { type: 'paragraph', html: 'Our generator processes each character independently, injecting random bursts of Unicode code points in three distinct vectors: <strong>upper</strong> (diacritics that stack above), <strong>middle</strong> (which pierce through the letter), and <strong>lower</strong> (hanging below).' },
    { type: 'tip', title: 'Corruption Algorithm', html: 'For each base character, a <code>count = intensity × 30</code> is calculated. That many random diacritics are added in each vector. At intensity 1.5 you can get up to 45 combining characters per letter.' },
    { type: 'title', text: 'Etiquette and Applications', level: 3 },
    { type: 'list', items: [
      '<strong>Social Media:</strong> Grab attention on Instagram or TikTok. Perfect for bios seeking to break with convention.',
      '<strong>Horror Storytelling:</strong> Dramatize fiction narratives, creepypastas, or simulations of compromised systems.',
      '<strong>Accessibility:</strong> Warning — Zalgo text is unreadable by screen readers. Use it only as visual decoration, never for critical content.',
      '<strong>SEO:</strong> Never use Zalgo in core keywords (H1, meta titles). Indexing bots may fail to normalize these characters.',
    ]},
    { type: 'title', text: 'The Origin: From Something Awful to Glitch Art', level: 3 },
    { type: 'paragraph', html: 'Zalgo did not begin as a generator, but as an intervention in classic comic strips. The user Shmorky, in the mid-2000s, began deforming characters like Nancy or Archie, adding stains and distortions. The phrase <strong>"He comes"</strong> sealed the fate of these works, announcing the arrival of an entity that devoured reality.' },
    { type: 'glossary', items: [
      { term: 'Combining Character', definition: 'A Unicode code point designed to be placed on top of, below, or through a base character. Used legitimately in languages like Arabic, Vietnamese, and Hindi.' },
      { term: 'Diacritic', definition: 'A mark added to a base letter to modify its pronunciation or meaning. Zalgo abuses these to create visual overflow.' },
      { term: 'Unicode Block', definition: 'A contiguous range of Unicode code points. Zalgo characters mostly come from the "Combining Diacritical Marks" block (U+0300–U+036F).' },
      { term: 'Glitch Art', definition: 'An aesthetic that intentionally incorporates or simulates errors, artifacts, and corruptions in digital media as an expressive technique.' },
    ]},
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
