import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { SynesthesiaPainterLocaleContent } from '../index';

const slug = 'pelukis-sinestesia';
const title = 'Pelukis Sinestesia';
const description = 'Visualisasikan warna kata-kata menurut sinestesia grafem-warna. Setiap huruf memiliki warnanya sendiri, mengubah teks menjadi seni kromatik.';

const faq: SynesthesiaPainterLocaleContent['faq'] = [
  {
    question: 'Apakah semua orang dengan sinestesia melihat warna yang sama untuk setiap huruf?',
    answer: 'Tidak. Warna sinestesia unik bagi setiap orang. Meskipun ada kecenderungan statistik (A cenderung merah bagi banyak orang), tidak ada dua orang sinestetik yang memiliki palet yang sama persis. Alat ini menggunakan warna yang paling sering dilaporkan dalam studi populasi, bukan warna yang "benar".',
  },
  {
    question: 'Bisakah saya mengembangkan sinestesia dengan menggunakan alat ini secara terus-menerus?',
    answer: 'Tidak dalam arti neurologis yang ketat. Sinestesia sejati adalah karakteristik sistem saraf, bukan keterampilan yang dipelajari. Namun, penggunaan asosiasi warna-huruf secara berulang dapat menciptakan memori asosiatif yang kuat. Beberapa studi menunjukkan bahwa melatih asosiasi ini dapat meningkatkan daya ingat teks.',
  },
  {
    question: 'Untuk apa mode "Aura"?',
    answer: 'Mode Aura mensimulasikan bagaimana beberapa orang sinestetik menggambarkan melihat warna "melayang" atau "bercahaya" di sekitar huruf daripada menyatu di dalamnya. Ini menciptakan pengalaman visual yang lebih atmosferik dan imersif, terutama pada latar belakang gelap.',
  },
  {
    question: 'Apakah mode "Titik" memiliki dasar ilmiah?',
    answer: 'Ini adalah abstraksi artistik. Mode ini mereduksi teks menjadi "esensi kromatiknya" dengan menghilangkan bentuk huruf yang dapat dikenali. Hasilnya menyerupai visualisasi data kromatik atau lukisan pointillis, dan memungkinkan Anda melihat "tanda tangan warna" sebuah teks tanpa gangguan makna.',
  },
  {
    question: 'Mengapa beberapa huruf seperti I dan O berwarna putih atau hitam?',
    answer: 'Dalam studi sinestesia, huruf vokal I dan O, serta huruf W, sering digambarkan sebagai putih, transparan, atau hitam. Alat ini menyesuaikan warna-warna tersebut dengan latar belakang yang aktif: putih pada latar belakang gelap, hitam pada latar belakang terang, untuk selalu menjamin visibilitas.',
  },
];

const howTo: SynesthesiaPainterLocaleContent['howTo'] = [
  { name: 'Tulis teks', text: 'Klik area penulisan dan mulailah mengetik. Setiap huruf akan muncul berwarna sesuai dengan asosiasi sinestetik statistiknya.' },
  { name: 'Ubah mode visualisasi', text: 'Gunakan tombol di sudut kanan atas untuk beralih antara Huruf (teks berwarna), Titik (lingkaran warna), dan Aura (huruf bercahaya dengan halo kromatik).' },
  { name: 'Jelajahi berbagai teks', text: 'Tulis nama, kata-kata dalam berbagai bahasa, atau kalimat untuk menemukan palet kromatik unik mereka. Kata-kata panjang menciptakan gradien visual yang menarik.' },
  { name: 'Hapus dan mulai lagi', text: 'Gunakan tombol "Hapus" di bilah bawah untuk mengosongkan kanvas dan menjelajahi teks baru.' },
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

export const content: SynesthesiaPainterLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  ui: {
    title: 'Pelukis Sinestesia',
    description: 'Ubah kata-kata Anda menjadi seni kromatik.',
    modeLetters: 'Huruf',
    modeDots: 'Titik',
    modeAura: 'Aura',
    placeholder: 'Ketik di sini...',
    footerText: 'Ketik untuk menemukan palet warna pribadi Anda',
    clearBtn: 'Hapus',
    faqTitle: 'FAQ',
    bibliographyTitle: 'Referensi'
  },
  seo: [
    { type: 'title', text: 'Apa Itu Sinestesia Grafem Warna?', level: 2 },
    { type: 'paragraph', html: '<strong>Sinestesia</strong> adalah kondisi neurologis di mana stimulasi satu indra secara otomatis memicu respons pada indra lainnya. Varian yang paling banyak dipelajari dan lazim adalah <strong>sinestesia grafem-warna</strong>: mereka yang memilikinya merasakan setiap huruf atau angka dengan warna intrinsik, konstan, dan hidup. Ini bukan imajinasi atau metafora; bagi seorang sinestetik, huruf "A" berwarna merah dengan cara yang sama seperti api itu panas. Alat ini menerapkan <em>palet statistik</em> berdasarkan warna yang paling sering dilaporkan untuk setiap grafem dalam studi populasi.' },
    { type: 'title', text: 'Ilmu Saraf: Teori Aktivasi Silang', level: 3 },
    { type: 'paragraph', html: 'Model neurologis yang paling banyak diterima untuk sinestesia grafem-warna adalah <strong>aktivasi silang</strong>. Area korteks temporal yang terlibat dalam mengenali bentuk huruf (fusiform gyrus) secara anatomis berdekatan dengan wilayah yang memproses warna (area V4). Pada orang dengan sinestesia, terdapat konektivitas struktural atau fungsional yang lebih besar antara wilayah-wilayah ini, sehingga mengenali huruf juga mengaktifkan neuron warna. Penelitian neuroimaging fungsional (fMRI) telah mengonfirmasi bahwa penderita sinestesia menunjukkan aktivasi nyata di V4 saat membaca teks, bahkan ketika teks tersebut monokromatik.' },
    { type: 'tip', title: 'Tiga Mode Visualisasi', html: '<strong>Huruf:</strong> Teks asli yang diwarnai berdasarkan grafem. Ideal untuk melihat "melodi kromatik" dari teks lengkap. <strong>Titik:</strong> Setiap karakter menjadi lingkaran dengan warnanya; teks menghilang dan hanya musik warna yang tersisa. <strong>Aura:</strong> Huruf memancarkan halo dari warnanya, seolah-olah teks bersinar dengan energinya sendiri.' },
    { type: 'title', text: 'Statistik dan Warna Universal', level: 3 },
    { type: 'paragraph', html: 'Meskipun warna sinestetik unik bagi setiap individu, studi oleh Simner et al. (2006) dan Eagleman et al. (2007) menemukan pola statistik yang signifikan. Huruf vokal <strong>A</strong> cenderung merah bagi kebanyakan orang; <strong>O</strong> berwarna putih atau hitam; <strong>S</strong> muncul dalam nada teal atau hijau; <strong>E</strong> muncul sebagai hijau atau putih. Menariknya, asosiasi warna-huruf lebih konsisten dalam suatu budaya linguistik daripada lintas budaya yang berbeda, menunjukkan peran pembelajaran alfabet sejak dini.' },
    { type: 'list', items: [
      '<strong>Prevalensi:</strong> Sekitar 4% dari populasi memiliki sinestesia grafem-warna sampai tingkat tertentu, meskipun studi yang lebih baru menaikkan angka ini menjadi 6–8% jika bentuk subklinis disertakan.',
      '<strong>Bias gender:</strong> Sinestesia 3 hingga 6 kali lebih sering terjadi pada wanita daripada pria, meskipun penyebab perbedaan ini belum sepenuhnya dijelaskan.',
      '<strong>Heritabilitas:</strong> Ini memiliki komponen genetik yang jelas: cenderung menurun dalam keluarga, meskipun tidak selalu dengan jenis sinestesia yang sama.',
      '<strong>Konsistensi:</strong> Berbeda dengan asosiasi yang dipelajari, warna sinestetik sangat stabil dari waktu ke waktu. Studi tindak lanjut selama 10 tahun menunjukkan konsistensi lebih dari 90% dalam asosiasi grafem-warna.',
      '<strong>Penderita sinestesia terkenal:</strong> Vladimir Nabokov, Wassily Kandinsky, Nikola Tesla, dan Billy Joel secara terbuka menggambarkan pengalaman sinestetik yang memengaruhi karya mereka.',
    ]},
    { type: 'stats', items: [
      { value: '4–8%', label: 'Populasi dengan sinestesia', icon: 'mdi:brain' },
      { value: '90%+', label: 'Konsistensi warna selama 10 tahun', icon: 'mdi:check-circle' },
      { value: '3–6×', label: 'Lebih umum pada wanita', icon: 'mdi:gender-female' },
      { value: '26+10', label: 'Huruf & digit berwarna', icon: 'mdi:alphabetical' },
    ], columns: 4 },
    { type: 'title', text: 'Seni dan Sinestesia: Saat Indra Menyatu', level: 3 },
    { type: 'paragraph', html: '<strong>Wassily Kandinsky</strong>, pendiri ekspresionisme abstrak, mengalami sinestesia grafem-warna dan musik-warna: ia mendengar instrumen dalam warna (kuning adalah trompet, biru tua adalah selo) dan menggunakan persepsi ini untuk menciptakan teori seni abstraknya. Dalam musik, <strong>Alexander Scriabin</strong> menggubah <em>Prometheus: The Poem of Fire</em> dengan bagian untuk "tastiera per luce" (papan ketik cahaya), yang dirancang untuk memproyeksikan warna yang sesuai dengan setiap nada.' },
    { type: 'tip', title: 'Palet Warna Alat Ini', html: 'Penetapan warna terinspirasi oleh data statistik yang paling umum dalam literatur ilmiah. <strong>A → merah</strong>, <strong>E → hijau</strong>, <strong>I → putih/hitam tergantung latar belakang</strong>, <strong>O → hitam/putih</strong>, <strong>U → amber</strong>. Huruf konsonan mengikuti pola yang kurang seragam, tetapi kontras dengan latar belakang selalu diprioritaskan untuk menjamin keterbacaan.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
