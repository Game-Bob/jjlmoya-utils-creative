import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ExcuseGeneratorLocaleContent } from '../index';

const slug = 'excuse-generator-zh';
const title = '借口生成器';
const description = '语义化的随机机器，让您有格调地摆脱承诺。瞬间生成超现实且无可辩驳的借口。';

const faq: ExcuseGeneratorLocaleContent['faq'] = [
  {
    question: '这个生成器能挽救我的婚姻吗？',
    answer: '虽然我们不是治疗师，但利用一个合理的“技术故障”来避免与姻亲的聚餐，确实能显著缓解紧张气氛。请负责任地使用。'
  },
  {
    question: '为什么句子这么荒诞？',
    answer: '策略核心是“认知失调”。如果你说一件平庸的事，那是可以验证的；如果你说一件荒谬的事，这种诧异感会瞬间阻断对方生气的能力。'
  }
];

const howTo: ExcuseGeneratorLocaleContent['howTo'] = [
  { name: '生成', text: '点击生成按钮来创建一个新的借口。' },
  { name: '复制', text: '点击复制按钮将生成的借口保存到剪贴板。' }
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

export const content: ExcuseGeneratorLocaleContent = {
  slug,
  title,
  description,
  faqTitle: '常见问题解答',
  bibliographyTitle: '闲暇文献',
  ui: {
    title: '荒诞借口生成器',
    description: '下一代不在场证明计算器。',
    subjectLabel: '主语',
    actionLabel: '动作',
    victimLabel: '对象',
    generateBtn: '生成借口',
    copyBtn: '复制这疯狂的想法',
    copied: '已复制！',
    starts: JSON.stringify([
      "我家猫", "我奶奶", "总统", "外星人", "五楼的邻居",
      "Wifi", "我的星座运势", "一个时空旅行者", "洗衣机", "我家冰箱",
      "圣诞精神", "我的影子", "一个忍者", "素食警察", "Siri",
      "我的食肉植物", "亚马逊快递员", "我的邪恶克隆体", "一个巫师", "哥斯拉"
    ]),
    middles: JSON.stringify([
      "向...宣战了", "吃掉了", "绑架了", "纵火焚烧了",
      "正在...举办派对", "在...上面呕吐了", "拒绝离开",
      "黑进了", "偷走了", "爱上了", "正在对...冥想",
      "对...施了咒语", "正在抗议", "在...创立了教派",
      "在...跳桑巴舞", "在...召唤了恶魔", "封锁了去...的通道",
      "变成了黄金", "正试图变卖", "写了一本关于...的书"
    ]),
    ends: JSON.stringify([
      "我的房门钥匙。", "我的求生欲。", "车库门。",
      "我最喜欢的裤子。", "客厅的路由器。", "我唯一的一双鞋。",
      "物理定律。", "我的尊严。", "大楼的电梯。",
      "我的 Netflix 账号。", "我的牙刷。", "我的房产证。",
      "我的圆牌收藏。", "汽车手刹。", "我的社交欲望。",
      "我的咖啡储备。", "马桶盖。", "电视遥控器。",
      "我的幸运袜。", "西方文明。"
    ]),
    faqTitle: 'FAQ',
    bibliographyTitle: '参考资料'
  },
  seo: [
    { type: 'title', text: '完美借口的科学艺术', level: 2 },
    { type: 'paragraph', html: '我们生活在一个过度连接的时代。你的手机在震动，手表在提醒，社交日程表看起来就像一局即将败北的俄罗斯方块。对所有事情都说“是”的压力造成了社交疲劳的流行。' },
    { type: 'title', text: 'JOMO（错失的快乐）的复兴', level: 3 },
    { type: 'paragraph', html: '虽然 FOMO（错失恐惧症）统治了过去十年，但数字健康专家现在提倡 <strong>JOMO：错失的快乐</strong>。这关乎的不是孤立，而是有目的的选择。' },
    { type: 'tip', title: '无可辩驳的不在场证明公式', html: '<strong>分离主语：</strong>你永远不是罪魁祸首。它是“Wifi”、“我家猫”或“宇宙”。将责任推给外部实体。<br><strong>夸张的动作：</strong>情况必须足够荒诞或专业，以至于没有人会追问细节。<br><strong>物理阻断：</strong>最终结果必须是二元的：要么我去，要么我呆在家里。' },
    { type: 'title', text: '借口简史', level: 3 },
    { type: 'list', items: [
      '<strong>中世纪：</strong> “我的马掉了一个马掌”（永恒的经典）。',
      '<strong>工业革命：</strong> “蒸汽机过热了”。',
      '<strong>数字时代：</strong> “我的网络在更新到一半时断了”。'
    ]},
    { type: 'proscons', items: [
      { pro: '瞬间缓解社交压力', con: '过度使用会破坏信任' },
      { pro: '保护您的精力与边界', con: '如果使用不当可能会产生负罪感' },
      { pro: '创意且幽默的语调能化解紧张气氛', con: '不适合正式或职业场合' }
    ]},
  ],
  faq,
  bibliography: [
    { name: '拖延者宣言', url: 'https://example.com/manifesto' }
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
