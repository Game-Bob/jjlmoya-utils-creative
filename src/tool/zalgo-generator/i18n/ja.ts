import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ZalgoGeneratorLocaleContent } from '../index';

const slug = 'zalgo-generator-ja';
const title = 'Zalgoテキスト生成器';
const description = 'カスケード状に溢れ出すUnicode文字でメッセージを破壊します。グリッチ効果の強さと方向を調整できます。';

const faq: ZalgoGeneratorLocaleContent['faq'] = [
  { question: 'Zalgo（ザルゴ）テキストとは何ですか？', answer: 'Unicodeの結合文字（ダイアクリティカルマーク）を過剰に使用したテキストの一種です。これらの文字を垂直方向に積み重ねることで、元の行から「溢れ出し」、インターネット文化で人気の「データの破損」「混乱」「ホラー」といった視覚効果を生み出します。' },
  { question: 'なぜZalgoテキストはこれほど奇妙に見えるのですか？', answer: 'Unicode標準の、基底文字の上下や中央に記号を追加できる機能を利用しています。追加できる記号の数に厳密な制限がないため、テキストが上下の行に「侵入」することができるのです。' },
  { question: 'SNSでこのテキストを使用できますか？', answer: 'はい。Instagram、Twitter、Discordなど、主要なプラットフォームの多くはUnicodeをサポートしています。ただし、あまりに強度が強い場合、インターフェースの読みやすさを維持するために、一部のネットワークやデバイスでは文字がフィルタリングされたり切り捨てられたりすることがあります。' },
  { question: 'テキストからZalgo効果を取り除くにはどうすればいいですか？', answer: '破損したテキストをクリーンにするには、JavaScriptの文字列正規化を使用するか、プレーンテキストのみを受け付ける基本的なテキストエディタに貼り付けてください。このツールはあくまでクリエイティブな目的のものであり、元のコンテンツを破壊することはありません。' },
];

const howTo: ZalgoGeneratorLocaleContent['howTo'] = [
  { name: 'ベースメッセージを書く', text: 'メインのテキストボックスに「破壊」したいテキストを入力します。' },
  { name: 'カオスの強度を調整する', text: 'スライダーを動かして、積み重ねる結合文字の数を決定します。強度が高いほど読みづらくなります。' },
  { name: '溢れる方向を選択する', text: '破損を上方向、下方向、あるいは全方向に成長させるかを選択します。' },
  { name: '結果をコピーする', text: 'コピーボタンをクリックします。生成されたテキストには、グリッチ効果を維持するために必要なすべての不可視バイトが含まれています。' },
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

export const content: ZalgoGeneratorLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  bibliographyTitle: 'カオスの参考文献',
  ui: {
    title: 'Zalgo生成器',
    description: 'す̸べ̷て̸は̶壊̴れ̴て̶い̵る̸',
    inputPlaceholder: 'ここに通常のメッセージを入力...',
    intensityLabel: '破壊レベル',
    outputLabel: '破壊された結果',
    copyBtn: 'カオスをコピー',
    copied: 'コピーしました！',
    faqTitle: 'FAQ',
    bibliographyTitle: '参考文献',
    configTitle: '設定',
    intensity: '強度',
    upLabel: '上方破壊',
    midLabel: '中央ノイズ',
    downLabel: '下方破壊',
    resetBtn: '値をリセット',
    warningText: '警告: Zalgoテキストは結合Unicode文字を使用しており、表示上コンテナをはみ出す場合があります。SNSで使用する際は注意してください。',
    previewLabel: 'リアルタイムプレビュー',
    emptyLabel: '空',
    charLabel: '文字',
    noteText: '注: 一部のブラウザでは結合文字の描画が制限される場合があります'
  },
  seo: [
    { type: 'title', text: 'Zalgoテキストとは？視覚的な破壊の仕組み', level: 2 },
    { type: 'paragraph', html: 'Zalgoテキストは、Unicode標準の特定の機能である<strong>結合文字</strong>を利用したタイポグラフィの操作手法です。通常の文字とは異なり、これらのダイアクリティカルマークは水平方向のスペースを占有せず、基底文字の上に垂直に積み重なり、インターネット文化で人気の高い「デジタルカオス」や「宇宙的恐怖（コズミックホラー）」の美学を生み出します。' },
    { type: 'title', text: 'プロセスの解剖学', level: 3 },
    { type: 'paragraph', html: '当生成器は各文字を独立して処理し、3つの異なるベクトル（<strong>上方向</strong>：上に積もるマーク、<strong>中央方向</strong>：文字を突き刺すマーク、<strong>下方向</strong>：下にぶら下がるマーク）にランダムなUnicodeコードポイントを注入します。' },
    { type: 'tip', title: '破壊アルゴリズム', html: '各基底文字に対して、<code>カウント = 強度 × 30</code> が計算されます。各ベクトルにその数だけランダムな記号が追加されます。強度が1.5の場合、1文字あたり最大45個の結合文字が付与されます。' },
    { type: 'title', text: 'マナーと用途', level: 3 },
    { type: 'list', items: [
      '<strong>SNS:</strong> InstagramやTikTokで注目を集めます。既存の慣習を打ち破りたいプロフィールの自己紹介に最適です。',
      '<strong>ホラーストーリー:</strong> フィクションの物語、クリーピーパスタ、または侵害されたシステムのシミュレーションを劇的に演出します。',
      '<strong>アクセシビリティ:</strong> 警告 — Zalgoテキストはスクリーンリーダーで読み上げることができません。重要なコンテンツには使用せず、あくまで装飾として使用してください。',
      '<strong>SEO:</strong> 主要なキーワード（H1、メタタイトル）には決してZalgoを使用しないでください。検索エンジンがこれらの文字を正常に処理できない可能性があります。'
    ]},
    { type: 'title', text: '起源：Something Awfulからグリッチアートへ', level: 3 },
    { type: 'paragraph', html: 'Zalgoは生成器として始まったのではなく、クラシックなコミック・ストリップ（新聞漫画）への介入として始まりました。2000年代半ば、ユーザーのShmorkyが『Nancy』や『Archie』などのキャラクターを歪ませ、シミや歪みを加えたのが始まりです。<strong>「彼が来る（He comes）」</strong>というフレーズがこれらの作品の運命を決定づけ、現実を食い尽くす存在の到来を予感させました。' },
    { type: 'glossary', items: [
      { term: '結合文字', definition: '基底文字の上下や中央に配置されるように設計されたUnicodeコードポイント。アラビア語、ベトナム語、ヒンディー語などで正当に使用されています。' },
      { term: 'ダイアクリティカルマーク', definition: '発音や意味を変更するために基底文字に追加される記号。Zalgoではこれを視覚的に溢れさせるために悪用します。' },
      { term: 'Unicodeブロック', definition: '連続したUnicodeコードポイントの範囲。Zalgo文字の多くは「結合用ダイアクリティカルマーク」ブロック（U+0300–U+036F）から来ています。' },
      { term: 'グリッチアート', definition: 'デジタルメディアにおけるエラー、アーティファクト、破損を表現手法として意図的に取り入れたりシミュレートしたりする美学。' }
    ]},
  ],
  faq,
  bibliography: [
    { name: 'Unicode標準 - 結合文字（英語）', url: 'https://www.unicode.org/standard/principles.html#Combining_Characters' },
    { name: 'Zalgoテキストという現象（英語）', url: 'https://knowyourmeme.com/memes/zalgo' },
    { name: 'MDN - 文字列正規化', url: 'https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/normalize' }
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
