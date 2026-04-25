import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { GlitchImageDistorterLocaleContent } from '../index';

const slug = 'distorsi-gambar-glitch';
const title = 'Distorsi Gambar Glitch';
const description = 'Ubah gambar menjadi seni glitch dengan pemisahan RGB, garis pemindaian, pengurutan piksel, dan distorsi animasi. Tanpa Photoshop.';

const faq: GlitchImageDistorterLocaleContent['faq'] = [
  {
    question: 'Apa itu seni glitch?',
    answer: 'Seni glitch adalah bentuk seni digital yang dibuat dengan memanipulasi gambar atau data digital untuk menghasilkan kesalahan visual yang disengaja. "Glitch" ini menghasilkan warna yang terfragmentasi, bentuk yang terdistorsi, dan pola yang tidak terduga yang menciptakan estetika kerusakan digital dan kekacauan.',
  },
  {
    question: 'Bisakah saya menggunakan gambar sendiri?',
    answer: 'Ya! Anda dapat mengunggah gambar PNG, JPG, atau WebP apa pun, seret dan lepas ke kanvas, atau tempel gambar langsung dari papan klip menggunakan Ctrl+V. Anda juga dapat menggunakan gambar contoh.',
  },
  {
    question: 'Apa fungsi dari berbagai efek distorsi?',
    answer: 'Korupsi (Corruption) memisahkan saluran RGB untuk efek aberasi kromatik. Interferensi menambahkan garis pemindaian seperti monitor lama dengan getaran opsional. Pengurutan Piksel (Pixel Sorting) membuat piksel cerah "menetes" ke arah yang dipilih. Noise Statis menambahkan salju TV klasik.',
  },
  {
    question: 'Bisakah saya menganimasikan efek glitch?',
    answer: 'Tentu saja! Mode "Glitch Animate" menerapkan gerakan mikro-acak ke parameter, menciptakan efek bergetar yang hidup dan berulang terus menerus. Anda dapat mengekspor ini sebagai GIF animasi atau WebP.',
  },
  {
    question: 'Format apa yang bisa saya ekspor?',
    answer: 'Anda dapat mengunduh PNG berkualitas tinggi untuk penggunaan statis, atau mengekspor sebagai GIF atau WebP animasi jika mode animasi diaktifkan. Sempurna untuk Instagram, Discord, atau platform lainnya.',
  },
  {
    question: 'Apa kegunaan tombol Chaos?',
    answer: 'Tombol "Chaos Random" secara instan mengacak semua nilai slider, menciptakan kombinasi glitch yang tidak terduga dan seringkali mengejutkan. Sempurna untuk menjelajahi potensi kreatif tanpa penyesuaian manual.',
  },
];

const howTo: GlitchImageDistorterLocaleContent['howTo'] = [
  { name: 'Muat gambar', text: 'Seret dan lepas gambar ke kanvas, tempel dengan Ctrl+V, unggah melalui tombol file, atau klik "Gunakan gambar contoh".' },
  { name: 'Sesuaikan slider', text: 'Gunakan slider Korupsi, Interferensi, Pengurutan Piksel, dan Noise untuk menerapkan berbagai efek. Pratinjau diperbarui secara real-time.' },
  { name: 'Aktifkan animasi', text: 'Aktifkan tombol "Glitch Animate" untuk menambahkan getaran dan kerlipan. Gambar akan menjadi hidup dengan efek glitch dinamis.' },
  { name: 'Ekspor kreasi Anda', text: 'Unduh sebagai PNG untuk karya statis, atau ekspor sebagai GIF/WebP jika animasi diaktifkan. Bagikan seni glitch Anda di media sosial!' },
  { name: 'Bereksperimen dengan Chaos', text: 'Klik tombol "Chaos Random" untuk menemukan kombinasi efek yang mengejutkan secara otomatis.' },
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

export const content: GlitchImageDistorterLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  ui: {
    title: 'Distorsi Glitch',
    description: 'Buat seni glitch dalam hitungan detik.',
    dragDropText: 'Seret gambar ke sini atau klik untuk mengunggah',
    pasteHint: 'Tips: Anda juga bisa menempel gambar dengan Ctrl+V',
    exampleImageBtn: 'Gunakan gambar contoh',
    corruptionLabel: 'Korupsi (Pemisahan RGB)',
    interferenceLabel: 'Interferensi (Garis)',
    tremorLabel: 'Getaran',
    pixelSortLabel: 'Pengurutan Piksel',
    pixelSortDirectionLabel: 'Arah',
    noiseLabel: 'Noise Statis',
    animateBtn: 'Glitch Animate',
    chaosBtn: 'Chaos Acak',
    downloadPngBtn: 'Unduh PNG',
    downloadGifBtn: 'Unduh GIF',
    undoBtn: 'Urungkan',
    redoBtn: 'Ulangi',
    footerText: 'Buat seni digital rusak dalam waktu kurang dari 30 detik',
    faqTitle: 'FAQ',
    bibliographyTitle: 'Referensi'
  },
  seo: [
    { type: 'title', text: 'Apa Itu Seni Glitch?', level: 2 },
    { type: 'paragraph', html: '<strong>Seni glitch</strong> adalah praktik kreatif yang sengaja mengeksploitasi kesalahan digital, data yang rusak, dan artefak visual untuk menghasilkan hasil estetika. Berbeda dengan seni tradisional yang mencari kesempurnaan, glitch merayakan keindahan tak terduga dari kerusakan teknologi — warna yang terfragmentasi dan pola kacau yang muncul dari kesalahan.' },
    { type: 'title', text: 'Asal-usul dan Estetika Digital', level: 3 },
    { type: 'paragraph', html: 'Estetika glitch muncul pada awal tahun 2000-an ketika seniman digital mulai bereksperimen dengan file gambar yang rusak dan kegagalan perangkat keras. Seniman seperti <strong>Rosa Menkman</strong> mengangkat seni glitch ke status seni rupa dengan menyelidiki puitika artefak digital. Estetikanya mengambil inspirasi dari degradasi VHS, kesalahan transmisi, dan "noise" yang terlihat dari sistem digital.' },
    { type: 'title', text: 'Teknik Utama Glitch', level: 3 },
    { type: 'list', items: [
      '<strong>Pemisahan RGB:</strong> Menggeser saluran warna merah, hijau, dan biru untuk menciptakan aberrasi kromatik.',
      '<strong>Garis Pemindaian:</strong> Mensimulasikan garis horizontal monitor CRT lama untuk efek retro.',
      '<strong>Pengurutan Piksel:</strong> Menyortir piksel berdasarkan kecerahan dan menggesernya untuk efek "meleleh".',
      '<strong>Data Moshing:</strong> Memanipulasi data codec video untuk mencampur bingkai dengan cara yang tidak terduga.',
      '<strong>Bit Shifting:</strong> Mengubah data biner secara langsung menghasilkan distorsi warna dan bentuk yang dramatis.',
    ]},
    { type: 'tip', title: 'Filosofi di Balik Glitch', html: 'Seni glitch menantang gagasan tentang representasi digital yang "sempurna". Dengan merangkul kesalahan, kita mempertanyakan keandalan teknologi dan mengeksplorasi bagaimana teknologi memediasi persepsi kita tentang realitas. Ini adalah seni tentang kegagalan sistem dan keindahan yang tersembunyi dalam kekacauan.' },
    { type: 'title', text: 'Aplikasi Kontemporer', level: 3 },
    { type: 'paragraph', html: 'Saat ini, estetika glitch ada di mana-mana: sampul album, video musik, fesyen, dan desain grafis. Alat ini mendemokratisasi pembuatan seni glitch, memungkinkan siapa saja untuk menghasilkan kerusakan digital yang terlihat profesional tanpa pengetahuan teknis yang mendalam.' },
    { type: 'stats', items: [
      { value: '2000-an', label: 'Munculnya seni glitch', icon: 'mdi:history' },
      { value: '∞', label: 'Kemungkinan kombinasi', icon: 'mdi:shuffle-variant' },
      { value: '<30 dtk', label: 'Waktu pembuatan', icon: 'mdi:flash' },
      { value: '3+', label: 'Format ekspor', icon: 'mdi:download-multiple' },
    ], columns: 4 },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
