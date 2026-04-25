import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { GlitchImageDistorterLocaleContent } from '../index';

const slug = 'glitch-image-distorter';
const title = 'グリッチアート・ジェネレーター';
const description = 'RGB分解、スキャンライン、ピクセルソート、アニメーションなど、Photoshopを使わずに画像を魅力的なグリッチアートに変換します。';

const faq: GlitchImageDistorterLocaleContent['faq'] = [
  {
    question: 'グリッチアートとは何ですか？',
    answer: 'グリッチアートは、デジタル画像やデータを意図的に操作して視覚的なエラーを引き起こすデジタルアートの一種です。色の断片化、形の歪み、予測不能なパターンなどが「グリッチ（故障）」として現れ、デジタルの破損やカオスといった独自の美学を生み出します。',
  },
  {
    question: '自分の画像を使えますか？',
    answer: 'はい！PNG、JPG、WebP形式の画像をアップロードしたり、キャンバスにドラッグ＆ドロップしたり、Ctrl+Vでクリップボードから直接貼り付けたりできます。サンプル画像を使って試すことも可能です。',
  },
  {
    question: '各エフェクトにはどのような効果がありますか？',
    answer: '「Corruption」はRGBチャンネルを分離して色収差のような効果を与えます。「Interference」は古いモニターのようなスキャンラインと震えを追加します。「Pixel Sorting」は明るいピクセルを選択した方向に「流し」ます。「Static Noise」はテレビの砂嵐のようなノイズを重ねます。',
  },
  {
    question: 'グリッチを動かすことはできますか？',
    answer: 'はい！「グリッチ・アニメーション」モードをオンにすると、パラメータに微細なランダムの動きが加わり、常に変化し続ける生き生きとしたエフェクトが生まれます。これをアニメーションGIFやWebPとして書き出すことができます。',
  },
  {
    question: 'どのような形式で書き出せますか？',
    answer: '静止画用の高品質なPNG形式のほか、アニメーションモードが有効な場合はアニメーションGIFやWebP形式で書き出すことができます。InstagramやDiscordなどでの共有に最適です。',
  },
  {
    question: '「カオス」ボタンは何をするものですか？',
    answer: '「カオス・ランダム」ボタンを押すと、すべてのスライダーの値が一瞬でランダム化され、予想外で驚きのあるグリッチの組み合わせが生成されます。手動で調整せずにツールの創造的な可能性を探索するのに最適です。',
  },
];

const howTo: GlitchImageDistorterLocaleContent['howTo'] = [
  { name: '画像を読み込む', text: '画像をキャンバスにドラッグ＆ドロップするか、Ctrl+Vで貼り付けるか、ファイル選択ボタンからアップロードしてください。サンプル画像で始めることもできます。' },
  { name: 'スライダーを調整する', text: 'Corruption、Interference、Pixel Sort、Noiseのスライダーを使って、様々なグリッチエフェクトを適用します。プレビューはリアルタイムで更新されます。' },
  { name: 'アニメーションを有効にする', text: '「グリッチ・アニメーション」ボタンをオンにすると、振動やちらつきが追加されます。画像がダイナミックなグリッチエフェクトで動き出します。' },
  { name: '作品を書き出す', text: '静止画ならPNG形式で、アニメーションならGIF/WebP形式でダウンロードしてください。グリッチアートをSNSで共有しましょう！' },
  { name: 'カオスで実験する', text: '「カオス・ランダム」ボタンをクリックして、驚きの組み合わせを自動で見つけ出しましょう。' },
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
  inLanguage: 'ja',
};

export const content: GlitchImageDistorterLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  ui: {
    title: 'グリッチ・ディストーター',
    description: '数秒でグリッチアートを作成。',
    dragDropText: '画像をドラッグ＆ドロップするか、クリックしてアップロード',
    pasteHint: 'ヒント: Ctrl+Vで画像を貼り付けることもできます',
    exampleImageBtn: 'サンプル画像を使用',
    corruptionLabel: '破損 (RGB分離)',
    interferenceLabel: '干渉 (ライン)',
    tremorLabel: '震え',
    pixelSortLabel: 'ピクセルソート',
    pixelSortDirectionLabel: '方向',
    noiseLabel: '砂嵐ノイズ',
    animateBtn: 'グリッチ・アニメ',
    chaosBtn: 'カオス・ランダム',
    downloadPngBtn: 'PNGダウンロード',
    downloadGifBtn: 'GIFダウンロード',
    undoBtn: '元に戻す',
    redoBtn: 'やり直し',
    footerText: '30秒以内に破損したデジタルアートを作成',
    faqTitle: 'FAQ',
    bibliographyTitle: '参考文献'
  },
  seo: [
    { type: 'title', text: 'グリッチアートとは？', level: 2 },
    { type: 'paragraph', html: '<strong>グリッチアート</strong>とは、デジタルのエラーや破損したデータ、視覚的なノイズをあえて利用して美的な結果を生み出す創作活動です。完璧さを追求する伝統的な芸術とは対照的に、グリッチは技術的な故障から生まれる予想外の美しさ、つまり断片化された色やエラーから生じるカオスなパターンを肯定します。' },
    { type: 'title', text: '起源とデジタルの美学', level: 3 },
    { type: 'paragraph', html: 'グリッチの美学は、2000年代初頭にデジタルアーティストたちが破損した画像ファイルやハードウェアの不具合を実験的に使い始めたことで生まれました。<strong>ローザ・メンクマン</strong>のようなアーティストは、デジタルノイズの詩学を調査することで、グリッチアートを美術の域まで高めました。この美学は、VHSの劣化、通信エラー、デジタルシステムの可視化された「ノイズ」からインスピレーションを得ています。' },
    { type: 'title', text: '主なグリッチ技法', level: 3 },
    { type: 'list', items: [
      '<strong>RGB分離:</strong> 赤、緑、青のカラーチャンネルをずらして色収差を作成する手法。',
      '<strong>スキャンライン:</strong> 古いCRTモニターの水平線をシミュレートし、レトロな雰囲気を加える手法。',
      '<strong>ピクセルソート:</strong> 輝度などでピクセルを並べ替えてずらすことで、「溶ける」ような効果を作る手法。',
      '<strong>データモッシング:</strong> ビデオコーデックのデータを操作して、フレームを予期せぬ方法で混ぜ合わせる手法。',
      '<strong>ビットシフト:</strong> バイナリデータを直接書き換えることで、劇的な色や形の歪みを生み出す手法。',
    ]},
    { type: 'tip', title: 'グリッチの背景にある哲学', html: 'グリッチアートは、「完璧な」デジタル表現という概念に疑問を投げかけます。あえてエラーを受け入れることで、テクノロジーの信頼性を問い直し、テクノロジーが私たちの現実認識をどのように媒介しているかを探求します。それはシステムの失敗、そしてカオスの中に隠された美しさについての芸術なのです。' },
    { type: 'title', text: '現代における応用', level: 3 },
    { type: 'paragraph', html: '今日、グリッチの美学はアルバムジャケット、ミュージックビデオ、ファッション、グラフィックデザインなど、あらゆる場所で見られます。このツールはグリッチアート作成を民主化し、深い技術的知識がなくても誰でもプロのようなデジタル破損作品を作成できるようにします。' },
    { type: 'stats', items: [
      { value: '2000s', label: 'グリッチアートの誕生', icon: 'mdi:history' },
      { value: '∞', label: '無限の組み合わせ', icon: 'mdi:shuffle-variant' },
      { value: '<30s', label: '作成時間', icon: 'mdi:flash' },
      { value: '3+', label: '書き出し形式', icon: 'mdi:download-multiple' },
    ], columns: 4 },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
