import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ExcuseGeneratorLocaleContent } from '../index';

const slug = 'excuse-generator-ja';
const title = '言い訳ジェネレーター';
const description = '付き合いを華麗にスルーするためのセマンティック・ギャンブルマシン。シュールで反論の余地のない言い訳を瞬時に生成します。';

const faq: ExcuseGeneratorLocaleContent['faq'] = [
  {
    question: 'このジェネレーターで夫婦仲は救えますか？',
    answer: '私たちはセラピストではありませんが、もっともらしい技術的な緊急事態を装って義父母との夕食を回避することは、緊張を大幅に和らげる効果があるかもしれません。自己責任でご利用ください。'
  },
  {
    question: 'なぜこれほどシュールなフレーズなのですか？',
    answer: '戦略のベースは「認知的不協和」です。退屈な言い訳は検証可能ですが、あまりに不条理なことを言うと、相手は驚きのあまり怒るタイミングを逃してしまいます。'
  }
];

const howTo: ExcuseGeneratorLocaleContent['howTo'] = [
  { name: '生成', text: '「生成」ボタンをクリックして、新しい言い訳を作成します。' },
  { name: 'コピー', text: '「コピー」ボタンをクリックして、言い訳をクリップボードにコピーします。' }
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

export const content: ExcuseGeneratorLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  bibliographyTitle: 'レジャーの参考文献',
  ui: {
    title: 'シュールな言い訳ジェネレーター',
    description: '次世代型アリバイ算出機。',
    subjectLabel: '主語',
    actionLabel: '行動',
    victimLabel: '対象',
    generateBtn: '言い訳を生成する',
    copyBtn: 'この狂気をコピーする',
    copied: 'コピーしました！',
    starts: JSON.stringify([
      "うちの猫が", "おばあちゃんが", "大統領が", "宇宙人が", "5階の隣人が",
      "Wifiが", "星占いが", "タイムトラベラーが", "洗濯機が", "冷蔵庫が",
      "クリスマスの精霊が", "自分の影が", "忍者が", "ヴィーガン警察が", "Siriが",
      "食虫植物が", "Amazonの配達員が", "邪悪なクローンが", "魔法使いが", "ゴジラが"
    ]),
    middles: JSON.stringify([
      "に宣戦布告して", "を食べてしまって", "を誘拐して", "に火をつけて",
      "でパーティーを始めて", "に吐いてしまって", "から離れるのを拒否して",
      "をハッキングして", "を盗んで", "と恋に落ちて", "について瞑想していて",
      "に呪いをかけて", "に対して抗議していて", "にカルト教団を設立して",
      "でサンバを踊っていて", "で悪魔を召喚して", "へのアクセスをブロックして",
      "が黄金に変わって", "を売ろうとしていて", "についての本を書いて"
    ]),
    ends: JSON.stringify([
      "家の鍵をなくしました。", "生きる意欲を失いました。", "ガレージのドアが壊れました。",
      "お気に入りのズボンが破れました。", "リビングのルーターが爆発しました。", "靴が片方なくなりました。",
      "物理法則を無視しました。", "尊厳を失いました。", "マンションのエレベーターが止まりました。",
      "Netflixのアカウントが乗っ取られました。", "歯ブラシが家出し直しました。", "家の登記簿が燃えました。",
      "メンコ・コレクションが散乱しました。", "車のハンドブレーキが外れました。", "社交への意欲が尽きました。",
      "コーヒーの備蓄が底をつきました。", "トイレの蓋が閉まりません。", "テレビのリモコンが消えました。",
      "ラッキーソックスを紛失しました。", "西洋文明が崩壊しました。"
    ]),
    faqTitle: 'FAQ',
    bibliographyTitle: '参考文献'
  },
  seo: [
    { type: 'title', text: '完璧な言い訳のための科学的芸術', level: 2 },
    { type: 'paragraph', html: '私たちは超コネクティビティの時代に生きています。スマートフォンは震え、時計は通知を出し、ソーシャルな予定表は負け寸前のテトリスのようです。すべてに「イエス」と言わなければならないというプレッシャーは、社会的疲弊という伝染病を引き起こしています。' },
    { type: 'title', text: 'JOMO（Joy of Missing Out）のルネサンス', level: 3 },
    { type: 'paragraph', html: '過去10年間はFOMO（取り残される恐怖）が支配していましたが、現在デジタルウェルネスの専門家は<strong>JOMO：取り残される喜び</strong>を提唱しています。これは孤立ではなく、意図的な選択のことです。' },
    { type: 'tip', title: '反論の余地のないアリバイの公式', html: '<strong>主語を分離する：</strong> あなた自身は決して加害者ではありません。「Wifi」「猫」「宇宙」など、責任を外部に転嫁しましょう。<br><strong>誇張された行動：</strong> 状況は、誰も詳細を聞きたがらないほど不条理、あるいは技術的に複雑である必要があります。<br><strong>物理的な遮断：</strong> 最終結果は「行く」か「家に留まる」かの二択である必要があります。' },
    { type: 'title', text: '言い訳の短い歴史', level: 3 },
    { type: 'list', items: [
      '<strong>中世：</strong> 「馬の蹄鉄が外れた」（時代を超えた定番）。',
      '<strong>産業革命：</strong> 「蒸気機関がオーバーヒートした」。',
      '<strong>デジタル時代：</strong> 「更新の真っ最中にネットが切れた」。'
    ]},
    { type: 'proscons', items: [
      { pro: '社会的プレッシャーを即座に和らげます', con: '使いすぎると信頼を損ないます' },
      { pro: '自分のエネルギーと境界線を守ります', con: '不用意に使うと罪悪感が生じることがあります' },
      { pro: '独創的でユーモラスなトーンが緊張を和らげます', con: 'フォーマルな場面や仕事には不向きです' }
    ]},
  ],
  faq,
  bibliography: [
    { name: '先延ばし屋の宣言', url: 'https://example.com/manifesto' }
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
