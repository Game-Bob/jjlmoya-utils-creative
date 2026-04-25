import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { DiceRollerLocaleContent } from '../index';

const slug = 'lanciatore-di-dadi';
const title = 'Lanciatore di Dadi';
const description = 'Un simulatore di dadi completo per i tuoi giochi di ruolo e da tavolo. Lanci d4, d6, d8, d10, d12, d20 e d100 con modificatori e cronologia.';

const faq: DiceRollerLocaleContent['faq'] = [
  {
    question: 'Come posso simulare un tiro con vantaggio (D&D)?',
    answer: 'Aggiungi due dadi d20 al sacchetto cliccando due volte sul pulsante d20. Durante il lancio, osserva i due risultati individuali e tieni il più alto. Il totale visualizzato sarà la somma, ma puoi vedere ogni dado separatamente nel dettaglio del risultato.',
  },
  {
    question: 'Cosa significa il colore verde o rosso sui risultati?',
    answer: 'I risultati verdi indicano che il dado ha ottenuto il suo valore massimo possibile (un "critico"). I risultati rossi indicano il valore minimo (un "1", il peggior risultato possibile). Questo permette di individuare critici e fallimenti a colpo d\'occhio.',
  },
  {
    question: 'Posso aggiungere più dadi dello stesso tipo?',
    answer: 'Sì. Ogni clic su un dado lo aggiunge al sacchetto. Se clicchi tre volte sul d6, il sacchetto mostrerà "3d6". Per ridurre il conteggio, clicca sul pulsante "−" che appare accanto a ogni gruppo di dadi nel sacchetto.',
  },
  {
    question: 'I dadi digitali sono casuali come quelli fisici?',
    answer: 'Statisticamente sì. I motori JavaScript moderni utilizzano algoritmi pseudocasuali (xorshift128+) con una distribuzione uniforme di altissima qualità. Un dado fisico reale può avere piccole imperfezioni di fabbricazione che influenzano i risultati; il dado digitale non ha questo problema.',
  },
  {
    question: 'Cos\'è il d100 e come si usa?',
    answer: 'Il d100 (o d%) genera un numero da 1 a 100 ed è usato in sistemi di gioco basati sulla percentuale, come Il Richiamo di Cthulhu o Warhammer Fantasy Roleplay. Rappresenta la "probabilità diretta": se la tua abilità Furtività è del 65%, devi ottenere 65 o meno per avere successo.',
  },
];

const howTo: DiceRollerLocaleContent['howTo'] = [
  { name: 'Componi il pool di dadi', text: 'Clicca sui pulsanti dei dadi (d4, d6, d8...) per aggiungerli al tuo pool. Ogni clic aggiunge un dado del tipo selezionato. Puoi mescolare diversi tipi nello stesso lancio.' },
  { name: 'Regola il modificatore', text: 'Usa i pulsanti "+" e "−" accanto al modificatore per applicare bonus o penalità (come il modificatore di caratteristica in D&D). Il modificatore viene aggiunto automaticamente al totale.' },
  { name: 'Lancia i dadi', text: 'Premi il pulsante "Lancia Dadi". Il pannello a destra mostra il totale finale e il dettaglio di ogni singolo dado, con i critici (massimo) in verde e i fallimenti (minimo) in rosso.' },
  { name: 'Controlla la cronologia', text: 'Ogni lancio viene registrato nella cronologia con la notazione dei dadi utilizzata, il risultato totale e l\'ora esatta. Puoi cancellare la cronologia con il pulsante corrispondente.' },
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

export const content: DiceRollerLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti',
  ui: {
    title: 'Lanciatore di Dadi',
    description: 'Che la fortuna sia con te.',
    rollBtn: 'Lancia Dadi',
    totalLabel: 'Totale',
    historyLabel: 'Cronologia',
    clearHistoryBtn: 'Cancella Cronologia',
    faqTitle: 'FAQ',
    bibliographyTitle: 'Riferimenti',
    addDiceLabel: 'Aggiungi dadi al sacchetto',
    bagLabel: 'Sacchetto dei dadi',
    emptyBagBtn: 'Svuota',
    emptyBagText: 'Clicca sui dadi per aggiungerli',
    modifierLabel: 'Modificatore',
    rollManyLabel: 'Lancia $COUNT dadi',
    rollOneLabel: 'Lancia $COUNT dado',
    preRollText: 'Aggiungi i dadi e lancia',
    emptyHistoryText: 'La cronologia dei lanci apparirà qui'
  },
  seo: [
    { type: 'title', text: 'L\'Arte della Casualità: Storia e Matematica dei Dadi', level: 2 },
    { type: 'paragraph', html: 'I dadi sono tra i più antichi generatori di casualità dell\'umanità. Gli <strong>astragali</strong> — ossa della caviglia di pecore e capre — venivano usati come primitivi dadi a quattro facce già nel 5000 a.C. in Mesopotamia ed Egitto. L\'evoluzione dall\'osso intagliato ai moderni icosaedri in resina epossidica non è solo estetica: è un viaggio attraverso la teoria della probabilità e il design delle meccaniche di gioco.' },
    { type: 'title', text: 'La Famiglia Standard dei Dadi', level: 3 },
    { type: 'paragraph', html: 'Il set di dadi più diffuso nei giochi di ruolo — reso popolare da <strong>Dungeons &amp; Dragons</strong> nel 1974 — consiste dei cinque solidi platonici più due forme aggiuntive: d4 (tetraedro), d6 (cubo), d8 (ottaedro), d10 (trapezoedro pentagonale), d12 (dodecaedro), d20 (icosaedro) e d100 (dado percentuale). Ogni poliedro garantisce una distribuzione uniforme: tutte le facce hanno esattamente la stessa probabilità di uscire.' },
    { type: 'list', items: [
      '<strong>d4 – Tetraedro:</strong> Il più pericoloso se calpestato a piedi nudi. Quattro facce triangolari, 25% di probabilità per faccia. Comunemente usato per il danno dei pugnali o incantesimi di basso livello.',
      '<strong>d6 – Cubo:</strong> Il dado più universale. Presente in tutti i giochi da tavolo sin dal senet egizio. La sua geometria cubica garantisce una perfetta equidistribuzione.',
      '<strong>d8 – Ottaedro:</strong> Il dado della lancia o dell\'ascia da battaglia. Otto facce triangolari equilatere. 12,5% di probabilità per faccia.',
      '<strong>d10 – Trapezoedro Pentagonale:</strong> L\'unico solido non platonico nel set standard. Due facce opposte per ogni "vertice". Essenziale per il d100 (due d10 combinati).',
      '<strong>d12 – Dodecaedro:</strong> Il dado del barbaro. Dodici facce pentagonali. Sottovalutato in molti sistemi, protagonista del Barbaro in D&D 5e.',
      '<strong>d20 – Icosaedro:</strong> Il re dei GDR. Venti facce triangolari. Protagonista del sistema d20: determina il successo o il fallimento di quasi tutte le azioni.',
      '<strong>d100 – Percentuale:</strong> Due d10 combinati (decine + unità). Definisce probabilità precise in sistemi come Il Richiamo di Cthulhu o Warhammer Fantasy.',
    ]},
    { type: 'stats', items: [
      { value: '5000 a.C.', label: 'Primi dadi (astragali)', icon: 'mdi:history' },
      { value: '1974', label: 'D&D rese popolare il set', icon: 'mdi:sword' },
      { value: '7 tipi', label: 'Dadi standard da GDR', icon: 'mdi:dice-multiple' },
      { value: '2¹²⁸', label: 'Periodo casuale JS', icon: 'mdi:function-variant' },
    ], columns: 4 },
    { type: 'title', text: 'Probabilità e Curve di Distribuzione', level: 3 },
    { type: 'paragraph', html: 'Quando lanci un singolo dado, ottieni una <strong>distribuzione uniforme discreta</strong>: ogni risultato ha esattamente la stessa probabilità (1/n). Ma non appena combini più dadi, la magia matematica trasforma quella curva piatta in una <strong>distribuzione normale approssimata</strong>. Ecco perché 2d6 non è uguale a 1d12: con due dadi a sei facce la probabilità di fare 7 è 6/36 ≈ 16,7%, mentre gli estremi (2 e 12) si verificano solo il 2,8% delle volte.' },
    { type: 'tip', title: 'Vantaggio e Svantaggio (D&D 5e)', html: 'La meccanica del <strong>Vantaggio</strong> consiste nel lanciare 2d20 e tenere il risultato più alto. Matematicamente, questo alza la media da 10,5 a circa 13,8. Lo <strong>Svantaggio</strong> fa l\'opposto: prendi il più basso, abbassando la media a circa 7,2. Il nostro lanciatore ti permette di simularlo aggiungendo due d20 al sacchetto e confrontando i risultati individuali.' },
    { type: 'title', text: 'Modificatori: Il Ponte tra Dadi e Personaggio', level: 3 },
    { type: 'paragraph', html: 'Nella maggior parte dei sistemi GDR, il dado non agisce da solo: viene aggiunto o sottratto un <strong>modificatore</strong> che rappresenta le abilità del personaggio. In D&D 5e, un modificatore di Forza di +5 significa che lanci 1d20, aggiungi 5 e controlli il risultato contro la Classe Armatura del nemico. Il nostro lanciatore include un controllo del modificatore per riflettere fedelmente queste meccaniche.' },
    { type: 'tip', title: 'Standard di Notazione dei Dadi', html: 'La notazione <strong>XdY+Z</strong> è lo standard de facto nei giochi di ruolo: X dadi da Y facce con modificatore Z. "3d6+2" significa lanciare tre dadi a sei facce e aggiungere 2 al totale. Il nostro strumento utilizza questa notazione nella cronologia così puoi facilmente condividere o registrare i tuoi lanci.' },
    { type: 'glossary', items: [
      { term: 'Colpo Critico', definition: 'Un tiro del valore massimo su un dado (es. 20 su un d20). Di solito attiva effetti bonus speciali nella maggior parte dei sistemi GDR.' },
      { term: 'Fallimento / 1 Naturale', definition: 'Ottenere il valore minimo (1) su un dado. Spesso risulta in un fallimento drammatico o in una conseguenza negativa.' },
      { term: 'Dice Pool', definition: 'Una collezione di dadi lanciati simultaneamente. Il pool nel nostro strumento mostra ogni tipo di dado raggruppato per quantità (es. 3d6 + 2d8).' },
      { term: 'Modificatore', definition: 'Un numero fisso aggiunto o sottratto dal risultato di un lancio, che rappresenta l\'abilità di un personaggio, il bonus di caratteristica o una penalità situazionale.' },
      { term: 'Tiro Percentuale', definition: 'Un lancio che utilizza due d10 per produrre un risultato da 1 a 100, usato in sistemi basati sulle abilità dove le capacità sono misurate in percentuali.' },
    ]},
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
