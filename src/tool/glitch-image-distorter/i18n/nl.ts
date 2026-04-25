import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { GlitchImageDistorterLocaleContent } from '../index';

const slug = 'glitch-afbeelding-distorter';
const title = 'Glitch Afbeelding Distorter';
const description = 'Transformeer afbeeldingen in glitch-art met RGB-splits, scanlines, pixel sorting en geanimeerde vervormingen. Geen Photoshop nodig.';

const faq: GlitchImageDistorterLocaleContent['faq'] = [
  {
    question: 'Wat is glitch-art?',
    answer: 'Glitch-art is een vorm van digitale kunst die wordt gecreëerd door digitale afbeeldingen of gegevens te manipuleren om opzettelijke visuele fouten te produceren. Deze "glitches" resulteren in gefragmenteerde kleuren, vervormde vormen en onvoorspelbare patronen die een esthetiek van digitale corruptie en chaos creëren.',
  },
  {
    question: 'Kan ik mijn eigen afbeeldingen gebruiken?',
    answer: 'Ja! Je kunt elke PNG-, JPG- of WebP-afbeelding uploaden, naar het canvas slepen of een afbeelding rechtstreeks vanaf je klembord plakken met Ctrl+V. Je kunt ook de voorbeeld-afbeelding gebruiken.',
  },
  {
    question: 'Wat doen de verschillende vervormingseffecten?',
    answer: 'Corruption scheidt de RGB-kanalen voor een chromatisch aberratie-effect. Interference voegt monitor-achtige scanlines toe met optionele tremor. Pixel Sorting laat heldere pixels "druipen" in een gekozen richting. Static Noise voegt de klassieke tv-sneeuw toe.',
  },
  {
    question: 'Kan ik het glitch-effect animeren?',
    answer: 'Zeker! De modus "Glitch Animate" past micro-willekeurige bewegingen toe op de parameters, waardoor een levendig, flikkerend effect ontstaat dat continu doorloopt. Je kunt dit exporteren als een geanimeerde GIF of WebP.',
  },
  {
    question: 'Welke formaten kan ik exporteren?',
    answer: 'Je kunt een hoogwaardige PNG downloaden voor statisch gebruik, of exporteren als geanimeerde GIF of WebP als je de animatiemodus hebt ingeschakeld. Perfect voor Instagram, Discord of andere platforms.',
  },
  {
    question: 'Wat doet de Chaos-knop?',
    answer: 'De "Chaos Random" knop randomiseert onmiddellijk alle schuifregelaars, waardoor onverwachte en vaak verrassende glitch-combinaties ontstaan. Het is perfect om het creatieve potentieel te verkennen zonder handmatige aanpassingen.',
  },
];

const howTo: GlitchImageDistorterLocaleContent['howTo'] = [
  { name: 'Afbeelding laden', text: 'Sleep een afbeelding naar het canvas, plak er een met Ctrl+V, upload via de knop of klik op "Gebruik voorbeeld-afbeelding".' },
  { name: 'Schuifregelaars aanpassen', text: 'Gebruik de regelaars voor Corruption, Interference, Pixel Sort en Noise om verschillende glitch-effecten toe te passen. De preview wordt direct bijgewerkt.' },
  { name: 'Animatie inschakelen', text: 'Zet de "Glitch Animate" knop aan om willekeurige bewegingen en flikkeringen toe te voegen. De afbeelding komt tot leven met een dynamisch effect.' },
  { name: 'Creatie exporteren', text: 'Download als PNG voor statische kunst of exporteer als GIF/WebP als animatie aan staat. Deel je glitch-art op social media!' },
  { name: 'Experimenteren met Chaos', text: 'Klik op de "Chaos Random" knop om automatisch verrassende combinaties van effecten te ontdekken.' },
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
  inLanguage: 'nl',
};

export const content: GlitchImageDistorterLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde Vragen',
  ui: {
    title: 'Glitch Distorter',
    description: 'Maak glitch-art in enkele seconden.',
    dragDropText: 'Sleep een afbeelding hierheen of klik om te uploaden',
    pasteHint: 'Tip: Je kunt ook een afbeelding plakken met Ctrl+V',
    exampleImageBtn: 'Gebruik voorbeeld-afbeelding',
    corruptionLabel: 'Corruption (RGB-split)',
    interferenceLabel: 'Interference (Lijnen)',
    tremorLabel: 'Trilling',
    pixelSortLabel: 'Pixel Sorting',
    pixelSortDirectionLabel: 'Richting',
    noiseLabel: 'Statische Ruis',
    animateBtn: 'Glitch Animatie',
    chaosBtn: 'Willekeurige Chaos',
    downloadPngBtn: 'PNG Downloaden',
    downloadGifBtn: 'GIF Downloaden',
    undoBtn: 'Ongedaan maken',
    redoBtn: 'Opnieuw uitvoeren',
    footerText: 'Maak gecorrumpeerde digitale kunst in minder dan 30 seconden',
    faqTitle: 'FAQ',
    bibliographyTitle: 'Referenties'
  },
  seo: [
    { type: 'title', text: 'Wat is Glitch-Art?', level: 2 },
    { type: 'paragraph', html: '<strong>Glitch-art</strong> is een creatieve praktijk die opzettelijk gebruik maakt van digitale fouten, gecorrumpeerde gegevens en visuele artefacten om esthetische resultaten te produceren. In tegenstelling tot traditionele kunst die perfectie nastreeft, viert glitch de onverwachte schoonheid van technologische defecten — gefragmenteerde kleuren en chaotische patronen die voortkomen uit fouten.' },
    { type: 'title', text: 'Oorsprong en Digitale Esthetiek', level: 3 },
    { type: 'paragraph', html: 'De glitch-esthetiek ontstond begin jaren 2000, toen digitale kunstenaars begonnen te experimenteren met gecorrumpeerde bestanden en hardwarefouten. Kunstenaars als <strong>Rosa Menkman</strong> verhieven glitch-art tot beeldende kunst door de poëzie van digitale artefacten te onderzoeken. De esthetiek put uit VHS-degradatie, transmissiefouten en de zichtbare "ruis" van digitale systemen.' },
    { type: 'title', text: 'Belangrijke Glitch-technieken', level: 3 },
    { type: 'list', items: [
      '<strong>RGB Splitting:</strong> De rode, groene en blauwe kleurkanalen verschuiven om chromatische aberratie te creëren.',
      '<strong>Scanlines:</strong> Horizontale lijnen simuleren om oude CRT-monitoren na te bootsen voor een retro effect.',
      '<strong>Pixel Sorting:</strong> Pixels sorteren op helderheid en verschuiven om een "smeltend" effect te creëren.',
      '<strong>Data Moshing:</strong> Videocodec-gegevens manipuleren om frames op onverwachte manieren te mengen.',
      '<strong>Bit Shifting:</strong> Directe aanpassing van binaire gegevens resulteert in dramatische kleurverschuivingen.',
    ]},
    { type: 'tip', title: 'De Filosofie Achter Glitch', html: 'Glitch-art daagt het idee van een "perfecte" digitale weergave uit. Door fouten te omarmen, stellen we de betrouwbaarheid van technologie ter discussie en verkennen we hoe technologie onze perceptie van de werkelijkheid beïnvloedt. Het is kunst over systeemfalen en de verborgen schoonheid in chaos.' },
    { type: 'title', text: 'Hedendaagse Toepassingen', level: 3 },
    { type: 'paragraph', html: 'Tegenwoordig is glitch-esthetiek overal: albumhoezen, videoclips, mode en grafisch ontwerp. Deze tool democratiseert het maken van glitch-art, waardoor iedereen professioneel ogende digitale corruptie kan genereren zonder diepe technische kennis.' },
    { type: 'stats', items: [
      { value: '2000s', label: 'Ontstaan van glitch-art', icon: 'mdi:history' },
      { value: '∞', label: 'Mogelijke combinaties', icon: 'mdi:shuffle-variant' },
      { value: '<30s', label: 'Tijd om te maken', icon: 'mdi:flash' },
      { value: '3+', label: 'Exportformaten', icon: 'mdi:download-multiple' },
    ], columns: 4 },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
