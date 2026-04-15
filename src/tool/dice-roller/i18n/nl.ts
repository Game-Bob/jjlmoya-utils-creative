import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DiceRollerLocaleContent } from '../index';

const slug = 'dobbelsteen-roller';
const title = 'Dobbelsteen Roller';
const description = 'Een complete dobbelsteensimulator voor je RPG- en bordspellen. Rol d4, d6, d8, d10, d12, d20 en d100 met modifiers en geschiedenis.';

const faq: DiceRollerLocaleContent['faq'] = [
  {
    question: 'Hoe kan ik een worp met voordeel (advantage) simuleren (D&D)?',
    answer: 'Voeg twee d20 dobbelstenen toe aan de zak door twee keer op de d20-knop te klikken. Let bij het rollen op de twee individuele resultaten en houd de hoogste aan. De getoonde totaalwaarde is de som, maar je kunt elke dobbelsteen afzonderlijk zien in de uitsplitsing van het resultaat.',
  },
  {
    question: 'Wat betekent de groene of rode kleur bij de resultaten?',
    answer: 'Groene resultaten geven aan dat de dobbelsteen de maximaal mogelijke waarde heeft gerold (een "critical"). Rode resultaten geven de minimumwaarde aan (een "1", het slechtst mogelijke resultaat). Dit maakt het gemakkelijk om crits en fumbles in één oogopslag te herkennen.',
  },
  {
    question: 'Kan ik meerdere dobbelstenen van hetzelfde type toevoegen?',
    answer: 'Ja. Elke klik op een dobbelsteen voegt deze toe aan de zak. Als je drie keer op d6 klikt, zie je "3d6" in de zak. Om het aantal te verminderen, klik je op de "−" knop die naast elke dobbelsteengroep in de zak verschijnt.',
  },
  {
    question: 'Zijn digitale dobbelstenen net zo willekeurig als fysieke?',
    answer: 'Statistisch gezien, ja. Moderne JavaScript-engines gebruiken pseudorandom algoritmen (xorshift128+) met een zeer hoogwaardige uniforme verdeling. Een echte fysieke dobbelsteen kan kleine fabricagefoutjes hebben die de resultaten beïnvloeden; de digitale dobbelsteen heeft dat probleem niet.',
  },
  {
    question: 'Wat is de d100 en hoe wordt deze gebruikt?',
    answer: 'De d100 (of d%) genereert een getal van 1 tot 100 en wordt gebruikt in percentage-gebaseerde spelsystemen, zoals Call of Cthulhu of Warhammer Fantasy Roleplay. Het vertegenwoordigt "directe waarschijnlijkheid": als je Stealthvaardigheid 65% is, moet je 65 of lager rollen om te slagen.',
  },
];

const howTo: DiceRollerLocaleContent['howTo'] = [
  { name: 'Bouw de dobbelsteenpool op', text: 'Klik op de dobbelsteenknoppen (d4, d6, d8...) om ze aan je pool toe te voegen. Elke klik voegt één dobbelsteen van het geselecteerde type toe. Je kunt verschillende types in dezelfde worp mengen.' },
  { name: 'Pas de modifier aan', text: 'Gebruik de "+" en "−" knoppen naast de modifier om bonussen of straffen toe te passen (zoals de ability modifier in D&D). De modifier wordt automatisch bij het totaal opgeteld.' },
  { name: 'Rol de dobbelstenen', text: 'Druk op de knop "Gooi Dobbelstenen". Het rechterpaneel toont het uiteindelijke totaal en de uitsplitsing van elke individuele dobbelsteen, met crits (maximum) in het groen en fumbles (minimum) in het rood.' },
  { name: 'Bekijk de geschiedenis', text: 'Elke worp wordt in de geschiedenis opgenomen met de gebruikte dobbelsteennotatie, het totaalresultaat en de exacte tijd. Je kunt de geschiedenis wissen met de bijbehorende knop.' },
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

export const content: DiceRollerLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde Vragen',
  bibliographyTitle: 'Waarschijnlijkheidsbibliografie',
  ui: {
    title: 'Dobbelsteen Roller',
    description: 'Moge het geluk aan jouw zijde staan.',
    rollBtn: 'Gooi Dobbelstenen',
    totalLabel: 'Totaal',
    historyLabel: 'Geschiedenis',
    clearHistoryBtn: 'Wis Geschiedenis',
    faqTitle: 'FAQ',
    bibliographyTitle: 'Referenties',
    addDiceLabel: 'Voeg dobbelstenen toe aan de zak',
    bagLabel: 'Dobbelsteenzak',
    emptyBagBtn: 'Leegmaken',
    emptyBagText: 'Klik op de dobbelstenen om ze toe te voegen',
    modifierLabel: 'Modifier',
    rollManyLabel: 'Gooi $COUNT dobbelstenen',
    rollOneLabel: 'Gooi $COUNT dobbelsteen',
    preRollText: 'Voeg dobbelstenen toe en gooi',
    emptyHistoryText: 'De geschiedenis van de worpen verschijnt hier'
  },
  seo: [
    { type: 'title', text: 'De Kunst van de Willekeur: Geschiedenis en Wiskunde van Dobbelstenen', level: 2 },
    { type: 'paragraph', html: 'Dobbelstenen behoren tot de oudste toevalsgeneratoren van de mensheid. <strong>Astragali</strong> — enkelbotjes van schapen en geiten — werden al in 5000 v.Chr. in Mesopotamië en Egypte als primitieve vierzijdige dobbelstenen gebruikt. De evolutie van gesneden bot naar moderne epoxyhars-icosaëders is niet alleen esthetisch: het is een reis door de kansrekening en het ontwerpen van spelmechanieken.' },
    { type: 'title', text: 'De Standaard Dobbelsteenfamilie', level: 3 },
    { type: 'paragraph', html: 'De meest verspreide set dobbelstenen in rollenspellen — gepopulariseerd door <strong>Dungeons &amp; Dragons</strong> in 1974 — bestaat uit de vijf Platonische lichamen plus twee extra vormen: d4 (tetraëder), d6 (kubus), d8 (octaëder), d10 (pentagonale trapezoëder), d12 (dodecaëder), d20 (icosaëder) en d100 (procentuele dobbelsteen). Elk veelvlak garandeert een uniforme verdeling: alle vlakken hebben precies dezelfde kans om boven te komen.' },
    { type: 'list', items: [
      '<strong>d4 – Tetraëder:</strong> Het gevaarlijkst als je er met blote voeten op stapt. Vier driehoekige vlakken, 25% kans per vlak. Veelgebruikt voor dolkschade of spreuken van laag niveau.',
      '<strong>d6 – Kubus:</strong> De meest universele dobbelsteen. Aanwezig in alle bordspellen sinds het Egyptische Senet. Zijn kubusvormige geometrie garandeert perfecte gelijke verdeling.',
      '<strong>d8 – Octaëder:</strong> De dobbelsteen van de speer of strijdbijl. Acht gelijkzijdige driehoekige vlakken. 12,5% kans per vlak.',
      '<strong>d10 – Pentagonale trapezoëder:</strong> Het enige niet-Platonische lichaam in de standaardset. Twee tegenover elkaar liggende vlakken per "hoekpunt". Onmisbaar voor de d100 (twee gecombineerde d10\'s).',
      '<strong>d12 – Dodecaëder:</strong> De dobbelsteen van de barbaar. Twaalf vijfhoekige vlakken. Ondergewaardeerd in veel systemen, hoofdrolspeler voor de D&D 5e Barbarian.',
      '<strong>d20 – Icosaëder:</strong> De koning van de RPG. Twintig driehoekige vlakken. Hoofdrolspeler van het d20-systeem: bepaalt succes of falen van bijna alle acties.',
      '<strong>d100 – Percentiel:</strong> Twee gecombineerde d10\'s (tientallen + eenheden). Definieert nauwkeurige waarschijnlijkheden in systemen zoals Call of Cthulhu of Warhammer Fantasy.',
    ]},
    { type: 'stats', items: [
      { value: '5000 v.Chr.', label: 'Eerste dobbelstenen (astragali)', icon: 'mdi:history' },
      { value: '1974', label: 'D&D populariseerde de set', icon: 'mdi:sword' },
      { value: '7 types', label: 'Standaard RPG-dobbelstenen', icon: 'mdi:dice-multiple' },
      { value: '2¹²⁸', label: 'JS willekeurige periode', icon: 'mdi:function-variant' },
    ], columns: 4 },
    { type: 'title', text: 'Kansrekening en Verdelingscurven', level: 3 },
    { type: 'paragraph', html: 'Wanneer je een enkele dobbelsteen gooit, krijg je een <strong>discrete uniforme verdeling</strong>: elk resultaat heeft precies dezelfde kans (1/n). Maar zodra je meerdere dobbelstenen combineert, transformeert de wiskundige magie die vlakke curve in een <strong>benaderende normale verdeling</strong>. Daarom is 2d6 niet hetzelfde als 1d12: met twee zeszijdige dobbelstenen is de kans op een 7 gelijk aan 6/36 ≈ 16,7%, terwijl de uitersten (2 en 12) slechts 2,8% van de tijd voorkomen.' },
    { type: 'tip', title: 'Voordeel en Nadeel (D&D 5e)', html: 'De <strong>Voordeel</strong>-mechaniek bestaat uit het gooien van 2d20 en het behouden van het hoogste resultaat. Wiskundig gezien verhoogt dit het gemiddelde van 10,5 naar ongeveer 13,8. <strong>Nadeel</strong> doet het tegenovergestelde: neem de laagste, waardoor het gemiddelde daalt naar ongeveer 7,2. Met onze roller kun je dit simuleren door twee d20\'s aan de zak toe te voegen en de individuele resultaten te vergelijken.' },
    { type: 'title', text: 'Modifiers: De Brug tussen Dobbelsteen en Personage', level: 3 },
    { type: 'paragraph', html: 'In de meeste RPG-systemen werkt de dobbelsteen niet alleen: een <strong>modifier</strong> die de vaardigheden van het personage vertegenwoordigt, wordt opgeteld of afgetrokken. In D&D 5e betekent een Strength-modifier van +5 dat je 1d20 gooit, er 5 bij optelt en het resultaat vergelijkt met de Armor Class van de vijand. Onze roller bevat een modifier-regelaar om deze mechanieken natuurgetrouw weer te geven.' },
    { type: 'tip', title: 'Standaard Dobbelsteennotatie', html: 'De <strong>XdY+Z</strong> notatie is de feitelijke standaard in rollenspellen: X dobbelstenen van Y vlakken met modifier Z. "3d6+2" betekent gooi drie zeszijdige dobbelstenen en tel 2 op bij het totaal. Onze tool gebruikt deze notatie in de geschiedenis, zodat je je worpen gemakkelijk kunt delen of vastleggen.' },
    { type: 'glossary', items: [
      { term: 'Critical Hit', definition: 'Een worp met de maximale waarde op een dobbelsteen (bijv. een 20 op een d20). Activeert meestal speciale bonus-effecten in de meeste RPG-systemen.' },
      { term: 'Fumble / Nat 1', definition: 'Het gooien van de minimumwaarde (1) op een dobbelsteen. Resulteert vaak in een dramatische mislukking of negatieve consequentie.' },
      { term: 'Dice Pool', definition: 'Een verzameling dobbelstenen die tegelijkertijd worden gegooid. De pool in onze tool toont elk dobbelsteentype gegroepeerd naar aantal (bijv. 3d6 + 2d8).' },
      { term: 'Modifier', definition: 'Een vast getal dat wordt opgeteld of afgetrokken van een resultaat van een worp, en dat de vaardigheid, attribuutbonus of situationele straf van een personage vertegenwoordigt.' },
      { term: 'Percentielworp', definition: 'Een worp met twee d10\'s om een resultaat van 1–100 te produceren, gebruikt in op vaardigheden gebaseerde systemen waarbij vermogens als percentages worden gemeten.' },
    ]},
  ],
  faq,
  bibliography: [
    { name: 'D&D Beyond – Dobbelsteenmechanica regels', url: 'https://www.dndbeyond.com/sources/basic-rules/using-ability-scores' },
    { name: 'Roll20 – Virtuele tafel en dobbelsteensystemen', url: 'https://roll20.net/' },
    { name: 'Pathfinder – d20 System Reference', url: 'https://paizo.com/pathfinder' },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
