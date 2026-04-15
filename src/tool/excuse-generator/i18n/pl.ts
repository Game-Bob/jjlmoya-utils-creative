import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ExcuseGeneratorLocaleContent } from '../index';

const slug = 'generator-wymowek';
const title = 'Generator Wymówek';
const description = 'Semantyczna maszyna losująca, która pozwoli Ci stylowo wymigać się od zobowiązań. Błyskawicznie generuj surrealistyczne i niepodważalne wymówki.';

const faq: ExcuseGeneratorLocaleContent['faq'] = [
  {
    question: 'Czy ten generator może uratować moje małżeństwo?',
    answer: 'Choć nie jesteśmy terapeutami, uniknięcie obiadu z teściami dzięki wiarygodnej awarii technicznej może znacząco obniżyć napięcie. Używaj odpowiedzialnie.'
  },
  {
    question: 'Dlaczego zdania są tak surrealistyczne?',
    answer: 'Strategia opiera się na dysonansie poznawczym. Jeśli powiesz coś nudnego, można to zweryfikować. Jeśli powiesz coś absurdalnego, zdziwienie blokuje zdolność do gniewu.'
  }
];

const howTo: ExcuseGeneratorLocaleContent['howTo'] = [
  { name: 'Generuj', text: 'Kliknij przycisk generowania, aby stworzyć nową wymówkę.' },
  { name: 'Kopiuj', text: 'Kliknij przycisk kopiowania, aby przenieść wymówkę do schowka.' }
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

export const content: ExcuseGeneratorLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Najczęściej Zadawane Pytania',
  bibliographyTitle: 'Bibliografia Czasu Wolnego',
  ui: {
    title: 'Surrealistyczny Generator Wymówek',
    description: 'Kalkulator alibi nowej generacji.',
    subjectLabel: 'Podmiot',
    actionLabel: 'Akcja',
    victimLabel: 'Ofiara',
    generateBtn: 'GENERUJ WYMÓWKĘ',
    copyBtn: 'Skopiuj to szaleństwo',
    copied: 'Skopiowano!',
    starts: JSON.stringify([
      "Mój kot", "Moja babcia", "Prezydent", "Obcy", "Mój sąsiad z 5. piętra",
      "Wifi", "Mój horoskop", "Podróżnik w czasie", "Pralka", "Moja lodówka",
      "Duch Świąt", "Mój cień", "Ninja", "Policja wegańska", "Siri",
      "Moja roślina mięsożerna", "Kurier Amazona", "Mój zły klon", "Czarodziej", "Godzilla"
    ]),
    middles: JSON.stringify([
      "wypowiedział wojnę", "zjadł", "porwał", "podpalił",
      "organizuje imprezę w", "zwymiotował na", "odmawia opuszczenia",
      "zhakował", "ukradł", "zakochał się w", "medytuje nad",
      "rzucił zaklęcie na", "protestuje przeciwko", "założył kult w",
      "tańczy sambę w", "przywołał demona w", "zablokował dostęp do",
      "zamienił się w złoto", "próbuje sprzedać", "napisał książkę o"
    ]),
    ends: JSON.stringify([
      "moich kluczach do domu.", "mojej woli życia.", "bramie garażowej.",
      "moich ulubionych spodniach.", "ruterze w salonie.", "mojej jedynej parze butów.",
      "prawach fizyki.", "mojej godności.", "windzie w budynku.",
      "moim koncie Netflix.", "mojej szczoteczce do zębów.", "akcie własności domu.",
      "mojej kolekcji kapsli.", "hamulcu ręcznym w aucie.", "mojej chęci socjalizacji.",
      "zapasach kawy.", "desce sedesowej.", "pilocie do TV.",
      "moich szczęśliwych skarpetkach.", "cywilizacji zachodniej."
    ]),
    faqTitle: 'FAQ',
    bibliographyTitle: 'Źródła'
  },
  seo: [
    { type: 'title', text: 'Naukowa sztuka wymówki doskonałej', level: 2 },
    { type: 'paragraph', html: 'Żyjemy w erze hiperłączności. Twój telefon wibruje, zegarek wysyła powiadomienia, a Twój kalendarz towarzyski wygląda jak partia Tetrisa tuż przed przegraną. Presja, by na wszystko mówić „tak”, stworzyła epidemię wyczerpania społecznego.' },
    { type: 'title', text: 'Renesans JOMO (Joy of Missing Out)', level: 3 },
    { type: 'paragraph', html: 'Podczas gdy FOMO (Fear of Missing Out) dominowało w ostatniej dekadzie, eksperci od cyfrowego dobrostanu promują teraz <strong>JOMO: Radość z tego, że coś nas omija</strong>. Nie chodzi o izolację, ale o intencjonalność.' },
    { type: 'tip', title: 'Formuła alibi nie do podważenia', html: '<strong>Podmiot zdystansowany:</strong> Nigdy nie Ty jesteś winny. To „wifi”, „mój kot”, „wszechświat”. Przerzuć winę na byt zewnętrzny.<br><strong>Hiperboliczna akcja:</strong> Sytuacja musi być wystarczająco absurdalna lub techniczna, by nikt nie dopytywał o szczegóły.<br><strong>Blokada fizyczna:</strong> Wynik końcowy musi być binarny: albo idę, albo zostaję w domu.' },
    { type: 'title', text: 'Krótka historia wymówki', level: 3 },
    { type: 'list', items: [
      '<strong>Średniowiecze:</strong> „Mój koń zgubił podkowę” (ponadczasowa klasyka).',
      '<strong>Rewolucja przemysłowa:</strong> „Maszyna parowa się przegrzała”.',
      '<strong>Era cyfrowa:</strong> „Internet padł mi w samym środku aktualizacji”.',
    ]},
    { type: 'proscons', items: [
      { pro: 'Błyskawicznie łagodzi presję społeczną', con: 'Nadużywanie niszczy zaufanie' },
      { pro: 'Chroni Twoją energię i granice', con: 'Może budzić poczucie winy, jeśli jest używane bezmyślnie' },
      { pro: 'Kreatywny i humorystyczny ton rozładowuje napięcie', con: 'Nie nadaje się do kontekstów formalnych lub zawodowych' },
    ]},
  ],
  faq,
  bibliography: [
    { name: 'Manifest Prokrastynatora', url: 'https://example.com/manifesto' }
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
