import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ZalgoGeneratorLocaleContent } from '../index';

const slug = 'generatore-zalgo';
const title = 'Generatore Zalgo';
const description = 'Corrompi i tuoi messaggi con caratteri Unicode a cascata. Regola l\'intensità e la direzione dell\'effetto glitch.';

const faq: ZalgoGeneratorLocaleContent['faq'] = [
  { question: 'Cos\'è il testo Zalgo?', answer: 'È un tipo di testo che utilizza eccessivamente i caratteri di combinazione Unicode (diacritici). Quando impilati verticalmente, questi caratteri "traboccano" dalla loro linea originale, creando un effetto visivo di corruzione, disordine o orrore popolare nella cultura di Internet.' },
  { question: 'Perché il testo Zalgo sembra così strano?', answer: 'Sfrutta una funzione dello standard Unicode che consente l\'aggiunta di segni sopra, sotto o attraverso una lettera di base. Poiché non esiste un limite rigoroso al numero di segni che possono essere aggiunti, il testo può "invadere" le righe superiori o inferiori.' },
  { question: 'Posso usare questo testo sui social media?', answer: 'Sì, la maggior parte delle piattaforme moderne (Instagram, Twitter, Discord) supporta Unicode. Tuttavia, alcune reti o dispositivi potrebbero filtrare o troncare i caratteri in eccesso ad intensità molto elevate per mantenere la leggibilità dell\'interfaccia.' },
  { question: 'Come posso rimuovere l\'effetto Zalgo dal testo?', answer: 'Per pulire il testo corrotto, puoi usare la normalizzazione delle stringhe JavaScript o semplicemente incollarlo in un editor di testo di base che accetti solo testo normale. Il nostro strumento è puramente creativo e non danneggia il contenuto originale.' },
];

const howTo: ZalgoGeneratorLocaleContent['howTo'] = [
  { name: 'Scrivi il messaggio base', text: 'Inserisci il testo che vuoi "corrompere" nella casella di testo principale.' },
  { name: 'Regola l\'intensità del caos', text: 'Sposta il cursore per definire quanti caratteri di combinazione impilare. Maggiore intensità = più difficile da leggere.' },
  { name: 'Seleziona la direzione', text: 'Scegli se la corruzione deve crescere verso l\'alto, verso il basso o in tutte le direzioni contemporaneamente.' },
  { name: 'Copia il risultato', text: 'Clicca sul pulsante copia. Il testo risultante include tutti i byte invisibili necessari per mantenere l\'effetto glitch.' },
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

export const content: ZalgoGeneratorLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti',
  bibliographyTitle: 'Bibliografia del Caos',
  ui: {
    title: 'Generatore Zalgo',
    description: 'T̴u̶t̸t̶o̸ ̵è̵ ̸c̸o̸r̶r̶o̸t̷t̶o̷',
    inputPlaceholder: 'Scrivi qui il tuo messaggio normale...',
    intensityLabel: 'Livello di Corruzione',
    outputLabel: 'Risultato Corrotto',
    copyBtn: 'Copia il Caos',
    copied: 'Copiato!',
    faqTitle: 'FAQ',
    bibliographyTitle: 'Riferimenti',
    configTitle: 'Configurazione',
    intensity: 'Intensità',
    upLabel: 'Corruzione Superiore',
    midLabel: 'Rumore Centrale',
    downLabel: 'Corruzione Inferiore',
    resetBtn: 'Resetta Valori',
    warningText: 'ATTENZIONE: Il testo Zalgo utilizza caratteri Unicode combinati che possono traboccare visivamente dai contenitori. Usa con cautela sui social media.',
    previewLabel: 'Anteprima in Tempo Reale',
    emptyLabel: 'Vuoto',
    charLabel: 'CARATTERI',
    noteText: 'Nota: alcuni browser potrebbero limitare la visualizzazione dei caratteri combinati'
  },
  seo: [
    { type: 'title', text: 'Cos\'è il testo Zalgo e come funziona la corruzione visiva?', level: 2 },
    { type: 'paragraph', html: 'Il testo Zalgo è una forma di manipolazione tipografica che sfrutta una caratteristica specifica dello standard Unicode: i <strong>caratteri di combinazione</strong>. A differenza dei caratteri normali, questi diacritici non occupano spazio orizzontale: si impilano verticalmente sopra la lettera di base, creando quell\'estetica di "caos digitale" o "orrore cosmico" così popolare nella cultura di Internet.' },
    { type: 'title', text: 'Anatomia del processo', level: 3 },
    { type: 'paragraph', html: 'Il nostro generatore elabora ogni carattere in modo indipendente, iniettando raffiche casuali di code point Unicode in tre vettori distinti: <strong>superiore</strong> (diacritici che si impilano sopra), <strong>centrale</strong> (che attraversano la lettera) e <strong>inferiore</strong> (che pendono sotto).' },
    { type: 'tip', title: 'Algoritmo di corruzione', html: 'Per ogni carattere di base, viene calcolato un <code>conteggio = intensità × 30</code>. Vengono aggiunti altrettanti diacritici casuali in ogni vettore. A un\'intensità di 1,5 puoi ottenere fino a 45 caratteri di combinazione per lettera.' },
    { type: 'title', text: 'Etichetta e applicazioni', level: 3 },
    { type: 'list', items: [
      '<strong>Social Media:</strong> attira l\'attenzione su Instagram o TikTok. Perfetto per bio che cercano di rompere con le convenzioni.',
      '<strong>Narrativa Horror:</strong> drammatizza narrazioni di finzione, creepypasta o simulazioni di sistemi compromessi.',
      '<strong>Accessibilità:</strong> attenzione — il testo Zalgo non è leggibile dagli screen reader. Usalo solo come decorazione visiva, mai per contenuti critici.',
      '<strong>SEO:</strong> non usare mai Zalgo nelle parole chiave principali (H1, meta titoli). I bot di indicizzazione potrebbero non riuscire a normalizzare questi caratteri.',
    ]},
    { type: 'title', text: 'L\'origine: da Something Awful alla Glitch Art', level: 3 },
    { type: 'paragraph', html: 'Zalgo non è nato come generatore, ma come intervento su strisce a fumetti classiche. L\'utente Shmorky, a metà degli anni 2000, iniziò a deformare personaggi come Nancy o Archie, aggiungendo macchie e distorsioni. La frase <strong>"He comes"</strong> (Egli arriva) ha segnato il destino di queste opere, annunciando l\'arrivo di un\'entità che divora la realtà.' },
    { type: 'glossary', items: [
      { term: 'Carattere di combinazione', definition: 'Un code point Unicode progettato per essere posizionato sopra, sotto o attraverso un carattere di base. Usato legittimamente in lingue come l\'arabo, il vietnamita e l\'hindi.' },
      { term: 'Diacritico', definition: 'Un segno aggiunto a una lettera base per modificarne la pronuncia o il significato. Zalgo ne abusa per creare un traboccamento visivo.' },
      { term: 'Blocco Unicode', definition: 'Un intervallo contiguo di code point Unicode. I caratteri Zalgo provengono principalmente dal blocco "Combining Diacritical Marks" (U+0300–U+036F).' },
      { term: 'Glitch Art', definition: 'Un\'estetica che incorpora o simula intenzionalmente errori, artefatti e corruzioni nei media digitali come tecnica espressiva.' },
    ]},
  ],
  faq,
  bibliography: [
    { name: 'Standard Unicode - Caratteri di combinazione (inglese)', url: 'https://www.unicode.org/standard/principles.html#Combining_Characters' },
    { name: 'Il fenomeno del testo Zalgo (inglese)', url: 'https://knowyourmeme.com/memes/zalgo' },
    { name: 'MDN - Normalizzazione delle stringhe', url: 'https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Global_Objects/String/normalize' },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
