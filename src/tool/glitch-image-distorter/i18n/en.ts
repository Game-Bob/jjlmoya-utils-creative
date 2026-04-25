import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { GlitchImageDistorterLocaleContent } from '../index';

const slug = 'glitch-image-distorter';
const title = 'Glitch Image Distorter';
const description = 'Transform images into glitch art with RGB splits, scanlines, pixel sorting, and animated distortions. No Photoshop needed.';

const faq: GlitchImageDistorterLocaleContent['faq'] = [
  {
    question: 'What is glitch art?',
    answer: 'Glitch art is a form of digital art created by manipulating digital images or data to produce intentional visual errors. These "glitches" result in fragmented colors, distorted shapes, and unpredictable patterns that create an aesthetic of digital corruption and chaos.',
  },
  {
    question: 'Can I use my own images?',
    answer: 'Yes! You can upload any PNG, JPG, or WebP image, drag and drop it into the canvas, or paste an image directly from your clipboard using Ctrl+V. You can also use the example image to explore the tool without uploading.',
  },
  {
    question: 'What do the different distortion effects do?',
    answer: 'Corruption separates RGB channels for a chromatic aberration effect. Interference adds monitor-like scanlines with optional tremor. Pixel Sorting makes bright pixels "drip" in a chosen direction. Static Noise overlays classic TV snow. Combined, they create the glitch aesthetic.',
  },
  {
    question: 'Can I animate the glitch effect?',
    answer: 'Yes! The "Glitch Animate" mode applies micro-random movements to the parameters, creating a living, flickering effect that loops continuously. You can export this as an animated GIF or WebP for social media.',
  },
  {
    question: 'What formats can I export?',
    answer: 'You can download a high-quality PNG for static use, or export as an animated GIF or WebP if you enabled animation mode. These formats are perfect for sharing on Instagram, Discord, or other platforms.',
  },
  {
    question: 'What does the Chaos button do?',
    answer: 'The "Chaos Random" button instantly randomizes all slider values, creating unexpected and often surprising glitch combinations. It\'s perfect for exploring the tool\'s creative potential without manual tweaking.',
  },
];

const howTo: GlitchImageDistorterLocaleContent['howTo'] = [
  { name: 'Load an image', text: 'Drag and drop an image onto the canvas, paste one with Ctrl+V, upload via the file button, or click "Use example image" to start immediately.' },
  { name: 'Adjust distortion sliders', text: 'Use the Corruption, Interference, Pixel Sort, and Noise sliders to apply different glitch effects. Watch the preview update in real-time.' },
  { name: 'Enable animation', text: 'Toggle the "Glitch Animate" button to add micro-random movements. The image will flicker and shift, creating a living glitch effect.' },
  { name: 'Export your creation', text: 'Download as PNG for static artwork, or export as GIF/WebP if animation is enabled. Share your glitch art on social media!' },
  { name: 'Experiment with Chaos', text: 'Click the "Chaos Random" button to auto-randomize all settings and discover unexpected glitch combinations.' },
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

export const content: GlitchImageDistorterLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  ui: {
    title: 'Glitch Image Distorter',
    description: 'Create glitch art in seconds.',
    dragDropText: 'Drag & drop an image here or click to upload',
    pasteHint: 'Tip: You can also paste an image with Ctrl+V',
    exampleImageBtn: 'Use example image',
    corruptionLabel: 'Corruption (RGB Split)',
    interferenceLabel: 'Interference (Scanlines)',
    tremorLabel: 'Tremor',
    pixelSortLabel: 'Pixel Sorting',
    pixelSortDirectionLabel: 'Direction',
    noiseLabel: 'Static Noise',
    animateBtn: 'Glitch Animate',
    chaosBtn: 'Chaos Random',
    downloadPngBtn: 'Download PNG',
    downloadGifBtn: 'Download GIF',
    undoBtn: 'Undo',
    redoBtn: 'Redo',
    footerText: 'Create corrupted digital art in less than 30 seconds',
    faqTitle: 'FAQ',
    bibliographyTitle: 'References'
  },
  seo: [
    { type: 'title', text: 'What Is Glitch Art?', level: 2 },
    { type: 'paragraph', html: '<strong>Glitch art</strong> is a creative practice that intentionally exploits digital errors, corrupted data, and visual artifacts to produce aesthetic results. Unlike traditional art, which seeks perfection and clarity, glitch art celebrates the unexpected beauty of digital breakdown—fragmented colors, distorted shapes, and chaotic patterns that emerge from technological failure.' },
    { type: 'title', text: 'Origins and Digital Aesthetics', level: 3 },
    { type: 'paragraph', html: 'The glitch aesthetic emerged in the early 2000s as digital artists began experimenting with corrupted image files, codec errors, and hardware malfunctions. Artists like <strong>Rosa Menkman</strong> and <strong>Evan Roth</strong> elevated glitch art to fine art status by investigating the poetics of digital artifacts. The aesthetic draws from VHS degradation, transmission errors, and the visible "noise" of digital systems—transforming technical failures into cultural commentary.' },
    { type: 'title', text: 'Key Glitch Techniques', level: 3 },
    { type: 'list', items: [
      '<strong>RGB Splitting:</strong> Separating red, green, and blue color channels and offsetting them creates chromatic aberration, a signature glitch effect.',
      '<strong>Scanlines:</strong> Simulating horizontal scan lines mimics old CRT monitors and adds a retro, corrupted television aesthetic.',
      '<strong>Pixel Sorting:</strong> Sorting pixels by brightness or hue and shifting them directionally creates a "melting" or "dripping" effect.',
      '<strong>Data Moshing:</strong> Manipulating video codec data to blend frames in unexpected ways, creating temporal distortion.',
      '<strong>Bit Shifting:</strong> Altering binary data directly results in dramatic color shifts and geometric distortions.',
    ]},
    { type: 'tip', title: 'The Philosophy Behind Glitch', html: 'Glitch art challenges the notion of "perfect" digital representation. By embracing errors and imperfections, glitch artists question the reliability of digital media and explore how technology mediates our perception of reality. It\'s art about systems failure, human fallibility, and the beauty hidden in chaos.' },
    { type: 'title', text: 'Contemporary Applications', level: 3 },
    { type: 'paragraph', html: 'Today, glitch aesthetics appear everywhere: album covers, music videos, fashion, and graphic design. Artists like <strong>Jon Cates</strong> and collectives like <strong>JODI</strong> continue pushing the boundaries of what glitch can express. This tool democratizes glitch art creation, allowing anyone to produce professional-looking digital corruption without deep technical knowledge.' },
    { type: 'stats', items: [
      { value: '2000s', label: 'Emergence of glitch art', icon: 'mdi:history' },
      { value: '∞', label: 'Possible glitch combinations', icon: 'mdi:shuffle-variant' },
      { value: '<30s', label: 'Time to create', icon: 'mdi:flash' },
      { value: '3+', label: 'Export formats', icon: 'mdi:download-multiple' },
    ], columns: 4 },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
