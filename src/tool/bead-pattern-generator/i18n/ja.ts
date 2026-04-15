import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { BeadPatternGeneratorLocaleContent } from '../index';

const slug = 'bead-pattern-generator-ja';
const title = 'パターンジェネレーター';
const description = 'あなたの写真から、デリカビーズ（Miyuki）やアイロンビーズ（Hama）のピクセルアートや図案を作成します。減色アルゴリズム、トンネルビジョンモード、ZIPエクスポート機能を搭載。';

const faq: BeadPatternGeneratorLocaleContent['faq'] = [
  { question: '図案作成における「減色（カラークオンタイズ）」とは何ですか？', answer: '写真に含まれる数千の色を、実際に使用可能なビーズの色（MiyukiやHamaなど）に合わせて数色に絞り込むプロセスです。高度なアルゴリズムを使用し、最小限のパレットで視覚的な再現性を維持します。' },
  { question: 'この図案はクロスステッチに使えますか？', answer: 'はい、このジェネレーターが作成するグリッドチャートはクロスステッチに最適です。布の種類（アイダ14、18カウントなど）に合わせてグリッドサイズを選択してください。' },
  { question: 'MiyukiビーズとHamaビーズの違いは何ですか？', answer: 'Miyukiデリカビーズは、ジュエリー用の非常に小さく精密なガラスビーズです。Hamaビーズはプラスチック製で、アイロンで溶かして接着します。当ツールでは、素材に合わせてアスペクト比を調整できるため、図案が歪むことはありません。' },
  { question: 'ディザリングアルゴリズムはどのように機能しますか？', answer: 'ディザリングは、異なる色のピクセルを特定のパターンで混合し、限られた色数でより多くの色があるように見せる手法です。ビーズの種類が少なくても、色のグラデーションをより滑らかに見せることができます。' },
];

const howTo: BeadPatternGeneratorLocaleContent['howTo'] = [
  { name: '鮮明な画像をアップロードする', text: 'コントラストがはっきりしており、細部が細かすぎない写真を選ぶと、作りやすい図案になります。' },
  { name: 'グリッドサイズを調整する', text: '作品の縦横のビーズ数を定義します。ビーズ数が多いほど詳細は鮮明になりますが、難易度も上がります。' },
  { name: 'カラーパレットを最適化する', text: '手持ちのビーズキットにある色に合わせて、色数を減らします。' },
  { name: 'ガイド図案をエクスポートする', text: 'カラーコード付きの最終図案を生成し、ボードへの配置や糸通しの際の参照用として使用します。' },
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

export const content: BeadPatternGeneratorLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  bibliographyTitle: '職人のための参考文献',
  ui: {
    title: 'パターン研究所',
    subtitle: 'その手で色を操るエンジニアリング',
    description: '写真からビーズ図案へ。',
    gridSizeLabel: 'サイズ（幅）',
    colorCountLabel: '色数',
    optionsLabel: 'オプション',
    rulersLabel: 'ルーラー',
    symbolsTooltip: 'サプライズパターン',
    symbolsLabel: 'シンボル',
    downloadBtn: 'ダウンロード',
    uploadTitle: 'ビジョンをアップロード',
    uploadSubtitle: 'デジタルの魔法を始めましょう',
    paletteTitle: '色彩のDNA',
    reuploadBtn: '画像を変更',
    tunnelVisionTitle: 'トンネルビジョン',
    tunnelVisionSubtitle: '一段ずつ正確に進めるためのアシスタント。',
    uploadLabel: '写真をアップロード',
    pixelateBtn: '図案を生成',
    faqTitle: 'FAQ',
    bibliographyTitle: '参考文献'
  },
  seo: [
    { type: 'title', text: 'デジタル錬金術：ピクセルを触れられるアートへ昇華させる', level: 2 },
    { type: 'paragraph', html: '<strong>究極のパターンスタジオ</strong>へようこそ。ピクセルアートの設計者、デリカビーズの達人、そしてクロスステッチのビジョナリーのために設計された、<em>色彩知能エンジン</em>です。デジタルとハンドメイドの架け橋となります。' },
    { type: 'card', icon: 'mdi:grid', title: 'インテリジェント・グリッド', html: '当社の<strong>空間サブサンプリング</strong>・アルゴリズムは、単に画像を縮小するだけではありません。視覚構造を分析し、複雑なピクセルグループを個々のセルにマッピングすることで、熟練したイラストレーターのようにシルエットやエッジを維持します。' },
    { type: 'card', icon: 'mdi:palette', title: 'K Means減色処理', html: '画像の代表色を数学的に算出する<strong>K-Meansクラスタリング</strong>・アルゴリズムのバリアントを実装。12色、24色、あるいは32色という最小限のパレットで、驚異的な再現性を実現します。' },
    { type: 'title', text: '3ステップでマスター', level: 3 },
    { type: 'card', icon: 'mdi:image-search', title: '完璧な選択', html: '<strong>高コントラスト</strong>でドラマチックな照明、象徴的な形状のものを選んでください。背景がすっきりしたポートレート、ロゴ、ベクターアートなどは非常に美しく変換されます。' },
    { type: 'card', icon: 'mdi:ruler', title: '寸法のキャリブレーション', html: '<strong>デリカビーズ:</strong> 50粒 ≈ 8cm ・ <strong>Hamaビーズ（ミディ）:</strong> 50粒 ≈ 25cm ・ <strong>クロスステッチ:</strong> 1マス = 1ステッチ。' },
    { type: 'card', icon: 'mdi:eye-check', title: '「禅」の集中（トンネルビジョンモード）', html: '<strong>トンネルビジョン</strong>システムは、視覚的なノイズを軽減し、現在作業中の行だけを強調するパーソナルアシスタントとして機能します。絶対的な集中をサポートします。' },
    { type: 'title', text: '無限のキャンバス', level: 3 },
    { type: 'list', items: [
      '<strong>テキスタイル・ジュエリー:</strong> ビーズ織りや幾何学模様のブレスレット用の複雑なパターン。',
      '<strong>クロスステッチ:</strong> ピクセル単位で刺繍可能なモダンな図案。',
      '<strong>モザイクアート:</strong> 簡略化されたセラミックタイルを使用した大規模な壁画。',
      '<strong>レトロゲーム:</strong> 本物の8ビットアセットやスプライトを数秒で作成。',
    ]},
    { type: 'stats', items: [
      { value: '10–100', label: 'ビーズ幅の範囲', icon: 'mdi:arrow-expand-horizontal' },
      { value: '2–32', label: 'カラーパレット枠', icon: 'mdi:palette-swatch' },
      { value: 'K-Means', label: '減色アルゴリズム', icon: 'mdi:function-variant' },
      { value: 'ZIP', label: '出力形式（図案＋ガイド）', icon: 'mdi:zip-box' },
    ], columns: 4 },
    { type: 'paragraph', html: '刹那的な画面が支配する現代において、形のある物を創り出すことは、ある種の革命です。このツールは芸術の自動化を目指すものではなく、<strong>職人の力を引き出す</strong>ためのものです。コンピューターの精度を貸与することで、あなたの手で不朽の遺産を築く手助けをします。' },
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
