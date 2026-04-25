import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { SynesthesiaPainterLocaleContent } from '../index';

const slug = 'sinestezi-ressami';
const title = 'Sinestezi Ressamı';
const description = 'Grafem-renk sinestezisine göre kelimelerin rengini görselleştirin. Her harfin kendine özgü rengi vardır, metni kromatik sanata dönüştürür.';

const faq: SynesthesiaPainterLocaleContent['faq'] = [
  {
    question: 'Tüm sinestezikler her harf için aynı renkleri mi görür?',
    answer: 'Hayır. Sinestetik renkler her birey için benzersizdir. İstatistiksel eğilimler olsa da (birçok kişi için A kırmızı olma eğilimindedir), hiçbir iki sinestezik tam olarak aynı palete sahip değildir. Bu araç, "doğru" olanları değil, toplum çalışmalarında en sık bildirilen renkleri kullanır.',
  },
  {
    question: 'Bu aracı sürekli kullanarak sinestezi geliştirebilir miyim?',
    answer: 'Kesin nörolojik anlamda hayır. Gerçek sinestezi öğrenilen bir beceri değil, sinir sisteminin bir özelliğidir. Ancak, renk-harf ilişkilendirmelerinin tekrarlanan kullanımı güçlü çağrışımsal hafızalar oluşturabilir. Bazı çalışmalar, bu ilişkilendirmelerin uygulanmasının metin hafızasını geliştirebileceğini öne sürmektedir.',
  },
  {
    question: '"Aura" modu ne işe yarar?',
    answer: 'Aura modu, bazı sinesteziklerin renkleri harflere entegre değil de harflerin etrafında "yüzen" veya "parlayan" şeklinde görmelerini simüle eder. Özellikle karanlık bir arka planda daha atmosferik ve sürükleyici bir görsel deneyim yaratır.',
  },
  {
    question: '"Noktalar" modunun herhangi bir bilimsel temeli var mı?',
    answer: 'Bu sanatsal bir soyutlamadır. Harflerin tanınabilir şeklini ortadan kaldırarak metni "kromatik özüne" indirger. Sonuç, kromatik veri görselleştirmelerine veya noktalı resimlere (puantilizm) benzer ve bir metnin "renk imzasını" anlam karışıklığı olmadan görmenizi sağlar.',
  },
  {
    question: 'I ve O gibi bazı harfler neden beyaz veya siyah?',
    answer: 'Sinestezi çalışmalarında, I ve O ünlüleri ile W harfi sıklıkla beyaz, şeffaf veya siyah olarak tanımlanır. Bu araç, görünürlüğü her zaman garanti altına almak için bu renkleri aktif arka plana uyarlar: karanlık arka planda beyaz, açık arka planda siyah.',
  },
];

const howTo: SynesthesiaPainterLocaleContent['howTo'] = [
  { name: 'Metin yaz', text: 'Yazma alanına tıklayın ve yazmaya başlayın. Her harf, istatistiksel sinestetik çağrışımına göre renkli görünecektir.' },
  { name: 'Görselleştirme modunu değiştir', text: 'Harfler (renkli metin), Noktalar (renkli daireler) ve Aura (kromatik haleli ışıklı harfler) arasında geçiş yapmak için sağ üstteki düğmeleri kullanın.' },
  { name: 'Farklı metinleri keşfet', text: 'Benzersiz kromatik paletlerini keşfetmek için isimler, farklı dillerdeki kelimeler veya cümleler yazın. Uzun kelimeler büyüleyici görsel gradyanlar oluşturur.' },
  { name: 'Temizle ve yeniden başla', text: 'Tuvali boşaltmak ve yeni bir metni keşfetmek için alt çubuktaki "Temizle" düğmesini kullanın.' },
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

export const content: SynesthesiaPainterLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  ui: {
    title: 'Sinestezi Ressamı',
    description: 'Kelimelerinizi kromatik sanata dönüştürün.',
    modeLetters: 'Harfler',
    modeDots: 'Noktalar',
    modeAura: 'Aura',
    placeholder: 'Buraya yazın...',
    footerText: 'Kişisel renk paletinizi keşfetmek için yazın',
    clearBtn: 'Temizle',
    faqTitle: 'FAQ',
    bibliographyTitle: 'Referanslar'
  },
  seo: [
    { type: 'title', text: 'Grafem-Renk Sinestezisi Nedir?', level: 2 },
    { type: 'paragraph', html: '<strong>Sinestezi</strong>, bir duyunun uyarılmasının otomatik olarak başka bir duyuda tepkiyi tetiklediği nörolojik bir durumdur. En çok çalışılan ve yaygın varyantı <strong>grafem-renk sinestezisidir</strong>: Buna sahip olanlar, her harfi veya sayıyı içsel, sabit ve canlı bir renkle algılarlar. Bu hayal gücü veya metafor değildir; bir sinestezik için "A" harfi, ateşin sıcak olması gibi kırmızıdır. Bu araç, toplum çalışmalarında her grafem için en sık bildirilen renklere dayalı bir <em>istatistiksel palet</em> uygular.' },
    { type: 'title', text: 'Nörobilim: Çapraz Aktivasyon Teorisi', level: 3 },
    { type: 'paragraph', html: 'Grafem-renk sinestezisi için en yaygın kabul gören nörolojik model <strong>çapraz aktivasyondur</strong>. Harf şekillerini tanımada yer alan temporal korteks alanları (fusiform girus), rengi işleyen bölgelerle (V4 alanı) anatomik olarak bitişiktir. Sinestezisi olan kişilerde, bu bölgeler arasında daha büyük yapısal veya işlevsel bağlantı vardır, bu nedenle bir harfi tanımak aynı zamanda renk nöronlarını da etkinleştirir. İşlevsel nörogörüntüleme (fMRI) araştırmaları, sinesteziklerin tek renkli olsa bile metin okurken V4\'te gerçek bir aktivasyon gösterdiğini doğrulamıştır.' },
    { type: 'tip', title: 'Üç Görselleştirme Modu', html: '<strong>Harfler:</strong> Grafem bazında renklendirilmiş orijinal metin. Tam bir metnin "kromatik melodisini" görmek için idealdir. <strong>Noktalar:</strong> Her karakter kendi renginde bir daireye dönüşür; metin kaybolur ve sadece renk müziği kalır. <strong>Aura:</strong> Harfler, sanki metin kendi enerjisiyle parlıyormuş gibi kendi renklerinde bir hale yayar.' },
    { type: 'title', text: 'İstatistikler ve Renk Evrenselleri', level: 3 },
    { type: 'paragraph', html: 'Sinestetik renkler her fert için benzersiz olsa da, Simner ve ark. (2006) ve Eagleman ve ark. (2007) tarafından yapılan çalışmalar önemli istatistiksel modeller bulmuştur. <strong>A</strong> sesli harfi çoğu kişi için kırmızı olma eğilimindedir; <strong>O</strong> beyaz veya siyahtır; <strong>S</strong> turkuaz veya yeşil tonlarında görünür; <strong>E</strong> yeşil veya beyaz olarak görünür. İlginç bir şekilde, renk-harf ilişkilendirmeleri farklı kültürler arasında olduğundan ziyade bir dil kültürü içinde daha tutarlıdır; bu da erken dönem alfabe öğreniminin rolünü düşündürür.' },
    { type: 'list', items: [
      '<strong>Yaygınlık:</strong> Nüfusun yaklaşık %4\'ü bir dereceye kadar grafem-renk sinestezisine sahiptir, ancak daha yeni çalışmalar klinik altı formlar dahil edildiğinde bu rakamı %6-8\'e çıkarmaktadır.',
      '<strong>Cinsiyet yanlılığı:</strong> Nedenleri henüz tam olarak açıklanmasa da sinestezi kadınlarda erkeklere göre 3 ila 6 kat daha yaygındır.',
      '<strong>Kalıtımsallık:</strong> Belirgin bir genetik bileşeni vardır: Her zaman aynı tip sinesteziyle olmasa da ailelerde görülme eğilimindedir.',
      '<strong>Tutarlılık:</strong> Öğrenilmiş çağrışımların aksine, sinestetik renkler zaman içinde olağanüstü derecede kararlıdır. 10 yıllık takip çalışmaları, grafem-renk çağrışımlarında %90\'ın üzerinde tutarlılık göstermektedir.',
      '<strong>Ünlü sinestezikler:</strong> Vladimir Nabokov, Wassily Kandinsky, Nikola Tesla ve Billy Joel, eserlerini etkileyen sinestetik deneyimlerini açıkça tanımlamışlardır.',
    ]},
    { type: 'stats', items: [
      { value: '%4–8', label: 'Sinestezili nüfus', icon: 'mdi:brain' },
      { value: '%90+', label: '10 yıllık renk tutarlılığı', icon: 'mdi:check-circle' },
      { value: '3–6 kat', label: 'Kadınlarda daha yaygın', icon: 'mdi:gender-female' },
      { value: '26+10', label: 'Renkli harf ve rakamlar', icon: 'mdi:alphabetical' },
    ], columns: 4 },
    { type: 'title', text: 'Sanat ve Sinestezi: Duyular Birleştiğinde', level: 3 },
    { type: 'paragraph', html: 'Soyut dışavurumculuğun kurucusu <strong>Wassily Kandinsky</strong>, hem grafem-renk hem de müzik-renk sinestezisi yaşadı: Enstrümanları renklerde duydu (sarı bir trompetti, derin mavi bir çello) ve bu algıları soyut sanat teorisini oluşturmak için kullandı. Müzikte <strong>Alexander Scriabin</strong>, her notaya karşılık gelen renkleri yansıtmak üzere tasarlanmış bir "tastiera per luce" (ışık klavyesi) parçası içeren <em>Prometheus: The Poem of Fire</em>\'ı besteledi.' },
    { type: 'tip', title: 'Bu Aracın Renk Paleti', html: 'Renk atamaları, bilimsel literatürdeki en yaygın istatistiksel verilerden esinlenmiştir. <strong>A → kırmızı</strong>, <strong>E → yeşil</strong>, <strong>I → arka plana göre beyaz/siyah</strong>, <strong>O → siyah/beyaz</strong>, <strong>U → kehribar</strong>. Ünsüzler daha az üniform modeller izlese de, okunabilirliği garanti etmek için arka planla kontrast her zaman önceliklidir.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
