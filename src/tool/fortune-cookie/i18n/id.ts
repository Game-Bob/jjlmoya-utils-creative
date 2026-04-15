import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { FortuneCookieLocaleContent } from '../index';

const slug = 'kue-keberuntungan';
const title = 'Kue Keberuntungan';
const description = 'Periksa nasib harian Anda dan temukan angka keberuntungan Anda. Satu ramalan per hari, diungkapkan dengan satu klik.';

const faq: FortuneCookieLocaleContent['faq'] = [
  {
    question: 'Bisakah saya membuka lebih dari satu kue per hari?',
    answer: 'Nasib hanya berbicara sekali sehari. Kami menyimpan ramalan Anda di perangkat sehingga ramalan tersebut memandu Anda sepanjang hari.'
  },
  {
    question: 'Apakah ramalannya dihasilkan secara acak?',
    answer: 'Ya — satu ramalan acak dipilih setiap hari dan disimpan secara lokal. Masing-masing dari 25 ramalan memiliki peluang yang sama untuk dipilih, memastikan variasi dari waktu ke waktu.'
  }
];

const howTo: FortuneCookieLocaleContent['howTo'] = [
  { name: 'Pecahkan kuenya', text: 'Klik kue berulang kali untuk membukanya.' },
  { name: 'Baca ramalan Anda', text: 'Temukan pesan tersembunyi di dalamnya dan angka keberuntungan Anda untuk hari ini.' }
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

export const content: FortuneCookieLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  bibliographyTitle: 'Bibliografi Nasib',
  ui: {
    title: 'Kue Keberuntungan Online',
    description: 'Peramal digital harian Anda.',
    instruction: 'Tekan kue untuk membuka nasib Anda',
    dailyStatus: 'Nasib Anda telah terungkap untuk hari ini.',
    shareBtn: 'Bagikan Kebijaksanaan',
    shareTitle: 'Kue Keberuntungan Saya',
    shareText: 'Nasib telah berbicara: "$TEXT"\nAngka saya: $NUMS\n\nTemukan nasib Anda di sini:',
    copied: 'Tersalin!',
    fortunes: JSON.stringify([
      "Keberuntungan yang Anda cari ada di kue lain.",
      "Jangan menghitung hari, buatlah hari-hari itu berarti.",
      "Perjalanan seribu mil dimulai dengan satu langkah kaki.",
      "Kesalahan adalah pendahuluan dari penemuan.",
      "Kemampuan Anda untuk belajar adalah aset terbesar Anda.",
      "Tersenyumlah, alam semesta sedang memperhatikan Anda.",
      "Kesabaran adalah pohon dengan akar yang pahit tetapi buah yang sangat manis.",
      "Jangan takut tumbuh perlahan, takutlah hanya jika Anda diam di tempat.",
      "Hari ini adalah hari esok yang Anda khawatirkan kemarin.",
      "Kebahagiaan bukan sesuatu yang sudah jadi. Itu berasal dari tindakan Anda sendiri.",
      "Jika Anda tidak dapat mengubah arah angin, sesuaikan layar Anda.",
      "Apa yang Anda tanam sekarang, akan Anda tuai nanti.",
      "Kreativitas adalah kecerdasan yang sedang bersenang-senang.",
      "Jangan mencari kesalahan, carilah solusi.",
      "Sikap Anda, bukan bakat Anda, yang akan menentukan ketinggian Anda.",
      "Kesuksesan adalah jumlah dari upaya kecil yang diulangi hari demi hari.",
      "Percayalah Anda bisa dan Anda sudah setengah jalan menuju ke sana.",
      "Satu-satunya cara untuk melakukan pekerjaan hebat adalah dengan mencintai apa yang Anda lakukan.",
      "Hidup adalah 10% apa yang terjadi pada Anda dan 90% bagaimana Anda bereaksi terhadapnya.",
      "Jadilah perubahan yang ingin Anda lihat di dunia.",
      "Cara terbaik untuk memprediksi masa depan adalah dengan menciptakannya.",
      "Kesederhanaan adalah kecanggihan tertinggi.",
      "Anda adalah penguasa nasib Anda dan kapten jiwa Anda.",
      "Segera Anda akan menerima berita yang akan mengubah perspektif Anda.",
      "Perjalanan tak terduga akan membawakan Anda kegembiraan yang besar."
    ]),
    faqTitle: 'FAQ',
    bibliographyTitle: 'Referensi'
  },
  seo: [
    { type: 'title', text: 'Misteri Kue Keberuntungan', level: 2 },
    { type: 'paragraph', html: 'Pernahkah Anda bertanya-tanya dari mana kue-kue aneh ini berasal? Meskipun kita mengaitkannya dengan makanan Tiongkok, asalnya adalah perjalanan yang menarik antara Jepang dan Amerika Serikat. Kue keberuntungan seperti yang kita kenal sekarang kemungkinan besar ditemukan di California pada awal abad ke-20, bukan di Tiongkok — di mana kue ini hampir tidak dikenal.' },
    { type: 'tip', title: 'Cara Kerja Peramal Kami', html: 'Setiap hari Anda dapat membuka satu kue. Sistem menyimpan nasib Anda sehingga Anda mengingatnya selama 24 jam. Ramalan disimpan secara lokal di browser Anda — sepenuhnya pribadi, tidak melibatkan server. Datanglah lagi besok untuk ramalan baru!' },
    { type: 'title', text: 'Filosofi Peramal', level: 3 },
    { type: 'paragraph', html: 'Manusia selalu mencari bimbingan di masa-masa yang tidak pasti. Dari Peramal Delphi hingga I Ching, sistem ramalan menjalankan fungsi psikologis yang konsisten: sistem tersebut memberi kita izin untuk <strong>berhenti sejenak dan merenung</strong>. Kue keberuntungan tidak memprediksi masa depan — kue itu mendorong Anda untuk memikirkannya.' },
    { type: 'list', items: [
      '<strong>Tiongkok Kuno:</strong> I Ching (Book of Changes, ~1000 SM) menggunakan heksagram untuk memandu keputusan dan menafsirkan nasib.',
      '<strong>Yunani Klasik:</strong> Peramal Delphi menarik bagi para penguasa dan warga negara dengan pernyataan samar yang ditafsirkan sebagai bimbingan ilahi.',
      '<strong>Jepang Modern:</strong> Slip keberuntungan Omikuji di kuil Shinto, yang diikatkan ke dahan pohon, memadukan nasib dengan ritual.',
      '<strong>Amerika Serikat Abad ke-20:</strong> Kue keberuntungan muncul di komunitas Jepang-Amerika sebelum menjadi sinonim dengan masakan Tionghoa-Amerika.',
    ]},
    { type: 'stats', items: [
      { value: '3 miliar+', label: 'Kue keberuntungan dibuat setiap tahun', icon: 'mdi:cookie' },
      { value: '~1000 SM', label: 'Asal mula I Ching', icon: 'mdi:book-open-variant' },
      { value: '25', label: 'Ramalan dalam peramal ini', icon: 'mdi:star-shooting' },
      { value: '1/hari', label: 'Satu nasib per hari', icon: 'mdi:calendar-today' },
    ], columns: 4 },
  ],
  faq,
  bibliography: [
    { name: 'Sejarah Kue Keberuntungan', url: 'https://id.wikipedia.org/wiki/Kue_keberuntungan' }
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
