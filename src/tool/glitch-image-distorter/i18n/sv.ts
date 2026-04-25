import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { GlitchImageDistorterLocaleContent } from '../index';

const slug = 'skapa-glitch-art-av-bilder';
const title = 'Glitch Bild Distorter';
const description = 'Förvandla dina bilder till glitch art med RGB-splits, scanlines, pixel sorting och animerade distorsioner. Ingen Photoshop behövs.';

const faq: GlitchImageDistorterLocaleContent['faq'] = [
  {
    question: 'Vad är glitch art?',
    answer: 'Glitch art är en form av digital konst som skapas genom att manipulera digitala bilder eller data för att producera avsiktliga visuella fel. Dessa "glitchar" resulterar i fragmenterade färger, förvrängda former och oförutsägbara mönster som skapar en estetik av digital korruption och kaos.',
  },
  {
    question: 'Kan jag använda mina egna bilder?',
    answer: 'Ja! Du kan ladda upp vilken PNG-, JPG- eller WebP-bild som helst, dra och släppa den på duken, eller klistra in en bild direkt från urklipp med Ctrl+V. Du kan också använda exempelbilden.',
  },
  {
    question: 'Vad gör de olika distorsionseffekterna?',
    answer: 'Corruption separerar RGB-kanaler för en kromatisk aberrations-effekt. Interference lägger till monitor-liknande scanlines med valfri darrning. Pixel Sorting gör att ljusa pixlar "rinner" i en vald riktning. Static Noise lägger på klassiskt TV-brus.',
  },
  {
    question: 'Kan jag animera glitch-effekten?',
    answer: 'Absolut! Läget "Glitch Animate" applicerar mikro-slumpmässiga rörelser på parametrarna, vilket skapar en levande, flimrande effekt som loopar kontinuerligt. Du kan exportera detta som en animerad GIF eller WebP.',
  },
  {
    question: 'Vilka format kan jag exportera?',
    answer: 'Du kan ladda ner en högupplöst PNG för statiskt bruk, eller exportera som animerad GIF eller WebP om du aktiverat animationsläget. Perfekt för Instagram, Discord eller andra plattformar.',
  },
  {
    question: 'Vad gör Chaos-knappen?',
    answer: 'Knappen "Chaos Random" slumpar omedelbart alla reglagens värden, vilket skapar oväntade och ofta överraskande glitch-kombinationer. Det är perfekt för att utforska verktygets kreativa potential utan manuella justeringar.',
  },
];

const howTo: GlitchImageDistorterLocaleContent['howTo'] = [
  { name: 'Ladda en bild', text: 'Dra och släpp en bild på duken, klistra in med Ctrl+V, ladda upp via filknappen eller klicka på "Använd exempelbild".' },
  { name: 'Justera reglagen', text: 'Använd reglagen för Corruption, Interference, Pixel Sort och Noise för att applicera olika glitch-effekter. Förhandsgranskningen uppdateras i realtid.' },
  { name: 'Aktivera animation', text: 'Slå på knappen "Glitch Animate" för att lägga till vibrationer och flimmer. Bilden kommer till liv med en dynamisk glitch-effekt.' },
  { name: 'Exportera ditt verk', text: 'Ladda ner som PNG för statisk konst, eller exportera som GIF/WebP om animation är aktiverad. Dela din glitch art på sociala medier!' },
  { name: 'Experimentera med Chaos', text: 'Klicka på knappen "Chaos Random" för att automatiskt upptäcka överraskande kombinationer av effekter.' },
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
  inLanguage: 'sv',
};

export const content: GlitchImageDistorterLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga Frågor',
  ui: {
    title: 'Glitch Distorter',
    description: 'Skapa glitch art på några sekunder.',
    dragDropText: 'Dra en bild hit eller klicka för att ladda upp',
    pasteHint: 'Tips: Du kan också klistra in en bild med Ctrl+V',
    exampleImageBtn: 'Använd exempelbild',
    corruptionLabel: 'Corruption (RGB-split)',
    interferenceLabel: 'Interference (Linjer)',
    tremorLabel: 'Darrning',
    pixelSortLabel: 'Pixel Sorting',
    pixelSortDirectionLabel: 'Riktning',
    noiseLabel: 'Statiskt Brus',
    animateBtn: 'Glitch Animation',
    chaosBtn: 'Slumpmässigt Chaos',
    downloadPngBtn: 'Ladda ner PNG',
    downloadGifBtn: 'Ladda ner GIF',
    undoBtn: 'Ångra',
    redoBtn: 'Gör om',
    footerText: 'Skapa korrumperad digital konst på mindre än 30 sekunder',
    faqTitle: 'FAQ',
    bibliographyTitle: 'Referenser'
  },
  seo: [
    { type: 'title', text: 'Vad är Glitch Art?', level: 2 },
    { type: 'paragraph', html: '<strong>Glitch art</strong> är en kreativ praktik som avsiktligt utnyttjar digitala fel, korrupta data och visuella artefakter för att producera estetiska resultat. Till skillnad från traditionell konst som strävar efter perfektion, firar glitch den oväntade skönheten i tekniska sammanbrott — fragmenterade färger och kaotiska mönster som uppstår ur fel.' },
    { type: 'title', text: 'Ursprung och digital estetik', level: 3 },
    { type: 'paragraph', html: 'Glitch-estetiken uppstod i början av 2000-talet när digitala konstnärer började experimentera med korrupta bildfiler och hårdvarufel. Konstnärer som <strong>Rosa Menkman</strong> lyfte glitch art till finkonst genom att undersöka de digitala artefakternas poetik. Estetiken hämtar inspiration från VHS-degradering, överföringsfel och det synliga "bruset" i digitala system.' },
    { type: 'title', text: 'Viktiga glitch-tekniker', level: 3 },
    { type: 'list', items: [
      '<strong>RGB Splitting:</strong> Att förskjuta de röda, gröna och blå färgkanalerna för att skapa kromatisk aberration.',
      '<strong>Scanlines:</strong> Att simulera horisontella linjer från gamla CRT-skärmar för en retro-effekt.',
      '<strong>Pixel Sorting:</strong> Att sortera pixlar efter ljusstyrka och förskjuta dem för att skapa en "smältande" effekt.',
      '<strong>Data Moshing:</strong> Att manipulera videocodec-data för att blanda bildrutor på oväntade sätt.',
      '<strong>Bit Shifting:</strong> Direkt ändring av binärdata resulterar i dramatiska färgförändringar och distorsioner.',
    ]},
    { type: 'tip', title: 'Filosofin bakom Glitch', html: 'Glitch art utmanar idén om en "perfekt" digital representation. Genom att omfamna fel ifrågasätter vi teknikens tillförlitlighet och utforskar hur tekniken förmedlar vår uppfattning av verkligheten. Det är konst om systemfel och den skönhet som finns gömd i kaoset.' },
    { type: 'title', text: 'Samtida tillämpningar', level: 3 },
    { type: 'paragraph', html: 'Idag finns glitch-estetik överallt: skivomslag, musikvideor, mode och grafisk design. Det här verktyget demokratiserar skapandet av glitch art och låter vem som helst generera professionell digital korruption utan djupa tekniska kunskaper.' },
    { type: 'stats', items: [
      { value: '2000-talet', label: 'Glitch art uppstår', icon: 'mdi:history' },
      { value: '∞', label: 'Möjliga kombinationer', icon: 'mdi:shuffle-variant' },
      { value: '<30s', label: 'Tid att skapa', icon: 'mdi:flash' },
      { value: '3+', label: 'Exportformat', icon: 'mdi:download-multiple' },
    ], columns: 4 },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
