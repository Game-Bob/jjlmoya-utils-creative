import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ExcuseGeneratorLocaleContent } from '../index';

const slug = 'smoezen-generator';
const title = 'Smoezen Generator';
const description = 'Semantische gokmachine om stijlvol van je verplichtingen af te komen. Genereer direct surreële en onweerlegbare smoezen.';

const faq: ExcuseGeneratorLocaleContent['faq'] = [
  {
    question: 'Kan deze generator mijn huwelijk redden?',
    answer: 'Hoewel we geen therapeuten zijn, kan het vermijden van dat etentje met je schoonfamilie door een plausibele technische noodsituatie de spanning aanzienlijk verminderen. Gebruik met mate.'
  },
  {
    question: 'Waarom zulke surreële zinnen?',
    answer: 'De strategie is gebaseerd op cognitieve dissonantie. Als je iets saais zegt, is het controleerbaar. Als je iets absurds zegt, blokkeert de verrassing het vermogen om boos te worden.'
  }
];

const howTo: ExcuseGeneratorLocaleContent['howTo'] = [
  { name: 'Genereer', text: 'Klik op de genereerknop om een nieuwe smoes te maken.' },
  { name: 'Kopieer', text: 'Klik op de kopieerknop om de smoes naar je klembord te kopiëren.' }
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

export const content: ExcuseGeneratorLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde Vragen',
  bibliographyTitle: 'Vrijetijdsbibliografie',
  ui: {
    title: 'Surreële Smoezen Generator',
    description: 'De alibi-calculator van de volgende generatie.',
    subjectLabel: 'Onderwerp',
    actionLabel: 'Actie',
    victimLabel: 'Slachtoffer',
    generateBtn: 'GENEREER SMOES',
    copyBtn: 'Kopieer deze waanzin',
    copied: 'Gekopieerd!',
    starts: JSON.stringify([
      "Mijn kat", "Mijn grootmoeder", "De president", "Een alien", "Mijn buurman van de 5e verdieping",
      "De wifi", "Mijn horoscoop", "Een tijdreiziger", "De wasmachine", "Mijn koelkast",
      "De geest van Kerstmis", "Mijn schaduw", "Een ninja", "De veganistische politie", "Siri",
      "Mijn vleesetende plant", "De Amazon-bezorger", "Mijn boosaardige kloon", "Een tovenaar", "Godzilla"
    ]),
    middles: JSON.stringify([
      "heeft de oorlog verklaard aan", "heeft gegeten", "heeft ontvoerd", "heeft in brand gestoken",
      "organiseert een feest in", "heeft overgegeven op", "weigert te vertrekken uit",
      "heeft gehackt", "heeft gestolen", "is verliefd geworden op", "mediteert over",
      "heeft een spreuk uitgesproken over", "protesteert tegen", "heeft een sekte opgericht in",
      "danst samba in", "heeft een demon opgeroepen in", "heeft de toegang geblokkeerd tot",
      "is in goud veranderd", "probeert te verkopen", "heeft een boek geschreven over"
    ]),
    ends: JSON.stringify([
      "mijn huissleutels.", "mijn wil om te leven.", "de garagedeur.",
      "mijn lievelingsbroek.", "de router in de woonkamer.", "mijn enige paar schoenen.",
      "de wetten van de fysica.", "mijn waardigheid.", "de lift van het gebouw.",
      "mijn Netflix-account.", "mijn tandenborstel.", "mijn eigendomsbewijzen.",
      "mijn verzameling pogs.", "de handrem van de auto.", "mijn verlangen om te socialiseren.",
      "mijn koffievoorraad.", "de toiletbril.", "de afstandsbediening van de tv.",
      "mijn gelukssokken.", "de westerse beschaving."
    ]),
    faqTitle: 'FAQ',
    bibliographyTitle: 'Referenties'
  },
  seo: [
    { type: 'title', text: 'De wetenschappelijke kunst van de perfecte smoes', level: 2 },
    { type: 'paragraph', html: 'We leven in de tijd van hyperconnectiviteit. Je telefoon trilt, je horloge geeft meldingen en je sociale agenda ziet eruit als een spelletje Tetris dat op het punt staat te verliezen. De druk om op alles "ja" te zeggen heeft een epidemie van sociale uitputting veroorzaakt.' },
    { type: 'title', text: 'De Renaissance van JOMO (Joy of Missing Out)', level: 3 },
    { type: 'paragraph', html: 'Waar FOMO (Fear of Missing Out) het afgelopen decennium domineerde, pleiten digitale welzijnsexperts nu voor <strong>JOMO: de vreugde van het missen</strong>. Het gaat niet om isolatie, maar om intentionaliteit.' },
    { type: 'tip', title: 'De formule voor het onweerlegbare alibi', html: '<strong>Het gedissocieerde onderwerp:</strong> jij bent nooit de dader. Het is "de wifi", "mijn kat", "het universum". Verplaats de schuld naar een externe entiteit.<br><strong>De hyperbolische actie:</strong> de situatie moet absurd of technisch genoeg zijn zodat niemand naar details vraagt.<br><strong>De fysieke blokkade:</strong> de uiteindelijke uitkomst moet binair zijn: of ik ga, of ik blijf thuis.' },
    { type: 'title', text: 'Een korte geschiedenis van de smoes', level: 3 },
    { type: 'list', items: [
      '<strong>Middeleeuwen:</strong> "Mijn paard is een hoefijzer verloren" (een tijdloze klassieker).',
      '<strong>Industriële Revolutie:</strong> "De stoommachine is oververhit".',
      '<strong>Digitale Tijdperk:</strong> "Mijn internet viel uit midden in een update".',
    ]},
    { type: 'proscons', items: [
      { pro: 'Verlicht direct de sociale druk', con: 'Overmatig gebruik schaadt het vertrouwen' },
      { pro: 'Beschermt je energie en grenzen', con: 'Kan schuldgevoel opwekken bij onzorgvuldig gebruik' },
      { pro: 'Creatieve en humoristische toon neemt de spanning weg', con: 'Niet geschikt voor formele of professionele contexten' },
    ]},
  ],
  faq,
  bibliography: [
    { name: 'Manifest van de Uitsteller', url: 'https://example.com/manifesto' }
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
