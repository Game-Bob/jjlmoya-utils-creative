import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { DiceRollerLocaleContent } from '../index';

const slug = 'dice-roller';
const title = 'ダイスローラー';
const description = 'RPGやボードゲームに最適なダイスシミュレーター。d4, d6, d8, d10, d12, d20, d100に対応し、修正値の適用や履歴の確認も可能です。';

const faq: DiceRollerLocaleContent['faq'] = [
  {
    question: '「有利（アドバンテージ）」のロール（D&D）をシミュレートするには？',
    answer: 'd20ボタンを2回クリックして、バッグにd20を2個追加します。ロールした際、2つの個別の結果を確認し、高い方の値を採用してください。表示される「合計」は合算値になりますが、結果の内訳（ブレイクダウン）で各ダイスの目を個別に確認できます。',
  },
  {
    question: '結果に表示される緑色や赤色の数字は何を意味していますか？',
    answer: '緑色の数字は、そのダイスの最大値が出たこと（「クリティカル」）を示します。赤色の数字は、最小値（「1」、いわゆるファンブル）が出たことを示します。これにより、一目でクリティカルや致命的失敗を判断できます。',
  },
  {
    question: '同じ種類のダイスを複数追加できますか？',
    answer: 'はい。ダイスボタンをクリックするたびにバッグに追加されます。d6を3回クリックすると、バッグには「3d6」と表示されます。個数を減らしたい場合は、バッグ内の各ダイスグループの横に表示される「−」ボタンをクリックしてください。',
  },
  {
    question: 'デジタルのダイスは物理的なダイスと同じくらいランダムですか？',
    answer: '統計的には「はい」です。現代のJavaScriptエンジンは、非常に高品質で均一な分布を持つ擬似乱数アルゴリズム（xorshift128+）を使用しています。実物のダイスは製造上の微細な不備により偏りが生じることがありますが、デジタルのダイスにはその問題がありません。',
  },
  {
    question: 'd100とは何ですか？どのように使いますか？',
    answer: 'd100（またはd%）は1から100までの数値を生成し、『クトゥルフの呼び声』や『ウォーハンマー・ファンタジーRPG』のようなパーセンテージベースのゲームシステムで使用されます。これは「直接的な確率」を表します。例えば、隠密技能が65%の場合、成功するにはロール結果が65以下である必要があります。',
  },
];

const howTo: DiceRollerLocaleContent['howTo'] = [
  { name: 'ダイスプールを作成する', text: 'ダイスボタン（d4, d6, d8...）をクリックしてプールに追加します。クリックするごとにその種類のダイスが増えます。複数の種類を混ぜてロールすることも可能です。' },
  { name: '修正値を調整する', text: '修正値の横にある「+」と「−」ボタンを使って、ボーナスやペナルティ（D&Dの能力値修正など）を適用します。修正値は自動的に合計に加算されます。' },
  { name: 'ダイスを振る', text: '「ロール」ボタンを押します。右側のパネルに最終合計値と各ダイスの内訳が表示されます。最大値は緑、最小値は赤でハイライトされます。' },
  { name: '履歴を確認する', text: 'すべてのロールは、使用したダイス式、合計結果、正確な時刻と共に履歴に記録されます。履歴は専用ボタンで消去可能です。' },
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

export const content: DiceRollerLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  ui: {
    title: 'ダイスローラー',
    description: '幸運があなたと共にありますように。',
    rollBtn: 'ロール',
    totalLabel: '合計',
    historyLabel: '履歴',
    clearHistoryBtn: '履歴をクリア',
    faqTitle: 'FAQ',
    bibliographyTitle: '参考文献',
    addDiceLabel: 'バッグにダイスを追加',
    bagLabel: 'ダイスバッグ',
    emptyBagBtn: '空にする',
    emptyBagText: 'ダイスをクリックして追加',
    modifierLabel: '修正値',
    rollManyLabel: 'ダイスを$COUNT個振る',
    rollOneLabel: 'ダイスを$COUNT個振る',
    preRollText: 'ダイスを追加してロール',
    emptyHistoryText: 'ここにロール履歴が表示されます'
  },
  seo: [
    { type: 'title', text: 'ランダムの芸術：ダイスの歴史と数学', level: 2 },
    { type: 'paragraph', html: 'ダイスは人類最古の乱数発生器の一つです。<strong>「アストラガルス」</strong>（羊や山羊の距骨）は、紀元前5000年のメソポタミアやエジプトですでに原始的な4面ダイスとして使われていました。削り出された骨から現代のエポキシ樹脂製20面体への進化は、単なる美学ではなく、確率論とゲームメカニクス設計の歴史そのものです。' },
    { type: 'title', text: '標準的なダイスファミリー', level: 3 },
    { type: 'paragraph', html: '1974年に<strong>『ダンジョンズ＆ドラゴンズ』</strong>によって普及したロールプレイングゲームで最も一般的なダイスセットは、5つのプラトン立体に2つの形状を加えたもので構成されています：d4（正四面体）、d6（正六面体）、d8（正八面体）、d10（五角柱状多面体）、d12（正十二面体）、d20（正二十面体）、そしてd100（パーセンタイル）。各多面体は均一な分布を保証しており、すべての面が出る確率は全く同じです。' },
    { type: 'list', items: [
      '<strong>d4 – 正四面体:</strong> 裸足で踏むと最も危険。4つの三角形の面を持ち、各面が出る確率は25%。短剣のダメージや低レベルの呪文によく使われます。',
      '<strong>d6 – 正六面体:</strong> 最も普遍的なダイス。古代エジプトのセネト以来、あらゆるボードゲームに存在します。その立方体形状は完璧な等分布を保証します。',
      '<strong>d8 – 正八面体:</strong> 槍やバトルアックスのダイス。8つの正三角形の面を持ち、各面が出る確率は12.5%です。',
      '<strong>d10 – 五角柱状多面体:</strong> 標準セットの中で唯一、プラトン立体ではない形状。「頂点」ごとに2つの対向する面があります。d100（2つのd10の組み合わせ）に不可欠です。',
      '<strong>d12 – 正十二面体:</strong> バーバリアンのダイス。12個の五角形の面。多くのシステムで過小評価されていますが、D&D 5版のバーバリアンでは主役です。',
      '<strong>d20 – 正二十面体:</strong> RPGの王様。20の三角形の面。d20システムの主役であり、ほぼすべての行動の成否を決定します。',
      '<strong>d100 – パーセンタイル:</strong> 2つのd10を組み合わせたもの（十の位＋一の位）。『クトゥルフの呼び声』や『ウォーハンマー』などのシステムで精密な確率を定義します。',
    ]},
    { type: 'stats', items: [
      { value: '紀元前5000年', label: '最初のダイス（アストラガルス）', icon: 'mdi:history' },
      { value: '1974', label: 'D&Dがセットを普及させた年', icon: 'mdi:sword' },
      { value: '7種類', label: '標準的なRPGダイス', icon: 'mdi:dice-multiple' },
      { value: '2¹²⁸', label: 'JSの乱数周期', icon: 'mdi:function-variant' },
    ], columns: 4 },
    { type: 'title', text: '確率と分布曲線', level: 3 },
    { type: 'paragraph', html: '1つのダイスを振る場合、それは<strong>離散一様分布</strong>となります。つまり、すべての結果が全く同じ確率（1/n）で発生します。しかし、複数のダイスを組み合わせると、数学的な魔法によってその平坦な曲線は<strong>近似的な正規分布</strong>へと変化します。これが、2d6が1d12と同じではない理由です。2つの6面ダイスで「7」が出る確率は6/36（約16.7%）ですが、端の数値（2や12）が出る確率はわずか2.8%にすぎません。' },
    { type: 'tip', title: '有利と不利（D&D 5版）', html: '<strong>「有利（アドバンテージ）」</strong>メカニクスは、2d20をロールして高い方の結果を採用するものです。数学的には、これにより期待値が10.5から約13.8に上昇します。<strong>「不利（ディスアドバンテージ）」</strong>はその逆で、低い方を採用するため、期待値は約7.2まで下がります。当ツールでは、バッグに2つのd20を追加して結果を比較することで、これを再現できます。' },
    { type: 'title', text: '修正値：ダイスとキャラクターの架け橋', level: 3 },
    { type: 'paragraph', html: 'ほとんどのRPGシステムでは、ダイスだけで結果が決まるわけではありません。キャラクターの能力を表す<strong>修正値（モディファイア）</strong>を加減算します。D&D 5版で筋力修正値が+5の場合、1d20をロールして5を足し、その数値を敵のアーマークラス（AC）と比較します。当ツールには、これらのメカニクスを忠実に反映するための修正値コントロールが含まれています。' },
    { type: 'tip', title: 'ダイス表記の標準', html: '<strong>XdY+Z</strong>という表記は、RPGにおける事実上の標準です。Xがダイスの個数、Yが面の数、Zが修正値を表します。「3d6+2」は「6面ダイスを3個振って合計に2を足す」という意味です。当ツールはこの表記を履歴に使用しているため、ロール結果を簡単に共有したり記録したりできます。' },
    { type: 'glossary', items: [
      { term: 'クリティカル・ヒット', definition: 'ダイスの最大値が出ること（例：d20で20が出る）。多くのRPGシステムでは、特別なボーナス効果が発動します。' },
      { term: 'ファンブル / Nat 1', definition: 'ダイスの最小値（1）が出ること。劇的な失敗や否定的な結果をもたらすことが多いです。' },
      { term: 'ダイスプール', definition: '同時にロールされるダイスの集合。当ツールのプールでは、各ダイスタイプが個数ごとにグループ化されて表示されます（例：3d6 + 2d8）。' },
      { term: '修正値（モディファイア）', definition: 'ロール結果に加減算される固定値。キャラクターの技能、能力ボーナス、または状況によるペナルティを表します。' },
      { term: 'パーセンタイル・ロール', definition: '2つのd10を使用して1〜100の結果を出すこと。能力がパーセンテージで測定される技能ベースのシステムで使用されます。' },
    ]},
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
