import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { BeadPatternGeneratorLocaleContent } from '../index';

const slug = 'generator-skhem';
const title = 'Генератор схем';
const description = 'Создавайте пиксель-арт и схемы для бисероплетения (Miyuki) или термомозаики (Hama) из ваших фотографий. Алгоритм квантования цветов, режим туннельного зрения и экспорт в ZIP.';

const faq: BeadPatternGeneratorLocaleContent['faq'] = [
  { question: 'Что такое квантование цветов в схемах?', answer: 'Это процесс уменьшения тысяч цветов в фотографии до нескольких, соответствующих реальным доступным цветам бисера (например, Miyuki или Hama). Мы используем интеллектуальные алгоритмы для сохранения визуального сходства при минимальной палитре.' },
  { question: 'Можно ли использовать эту схему для вышивки крестом?', answer: 'Да, генератор создает сетчатую диаграмму, которая идеально подходит для вышивки крестиком. Вам просто нужно выбрать размер сетки, соответствующий вашей ткани (Aida 14, 18 и т. д.).' },
  { question: 'В чем разница между бисером Miyuki и Hama?', answer: 'Бисер Miyuki Delica — это очень мелкий и точный стеклянный бисер для ювелирных изделий. Бисер Hama сделан из пластика и сплавляется утюгом. Наш инструмент позволяет настраивать соотношение сторон, чтобы схема не искажалась в зависимости от используемого материала.' },
  { question: 'Как работает алгоритм дизеринга?', answer: 'Дизеринг создает иллюзию большего количества цветов путем смешивания пикселей разных цветов в разреженных паттернах. Это помогает цветовым градиентам выглядеть более плавными даже при ограниченной палитре бисера.' },
];

const howTo: BeadPatternGeneratorLocaleContent['howTo'] = [
  { name: 'Загрузите четкое изображение', text: 'Выберите фотографию с хорошим контрастом и минимумом мелких деталей, чтобы схеме было легче следовать.' },
  { name: 'Настройте размер сетки', text: 'Определите ширину и высоту вашего будущего изделия в количестве бисерин. Больше бисера = больше деталей, но выше сложность.' },
  { name: 'Оптимизируйте цветовую палитру', text: 'Уменьшайте количество цветов, пока они не совпадут с бисером, имеющимся в вашем наборе.' },
  { name: 'Экспортируйте схему-руководство', text: 'Сгенерируйте финальную схему с цветовыми кодами для использования в качестве эталона при сборке изделия на основе или нитке.' },
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
  inLanguage: 'ru',
};

export const content: BeadPatternGeneratorLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Часто задаваемые вопросы',
  ui: {
    title: 'Лаборатория узоров',
    subtitle: 'Инженерия цвета для ваших рук',
    description: 'От фото к схеме бисероплетения.',
    gridSizeLabel: 'Размер (Ширина)',
    colorCountLabel: 'Цвета',
    optionsLabel: 'Опции',
    rulersLabel: 'Линейки',
    symbolsTooltip: 'Узор-сюрприз',
    symbolsLabel: 'Символы',
    downloadBtn: 'Скачать',
    uploadTitle: 'Загрузите ваше видение',
    uploadSubtitle: 'и позвольте цифровой магии случиться',
    paletteTitle: 'Хроматическая ДНК',
    reuploadBtn: 'Изменить фото',
    tunnelVisionTitle: 'Туннельное зрение',
    tunnelVisionSubtitle: 'Ваш помощник для точной сборки ряд за рядом.',
    uploadLabel: 'Загрузите ваше фото',
    pixelateBtn: 'Создать схему',
    faqTitle: 'FAQ',
    bibliographyTitle: 'Ссылки'
  },
  seo: [
    { type: 'title', text: 'Цифровая алхимия: превращение пикселей в осязаемое искусство', level: 2 },
    { type: 'paragraph', html: 'Добро пожаловать в <strong>Ultimate Pattern Studio</strong>. Это <em>движок хроматического интеллекта</em>, созданный для архитекторов пиксель-арта, мастеров Miyuki и визионеров вышивки крестом. Ваш мост между цифровым и рукотворным миром.' },
    { type: 'card', icon: 'mdi:grid', title: 'Интеллектуальная сетка', html: 'Наш алгоритм <strong>пространственного субсамплинга</strong> не просто «сжимает» ваше изображение. Он анализирует визуальную структуру, чтобы отобразить сложные группы пикселей на отдельные ячейки, сохраняя целостность силуэтов и краев, как это сделал бы опытный иллюстратор.' },
    { type: 'card', icon: 'mdi:palette', title: 'Квантование цвета методом K средних', html: 'Мы используем вариант алгоритма <strong>кластеризации K-средних</strong>, который математически находит «центроидные» тона вашего изображения. Потрясающая визуальная точность при минималистичной палитре из 12, 24 или 32 цветов.' },
    { type: 'title', text: 'Мастерство в 3 шага', level: 3 },
    { type: 'card', icon: 'mdi:image-search', title: 'Идеальный выбор', html: 'Ищите <strong>высокий контраст</strong>, драматическое освещение и знаковые формы. Портреты с чистым фоном, логотипы и векторная графика переводятся великолепно.' },
    { type: 'card', icon: 'mdi:ruler', title: 'Размерная калибровка', html: '<strong>Miyuki Delica:</strong> 50 бисерин ≈ 8 см · <strong>Hama Midi:</strong> 50 бисерин ≈ 25 см · <strong>Вышивка крестом:</strong> 1 ячейка = 1 стежок.' },
    { type: 'card', icon: 'mdi:eye-check', title: 'Дзен исполнение (режим туннельного зрения)', html: 'Наша система <strong>туннельного зрения</strong> выступает в роли вашего личного помощника, приглушая визуальный шум и хирургически выделяя только активный ряд. Абсолютная концентрация.' },
    { type: 'title', text: 'Бесконечные холсты', level: 3 },
    { type: 'list', items: [
      '<strong>Текстильные украшения:</strong> сложные узоры для ткацких станков и геометрические браслеты.',
      '<strong>Вышивка крестом:</strong> современные схемы, готовые к вышиванию пиксель за пикселем.',
      '<strong>Мозаика:</strong> крупномасштабные панно с использованием упрощенной керамической плитки.',
      '<strong>Ретро-гейминг:</strong> аутентичные 8-битные ассеты и спрайты за считанные секунды.',
    ]},
    { type: 'stats', items: [
      { value: '10–100', label: 'Диапазон ширины в бисере', icon: 'mdi:arrow-expand-horizontal' },
      { value: '2–32', label: 'Слоты цветовой палитры', icon: 'mdi:palette-swatch' },
      { value: 'K-Means', label: 'Алгоритм квантования', icon: 'mdi:function-variant' },
      { value: 'ZIP', label: 'Формат экспорта (схема + гид)', icon: 'mdi:zip-box' },
    ], columns: 4 },
    { type: 'paragraph', html: 'В эпоху ускользающих экранов создание чего-то физического — это революционный акт. Этот инструмент не стремится автоматизировать искусство, он призван <strong>расширить возможности мастера</strong>. Мы даем вам вычислительную точность, чтобы ваши руки могли создавать долговечное наследие.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
