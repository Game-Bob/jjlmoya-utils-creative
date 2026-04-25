import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { DiceRollerLocaleContent } from '../index';

const slug = 'zar-atma';
const title = 'Zar Atma';
const description = 'RPG ve masaüstü oyunlarınız için eksiksiz bir zar simülatörü. Değiştiriciler ve geçmiş kaydı ile d4, d6, d8, d10, d12, d20 ve d100 atın.';

const faq: DiceRollerLocaleContent['faq'] = [
  {
    question: 'Avantajlı zar atma (D&D) nasıl simüle edilir?',
    answer: 'd20 düğmesine iki kez tıklayarak torbaya iki adet d20 zarı ekleyin. Zar atıldığında, her iki bireysel sonucu gözlemleyin ve yüksek olanı tutun. Görüntülenen toplam, iki zarın toplamı olacaktır ancak sonuç dökümünde her zarı ayrı ayrı görebilirsiniz.',
  },
  {
    question: 'Sonuçlardaki yeşil veya kırmızı rengin anlamı nedir?',
    answer: 'Yeşil sonuçlar, o zarın mümkün olan en yüksek değerini attığını ("kritik başarı") gösterir. Kırmızı sonuçlar ise en düşük değeri ("1", yani en kötü olası sonuç) gösterir. Bu, kritik başarıları ve başarısızlıkları bir bakışta tespit etmeyi kolaylaştırır.',
  },
  {
    question: 'Aynı tipten birden fazla zar ekleyebilir miyim?',
    answer: 'Evet. Bir zara her tıklandığında torbaya eklenir. d6\'ya üç kez tıklarsanız, torba "3d6" gösterecektir. Sayıyı azaltmak için, torbadaki her zar grubunun yanında görünen "−" düğmesine tıklayın.',
  },
  {
    question: 'Dijital zarlar fiziksel olanlar kadar rastgele mi?',
    answer: 'İstatistiksel olarak, evet. Modern JavaScript motorları, çok yüksek kalitede tekdüze dağılıma sahip yalancı rastgele (pseudorandom) algoritmalar (xorshift128+) kullanır. Gerçek bir fiziksel zar, sonuçları saptıran küçük üretim kusurlarına sahip olabilir; dijital zarlarda bu sorun yoktur.',
  },
  {
    question: 'd100 nedir ve nasıl kullanılır?',
    answer: 'd100 (veya d%), 1\'den 100\'e kadar bir sayı üretir ve Call of Cthulhu veya Warhammer Fantasy Roleplay gibi yüzde tabanlı oyun sistemlerinde kullanılır. "Doğrudan olasılığı" temsil eder: Gizlilik (Stealth) yeteneğiniz %65 ise, başarılı olmak için 65 veya daha düşük atmanız gerekir.',
  },
];

const howTo: DiceRollerLocaleContent['howTo'] = [
  { name: 'Zar havuzunu oluşturun', text: 'Zar düğmelerine (d4, d6, d8...) tıklayarak havuzunuza ekleyin. Her bir tıklama, seçilen tiple bir zar ekler. Aynı atışta farklı tipleri karıştırabilirsiniz.' },
  { name: 'Değiştiriciyi ayarlayın', text: 'Bonuslar veya cezalar uygulamak için (D&D\'deki yetenek değiştiricisi gibi) değiştiricinin yanındaki "+" ve "−" düğmelerini kullanın. Değiştirici otomatik olarak toplama eklenir.' },
  { name: 'Zar atın', text: '"Zar At" düğmesine basın. Sağ panel, nihai toplamı ve her bir zarın dökümünü gösterir; kritik vuruşlar (maksimum) yeşil, başarısızlıklar (minimum) ise kırmızı ile belirtilir.' },
  { name: 'Geçmişi kontrol edin', text: 'Her atış, kullanılan zar ifadesi, toplam sonuç ve tam zamanıyla birlikte geçmişe kaydedilir. Geçmişi ilgili düğme ile temizleyebilirsiniz.' },
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

export const content: DiceRollerLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  ui: {
    title: 'Zar Atma',
    description: 'Şansınız bol olsun.',
    rollBtn: 'Zar At',
    totalLabel: 'Toplam',
    historyLabel: 'Geçmiş',
    clearHistoryBtn: 'Geçmişi Temizle',
    faqTitle: 'SSS',
    bibliographyTitle: 'Referanslar',
    addDiceLabel: 'Torbaya zar ekleyin',
    bagLabel: 'Zar torbası',
    emptyBagBtn: 'Boşalt',
    emptyBagText: 'Eklemek için zarlara tıklayın',
    modifierLabel: 'Değiştirici',
    rollManyLabel: '$COUNT zar at',
    rollOneLabel: '$COUNT zar at',
    preRollText: 'Zar ekle ve at',
    emptyHistoryText: 'Zar geçmişi burada görünecektir'
  },
  seo: [
    { type: 'title', text: 'Rastgeleliğin Sanatı: Zarın Tarihi ve Matematiği', level: 2 },
    { type: 'paragraph', html: 'Zarlar insanlığın en eski rastgelelik oluşturucularından biridir. <strong>Astragali</strong> (koyun ve keçilerin aşık kemikleri), M.Ö. 5000 kadar eski bir tarihte Mezopotamya ve Mısır\'da ilkel dört yüzlü zarlar olarak kullanılıyordu. Oyulmuş kemikten modern epoksi reçine ikosahedronlara (yirmi yüzlü) geçiş sadece estetik bir evrim değil; olasılık teorisi ve oyun mekaniği tasarımı üzerinden geçen bir yolculuktur.' },
    { type: 'title', text: 'Standart Zar Ailesi', level: 3 },
    { type: 'paragraph', html: '1974\'te <strong>Dungeons &amp; Dragons</strong> tarafından popüler hale getirilen, rol yapma oyunlarındaki en geniş zar seti, beş Platonik cisim ve iki ek şekilden oluşur: d4 (tetrahedron), d6 (küp), d8 (oktahedron), d10 (beşgen trapezohedron), d12 (dodekahedron), d20 (ikosahedron) ve d100 (yüzdelik zar). Her bir çokyüzlü tekdüze dağılımı garanti eder: tüm yüzlerin gelme olasılığı tam olarak aynıdır.' },
    { type: 'list', items: [
      '<strong>d4 – Tetrahedron:</strong> Çıplak ayakla basıldığında en tehlikelisi. Dört üçgen yüzey, yüzey başına %25 olasılık. Genellikle hançer hasarı veya düşük seviyeli büyüler için kullanılır.',
      '<strong>d6 – Küp:</strong> En evrensel zar. Mısır oyunu Senet\'ten beri tüm masa oyunlarında mevcuttur. Kübik geometrisi mükemmel eşit dağılımı garanti eder.',
      '<strong>d8 – Oktahedron:</strong> Mızrak veya savaş baltası zarı. Sekiz eşkenar üçgen yüzey. Yüzey başına %12,5 olasılık.',
      '<strong>d10 – Beşgen Trapezohedron:</strong> Standart set içindeki tek Platonik cisim olmayan şekil. "Tepe" başına iki zıt yüz. d100 (iki d10 birleşimi) için temeldir.',
      '<strong>d12 – Dodekahedron:</strong> Barbarın zarı. On iki beşgen yüz. Birçok sistemde değeri hafife alınır, D&D 5e Barbar sınıfının yıldızıdır.',
      '<strong>d20 – Ikosahedron:</strong> RPG\'nin kralı. Yirmi üçgen yüzey. d20 sisteminin ana kahramanıdır: neredeyse tüm eylemlerin başarısını veya başarısızlığını belirler.',
      '<strong>d100 – Yüzdelik:</strong> İki d10 birleşimi (onluklar + birlikler). Call of Cthulhu veya Warhammer Fantasy gibi sistemlerde hassas olasılıkları tanımlar.',
    ]},
    { type: 'stats', items: [
      { value: 'M.Ö. 5000', label: 'İlk zarlar (astragali)', icon: 'mdi:history' },
      { value: '1974', label: 'D&D seti popülerleştirdi', icon: 'mdi:sword' },
      { value: '7 tip', label: 'Standart RPG zarları', icon: 'mdi:dice-multiple' },
      { value: '2¹²⁸', label: 'JS rastgelelik periyodu', icon: 'mdi:function-variant' },
    ], columns: 4 },
    { type: 'title', text: 'Olasılıklar ve Dağılım Eğrileri', level: 3 },
    { type: 'paragraph', html: 'Tek bir zar attığınızda, <strong>ayrık tekdüze dağılım</strong> elde edersiniz: her sonucun olasılığı tam olarak aynıdır (1/n). Ancak birden fazla zarı birleştirdiğiniz anda, matematiksel sihir bu düz eğriyi <strong>yaklaşık normal dağılıma</strong> dönüştürür. Bu yüzden 2d6, 1d12 ile aynı değildir: iki adet altı yüzlü zarla 7 atma olasılığı 6/36 ≈ %16,7 iken, uç değerler (2 ve 12) zamanın yalnızca %2,8\'inde gerçekleşir.' },
    { type: 'tip', title: 'Avantaj ve Dezavantaj (D&D 5e)', html: '<strong>Avantaj</strong> mekaniği, 2d20 atılıp yüksek olan sonucun tutulmasından oluşur. Matematiksel olarak bu, ortalamayı 10,5\'ten yaklaşık 13,8\'e yükseltir. <strong>Dezavantaj</strong> ise tam tersini yapar: düşük olanı alır, ortalamayı yaklaşık 7,2\'ye düşürür. Atıcımız, torbaya iki d20 ekleyip bireysel sonuçları karşılaştırarak bunu simüle etmenizi sağlar.' },
    { type: 'title', text: 'Değiştiriciler: Zar ve Karakter Arasındaki Köprü', level: 3 },
    { type: 'paragraph', html: 'Çoğu RPG sisteminde zar tek başına hareket etmez: karakterin yeteneklerini temsil eden bir <strong>değiştirici</strong> eklenir veya çıkarılır. D&D 5e\'de +5\'lik bir Güç değiştiricisi, 1d20 attığınızı, 5 eklediğinizi ve sonucu düşmanın Zırh Sınıfına (AC) karşı kontrol ettiğinizi ifade eder. Atıcımız, bu mekanikleri aslına uygun olarak yansıtmak için bir değiştirici kontrolü içerir.' },
    { type: 'tip', title: 'Zar Gösterim Standardı', html: '<strong>XdY+Z</strong> gösterimi rol yapma oyunlarında fiili standarttır: Z değiştiricili Y yüzlü X zar sayısı. "3d6+2", üç adet altı yüzlü zar atıp toplama 2 ekle anlamına gelir. Aracımız, atışlarınızı kolayca paylaşabilmeniz veya kaydedebilmeniz için geçmişte bu gösterimi kullanır.' },
    { type: 'glossary', items: [
      { term: 'Kritik Vuruş', definition: 'Bir zarda maksimum değerin atılması (örneğin d20\'de 20 atmak). Çoğu RPG sisteminde genellikle özel bonus etkileri tetikler.' },
      { term: 'Fumble / Doğal 1', definition: 'Bir zarda minimum değerin (1) atılması. Genellikle dramatik bir başarısızlık veya olumsuz sonuçla sonuçlanır.' },
      { term: 'Dice Pool (Zar Havuzu)', definition: 'Aynı anda atılan zarlar koleksiyonu. Aracımızdaki havuz, her zar tipini sayıya göre gruplandırılmış olarak gösterir (örneğin 3d6 + 2d8).' },
      { term: 'Modifier (Değiştirici)', definition: 'Bir karakterin becerisini, nitelik bonusunu veya durumsal cezasını temsil eden, bir zar sonucuna eklenen veya sonucundan çıkarılan sabit bir sayı.' },
      { term: 'Yüzdelik Atış', definition: 'Yeteneklerin yüzde olarak ölçüldüğü beceri tabanlı sistemlerde kullanılan, 1–100 arası bir sonuç üretmek için iki d10 kullanan bir atış.' },
    ]},
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
