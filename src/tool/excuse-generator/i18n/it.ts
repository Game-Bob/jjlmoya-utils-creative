import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ExcuseGeneratorLocaleContent } from '../index';

const slug = 'generatore-di-scuse';
const title = 'Generatore di Scuse';
const description = 'Macchina d\'azzardo semantica per liberarsi dagli impegni con stile. Genera istantaneamente scuse surreali e inconfutabili.';

const faq: ExcuseGeneratorLocaleContent['faq'] = [
  {
    question: 'Questo generatore può salvare il mio matrimonio?',
    answer: 'Pur non essendo terapeuti, evitare quella cena con i suoceri usando un\'emergenza tecnica plausibile può ridurre significativamente la tensione. Usare responsabilmente.'
  },
  {
    question: 'Perché frasi così surreali?',
    answer: 'La strategia si basa sulla dissonanza cognitiva. Se dici qualcosa di noioso, è verificabile. Se dici qualcosa di assurdo, la sorpresa blocca la capacità di arrabbiarsi.'
  }
];

const howTo: ExcuseGeneratorLocaleContent['howTo'] = [
  { name: 'Genera', text: 'Clicca sul pulsante genera per creare una nuova scusa.' },
  { name: 'Copia', text: 'Clicca sul pulsante copia per portare la scusa negli appunti.' }
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

export const content: ExcuseGeneratorLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti',
  bibliographyTitle: 'Bibliografia del Tempo Libero',
  ui: {
    title: 'Generatore di Scuse Surreali',
    description: 'Calcolatore di alibi di nuova generazione.',
    subjectLabel: 'Soggetto',
    actionLabel: 'Azione',
    victimLabel: 'Vittima',
    generateBtn: 'GENERA SCUSA',
    copyBtn: 'Copia questa follia',
    copied: 'Copiato!',
    starts: JSON.stringify([
      "Il mio gatto", "Mia nonna", "Il presidente", "Un alieno", "Il mio vicino del 5° piano",
      "Il wifi", "Il mio oroscopo", "Un viaggiatore nel tempo", "La lavatrice", "Il mio frigorifero",
      "Lo spirito del Natale", "La mia ombra", "Un ninja", "La polizia vegana", "Siri",
      "La mia pianta carnivora", "Il fattorino di Amazon", "Il mio clone cattivo", "Un mago", "Godzilla"
    ]),
    middles: JSON.stringify([
      "ha dichiarato guerra a", "ha mangiato", "ha rapito", "ha dato fuoco a",
      "sta organizzando una festa a", "ha vomitato su", "si rifiuta di lasciare",
      "ha hackerato", "ha rubato", "si è innamorato di", "sta meditando su",
      "ha lanciato un incantesimo su", "sta protestando contro", "ha fondato una setta a",
      "sta ballando il samba a", "ha evocato un demone a", "ha bloccato l'accesso a",
      "si è trasformato in oro", "sta cercando di vendere", "ha scritto un libro su"
    ]),
    ends: JSON.stringify([
      "le chiavi di casa mia.", "la mia voglia di vivere.", "la porta del garage.",
      "i miei pantaloni preferiti.", "il router del soggiorno.", "il mio unico paio di scarpe.",
      "le leggi della fisica.", "la mia dignità.", "l'ascensore del palazzo.",
      "il mio account Netflix.", "il mio spazzolino da denti.", "l'atto di proprietà della casa.",
      "la mia collezione di pogs.", "il freno a mano dell'auto.", "il mio desiderio di socializzare.",
      "la mia scorta di caffè.", "il coperchio della toilette.", "il telecomando della TV.",
      "i miei calzini fortunati.", "la civiltà occidentale."
    ]),
    faqTitle: 'FAQ',
    bibliographyTitle: 'Riferimenti'
  },
  seo: [
    { type: 'title', text: 'L\'arte scientifica della scusa perfetta', level: 2 },
    { type: 'paragraph', html: 'Viviamo nell\'era dell\'iperattività. Il telefono vibra, l\'orologio invia notifiche e l\'agenda sociale sembra una partita a Tetris che sta per essere persa. La pressione a dire "sì" a tutto ha creato un\'epidemia di esaurimento sociale.' },
    { type: 'title', text: 'La rinascita di JOMO (Joy of Missing Out)', level: 3 },
    { type: 'paragraph', html: 'Mentre il FOMO (Fear of Missing Out) ha dominato l\'ultimo decennio, gli esperti di benessere digitale ora promuovono la <strong>JOMO: la gioia di perdersi qualcosa</strong>. Non si tratta di isolamento, ma di intenzionalità.' },
    { type: 'tip', title: 'La formula per l\'alibi inconfutabile', html: '<strong>Il soggetto dissociato:</strong> non sei mai tu il colpevole. È "il wifi", "il mio gatto", "l\'universo". Sposta la colpa su un\'entità esterna.<br><strong>L\'azione iperbolica:</strong> la situazione deve essere abbastanza assurda o tecnica affinché nessuno chieda i dettagli.<br><strong>Il blocco fisico:</strong> l\'esito finale deve essere binario: o vado o resto a casa.' },
    { type: 'title', text: 'Breve storia della scusa', level: 3 },
    { type: 'list', items: [
      '<strong>Medioevo:</strong> "Il mio cavallo ha perso un ferro" (un classico intramontabile).',
      '<strong>Rivoluzione industriale:</strong> "La macchina a vapore si è surriscaldata".',
      '<strong>Era digitale:</strong> "La connessione è caduta proprio durante l\'aggiornamento".',
    ]},
    { type: 'proscons', items: [
      { pro: 'Allevia istantaneamente la pressione sociale', con: 'L\'uso eccessivo erode la fiducia' },
      { pro: 'Protegge la tua energia e i tuoi confini', con: 'Può generare sensi di colpa se usato con noncuranza' },
      { pro: 'Il tono creativo e umoristico smorza la tensione', con: 'Non adatto a contesti formali o professionali' },
    ]},
  ],
  faq,
  bibliography: [
    { name: 'Manifesto del Procrastinatore', url: 'https://example.com/manifesto' }
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
