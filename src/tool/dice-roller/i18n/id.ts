import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { DiceRollerLocaleContent } from '../index';

const slug: string = 'pengocok-dadu';
const title: string = 'Pengocok Dadu';
const description: string = 'Simulator dadu lengkap untuk RPG dan permainan papan Anda. Lempar d4, d6, d8, d10, d12, d20, dan d100 dengan pengubah dan riwayat.';

const faq: DiceRollerLocaleContent['faq'] = [
  {
    question: 'Bagaimana cara mensimulasikan lemparan dengan keuntungan (advantage - D&D)?',
    answer: 'Tambahkan dua dadu d20 ke dalam kantong dengan mengeklik tombol d20 dua kali. Saat melempar, perhatikan dua hasil individu dan ambil yang lebih tinggi. Total yang ditampilkan adalah jumlahnya, tetapi Anda dapat melihat masing-masing dadu secara terpisah dalam rincian hasil.',
  },
  {
    question: 'Apa arti warna hijau atau merah pada hasil?',
    answer: 'Hasil berwarna hijau menunjukkan bahwa dadu tersebut menghasilkan nilai maksimum yang mungkin (sebuah "critical"). Hasil merah menunjukkan nilai minimum (sebuah "1", hasil terburuk yang mungkin). Ini memudahkan untuk mengenali "crit" dan "fumble" secara sekilas.',
  },
  {
    question: 'Dapatkah saya menambahkan beberapa dadu dengan tipe yang sama?',
    answer: 'Ya. Setiap klik pada dadu akan menambahkannya ke dalam kantong. Jika Anda mengeklik d6 tiga kali, kantong akan menunjukkan "3d6". Untuk mengurangi jumlahnya, klik tombol "−" yang muncul di samping setiap grup dadu di dalam kantong.',
  },
  {
    question: 'Apakah dadu digital sama acaknya dengan dadu fisik?',
    answer: 'Secara statistik, ya. Mesin JavaScript modern menggunakan algoritma pseudorandom (xorshift128+) dengan distribusi seragam berkualitas sangat tinggi. Dadu fisik asli dapat memiliki sedikit ketidaksempurnaan manufaktur yang membiaskan hasil; dadu digital tidak memiliki masalah tersebut.',
  },
  {
    question: 'Apa itu d100 dan bagaimana cara menggunakannya?',
    answer: 'd100 (atau d%) menghasilkan angka dari 1 hingga 100 dan digunakan dalam sistem permainan berbasis persentase, seperti Call of Cthulhu atau Warhammer Fantasy Roleplay. Ini mewakili "probabilitas langsung": jika keahlian Stealth Anda adalah 65%, Anda harus melempar 65 atau kurang untuk berhasil.',
  },
];

const howTo: DiceRollerLocaleContent['howTo'] = [
  { name: 'Bangun kumpulan dadu', text: 'Klik tombol dadu (d4, d6, d8...) untuk menambahkannya ke kumpulan Anda. Setiap klik menambah satu dadu dari tipe yang dipilih. Anda dapat mencampur berbagai tipe dalam satu lemparan.' },
  { name: 'Sesuaikan pengubah', text: 'Gunakan tombol "+" dan "−" di samping pengubah untuk menerapkan bonus atau penalti (seperti pengubah atribut di D&D). Pengubah secara otomatis ditambahkan ke total.' },
  { name: 'Lempar dadu', text: 'Tekan tombol "Lempar Dadu". Panel kanan menunjukkan total akhir dan rincian setiap dadu individu, dengan "crit" (maksimum) berwarna hijau dan "fumble" (minimum) berwarna merah.' },
  { name: 'Periksa riwayat', text: 'Setiap lemparan dicatat dalam riwayat dengan ekspresi dadu yang digunakan, hasil total, dan waktu tepatnya. Anda dapat menghapus riwayat dengan tombol yang sesuai.' },
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

export const content: DiceRollerLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  ui: {
    title: 'Pengocok Dadu',
    description: 'Semoga keberuntungan menyertai Anda.',
    rollBtn: 'Lempar Dadu',
    totalLabel: 'Total',
    historyLabel: 'Riwayat',
    clearHistoryBtn: 'Hapus Riwayat',
    faqTitle: 'FAQ',
    bibliographyTitle: 'Referensi',
    addDiceLabel: 'Tambahkan dadu ke kantong',
    bagLabel: 'Kantong dadu',
    emptyBagBtn: 'Kosongkan',
    emptyBagText: 'Klik dadu untuk menambahkan',
    modifierLabel: 'Pengubah',
    rollManyLabel: 'Lempar $COUNT dadu',
    rollOneLabel: 'Lempar $COUNT dadu',
    preRollText: 'Tambahkan dadu dan lempar',
    emptyHistoryText: 'Riwayat lemparan akan muncul di sini'
  },
  seo: [
    { type: 'title', text: 'Seni Keacakan: Sejarah dan Matematika Dadu', level: 2 },
    { type: 'paragraph', html: 'Dadu adalah salah satu generator keacakan tertua umat manusia. <strong>Astragali</strong> — tulang pergelangan kaki domba dan kambing — digunakan sebagai dadu empat sisi primitif sejak 5000 SM di Mesopotamia dan Mesir. Evolusi dari tulang ukir menjadi ikosahedron resin epoksi modern bukan sekadar estetika: ini adalah perjalanan melalui teori probabilitas dan desain mekanik permainan.' },
    { type: 'title', text: 'Keluarga Dadu Standar', level: 3 },
    { type: 'paragraph', html: 'Set dadu yang paling luas dalam permainan peran — dipopulerkan oleh <strong>Dungeons &amp; Dragons</strong> pada tahun 1974 — terdiri dari lima bangun ruang Platonik ditambah dua bentuk tambahan: d4 (tetrahedron), d6 (kubus), d8 (oktahedron), d10 (pentagonal trapezohedron), d12 (dodekahedron), d20 (ikosahedron), dan d100 (dadu persentil). Setiap polihedron menjamin distribusi seragam: semua sisi memiliki probabilitas yang sama persis untuk muncul.' },
    { type: 'list', items: [
      '<strong>d4 – Tetrahedron:</strong> Paling berbahaya jika terinjak dengan kaki telanjang. Empat sisi segitiga, probabilitas 25% per sisi. Umumnya digunakan untuk kerusakan belati atau mantra tingkat rendah.',
      '<strong>d6 – Kubus:</strong> Dadu yang paling universal. Hadir di semua permainan papan sejak senet Mesir. Geometri kubusnya menjamin ekuidistribusi yang sempurna.',
      '<strong>d8 – Oktahedron:</strong> Dadu untuk tombak atau kapak perang. Delapan sisi segitiga sama sisi. Probabilitas 12,5% per sisi.',
      '<strong>d10 – Pentagonal Trapezohedron:</strong> Satu-satunya bangun ruang non-Platonik dalam set standar. Dua sisi berlawanan per "verteks". Penting untuk d100 (dua d10 digabungkan).',
      '<strong>d12 – Dodekahedron:</strong> Dadunya kaum barbarian. Dua belas sisi pentagonal. Kurang dihargai di banyak sistem, protagonis di D&D 5e Barbarian.',
      '<strong>d20 – Ikosahedron:</strong> Rajanya RPG. Dua puluh sisi segitiga. Protagonis dari sistem d20: menentukan keberhasilan atau kegagalan hampir semua tindakan.',
      '<strong>d100 – Persentil:</strong> Dua d10 digabungkan (puluhan + satuan). Mendefinisikan probabilitas halus dalam sistem seperti Call of Cthulhu atau Warhammer Fantasy.',
    ]},
    { type: 'stats', items: [
      { value: '5000 SM', label: 'Dadu pertama (astragali)', icon: 'mdi:history' },
      { value: '1974', label: 'D&D mempopulerkan set ini', icon: 'mdi:sword' },
      { value: '7 tipe', label: 'Dadu RPG standar', icon: 'mdi:dice-multiple' },
      { value: '2¹²⁸', label: 'Periode acak JS', icon: 'mdi:function-variant' },
    ], columns: 4 },
    { type: 'title', text: 'Probabilitas dan Kurva Distribusi', level: 3 },
    { type: 'paragraph', html: 'Saat Anda melempar satu dadu, Anda mendapatkan <strong>distribusi seragam diskrit</strong>: setiap hasil memiliki probabilitas yang sama persis (1/n). Namun segera setelah Anda menggabungkan beberapa dadu, keajaiban matematika mengubah kurva datar itu menjadi <strong>perkiraan distribusi normal</strong>. Itulah mengapa 2d6 tidak sama dengan 1d12: dengan dua dadu enam sisi, probabilitas melempar angka 7 adalah 6/36 ≈ 16,7%, sedangkan hasil ekstrem (2 dan 12) hanya terjadi 2,8% dari waktu.' },
    { type: 'tip', title: 'Keuntungan dan Kerugian (D&D 5e)', html: 'Mekanik <strong>Keuntungan</strong> terdiri dari melempar 2d20 dan mengambil hasil yang lebih tinggi. Secara matematis, ini menaikkan rata-rata dari 10,5 menjadi sekitar 13,8. <strong>Kerugian</strong> melakukan sebaliknya: ambil yang lebih rendah, menurunkan rata-rata menjadi sekitar 7,2. Pengocok kami memungkinkan Anda mensimulasikan ini dengan menambahkan dua d20 ke kantong dan membandingkan hasil individunya.' },
    { type: 'title', text: 'Pengubah: Jembatan Antara Dadu dan Karakter', level: 3 },
    { type: 'paragraph', html: 'Dalam sebagian besar sistem RPG, dadu tidak bertindak sendiri: <strong>pengubah</strong> yang mewakili kemampuan karakter ditambahkan atau dikurangi. Di D&D 5e, pengubah Kekuatan +5 berarti Anda melempar 1d20, menambah 5, dan memeriksa hasilnya terhadap Armor Class musuh. Pengocok kami menyertakan kontrol pengubah untuk mencerminkan mekanik ini secara setia.' },
    { type: 'tip', title: 'Standar Notasi Dadu', html: 'Notasi <strong>XdY+Z</strong> adalah standar de facto dalam permainan peran: X dadu dengan Y sisi dengan pengubah Z. "3d6+2" berarti lempar tiga dadu enam sisi dan tambahkan 2 ke totalnya. Alat kami menggunakan notasi ini dalam riwayat sehingga Anda dapat dengan mudah membagikan atau mencatat lemparan Anda.' },
    { type: 'glossary', items: [
      { term: 'Critical Hit', definition: 'Lemparan nilai maksimum pada dadu (misalnya, melempar 20 pada d20). Biasanya memicu efek bonus khusus di sebagian besar sistem RPG.' },
      { term: 'Fumble / Nat 1', definition: 'Melempar nilai minimum (1) pada dadu. Seringkali menghasilkan kegagalan dramatis atau konsekuensi negatif.' },
      { term: 'Dice Pool', definition: 'Kumpulan dadu yang dilempar secara bersamaan. Kumpulan dalam alat kami menunjukkan setiap tipe dadu yang dikelompokkan berdasarkan jumlah (misalnya, 3d6 + 2d8).' },
      { term: 'Modifier', definition: 'Angka tetap yang ditambahkan atau dikurangi dari hasil lemparan, mewakili keahlian karakter, bonus atribut, atau penalti situasional.' },
      { term: 'Percentile Roll', definition: 'Lemparan menggunakan dua d10 untuk menghasilkan hasil dari 1–100, digunakan dalam sistem berbasis keahlian di mana kemampuan diukur sebagai persentase.' },
    ]},
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
