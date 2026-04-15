import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SynesthesiaPainterLocaleContent } from '../index';

const slug = 'pittore-di-sinestesia';
const title = 'Pittore di Sinestesia';
const description = 'Visualizza il colore delle parole secondo la sinestesia grafema-colore. Ogni lettera ha il suo colore, trasformando il testo in arte cromatica.';

const faq: SynesthesiaPainterLocaleContent['faq'] = [
  {
    question: 'Tutti i sinesteti vedono gli stessi colori per ogni lettera?',
    answer: 'No. I colori sinestetici sono unici per ogni persona. Esistono tendenze statistiche (la A tende a essere rossa per molti), ma non esistono due sinesteti con la stessa identica tavolozza. Questo strumento utilizza i colori riportati più frequentemente negli studi sulla popolazione, non quelli "corretti".',
  },
  {
    question: 'Posso sviluppare la sinestesia usando questo strumento continuamente?',
    answer: 'Non in senso neurologico stretto. La vera sinestesia è una caratteristica del sistema nervoso, non un\'abilità appresa. Tuttavia, l\'uso ripetuto di associazioni colore-lettera può creare forti memorie associative. Alcuni studi suggeriscono che praticare queste associazioni possa migliorare la memoria del testo.',
  },
  {
    question: 'A cosa serve la modalità "Aura"?',
    answer: 'La modalità Aura simula il modo in cui alcuni sinesteti descrivono di vedere i colori "fluttuare" o "risplendere" attorno alle lettere piuttosto che integrati in esse. Crea un\'esperienza visiva più atmosferica e immersiva, specialmente su uno sfondo scuro.',
  },
  {
    question: 'La modalità "Punti" ha basi scientifiche?',
    answer: 'È un\'astrazione artistica. Riduce il testo alla sua "essenza cromatica" eliminando la forma riconoscibile delle lettere. Il risultato ricorda le visualizzazioni di dati cromatici o i dipinti puntinisti, e permette di vedere la "firma cromatica" di un testo senza che il significato interferisca.',
  },
  {
    question: 'Perché alcune lettere come I e O sono bianche o nere?',
    answer: 'Negli studi sulla sinestesia, le vocali I e O, e la lettera W, sono frequentemente descritte come bianche, trasparenti o nere. Questo strumento adatta quei colori allo sfondo attivo: bianco su sfondo scuro, nero su sfondo chiaro, per garantire sempre la visibilità.',
  },
];

const howTo: SynesthesiaPainterLocaleContent['howTo'] = [
  { name: 'Scrivi un testo', text: 'Clicca sull\'area di scrittura e inizia a digitare. Ogni lettera apparirà colorata secondo la sua associazione sinestetica statistica.' },
  { name: 'Cambia modalità di visualizzazione', text: 'Usa i pulsanti in alto a destra per alternare tra Lettere (testo colorato), Punti (cerchi colorati) e Aura (lettere luminose con aloni cromatici).' },
  { name: 'Esplora diversi testi', text: 'Scrivi nomi, parole in diverse lingue o frasi per scoprire la loro tavolozza cromatica unica. Le parole lunghe creano affascinanti gradienti visivi.' },
  { name: 'Cancella e ricomincia', text: 'Usa il pulsante "Cancella" nella barra inferiore per pulire la tela ed esplorare un nuovo testo.' },
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

export const content: SynesthesiaPainterLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti',
  bibliographyTitle: 'Bibliografia della Mente',
  ui: {
    title: 'Pittore di Sinestesia',
    description: 'Trasforma le tue parole in arte cromatica.',
    modeLetters: 'Lettere',
    modeDots: 'Punti',
    modeAura: 'Aura',
    placeholder: 'Scrivi qui...',
    footerText: 'Digita per scoprire la tua tavolozza di colori personale',
    clearBtn: 'Cancella',
    faqTitle: 'FAQ',
    bibliographyTitle: 'Riferimenti'
  },
  seo: [
    { type: 'title', text: 'Cos\'è la sinestesia grafema colore?', level: 2 },
    { type: 'paragraph', html: 'La <strong>sinestesia</strong> è una condizione neurologica in cui la stimolazione di un senso innesca automaticamente una risposta in un altro. La variante più studiata e diffusa è la <strong>sinestesia grafema-colore</strong>: chi ne è affetto percepisce ogni lettera o numero con un colore intrinseco, costante e vivido. Non è immaginazione o metafora; per un sinesteta, la lettera "A" è rossa nello stesso modo in cui il fuoco è caldo. Questo strumento applica una <em>tavolozza statistica</em> basata sui colori segnalati più frequentemente per ogni grafema negli studi sulla popolazione.' },
    { type: 'title', text: 'Neuroscienze: la teoria della co-attivazione', level: 3 },
    { type: 'paragraph', html: 'Il modello neurologico più ampiamente accettato per la sinestesia grafema-colore è la <strong>co-attivazione</strong>. Le aree della corteccia temporale coinvolte nel riconoscimento delle forme delle lettere (giro fusiforme) sono anatomicamente adiacenti alle regioni che elaborano il colore (area V4). Nelle persone con sinestesia, esiste una maggiore connettività strutturale o funzionale tra queste regioni, per cui riconoscere una lettera attiva anche i neuroni del colore. La ricerca tramite risonanza magnetica funzionale (fMRI) ha confermato che i sinesteti mostrano una reale attivazione in V4 durante la lettura di un testo, anche quando questo è monocromatico.' },
    { type: 'tip', title: 'Le tre modalità di visualizzazione', html: '<strong>Lettere:</strong> il testo originale colorato per grafema. Ideale per vedere la "melodia cromatica" di un testo completo. <strong>Punti:</strong> ogni carattere diventa un cerchio del suo colore; il testo scompare e rimane solo la musica dei colori. <strong>Aura:</strong> le lettere emettono un alone del loro colore, come se il testo risplendesse di energia propria.' },
    { type: 'title', text: 'Statistiche e universali del colore', level: 3 },
    { type: 'paragraph', html: 'Sebbene i colori sinestetici siano unici per ogni individuo, gli studi di Simner et al. (2006) e Eagleman et al. (2007) hanno riscontrato modelli statistici significativi. La vocale <strong>A</strong> tende a essere rossa per i più; la <strong>O</strong> è bianca o nera; la <strong>S</strong> appare in tonalità verde acqua o verde; la <strong>E</strong> appare verde o bianca. È interessante notare che le associazioni colore-lettera sono più coerenti all\'interno di una cultura linguistica che tra culture diverse, suggerendo un ruolo dell\'apprendimento precoce dell\'alfabeto.' },
    { type: 'list', items: [
      '<strong>Prevalenza:</strong> circa il 4% della popolazione presenta sinestesia grafema-colore in una certa misura, sebbene studi più recenti elevino questa cifra al 6-8% includendo le forme subcliniche.',
      '<strong>Pregiudizio di genere:</strong> la sinestesia è da 3 a 6 volte più comune nelle donne che negli uomini, sebbene le cause di questa differenza non siano ancora del tutto spiegate.',
      '<strong>Ereditarietà:</strong> ha una chiara componente genetica: tende a ricorrere nelle famiglie, anche se non sempre con lo stesso tipo di sinestesia.',
      '<strong>Costanza:</strong> a differenza delle associazioni apprese, i colori sinestetici sono straordinariamente stabili nel tempo. Studi di follow-up a 10 anni dimostrano una coerenza superiore al 90% nelle associazioni grafema-colore.',
      '<strong>Sinesteti famosi:</strong> Vladimir Nabokov, Wassily Kandinsky, Nikola Tesla e Billy Joel hanno descritto pubblicamente esperienze sinestetiche che hanno influenzato il loro lavoro.',
    ]},
    { type: 'stats', items: [
      { value: '4-8%', label: 'Popolazione con sinestesia', icon: 'mdi:brain' },
      { value: '90%+', label: 'Coerenza colore in 10 anni', icon: 'mdi:check-circle' },
      { value: '3-6×', label: 'Più comune nelle donne', icon: 'mdi:gender-female' },
      { value: '26+10', label: 'Lettere e cifre colorate', icon: 'mdi:alphabetical' },
    ], columns: 4 },
    { type: 'title', text: 'Arte e sinestesia: quando i sensi si fondono', level: 3 },
    { type: 'paragraph', html: '<strong>Wassily Kandinsky</strong>, fondatore dell\'espressionismo astratto, sperimentò la sinestesia sia grafema-colore che musica-colore: sentiva gli strumenti in colori (il giallo era una tromba, il blu profondo un violoncello) e usò queste percezioni per creare la sua teoria dell\'arte astratta. In musica, <strong>Alexander Scriabin</strong> compose <em>Prometeo: il poema del fuoco</em> con una parte per "tastiera per luce", progettata per proiettare colori corrispondenti a ciascuna nota.' },
    { type: 'tip', title: 'Tavolozza dei colori di questo strumento', html: 'Le assegnazioni dei colori sono ispirate ai dati statistici più comuni nella letteratura scientifica. <strong>A → rosso</strong>, <strong>E → verde</strong>, <strong>I → bianco/nero a seconda dello sfondo</strong>, <strong>O → nero/bianco</strong>, <strong>U → ambra</strong>. Le consonanti seguono modelli meno uniformi, ma viene sempre data priorità al contrasto con lo sfondo per garantire la leggibilità.' },
  ],
  faq,
  bibliography: [
    { name: 'Simner et al. (2006) – Sinestesia: prevalenza di esperienze cross-modali atipiche', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1626536/' },
    { name: 'Eagleman et al. (2007) – Batteria di test standardizzati per lo studio della sinestesia', url: 'https://www.sciencedirect.com/science/article/pii/S0010945207000087' },
    { name: 'Kandinsky, W. – Lo spirituale nell\'arte (1911)', url: 'https://it.wikipedia.org/wiki/Lo_spirituale_nell%27arte' },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
