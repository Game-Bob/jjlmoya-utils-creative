import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DiceRollerLocaleContent } from '../index';

const slug = 'kostka-do-gry';
const title = 'Kostka do Gry';
const description = 'Kompletny symulator kości do Twoich gier RPG i planszówek. Rzucaj k4, k6, k8, k10, k12, k20 oraz k100 z modyfikatorami i historią.';

const faq: DiceRollerLocaleContent['faq'] = [
  {
    question: 'Jak symulować rzut z ułatwieniem (advantage - D&D)?',
    answer: 'Dodaj dwie kości k20 do worka, klikając dwukrotnie przycisk k20. Podczas rzutu obserwuj dwa indywidualne wyniki i zachowaj ten wyższy. Wyświetlona suma będzie ich dodatkiem, ale możesz zobaczyć każdą kość z osobna w zestawieniu wyników.',
  },
  {
    question: 'Co oznacza zielony lub czerwony kolor wyników?',
    answer: 'Zielone wyniki wskazują, że na kości wypał jej maksymalny możliwy wynik ("krytyk"). Czerwone wyniki oznaczają wartość minimalną ("1", najgorszy możliwy wynik). Dzięki temu można błyskawicznie dostrzec krytyczne sukcesy i pechowe rzuty.',
  },
  {
    question: 'Czy mogę dodać kilka kości tego samego typu?',
    answer: 'Tak. Każde kliknięcie na kość dodaje ją do worka. Jeśli klikniesz k6 trzy razy, worek pokaże "3k6". Aby zmniejszyć liczbę kości, kliknij przycisk "−", który pojawia się obok każdej grupy kości w worku.',
  },
  {
    question: 'Czy kości cyfrowe są tak samo losowe jak fizyczne?',
    answer: 'Statystycznie tak. Nowoczesne silniki JavaScript używają algorytmów pseudolosowych (xorshift128+) o bardzo wysokiej jakości rozkładu jednostajnego. Prawdziwa fizyczna kość może mieć drobne niedoskonałości produkcyjne, które wpływają na wyniki; cyfrowa kość jest wolna od tego problemu.',
  },
  {
    question: 'Czym jest k100 i jak się go używa?',
    answer: 'k100 (lub k%) generuje liczbę od 1 do 100 i jest używany w systemach gier opartych na procentach, takich jak Zew Cthulhu czy Warhammer Fantasy Roleplay. Reprezentuje "bezpośrednie prawdopodobieństwo": jeśli Twoja umiejętność Skradania wynosi 65%, musisz wyrzucić 65 lub mniej, aby odnieść sukces.',
  },
];

const howTo: DiceRollerLocaleContent['howTo'] = [
  { name: 'Stwórz pulę kości', text: 'Klikaj przyciski kości (k4, k6, k8...), aby dodać je do swojej puli. Każde kliknięcie dodaje jedną kość wybranego typu. Możesz mieszać różne typy w jednym rzucie.' },
  { name: 'Dostosuj modyfikator', text: 'Użyj przycisków "+" i "−" obok modyfikatora, aby zastosować premie lub kary (jak modyfikator atrybutu w D&D). Modyfikator jest automatycznie dodawany do sumy.' },
  { name: 'Rzuć kośćmi', text: 'Naciśnij przycisk "Rzuć Kośćmi". Prawy panel pokazuje ostateczną sumę oraz rozbicie na każdą pojedynczą kość, z krytykami (maksimum) na zielono i pechami (minimum) na czerwono.' },
  { name: 'Sprawdź historię', text: 'Każdy rzut jest zapisywany w historii wraz z użytym wyrażeniem kości, całkowitym wynikiem i dokładnym czasem. Możesz wyczyścić historię za pomocą odpowiedniego przycisku.' },
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

export const content: DiceRollerLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Najczęściej Zadawane Pytania',
  bibliographyTitle: 'Bibliografia Losowości',
  ui: {
    title: 'Kostka do Gry',
    description: 'Niech szczęście ci sprzyja.',
    rollBtn: 'Rzuć Kośćmi',
    totalLabel: 'Suma',
    historyLabel: 'Historia',
    clearHistoryBtn: 'Wyczyść Historię',
    faqTitle: 'FAQ',
    bibliographyTitle: 'Źródła',
    addDiceLabel: 'Dodaj kości do worka',
    bagLabel: 'Worek na kości',
    emptyBagBtn: 'Opróżnij',
    emptyBagText: 'Kliknij kości, aby je dodać',
    modifierLabel: 'Modyfikator',
    rollManyLabel: 'Rzuć kośćmi ($COUNT)',
    rollOneLabel: 'Rzuć kością ($COUNT)',
    preRollText: 'Dodaj kości i rzuć',
    emptyHistoryText: 'Tutaj pojawi się historia rzutów'
  },
  seo: [
    { type: 'title', text: 'Sztuka Losowości: Historia i Matematyka Kości', level: 2 },
    { type: 'paragraph', html: 'Kości to jedne z najstarszych generatorów losowości ludzkości. <strong>Astragali</strong> — kości skokowe owiec i kóz — były używane jako prymitywne czterościenne kości już 5000 lat p.n.e. w Mezopotamii i Egipcie. Ewolucja od rzeźbionej kości do nowoczesnych dwudziestościanów z żywicy epoksydowej to nie tylko kwestia estetyki: to podróż przez teorię prawdopodobieństwa i projektowanie mechanik gier.' },
    { type: 'title', text: 'Standardowa Rodzina Kości', level: 3 },
    { type: 'paragraph', html: 'Najbardziej rozpowszechniony zestaw kości w grach fabularnych — spopularyzowany przez grupę <strong>Dungeons &amp; Dragons</strong> w 1974 roku — składa się z pięciu brył platońskich oraz dwóch dodatkowych kształtów: k4 (czworościan), k6 (sześcian), k8 (ośmiościan), k10 (dwudziestościan deltoidalny), k12 (dwunastościan), k20 (dwudziestościan) oraz k100 (kość procentowa). Każdy wielościan gwarantuje rozkład jednostajny: wszystkie ścianki mają dokładnie takie samo prawdopodobieństwo wypadnięcia.' },
    { type: 'list', items: [
      '<strong>k4 – Czworościan:</strong> Najbardziej niebezpieczna, gdy nadepnie się na nią boso. Cztery trójkątne ścianki, 25% prawdopodobieństwa na ściankę. Powszechnie używana do obrażeń od sztyletów lub zaklęć niskiego poziomu.',
      '<strong>k6 – Sześcian:</strong> Najbardziej uniwersalna kość. Obecna we wszystkich grach planszowych od czasu egipskiego senet. Jej sześcienna geometria gwarantuje doskonałą równomierność rozkładu.',
      '<strong>k8 – Ośmiościan:</strong> Kość włóczni lub topora bojowego. Osiem ścianek będących trójkątami równobocznymi. 12,5% prawdopodobieństwa na ściankę.',
      '<strong>k10 – Dwudziestościan deltoidalny:</strong> Jedyna bryła w standardowym zestawie, która nie jest bryłą platońską. Dwie przeciwległe ścianki na "wierzchołek". Niezbędna do k100 (dwie połączone k10).',
      '<strong>k12 – Dwunastościan:</strong> Kość barbarzyńcy. Dwanaście pięciokątnych ścianek. Niedoceniana w wielu systemach, główna bohaterka barbarzyńcy w D&D 5e.',
      '<strong>k20 – Dwudziestościan:</strong> Królowa gier RPG. Dwadzieścia trójkątnych ścianek. Protagonistka systemu d20: decyduje o sukcesie lub porażce niemal wszystkich działań.',
      '<strong>k100 – Kość procentowa:</strong> Dwie połączone k10 (dziesiątki + jedności). Definiuje precyzyjne prawdopodobieństwo w systemach takich jak Zew Cthulhu czy Warhammer Fantasy.',
    ]},
    { type: 'stats', items: [
      { value: '5000 p.n.e.', label: 'Pierwsze kości (astragali)', icon: 'mdi:history' },
      { value: '1974', label: 'D&D spopularyzowało zestaw', icon: 'mdi:sword' },
      { value: '7 typów', label: 'Standardowe kości RPG', icon: 'mdi:dice-multiple' },
      { value: '2¹²⁸', label: 'Okres losowości JS', icon: 'mdi:function-variant' },
    ], columns: 4 },
    { type: 'title', text: 'Prawdopodobieństwo i Krzywe Rozkładu', level: 3 },
    { type: 'paragraph', html: 'Rzucając pojedynczą kością, otrzymujesz <strong>dyskretny rozkład jednostajny</strong>: każdy wynik ma dokładnie takie samo prawdopodobieństwo (1/n). Jednak gdy tylko połączysz wiele kości, matematyczna magia przekształca tę płaską krzywą w <strong>przybliżony rozkład normalny</strong>. Dlatego 2k6 to nie to samo co 1k12: przy dwóch kostkach sześciościennych prawdopodobieństwo wyrzucenia 7 wynosi 6/36 ≈ 16,7%, podczas gdy skrajne wyniki (2 i 12) zdarzają się tylko w 2,8% przypadków.' },
    { type: 'tip', title: 'Ułatwienie i Utrudnienie (D&D 5e)', html: 'Mechanika <strong>Ułatwienia</strong> polega na rzucie 2k20 i zachowaniu wyższego wyniku. Matematycznie podnosi to średnią z 10,5 do około 13,8. <strong>Utrudnienie</strong> robi coś przeciwnego: wybiera niższy wynik, obniżając średnią do około 7,2. Nasz symulator pozwala to zasymulować, dodając dwie k20 do worka i porównując indywidualne wyniki.' },
    { type: 'title', text: 'Modyfikatory: Most Między Kością a Postacią', level: 3 },
    { type: 'paragraph', html: 'W większości systemów RPG kość nie działa sama: dodaje się lub odejmuje <strong>modyfikator</strong> reprezentujący umiejętności postaci. W D&D 5e modyfikator Siły +5 oznacza, że rzucasz 1k20, dodajesz 5 i sprawdzasz wynik względem Klasy Pancerza przeciwnika. Nasz symulator zawiera kontrolkę modyfikatora, aby wiernie odzwierciedlać te mechaniki.' },
    { type: 'tip', title: 'Standard Notacji Kości', html: 'Notacja <strong>XkY+Z</strong> jest de facto standardem w grach fabularnych: X kości o Y ściankach z modyfikatorem Z. "3k6+2" oznacza rzut trzema kośćmi sześciościennymi i dodanie 2 do sumy. Nasze narzędzie używa tej notacji w historii, dzięki czemu możesz łatwo dzielić się swoimi rzutami lub je zapisywać.' },
    { type: 'glossary', items: [
      { term: 'Trafienie krytyczne', definition: 'Wyrzucenie maksymalnej wartości na kości (np. 20 na k20). Zazwyczaj wyzwala specjalne efekty dodatkowe w większości systemów RPG.' },
      { term: 'Pech / Naturalne 1', definition: 'Wyrzucenie minimalnej wartości (1) na kości. Często skutkuje dramatyczną porażką lub negatywnymi konsekwencjami.' },
      { term: 'Pula kości', definition: 'Zbiór kości rzucanych jednocześnie. Pula w naszym narzędziu pokazuje każdy typ kości pogrupowany według liczby (np. 3k6 + 2k8).' },
      { term: 'Modyfikator', definition: 'Stała liczba dodawana lub odejmowana od wyniku rzutu, reprezentująca umiejętność postaci, premię do atrybutu lub karę sytuacyjną.' },
      { term: 'Rzut procentowy', definition: 'Rzut z użyciem dwóch k10 w celu uzyskania wyniku od 1 do 100, stosowany w systemach opartych na umiejętnościach, gdzie zdolności mierzone są w procentach.' },
    ]},
  ],
  faq,
  bibliography: [
    { name: 'D&D Beyond – Zasady mechaniki kości', url: 'https://www.dndbeyond.com/sources/basic-rules/using-ability-scores' },
    { name: 'Roll20 – Wirtualny stół i systemy kości', url: 'https://roll20.net/' },
    { name: 'Pathfinder – Referencja systemu d20', url: 'https://paizo.com/pathfinder' },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
