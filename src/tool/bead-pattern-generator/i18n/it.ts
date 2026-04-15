import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { BeadPatternGeneratorLocaleContent } from '../index';

const slug = 'generatore-schemi-perline';
const title = 'Generatore di Schemi';
const description = 'Crea pixel art e schemi con perline per Miyuki o Hama dalle tue foto. Algoritmo di quantizzazione del colore, modalità visione a tunnel ed esportazione ZIP.';

const faq: BeadPatternGeneratorLocaleContent['faq'] = [
  { question: 'Che cos\'è la quantizzazione del colore negli schemi?', answer: 'È il processo di riduzione delle migliaia di colori di una foto a pochi che corrispondono ai colori reali delle perline disponibili (ad es. Miyuki o Hama). Utilizziamo algoritmi intelligenti per mantenere la somiglianza visiva con la minima tavolozza possibile.' },
  { question: 'Posso usare questo schema per il punto croce?', answer: 'Sì, il generatore crea una griglia perfettamente compatibile con il punto croce. Devi solo scegliere una dimensione della griglia che corrisponda al tuo tessuto (Aida 14, 18, ecc.).' },
  { question: 'Qual è la differenza tra perline Miyuki e Hama?', answer: 'Le perline Miyuki Delica sono perline di vetro molto piccole e precise per gioielleria. Le perline Hama sono di plastica e vengono fuse con il ferro da stiro. Il nostro strumento ti permette di regolare le proporzioni in modo che lo schema non si distorca a seconda del materiale utilizzato.' },
  { question: 'Come funziona l\'algoritmo di dithering?', answer: 'Il dithering crea l\'illusione di più colori mescolando pixel di colori diversi in schemi distanziati. Aiuta le sfumature di colore a sembrare più fluide anche con una tavolozza di perline limitata.' },
];

const howTo: BeadPatternGeneratorLocaleContent['howTo'] = [
  { name: 'Carica un\'immagine nitida', text: 'Seleziona una foto con un buon contrasto e pochi dettagli piccoli affinché lo schema sia più facile da seguire.' },
  { name: 'Regola la dimensione della griglia', text: 'Definisci quanti perline di larghezza e altezza avrà il tuo pezzo finale. Più perline = più dettagli ma maggiore difficoltà.' },
  { name: 'Ottimizza la tavolozza dei colori', text: 'Riduci il numero di colori fino a farli corrispondere alle perline che hai a disposizione nel tuo kit.' },
  { name: 'Esporta lo schema guida', text: 'Genera lo schema finale con i codici colore da usare come riferimento durante l\'assemblaggio delle perline sulla base o sul filo.' },
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
  inLanguage: 'it',
};

export const content: BeadPatternGeneratorLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti',
  bibliographyTitle: 'Bibliografia Artigiana',
  ui: {
    title: 'Laboratorio di Schemi',
    subtitle: 'Ingegneria del colore per le tue mani',
    description: 'Dalla foto allo schema con perline.',
    gridSizeLabel: 'Dimensione (Larghezza)',
    colorCountLabel: 'Colori',
    optionsLabel: 'Opzioni',
    rulersLabel: 'Righelli',
    symbolsTooltip: 'Schema a Sorpresa',
    symbolsLabel: 'Simboli',
    downloadBtn: 'Scarica',
    uploadTitle: 'Carica la Tua Visione',
    uploadSubtitle: 'e lascia che la magia digitale accada',
    paletteTitle: 'DNA Cromatico',
    reuploadBtn: 'Cambia Immagine',
    tunnelVisionTitle: 'Visione a Tunnel',
    tunnelVisionSubtitle: 'Il tuo assistente di precisione riga per riga.',
    uploadLabel: 'Carica la tua foto',
    pixelateBtn: 'Genera Schema',
    faqTitle: 'FAQ',
    bibliographyTitle: 'Riferimenti'
  },
  seo: [
    { type: 'title', text: 'Alchimia Digitale: Trasmutare i Pixel in Arte Tangibile', level: 2 },
    { type: 'paragraph', html: 'Benvenuti nell\'<strong>Ultimate Pattern Studio</strong>. Un <em>motore di intelligenza cromatica</em> progettato per architetti della Pixel Art, maestri Miyuki e visionari del punto croce. Il tuo ponte tra il digitale e il fatto a mano.' },
    { type: 'card', icon: 'mdi:grid', title: 'La Griglia Intelligente', html: 'Il nostro algoritmo di <strong>sottocampionamento spaziale</strong> non si limita a "rimpicciolire" la tua immagine. Analizza la struttura visiva per mappare complessi gruppi di pixel su singole celle, preservando l\'integrità di sagome e bordi come un illustratore esperto.' },
    { type: 'card', icon: 'mdi:palette', title: 'Quantizzazione del colore K Means', html: 'Implementiamo una variante dell\'algoritmo di <strong>K-Means Clustering</strong> che trova matematicamente i toni "centroidi" della tua immagine. Fedeltà visiva sorprendente con una tavolozza minimalista di 12, 24 o 32 colori.' },
    { type: 'title', text: 'Maestria in 3 Passaggi', level: 3 },
    { type: 'card', icon: 'mdi:image-search', title: 'La Selezione Perfetta', html: 'Cerca <strong>alto contrasto</strong>, illuminazione drammatica e forme iconiche. Ritratti con sfondi puliti, loghi e vector art si traducono magnificamente.' },
    { type: 'card', icon: 'mdi:ruler', title: 'Calibrazione Dimensionale', html: '<strong>Miyuki Delica:</strong> 50 perline ≈ 8cm · <strong>Hama Midi:</strong> 50 perline ≈ 25cm · <strong>Punto Croce:</strong> 1 cella = 1 punto.' },
    { type: 'card', icon: 'mdi:eye-check', title: 'Esecuzione Zen (Modalità Visione a Tunnel)', html: 'Il nostro sistema <strong>Visione a Tunnel</strong> funge da assistente personale, attenuando il rumore visivo ed evidenziando chirurgicamente solo la riga attiva. Concentrazione assoluta.' },
    { type: 'title', text: 'Tele Infinite', level: 3 },
    { type: 'list', items: [
      '<strong>Gioielleria Tessile:</strong> Schemi intricati per telai e braccialetti geometrici.',
      '<strong>Punto Croce:</strong> Schemi moderni pronti per essere ricamati pixel per pixel.',
      '<strong>Mosaici:</strong> Murales su larga scala utilizzando tessere di ceramica semplificate.',
      '<strong>Retro Gaming:</strong> Asset e sprite 8-bit autentici in pochi secondi.',
    ]},
    { type: 'stats', items: [
      { value: '10–100', label: 'Range larghezza perline', icon: 'mdi:arrow-expand-horizontal' },
      { value: '2–32', label: 'Slot tavolozza colori', icon: 'mdi:palette-swatch' },
      { value: 'K-Means', label: 'Algoritmo quantizzazione', icon: 'mdi:function-variant' },
      { value: 'ZIP', label: 'Formato esportazione (schema + guida)', icon: 'mdi:zip-box' },
    ], columns: 4 },
    { type: 'paragraph', html: 'In un\'epoca di schermi effimeri, creare qualcosa di fisico è un atto rivoluzionario. Questo strumento non cerca di automatizzare l\'arte, ma di <strong>potenziare l\'artigiano</strong>. Ti diamo precisione computazionale affinché le tue mani possano costruire eredità durature.' },
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
