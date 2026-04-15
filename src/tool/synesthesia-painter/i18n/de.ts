import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SynesthesiaPainterLocaleContent } from '../index';

const slug = 'synaesthesie-maler';
const title = 'Synästhesie Maler';
const description = 'Visualisieren Sie die Farbe von Wörtern gemäß der Graphem Farb Synästhesie. Jeder Buchstabe hat seine eigene Farbe und verwandelt Text in chromatische Kunst.';

const faq: SynesthesiaPainterLocaleContent['faq'] = [
  {
    question: 'Sehen alle Synästhetiker die gleichen Farben für jeden Buchstaben?',
    answer: 'Nein. Synästhetische Farben sind für jede Person einzigartig. Es gibt statistische Tendenzen (A ist für viele oft rot), aber keine zwei Synästhetiker haben exakt die gleiche Palette. Dieses Tool verwendet die Farben, die in Populationsstudien am häufigsten gemeldet wurden, nicht die „richtigen“.',
  },
  {
    question: 'Kann ich durch die ständige Nutzung dieses Tools eine Synästhesie entwickeln?',
    answer: 'Nicht im strikten neurologischen Sinne. Echte Synästhesie ist ein Merkmal des Nervensystems, keine erlernte Fähigkeit. Die wiederholte Verwendung von Farb-Buchstaben-Assoziationen kann jedoch starke assoziative Erinnerungen schaffen. Einige Studien deuten darauf hin, dass das Üben dieser Assoziationen das Textgedächtnis verbessern kann.',
  },
  {
    question: 'Wozu dient der „Aura“-Modus?',
    answer: 'Der Aura-Modus simuliert, wie einige Synästhetiker beschreiben, dass sie Farben „schwebend“ oder „leuchtend“ um Buchstaben herum sehen, anstatt in sie integriert. Er schafft ein atmosphärischeres und immersiveres visuelles Erlebnis, insbesondere auf dunklem Hintergrund.',
  },
  {
    question: 'Hat der „Punkte“-Modus eine wissenschaftliche Grundlage?',
    answer: 'Es handelt sich um eine künstlerische Abstraktion. Er reduziert den Text auf seine „chromatische Essenz“, indem er die erkennbare Form der Buchstaben eliminiert. Das Ergebnis ähnelt chromatischen Datenvisualisierungen oder pointillistischen Gemälden und ermöglicht es Ihnen, die „Farbsignatur“ eines Textes zu sehen, ohne dass die Bedeutung stört.',
  },
  {
    question: 'Warum sind manche Buchstaben wie I und O weiß oder schwarz?',
    answer: 'In Synästhesie-Studien werden die Vokale I und O sowie der Buchstabe W häufig als weiß, transparent oder schwarz beschrieben. Dieses Tool passt diese Farben an den aktiven Hintergrund an: weiß auf dunklem Hintergrund, schwarz auf hellem Hintergrund, um immer die Lesbarkeit zu gewährleisten.',
  },
];

const howTo: SynesthesiaPainterLocaleContent['howTo'] = [
  { name: 'Text schreiben', text: 'Klicken Sie in den Schreibbereich und beginnen Sie zu tippen. Jeder Buchstabe erscheint in der Farbe, die seiner statistischen synästhetischen Assoziation entspricht.' },
  { name: 'Visualisierungsmodus ändern', text: 'Verwenden Sie die Schaltflächen in der oberen rechten Ecke, um zwischen Buchstaben (farbiger Text), Punkten (Farbkreise) und Aura (leuchtende Buchstaben mit chromatischen Halos) zu wechseln.' },
  { name: 'Verschiedene Texte erkunden', text: 'Schreiben Sie Namen, Wörter in verschiedenen Sprachen oder Sätze, um deren einzigartige chromatische Palette zu entdecken. Lange Wörter erzeugen faszinierende visuelle Gradienten.' },
  { name: 'Löschen und neu beginnen', text: 'Verwenden Sie die Schaltfläche „Löschen“ in der unteren Leiste, um die Leinwand zu leeren und einen neuen Text zu erkunden.' },
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

export const content: SynesthesiaPainterLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  bibliographyTitle: 'Geistes-Bibliographie',
  ui: {
    title: 'Synästhesie Maler',
    description: 'Verwandeln Sie Ihre Worte in chromatische Kunst.',
    modeLetters: 'Buchstaben',
    modeDots: 'Punkte',
    modeAura: 'Aura',
    placeholder: 'Hier tippen...',
    footerText: 'Tippen Sie, um Ihre persönliche Farbpalette zu entdecken',
    clearBtn: 'Löschen',
    faqTitle: 'FAQ',
    bibliographyTitle: 'Referenzen'
  },
  seo: [
    { type: 'title', text: 'Was ist Graphem Farb Synästhesie?', level: 2 },
    { type: 'paragraph', html: '<strong>Synästhesie</strong> ist ein neurologischer Zustand, bei dem die Stimulierung eines Sinnes automatisch eine Reaktion in einem anderen auslöst. Die am besten untersuchte und am weitesten verbreitete Variante ist die <strong>Graphem-Farb-Synästhesie</strong>: Die Betroffenen nehmen jeden Buchstaben oder jede Zahl mit einer intrinsischen, konstanten und lebendigen Farbe wahr. Es ist keine Fantasie oder Metapher; für einen Synästhetiker ist der Buchstabe „A“ rot, genauso wie Feuer heiß ist. Dieses Tool basiert auf einer <em>statistischen Palette</em>, die auf den am häufigsten gemeldeten Farben für jedes Graphem in Populationsstudien beruht.' },
    { type: 'title', text: 'Neurowissenschaft: Die Theorie der Kreuzaktivierung', level: 3 },
    { type: 'paragraph', html: 'Das am weitesten akzeptierte neurologische Modell für die Graphem-Farb-Synästhesie ist die <strong>Kreuzaktivierung</strong>. Die Bereiche des temporalen Kortex, die an der Erkennung von Buchstabenformen beteiligt sind (Gyrus fusiformis), liegen anatomisch direkt neben den Regionen, die Farben verarbeiten (Areal V4). Bei Menschen mit Synästhesie besteht eine stärkere strukturelle oder funktionelle Konnektivität zwischen diesen Regionen, sodass das Erkennen eines Buchstabens auch Farbpneuronen aktiviert. Die funktionelle Magnetresonanztomographie (fMRT) hat bestätigt, dass Synästhetiker beim Lesen von Text eine echte Aktivierung im Areal V4 zeigen, selbst wenn dieser einfarbig ist.' },
    { type: 'tip', title: 'Die drei Visualisierungsmodi', html: '<strong>Buchstaben:</strong> Der Originaltext, gefärbt nach Graphem. Ideal, um die „chromatische Melodie“ eines ganzen Textes zu sehen. <strong>Punkte:</strong> Jedes Zeichen wird zu einem Kreis in seiner Farbe; der Text verschwindet und nur die Farbmusik bleibt. <strong>Aura:</strong> Buchstaben strahlen einen Halo in ihrer Farbe aus, als ob der Text mit seiner eigenen Energie leuchtet.' },
    { type: 'title', text: 'Statistik und Farbunivsersalien', level: 3 },
    { type: 'paragraph', html: 'Obwohl synästhetische Farben für jedes Individuum einzigartig sind, fanden Studien von Simner et al. (2006) und Eagleman et al. (2007) signifikante statistische Muster. Der Vokal <strong>A</strong> ist für die meisten tendenziell rot; <strong>O</strong> ist weiß oder schwarz; <strong>S</strong> erscheint in Türkis- oder Grüntönen; <strong>E</strong> erscheint als grün oder weiß. Interessanterweise sind Farb-Buchstaben-Assoziationen innerhalb einer Sprachkultur konsistenter als zwischen verschiedenen Kulturen, was auf eine Rolle des frühen Alphabetlernens hindeutet.' },
    { type: 'list', items: [
      '<strong>Prävalenz:</strong> Etwa 4 % der Bevölkerung haben in gewissem Maße eine Graphem-Farb-Synästhesie, wobei neuere Studien diese Zahl auf 6–8 % beziffern, wenn subklinische Formen einbezogen werden.',
      '<strong>Geschlechterunterschiede:</strong> Synästhesie ist bei Frauen 3- bis 6-mal häufiger als bei Männern, obwohl die Ursachen für diesen Unterschied noch nicht vollständig geklärt sind.',
      '<strong>Vererbbarkeit:</strong> Sie hat eine klare genetische Komponente: Sie tritt gehäuft in Familien auf, wenn auch nicht immer mit der gleichen Art von Synästhesie.',
      '<strong>Konsistenz:</strong> Im Gegensatz zu erlernten Assoziationen sind synästhetische Farben über die Zeit hinweg außerordentlich stabil. 10-Jahres-Follow-up-Studien zeigen eine über 90-prozentige Konsistenz bei Graphem-Farb-Assoziationen.',
      '<strong>Berühmte Synästhetiker:</strong> Vladimir Nabokov, Wassily Kandinsky, Nikola Tesla und Billy Joel haben öffentlich synästhetische Erfahrungen beschrieben, die ihre Arbeit beeinflusst haben.',
    ]},
    { type: 'stats', items: [
      { value: '4–8 %', label: 'Bevölkerung mit Synästhesie', icon: 'mdi:brain' },
      { value: '90 %+', label: 'Farbkonsistenz über 10 Jahre', icon: 'mdi:check-circle' },
      { value: '3–6×', label: 'Häufiger bei Frauen', icon: 'mdi:gender-female' },
      { value: '26+10', label: 'Gefärbte Buchstaben & Ziffern', icon: 'mdi:alphabetical' },
    ], columns: 4 },
    { type: 'title', text: 'Kunst und Synästhesie: Wenn die Sinne verschmelzen', level: 3 },
    { type: 'paragraph', html: '<strong>Wassily Kandinsky</strong>, Begründer des abstrakten Expressionismus, erlebte sowohl Graphem-Farb- als auch Musik-Farb-Synästhesie: Er hörte Instrumente in Farben (Gelb war eine Trompete, tiefes Blau ein Cello) und nutzte diese Wahrnehmungen für seine Theorie der abstrakten Kunst. In der Musik komponierte <strong>Alexander Skrjabin</strong> <em>Prometheus: Das Poem des Feuers</em> mit einer Stimme für „tastiera per luce“ (Lichtklavier), die dazu bestimmt war, den jeweiligen Noten entsprechende Farben zu projizieren.' },
    { type: 'tip', title: 'Farbpalette dieses Tools', html: 'Die Farbzuteilungen sind von den häufigsten statistischen Daten der wissenschaftlichen Literatur inspiriert. <strong>A → rot</strong>, <strong>E → grün</strong>, <strong>I → weiß/schwarz je nach Hintergrund</strong>, <strong>O → schwarz/weiß</strong>, <strong>U → bernsteinfarben</strong>. Konsonanten folgen weniger einheitlichen Mustern, aber der Kontrast zum Hintergrund wird immer priorisiert, um die Lesbarkeit zu gewährleisten.' },
  ],
  faq,
  bibliography: [
    { name: 'Simner et al. (2006) – Synaesthesia: The prevalence of atypical cross-modal experiences', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1626536/' },
    { name: 'Eagleman et al. (2007) – A standardized test battery for the study of synesthesia', url: 'https://www.sciencedirect.com/science/article/pii/S0010945207000087' },
    { name: 'Kandinsky, W. – Über das Geistige in der Kunst (1911)', url: 'https://de.wikipedia.org/wiki/Über_das_Geistige_in_der_Kunst' },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
