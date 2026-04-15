import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { FortuneCookieLocaleContent } from '../index';

const slug = 'fortune-cookie-ja';
const title = 'フォーチュンクッキー';
const description = '一日の運勢を確認し、ラッキーナンバーを見つけましょう。一日に一回、クリックで運勢を占うことができます。';

const faq: FortuneCookieLocaleContent['faq'] = [
  {
    question: '一日に複数のクッキーを開くことはできますか？',
    answer: '運命が語るのは一日に一度だけです。占いの結果はデバイスに保存され、その日一日あなたを導きます。'
  },
  {
    question: '占いの内容はランダムに生成されますか？',
    answer: 'はい。毎日ランダムに一つのメッセージが選ばれ、ローカルに保存されます。25種類のメッセージはすべて等しい確率で選ばれるため、毎日変化を楽しむことができます。'
  }
];

const howTo: FortuneCookieLocaleContent['howTo'] = [
  { name: 'クッキーを割る', text: 'クッキーを繰り返しクリックして割ります。' },
  { name: 'メッセージを読む', text: '中に隠されたメッセージと、その日のラッキーナンバーを確認します。' }
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

export const content: FortuneCookieLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  bibliographyTitle: '運命の参考文献',
  ui: {
    title: 'オンライン・フォーチュンクッキー',
    description: 'あなたの毎日のデジタル神託。',
    instruction: 'クッキーを叩いて運命を開きましょう',
    dailyStatus: '本日の運勢はすでに公開されています。',
    shareBtn: '知恵を共有する',
    shareTitle: '私のフォーチュンクッキー',
    shareText: '神託が語りました："$TEXT"\n私のラッキーナンバー：$NUMS\n\nここからあなたの運勢を占う：',
    copied: 'コピーしました！',
    fortunes: JSON.stringify([
      "あなたが探している幸福は、別のクッキーの中にあります。",
      "日を数えるのではなく、日々を数え上げるものにしなさい。",
      "千里の道も一歩から始まります。",
      "失敗は発見の序文です。",
      "学ぶ能力こそがあなたの最大の財産です。",
      "微笑んでください。宇宙があなたを見守っています。",
      "忍耐は根は苦いが、その実はとても甘い木です。",
      "ゆっくり成長することを恐れず、ただ立ち止まっていることだけを恐れなさい。",
      "今日は、昨日あなたが心配していた明日です。",
      "幸福はあらかじめ作られたものではありません。それはあなた自身の行動から生まれます。",
      "風向きを変えられないなら、帆を調整しなさい。",
      "今植えたものが、のちに収穫するものとなります。",
      "創造性とは、知性が楽しんでいる状態です。",
      "間違いを探すのではなく、解決策を探しなさい。",
      "あなたの態度（Attitude）こそが、あなたの高度（Altitude）を決めます。資質（Aptitude）ではありません。",
      "成功とは、毎日繰り返される小さな努力の積み重ねです。",
      "できると信じれば、道は半分開けたも同然です。",
      "素晴らしい仕事をする唯一の方法は、自分の仕事を愛することです。",
      "人生の10%はあなたに起こることで、90%はそれに対するあなたの反応です。",
      "あなたが世界で見たいと思う変化そのものになりなさい。",
      "未来を予測する最良の方法は、それを創り出すことです。",
      "シンプルさは究極の洗練です。",
      "あなたは自らの運命の主人であり、自らの魂の指揮官です。",
      "近いうちに、あなたの視点を変えるようなニュースを受け取るでしょう。",
      "予期せぬ旅があなたに大きな喜びをもたらすでしょう。"
    ]),
    faqTitle: 'FAQ',
    bibliographyTitle: '参考文献'
  },
  seo: [
    { type: 'title', text: 'フォーチュンクッキーの謎', level: 2 },
    { type: 'paragraph', html: 'この不思議なクッキーがどこから来たのか、考えたことはありますか？中華料理のイメージが強いですが、その起源は日本とアメリカをまたぐ興味深い旅の歴史です。今日私たちが知っているフォーチュンクッキーは、20世紀初頭のカリフォルニアで発明された可能性が高く、中国本土ではほとんど知られていません。' },
    { type: 'tip', title: '神託の仕組み', html: '毎日一回、クッキーを開くことができます。システムが運勢を24時間保存します。占いの結果はブラウザのローカルにのみ保存され、完全にプライベートです。サーバーとの通信もありません。明日また新しい予言を見に来てください！' },
    { type: 'title', text: '神託の哲学', level: 3 },
    { type: 'paragraph', html: '人類は古来より、不確実な時代に導きを求めてきました。デルポイの神託から易経にいたるまで、占いのシステムには一貫した心理的機能があります。それは、私たちに<strong>「立ち止まり、内省する」</strong>許可を与えることです。フォーチュンクッキーは未来を当てるものではなく、未来について考えるきっかけをくれるものです。' },
    { type: 'list', items: [
      '<strong>古代中国：</strong> 易経（紀元前1000年頃）は、六十四卦を用いて決断を導き、運命を解釈しました。',
      '<strong>古典ギリシャ：</strong> デルポイの神託は、神の導きとされる難解な宣告を求め、統治者や市民を惹きつけました。',
      '<strong>現代日本：</strong> 神社にある「おみくじ」は、木の枝に結びつけられ、運命と儀式を融合させています。',
      '<strong>20世紀アメリカ：</strong> フォーチュンクッキーは日系アメリカ人コミュニティで生まれ、のちに中華系アメリカ料理の代名詞となりました。'
    ]},
    { type: 'stats', items: [
      { value: '30億個以上', label: '年間で製造されるクッキーの数', icon: 'mdi:cookie' },
      { value: '紀元前1000年頃', label: '易経の起源', icon: 'mdi:book-open-variant' },
      { value: '25', label: '収録されているメッセージ数', icon: 'mdi:star-shooting' },
      { value: '1回/日', label: '一日に占える回数', icon: 'mdi:calendar-today' }
    ], columns: 4 }
  ],
  faq,
  bibliography: [
    { name: 'フォーチュンクッキーの歴史（英語）', url: 'https://en.wikipedia.org/wiki/Fortune_cookie' }
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
