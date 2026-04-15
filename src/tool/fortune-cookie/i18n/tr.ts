import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { FortuneCookieLocaleContent } from '../index';

const slug = 'sans-kurabiyesi-online';
const title = 'Şans Kurabiyesi';
const description = 'Günlük kaderinizi kontrol edin ve şanslı numaralarınızı keşfedin. Her gün bir tıklama ile ortaya çıkan bir şans mesajı.';

const faq: FortuneCookieLocaleContent['faq'] = [
  {
    question: 'Günde birden fazla kurabiye açabilir miyim?',
    answer: 'Kader günde sadece bir kez konuşur. Şanslı mesajınızı cihazınıza kaydediyoruz, böylece gün boyunca size rehberlik eder.'
  },
  {
    question: 'Mesajlar rastgele mi oluşturuluyor?',
    answer: 'Evet — her gün rastgele bir mesaj seçilir ve yerel olarak kaydedilir. 25 mesajın her birinin seçilme şansı eşittir, bu da zamanla çeşitlilik sağlar.'
  }
];

const howTo: FortuneCookieLocaleContent['howTo'] = [
  { name: 'Kurabiyeyi kır', text: 'Kurabiyeyi açmak için üzerine art arda tıklayın.' },
  { name: 'Şansını oku', text: 'İçindeki gizli mesajı ve o günkü şanslı numaralarınızı keşfedin.' }
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

export const content: FortuneCookieLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  bibliographyTitle: 'Kader Kaynakçası',
  ui: {
    title: 'Online Şans Kurabiyesi',
    description: 'Günlük dijital falınız.',
    instruction: 'Kaderinizi açmak için kurabiyeye vurun',
    dailyStatus: 'Bugünkü kaderiniz deşifre edildi.',
    shareBtn: 'Bilgeliği Paylaş',
    shareTitle: 'Şans Kurabiyem',
    shareText: 'Kader konuştu: "$TEXT"\nNumaralarım: $NUMS\n\nKaderini burada keşfet:',
    copied: 'Kopyalandı!',
    fortunes: JSON.stringify([
      "Aradığın şans başka bir kurabiyede.",
      "Günleri sayma, günlerini saygın kıl.",
      "Bin millik bir yolculuk tek bir adımla başlar.",
      "Hata, keşfin başlangıcıdır.",
      "Öğrenme kapasiteniz en büyük varlığınızdır.",
      "Gülümse, evren seni izliyor.",
      "Sabır, kökü acı ama meyvesi çok tatlı bir ağaçtır.",
      "Yavaş büyümekten korkma, sadece yerinde saymaktan kork.",
      "Bugün, dün endişelendiğin yarındır.",
      "Mutluluk hazır bir şey değildir. Kendi eylemlerinden gelir.",
      "Rüzgarın yönünü değiştiremiyorsan, yelkenlerini ona göre ayarla.",
      "Şimdi ne ekersen, sonra onu biçersin.",
      "Yaratıcılık, zekanın eğlenmesidir.",
      "Hataları arama, çözümleri ara.",
      "Yüksekliğini belirleyen şey yeteneğin değil, tavrındır.",
      "Başarı, her gün tekrarlanan küçük çabaların toplamıdır.",
      "Yapabileceğine inan, yolun yarısını gitmiş olursun.",
      "Harika işler yapmanın tek yolu, yaptığınız işi sevmektir.",
      "Hayat %10 başınıza gelenler, %90 ise ona nasıl tepki verdiğinizdir.",
      "Dünyada görmek istediğin değişimin kendisi ol.",
      "Geleceği tahmin etmenin en iyi yolu onu icat etmektir.",
      "Sadelik en yüksek gelişmişlik düzeyidir.",
      "Kaderinin efendisi ve ruhunun kaptanı sensin.",
      "Yakında bakış açınızı değiştirecek haberler alacaksınız.",
      "Beklenmedik bir yolculuk size büyük neşeler getirecek."
    ]),
    faqTitle: 'FAQ',
    bibliographyTitle: 'Referanslar'
  },
  seo: [
    { type: 'title', text: 'Şans Kurabiyesinin Gizemi', level: 2 },
    { type: 'paragraph', html: 'Bu ilginç kurabiyelerin nereden geldiğini hiç merak ettiniz mi? Onları Çin yemeğiyle ilişkilendirsek de, kökenleri Japonya ve Amerika Birleşik Devletleri arasında büyüleyici bir yolculuktur. Bugün bildiğimiz şans kurabiyesi büyük olasılıkla Çin\'de değil (ki orada neredeyse hiç bilinmezler), 20. yüzyılın başlarında California\'da icat edilmiştir.' },
    { type: 'tip', title: 'Falcımız Nasıl Çalışır?', html: 'Her gün bir kurabiye açabilirsiniz. Sistem kaderinizi kaydeder, böylece 24 saat boyunca hatırlarsınız. Şanslı mesaj tarayıcınızda yerel olarak saklanır — tamamen özeldir, hiçbir sunucu dahil olmaz. Yeni bir tahmin için yarın tekrar gelin!' },
    { type: 'title', text: 'Kehanetlerin Felsefesi', level: 3 },
    { type: 'paragraph', html: 'İnsanlar her zaman belirsiz zamanlarda rehberlik aramışlardır. Delfi Kahini\'nden I Ching\'e kadar, fal bakma sistemleri tutarlı bir psikolojik işleve hizmet eder: Bize <strong>durup düşünmek</strong> için izin verirler. Bir şans kurabiyesi geleceği tahmin etmez — sizi onun hakkında düşünmeye sevk eder.' },
    { type: 'list', items: [
      '<strong>Antik Çin:</strong> I Ching (Değişimler Kitabı, M.Ö. ~1000), kararlara rehberlik etmek ve kaderi yorumlamak için heksagramlar kullanıyordu.',
      '<strong>Klasik Yunan:</strong> Delfi Kahini, tanrısal rehberlik olarak yorumlanan gizemli beyanlarla hükümdarları ve vatandaşları kendine çekiyordu.',
      '<strong>Modern Japonya:</strong> Şinto tapınaklarında ağaç dallarına bağlanan Omikuji fal kağıtları, kaderi ritüelle harmanlar.',
      '<strong>20. Yüzyıl ABD:</strong> Şans kurabiyeleri, Çin-Amerikan mutfağının eş anlamlısı haline gelmeden önce Japon-Amerikan topluluklarında ortaya çıktı.'
    ]},
    { type: 'stats', items: [
      { value: '3 milyar+', label: 'Yıllık üretilen şans kurabiyesi sayısı', icon: 'mdi:cookie' },
      { value: 'M.Ö. ~1000', label: 'I Ching\'in kökeni', icon: 'mdi:book-open-variant' },
      { value: '25', label: 'Bu falcıdaki mesaj sayısı', icon: 'mdi:star-shooting' },
      { value: 'Günde 1', label: 'Her gün tek bir mesaj', icon: 'mdi:calendar-today' }
    ], columns: 4 },
  ],
  faq,
  bibliography: [
    { name: 'Şans Kurabiyesi Tarihi (İngilizce)', url: 'https://en.wikipedia.org/wiki/Fortune_cookie' }
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
