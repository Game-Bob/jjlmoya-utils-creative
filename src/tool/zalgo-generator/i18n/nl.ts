import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { ZalgoGeneratorLocaleContent } from '../index';

const slug = 'zalgo-tekstgenerator';
const title = 'Zalgo generator';
const description = 'Corrumpeer je berichten met cascade-achtige overlopende Unicode-karakters. Pas de intensiteit en richting van het glitch-effect aan.';

const faq: ZalgoGeneratorLocaleContent['faq'] = [
  { question: 'Wat is Zalgo tekst?', answer: 'Het is een soort tekst die overmatig gebruikmaakt van Unicode-combinatiekarakters (diakritische tekens). Wanneer deze verticaal worden gestapeld, "lopen ze over" uit hun oorspronkelijke regel, wat een visueel effect van corruptie, wanorde of horror creëert dat populair is in de internetcultuur.' },
  { question: 'Waarom ziet Zalgo tekst er zo vreemd uit?', answer: 'Het maakt gebruik van een functie van de Unicode-standaard die het toevoegen van markeringen boven, onder of door een basisletter mogelijk maakt. Omdat er geen strikte limiet is aan hoeveel markeringen kunnen worden toegevoegd, kan de tekst regels erboven of eronder "binnendringen".' },
  { question: 'Kan ik deze tekst gebruiken op sociale media?', answer: 'Ja, de meeste moderne platforms (Instagram, Twitter, Discord) ondersteunen Unicode. Sommige netwerken of apparaten kunnen echter overtollige karakters filteren of afkappen bij een zeer hoge intensiteit om de leesbaarheid van de interface te behouden.' },
  { question: 'Hoe kan ik het Zalgo effect uit tekst verwijderen?', answer: 'Om gecorrumpeerde tekst op te schonen, kun je JavaScript-stringnormalisatie gebruiken of het simpelweg in een basis-teksteditor plakken die alleen platte tekst accepteert. Onze tool is puur creatief en beschadigt de originele inhoud niet.' },
];

const howTo: ZalgoGeneratorLocaleContent['howTo'] = [
  { name: 'Schrijf het basisbericht', text: 'Voer de tekst die je wilt "corrumperen" in het hoofdtekstvak in.' },
  { name: 'Pas de chaos-intensiteit aan', text: 'Verschuif de slider om te bepalen hoeveel combinatiekarakters er gestapeld moeten worden. Hogere intensiteit = moeilijker leesbaar.' },
  { name: 'Selecteer de overlooprichting', text: 'Kies of de corruptie naar boven, naar beneden of tegelijkertijd in alle richtingen moet groeien.' },
  { name: 'Kopieer het resultaat', text: 'Klik op de kopieerknop. De resulterende tekst bevat alle onzichtbare bytes die nodig zijn om het glitch-effect te behouden.' },
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

export const content: ZalgoGeneratorLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde vragen',
  ui: {
    title: 'Zalgo generator',
    description: 'A̷l̸l̶e̸s̶ ̴i̸s̷ ̴g̶e̵c̶o̵r̸r̷u̴m̵p̶e̵e̵r̷d̵',
    inputPlaceholder: 'Typ hier je normale bericht...',
    intensityLabel: 'Corruptieniveau',
    outputLabel: 'Gecorrumpeerd resultaat',
    copyBtn: 'Kopieer chaos',
    copied: 'Gekopieerd!',
    faqTitle: 'FAQ',
    bibliographyTitle: 'Referenties',
    configTitle: 'Configuratie',
    intensity: 'Intensiteit',
    upLabel: 'Bovenste corruptie',
    midLabel: 'Middelste ruis',
    downLabel: 'Onderste corruptie',
    resetBtn: 'Waarden resetten',
    warningText: 'WAARSCHUWING: Zalgo-tekst gebruikt gecombineerde Unicode-karakters die visueel uit hun container kunnen lopen. Gebruik met mate op sociale media.',
    previewLabel: 'Realtime voorvertoning',
    emptyLabel: 'Leeg',
    charLabel: 'KARAKTERS',
    noteText: 'Opmerking: sommige browsers kunnen de weergave van gecombineerde karakters beperken'
  },
  seo: [
    { type: 'title', text: 'Wat is Zalgo tekst en hoe werkt visuele corruptie?', level: 2 },
    { type: 'paragraph', html: 'Zalgo-tekst is een vorm van typografische manipulatie die gebruikmaakt van een specifieke functie van de Unicode-standaard: <strong>combinatiekarakters</strong>. In tegenstelling tot normale karakters nemen deze diakritische tekens geen horizontale ruimte in beslag — ze stapelen zich verticaal op bovenop de basisletter, waardoor die esthetiek van "digitale chaos" of "kosmische horror" ontstaat die zo populair is in de internetcultuur.' },
    { type: 'title', text: 'Anatomie van het proces', level: 3 },
    { type: 'paragraph', html: 'Onze generator verwerkt elk karakter onafhankelijk en injecteert willekeurige Unicode-codepunten in drie verschillende vectoren: <strong>boven</strong> (diakritische tekens die erboven stapelen), <strong>midden</strong> (die door de letter heen prikken) und <strong>onder</strong> (die eronder hangen).' },
    { type: 'tip', title: 'Corruptie algoritme', html: 'Voor elk basiskarakter wordt een <code>aantal = intensiteit × 30</code> berekend. Zoveel willekeurige diakritische tekens worden in elke vector toegevoegd. Bij intensiteit 1,5 kun je tot wel 45 combinatiekarakters per letter krijgen.' },
    { type: 'title', text: 'Etiquette en toepassingen', level: 3 },
    { type: 'list', items: [
      '<strong>Sociale media:</strong> Trek de aandacht op Instagram of TikTok. Perfect voor bio\'s die willen breken met conventies.',
      '<strong>Horror Storytelling:</strong> Dramatiseer fictieve verhalen, creepypasta\'s of simulaties van gecompromitteerde systemen.',
      '<strong>Toegankelijkheid:</strong> Waarschuwing — Zalgo-tekst is onleesbaar voor schermlezers. Gebruik het alleen als visuele decoratie, nooit voor cruciale inhoud.',
      '<strong>SEO:</strong> Gebruik Zalgo nooit in kern-zoekwoorden (H1, meta-titels). Indexeringsbots kunnen deze karakters mogelijk niet normaliseren.',
    ]},
    { type: 'title', text: 'De oorsprong: Van Something Awful naar Glitch Art', level: 3 },
    { type: 'paragraph', html: 'Zalgo begon niet als een generator, maar als een interventie in klassieke krantenstrips. De gebruiker Shmorky begon halverwege de jaren 2000 karakters als Nancy of Archie te vervormen door vlekken en vervormingen toe te voegen. De zin <strong>"He comes"</strong> bezegelde het lot van deze werken en kondigde de komst aan van een entiteit die de realiteit verslindt.' },
    { type: 'glossary', items: [
      { term: 'Combinatiekarakter', definition: 'Een Unicode-codepunt dat is ontworpen om bovenop, onder of door een basiskarakter te worden geplaatst. Legitiem gebruikt in talen zoals Arabisch, Vietnamees en Hindi.' },
      { term: 'Diakritisch teken', definition: 'Een markering toegevoegd aan een basisletter om de uitspraak of betekenis te wijzigen. Zalgo misbruikt deze om visuele overloop te creëren.' },
      { term: 'Unicode-blok', definition: 'Een aaneengesloten bereik van Unicode-codepunten. Zalgo-karakters komen meestal uit het blok "Combining Diacritical Marks" (U+0300–U+036F).' },
      { term: 'Glitch Art', definition: 'Een esthetiek die opzettelijk fouten, artefacten en corrupties in digitale media opneemt of simuleert als een expressieve techniek.' },
    ]},
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
