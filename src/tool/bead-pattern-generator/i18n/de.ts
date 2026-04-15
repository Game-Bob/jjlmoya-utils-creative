import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { BeadPatternGeneratorLocaleContent } from '../index';

const slug = 'perlenmuster-generator';
const title = 'Muster Generator';
const description = 'Erstellen Sie Pixelkunst und Perlenschemata für Miyuki oder Hama aus Ihren Fotos. Farbauantierungsalgorithmus, Tunnelblick-Modus und ZIP-Export.';

const faq: BeadPatternGeneratorLocaleContent['faq'] = [
  { question: 'Was ist Farbauantierung bei Mustern?', answer: 'Dabei werden die Tausenden von Farben in einem Foto auf einige wenige reduziert, die den tatsächlich verfügbaren Perlenfarben entsprechen (z. B. Miyuki oder Hama). Wir verwenden intelligente Algorithmen, um die visuelle Ähnlichkeit mit einer minimalen Palette beizubehalten.' },
  { question: 'Kann ich dieses Muster für Kreuzstich verwenden?', answer: 'Ja, der Generator erstellt ein Rasterdiagramm, das perfekt für Kreuzstich geeignet ist. Sie müssen lediglich eine Rastergröße wählen, die zu Ihrem Stoff passt (Aida 14, 18 usw.).' },
  { question: 'Was ist der Unterschied zwischen Miyuki- und Hama-Perlen?', answer: 'Miyuki Delica-Perlen sind sehr kleine, präzise Glasperlen für Schmuck. Hama-Perlen sind aus Kunststoff und werden mit einem Bügeleisen verschmolzen. Unser Werkzeug ermöglicht es Ihnen, das Seitenverhältnis anzupassen, damit sich das Muster je nach verwendetem Material nicht verzerrt.' },
  { question: 'Wie funktioniert der Dithering-Algorithmus?', answer: 'Dithering erzeugt die Illusion von mehr Farben, indem Pixel verschiedener Farben in Abständen gemischt werden. Dies hilft dabei, Farbübergänge auch mit einer begrenzten Perlenpalette glatter erscheinen zu lassen.' },
];

const howTo: BeadPatternGeneratorLocaleContent['howTo'] = [
  { name: 'Ein klares Bild hochladen', text: 'Wählen Sie ein Foto mit gutem Kontrast und wenigen kleinen Details, damit das Muster einfacher zu befolgen ist.' },
  { name: 'Die Rastergröße anpassen', text: 'Legen Sie fest, wie viele Perlen breit und hoch Ihr fertiges Stück sein soll. Mehr Perlen = mehr Details, aber auch höherer Schwierigkeitsgrad.' },
  { name: 'Die Farbpalette optimieren', text: 'Reduzieren Sie die Anzahl der Farben, bis sie mit den Perlen übereinstimmen, die Sie in Ihrem Bastelset zur Verfügung haben.' },
  { name: 'Das Musterschema exportieren', text: 'Generieren Sie das endgültige Muster mit Farbcodes, um es als Referenz beim Zusammensetzen Ihrer Perlen auf der Platte oder dem Faden zu verwenden.' },
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

export const content: BeadPatternGeneratorLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  bibliographyTitle: 'Handwerks-Bibliographie',
  ui: {
    title: 'Muster Labor',
    subtitle: 'Farbtechnik für Ihre Hände',
    description: 'Vom Foto zum Perlenschema.',
    gridSizeLabel: 'Größe (Breite)',
    colorCountLabel: 'Farben',
    optionsLabel: 'Optionen',
    rulersLabel: 'Lineale',
    symbolsTooltip: 'Überraschungsmuster',
    symbolsLabel: 'Symbole',
    downloadBtn: 'Herunterladen',
    uploadTitle: 'Laden Sie Ihre Vision hoch',
    uploadSubtitle: 'und lassen Sie die digitale Magie wirken',
    paletteTitle: 'Chromatische DNA',
    reuploadBtn: 'Bild ändern',
    tunnelVisionTitle: 'Tunnelblick',
    tunnelVisionSubtitle: 'Ihr Präzisionsassistent Reihe für Reihe.',
    uploadLabel: 'Laden Sie Ihr Foto hoch',
    pixelateBtn: 'Muster generieren',
    faqTitle: 'FAQ',
    bibliographyTitle: 'Referenzen'
  },
  seo: [
    { type: 'title', text: 'Digitale Alchemie: Pixel in greifbare Kunst verwandeln', level: 2 },
    { type: 'paragraph', html: 'Willkommen im <strong>Ultimativen Musterstudio</strong>. Ein <em>chromatisches Intelligenzsystem</em>, entwickelt für Pixel-Art-Architekten, Miyuki-Meister und Kreuzstich-Visionäre. Ihre Brücke zwischen Digitalem und Handwerk.' },
    { type: 'card', icon: 'mdi:grid', title: 'Das intelligente Raster', html: 'Unser Algorithmus für <strong>räumliches Subsampling</strong> "schrumpft" Ihr Bild nicht einfach nur. Er analysiert die visuelle Struktur, um komplexe Pixelgruppen auf einzelne Zellen abzubilden und so die Integrität von Silhouetten und Kanten wie ein erfahrener Illustrator zu bewahren.' },
    { type: 'card', icon: 'mdi:palette', title: 'K Means Farbquantisierung', html: 'Wir implementieren eine Variante des <strong>K-Means-Clustering</strong>-Algorithmus, der mathematisch die "Zentroid"-Töne Ihres Bildes findet. Erstaunliche visuelle Treue mit einer minimalistischen Palette von 12, 24 oder 32 Farben.' },
    { type: 'title', text: 'Meisterschaft in 3 Schritten', level: 3 },
    { type: 'card', icon: 'mdi:image-search', title: 'Die perfekte Auswahl', html: 'Suchen Sie nach <strong>hohem Kontrast</strong>, dramatischer Beleuchtung und ikonischen Formen. Porträts mit klarem Hintergrund, Logos und Vektorgrafiken lassen sich wunderbar umsetzen.' },
    { type: 'card', icon: 'mdi:ruler', title: 'Dimensionale Kalibrierung', html: '<strong>Miyuki Delica:</strong> 50 Perlen ≈ 8 cm · <strong>Hama Midi:</strong> 50 Perlen ≈ 25 cm · <strong>Kreuzstich:</strong> 1 Zelle = 1 Stich.' },
    { type: 'card', icon: 'mdi:eye-check', title: 'Zen Ausführung (Tunnelblick Modus)', html: 'Unser <strong>Tunnelblick</strong>-System fungiert als Ihr persönlicher Assistent, der visuelles Rauschen ausblendet und chirurgisch nur die aktive Reihe hervorhebt. Absolute Konzentration.' },
    { type: 'title', text: 'Unendliche Leinwände', level: 3 },
    { type: 'list', items: [
      '<strong>Textiler Schmuck:</strong> Komplizierte Muster für Webstühle und geometrische Armbänder.',
      '<strong>Kreuzstich:</strong> Moderne Schemata, bereit, Pixel für Pixel gestickt zu werden.',
      '<strong>Mosaike:</strong> Großformatige Wandbilder aus vereinfachten Keramikmosaiksteinen.',
      '<strong>Retro-Gaming:</strong> Authentische 8-Bit-Assets und Sprites in Sekunden.',
    ]},
    { type: 'stats', items: [
      { value: '10–100', label: 'Perlenbreite', icon: 'mdi:arrow-expand-horizontal' },
      { value: '2–32', label: 'Farbpalettenplätze', icon: 'mdi:palette-swatch' },
      { value: 'K-Means', label: 'Quantisierungsalgorithmus', icon: 'mdi:function-variant' },
      { value: 'ZIP', label: 'Exportformat (Muster + Anleitung)', icon: 'mdi:zip-box' },
    ], columns: 4 },
    { type: 'paragraph', html: 'In einer Ära flüchtiger Bildschirme ist das Erschaffen von etwas Physischem ein revolutionärer Akt. Dieses Werkzeug versucht nicht, Kunst zu automatisieren, sondern den <strong>Handwerker zu stärken</strong>. Wir geben Ihnen rechnerische Präzision, damit Ihre Hände bleibende Vermächtnisse schaffen können.' },
  ],
  faq,
  bibliography: [
    { name: 'Scikit-Image: Color Quantization using K-Means', url: 'https://scikit-learn.org/0.23/auto_examples/cluster/plot_color_quantization.html' },
    { name: 'Miyuki Delica Beads Specification', url: 'https://www.miyuki-beads.co.jp/english/seedbeads/delica.html' },
    { name: 'Visgraf Lab: Dithering Algorithms', url: 'https://www.visgraf.impa.br/Courses/ip00/proj/Dithering1/floyd_steinberg_dithering.html' },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
