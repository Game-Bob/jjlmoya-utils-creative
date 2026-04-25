import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { BeadPatternGeneratorLocaleContent } from '../index';

const slug = 'boncuk-desen-olusturucu';
const title = 'Desen Oluşturucu';
const description = 'Fotoğraflarınızdan Miyuki veya Hama boncukları için piksel sanatı ve desen şemaları oluşturun. Renk niceleme algoritması, tünel görüşü modu ve ZIP dışa aktarma.';

const faq: BeadPatternGeneratorLocaleContent['faq'] = [
  { question: 'Desenlerde renk niceleme nedir?', answer: 'Bir fotoğraftaki binlerce rengi, mevcut gerçek boncuk renklerine (örneğin Miyuki veya Hama) karşılık gelen sadece birkaç renge indirgeme işlemidir. Mümkün olan en az paletle görsel benzerliği korumak için akıllı algoritmalar kullanıyoruz.' },
  { question: 'Bu deseni kanaviçe için kullanabilir miyim?', answer: 'Evet, oluşturucu kanaviçe ile mükemmel şekilde uyumlu bir ızgara şeması oluşturur. Kumaşınıza (Aida 14, 18 vb.) uygun bir ızgara boyutu seçmeniz yeterlidir.' },
  { question: 'Miyuki ve Hama Boncukları arasındaki fark nedir?', answer: 'Miyuki Delica boncukları, mücevher yapımı için kullanılan çok küçük, hassas cam boncuklardır. Hama Boncukları plastiktir ve ütü ile birbirine kaynaştırılır. Aracımız, kullanılan malzemeye bağlı olarak desenin bozulmaması için en boy oranını ayarlamanıza olanak tanır.' },
  { question: 'Dithering (titretme) algoritması nasıl çalışır?', answer: 'Dithering, farklı renklerdeki pikselleri aralıklı desenlerde karıştırarak daha fazla renk varmış illüzyonu yaratır. Sınırlı bir boncuk paletiyle bile renk geçişlerinin daha pürüzsüz görünmesine yardımcı olur.' },
];

const howTo: BeadPatternGeneratorLocaleContent['howTo'] = [
  { name: 'Net bir resim yükleyin', text: 'Desen takibinin daha kolay olması için iyi kontrasta sahip ve az küçük detay içeren bir fotoğraf seçin.' },
  { name: 'Izgara boyutunu ayarlayın', text: 'Fiziksel çalışmanızın kaç boncuk genişliğinde ve yüksekliğinde olacağını belirleyin. Daha fazla boncuk = daha fazla detay ama daha fazla zorluk.' },
  { name: 'Renk paletini optimize edin', text: 'Renk sayısını hobi setinizde bulunan boncuklarla eşleşene kadar azaltın.' },
  { name: 'Kılavuz şemayı dışa aktarın', text: 'Boncuklarınızı tahtaya veya ipe dizerken referans olarak kullanmak üzere renk kodlarıyla birlikte nihai deseni oluşturun.' },
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
  inLanguage: 'tr',
};

export const content: BeadPatternGeneratorLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  ui: {
    title: 'Desen Laboratuvarı',
    subtitle: 'Elleriniz için renk mühendisliği',
    description: 'Fotoğraftan boncuk şemasına.',
    gridSizeLabel: 'Boyut (Genişlik)',
    colorCountLabel: 'Renk Sayısı',
    optionsLabel: 'Seçenekler',
    rulersLabel: 'Cetveller',
    symbolsTooltip: 'Sürpriz Desen',
    symbolsLabel: 'Semboller',
    downloadBtn: 'İndir',
    uploadTitle: 'Vizyonunuzu Yükleyin',
    uploadSubtitle: 've dijital mucizenin gerçekleşmesine izin verin',
    paletteTitle: 'Kromatik DNA',
    reuploadBtn: 'Resmi Değiştir',
    tunnelVisionTitle: 'Tünel Görüşü',
    tunnelVisionSubtitle: 'Satır satır hassasiyet asistanınız.',
    uploadLabel: 'Fotoğrafınızı yükleyin',
    pixelateBtn: 'Desen Oluştur',
    faqTitle: 'SSS',
    bibliographyTitle: 'Referanslar'
  },
  seo: [
    { type: 'title', text: 'Dijital Simya: Pikselleri Somut Sanata Dönüştürün', level: 2 },
    { type: 'paragraph', html: '<strong>Ultimate Pattern Studio</strong>\'ya hoş geldiniz. Piksel Sanatı mimarları, Miyuki ustaları ve kanaviçe vizyonerleri için tasarlanmış bir <em>kromatik zeka motoru</em>. Dijital ile el yapımı arasındaki köprünüz.' },
    { type: 'card', icon: 'mdi:grid', title: 'Akıllı Izgara', html: '<strong>Uzamsal alt örnekleme</strong> algoritmamız görüntünüzü sadece "küçültmez". Görsel yapıyı analiz ederek karmaşık piksel gruplarını tekil hücrelere eşler, bir uzman illüstratör gibi silüetlerin ve kenarların bütünlüğünü korur.' },
    { type: 'card', icon: 'mdi:palette', title: 'K Means Renk Niceleme', html: 'Görüntünüzün matematiksel olarak "merkez" tonlarını bulan <strong>K-Means Kümeleme</strong> algoritmasının bir varyantını uyguluyoruz. 12, 24 veya 32 renkten oluşan minimalist bir paletle şaşırtıcı görsel sadakat.' },
    { type: 'title', text: '3 Adımda Ustalık', level: 3 },
    { type: 'card', icon: 'mdi:image-search', title: 'Mükemmel Seçim', html: '<strong>Yüksek kontrast</strong>, dramatik aydınlatma ve ikonik şekiller arayın. Temiz arka planlı portreler, logolar ve vektör sanatı harika bir şekilde dönüşür.' },
    { type: 'card', icon: 'mdi:ruler', title: 'Boyutsal Kalibrasyon', html: '<strong>Miyuki Delica:</strong> 50 boncuk ≈ 8cm · <strong>Hama Midi:</strong> 50 boncuk ≈ 25cm · <strong>Kanaviçe:</strong> 1 hücre = 1 ilmek.' },
    { type: 'card', icon: 'mdi:eye-check', title: 'Zen Uygulaması (Tünel Görüşü Modu)', html: '<strong>Tünel Görüşü</strong> sistemimiz görsel gürültüyü azaltarak ve cerrahi olarak sadece aktif satırı vurgulayarak kişisel asistanınız olarak hareket eder. Mutlak konsantrasyon.' },
    { type: 'title', text: 'Sonsuz Tuval', level: 3 },
    { type: 'list', items: [
      '<strong>Tekstil Takıları:</strong> Tezgahlar ve geometrik bilezikler için karmaşık desenler.',
      '<strong>Kanaviçe:</strong> Piksel piksel işlenmeye hazır modern şemalar.',
      '<strong>Mozaikler:</strong> Basitleştirilmiş seramik parçaları kullanılarak yapılan büyük ölçekli duvar resimleri.',
      '<strong>Retro Oyunlar:</strong> Saniyeler içinde otantik 8-bit varlıklar ve sprite\'lar.',
    ]},
    { type: 'stats', items: [
      { value: '10–100', label: 'Boncuk genişliği aralığı', icon: 'mdi:arrow-expand-horizontal' },
      { value: '2–32', label: 'Renk paleti yuvaları', icon: 'mdi:palette-swatch' },
      { value: 'K-Means', label: 'Niceleme algoritması', icon: 'mdi:function-variant' },
      { value: 'ZIP', label: 'Dışa aktarma formatı (desen + kılavuz)', icon: 'mdi:zip-box' },
    ], columns: 4 },
    { type: 'paragraph', html: 'Uçucu ekranlar çağında, fiziksel bir şey yaratmak devrimci bir eylemdir. Bu araç sanatı otomatikleştirmeyi değil, <strong>zanaatkarı güçlendirmeyi</strong> amaçlar. Ellerinizin kalıcı miraslar inşa edebilmesi için size hesaplamalı hassasiyet sağlıyoruz.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
