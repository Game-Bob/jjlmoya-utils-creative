import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { FortuneCookieLocaleContent } from '../index';
import { bibliography } from '../bibliography';

const slug = 'ciasteczko-z-wrozba-online';
const title = 'Ciasteczko z Wróżbą';
const description = 'Sprawdź swoje dzienne przeznaczenie i odkryj swoje szczęśliwe liczby. Jedna wróżba dziennie, ujawniona jednym kliknięciem.';

const faq: FortuneCookieLocaleContent['faq'] = [
  {
    question: 'Czy mogę otworzyć więcej niż jedno ciasteczko dziennie?',
    answer: 'Przeznaczenie przemawia tylko raz dziennie. Zapisujemy Twoją wróżbę na urządzeniu, aby prowadziła Cię przez cały dzień.'
  },
  {
    question: 'Czy wróżby są generowane losowo?',
    answer: 'Tak — każdego dnia wybierana jest losowa wróżba i zapisywana lokalnie. Każda z 25 wróżb ma taką samą szansę na bycie wybraną, co zapewnia różnorodność w czasie.'
  }
];

const howTo: FortuneCookieLocaleContent['howTo'] = [
  { name: 'Przełam ciasteczko', text: 'Klikaj wielokrotnie w ciasteczko, aby je otworzyć.' },
  { name: 'Odczytaj wróżbę', text: 'Odkryj ukrytą w środku wiadomość oraz swoje szczęśliwe liczby na dziś.' }
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

export const content: FortuneCookieLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Najczęściej Zadawane Pytania',
  ui: {
    title: 'Ciasteczko z Wróżbą Online',
    description: 'Twoja codzienna cyfrowa wyrocznia.',
    instruction: 'Uderz w ciasteczko, aby otworzyć swoje przeznaczenie',
    dailyStatus: 'Twoje przeznaczenie zostało dziś ujawnione.',
    shareBtn: 'Podziel się mądrością',
    shareTitle: 'Moje Ciasteczko z Wróżbą',
    shareText: 'Przeznaczenie przemówiło: "$TEXT"\nMoje liczby: $NUMS\n\nOdkryj swoją wróżbę tutaj:',
    copied: 'Skopiowano!',
    fortunes: JSON.stringify([
      "Szczęście, którego szukasz, jest w innym ciasteczku.",
      "Nie licz dni, spraw, by dni się liczyły.",
      "Podróż tysiąca mil zaczyna się od jednego kroku.",
      "Błąd jest wstępem do odkrycia.",
      "Twoja zdolność do uczenia się jest Twoim największym atutem.",
      "Uśmiechnij się, wszechświat na Ciebie patrzy.",
      "Cierpliwość to drzewo o gorzkim korzeniu, ale bardzo słodkich owocach.",
      "Nie bój się rosnąć powoli, bój się jedynie stania w miejscu.",
      "Dzisiaj jest jutro, o które martwiłeś się wczoraj.",
      "Szczęście nie jest czymś gotowym. Pochodzi z Twoich własnych działań.",
      "Jeśli nie możesz zmienić kierunku wiatru, dostosuj żagle.",
      "To, co zasiejesz teraz, zbierzesz później.",
      "Kreatywność to inteligencja, która dobrze się bawi.",
      "Nie szukaj błędów, szukaj rozwiązań.",
      "Twoje nastawienie, a nie Twoje uzdolnienia, określi Twoją wysokość.",
      "Sukces to suma małych wysiłków powtarzanych dzień po dniu.",
      "Uwierz, że możesz, a będziesz w połowie drogi.",
      "Jedynym sposobem na wykonywanie świetnej pracy jest kochanie tego, co się robi.",
      "Życie to w 10% to, co Ci się przydarza, a w 90% to, jak na to reagujesz.",
      "Bądź zmianą, którą chcesz widzieć w świecie.",
      "Najlepszym sposobem na przewidzenie przyszłości jest jej wynalezienie.",
      "Prostota jest szczytem wyrafinowania.",
      "Jesteś panem swojego losu i kapitanem swojej duszy.",
      "Wkrótce otrzymasz wieści, które zmienią Twoją perspektywę.",
      "Nieoczekiwana podróż przyniesie Ci wielkie radości."
    ]),
    faqTitle: 'FAQ',
  },
  seo: [
    { type: 'title', text: 'Tajemnica ciasteczka z wróżbą', level: 2 },
    { type: 'paragraph', html: 'Zastanawiałeś się kiedyś, skąd wzięły się te osobliwe ciasteczka? Chociaż kojarzymy je z chińskim jedzeniem, ich pochodzenie to fascynująca podróż między Japonią a Stanami Zjednoczonymi. Ciasteczko z wróżbą, jakie znamy dzisiaj, zostało prawdopodobnie wynalezione w Kalifornii na początku XX wieku, a nie w Chinach — gdzie są praktycznie nieznane.' },
    { type: 'tip', title: 'Jak działa nasza Wyrocznia', html: 'Każdego dnia możesz otworzyć jedno ciasteczko. System zapisuje Twoje przeznaczenie, abyś mógł o nim pamiętać przez 24 godziny. Wróżba jest przechowywana lokalnie w Twojej przeglądarce — całkowicie prywatnie, bez udziału serwera. Wróć jutro po nową przepowiednię!' },
    { type: 'title', text: 'Filozofia Wyroczni', level: 3 },
    { type: 'paragraph', html: 'Ludzie zawsze szukali wskazówek w niepewnych czasach. Od Wyroczni Delfickiej po I Czing, systemy wróżbiarskie pełnią stałą funkcję psychologiczną: dają nam przyzwolenie na <strong>chwilę zatrzymania i refleksji</strong>. Ciasteczko z wróżbą nie przewiduje przyszłości — skłania Cię do myślenia o niej.' },
    { type: 'list', items: [
      '<strong>Starożytne Chiny:</strong> I Czing (Księga Przemian, ok. 1000 r. p.n.e.) wykorzystywał heksagramy do kierowania decyzjami i interpretowania losu.',
      '<strong>Klasyczna Grecja:</strong> Wyrocznia Delficka przyciągała zarówno władców, jak i obywateli swoimi tajemniczymi wypowiedziami, interpretowanymi jako boskie wskazówki.',
      '<strong>Współczesna Japonia:</strong> Bileciki z wróżbą Omikuji w chramach shintoistycznych, przywiązywane do gałęzi drzew, łączą los z rytuałem.',
      '<strong>Stany Zjednoczone XX wieku:</strong> Ciasteczka z wróżbą pojawiły się w społecznościach japońsko-amerykańskich, zanim stały się synonimem kuchni chińsko-amerykańskiej.'
    ]},
    { type: 'stats', items: [
      { value: '3 mld+', label: 'Ciasteczek produkowanych rocznie', icon: 'mdi:cookie' },
      { value: 'ok. 1000 p.n.e.', label: 'Pochodzenie I Czing', icon: 'mdi:book-open-variant' },
      { value: '25', label: 'Wróżb w tej wyroczni', icon: 'mdi:star-shooting' },
      { value: '1/dzień', label: 'Jedno przeznaczenie na dobę', icon: 'mdi:calendar-today' }
    ], columns: 4 },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
