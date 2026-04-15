import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ZalgoGeneratorLocaleContent } from '../index';

const slug = 'zalgo-generator-de';
const title = 'Zalgo Generator';
const description = 'Korrumpieren Sie Ihre Nachrichten mit kaskadierenden, überlaufenden Unicode-Zeichen. Passen Sie Intensität und Richtung des Glitch-Effekts an.';

const faq: ZalgoGeneratorLocaleContent['faq'] = [
  { question: 'Was ist Zalgo Text?', answer: 'Es handelt sich um eine Art von Text, der übermäßig viele Unicode-Kombinationszeichen (diakritische Zeichen) verwendet. Wenn diese vertikal gestapelt werden, „laufen sie über“ ihre ursprüngliche Zeile hinaus und erzeugen einen visuellen Effekt von Korruption, Unordnung oder Horror, der in der Internetkultur beliebt ist.' },
  { question: 'Warum sieht Zalgo-Text so seltsam aus?', answer: 'Er nutzt eine Funktion des Unicode-Standards aus, die das Hinzufügen von Markierungen über, unter oder durch einen Basisbuchstaben ermöglicht. Da es keine strikte Begrenzung für die Anzahl der Markierungen gibt, kann der Text in die Zeilen darüber oder darunter „eindringen“.' },
  { question: 'Kann ich diesen Text in sozialen Medien verwenden?', answer: 'Ja, die meisten modernen Plattformen (Instagram, Twitter, Discord) unterstützen Unicode. Einige Netzwerke oder Geräte können jedoch übermäßige Zeichen bei sehr hoher Intensität filtern oder abschneiden, um die Lesbarkeit der Benutzeroberfläche zu erhalten.' },
  { question: 'Wie kann ich den Zalgo-Effekt aus dem Text entfernen?', answer: 'Um korrumpierten Text zu bereinigen, können Sie die JavaScript-String-Normalisierung verwenden oder ihn einfach in einen einfachen Texteditor einfügen, der nur Nur-Text akzeptiert. Unser Tool ist rein kreativ und beschädigt den Originalinhalt nicht.' },
];

const howTo: ZalgoGeneratorLocaleContent['howTo'] = [
  { name: 'Basistext schreiben', text: 'Geben Sie den Text, den Sie „korrumpieren“ möchten, in das Haupttextfeld ein.' },
  { name: 'Chaos-Intensität anpassen', text: 'Bewegen Sie den Schieberegler, um festzulegen, wie viele Kombinationszeichen gestapelt werden sollen. Höhere Intensität = schwerer zu lesen.' },
  { name: 'Überlaufrichtung wählen', text: 'Wählen Sie, ob die Korruption nach oben, nach unten oder gleichzeitig in alle Richtungen wachsen soll.' },
  { name: 'Ergebnis kopieren', text: 'Klicken Sie auf die Schaltfläche zum Kopieren. Der resultierende Text enthält alle unsichtbaren Bytes, die für den Glitch-Effekt erforderlich sind.' },
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

export const content: ZalgoGeneratorLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  bibliographyTitle: 'Chaos-Bibliographie',
  ui: {
    title: 'Zalgo Generator',
    description: 'A̵l̸l̸e̵s̶ ̵i̶s̷t̶ ̵k̶o̸r̸r̸u̶p̸t̷',
    inputPlaceholder: 'Geben Sie hier Ihre normale Nachricht ein...',
    intensityLabel: 'Korruptionsstufe',
    outputLabel: 'Korrumpierte Nachricht',
    copyBtn: 'Chaos kopieren',
    copied: 'Kopiert!',
    faqTitle: 'FAQ',
    bibliographyTitle: 'Referenzen',
    configTitle: 'Konfiguration',
    intensity: 'Intensität',
    upLabel: 'Obere Korruption',
    midLabel: 'Mittleres Rauschen',
    downLabel: 'Untere Korruption',
    resetBtn: 'Werte zurücksetzen',
    warningText: 'WARNUNG: Zalgo-Text verwendet kombinierte Unicode-Zeichen, die visuell über ihren Container hinausgehen können. Mit Vorsicht in sozialen Medien verwenden.',
    previewLabel: 'Echtzeit-Vorschau',
    emptyLabel: 'Leer',
    charLabel: 'ZEICHEN',
    noteText: 'Hinweis: Einige Browser können die Darstellung kombinierter Zeichen einschränken'
  },
  seo: [
    { type: 'title', text: 'Was ist Zalgo Text und wie funktioniert visuelle Korruption?', level: 2 },
    { type: 'paragraph', html: 'Zalgo-Text ist eine Form der typografischen Manipulation, die eine spezifische Funktion des Unicode-Standards nutzt: <strong>Kombinationszeichen</strong>. Im Gegensatz zu normalen Zeichen belegen diese diakritischen Zeichen keinen horizontalen Platz — sie stapeln sich vertikal auf dem Basisbuchstaben und erzeugen so die in der Internetkultur beliebte Ästhetik des „digitalen Chaos“ oder „kosmischen Horrors“.' },
    { type: 'title', text: 'Anatomie des Prozesses', level: 3 },
    { type: 'paragraph', html: 'Unser Generator verarbeitet jedes Zeichen unabhängig und injiziert zufällige Unicode-Codepunkte in drei verschiedenen Vektoren: <strong>oben</strong> (diakritische Zeichen, die sich darüber stapeln), <strong>mitte</strong> (die den Buchstaben durchdringen) und <strong>unten</strong> (die darunter hängen).' },
    { type: 'tip', title: 'Korruptionsalgorithmus', html: 'Für jedes Basiszeichen wird ein Wert von <code>Anzahl = Intensität × 30</code> berechnet. So viele zufällige diakritische Zeichen werden in jedem Vektor hinzugefügt. Bei einer Intensität von 1,5 können Sie bis zu 45 Kombinationszeichen pro Buchstabe erhalten.' },
    { type: 'title', text: 'Knigge und Anwendungen', level: 3 },
    { type: 'list', items: [
      '<strong>Soziale Medien:</strong> Erregen Sie Aufmerksamkeit auf Instagram oder TikTok. Perfekt für Bios, die mit Konventionen brechen wollen.',
      '<strong>Horror-Storytelling:</strong> Dramatisieren Sie fiktionale Erzählungen, Creepypastas oder Simulationen kompromittierter Systeme.',
      '<strong>Barrierefreiheit:</strong> Warnung — Zalgo-Text ist für Screenreader unlesbar. Verwenden Sie ihn nur als visuelle Dekoration, niemals für kritische Inhalte.',
      '<strong>SEO:</strong> Verwenden Sie Zalgo niemals in Kern-Keywords (H1, Meta-Titel). Indexierungs-Bots können diese Zeichen möglicherweise nicht normalisieren.',
    ]},
    { type: 'title', text: 'Der Ursprung: Von Something Awful zu Glitch Art', level: 3 },
    { type: 'paragraph', html: 'Zalgo begann nicht als Generator, sondern als Intervention in klassischen Comic-Strips. Der Benutzer Shmorky begann Mitte der 2000er Jahre, Charaktere wie Nancy oder Archie zu deformieren und Flecken sowie Verzerrungen hinzuzufügen. Der Satz <strong>„Er kommt“</strong> besiegelte das Schicksal dieser Werke und kündigte die Ankunft einer Entität an, die die Realität verschlingt.' },
    { type: 'glossary', items: [
      { term: 'Kombinationszeichen', definition: 'Ein Unicode-Codepunkt, der dazu bestimmt ist, über, unter oder durch ein Basiszeichen platziert zu werden. Wird legitim in Sprachen wie Arabisch, Vietnamesisch und Hindi verwendet.' },
      { term: 'Diakritisches Zeichen', definition: 'Ein Markenzeichen, das einem Basisbuchstaben hinzugefügt wird, um seine Aussprache oder Bedeutung zu ändern. Zalgo missbraucht diese, um einen visuellen Überlauf zu erzeugen.' },
      { term: 'Unicode-Block', definition: 'Ein zusammenhängender Bereich von Unicode-Codepunkten. Zalgo-Zeichen stammen meist aus dem Block „Kombinierende diakritische Zeichen“ (U+0300–U+036F).' },
      { term: 'Glitch Art', definition: 'Eine Ästhetik, die absichtlich Fehler, Artefakte und Korruptionen in digitalen Medien als Ausdrucksmittel einbezieht oder simuliert.' },
    ]},
  ],
  faq,
  bibliography: [
    { name: 'Unicode-Standard - Kombinationszeichen (Englisch)', url: 'https://www.unicode.org/standard/principles.html#Combining_Characters' },
    { name: 'Das Zalgo-Text-Phänomen (Englisch)', url: 'https://knowyourmeme.com/memes/zalgo' },
    { name: 'MDN - String-Normalisierung', url: 'https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/String/normalize' },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
