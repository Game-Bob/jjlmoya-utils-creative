import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { BeadPatternGeneratorLocaleContent } from '../index';

const slug = 'monstergenerator-for-parlor';
const title = 'Mönstergenerator';
const description = 'Skapa pixelkonst och pärlmönster för Miyuki eller Hama från dina foton. Algoritm för färgkvantisering, tunnelvisionsläge och ZIP-export.';

const faq: BeadPatternGeneratorLocaleContent['faq'] = [
  { question: 'Vad är färgkvantisering i mönster?', answer: 'Det är processen att reducera de tusentals färgerna i ett foto till bara några få som motsvarar de faktiska tillgängliga pärlfärgerna (t.ex. Miyuki eller Hama). Vi använder smarta algoritmer för att bibehålla visuell likhet med minsta möjliga palett.' },
  { question: 'Kan jag använda detta mönster för korsstygn?', answer: 'Ja, generatorn skapar ett rutnätsdiagram som är perfekt kompatibelt med korsstygn. Du behöver bara välja en rutnätsstorlek som matchar din väv (Aida 14, 18, etc.).' },
  { question: 'Vad är skillnaden mellan Miyuki- och Hama-pärlor?', answer: 'Miyuki Delica-pärlor är mycket små, exakta glaspärlor för smyckestillverkning. Hama-pärlor är av plast och smälts samman med ett strykjärn. Vårt verktyg låter dig justera bildförhållandet så att mönstret inte förvrängs beroende på vilket material som används.' },
  { question: 'Hur fungerar dithering-algoritmen?', answer: 'Dithering skapar en illusion av fler färger genom att blanda pixlar av olika färger i glesa mönster. Det hjälper färgtoningar att se mjukare ut även med en begränsad pärlpalett.' },
];

const howTo: BeadPatternGeneratorLocaleContent['howTo'] = [
  { name: 'Ladda upp en tydlig bild', text: 'Välj ett foto med bra kontrast och få små detaljer så att mönstret blir lättare att följa.' },
  { name: 'Justera rutnätsstorleken', text: 'Definiera hur många pärlor bred och hög din färdiga bit ska vara. Fler pärlor = mer detalj men högre svårighetsgrad.' },
  { name: 'Optimera färgpaletten', text: 'Minska antalet färger tills de matchar pärlorna du har tillgängliga i ditt hobbyset.' },
  { name: 'Exportera guideschemat', text: 'Generera det slutliga mönstret med färgkoder att använda som referens när du monterar dina pärlor på plattan eller tråden.' },
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

export const content: BeadPatternGeneratorLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor',
  ui: {
    title: 'Mönsterlaboratorium',
    subtitle: 'Färgteknik för dina händer',
    description: 'Från foto till pärlschema.',
    gridSizeLabel: 'Storlek (Bredd)',
    colorCountLabel: 'Färger',
    optionsLabel: 'Alternativ',
    rulersLabel: 'Linjaler',
    symbolsTooltip: 'Överraskningsmönster',
    symbolsLabel: 'Symboler',
    downloadBtn: 'Ladda ner',
    uploadTitle: 'Ladda upp din vision',
    uploadSubtitle: 'och låt den digitala magin ske',
    paletteTitle: 'Kromatisk DNA',
    reuploadBtn: 'Byt bild',
    tunnelVisionTitle: 'Tunnelvision',
    tunnelVisionSubtitle: 'Din precisionsassistent rad för rad.',
    uploadLabel: 'Ladda upp ditt foto',
    pixelateBtn: 'Generera mönster',
    faqTitle: 'FAQ',
    bibliographyTitle: 'Referenser'
  },
  seo: [
    { type: 'title', text: 'Digital alkemi: Förvandla pixlar till påtaglig konst', level: 2 },
    { type: 'paragraph', html: 'Välkommen till <strong>Ultimate Pattern Studio</strong>. En <em>kromatisk intelligensmotor</em> designad för pixelkonst-arkitekter, Miyuki-mästare och korsstygns-visionärer. Din bro mellan det digitala och det handgjorda.' },
    { type: 'card', icon: 'mdi:grid', title: 'Det intelligenta rutnätet', html: 'Vår algoritm för <strong>spatial subsampling</strong> "krymper" inte bara din bild. Den analyserar den visuella strukturen för att mappa komplexa pixelgrupper till individuella celler, vilket bevarar integriteten hos silhuetter och kanter som en expertillustratör.' },
    { type: 'card', icon: 'mdi:palette', title: 'K Means färgkvantisering', html: 'Vi implementerar en variant av <strong>K-Means Clustering</strong>-algoritmen som matematiskt hittar "centroid"-tonerna i din bild. Häpnadsväckande visuell trohet med en minimalistisk palett på 12, 24 eller 32 färger.' },
    { type: 'title', text: 'Mästerskap i 3 steg', level: 3 },
    { type: 'card', icon: 'mdi:image-search', title: 'Det perfekta valet', html: 'Leta efter <strong>hög kontrast</strong>, dramatisk belysning och ikoniska former. Porträtt med rena bakgrunder, logotyper och vektorkonst översätts vackert.' },
    { type: 'card', icon: 'mdi:ruler', title: 'Dimensionell kalibrering', html: '<strong>Miyuki Delica:</strong> 50 pärlor ≈ 8cm · <strong>Hama Midi:</strong> 50 pärlor ≈ 25cm · <strong>Korsstygn:</strong> 1 cell = 1 stygn.' },
    { type: 'card', icon: 'mdi:eye-check', title: 'Zen utförande (Tunnelvisionsläge)', html: 'Vårt <strong>Tunnelvision</strong>-system fungerar som din personliga assistent, dämpar visuellt brus och framhäver kirurgiskt endast den aktiva raden. Absolut koncentration.' },
    { type: 'title', text: 'Oändliga dukar', level: 3 },
    { type: 'list', items: [
      '<strong>Textilsmycken:</strong> Invecklade mönster för vävstolar och geometriska armband.',
      '<strong>Korsstygn:</strong> Moderna scheman redo att broderas pixel för pixel.',
      '<strong>Mosaiker:</strong> Storskaliga väggmålningar med förenklade keramiska tesser.',
      '<strong>Retro Gaming:</strong> Autentiska 8-bitars tillgångar och sprites på några sekunder.',
    ]},
    { type: 'stats', items: [
      { value: '10–100', label: 'Breddintervall (pärlor)', icon: 'mdi:arrow-expand-horizontal' },
      { value: '2–32', label: 'Färgpalettplatser', icon: 'mdi:palette-swatch' },
      { value: 'K-Means', label: 'Kvantiseringsalgoritm', icon: 'mdi:function-variant' },
      { value: 'ZIP', label: 'Exportformat (mönster + guide)', icon: 'mdi:zip-box' },
    ], columns: 4 },
    { type: 'paragraph', html: 'I en tid av flyktiga skärmar är skapandet av något fysiskt en revolutionerande handling. Detta verktyg söker inte efter att automatisera konst, utan att <strong>ge genkraft åt hantverkaren</strong>. Vi ger dig beräkningsprecision så att dina händer kan bygga varaktiga arv.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
