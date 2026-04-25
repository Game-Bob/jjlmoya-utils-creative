import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { GlitchImageDistorterLocaleContent } from '../index';

const slug = 'glitch-bild-distorter';
const title = 'Glitch Bild Distorter';
const description = 'Verwandle Bilder in Glitch-Art mit RGB-Splits, Scanlines, Pixel-Sorting und animierten Verzerrungen. Ganz ohne Photoshop.';

const faq: GlitchImageDistorterLocaleContent['faq'] = [
  {
    question: 'Was ist Glitch-Art?',
    answer: 'Glitch-Art ist eine Form digitaler Kunst, bei der digitale Bilder oder Daten manipuliert werden, um absichtliche visuelle Fehler zu erzeugen. Diese "Glitches" führen zu fragmentierten Farben, verzerrten Formen und unvorhersehbaren Mustern, die eine Ästhetik digitaler Korruption und Chaos erzeugen.',
  },
  {
    question: 'Kann ich meine eigenen Bilder verwenden?',
    answer: 'Ja! Du kannst jedes PNG-, JPG- oder WebP-Bild hochladen, per Drag-and-Drop auf die Leinwand ziehen oder ein Bild direkt aus der Zwischenablage mit Strg+V einfügen. Du kannst auch das Beispielbild verwenden.',
  },
  {
    question: 'Was bewirken die verschiedenen Verzerrungseffekte?',
    answer: 'Korruption trennt die RGB-Kanäle für einen chromatischen Aberrationseffekt. Interferenz fügt monitorähnliche Scanlines mit optionalem Zittern hinzu. Pixel-Sorting lässt helle Pixel in eine gewählte Richtung "fließen". Statisches Rauschen überlagert klassisches TV-Schneerauschen.',
  },
  {
    question: 'Kann ich den Glitch-Effekt animieren?',
    answer: 'Ja! Der "Glitch-Animation"-Modus wendet mikro-zufällige Bewegungen auf die Parameter an und erzeugt so einen lebendigen, flackernden Effekt, der kontinuierlich läuft. Du kannst dies als animiertes GIF oder WebP exportieren.',
  },
  {
    question: 'Welche Formate kann ich exportieren?',
    answer: 'Du kannst ein hochwertiges PNG für die statische Nutzung herunterladen oder als animiertes GIF oder WebP exportieren, wenn der Animationsmodus aktiviert ist. Perfekt für Instagram, Discord oder andere Plattformen.',
  },
  {
    question: 'Was macht die Chaos-Taste?',
    answer: 'Die "Chaos-Zufall"-Taste randomisiert sofort alle Schiebereglerwerte und erzeugt so unerwartete und oft überraschende Glitch-Kombinationen. Ideal zum Erkunden des kreativen Potenzials ohne manuelle Anpassungen.',
  },
];

const howTo: GlitchImageDistorterLocaleContent['howTo'] = [
  { name: 'Bild laden', text: 'Ziehe ein Bild auf die Leinwand, füge es mit Strg+V ein, lade es über die Datei-Schaltfläche hoch oder klicke auf "Beispielbild verwenden".' },
  { name: 'Regler anpassen', text: 'Verwende die Regler für Korruption, Interferenz, Pixel-Sort und Rauschen, um verschiedene Glitch-Effekte anzuwenden. Die Vorschau wird in Echtzeit aktualisiert.' },
  { name: 'Animation aktivieren', text: 'Schalte die "Glitch-Animation"-Taste ein, um mikro-zufällige Bewegungen hinzuzufügen. Das Bild wird flackern und sich dynamisch verändern.' },
  { name: 'Kreation exportieren', text: 'Lade als PNG für statische Kunstwerke herunter oder exportiere als GIF/WebP, wenn die Animation aktiviert ist. Teile deine Glitch-Art in sozialen Medien!' },
  { name: 'Mit Chaos experimentieren', text: 'Klicke auf die "Chaos-Zufall"-Taste, um alle Einstellungen automatisch zu randomisieren und unerwartete Glitch-Kombinationen zu entdecken.' },
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

export const content: GlitchImageDistorterLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  ui: {
    title: 'Glitch Distorter',
    description: 'Erstelle Glitch-Art in Sekundenschnelle.',
    dragDropText: 'Bild hierher ziehen oder zum Hochladen klicken',
    pasteHint: 'Tipp: Du kannst ein Bild auch mit Strg+V einfügen',
    exampleImageBtn: 'Beispielbild verwenden',
    corruptionLabel: 'Korruption (RGB-Split)',
    interferenceLabel: 'Interferenz (Scanlines)',
    tremorLabel: 'Zittern',
    pixelSortLabel: 'Pixel Sorting',
    pixelSortDirectionLabel: 'Richtung',
    noiseLabel: 'Statisches Rauschen',
    animateBtn: 'Glitch Animation',
    chaosBtn: 'Chaos-Zufall',
    downloadPngBtn: 'PNG herunterladen',
    downloadGifBtn: 'GIF herunterladen',
    undoBtn: 'Rückgängig',
    redoBtn: 'Wiederholen',
    footerText: 'Erstelle korrumpierte digitale Kunst in weniger als 30 Sekunden',
    faqTitle: 'FAQ',
    bibliographyTitle: 'Referenzen'
  },
  seo: [
    { type: 'title', text: 'Was ist Glitch-Art?', level: 2 },
    { type: 'paragraph', html: '<strong>Glitch-Art</strong> ist eine kreative Praxis, die absichtlich digitale Fehler, korrupte Daten und visuelle Artefakte nutzt, um ästhetische Ergebnisse zu erzielen. Im Gegensatz zur traditionellen Kunst, die nach Perfektion strebt, feiert Glitch die unerwartete Schönheit des digitalen Zusammenbruchs — fragmentierte Farben und chaotische Muster, die aus technischem Versagen entstehen.' },
    { type: 'title', text: 'Ursprünge und digitale Ästhetik', level: 3 },
    { type: 'paragraph', html: 'Die Glitch-Ästhetik entstand Anfang der 2000er Jahre, als digitale Künstler begannen, mit korrupten Bilddateien und Hardwarefehlern zu experimentieren. Künstler wie <strong>Rosa Menkman</strong> erhoben Glitch-Art zur bildenden Kunst, indem sie die Poetik digitaler Artefakte untersuchten. Die Ästhetik schöpft aus VHS-Degradation, Übertragungsfehlern und dem sichtbaren "Rauschen" digitaler Systeme.' },
    { type: 'title', text: 'Wichtige Glitch-Techniken', level: 3 },
    { type: 'list', items: [
      '<strong>RGB-Splitting:</strong> Das Trennen und Versetzen der roten, grünen und blauen Farbkanäle erzeugt chromatische Aberration.',
      '<strong>Scanlines:</strong> Das Simulieren horizontaler Scanzeilen ahmt alte CRT-Monitore nach und fügt eine retro Ästhetik hinzu.',
      '<strong>Pixel-Sorting:</strong> Das Sortieren von Pixeln nach Helligkeit und deren Verschiebung erzeugt einen "schmelzenden" Effekt.',
      '<strong>Data Moshing:</strong> Die Manipulation von Videocodec-Daten, um Frames auf unerwartete Weise zu mischen.',
      '<strong>Bit Shifting:</strong> Die direkte Veränderung von Binärdaten führt zu dramatischen Farbverschiebungen und Verzerrungen.',
    ]},
    { type: 'tip', title: 'Die Philosophie hinter Glitch', html: 'Glitch-Art stellt die Vorstellung einer "perfekten" digitalen Darstellung in Frage. Indem wir Fehler akzeptieren, hinterfragen wir die Zuverlässigkeit der Technologie und erforschen, wie diese unsere Wahrnehmung der Realität vermittelt. Es ist Kunst über Systemfehler und die in Chaos verborgene Schönheit.' },
    { type: 'title', text: 'Zeitgenössische Anwendungen', level: 3 },
    { type: 'paragraph', html: 'Heute findet man Glitch-Ästhetik überall: Albumcover, Musikvideos, Mode und Grafikdesign. Dieses Tool demokratisiert die Erstellung von Glitch-Art und ermöglicht es jedem, professionell aussehende digitale Korruption ohne tiefes technisches Wissen zu produzieren.' },
    { type: 'stats', items: [
      { value: '2000er', label: 'Entstehung der Glitch-Art', icon: 'mdi:history' },
      { value: '∞', label: 'Mögliche Glitch-Kombinationen', icon: 'mdi:shuffle-variant' },
      { value: '<30s', label: 'Zeit zum Erstellen', icon: 'mdi:flash' },
      { value: '3+', label: 'Export-Formate', icon: 'mdi:download-multiple' },
    ], columns: 4 },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
