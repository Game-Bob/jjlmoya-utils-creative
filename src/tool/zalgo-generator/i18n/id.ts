import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { ZalgoGeneratorLocaleContent } from '../index';

const slug = 'pembuat-teks-zalgo';
const title = 'Pembuat Teks Zalgo';
const description = 'Rusakkan pesan Anda dengan karakter Unicode yang meluap dan bertingkat. Sesuaikan intensitas dan arah efek glitch.';

const faq: ZalgoGeneratorLocaleContent['faq'] = [
  { question: 'Apa itu teks Zalgo?', answer: 'Ini adalah jenis teks yang menggunakan karakter penggabung Unicode (diakritik) secara berlebihan. Saat ditumpuk secara vertikal, karakter-karakter ini "meluap" dari baris aslinya, menciptakan efek visual kerusakan, kekacauan, atau horor yang populer dalam budaya internet.' },
  { question: 'Mengapa teks Zalgo terlihat sangat aneh?', answer: 'Ini memanfaatkan fitur standar Unicode yang memungkinkan penambahan tanda di atas, di bawah, atau di tengah huruf dasar. Karena tidak ada batasan ketat tentang berapa banyak tanda yang dapat ditambahkan, teks tersebut dapat "menyerang" baris di atas atau di bawahnya.' },
  { question: 'Bisakah saya menggunakan teks ini di media sosial?', answer: 'Ya, sebagian besar platform modern (Instagram, Twitter, Discord) mendukung Unicode. Namun, beberapa jaringan atau perangkat mungkin memfilter atau memotong karakter berlebih pada intensitas yang sangat tinggi untuk menjaga keterbacaan antarmuka.' },
  { question: 'Bagaimana cara menghapus efek Zalgo dari teks?', answer: 'Untuk membersihkan teks yang rusak, Anda dapat menggunakan normalisasi string JavaScript atau cukup tempelkan ke editor teks dasar yang hanya menerima teks biasa. Alat kami murni kreatif dan tidak merusak konten asli.' },
];

const howTo: ZalgoGeneratorLocaleContent['howTo'] = [
  { name: 'Tulis pesan dasar', text: 'Masukkan teks yang ingin Anda "rusak" di kotak teks utama.' },
  { name: 'Sesuaikan intensitas kekacauan', text: 'Geser pengatur untuk menentukan berapa banyak karakter penggabung yang akan ditumpuk. Semakin tinggi intensitas = semakin sulit dibaca.' },
  { name: 'Pilih arah luapan', text: 'Pilih apakah kerusakan harus tumbuh ke atas, ke bawah, atau ke semua arah secara bersamaan.' },
  { name: 'Salin hasilnya', text: 'Klik tombol salin. Teks yang dihasilkan mencakup semua bita tak terlihat yang diperlukan untuk mempertahankan efek glitch.' },
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

export const content: ZalgoGeneratorLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  ui: {
    title: 'Pembuat Teks Zalgo',
    description: 'S̷e̷m̴u̴a̷n̵y̸a̷ ̴r̸u̶s̷a̶k̵',
    inputPlaceholder: 'Ketik pesan normal Anda di sini...',
    intensityLabel: 'Tingkat Kerusakan',
    outputLabel: 'Hasil yang Rusak',
    copyBtn: 'Salin Kekacauan',
    copied: 'Tersalin!',
    faqTitle: 'FAQ',
    bibliographyTitle: 'Referensi',
    configTitle: 'Konfigurasi',
    intensity: 'Intensitas',
    upLabel: 'Kerusakan Atas',
    midLabel: 'Derau Tengah',
    downLabel: 'Kerusakan Bawah',
    resetBtn: 'Atur Ulang Nilai',
    warningText: 'PERINGATAN: Teks Zalgo menggunakan karakter Unicode gabungan yang mungkin meluap secara visual dari wadahnya. Gunakan dengan hati-hati di media sosial.',
    previewLabel: 'Pratinjau Langsung',
    emptyLabel: 'Kosong',
    charLabel: 'KARAKTER',
    noteText: 'Catatan: Beberapa peramban mungkin membatasi perenderan karakter gabungan'
  },
  seo: [
    { type: 'title', text: 'Apa Itu Teks Zalgo dan Bagaimana Cara Kerja Kerusakan Visual?', level: 2 },
    { type: 'paragraph', html: 'Teks Zalgo adalah bentuk manipulasi tipografi yang memanfaatkan fitur spesifik standar Unicode: <strong>karakter penggabung</strong>. Berbeda dengan karakter normal, diakritik ini tidak memakan ruang horizontal — mereka menumpuk secara vertikal di atas huruf dasar, menciptakan estetika "kekacauan digital" atau "horor kosmik" yang sangat populer dalam budaya internet.' },
    { type: 'title', text: 'Anatomi Proses', level: 3 },
    { type: 'paragraph', html: 'Generator kami memproses setiap karakter secara independen, menyuntikkan ledakan acak titik kode Unicode dalam tiga vektor berbeda: <strong>atas</strong> (diakritik yang menumpuk di atas), <strong>tengah</strong> (yang menembus huruf), dan <strong>bawah</strong> (tergantung di bawah).' },
    { type: 'tip', title: 'Algoritma Kerusakan', html: 'Untuk setiap karakter dasar, <code>jumlah = intensitas × 30</code> dihitung. Begitu banyak diakritik acak ditambahkan di setiap vektor. Pada intensitas 1,5 Anda bisa mendapatkan hingga 45 karakter penggabung per huruf.' },
    { type: 'title', text: 'Etika dan Aplikasi', level: 3 },
    { type: 'list', items: [
      '<strong>Media Sosial:</strong> Menarik perhatian di Instagram atau TikTok. Sempurna untuk bio yang ingin tampil beda.',
      '<strong>Penceritaan Horor:</strong> Mendramatisir narasi fiksi, creepypasta, atau simulasi sistem yang disusupi.',
      '<strong>Aksesibilitas:</strong> Peringatan — teks Zalgo tidak dapat dibaca oleh pembaca layar. Gunakan hanya sebagai dekorasi visual, jangan pernah untuk konten penting.',
      '<strong>SEO:</strong> Jangan pernah gunakan Zalgo dalam kata kunci inti (H1, judul meta). Bot pengindeksan mungkin gagal menormalkan karakter-karakter ini.',
    ]},
    { type: 'title', text: 'Asal-usul: Dari Something Awful ke Glitch Art', level: 3 },
    { type: 'paragraph', html: 'Zalgo tidak dimulai sebagai generator, melainkan sebagai intervensi dalam komik strip klasik. Pengguna Shmorky, pada pertengahan 2000-an, mulai merusak karakter seperti Nancy atau Archie, menambahkan noda dan distorsi. Frasa <strong>"Dia datang"</strong> menyegel nasib karya-karya ini, mengumumkan kedatangan entitas yang melahap kenyataan.' },
    { type: 'glossary', items: [
      { term: 'Karakter Penggabung', definition: 'Titik kode Unicode yang dirancang untuk ditempatkan di atas, di bawah, atau menembus karakter dasar. Digunakan secara sah dalam bahasa-bahasa seperti Arab, Vietnam, dan Hindi.' },
      { term: 'Diakritik', definition: 'Tanda yang ditambahkan pada huruf dasar untuk mengubah pengucapan atau maknanya. Zalgo menyalahgunakan ini untuk menciptakan luapan visual.' },
      { term: 'Blok Unicode', definition: 'Rentang titik kode Unicode yang berdampingan. Karakter Zalgo sebagian besar berasal dari blok "Kombinasi Tanda Diakritik" (U+0300–U+036F).' },
      { term: 'Glitch Art', definition: 'Estetika yang secara sengaja memasukkan atau mensimulasikan kesalahan, artefak, dan kerusakan pada media digital sebagai teknik ekspresif.' },
    ]},
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
