import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { GlitchImageDistorterLocaleContent } from '../index';

const slug = 'deformator-obrazow-glitch';
const title = 'Deformator Obrazów Glitch';
const description = 'Przekształć zdjęcia w glitch art dzięki separacji RGB, liniom skanowania, sortowaniu pikseli i animowanym zniekształceniom. Bez Photoshopa.';

const faq: GlitchImageDistorterLocaleContent['faq'] = [
  {
    question: 'Co to jest glitch art?',
    answer: 'Glitch art to forma sztuki cyfrowej powstała poprzez manipulowanie obrazami lub danymi w celu uzyskania zamierzonych błędów wizualnych. Te "glitche" skutkują pofragmentowanymi kolorami, zniekształconymi kształtami i nieprzewidywalnymi wzorami, które tworzą estetykę cyfrowej korupcji i chaosu.',
  },
  {
    question: 'Czy mogę używać własnych zdjęć?',
    answer: 'Tak! Możesz przesłać dowolny obraz PNG, JPG lub WebP, przeciągnąć go na płótno lub wkleić bezpośrednio ze schowka za pomocą Ctrl+V. Możesz także skorzystać z obrazu przykładowego.',
  },
  {
    question: 'Co robią poszczególne efekty zniekształceń?',
    answer: 'Korupcja rozdziela kanały RGB dla efektu aberracji chromatycznej. Interferencja dodaje linie skanowania przypominające stare monitory z opcjonalnym drżeniem. Sortowanie pikseli sprawia, że jasne piksele "spływają" w wybranym kierunku. Szum statyczny dodaje klasyczny śnieg telewizyjny.',
  },
  {
    question: 'Czy mogę animować efekt glitch?',
    answer: 'Oczywiście! Tryb "Animacja Glitch" nakłada mikro-losowe ruchy na parametry, tworząc wibrujący, żywy efekt, który zapętla się w nieskończoność. Możesz to wyeksportować jako animowany GIF lub WebP.',
  },
  {
    question: 'Jakie formaty mogę eksportować?',
    answer: 'Możesz pobrać wysokiej jakości plik PNG dla obrazów statycznych lub wyeksportować jako animowany GIF lub WebP, jeśli włączyłeś tryb animacji. Idealne na Instagram, Discord i inne platformy.',
  },
  {
    question: 'Do czego służy przycisk Chaos?',
    answer: 'Przycisk "Losowy Chaos" natychmiast zmienia wszystkie wartości suwaków, generując nieoczekiwane i często zaskakujące kombinacje glitchy. To doskonałe narzędzie do odkrywania potencjału kreatywnego bez ręcznych ustawień.',
  },
];

const howTo: GlitchImageDistorterLocaleContent['howTo'] = [
  { name: 'Załaduj obraz', text: 'Przeciągnij obraz na płótno, wklej za pomocą Ctrl+V, prześlij z urządzenia lub kliknij "Użyj obrazu przykładowego".' },
  { name: 'Dostosuj suwaki', text: 'Użyj suwaków Korupcji, Interferencji, Sortowania pikseli i Szumu, aby zastosować efekty. Podgląd aktualizuje się w czasie rzeczywistym.' },
  { name: 'Włącz animację', text: 'Kliknij przycisk "Animacja Glitch", aby dodać wibracje i migotanie. Obraz ożyje dzięki dynamicznemu efektowi glitch.' },
  { name: 'Eksportuj dzieło', text: 'Pobierz jako PNG dla sztuki statycznej lub wyeksportuj jako GIF/WebP, jeśli animacja jest aktywna. Podziel się swoją twórczością w mediach społecznościowych!' },
  { name: 'Eksperymentuj z Chaosem', text: 'Kliknij przycisk "Losowy Chaos", aby automatycznie odkryć zaskakujące kombinacje efektów.' },
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

export const content: GlitchImageDistorterLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Często Zadawane Pytania',
  ui: {
    title: 'Glitch Distorter',
    description: 'Twórz glitch art w kilka sekund.',
    dragDropText: 'Przeciągnij obraz tutaj lub kliknij, aby przesłać',
    pasteHint: 'Wskazówka: Możesz też wkleić obraz za pomocą Ctrl+V',
    exampleImageBtn: 'Użyj obrazu przykładowego',
    corruptionLabel: 'Korupcja (Separacja RGB)',
    interferenceLabel: 'Interferencja (Linie)',
    tremorLabel: 'Drżenie',
    pixelSortLabel: 'Sortowanie Pikseli',
    pixelSortDirectionLabel: 'Kierunek',
    noiseLabel: 'Szum Statyczny',
    animateBtn: 'Animacja Glitch',
    chaosBtn: 'Losowy Chaos',
    downloadPngBtn: 'Pobierz PNG',
    downloadGifBtn: 'Pobierz GIF',
    undoBtn: 'Cofnij',
    redoBtn: 'Ponów',
    footerText: 'Twórz uszkodzoną sztukę cyfrową w mniej niż 30 sekund',
    faqTitle: 'FAQ',
    bibliographyTitle: 'Referencje'
  },
  seo: [
    { type: 'title', text: 'Co to jest Glitch Art?', level: 2 },
    { type: 'paragraph', html: '<strong>Glitch art</strong> to praktyka kreatywna celowo wykorzystująca błędy cyfrowe, uszkodzone dane i artefakty wizualne do tworzenia efektów estetycznych. W przeciwieństwie do tradycyjnej sztuki dążącej do perfekcji, glitch celebruje nieoczekiwane piękno technologicznej awarii — pofragmentowane kolory i chaotyczne wzory wyłaniające się z błędu.' },
    { type: 'title', text: 'Pochodzenie i Estetyka Cyfrowa', level: 3 },
    { type: 'paragraph', html: 'Estetyka glitch wyłoniła się na początku XXI wieku, gdy artyści cyfrowi zaczęli eksperymentować z uszkodzonymi plikami i awariami sprzętu. Artyści tacy jak <strong>Rosa Menkman</strong> podnieśli glitch do rangi sztuki pięknej, badając poetykę cyfrowych artefaktów. Estetyka czerpie z degradacji kaset VHS, błędów transmisji i widocznego "szumu" systemów cyfrowych.' },
    { type: 'title', text: 'Kluczowe Techniki Glitch', level: 3 },
    { type: 'list', items: [
      '<strong>Separacja RGB:</strong> Przesunięcie kanałów czerwonego, zielonego i niebieskiego w celu uzyskania aberracji chromatycznej.',
      '<strong>Linie skanowania:</strong> Symulacja poziomych linii starych monitorów CRT dla efektu retro.',
      '<strong>Sortowanie pikseli:</strong> Porządkowanie pikseli według jasności i ich przesuwanie, co daje efekt "topnienia".',
      '<strong>Data Moshing:</strong> Manipulowanie danymi kodeków wideo w celu nieoczekiwanego mieszania klatek.',
      '<strong>Bit Shifting:</strong> Bezpośrednia zmiana danych binarnych skutkująca dramatycznymi zmianami kolorów.',
    ]},
    { type: 'tip', title: 'Filozofia Glitcha', html: 'Glitch art rzuca wyzwanie idei "idealnej" reprezentacji cyfrowej. Akceptując błąd, kwestionujemy niezawodność technologii i badamy, jak pośredniczy ona w naszym postrzeganiu rzeczywistości. To sztuka o awarii systemu i pięknie ukrytym w chaosie.' },
    { type: 'title', text: 'Współczesne Zastosowania', level: 3 },
    { type: 'paragraph', html: 'Dziś estetyka glitch jest wszędzie: na okładkach płyt, w teledyskach, modzie i projektowaniu graficznym. To narzędzie demokratyzuje tworzenie tego stylu, pozwalając każdemu generować profesjonalne efekty cyfrowej korupcji bez głębokiej wiedzy technicznej.' },
    { type: 'stats', items: [
      { value: '2000s', label: 'Pojawienie się glitch artu', icon: 'mdi:history' },
      { value: '∞', label: 'Możliwe kombinacje', icon: 'mdi:shuffle-variant' },
      { value: '<30s', label: 'Czas tworzenia', icon: 'mdi:flash' },
      { value: '3+', label: 'Formaty eksportu', icon: 'mdi:download-multiple' },
    ], columns: 4 },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
