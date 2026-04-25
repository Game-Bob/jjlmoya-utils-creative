import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { ExcuseGeneratorLocaleContent } from '../index';

const slug = 'ausredengenerator';
const title = 'Ausredengenerator';
const description = 'Semantische Glücksmaschine, um Verpflichtungen mit Stil loszuwerden. Generieren Sie sofort surreale und unwiderlegbare Ausreden.';

const faq: ExcuseGeneratorLocaleContent['faq'] = [
  {
    question: 'Kann dieser Generator meine Ehe retten?',
    answer: 'Wir sind zwar keine Therapeuten, aber das Vermeiden dieses Abendessens mit den Schwiegereltern durch einen plausiblen technischen Notfall kann die Spannungen erheblich reduzieren. Mit Verantwortung verwenden.'
  },
  {
    question: 'Warum solch surreale Phrasen?',
    answer: 'Die Strategie basiert auf kognitiver Dissonanz. Wenn man etwas Langweiliges sagt, ist es überprüfbar. Wenn man etwas Absurdes sagt, blockiert die Überraschung die Fähigkeit zur Wut.'
  }
];

const howTo: ExcuseGeneratorLocaleContent['howTo'] = [
  { name: 'Generieren', text: 'Klicken Sie auf die Schaltfläche "Generieren", um eine neue Ausrede zu erstellen.' },
  { name: 'Kopieren', text: 'Klicken Sie auf die Schaltfläche "Kopieren", um die Ausrede in Ihre Zwischenablage zu kopieren.' }
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
  inLanguage: 'de',
};

export const content: ExcuseGeneratorLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  ui: {
    title: 'Surrealer Ausredengenerator',
    description: 'Alibi-Rechner der nächsten Generation.',
    subjectLabel: 'Subjekt',
    actionLabel: 'Aktion',
    victimLabel: 'Opfer',
    generateBtn: 'AUSREDE GENERIEREN',
    copyBtn: 'Diesen Wahnsinn kopieren',
    copied: 'Kopiert!',
    starts: JSON.stringify([
      "Meine Katze", "Meine Großmutter", "Der Präsident", "Ein Alien", "Mein Nachbar aus der 5. Etage",
      "Das WLAN", "Mein Horoskop", "Ein Zeitreisender", "Die Waschmaschine", "Mein Kühlschrank",
      "Der Geist der Weihnacht", "Mein Schatten", "Ein Ninja", "Die vegane Polizei", "Siri",
      "Meine fleischfressende Pflanze", "Der Amazon-Lieferant", "Mein böser Klon", "Ein Zauberer", "Godzilla"
    ]),
    middles: JSON.stringify([
      "hat den Krieg erklärt gegen", "hat gefressen", "hat entführt", "hat angezündet",
      "organisiert eine Party in", "hat sich erbrochen auf", "weigert sich zu verlassen",
      "hat gehackt", "hat gestohlen", "hat sich verliebt in", "meditiert über",
      "hat einen Zauberspruch gewirkt auf", "protestiert gegen", "hat einen Kult gegründet in",
      "tanzt Samba in", "hat einen Dämon beschworen in", "hat den Zugang blockiert zu",
      "hat sich in Gold verwandelt", "versucht zu verkaufen", "hat ein Buch geschrieben über"
    ]),
    ends: JSON.stringify([
      "meine Hausschlüssel.", "meinen Lebenswillen.", "das Garagentor.",
      "meine Lieblingshose.", "den Wohnzimmer-Router.", "mein einziges Paar Schuhe.",
      "die Gesetze der Physik.", "meine Würde.", "den Aufzug des Gebäudes.",
      "meinen Netflix-Account.", "meine Zahnbürste.", "meine Hausurkunden.",
      "meine Pogs-Sammlung.", "die Handbremse des Autos.", "meinen Wunsch nach Sozialkontakt.",
      "meinen Kaffeevorrat.", "den Toilettendeckel.", "die TV-Fernbedienung.",
      "meine Glückssocken.", "die westliche Zivilisation."
    ]),
    faqTitle: 'FAQ',
    bibliographyTitle: 'Referenzen'
  },
  seo: [
    { type: 'title', text: 'Die wissenschaftliche Kunst der perfekten Ausrede', level: 2 },
    { type: 'paragraph', html: 'Wir leben im Zeitalter der Hyperkonnektivität. Ihr Telefon vibriert, Ihre Uhr benachrichtigt Sie und Ihr Terminkalender sieht aus wie ein Tetris-Spiel, das kurz vor dem Verlieren steht. Der Druck, zu allem „Ja“ zu sagen, hat eine Epidemie der sozialen Erschöpfung ausgelöst.' },
    { type: 'title', text: 'Die Renaissance von JOMO (Joy of Missing Out)', level: 3 },
    { type: 'paragraph', html: 'Während FOMO (Fear of Missing Out) das letzte Jahrzehnt dominierte, plädieren Experten für digitales Wohlbefinden nun für <strong>JOMO: Die Freude am Verpassen</strong>. Es geht nicht um Isolation, sondern um Intentionalität.' },
    { type: 'tip', title: 'Die Formel für das unwiderlegbare Alibi', html: '<strong>Das dissoziierte Subjekt:</strong> Sie sind niemals der Schuldige. Es ist „das WLAN“, „meine Katze“, „das Universum“. Schieben Sie die Schuld auf eine externe Instanz.<br><strong>Die hyperbolische Aktion:</strong> Die Situation muss so absurd oder technisch sein, dass niemand nach Details fragt.<br><strong>Die physische Blockade:</strong> Das Endergebnis muss binär sein: Entweder ich gehe oder ich bleibe zu Hause.' },
    { type: 'title', text: 'Eine kurze Geschichte der Ausrede', level: 3 },
    { type: 'list', items: [
      '<strong>Mittelalter:</strong> „Mein Pferd hat ein Hufeisen verloren“ (Ein zeitloser Klassiker).',
      '<strong>Industrielle Revolution:</strong> „Die Dampfmaschine ist überhitzt“.',
      '<strong>Digitales Zeitalter:</strong> „Mein Internet ist mitten im Update ausgefallen“.',
    ]},
    { type: 'proscons', items: [
      { pro: 'Befreit sofort von sozialem Druck', con: 'Übermäßiger Gebrauch untergräbt das Vertrauen' },
      { pro: 'Schützt Ihre Energie und Grenzen', con: 'Kann Schuldgefühle erzeugen, wenn es unvorsichtig benutzt wird' },
      { pro: 'Kreativer und humorvoller Ton entschärft Spannungen', con: 'Nicht für formelle oder professionelle Kontexte geeignet' },
    ]},
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
