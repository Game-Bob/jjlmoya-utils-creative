import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { GlitchImageDistorterLocaleContent } from '../index';

const slug = 'glitch-gorsel-bozucu';
const title = 'Glitch Görsel Bozucu';
const description = 'RGB ayırmaları, tarama çizgileri, piksel sıralama ve animasyonlu bozulmalarla görsellerinizi glitch sanatına dönüştürün. Photoshop gerekmez.';

const faq: GlitchImageDistorterLocaleContent['faq'] = [
  {
    question: 'Glitch sanatı nedir?',
    answer: 'Glitch sanatı, dijital görselleri veya verileri manipüle ederek kasıtlı görsel hatalar üretme yoluyla oluşturulan bir dijital sanat formudur. Bu "glitch"ler; dijital bozulma ve kaos estetiği yaratan parçalanmış renkler, bozulmuş şekiller ve öngörülemeyen desenlerle sonuçlanır.',
  },
  {
    question: 'Kendi görsellerimi kullanabilir miyim?',
    answer: 'Evet! Herhangi bir PNG, JPG veya WebP görselini yükleyebilir, tuvale sürükleyip bırakabilir veya Ctrl+V ile panonuzdan doğrudan bir görsel yapıştırabilirsiniz. Ayrıca örnek görseli de kullanabilirsiniz.',
  },
  {
    question: 'Farklı bozulma efektleri ne işe yarar?',
    answer: 'Yozlaşma (Corruption), kromatik sapma efekti için RGB kanallarını ayırır. Parazit (Interference), isteğe bağlı titreme ile eski monitör benzeri tarama çizgileri ekler. Piksel Sıralama (Pixel Sorting), parlak piksellerin seçilen bir yönde "akmasını" sağlar. Statik Gürültü (Static Noise), klasik TV karıncalanması ekler.',
  },
  {
    question: 'Glitch efektini canlandırabilir miyim?',
    answer: 'Kesinlikle! "Glitch Canlandır" modu, parametrelere mikro rastgele hareketler uygulayarak sürekli döngüye giren canlı, titreşen bir efekt oluşturur. Bunu animasyonlu GIF veya WebP olarak dışa aktarabilirsiniz.',
  },
  {
    question: 'Hangi formatlarda dışa aktarabilirim?',
    answer: 'Statik kullanım için yüksek kaliteli bir PNG indirebilir veya animasyon modu etkinse animasyonlu GIF veya WebP olarak dışa aktarabilirsiniz. Instagram, Discord veya diğer platformlar için mükemmeldir.',
  },
  {
    question: 'Kaos düğmesi ne işe yarar?',
    answer: '"Rastgele Kaos" düğmesi, tüm kaydırıcı değerlerini anında rastgele hale getirerek beklenmedik ve genellikle şaşırtıcı glitch kombinasyonları oluşturur. Manuel ayarlama yapmadan yaratıcı potansiyeli keşfetmek için mükemmeldir.',
  },
];

const howTo: GlitchImageDistorterLocaleContent['howTo'] = [
  { name: 'Görsel yükle', text: 'Tuvale bir görsel sürükleyip bırakın, Ctrl+V ile yapıştırın, dosya düğmesiyle yükleyin veya "Örnek görsel kullan"a tıklayın.' },
  { name: 'Sürgüleri ayarla', text: 'Farklı glitch efektleri uygulamak için Yozlaşma, Parazit, Piksel Sıralama ve Gürültü sürgülerini kullanın. Önizleme gerçek zamanlı güncellenir.' },
  { name: 'Animasyonu etkinleştir', text: 'Titreşimler ve parlamalar eklemek için "Glitch Canlandır" düğmesini açın. Görsel dinamik bir glitch efektiyle canlanacaktır.' },
  { name: 'Çalışmanı dışa aktar', text: 'Statik sanat için PNG olarak indirin veya animasyon etkinse GIF/WebP olarak dışa aktarın. Glitch sanatınızı sosyal medyada paylaşın!' },
  { name: 'Kaos ile deney yap', text: 'Beklenmedik efekt kombinasyonlarını otomatik olarak keşfetmek için "Rastgele Kaos" düğmesine tıklayın.' },
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

export const content: GlitchImageDistorterLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  ui: {
    title: 'Glitch Bozucu',
    description: 'Saniyeler içinde glitch sanatı oluşturun.',
    dragDropText: 'Bir görseli buraya sürükleyin veya yüklemek için tıklayın',
    pasteHint: 'İpucu: Ctrl+V ile de bir görsel yapıştırabilirsiniz',
    exampleImageBtn: 'Örnek görsel kullan',
    corruptionLabel: 'Yozlaşma (RGB Ayırma)',
    interferenceLabel: 'Parazit (Çizgiler)',
    tremorLabel: 'Titreme',
    pixelSortLabel: 'Piksel Sıralama',
    pixelSortDirectionLabel: 'Yön',
    noiseLabel: 'Statik Gürültü',
    animateBtn: 'Glitch Canlandır',
    chaosBtn: 'Rastgele Kaos',
    downloadPngBtn: 'PNG İndir',
    downloadGifBtn: 'GIF İndir',
    undoBtn: 'Geri Al',
    redoBtn: 'Yinele',
    footerText: '30 saniyeden kısa sürede bozulmuş dijital sanat oluşturun',
    faqTitle: 'FAQ',
    bibliographyTitle: 'Referanslar'
  },
  seo: [
    { type: 'title', text: 'Glitch Sanatı Nedir?', level: 2 },
    { type: 'paragraph', html: '<strong>Glitch sanatı</strong>, estetik sonuçlar üretmek için dijital hataları, bozulmuş verileri ve görsel yapaylıkları kasıtlı olarak kullanan yaratıcı bir uygulamadır. Kusursuzluğu arayan geleneksel sanatın aksine glitch, teknolojik arızanın beklenmedik güzelliğini — hatadan doğan parçalanmış renkleri ve kaotik desenleri — yüceltir.' },
    { type: 'title', text: 'Kökenler ve Dijital Estetik', level: 3 },
    { type: 'paragraph', html: 'Glitch estetiği, 2000\'lerin başında dijital sanatçıların bozulmuş görüntü dosyaları ve donanım arızalarıyla denemeler yapmaya başlamasıyla ortaya çıktı. <strong>Rosa Menkman</strong> gibi sanatçılar, dijital yapaylıkların şiirselliğini araştırarak glitch sanatını güzel sanatlar statüsüne yükseltti. Estetik; VHS bozulması, iletim hataları ve dijital sistemlerin görünür "gürültü"sünden beslenir.' },
    { type: 'title', text: 'Temel Glitch Teknikleri', level: 3 },
    { type: 'list', items: [
      '<strong>RGB Ayırma:</strong> Kromatik sapma oluşturmak için kırmızı, yeşil ve mavi renk kanallarını kaydırmak.',
      '<strong>Tarama Çizgileri:</strong> Retro bir etki için eski CRT monitörlerini taklit eden yatay çizgiler simüle etmek.',
      '<strong>Piksel Sıralama:</strong> Pikselleri parlaklığa göre sıralamak ve "erime" efekti yaratmak için kaydırmak.',
      '<strong>Data Moshing:</strong> Kareleri beklenmedik şekillerde karıştırmak için video kodek verilerini manipüle etmek.',
      '<strong>Bit Kaydırma:</strong> İkili verileri doğrudan değiştirmek, dramatik renk ve şekil bozulmalarıyla sonuçlanır.',
    ]},
    { type: 'tip', title: 'Glitch\'in Arkasındaki Felsefe', html: 'Glitch sanatı, "mükemmel" dijital temsil fikrine meydan okur. Hatayı kucaklayarak teknolojinin güvenilirliğini sorgular ve teknolojinin gerçeklik algımıza nasıl aracılık ettiğini keşfederiz. Bu, sistem arızası ve kaosun içine gizlenmiş güzellik hakkındaki sanattır.' },
    { type: 'title', text: 'Günümüzdeki Uygulamalar', level: 3 },
    { type: 'paragraph', html: 'Bugün glitch estetiği her yerde: albüm kapakları, müzik videoları, moda ve grafik tasarım. Bu araç, derin teknik bilgiye sahip olmadan herkesin profesyonel görünümlü dijital bozulmalar üretmesine olanak tanıyarak glitch sanatı oluşturmayı demokratikleştirir.' },
    { type: 'stats', items: [
      { value: '2000\'ler', label: 'Glitch sanatının doğuşu', icon: 'mdi:history' },
      { value: '∞', label: 'Olası glitch kombinasyonları', icon: 'mdi:shuffle-variant' },
      { value: '<30sn', label: 'Oluşturma süresi', icon: 'mdi:flash' },
      { value: '3+', label: 'Dışa aktarma formatı', icon: 'mdi:download-multiple' },
    ], columns: 4 },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
