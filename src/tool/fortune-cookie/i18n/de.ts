import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { FortuneCookieLocaleContent } from '../index';
import { bibliography } from '../bibliography';

const slug = 'glueckskeks-online';
const title = 'Glückskeks';
const description = 'Prüfen Sie Ihr tägliches Schicksal und entdecken Sie Ihre Glückszahlen. Ein Keks pro Tag, enthüllt mit einem Klick.';

const faq: FortuneCookieLocaleContent['faq'] = [
  {
    question: 'Kann ich mehr als einen Keks pro Tag öffnen?',
    answer: 'Das Schicksal spricht nur einmal am Tag. Wir speichern Ihr Ergebnis auf dem Gerät, damit es Sie durch den Tag begleitet.'
  },
  {
    question: 'Werden die Sprüche zufällig generiert?',
    answer: 'Ja — jeden Tag wird ein zufälliger Spruch ausgewählt und lokal gespeichert. Jeder der 25 Sprüche hat die gleiche Chance, ausgewählt zu werden, was für Abwechslung sorgt.'
  }
];

const howTo: FortuneCookieLocaleContent['howTo'] = [
  { name: 'Keks zerbrechen', text: 'Klicken Sie wiederholt auf den Keks, um ihn aufzubrechen.' },
  { name: 'Botschaft lesen', text: 'Entdecken Sie die verborgene Botschaft im Inneren und Ihre heutigen Glückszahlen.' }
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

export const content: FortuneCookieLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  ui: {
    title: 'Online Glückskeks',
    description: 'Dein tägliches digitales Orakel.',
    instruction: 'Klicke auf den Keks, um dein Schicksal zu enthüllen',
    dailyStatus: 'Dein heutiges Schicksal wurde bereits enthüllt.',
    shareBtn: 'Weisheit teilen',
    shareTitle: 'Mein Glückskeks',
    shareText: 'Das Schicksal hat gesprochen: "$TEXT"\nMeine Zahlen: $NUMS\n\nEntdecke dein Schicksal hier:',
    copied: 'Kopiert!',
    fortunes: JSON.stringify([
      "Das Glück, das du suchst, befindet sich in einem anderen Keks.",
      "Zähle nicht die Tage, mache die Tage zählenswert.",
      "Eine Reise von tausend Meilen beginnt mit einem einzigen Schritt.",
      "Ein Fehler ist das Vorwort zur Entdeckung.",
      "Deine Lernfähigkeit ist dein größtes Kapital.",
      "Lächle, das Universum beobachtet dich.",
      "Geduld ist ein Baum mit bitterer Wurzel, aber sehr süßer Frucht.",
      "Fürchte dich nicht vor langsamem Wachstum, fürchte dich nur vor Stillstand.",
      "Heute ist das Morgen, um das du dir gestern Sorgen gemacht hast.",
      "Glück ist nichts Fertiges. Es entsteht durch dein eigenes Handeln.",
      "Wenn du die Windrichtung nicht ändern kannst, richte deine Segel neu aus.",
      "Was du jetzt säst, wirst du später ernten.",
      "Kreativität ist Intelligenz, die Spaß hat.",
      "Suche nicht nach Fehlern, suche nach Lösungen.",
      "Deine Einstellung, nicht deine Begabung, bestimmt deine Höhe.",
      "Erfolg ist die Summe kleiner Anstrengungen, die Tag für Tag wiederholt werden.",
      "Glaube daran, dass du es kannst, dann hast du schon den halben Weg geschafft.",
      "Der einzige Weg, großartige Arbeit zu leisten, ist zu lieben, was man tut.",
      "Das Leben besteht zu 10 % aus dem, was dir passiert, und zu 90 % daraus, wie du darauf reagierst.",
      "Sei die Veränderung, die du dir für die Welt wünschst.",
      "Der beste Weg, die Zukunft vorherzusagen, ist, sie selbst zu gestalten.",
      "Einfachheit ist die höchste Form der Raffinesse.",
      "Du bist der Herr deines Schicksals und der Kapitän deiner Seele.",
      "Bald wirst du Nachrichten erhalten, die deine Perspektive ändern werden.",
      "Eine unerwartete Reise wird dir große Freude bereiten."
    ]),
    faqTitle: 'FAQ',
  },
  seo: [
    { type: 'title', text: 'Das Geheimnis des Glückskekses', level: 2 },
    { type: 'paragraph', html: 'Haben Sie sich jemals gefragt, woher diese kuriosen Kekse kommen? Obwohl wir sie mit chinesischem Essen assoziieren, ist ihre Herkunft eine faszinierende Reise zwischen Japan und den Vereinigten Staaten. Der Glückskeks, wie wir ihn heute kennen, wurde wahrscheinlich Anfang des 20. Jahrhunderts in Kalifornien erfunden, nicht in China — dort sind sie praktisch unbekannt.' },
    { type: 'tip', title: 'So funktioniert unser Orakel', html: 'Jeden Tag können Sie einen Keks öffnen. Das System speichert Ihr Schicksal, damit Sie sich 24 Stunden lang daran erinnern können. Die Botschaft wird lokal in Ihrem Browser gespeichert — absolut privat, ohne Beteiligung eines Servers. Kommen Sie morgen für eine neue Vorhersage wieder!' },
    { type: 'title', text: 'Die Philosophie der Orakel', level: 3 },
    { type: 'paragraph', html: 'Menschen haben in unsicheren Zeiten schon immer nach Führung gesucht. Vom Orakel von Delphi bis zum I Ging erfüllen Wahrsagesysteme eine beständige psychologische Funktion: Sie geben uns die Erlaubnis, <strong>inne zu halten und zu reflektieren</strong>. Ein Glückskeks sagt nicht die Zukunft voraus — er regt dazu aus, darüber nachzudenken.' },
    { type: 'list', items: [
      '<strong>Altes China:</strong> Das I Ging (Buch der Wandlungen, ca. 1000 v. Chr.) nutzte Hexagramme, um Entscheidungen zu leiten und das Schicksal zu interpretieren.',
      '<strong>Klassisches Griechenland:</strong> Das Orakel von Delphi zog Herrscher und Bürger gleichermaßen mit kryptischen Aussprüchen an, die als göttliche Führung interpretiert wurden.',
      '<strong>Modernes Japan:</strong> Omikuji-Glückszettel an Shinto-Schreinen, die an Baumzweige gebunden werden, verbinden Schicksal mit Ritual.',
      '<strong>20. Jahrhundert USA:</strong> Glückskekse entstanden in japanisch-amerikanischen Gemeinschaften, bevor sie zum Synonym für die chinesisch-amerikanische Küche wurden.',
    ]},
    { type: 'stats', items: [
      { value: '3 Mrd.+', label: 'Glückskekse jährlich hergestellt', icon: 'mdi:cookie' },
      { value: '~1000 v. Chr.', label: 'Ursprung des I Ging', icon: 'mdi:book-open-variant' },
      { value: '25', label: 'Sprüche in diesem Orakel', icon: 'mdi:star-shooting' },
      { value: '1/Tag', label: 'Ein Schicksal pro Tag', icon: 'mdi:calendar-today' },
    ], columns: 4 },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
