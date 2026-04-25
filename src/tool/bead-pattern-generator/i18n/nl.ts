import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { BeadPatternGeneratorLocaleContent } from '../index';

const slug = 'kralenpatroon-generator';
const title = 'Patroon Generator';
const description = 'Maak pixel art en kralenschema\'s voor Miyuki of Hama van je foto\'s. Kleurkwantisatie-algoritme, tunnelvisie-modus en ZIP-export.';

const faq: BeadPatternGeneratorLocaleContent['faq'] = [
  { question: 'Wat is kleurkwantisatie bij patronen?', answer: 'Het is het proces waarbij de duizenden kleuren in een foto worden teruggebracht tot slechts een paar die overeenkomen met de werkelijke beschikbare kralenkleuren (zoals Miyuki of Hama). We gebruiken slimme algoritmen om de visuele gelijkenis te behouden met een zo klein mogelijk palet.' },
  { question: 'Kan ik dit patroon gebruiken voor kruissteek?', answer: 'Ja, de generator maakt een roosterdiagram dat perfect compatibel is met kruissteek. Je hoeft alleen maar een roostergrootte te kiezen die past bij je stof (Aida 14, 18, enz.).' },
  { question: 'Wat is het verschil tussen Miyuki- en Hama-kralen?', answer: 'Miyuki Delica kralen zijn zeer kleine, nauwkeurige glaskralen voor sieraden. Hama kralen zijn van plastic en worden met een strijkijzer aan elkaar gesmolten. Onze tool laat je de beeldverhouding aanpassen zodat het patroon niet vervormt, afhankelijk van het gebruikte materiaal.' },
  { question: 'Hoe werkt het dithering-algoritme?', answer: 'Dithering creëert de illusie van meer kleuren door pixels van verschillende kleuren in gespreide patronen te mengen. Het zorgt ervoor dat kleurovergangen er vloeiender uitzien, zelfs met een beperkt kralenpalet.' },
];

const howTo: BeadPatternGeneratorLocaleContent['howTo'] = [
  { name: 'Upload een heldere afbeelding', text: 'Kies een foto met goed contrast en weinig kleine details, zodat het patroon makkelijker te volgen is.' },
  { name: 'Pas de roostergrootte aan', text: 'Bepaal hoeveel kralen breed en hoog je uiteindelijke werkstuk wordt. Meer kralen = meer detail, maar ook moeilijker.' },
  { name: 'Optimaliseer het kleurenpalet', text: 'Verminder het aantal kleuren totdat ze overeenkomen met de kralen die je beschikbaar hebt in je hobbypakket.' },
  { name: 'Exporteer het gids-schema', text: 'Genereer het uiteindelijke patroon met kleurcodes om te gebruiken als referentie tijdens het rijgen van je kralen op de plaat of draad.' },
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

export const content: BeadPatternGeneratorLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde Vragen',
  ui: {
    title: 'Patroon Laboratorium',
    subtitle: 'Kleurtechniek voor je eigen handen',
    description: 'Van foto naar kralenschema.',
    gridSizeLabel: 'Grootte (Breedte)',
    colorCountLabel: 'Kleuren',
    optionsLabel: 'Opties',
    rulersLabel: 'Linialen',
    symbolsTooltip: 'Verrassingspatroon',
    symbolsLabel: 'Symbolen',
    downloadBtn: 'Downloaden',
    uploadTitle: 'Upload Je Visie',
    uploadSubtitle: 'en laat de digitale magie haar werk doen',
    paletteTitle: 'Chromatisch DNA',
    reuploadBtn: 'Wijzig Afbeelding',
    tunnelVisionTitle: 'Tunnelvisie',
    tunnelVisionSubtitle: 'Je precisieassistent bij elke rij.',
    uploadLabel: 'Upload je foto',
    pixelateBtn: 'Genereer Patroon',
    faqTitle: 'FAQ',
    bibliographyTitle: 'Referenties'
  },
  seo: [
    { type: 'title', text: 'Digitale Alchemie: Verander Pixels in Tastbare Kunst', level: 2 },
    { type: 'paragraph', html: 'Welkom in de <strong>Ultimate Pattern Studio</strong>. Een <em>chromatische intelligentie-engine</em> ontworpen voor Pixel Art architecten, Miyuki meesters en kruissteek visionairs. Jouw brug tussen het digitale en het handgemaakte.' },
    { type: 'card', icon: 'mdi:grid', title: 'Het Intelligente Rooster', html: 'Ons <strong>ruimtelijk subsampling</strong> algoritme laat je afbeelding niet zomaar "krimpen". Het analyseert de visuele structuur om complexe pixelgroepen toe te wijzen aan individuele cellen, waardoor silhouetten en randen behouden blijven als door een deskundige illustrator.' },
    { type: 'card', icon: 'mdi:palette', title: 'K Means Kleurkwantisatie', html: 'We implementeren een variant van het <strong>K-Means Clustering</strong> algoritme dat wiskundig de "centrumbasis"-tonen van je afbeelding vindt. Verbluffende visuele getrouwheid met een minimalistisch palet van 12, 24 of 32 kleuren.' },
    { type: 'title', text: 'Beheersing in 3 Stappen', level: 3 },
    { type: 'card', icon: 'mdi:image-search', title: 'De Perfecte Selectie', html: 'Zoek naar <strong>hoog contrast</strong>, dramatische belichting en iconische vormen. Portretten met een effen achtergrond, logo\'s en vectorkunst laten zich prachtig vertalen.' },
    { type: 'card', icon: 'mdi:ruler', title: 'Dimensionale Kalibratie', html: '<strong>Miyuki Delica:</strong> 50 kralen ≈ 8cm · <strong>Hama Midi:</strong> 50 kralen ≈ 25cm · <strong>Kruissteek:</strong> 1 cel = 1 steek.' },
    { type: 'card', icon: 'mdi:eye-check', title: 'Zen Uitvoering (Tunnelvisie modus)', html: 'Ons <strong>Tunnelvisie</strong>-systeem fungeert als je persoonlijke assistent, dempt visuele ruis en licht chirurgisch alleen de actieve rij op. Absolute concentratie.' },
    { type: 'title', text: 'Oneindige Canvassen', level: 3 },
    { type: 'list', items: [
      '<strong>Textiele Sieraden:</strong> Ingewikkelde patronen voor weeframen en geometrische armbanden.',
      '<strong>Kruissteek:</strong> Moderne schema\'s klaar om pixel voor pixel te worden geborduurd.',
      '<strong>Mozaïeken:</strong> Grootschalige muurschilderingen met vereenvoudigde keramische steentjes.',
      '<strong>Retro Gaming:</strong> Authentieke 8-bit assets en sprites in enkele seconden.',
    ]},
    { type: 'stats', items: [
      { value: '10–100', label: 'Kralenbreedte bereik', icon: 'mdi:arrow-expand-horizontal' },
      { value: '2–32', label: 'Kleurpalet slots', icon: 'mdi:palette-swatch' },
      { value: 'K-Means', label: 'Kwantisatie-algoritme', icon: 'mdi:function-variant' },
      { value: 'ZIP', label: 'Exportformaat (patroon + gids)', icon: 'mdi:zip-box' },
    ], columns: 4 },
    { type: 'paragraph', html: 'In een tijdperk van vluchtige schermen is het creëren van iets fysieks een revolutionaire daad. Deze tool probeert kunst niet te automatiseren, maar de <strong>ambachtsman te versterken</strong>. We geven je computationele precisie zodat jouw handen blijvende erfenissen kunnen bouwen.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
