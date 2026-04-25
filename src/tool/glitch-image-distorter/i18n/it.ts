import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { GlitchImageDistorterLocaleContent } from '../index';

const slug = 'distorsore-immagini-glitch';
const title = 'Distorsore di Immagini Glitch';
const description = 'Trasforma le tue foto in glitch art con separazioni RGB, linee di scansione, pixel sorting e distorsioni animate. Senza Photoshop.';

const faq: GlitchImageDistorterLocaleContent['faq'] = [
  {
    question: 'Cos\'è la glitch art?',
    answer: 'La glitch art è una forma di arte digitale creata manipolando immagini o dati per produrre errori visivi intenzionali. Questi "glitch" generano colori frammentati, forme distorte e pattern imprevedibili che creano un\'estetica di corruzione digitale e caos.',
  },
  {
    question: 'Posso usare le mie immagini?',
    answer: 'Sì! Puoi caricare qualsiasi immagine PNG, JPG o WebP, trascinarla sulla tela o incollarla direttamente dagli appunti con Ctrl+V. Puoi anche usare l\'immagine di esempio.',
  },
  {
    question: 'Cosa fanno i diversi effetti di distorsione?',
    answer: 'La Corruzione separa i canali RGB per un effetto di aberrazione cromatica. L\'Interferenza aggiunge linee di scansione simili ai vecchi monitor con tremolio opzionale. Il Pixel Sorting fa "gocciolare" i pixel luminosi in una direzione. Il Rumore Statico aggiunge la classica neve televisiva.',
  },
  {
    question: 'Posso animare l\'effetto glitch?',
    answer: 'Certamente! La modalità "Animazione Glitch" applica micro-movimenti casuali ai parametri, creando un effetto vibrante che si ripete continuamente. Puoi esportarlo come GIF animata o WebP.',
  },
  {
    question: 'Quali formati posso esportare?',
    answer: 'Puoi scaricare un PNG di alta qualità per immagini statiche, o esportare come GIF o WebP animato se hai attivato la modalità animazione. Perfetto per Instagram, Discord o altre piattaforme.',
  },
  {
    question: 'Cosa fa il pulsante Caos?',
    answer: 'Il pulsante "Caos Casuale" randomizza istantaneamente tutti i valori dei cursori, creando combinazioni di glitch inaspettate e sorprendenti. Ideale per esplorare il potenziale creativo senza regolazioni manuali.',
  },
];

const howTo: GlitchImageDistorterLocaleContent['howTo'] = [
  { name: 'Carica un\'immagine', text: 'Trascina un\'immagine, incollala con Ctrl+V, caricala dal tuo dispositivo o clicca su "Usa immagine di esempio".' },
  { name: 'Regola i cursori', text: 'Usa i controlli di Corruzione, Interferenza, Pixel Sorting e Rumore per applicare diversi effetti. L\'anteprima si aggiorna in tempo reale.' },
  { name: 'Attiva l\'animazione', text: 'Premi il pulsante "Animazione Glitch" per aggiungere vibrazioni e sfarfallii casuali. L\'immagine prenderà vita con un effetto dinamico.' },
  { name: 'Esporta la creazione', text: 'Scarica in PNG per arte statica o esporta in GIF/WebP se l\'animazione è attiva. Condividi la tua glitch art sui social!' },
  { name: 'Sperimenta con il Caos', text: 'Clicca sul pulsante "Caos Casuale" per scoprire automaticamente combinazioni di effetti sorprendenti.' },
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

export const content: GlitchImageDistorterLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti',
  ui: {
    title: 'Glitch Distorter',
    description: 'Crea glitch art in pochi secondi.',
    dragDropText: 'Trascina un\'immagine qui o clicca per caricare',
    pasteHint: 'Suggerimento: Puoi anche incollare un\'immagine con Ctrl+V',
    exampleImageBtn: 'Usa immagine di esempio',
    corruptionLabel: 'Corruzione (Separazione RGB)',
    interferenceLabel: 'Interferenza (Linee)',
    tremorLabel: 'Tremolio',
    pixelSortLabel: 'Pixel Sorting',
    pixelSortDirectionLabel: 'Direzione',
    noiseLabel: 'Rumore Statico',
    animateBtn: 'Animazione Glitch',
    chaosBtn: 'Caos Casuale',
    downloadPngBtn: 'Scarica PNG',
    downloadGifBtn: 'Scarica GIF',
    undoBtn: 'Annulla',
    redoBtn: 'Ripristina',
    footerText: 'Crea arte digitale corrotta in meno di 30 secondi',
    faqTitle: 'FAQ',
    bibliographyTitle: 'Riferimenti'
  },
  seo: [
    { type: 'title', text: 'Cos\'è la Glitch Art?', level: 2 },
    { type: 'paragraph', html: 'La <strong>glitch art</strong> è una pratica creativa che sfrutta intenzionalmente errori digitali, dati corrotti e artefatti visivi per produrre risultati estetici. A differenza dell\'arte tradizionale, che cerca la perfezione, il glitch celebra la bellezza inaspettata del guasto tecnologico — colori frammentati e pattern caotici che emergono dall\'errore.' },
    { type: 'title', text: 'Origini ed Estetica Digitale', level: 3 },
    { type: 'paragraph', html: 'L\'estetica glitch è emersa all\'inizio degli anni 2000, quando gli artisti digitali hanno iniziato a sperimentare con file corrotti e malfunzionamenti hardware. Artisti come <strong>Rosa Menkman</strong> hanno elevato il glitch a forma d\'arte studiando la poetica degli artefatti digitali. L\'estetica trae ispirazione dal degrado VHS, dagli errori di trasmissione e dal "rumore" dei sistemi digitali.' },
    { type: 'title', text: 'Tecniche Chiave di Glitch', level: 3 },
    { type: 'list', items: [
      '<strong>Separazione RGB:</strong> Sfasare i canali rosso, verde e blu per creare aberrazione cromatica.',
      '<strong>Linee di Scansione:</strong> Simulare le linee orizzontali dei vecchi monitor CRT per un effetto retro.',
      '<strong>Pixel Sorting:</strong> Ordinare i pixel per luminosità e spostarli per creare un effetto "sciolto".',
      '<strong>Data Moshing:</strong> Manipolare i dati dei codec video per mescolare i fotogrammi in modo inaspettato.',
      '<strong>Bit Shifting:</strong> Alterare direttamente i dati binari per ottenere distorsioni geometriche drammatiche.',
    ]},
    { type: 'tip', title: 'La Filosofia del Glitch', html: 'La glitch art sfida l\'idea di una rappresentazione digitale "perfetta". Abbracciando l\'errore, mettiamo in discussione l\'affidabilità della tecnologia ed esploriamo come essa influenzi la nostra percezione della realtà. È arte sul fallimento del sistema e sulla bellezza nascosta nel caos.' },
    { type: 'title', text: 'Applicazioni Contemporanee', level: 3 },
    { type: 'paragraph', html: 'Oggi l\'estetica glitch è ovunque: copertine di dischi, videoclip, moda e graphic design. Questo strumento democratizza la creazione di questo stile, permettendo a chiunque di generare opere professionali di corruzione digitale senza profonde conoscenze tecniche.' },
    { type: 'stats', items: [
      { value: '2000s', label: 'Nascita della glitch art', icon: 'mdi:history' },
      { value: '∞', label: 'Combinazioni possibili', icon: 'mdi:shuffle-variant' },
      { value: '<30s', label: 'Tempo di creazione', icon: 'mdi:flash' },
      { value: '3+', label: 'Formati di esportazione', icon: 'mdi:download-multiple' },
    ], columns: 4 },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
