import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { FortuneCookieLocaleContent } from '../index';

const slug = 'fortune-cookie-zh';
const title = '幸运饼干';
const description = '查看您的每日运势并发现您的幸运数字。每天一个在线幸运饼干，一键开启您的预言。';

const faq: FortuneCookieLocaleContent['faq'] = [
  {
    question: '我每天可以打开多个饼干吗？',
    answer: '命运每天只开启一次。我们会将您的运势保存在设备上，让它在这一整天中指引您。'
  },
  {
    question: '运势是随机生成的吗？',
    answer: '是的——每天都会随机选出一个运势并保存在本地。25 个运势中每一个被选中的概率都是相等的，确保了内容的多样性。'
  }
];

const howTo: FortuneCookieLocaleContent['howTo'] = [
  { name: '敲碎饼干', text: '多次点击饼干来将其敲开。' },
  { name: '阅读运势', text: '发现里面隐藏的信息以及您当天的幸运数字。' }
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
  inLanguage: 'zh',
};

export const content: FortuneCookieLocaleContent = {
  slug,
  title,
  description,
  faqTitle: '常见问题解答',
  bibliographyTitle: '命运文献',
  ui: {
    title: '在线幸运饼干',
    description: '您的每日数字神谕。',
    instruction: '点击饼干开启您的命运',
    dailyStatus: '您今天的运势已经揭晓。',
    shareBtn: '分享智慧',
    shareTitle: '我的幸运饼干',
    shareText: '命运之音："$TEXT"\n我的数字：$NUMS\n\n快来这里发现您的运势：',
    copied: '已复制！',
    fortunes: JSON.stringify([
      "您所寻求的财富就在另一个饼干里。",
      "不要计算日期，要让每一天都变得有意义。",
      "千里之行，始于足下。",
      "错误是发现的前言。",
      "您的学习能力是您最大的财富。",
      "微笑吧，宇宙正在注视着您。",
      "耐心是一棵根苦果甜的树。",
      "不要害怕成长缓慢，只害怕停滞不前。",
      "今天就是您昨天所担心的明天。",
      "幸福不是现成的，它源于您自己的行动。",
      "如果您无法改变风的方向，请调整您的船帆。",
      "您现在种下什么，以后就会收获什么。",
      "创意是智能在寻找乐趣。",
      "不要寻找错误，要寻找解决方案。",
      "决定您高度的是您的态度，而不是您的天赋。",
      "成功是日复一日重复的小小努力的总和。",
      "相信您可以，您就已经成功了一半。",
      "成就伟业的唯一途径是热爱您所做的事。",
      "生活 10% 取决于发生在您身上的事，90% 取决于您如何反应。",
      "成为您想在世界上看到的改变。",
      "预测未来的最好方式就是去创造它。",
      "简单是最终的精致。",
      "您是您命运的主宰，也是您灵魂的统帅。",
      "很快您就会收到改变您观点的新闻。",
      "一次意外的旅行会给您带来巨大的喜悦。"
    ]),
    faqTitle: 'FAQ',
    bibliographyTitle: '参考资料'
  },
  seo: [
    { type: 'title', text: '幸运饼干之谜', level: 2 },
    { type: 'paragraph', html: '有没有想过这些奇特的饼干是从哪里来的？虽然我们将它们与中餐联系在一起，但它们的起源实际上是日本和美国之间的一段迷人旅程。我们今天所熟知的幸运饼干很可能是 20 世纪初在加利福尼亚发明的，而不是在中国——在那里它们几乎鲜为人知。' },
    { type: 'tip', title: '我们的神谕如何运作', html: '每天您可以打开一个饼干。系统会保存您的运势，以便您能在 24 小时内记住它。运势本地存储在您的浏览器中——完全私密，不涉及任何服务器。明天再来看看新的预言吧！' },
    { type: 'title', text: '神谕的哲学', level: 3 },
    { type: 'paragraph', html: '人类一直在不确定的时代寻求指引。从德尔斐神谕到易经，占卜系统都起到了一个一致的心理功能：它们允许我们<strong>停下来反思</strong>。幸运饼干并不预言未来——它促使您思考未来。' },
    { type: 'list', items: [
      '<strong>古代中国：</strong> 易经（Book of Changes, 约公元前 1000 年）使用六爻来指导决策并解释命运。',
      '<strong>古典希腊：</strong> 德尔斐神谕以被解释为神圣指引的神秘教理吸引了统治者和普通公民。',
      '<strong>现代日本：</strong> 日本神社的“御神签”系在树枝上，将命运与仪式融合在一起。',
      '<strong>20 世纪美国：</strong> 幸运饼干出现在日裔美国人社区，之后成为美式中餐的代名词。'
    ]},
    { type: 'stats', items: [
      { value: '30 亿+', label: '每年制造的幸运饼干数量', icon: 'mdi:cookie' },
      { value: '约公元前 1000 年', label: '易经起源', icon: 'mdi:book-open-variant' },
      { value: '25', label: '此神谕中的运势数量', icon: 'mdi:star-shooting' },
      { value: '1次/天', label: '每天一次预言', icon: 'mdi:calendar-today' }
    ], columns: 4 },
  ],
  faq,
  bibliography: [
    { name: '幸运饼干的历史（英文）', url: 'https://en.wikipedia.org/wiki/Fortune_cookie' }
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
