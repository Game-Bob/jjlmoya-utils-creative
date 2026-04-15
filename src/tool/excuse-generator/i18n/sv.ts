import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ExcuseGeneratorLocaleContent } from '../index';

const slug = 'ursaktsgenerator';
const title = 'Ursaktsgenerator';
const description = 'Semantisk slumpmaskin för att slippa åtaganden med stil. Generera surrealistiska och oemotsägliga ursäkter omedelbart.';

const faq: ExcuseGeneratorLocaleContent['faq'] = [
  {
    question: 'Kan den här generatorn rädda mitt äktenskap?',
    answer: 'Även om vi inte är terapeuter, kan undvikandet av den där middagen med svärföräldrarna genom en rimlig teknisk nödsituation minska spänningen avsevärt. Använd med ansvar.'
  },
  {
    question: 'Varför sådana surrealistiska fraser?',
    answer: 'Strategin bygger på kognitiv dissonans. Om du säger något tråkigt är det verifierbart. Om du säger något absurt, blockerar överraskningen förmågan till vrede.'
  }
];

const howTo: ExcuseGeneratorLocaleContent['howTo'] = [
  { name: 'Generera', text: 'Klicka på generera-knappen för att skapa en ny ursäkt.' },
  { name: 'Kopiera', text: 'Klicka på kopiera-knappen för att föra över ursäkten till ditt urklipp.' }
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

export const content: ExcuseGeneratorLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor',
  bibliographyTitle: 'Fritidsbibliografi',
  ui: {
    title: 'Surrealistisk Ursaktsgenerator',
    description: 'Nästa generations alibi-kalkylator.',
    subjectLabel: 'Subjekt',
    actionLabel: 'Handling',
    victimLabel: 'Offer',
    generateBtn: 'GENERERA URSAKT',
    copyBtn: 'Kopiera denna galenskap',
    copied: 'Kopierad!',
    starts: JSON.stringify([
      "Min katt", "Min mormor", "Presidenten", "En utomjording", "Min granne från 5:e våningen",
      "Wifi", "Mitt horoskop", "En tidsresenär", "Tvättmaskinen", "Mitt kylskåp",
      "Jultomten", "Min skugga", "En ninja", "Veganpolisen", "Siri",
      "Min köttätande växt", "Amazon-budet", "Min onda klon", "En trollkarl", "Godzilla"
    ]),
    middles: JSON.stringify([
      "har förklarat krig mot", "har ätit upp", "har kidnappat", "har satt eld på",
      "anordnar en fest i", "har kräkts på", "vägrar lämna",
      "har hackat", "har stulit", "har blivit kär i", "mediterar över",
      "har förtrollat", "protesterar mot", "har grundat en kult i",
      "dansar samba i", "har frammanat en demon i", "har blockerat åtkomst till",
      "har förvandlats till guld", "försöker sälja", "har skrivit en bok om"
    ]),
    ends: JSON.stringify([
      "mina hemnycklar.", "min livslust.", "garageporten.",
      "mina favoritbyxor.", "routern i vardagsrummet.", "mina enda skor.",
      "fysikens lagar.", "min värdighet.", "byggnadens hiss.",
      "mitt Netflix-konto.", "min tandborste.", "mina lagfarter.",
      "min samling av pogs.", "bilens handbroms.", "min lust att socialisera.",
      "mitt kaffeförråd.", "toalettlocket.", "TV-fjärrkontrollen.",
      "mina lyckostrumpor.", "den västerländska civilisationen."
    ]),
    faqTitle: 'FAQ',
    bibliographyTitle: 'Referenser'
  },
  seo: [
    { type: 'title', text: 'Den vetenskapliga konsten att skapa den perfekta ursäkten', level: 2 },
    { type: 'paragraph', html: 'Vi lever i en era av hyperuppkoppling. Din telefon vibrerar, din klocka ger dig notiser, och din sociala agenda ser ut som ett spel Tetris som håller på att förloras. Pressen att säga "ja" till allt har skapat en epidemi av social utmattning.' },
    { type: 'title', text: 'Renässansen för JOMO (Joy of Missing Out)', level: 3 },
    { type: 'paragraph', html: 'Medan FOMO (Fear of Missing Out) dominerade det senaste decenniet, förespråkar digitala hälsoexperter nu <strong>JOMO: Glädjen i att missa saker</strong>. Det handlar inte om isolering, utan om avsiktlighet.' },
    { type: 'tip', title: 'Formeln för det oemotsägliga alibit', html: '<strong>Det dissocierade subjektet:</strong> Du är aldrig den skyldige. Det är "wifi", "min katt", "universum". Flytta skulden till en extern enhet.<br><strong>Den hyperboliska handlingen:</strong> Situationen måste vara tillräckligt absurd eller teknisk för att ingen ska fråga efter detaljer.<br><strong>Den fysiska blockaden:</strong> Slutresultatet måste vara binärt: antingen går jag eller så stannar jag hemma.' },
    { type: 'title', text: 'En kort historia om ursäkten', level: 3 },
    { type: 'list', items: [
      '<strong>Medeltiden:</strong> "Min häst har tappat en sko" (En tidlös klassiker).',
      '<strong>Industriella revolutionen:</strong> "Ångmaskinen blev överhettad".',
      '<strong>Digitala eran:</strong> "Mitt internet lade av mitt i en uppdatering".',
    ]},
    { type: 'proscons', items: [
      { pro: 'Lindrar omedelbart social press', con: 'Överanvändning urholkar förtroendet' },
      { pro: 'Skyddar din energi och dina gränser', con: 'Kan skapa skuldkänslor om den används vårdslöst' },
      { pro: 'Kreativ och humoristisk ton dämpar spänningen', con: 'Inte lämplig för formella eller professionella sammanhang' },
    ]},
  ],
  faq,
  bibliography: [
    { name: 'Prokrastinerarens manifest', url: 'https://example.com/manifesto' }
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
