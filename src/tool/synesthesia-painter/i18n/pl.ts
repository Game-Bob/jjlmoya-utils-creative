import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SynesthesiaPainterLocaleContent } from '../index';

const slug = 'malarz-synestezji';
const title = 'Malarz Synestezji';
const description = 'Wizualizuj kolor słów zgodnie z synestezją grafem-kolor. Każda litera ma swój własny kolor, zmieniając tekst w sztukę chromatyczną.';

const faq: SynesthesiaPainterLocaleContent['faq'] = [
  {
    question: 'Czy wszyscy synestetycy widzą te same kolory dla każdej litery?',
    answer: 'Nie. Kolory synestetyczne są unikalne dla każdej osoby. Istnieją tendencje statystyczne (A dla wielu osób bywa czerwone), ale nie ma dwóch synestetyków o dokładnie tej samej palecie. To narzędzie wykorzystuje kolory najczęściej zgłaszane w badaniach populacyjnych, a nie te „jedyne słuszne”.',
  },
  {
    question: 'Czy mogę rozwinąć synestezję poprzez ciągłe używanie tego narzędzia?',
    answer: 'Nie w ścisłym sensie neurologicznym. Prawdziwa synestezja jest cechą układu nerwowego, a nie wyuczoną umiejętnością. Jednak powtarzanie skojarzeń kolor-litera może stworzyć silne wspomnienia asocjacyjne. Niektóre badania sugerują, że ćwiczenie tych skojarzeń może poprawić pamięć tekstową.',
  },
  {
    question: 'Do czego służy tryb „Aura”?',
    answer: 'Tryb Aura symuluje sposób, w jaki niektórzy synestetycy opisują widzenie kolorów „unoszących się” lub „świecących” wokół liter, a nie zintegrowanych z nimi. Tworzy to bardziej nastrojowe i immersyjne doświadczenie wizualne, szczególnie na ciemnym tle.',
  },
  {
    question: 'Czy tryb „Kropki” ma jakieś podstawy naukowe?',
    answer: 'Jest to abstrakcja artystyczna. Redukuje tekst do jego „chromatycznej esencji” poprzez wyeliminowanie rozpoznawalnego kształtu liter. Wynik przypomina wizualizacje danych chromatycznych lub obrazy puentylistyczne i pozwala zobaczyć „sygnaturę kolorystyczną” tekstu bez ingerencji znaczenia.',
  },
  {
    question: 'Dlaczego niektóre litery, takie jak I i O, są białe lub czarne?',
    answer: 'W badaniach nad synestezją samogłoski I i O oraz litera W są często opisywane jako białe, przezroczyste lub czarne. To narzędzie dostosowuje te kolory do aktywnego tła: białe na ciemnym tle, czarne na jasnym tle, aby zawsze zagwarantować widoczność.',
  },
];

const howTo: SynesthesiaPainterLocaleContent['howTo'] = [
  { name: 'Napisz tekst', text: 'Kliknij obszar pisania i zacznij pisać. Każda litera pojawi się w kolorze zgodnym z jej statystycznym skojarzeniem synestetycznym.' },
  { name: 'Zmień tryb wizualizacji', text: 'Użyj przycisków w prawym górnym rogu, aby przełączać się między Literami (kolorowy tekst), Kropkami (kolorowe kółka) i Aurą (świecące litery z chromatycznymi aureolami).' },
  { name: 'Odkrywaj różne teksty', text: 'Pisz imiona, słowa w różnych językach lub całe zdania, aby odkryć ich unikalną paletę chromatyczną. Długie słowa tworzą fascynujące gradienty wizualne.' },
  { name: 'Wyczyść i zacznij od nowa', text: 'Użyj przycisku „Wyczyść” na dolnym pasku, aby opróżnić płótno i zbadać nowy tekst.' },
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
  inLanguage: 'pl',
};

export const content: SynesthesiaPainterLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Najczęściej Zadawane Pytania',
  bibliographyTitle: 'Bibliografia Umysłu',
  ui: {
    title: 'Malarz Synestezji',
    description: 'Zmień swoje słowa w sztukę chromatyczną.',
    modeLetters: 'Litery',
    modeDots: 'Kropki',
    modeAura: 'Aura',
    placeholder: 'Wpisz tutaj...',
    footerText: 'Pisz, aby odkryć swoją osobistą paletę kolorów',
    clearBtn: 'Wyczyść',
    faqTitle: 'FAQ',
    bibliographyTitle: 'Źródła'
  },
  seo: [
    { type: 'title', text: 'Czym jest synestezja grafem-kolor?', level: 2 },
    { type: 'paragraph', html: '<strong>Synestezja</strong> to stan neurologiczny, w którym stymulacja jednego zmysłu automatycznie wywołuje reakcję w innym. Najlepiej zbadanym i rozpowszechnionym wariantem jest <strong>synestezja grafem-kolor</strong>: osoby ją posiadające postrzegają każdą literę lub cyfrę z wewnętrznym, stałym i żywym kolorem. To nie jest wyobraźnia ani metafora; dla synestetyka litera „A” jest czerwona w taki sam sposób, w jaki ogień jest gorący. To narzędzie stosuje <em>paletę statystyczną</em> opartą na kolorach najczęściej zgłaszanych dla każdego grafemu w badaniach populacyjnych.' },
    { type: 'title', text: 'Neurobiologia: Teoria aktywacji krzyżowej', level: 3 },
    { type: 'paragraph', html: 'Najszerzej akceptowanym modelem neurologicznym dla synestezji grafem-kolor jest <strong>aktywacja krzyżowa</strong>. Obszary kory skroniowej zaangażowane w rozpoznawanie kształtów liter (zakręt wrzecionowaty) są anatomicznie sąsiadujące z regionami przetwarzającymi kolory (obszar V4). U osób z synestezją występuje większa łączność strukturalna lub funkcjonalna między tymi regionami, więc rozpoznanie litery aktywuje również neurony koloru. Badania za pomocą funkcjonalnego rezonansu magnetycznego (fMRI) potwierdziły, że synestetycy wykazują rzeczywistą aktywację w obszarze V4 podczas czytania tekstu, nawet jeśli jest on monochromatyczny.' },
    { type: 'tip', title: 'Trzy tryby wizualizacji', html: '<strong>Litery:</strong> Oryginalny tekst pokolorowany według grafemów. Idealny do zobaczenia „chromatycznej melodii” pełnego tekstu. <strong>Kropki:</strong> Każdy znak staje się kółkiem w swoim kolorze; tekst znika i pozostaje tylko muzyka kolorów. <strong>Aura:</strong> Litery emitują aureolę swojego koloru, jakby tekst świecił własną energią.' },
    { type: 'title', text: 'Statystyka i uniwersalność kolorów', level: 3 },
    { type: 'paragraph', html: 'Chociaż kolory synestetyczne są unikalne dla każdego człowieka, badania Simnera i wsp. (2006) oraz Eaglemana i wsp. (2007) wykazały istotne wzorce statystyczne. Samogłoska <strong>A</strong> u większości osób ma tendencję do bycia czerwoną; <strong>O</strong> jest białe lub czarne; <strong>S</strong> pojawia się w odcieniach morskich lub zielonych; <strong>E</strong> jawi się jako zielone lub białe. Co ciekawe, skojarzenia kolor-litera są bardziej spójne w obrębie danej kultury językowej niż między różnymi kulturami, co sugeruje rolę wczesnej nauki alfabetu.' },
    { type: 'list', items: [
      '<strong>Prewalencja:</strong> Około 4% populacji posiada synestezję grafem-kolor w pewnym stopniu, choć nowsze badania podnoszą tę liczbę do 6–8%, gdy uwzględni się formy subkliniczne.',
      '<strong>Uwarunkowania płciowe:</strong> Synestezja występuje od 3 do 6 razy częściej u kobiet niż u mężczyzn, choć przyczyny tej różnicy nie są jeszcze w pełni wyjaśnione.',
      '<strong>Dziedziczność:</strong> Ma wyraźny komponent genetyczny: wykazuje tendencję do występowania rodzinnego, choć nie zawsze z tym samym typem synestezji.',
      '<strong>Stabilność:</strong> W przeciwieństwie do wyuczonych skojarzeń, kolory synestetyczne są niezwykle stabilne w czasie. Badania po 10 latach wykazują ponad 90% spójności w skojarzeniach grafem-kolor.',
      '<strong>Słynni synestetycy:</strong> Władimir Nabokov, Wasilij Kandinsky, Nikola Tesla i Billy Joel publicznie opisywali doświadczenia synestetyczne, które wpłynęły na ich twórczość.',
    ]},
    { type: 'stats', items: [
      { value: '4–8%', label: 'Populacji z synestezją', icon: 'mdi:brain' },
      { value: '90%+', label: 'Stabilność koloru po 10 latach', icon: 'mdi:check-circle' },
      { value: '3–6×', label: 'Częstsza u kobiet', icon: 'mdi:gender-female' },
      { value: '26+10', label: 'Kolorowe litery i cyfry', icon: 'mdi:alphabetical' },
    ], columns: 4 },
    { type: 'title', text: 'Sztuka i synestezja: Kiedy zmysły się łączą', level: 3 },
    { type: 'paragraph', html: '<strong>Wassily Kandinsky</strong>, prekursor abstrakcjonizmu, doświadczał synestezji zarówno grafem-kolor, jak i muzyka-kolor: słyszał instrumenty w kolorach (żółty był trąbką, głęboki błękit wiolonczelą) i wykorzystał te percepcje do stworzenia swojej teorii sztuki abstrakcyjnej. W muzyce <strong>Aleksander Skriabin</strong> skomponował <em>Prometeusza: Poemat ognia</em> z partią na „tastiera per luce” (klawiaturę świetlną), zaprojektowaną do rzucania kolorów odpowiadających każdemu dźwiękowi.' },
    { type: 'tip', title: 'Paleta kolorów tego narzędzia', html: 'Przypisywanie kolorów inspirowane jest najczęstszymi danymi statystycznymi w literaturze naukowej. <strong>A → czerwony</strong>, <strong>E → zielony</strong>, <strong>I → biały/czarny w zależności od tła</strong>, <strong>O → czarny/biały</strong>, <strong>U → bursztynowy</strong>. Spółgłoski podlegają mniej jednolitym wzorcom, ale kontrast z tłem jest zawsze traktowany priorytetowo, aby zagwarantować czytelność.' },
  ],
  faq,
  bibliography: [
    { name: 'Simner et al. (2006) – Synaesthesia: The prevalence of atypical cross-modal experiences', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1626536/' },
    { name: 'Eagleman et al. (2007) – A standardized test battery for the study of synesthesia', url: 'https://www.sciencedirect.com/science/article/pii/S0010945207000087' },
    { name: 'Kandinsky, W. – O duchowości w sztuce (1911)', url: 'https://pl.wikipedia.org/wiki/Wassily_Kandinsky' },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
