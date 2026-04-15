import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ZalgoGeneratorLocaleContent } from '../index';

const slug = 'generator-zalgo';
const title = 'Generator Zalgo';
const description = 'Skorumpuj swoje wiadomości kaskadowymi, przelewającymi się znakami Unicode. Dostosuj intensywność i kierunek efektu glitch.';

const faq: ZalgoGeneratorLocaleContent['faq'] = [
  { question: 'Co to jest tekst Zalgo?', answer: 'Jest to rodzaj tekstu, który w nadmiarze wykorzystuje znaki łączące Unicode (diakrytyki). Gdy są układane pionowo, znaki te „przelewają się” poza swoją oryginalną linię, tworząc wizualny efekt korupcji, nieładu lub horroru, popularny w kulturze internetowej.' },
  { question: 'Dlaczego tekst Zalgo wygląda tak dziwnie?', answer: 'Wykorzystuje on funkcję standardu Unicode, która pozwala na dodawanie znaków nad, pod lub przez literę bazową. Ponieważ nie ma ścisłego limitu liczby znaków, które można dodać, tekst może „najeżdżać” na linie powyżej lub poniżej.' },
  { question: 'Czy mogę używać tego tekstu w mediach społecznościowych?', answer: 'Tak, większość nowoczesnych platform (Instagram, Twitter, Discord) obsługuje Unicode. Jednak niektóre sieci lub urządzenia mogą filtrować lub ucinać nadmiar znaków przy bardzo wysokiej intensywności, aby zachować czytelność interfejsu.' },
  { question: 'Jak mogę usunąć efekt Zalgo z tekstu?', answer: 'Aby wyczyścić skorumpowany tekst, możesz użyć normalizacji ciągów znaków w JavaScript lub po prostu wkleić go do podstawowego edytora tekstu, który akceptuje tylko czysty tekst. Nasze narzędzie ma charakter czysto kreatywny i nie uszkadza oryginalnej zawartości.' },
];

const howTo: ZalgoGeneratorLocaleContent['howTo'] = [
  { name: 'Napisz wiadomość bazową', text: 'Wpisz tekst, który chcesz „skorumpować”, w głównym polu tekstowym.' },
  { name: 'Dostosuj intensywność chaosu', text: 'Przesuń suwak, aby określić, ile znaków łączących ma zostać nałożonych. Wyższa intensywność = trudniejszy odczyt.' },
  { name: 'Wybierz kierunek przelewania', text: 'Wybierz, czy korupcja ma rosnąć w górę, w dół, czy we wszystkich kierunkach jednocześnie.' },
  { name: 'Skopiuj wynik', text: 'Kliknij przycisk kopiowania. Wynikowy tekst zawiera wszystkie niewidoczne bajty potrzebne do utrzymania efektu glitch.' },
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

export const content: ZalgoGeneratorLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Najczęściej zadawane pytania',
  bibliographyTitle: 'Bibliografia chaosu',
  ui: {
    title: 'Generator Zalgo',
    description: 'W̵s̸z̷y̷s̵t̶k̵o̷ ̸j̸e̷s̵t̵ ̵s̴k̶o̷r̶u̸m̶p̴o̵w̶a̶n̶e̵',
    inputPlaceholder: 'Wpisz tutaj swoją normalną wiadomość...',
    intensityLabel: 'Poziom korupcji',
    outputLabel: 'Skorumpowany wynik',
    copyBtn: 'Kopiuj chaos',
    copied: 'Skopiowano!',
    faqTitle: 'FAQ',
    bibliographyTitle: 'Źródła',
    configTitle: 'Konfiguracja',
    intensity: 'Intensywność',
    upLabel: 'Górna korupcja',
    midLabel: 'Środkowy szum',
    downLabel: 'Dolna korupcja',
    resetBtn: 'Resetuj wartości',
    warningText: 'OSTRZEŻENIE: Tekst Zalgo używa połączonych znaków Unicode, które mogą wizualnie przelewać się poza swój kontener. Używaj ostrożnie w mediach społecznościowych.',
    previewLabel: 'Podgląd w czasie rzeczywistym',
    emptyLabel: 'Puste',
    charLabel: 'ZNAKI',
    noteText: 'Uwaga: niektóre przeglądarki mogą ograniczać renderowanie połączonych znaków'
  },
  seo: [
    { type: 'title', text: 'Co to jest tekst Zalgo i jak działa wizualna korupcja?', level: 2 },
    { type: 'paragraph', html: 'Tekst Zalgo to forma manipulacji typograficznej wykorzystująca specyficzną funkcję standardu Unicode: <strong>znaki łączące</strong>. W przeciwieństwie do zwykłych znaków, diakrytyki te nie zajmują miejsca w poziomie — układają się pionowo nad literą bazową, tworząc estetykę „cyfrowego chaosu” lub „kosmicznego horroru”, tak popularną w kulturze internetowej.' },
    { type: 'title', text: 'Anatomia procesu', level: 3 },
    { type: 'paragraph', html: 'Nasz generator przetwarza każdy znak niezależnie, wstrzykując losowe serie punktów kodowych Unicode w trzech różnych wektorach: <strong>górnym</strong> (diakrytyki układające się nad literą), <strong>środkowym</strong> (przebijające literę) i <strong>dolnym</strong> (zwisające pod nią).' },
    { type: 'tip', title: 'Algorytm korupcji', html: 'Dla każdego znaku bazowego obliczana jest <code>liczba = intensywność × 30</code>. Tyle losowych diakrytyków dodaje się w każdym wektorze. Przy intensywności 1,5 można uzyskać do 45 znaków łączących na jedną literę.' },
    { type: 'title', text: 'Etykieta i zastosowania', level: 3 },
    { type: 'list', items: [
      '<strong>Media społecznościowe:</strong> Przyciągnij uwagę na Instagramie czy TikToku. Idealne do opisów profilu chcących zerwać z konwencją.',
      '<strong>Opowieści grozy:</strong> Dramatyzuj narracje fikcyjne, creepypasty lub symulacje przejętych systemów.',
      '<strong>Dostępność:</strong> Ostrzeżenie — tekst Zalgo jest nieczytelny dla czytników ekranu. Używaj go wyłącznie jako dekoracji wizualnej, nigdy dla treści krytycznych.',
      '<strong>SEO:</strong> Nigdy nie używaj Zalgo w kluczowych słowach (H1, metatytuły). Boty indeksujące mogą nie poradzić sobie z normalizacją tych znaków.',
    ]},
    { type: 'title', text: 'Pochodzenie: Od Something Awful do Glitch Artu', level: 3 },
    { type: 'paragraph', html: 'Zalgo nie zaczęło się jako generator, ale jako interwencja w klasyczne paski komiksowe. Użytkownik Shmorky w połowie lat 2000 zaczął deformować postacie takie jak Nancy czy Archie, dodając plamy i zniekształcenia. Fraza <strong>„On nadchodzi”</strong> (He comes) przypieczętowała los tych dzieł, ogłaszając przybycie bytu pożerającego rzeczywistość.' },
    { type: 'glossary', items: [
      { term: 'Znak łączący', definition: 'Punkt kodowy Unicode zaprojektowany do umieszczenia nad, pod lub przez znak bazowy. Używany uprawnienie w językach takich jak arabski, wietnamski i hindi.' },
      { term: 'Diakrytyk', definition: 'Znak dodany do litery bazowej w celu zmiany jej wymowy lub znaczenia. Zalgo nadużywa ich do tworzenia wizualnego przelewania się.' },
      { term: 'Blok Unicode', definition: 'Ciągły zakres punktów kodowych Unicode. Znaki Zalgo pochodzą głównie z bloku „Combining Diacritical Marks” (U+0300–U+036F).' },
      { term: 'Glitch Art', definition: 'Estetyka, która intencjonalnie włącza lub symuluje błędy, artefakty i korupcje w mediach cyfrowych jako technikę ekspresyjną.' },
    ]},
  ],
  faq,
  bibliography: [
    { name: 'Standard Unicode - Znaki łączące (ang.)', url: 'https://www.unicode.org/standard/principles.html#Combining_Characters' },
    { name: 'Fenomen tekstu Zalgo (ang.)', url: 'https://knowyourmeme.com/memes/zalgo' },
    { name: 'MDN - Normalizacja ciągów znaków', url: 'https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/String/normalize' },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
