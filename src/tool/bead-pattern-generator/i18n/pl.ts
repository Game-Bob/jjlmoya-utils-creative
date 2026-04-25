import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { BeadPatternGeneratorLocaleContent } from '../index';

const slug = 'generator-wzorow-koralikowych';
const title = 'Generator Wzorów';
const description = 'Twórz pixel art oraz schematy koralikowe dla Miyuki lub Hama ze swoich zdjęć. Algorytm kwantyzacji kolorów, tryb widzenia tunelowego oraz eksport ZIP.';

const faq: BeadPatternGeneratorLocaleContent['faq'] = [
  { question: 'Czym jest kwantyzacja kolorów we wzorach?', answer: 'To proces redukcji tysięcy kolorów na zdjęciu do zaledwie kilku, które odpowiadają rzeczywistym kolorom dostępnych koralików (np. Miyuki lub Hama). Używamy inteligentnych algorytmów, aby zachować wizualne podobieństwo przy użyciu minimalnej palety.' },
  { question: 'Czy mogę użyć tego wzoru do haftu krzyżykowego?', answer: 'Tak, generator tworzy wykres siatki, który jest idealnie kompatybilny z haftem krzyżykowym. Musisz tylko wybrać rozmiar siatki odpowiadający Twojej tkaninie (Aida 14, 18 itd.).' },
  { question: 'Jaka jest różnica między koralikami Miyuki a Hama?', answer: 'Koraliki Miyuki Delica to bardzo małe, precyzyjne koraliki szklane do wyrobu biżuterii. Koraliki Hama są plastikowe i łączy się je za pomocą żelazka. Nasze narzędzie pozwala dostosować proporcje, aby wzór nie uległ zniekształceniu w zależności od użytego materiału.' },
  { question: 'Jak działa algorytm ditheringu (rozproszenia)?', answer: 'Dithering tworzy złudzenie większej liczby kolorów poprzez mieszanie pikseli o różnych barwach w rozproszonych wzorach. Pomaga to w uzyskaniu płynniejszych przejść tonalnych nawet przy ograniczonej palecie koralików.' },
];

const howTo: BeadPatternGeneratorLocaleContent['howTo'] = [
  { name: 'Wgraj wyraźne zdjęcie', text: 'Wybierz zdjęcie o dobrym kontraście i małej liczbie drobnych detali, aby wzór był łatwiejszy do odtworzenia.' },
  { name: 'Dostosuj rozmiar siatki', text: 'Określ szerokość i wysokość gotowej pracy w liczbie koralików. Więcej koralików = więcej detali, ale wyższy poziom trudności.' },
  { name: 'Zoptymalizuj paletę kolorów', text: 'Zmniejsz liczbę kolorów tak, aby odpowiadały koralikom dostępnym w Twoim zestawie kreatywnym.' },
  { name: 'Eksportuj schemat pomocniczy', text: 'Wygeneruj ostateczny wzór z kodami kolorów, który posłuży jako odniesienie podczas układania koralików na podkładce lub nawlekania ich na nitkę.' },
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

export const content: BeadPatternGeneratorLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Najczęściej Zadawane Pytania',
  ui: {
    title: 'Laboratorium Wzorów',
    subtitle: 'Inżynieria kolorów dla Twoich rąk',
    description: 'Od zdjęcia do schematu koralikowego.',
    gridSizeLabel: 'Rozmiar (szerokość)',
    colorCountLabel: 'Kolory',
    optionsLabel: 'Opcje',
    rulersLabel: 'Linijki',
    symbolsTooltip: 'Wzór Niespodzianka',
    symbolsLabel: 'Symbole',
    downloadBtn: 'Pobierz',
    uploadTitle: 'Wgraj Swoją Wizję',
    uploadSubtitle: 'i pozwól zadziać się cyfrowej magii',
    paletteTitle: 'Chromatyczne DNA',
    reuploadBtn: 'Zmień Obraz',
    tunnelVisionTitle: 'Widzenie Tunelowe',
    tunnelVisionSubtitle: 'Twój asystent precyzji rząd po rzędzie.',
    uploadLabel: 'Wgraj swoje zdjęcie',
    pixelateBtn: 'Generuj Wzór',
    faqTitle: 'FAQ',
    bibliographyTitle: 'Źródła'
  },
  seo: [
    { type: 'title', text: 'Cyfrowa Alchemia: Przemień Piksele w Namacalną Sztukę', level: 2 },
    { type: 'paragraph', html: 'Witaj w <strong>Ultimate Pattern Studio</strong>. To <em>silnik inteligencji chromatycznej</em> zaprojektowany dla architektów Pixel Artu, mistrzów Miyuki i wizjonerów haftu krzyżykowego. Twój most między światem cyfrowym a rękodziełem.' },
    { type: 'card', icon: 'mdi:grid', title: 'Inteligentna Siatka', html: 'Nasz algorytm <strong>przestrzennego subsamplingu</strong> nie tylko "zmniejsza" obraz. Analizuje strukturę wizualną, aby odwzorować złożone grupy pikseli na pojedyncze komórki, zachowując integralność sylwetek i krawędzi niczym doświadczony ilustrator.' },
    { type: 'card', icon: 'mdi:palette', title: 'Kwantyzacja Kolorów Metodą K Średnich', html: 'Wdrażamy wariant algorytmu <strong>Grupowania K-Średnich</strong>, który matematycznie znajduje "centroidy" barw Twojego obrazu. Zdumiewająca wierność wizualna przy minimalistycznej palecie 12, 24 lub 32 kolorów.' },
    { type: 'title', text: 'Mistrzostwo w 3 Krokach', level: 3 },
    { type: 'card', icon: 'mdi:image-search', title: 'Idealny Wybór', html: 'Szukaj <strong>wysokiego kontrastu</strong>, dramatycznego oświetlenia i ikonicznych kształtów. Portrety na czystym tle, logo i grafiki wektorowe przekładają się wspaniale.' },
    { type: 'card', icon: 'mdi:ruler', title: 'Kalibracja Wymiarów', html: '<strong>Miyuki Delica:</strong> 50 koralików ≈ 8cm · <strong>Hama Midi:</strong> 50 koralików ≈ 25cm · <strong>Haft Krzyżykowy:</strong> 1 komórka = 1 ścieg.' },
    { type: 'card', icon: 'mdi:eye-check', title: 'Wykonanie Zen (Tryb Widzenia Tunelowego)', html: 'Nasz system <strong>Widzenia Tunelowego</strong> działa jako Twój osobisty asystent, wyciszając szum wizualny i precyzyjnie podświetlając tylko aktywny rząd. Absolutna koncentracja.' },
    { type: 'title', text: 'Nieskończone Płótna', level: 3 },
    { type: 'list', items: [
      '<strong>Biżuteria Tekstylna:</strong> Skomplikowane wzory na krosna i geometryczne bransoletki.',
      '<strong>Haft Krzyżykowy:</strong> Nowoczesne schematy gotowe do wyszywania piksel po pikselu.',
      '<strong>Mozaiki:</strong> Wielkoformatowe murale z uproszczonych tesser ceramicznych.',
      '<strong>Retro Gaming:</strong> Autentyczne 8-bitowe zasoby i sprite\'y w kilka sekund.',
    ]},
    { type: 'stats', items: [
      { value: '10–100', label: 'Zakres szerokości (koraliki)', icon: 'mdi:arrow-expand-horizontal' },
      { value: '2–32', label: 'Liczba pól w palecie', icon: 'mdi:palette-swatch' },
      { value: 'K-Średnich', label: 'Algorytm kwantyzacji', icon: 'mdi:function-variant' },
      { value: 'ZIP', label: 'Format eksportu (wzór + poradnik)', icon: 'mdi:zip-box' },
    ], columns: 4 },
    { type: 'paragraph', html: 'W erze efemerycznych ekranów, tworzenie czegoś fizycznego jest aktem rewolucyjnym. To narzędzie nie dąży do zautomatyzowania sztuki, ale do <strong>wzmocnienia rzemieślnika</strong>. Dajemy Ci obliczeniową precyzję, aby Twoje ręce mogły budować trwałe dziedzictwo.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
