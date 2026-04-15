import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ExcuseGeneratorLocaleContent } from '../index';

const slug = 'pembuat-alasan';
const title = 'Pembuat Alasan';
const description = 'Mesin perjudian semantik untuk melepaskan diri dari komitmen dengan gaya. Hasilkan alasan yang surealis dan tak terbantahkan secara instan.';

const faq: ExcuseGeneratorLocaleContent['faq'] = [
  {
    question: 'Bisakah generator ini menyelamatkan pernikahan saya?',
    answer: 'Meskipun kami bukan terapis, menghindari makan malam dengan mertua menggunakan keadaan darurat teknis yang masuk akal dapat secara signifikan mengurangi ketegangan. Gunakanlah dengan bijak.'
  },
  {
    question: 'Mengapa kalimatnya begitu surealis?',
    answer: 'Strategi ini didasarkan pada Disonansi Kognitif. Jika Anda mengatakan sesuatu yang membosankan, itu dapat diverifikasi. Jika Anda mengatakan sesuatu yang tidak masuk akal, kejutan tersebut akan menghalangi rasa marah seseorang.'
  }
];

const howTo: ExcuseGeneratorLocaleContent['howTo'] = [
  { name: 'Hasilkan', text: 'Klik tombol buat untuk membuat alasan baru.' },
  { name: 'Salin', text: 'Klik tombol salin untuk memindahkan alasan tersebut ke papan klip Anda.' }
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
  inLanguage: 'id',
};

export const content: ExcuseGeneratorLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  bibliographyTitle: 'Bibliografi Hiburan',
  ui: {
    title: 'Pembuat Alasan Surealis',
    description: 'Kalkulator alibi generasi berikutnya.',
    subjectLabel: 'Subjek',
    actionLabel: 'Tindakan',
    victimLabel: 'Korban',
    generateBtn: 'HASILKAN ALASAN',
    copyBtn: 'Salin kegilaan ini',
    copied: 'Tersalin!',
    starts: JSON.stringify([
      "Kucing saya", "Nenek saya", "Presiden", "Alien", "Tetangga saya dari lantai 5",
      "Wifi", "Horoskop saya", "Penjelajah waktu", "Mesin cuci", "Kulkas saya",
      "Semangat Natal", "Bayangan saya", "Seorang ninja", "Polisi vegan", "Siri",
      "Tanaman karnivora saya", "Kurir Amazon", "Klon jahat saya", "Seorang penyihir", "Godzilla"
    ]),
    middles: JSON.stringify([
      "telah menyatakan perang terhadap", "telah memakan", "telah menculik", "telah membakar",
      "sedang mengadakan pesta di", "telah muntah di", "menolak untuk meninggalkan",
      "telah meretas", "telah mencuri", "telah jatuh cinta dengan", "sedang merenungkan",
      "telah memberikan mantra pada", "sedang memprotes terhadap", "telah mendirikan aliran sesat di",
      "sedang menari samba di", "telah memanggil iblis di", "telah memblokir akses ke",
      "telah berubah menjadi emas", "sedang mencoba menjual", "telah menulis buku tentang"
    ]),
    ends: JSON.stringify([
      "kunci rumah saya.", "keinginan saya untuk hidup.", "pintu garasi.",
      "celana favorit saya.", "router ruang tamu.", "satu-satunya pasang sepatu saya.",
      "hukum fisika.", "martabat saya.", "lift gedung.",
      "akun Netflix saya.", "sikat gigi saya.", "akta rumah saya.",
      "koleksi pogs saya.", "rem tangan mobil.", "keinginan saya untuk bersosialisasi.",
      "persediaan kopi saya.", "tutup toilet.", "remot TV.",
      "kaus kaki keberuntungan saya.", "peradaban Barat."
    ]),
    faqTitle: 'FAQ',
    bibliographyTitle: 'Referensi'
  },
  seo: [
    { type: 'title', text: 'Seni Ilmiah dalam Membuat Alasan Sempurna', level: 2 },
    { type: 'paragraph', html: 'Kita hidup di era hiperkoneksi. Ponsel Anda bergetar, jam tangan memberi notifikasi, dan agenda sosial Anda terlihat seperti permainan Tetris yang hampir kalah. Tekanan untuk menyetujui segalanya telah menciptakan epidemi kelelahan sosial.' },
    { type: 'title', text: 'Kebangkitan JOMO (Joy of Missing Out)', level: 3 },
    { type: 'paragraph', html: 'Meskipun FOMO (Fear of Missing Out) mendominasi dekade terakhir, para pakar kesehatan digital kini menganjurkan <strong>JOMO: Kegembiraan dalam Melewatkan Sesuatu</strong>. Ini bukan tentang isolasi, tetapi tentang intensionalitas.' },
    { type: 'tip', title: 'Formula Alibi yang Tak Terbantahkan', html: '<strong>Subjek yang Terdisosiasi:</strong> Anda tidak pernah menjadi pelakunya. Itu adalah "wifi", "kucing saya", "alam semesta". Alihkan kesalahan ke entitas eksternal.<br><strong>Tindakan Hiperbolik:</strong> Situasinya harus cukup tidak masuk akal atau cukup teknis sehingga tidak ada yang menanyakan detailnya.<br><strong>Blok Fisik:</strong> Hasil akhirnya harus biner: saya pergi atau saya tetap di rumah.' },
    { type: 'title', text: 'Sejarah Singkat Alasan', level: 3 },
    { type: 'list', items: [
      '<strong>Abad Pertengahan:</strong> "Kuda saya kehilangan tapalnya" (Klasik sepanjang masa).',
      '<strong>Revolusi Industri:</strong> "Mesin uapnya terlalu panas".',
      '<strong>Era Digital:</strong> "Internet saya terputus tepat di tengah pembaruan".',
    ]},
    { type: 'proscons', items: [
      { pro: 'Meringankan tekanan sosial secara instan', con: 'Penggunaan berlebihan merusak kepercayaan' },
      { pro: 'Melindungi energi dan batasan Anda', con: 'Dapat menimbulkan rasa bersalah jika digunakan sembarangan' },
      { pro: 'Nada kreatif dan humoris meredakan ketegangan', con: 'Tidak cocok untuk konteks formal atau profesional' },
    ]},
  ],
  faq,
  bibliography: [
    { name: 'Manifesto Penunda', url: 'https://example.com/manifesto' }
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
