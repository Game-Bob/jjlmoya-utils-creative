import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ZalgoGeneratorLocaleContent } from '../index';

const slug = 'zalgo-olusturucu';
const title = 'Zalgo Oluşturucu';
const description = 'Mesajlarınızı kademeli olarak taşan Unicode karakterleriyle bozun. Glitch efektinin yoğunluğunu ve yönünü ayarlayın.';

const faq: ZalgoGeneratorLocaleContent['faq'] = [
  { question: 'Zalgo metni nedir?', answer: 'Unicode birleştirme karakterlerini (diyakritikler) aşırı derecede kullanan bir metin türüdür. Dikey olarak istiflendiklerinde, bu karakterler orijinal satırlarından "taşarak" internet kültüründe popüler olan bozulma, düzensizlik veya korku görsel efekti oluşturur.' },
  { question: 'Zalgo metni neden bu kadar garip görünüyor?', answer: 'Temel bir harfin üzerine, altına veya ortasına işaretler eklenmesine izin veren Unicode standardının bir özelliğini kullanır. Kaç işaret eklenebileceğine dair kesin bir sınır olmadığı için metin, üstteki veya alttaki satırları "işgal" edebilir.' },
  { question: 'Bu metni sosyal medyada kullanabilir miyim?', answer: 'Evet, çoğu modern platform (Instagram, Twitter, Discord) Unicode\'u destekler. Ancak bazı ağlar veya cihazlar, arayüz okunabilirliğini korumak için çok yüksek yoğunluktaki fazla karakterleri filtreleyebilir veya kesebilir.' },
  { question: 'Metinden Zalgo efektini nasıl kaldırabilirim?', answer: 'Bozulmuş metni temizlemek için JavaScript dize normalleştirmesini kullanabilir veya sadece düz metin kabul eden temel bir metin düzenleyiciye yapıştırabilirsiniz. Aracımız tamamen yaratıcı amaçlıdır ve orijinal içeriğe zarar vermez.' },
];

const howTo: ZalgoGeneratorLocaleContent['howTo'] = [
  { name: 'Temel mesajı yaz', text: 'Ana metin kutusuna "bozmak" istediğiniz metni girin.' },
  { name: 'Kaos yoğunluğunu ayarla', text: 'Kaç tane birleştirme karakterinin istifleneceğini belirlemek için kaydırıcıyı hareket ettirin. Yüksek yoğunluk = okunması daha zor.' },
  { name: 'Taşma yönünü seç', text: 'Bozulmanın yukarıya mı, aşağıya mı yoksa aynı anda tüm yönlere mi doğru büyüyeceğini seçin.' },
  { name: 'Sonucu kopyala', text: 'Kopyala düğmesine tıklayın. Sonuç metni, glitch efektini korumak için gereken tüm görünmez baytları içerir.' },
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

export const content: ZalgoGeneratorLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  bibliographyTitle: 'Kaos Kaynakçası',
  ui: {
    title: 'Zalgo Oluşturucu',
    description: 'H̸e̵r̵ ̸ş̵e̸y̴ ̷b̵o̶z̵u̸k̷',
    inputPlaceholder: 'Normal mesajınızı buraya yazın...',
    intensityLabel: 'Bozulma Seviyesi',
    outputLabel: 'Bozulmuş Sonuç',
    copyBtn: 'Kaosu Kopyala',
    copied: 'Kopyalandı!',
    faqTitle: 'FAQ',
    bibliographyTitle: 'Referanslar',
    configTitle: 'Yapılandırma',
    intensity: 'Yoğunluk',
    upLabel: 'Üst Bozulma',
    midLabel: 'Orta Gürültü',
    downLabel: 'Alt Bozulma',
    resetBtn: 'Değerleri Sıfırla',
    warningText: 'UYARI: Zalgo metni, kapsayıcısından görsel olarak taşabilecek birleşik Unicode karakterleri kullanır. Sosyal medyada dikkatli kullanın.',
    previewLabel: 'Gerçek Zamanlı Önizleme',
    emptyLabel: 'Boş',
    charLabel: 'KARAKTERLER',
    noteText: 'Not: Bazı tarayıcılar birleşik karakterlerin oluşturulmasını sınırlayabilir'
  },
  seo: [
    { type: 'title', text: 'Zalgo Metni Nedir ve Görsel Bozulma Nasıl Çalışır?', level: 2 },
    { type: 'paragraph', html: 'Zalgo Metni, Unicode standardının belirli bir özelliğini kullanan bir tipografik manipülasyon biçimidir: <strong>birleştirme karakterleri</strong>. Normal karakterlerin aksine, bu diyakritikler yatay yer kaplamaz — temel harfin üzerinde dikey olarak istiflenirler ve internet kültüründe çok popüler olan o "dijital kaos" veya "kozmik korku" estetiğini yaratırlar.' },
    { type: 'title', text: 'Sürecin Anatomisi', level: 3 },
    { type: 'paragraph', html: 'Oluşturucumuz her karakteri bağımsız olarak işleyerek üç farklı vektörde rastgele Unicode kod noktaları enjekte eder: <strong>üst</strong> (yukarıda istiflenen diyakritikler), <strong>orta</strong> (harfin içinden geçenler) ve <strong>alt</strong> (aşağıda sarkanlar).' },
    { type: 'tip', title: 'Bozulma Algoritması', html: 'Her temel karakter için <code>sayı = yoğunluk × 30</code> hesaplanır. Her vektöre o kadar rastgele diyakritik eklenir. 1.5 yoğunlukta harf başına 45 adede kadar birleştirme karakteri elde edebilirsiniz.' },
    { type: 'title', text: 'Etik ve Uygulamalar', level: 3 },
    { type: 'list', items: [
      '<strong>Sosyal Medya:</strong> Instagram veya TikTok\'ta dikkat çekin. Alışılmışın dışına çıkmak isteyen biyografiler için mükemmeldir.',
      '<strong>Korku Hikayesi Anlatımı:</strong> Kurgusal anlatıları, creepypasta\'ları veya ele geçirilmiş sistem simülasyonlarını dramatize edin.',
      '<strong>Erişilebilirlik:</strong> Uyarı — Zalgo metni ekran okuyucular tarafından okunamaz. Sadece görsel dekorasyon olarak kullanın, asla kritik içerikler için kullanmayın.',
      '<strong>SEO:</strong> Çekirdek anahtar kelimelerde (H1, meta başlıklar) asla Zalgo kullanmayın. İndeksleme botları bu karakterleri normalleştiremeyebilir.',
    ]},
    { type: 'title', text: 'Köken: Something Awful\'dan Glitch Art\'a', level: 3 },
    { type: 'paragraph', html: 'Zalgo bir oluşturucu olarak değil, klasik çizgi romanlara bir müdahale olarak başladı. Kullanıcı Shmorky, 2000\'lerin ortalarında Nancy veya Archie gibi karakterleri deforme etmeye, lekeler ve çarpıtmalar eklemeye başladı. <strong>"O geliyor" (He comes)</strong> ifadesi, gerçekliği yiyip bitiren bir varlığın gelişini duyurarak bu eserlerin kaderini mühürledi.' },
    { type: 'glossary', items: [
      { term: 'Birleştirme Karakteri', definition: 'Temel bir karakterin üzerine, altına veya içinden geçecek şekilde yerleştirilmek üzere tasarlanmış bir Unicode kod noktası. Arapça, Vietnamca ve Hintçe gibi dillerde meşru olarak kullanılır.' },
      { term: 'Diyakritik', definition: 'Telaffuzunu veya anlamını değiştirmek için temel bir harfe eklenen işaret. Zalgo, görsel taşma oluşturmak için bunları kötüye kullanır.' },
      { term: 'Unicode Bloğu', definition: 'Bitişik Unicode kod noktaları aralığı. Zalgo karakterleri çoğunlukla "Birleşen Diyakritik İşaretler" bloğundan (U+0300–U+036F) gelir.' },
      { term: 'Glitch Art', definition: 'Dijital medyadaki hataları, kusurları ve bozulmaları bilinçli olarak etkileyici bir teknik olarak dahil eden veya simüle eden bir estetik.' },
    ]},
  ],
  faq,
  bibliography: [
    { name: 'Unicode Standardı - Birleştirme Karakterleri (İngilizce)', url: 'https://www.unicode.org/standard/principles.html#Combining_Characters' },
    { name: 'Zalgo Metni Fenomeni (İngilizce)', url: 'https://knowyourmeme.com/memes/zalgo' },
    { name: 'MDN - Dize normalleştirme', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize' },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
