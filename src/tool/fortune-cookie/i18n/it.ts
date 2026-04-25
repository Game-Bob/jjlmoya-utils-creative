import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { FortuneCookieLocaleContent } from '../index';
import { bibliography } from '../bibliography';

const slug = 'biscotto-della-fortuna-online';
const title = 'Biscotto della Fortuna';
const description = 'Controlla il tuo destino quotidiano e scopri i tuoi numeri fortunati. Una previsione al giorno, svelata con un clic.';

const faq: FortuneCookieLocaleContent['faq'] = [
  {
    question: 'Posso aprire più di un biscotto al giorno?',
    answer: 'Il destino parla solo una volta al giorno. Salviamo la tua fortuna sul dispositivo in modo che ti guidi per tutta la giornata.'
  },
  {
    question: 'Le previsioni sono generate casualmente?',
    answer: 'Sì — ogni giorno viene selezionata una previsione casuale che viene salvata localmente. Ognuna delle 25 previsioni ha la stessa probabilità di essere scelta, garantendo varietà nel tempo.'
  }
];

const howTo: FortuneCookieLocaleContent['howTo'] = [
  { name: 'Rompi il biscotto', text: 'Clicca ripetutamente sul biscotto per aprirlo.' },
  { name: 'Leggi la tua fortuna', text: 'Scopri il messaggio nascosto all\'interno e i tuoi numeri fortunati per il giorno.' }
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

export const content: FortuneCookieLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti',
  ui: {
    title: 'Biscotto della Fortuna Online',
    description: 'Il tuo oracolo digitale quotidiano.',
    instruction: 'Premi il biscotto per svelare il tuo destino',
    dailyStatus: 'Il tuo destino è stato svelato per oggi.',
    shareBtn: 'Condividi Saggezza',
    shareTitle: 'Il Mio Biscotto della Fortuna',
    shareText: 'Il destino ha parlato: "$TEXT"\nI miei numeri: $NUMS\n\nScopri la tua fortuna qui:',
    copied: 'Copiato!',
    fortunes: JSON.stringify([
      "La fortuna che cerchi è in un altro biscotto.",
      "Non contare i giorni, rendi i giorni importanti.",
      "Un viaggio di mille miglia comincia con un solo passo.",
      "L'errore è il preambolo della scoperta.",
      "La tua capacità di imparare è la tua risorsa più grande.",
      "Sorridi, l'universo ti sta guardando.",
      "La pazienza è un albero con radici amare ma frutti molto dolci.",
      "Non aver paura di crescere lentamente, temi solo di restare fermo.",
      "Oggi è il domani di cui ti preoccupavi ieri.",
      "La felicità non è qualcosa di pronto. Viene dalle tue stesse azioni.",
      "Se non puoi cambiare la direzione del vento, regola le tue vele.",
      "Ciò che pianti ora, raccoglierai dopo.",
      "La creatività è l'intelligenza che si diverte.",
      "Non cercare errori, cerca soluzioni.",
      "Il tuo atteggiamento, non la tua attitudine, determinerà la tua altezza.",
      "Il successo è la somma di piccoli sforzi ripetuti giorno dopo giorno.",
      "Credi di poterlo fare e sarai a metà strada.",
      "L'unico modo per fare un ottimo lavoro è amare quello che fai.",
      "La vita è per il 10% ciò che ti accade e per il 90% come reagisci.",
      "Sii il cambiamento che vuoi vedere nel mondo.",
      "Il modo migliore per predire il futuro è inventarlo.",
      "La semplicità è la massima sofisticatezza.",
      "Sei il padrone del tuo destino e il capitano della tua anima.",
      "Presto riceverai notizie che cambieranno la tua prospettiva.",
      "Un viaggio inaspettato ti porterà grandi gioie."
    ]),
    faqTitle: 'FAQ',
  },
  seo: [
    { type: 'title', text: 'Il Mistero del Biscotto della Fortuna', level: 2 },
    { type: 'paragraph', html: 'Ti sei mai chiesto da dove provengano questi curiosi biscotti? Sebbene li associamo al cibo cinese, la loro origine è un affascinante viaggio tra il Giappone e gli Stati Uniti. Il biscotto della fortuna così come lo conosciamo oggi è stato probabilmente inventato nella California dell\'inizio del XX secolo, non in Cina, dove sono praticamente sconosciuti.' },
    { type: 'tip', title: 'Come funziona il nostro Oracolo', html: 'Ogni giorno puoi aprire un biscotto. Il sistema salva il tuo destino così lo ricorderai per 24 ore. La fortuna è memorizzata localmente nel tuo browser: completamente privata, nessun server coinvolto. Torna domani per una nuova previsione!' },
    { type: 'title', text: 'La Filosofia degli Oracoli', level: 3 },
    { type: 'paragraph', html: 'Gli esseri umani hanno sempre cercato guida in tempi incerti. Dall\'Oracolo di Delfi all\'I Ching, i sistemi di divinazione svolgono una funzione psicologica costante: ci danno il permesso di <strong>fermarci e riflettere</strong>. Un biscotto della fortuna non predice il futuro: ti spinge a pensarci.' },
    { type: 'list', items: [
      '<strong>Antica Cina:</strong> L\'I Ching (Libro dei Mutamenti, ~1000 a.C.) usava esagrammi per guidare le decisioni e interpretare il destino.',
      '<strong>Grecia Classica:</strong> L\'Oracolo di Delfi attirava sovrani e cittadini con pronunciamenti criptici interpretati come guida divina.',
      '<strong>Giappone Moderno:</strong> I foglietti della fortuna Omikuji nei santuari shintoisti, legati ai rami degli alberi, mescolano il fato con il rito.',
      '<strong>Stati Uniti XX secolo:</strong> I biscotti della fortuna sono emersi nelle comunità nippo-americane prima di diventare sinonimo della cucina sino-americana.',
    ]},
    { type: 'stats', items: [
      { value: '3 miliardi+', label: 'Biscotti fatti ogni anno', icon: 'mdi:cookie' },
      { value: '~1000 a.C.', label: 'Origine dell\'I Ching', icon: 'mdi:book-open-variant' },
      { value: '25', label: 'Fortune in questo oracolo', icon: 'mdi:star-shooting' },
      { value: '1/giorno', label: 'Un destino al giorno', icon: 'mdi:calendar-today' },
    ], columns: 4 },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
