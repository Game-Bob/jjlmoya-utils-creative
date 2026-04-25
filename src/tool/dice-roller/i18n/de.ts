import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { DiceRollerLocaleContent } from '../index';

const slug = 'wuerfel-simulator';
const title = 'Würfel Simulator';
const description = 'Ein kompletter Würfelsimulator für Ihre RPGs und Brettspiele. Würfeln Sie d4, d6, d8, d10, d12, d20 und d100 mit Modifikatoren und Historie.';

const faq: DiceRollerLocaleContent['faq'] = [
  {
    question: 'Wie kann ich einen Wurf mit Vorteil (D&D) simulieren?',
    answer: 'Fügen Sie zwei d20-Würfel zum Beutel hinzu, indem Sie zweimal auf die d20-Schaltfläche klicken. Achten Sie beim Würfeln auf die beiden Einzelergebnisse und behalten Sie das höhere. Die angezeigte Summe ist der Gesamtwert, aber Sie können jeden Würfel einzeln in der Ergebnisaufschlüsselung sehen.',
  },
  {
    question: 'Was bedeuten die grünen oder roten Farben bei den Ergebnissen?',
    answer: 'Grüne Ergebnisse zeigen an, dass der Würfel seinen maximal möglichen Wert gewürfelt hat (ein "Krit"). Rote Ergebnisse zeigen den Minimalwert an (eine "1", das schlechtestmögliche Ergebnis). So lassen sich kritische Erfolge und Patzer auf einen Blick erkennen.',
  },
  {
    question: 'Kann ich mehrere Würfel desselben Typs hinzufügen?',
    answer: 'Ja. Jeder Klick auf einen Würfel fügt ihn dem Beutel hinzu. Wenn Sie dreimal auf d6 klicken, zeigt der Beutel "3d6" an. Um die Anzahl zu verringern, klicken Sie auf die Schaltfläche "−", die neben jeder Würfelgruppe im Beutel erscheint.',
  },
  {
    question: 'Sind digitale Würfel so zufällig wie physische?',
    answer: 'Statistisch gesehen, ja. Moderne JavaScript-Engines verwenden Pseudozufallsalgorithmen (xorshift128+) mit einer sehr hochwertigen Gleichverteilung. Ein echter physischer Würfel kann kleine Herstellungsfehler aufweisen, die die Ergebnisse beeinflussen; der digitale Würfel hat dieses Problem nicht.',
  },
  {
    question: 'Was ist der d100 und wie wird er verwendet?',
    answer: 'Der d100 (oder d%) erzeugt eine Zahl von 1 bis 100 und wird in prozentualen Spielsystemen wie Cthulhu oder Warhammer Fantasy Roleplay verwendet. Er stellt die "direkte Wahrscheinlichkeit" dar: Wenn Ihr Fertigkeitswert in Schleichen 65 % beträgt, müssen Sie eine 65 oder weniger würfeln, um Erfolg zu haben.',
  },
];

const howTo: DiceRollerLocaleContent['howTo'] = [
  { name: 'Würfelpool zusammenstellen', text: 'Klicken Sie auf die Würfelschaltflächen (d4, d6, d8...), um sie Ihrem Pool hinzuzufügen. Jeder Klick fügt einen Würfel des gewählten Typs hinzu. Sie können verschiedene Typen in demselben Wurf kombinieren.' },
  { name: 'Modifikator anpassen', text: 'Verwenden Sie die Schaltflächen "+" und "−" neben dem Modifikator, um Boni oder Abzüge anzuwenden (wie den Attributsmodifikator in D&D). Der Modifikator wird automatisch zur Gesamtsumme addiert.' },
  { name: 'Würfeln', text: 'Drücken Sie die Schaltfläche "Würfeln". Das rechte Feld zeigt die Gesamtsumme und die Aufschlüsselung der einzelnen Würfel, wobei Kritische Erfolge (Maximum) grün und Patzer (Minimum) rot markiert sind.' },
  { name: 'Historie prüfen', text: 'Jeder Wurf wird in der Historie mit der verwendeten Würfelformel, dem Gesamtergebnis und der genauen Zeit aufgezeichnet. Sie können die Historie mit der entsprechenden Schaltfläche löschen.' },
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

export const content: DiceRollerLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  ui: {
    title: 'Würfel Simulator',
    description: 'Möge das Glück mit dir sein.',
    rollBtn: 'Würfeln',
    totalLabel: 'Summe',
    historyLabel: 'Historie',
    clearHistoryBtn: 'Historie löschen',
    faqTitle: 'FAQ',
    bibliographyTitle: 'Referenzen',
    addDiceLabel: 'Würfel zum Beutel hinzufügen',
    bagLabel: 'Würfelbeutel',
    emptyBagBtn: 'Leeren',
    emptyBagText: 'Klicke auf die Würfel, um sie hinzuzufügen',
    modifierLabel: 'Modifikator',
    rollManyLabel: '$COUNT Würfel werfen',
    rollOneLabel: '$COUNT Würfel werfen',
    preRollText: 'Würfel hinzufügen und werfen',
    emptyHistoryText: 'Wurfhistorie wird hier angezeigt'
  },
  seo: [
    { type: 'title', text: 'Die Kunst des Zufalls: Geschichte und Mathematik der Würfel', level: 2 },
    { type: 'paragraph', html: 'Würfel gehören zu den ältesten Zufallsgeneratoren der Menschheit. <strong>Astragali</strong> — Sprungbeine von Schafen und Ziegen — wurden bereits 5000 v. Chr. in Mesopotamien und Ägypten als primitive vierseitige Würfel verwendet. Die Entwicklung vom geschnitzten Knochen bis hin zu modernen Ikosaedern aus Epoxidharz ist nicht nur ästhetischer Natur: Es ist eine Reise durch die Wahrscheinlichkeitstheorie und das Design von Spielmechaniken.' },
    { type: 'title', text: 'Die Standard Würfelfamilie', level: 3 },
    { type: 'paragraph', html: 'Das am weitesten verbreitete Würfelset in Rollenspielen — bekann gemacht durch <strong>Dungeons &amp; Dragons</strong> im Jahr 1974 — besteht aus den fünf platonischen Körpern plus zwei zusätzlichen Formen: d4 (Tetraeder), d6 (Würfel), d8 (Oktaeder), d10 (Pentagonales Trapezoeder), d12 (Dodekaeder), d20 (Ikosaeder) und d100 (Prozentwürfel). Jedes Polyeder garantiert eine Gleichverteilung: Alle Flächen haben genau die gleiche Wahrscheinlichkeit, gewürfelt zu werden.' },
    { type: 'list', items: [
      '<strong>d4 – Tetraeder:</strong> Am gefährlichsten, wenn man barfuß darauf tritt. Vier dreieckige Flächen, 25 % Wahrscheinlichkeit pro Fläche. Häufig verwendet für Dolchschaden oder Zaubersprüche auf niedriger Stufe.',
      '<strong>d6 – Würfel:</strong> Der universellste Würfel. In allen Brettspielen seit dem ägyptischen Senet vorhanden. Seine kubische Geometrie garantiert perfekte Gleichverteilung.',
      '<strong>d8 – Oktaeder:</strong> Der Würfel für den Speer oder die Streitaxt. Acht gleichseitige dreieckige Flächen. 12,5 % Wahrscheinlichkeit pro Fläche.',
      '<strong>d10 – Pentagonales Trapezoeder:</strong> Der einzige nicht-platonische Körper im Standardset. Zwei gegenüberliegende Flächen pro "Ecke". Unverzichtbar für den d100 (zwei kombinierte d10).',
      '<strong>d12 – Dodekaeder:</strong> Der Würfel des Barbaren. Zwölf fünfeckige Flächen. In vielen Systemen unterschätzt, Protagonist beim D&D 5e Barbaren.',
      '<strong>d20 – Ikosaeder:</strong> Der König des Rollenspiels. Zwanzig dreieckige Flächen. Protagonist des d20-Systems: entscheidet über Erfolg oder Misserfolg fast aller Aktionen.',
      '<strong>d100 – Prozentwürfel:</strong> Zwei kombinierte d10 (Zehner + Einer). Definiert feine Wahrscheinlichkeiten in Systemen wie Cthulhu oder Warhammer Fantasy.',
    ]},
    { type: 'stats', items: [
      { value: '5000 v. Chr.', label: 'Erste Würfel (Astragali)', icon: 'mdi:history' },
      { value: '1974', label: 'D&D machte das Set bekannt', icon: 'mdi:sword' },
      { value: '7 Typen', label: 'Standard RPG Würfel', icon: 'mdi:dice-multiple' },
      { value: '2¹²⁸', label: 'JS Zufallsperiode', icon: 'mdi:function-variant' },
    ], columns: 4 },
    { type: 'title', text: 'Wahrscheinlichkeiten und Verteilungskurven', level: 3 },
    { type: 'paragraph', html: 'Wenn Sie einen einzelnen Würfel werfen, erhalten Sie eine <strong>diskrete Gleichverteilung</strong>: jedes Ergebnis hat genau die gleiche Wahrscheinlichkeit (1/n). Sobald Sie jedoch mehrere Würfel kombinieren, verwandelt die mathematische Magie diese flache Kurve in eine <strong>annähernde Normalverteilung</strong>. Deshalb ist 2d6 nicht gleich 1d12: Bei zwei sechsseitigen Würfeln beträgt die Wahrscheinlichkeit, eine 7 zu würfeln, 6/36 ≈ 16,7 %, während die Extreme (2 und 12) nur in 2,8 % der Fälle auftreten.' },
    { type: 'tip', title: 'Vorteil und Nachteil (D&D 5e)', html: 'Die <strong>Vorteils</strong>-Mechanik besteht darin, 2d20 zu würfeln und das höhere Ergebnis zu behalten. Mathematisch erhöht dies den Durchschnitt von 10,5 auf etwa 13,8. <strong>Nachteil</strong> bewirkt das Gegenteil: Nehmen Sie den niedrigeren Wert, wodurch der Durchschnitt auf etwa 7,2 sinkt. Unser Simulator ermöglicht es Ihnen, dies zu simulieren, indem Sie zwei d20 zum Beutel hinzufügen und die Einzelergebnisse vergleichen.' },
    { type: 'title', text: 'Modifikatoren: Die Brücke zwischen Würfeln und Charakter', level: 3 },
    { type: 'paragraph', html: 'In den meisten Rollenspielsystemen agiert der Würfel nicht allein: Ein <strong>Modifikator</strong>, der die Fähigkeiten des Charakters darstellt, wird addiert oder subtrahiert. In D&D 5e bedeutet ein Stärkemodifikator von +5, dass Sie 1d20 würfeln, 5 addieren und das Ergebnis gegen die Rüstungsklasse des Gegners prüfen. Unser Simulator enthält eine Modifikatorsteuerung, um diese Mechaniken originalgetreu abzubilden.' },
    { type: 'tip', title: 'Standard Würfel Notation', html: 'Die <strong>XdY+Z</strong>-Notation ist der De-facto-Standard in Rollenspielen: X Würfel mit Y Flächen mit Modifikator Z. "3d6+2" bedeutet, drei sechsseitige Würfel zu werfen und 2 zur Summe zu addieren. Unser Werkzeug verwendet diese Notation in der Historie, damit Sie Ihre Würfe leicht teilen oder aufzeichnen können.' },
    { type: 'glossary', items: [
      { term: 'Kritischer Treffer', definition: 'Ein Wurf des maximalen Wertes auf einem Würfel (z. B. eine 20 auf einem d20). Löst in den meisten RPG-Systemen normalerweise spezielle Bonuseffekte aus.' },
      { term: 'Patzer / Nat 1', definition: 'Das Würfeln des Minimalwerts (1) auf einem Würfel. Führt oft zu einem dramatischen Misserfolg oder einer negativen Konsequenz.' },
      { term: 'Würfelpool', definition: 'Eine Sammlung von Würfeln, die gleichzeitig geworfen werden. Der Pool in unserem Werkzeug zeigt jeden Würfeltyp gruppiert nach Anzahl an (z. B. 3d6 + 2d8).' },
      { term: 'Modifikator', definition: 'Eine feste Zahl, die zu einem Würfelergebnis addiert oder davon subtrahiert wird und die Fertigkeit, den Attributsbonus oder einen situationsbedingten Abzug eines Charakters darstellt.' },
      { term: 'Prozentwurf', definition: 'Ein Wurf mit zwei d10, um ein Ergebnis von 1–100 zu erhalten, verwendet in fertigkeitsbasierten Systemen, in denen Fähigkeiten als Prozentsätze gemessen werden.' },
    ]},
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
