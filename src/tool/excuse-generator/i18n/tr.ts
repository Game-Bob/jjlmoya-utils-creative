import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ExcuseGeneratorLocaleContent } from '../index';

const slug = 'bahane-ureteci';
const title = 'Bahane Üreteci';
const description = 'Sorumluluklardan şık bir şekilde kurtulmak için anlamsal bir kumar makinesi. Anında gerçeküstü ve reddedilemez bahaneler üretin.';

const faq: ExcuseGeneratorLocaleContent['faq'] = [
  {
    question: 'Bu üreteç evliliğimi kurtarabilir mi?',
    answer: 'Terapist olmasak da, kayınvalidenizle o akşam yemeğinden makul bir teknik acil durum bahanesiyle kaçınmak gerginliği önemli ölçüde azaltabilir. Sorumlu bir şekilde kullanın.'
  },
  {
    question: 'Neden bu kadar gerçeküstü cümleler?',
    answer: 'Strateji Bilişsel Çelişki\'ye dayanmaktadır. Sıkıcı bir şey söylerseniz doğrulanabilir. Saçma bir şey söylerseniz, şaşkınlık öfkelenme yetisini engeller.'
  }
];

const howTo: ExcuseGeneratorLocaleContent['howTo'] = [
  { name: 'Üret', text: 'Yeni bir bahane oluşturmak için üret düğmesine tıklayın.' },
  { name: 'Kopyala', text: 'Bahane panonuza kopyalamak için kopyala düğmesine tıklayın.' }
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

export const content: ExcuseGeneratorLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  bibliographyTitle: 'Boş Zaman Kaynakçası',
  ui: {
    title: 'Gerçeküstü Bahane Üreteci',
    description: 'Yeni nesil alibi hesaplayıcı.',
    subjectLabel: 'Özne',
    actionLabel: 'Eylem',
    victimLabel: 'Kurban',
    generateBtn: 'BAHANE ÜRET',
    copyBtn: 'Bu çılgınlığı kopyala',
    copied: 'Kopyalandı!',
    starts: JSON.stringify([
      "Kedim", "Büyükannem", "Başkan", "Bir uzaylı", "5. kattaki komşum",
      "Wifi", "Burcum", "Bir zaman yolcusu", "Çamaşır makinesi", "Buzdolabım",
      "Noel ruhu", "Gölgem", "Bir ninja", "Vegan polisi", "Siri",
      "Etobur bitkim", "Amazon kuryesi", "Kötü klonum", "Bir büyücü", "Godzilla"
    ]),
    middles: JSON.stringify([
      "savaş ilan etti", "yedi", "kaçırdı", "ateşe verdi",
      "şurada bir parti düzenliyor:", "üzerine kustu", "çıkmayı reddediyor:",
      "hackledi", "çaldı", "şuna aşık oldu:", "üzerine meditasyon yapıyor:",
      "üzerine büyü yaptı", "şunu protesto ediyor:", "şurada bir tarikat kurdu:",
      "samba yapıyor:", "bir iblis çağırdı:", "erişimi engelledi:",
      "altına dönüştü", "satmaya çalışıyor", "hakkında bir kitap yazdı:"
    ]),
    ends: JSON.stringify([
      "evimin anahtarlarını.", "yaşama sevincimi.", "garaj kapısını.",
      "en sevdiğim pantolonumu.", "oturma odasındaki yönlendiriciyi.", "tek ayakkabımı.",
      "fizik yasalarını.", "onurumu.", "binanın asansörünü.",
      "Netflix hesabımı.", "diş fırçamı.", "evimin tapularını.",
      "taso koleksiyonumu.", "arabanın el frenini.", "sosyalleşme isteğimi.",
      "kahve stoklarımı.", "klozet kapağını.", "TV kumandasını.",
      "şanslı çoraplarımı.", "Batı medeniyetini."
    ]),
    faqTitle: 'FAQ',
    bibliographyTitle: 'Referanslar'
  },
  seo: [
    { type: 'title', text: 'Mükemmel Bahanenin Bilimsel Sanatı', level: 2 },
    { type: 'paragraph', html: 'Hiper-bağlantılılık çağında yaşıyoruz. Telefonunuz titriyor, saatiniz bildirim gönderiyor ve sosyal ajandanız kaybedilmek üzere olan bir Tetris oyunu gibi görünüyor. Her şeye "evet" deme baskısı bir sosyal tükenmişlik salgını yarattı.' },
    { type: 'title', text: 'JOMO\'nun (Joy of Missing Out) Rönesansı', level: 3 },
    { type: 'paragraph', html: 'Geçtiğimiz on yıla FOMO (Kaçırma Korkusu) hakim olsa da, dijital sağlık uzmanları artık <strong>JOMO: Kaçırmanın Keyfi</strong>\'ni savunuyor. Bu izolasyonla ilgili değil, niyetlilikle ilgili.' },
    { type: 'tip', title: 'Reddedilemez Alibi Formülü', html: '<strong>Ayrışmış Özne:</strong> Suçlu asla siz değilsiniz. Bu "wifi", "kedim", "evren". Suçu dış bir varlığa kaydırın.<br><strong>Hiperbolik Eylem:</strong> Durum, kimsenin ayrıntı sormayacağı kadar saçma veya teknik olmalıdır.<br><strong>Fiziksel Blok:</strong> Nihai sonuç ikili olmalıdır: ya giderim ya da evde kalırım.' },
    { type: 'title', text: 'Bahanenin Kısa Tarihi', level: 3 },
    { type: 'list', items: [
      '<strong>Orta Çağ:</strong> "Atım nalını kaybetti" (Zamansız bir klasik).',
      '<strong>Sanayi Devrimi:</strong> "Buhar makinesi aşırı ısındı".',
      '<strong>Dijital Çağ:</strong> "İnternetim tam bir güncellemenin ortasında koptu".',
    ]},
    { type: 'proscons', items: [
      { pro: 'Sosyal baskıyı anında hafifletir', con: 'Aşırı kullanım güveni sarsar' },
      { pro: 'Enerjinizi ve sınırlarınızı korur', con: 'Dikkatsizce kullanılırsa suçluluk duygusu yaratabilir' },
      { pro: 'Yaratıcı ve esprili ton gerginliği dağıtır', con: 'Resmi veya profesyonel bağlamlar için uygun değildir' },
    ]},
  ],
  faq,
  bibliography: [
    { name: 'Erteleyicinin Manifestosu', url: 'https://example.com/manifesto' }
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
