import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { BeadPatternGeneratorLocaleContent } from '../index';

const slug = 'pembuat-pola-manik';
const title = 'Pembuat Pola';
const description = 'Buat pixel art dan skema manik-manik untuk Miyuki atau Hama dari foto Anda. Algoritma kuantisasi warna, mode pandangan terowongan, dan ekspor ZIP.';

const faq: BeadPatternGeneratorLocaleContent['faq'] = [
  { question: 'Apa itu kuantisasi warna dalam pola?', answer: 'Ini adalah proses pengurangan ribuan warna dalam foto menjadi hanya beberapa yang sesuai dengan warna manik-manik asli yang tersedia (misalnya, Miyuki atau Hama). Kami menggunakan algoritma cerdas untuk menjaga kemiripan visual dengan palet seminimal mungkin.' },
  { question: 'Bisakah saya menggunakan pola ini untuk sulam silang (cross-stitch)?', answer: 'Ya, generator ini membuat grafik kisi yang sangat kompatibel dengan sulam silang. Anda hanya perlu memilih ukuran kisi yang sesuai dengan kain Anda (Aida 14, 18, dsb.).' },
  { question: 'Apa perbedaan antara Manik Miyuki dan Hama?', answer: 'Manik Miyuki Delica adalah manik-manik kaca yang sangat kecil dan presisi untuk perhiasan. Manik Hama berbahan plastik dan disatukan dengan setrika. Alat kami memungkinkan Anda menyesuaikan rasio aspek agar pola tidak terdistorsi tergantung pada bahan yang digunakan.' },
  { question: 'Bagaimana cara kerja algoritma dithering?', answer: 'Dithering menciptakan ilusi warna yang lebih banyak dengan mencampurkan piksel dari warna yang berbeda dalam pola berjarak. Ini membantu gradasi warna tampak lebih halus meskipun dengan palet manik-manik yang terbatas.' },
];

const howTo: BeadPatternGeneratorLocaleContent['howTo'] = [
  { name: 'Unggah gambar yang jelas', text: 'Pilih foto dengan kontras yang baik dan sedikit detail kecil agar pola lebih mudah diikuti.' },
  { name: 'Sesuaikan ukuran kisi', text: 'Tentukan berapa banyak manik lebar dan tinggi untuk karya akhir Anda. Lebih banyak manik = lebih banyak detail tetapi lebih sulit.' },
  { name: 'Optimalkan palet warna', text: 'Kurangi jumlah warna hingga sesuai dengan manik-manik yang tersedia dalam kit kerajinan Anda.' },
  { name: 'Ekspor skema panduan', text: 'Hasilkan pola akhir dengan kode warna untuk digunakan sebagai referensi saat merangkai manik-manik Anda pada papan atau benang.' },
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

export const content: BeadPatternGeneratorLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  bibliographyTitle: 'Bibliografi Artisan',
  ui: {
    title: 'Laboratorium Pola',
    subtitle: 'Rekayasa warna untuk tangan Anda',
    description: 'Dari foto ke skema manik-manik.',
    gridSizeLabel: 'Ukuran (Lebar)',
    colorCountLabel: 'Warna',
    optionsLabel: 'Opsi',
    rulersLabel: 'Penggaris',
    symbolsTooltip: 'Pola Kejutan',
    symbolsLabel: 'Simbol',
    downloadBtn: 'Unduh',
    uploadTitle: 'Unggah Visi Anda',
    uploadSubtitle: 'dan biarkan keajaiban digital terjadi',
    paletteTitle: 'DNA Kromatik',
    reuploadBtn: 'Ubah Gambar',
    tunnelVisionTitle: 'Pandangan Terowongan',
    tunnelVisionSubtitle: 'Asisten presisi Anda baris demi baris.',
    uploadLabel: 'Unggah foto Anda',
    pixelateBtn: 'Hasilkan Pola',
    faqTitle: 'FAQ',
    bibliographyTitle: 'Referensi'
  },
  seo: [
    { type: 'title', text: 'Alkimia Digital: Mengubah Piksel Menjadi Seni Nyata', level: 2 },
    { type: 'paragraph', html: 'Selamat datang di <strong>Studio Pola Utama</strong>. Sebuah <em>mesin kecerdasan kromatik</em> yang dirancang untuk arsitek Pixel Art, master Miyuki, dan visioner sulam silang. Jembatan Anda antara dunia digital dan buatan tangan.' },
    { type: 'card', icon: 'mdi:grid', title: 'Kisi Cerdas', html: 'Algoritma <strong>subsampling spasial</strong> kami tidak sekadar "menyusutkan" gambar Anda. Ia menganalisis struktur visual untuk memetakan kelompok piksel yang kompleks ke sel individu, menjaga integritas siluet dan tepi layaknya ilustrator ahli.' },
    { type: 'card', icon: 'mdi:palette', title: 'Kuantisasi Warna K Means', html: 'Kami menerapkan varian algoritma <strong>K-Means Clustering</strong> yang secara matematis menemukan nada "centroid" dari gambar Anda. Kesetiaan visual yang mengagumkan dengan palet minimalis 12, 24, atau 32 warna.' },
    { type: 'title', text: 'Penguasaan dalam 3 Langkah', level: 3 },
    { type: 'card', icon: 'mdi:image-search', title: 'Pilihan Sempurna', html: 'Cari <strong>kontras tinggi</strong>, pencahayaan dramatis, dan bentuk ikonik. Potret dengan latar belakang bersih, logo, dan seni vektor dapat diterjemahkan dengan indah.' },
    { type: 'card', icon: 'mdi:ruler', title: 'Kalibrasi Dimensi', html: '<strong>Miyuki Delica:</strong> 50 manik ≈ 8cm · <strong>Hama Midi:</strong> 50 manik ≈ 25cm · <strong>Sulam Silang:</strong> 1 sel = 1 jahitan.' },
    { type: 'card', icon: 'mdi:eye-check', title: 'Eksekusi Zen (Mode Pandangan Terowongan)', html: 'Sistem <strong>Pandangan Terowongan</strong> kami bertindak sebagai asisten pribadi Anda, meredupkan kebisingan visual dan menyoroti secara bedah hanya baris yang aktif. Konsentrasi mutlak.' },
    { type: 'title', text: 'Kanvas Tak Terbatas', level: 3 },
    { type: 'list', items: [
      '<strong>Perhiasan Tekstil:</strong> Pola rumit untuk alat tenun dan gelang geometris.',
      '<strong>Sulam Silang:</strong> Skema modern yang siap disulam piksel demi piksel.',
      '<strong>Mosaik:</strong> Mural skala besar menggunakan tesserae keramik yang disederhanakan.',
      '<strong>Retro Gaming:</strong> Aset dan sprite 8-bit otentik dalam hitungan detik.',
    ]},
    { type: 'stats', items: [
      { value: '10–100', label: 'Rentang lebar manik', icon: 'mdi:arrow-expand-horizontal' },
      { value: '2–32', label: 'Slot palet warna', icon: 'mdi:palette-swatch' },
      { value: 'K-Means', label: 'Algoritma kuantisasi', icon: 'mdi:function-variant' },
      { value: 'ZIP', label: 'Format ekspor (pola + panduan)', icon: 'mdi:zip-box' },
    ], columns: 4 },
    { type: 'paragraph', html: 'Di era layar yang fana, menciptakan sesuatu yang fisik adalah tindakan revolusioner. Alat ini tidak berusaha mengotomatisasi seni, tetapi untuk <strong>memberdayakan artisan</strong>. Kami memberi Anda presisi komputasi sehingga tangan Anda dapat membangun warisan yang langgeng.' },
  ],
  faq,
  bibliography: [
    { name: 'Scikit-Image: Color Quantization using K-Means', url: 'https://scikit-learn.org/0.23/auto_examples/cluster/plot_color_quantization.html' },
    { name: 'Miyuki Delica Beads Specification', url: 'https://www.miyuki-beads.co.jp/english/seedbeads/delica.html' },
    { name: 'Visgraf Lab: Dithering Algorithms', url: 'https://www.visgraf.impa.br/Courses/ip00/proj/Dithering1/floyd_steinberg_dithering.html' },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
