import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DiceRollerLocaleContent } from '../index';

const slug = 'dice-roller-zh';
const title = '在线掷骰子';
const description = '一个为您的 RPG 和桌面游戏而设计的全功能骰子模拟器。支持掷 d4、d6、d8、d10、d12、d20 和 d100，并带有修正值和历史记录功能。';

const faq: DiceRollerLocaleContent['faq'] = [
  {
    question: '我该如何模拟优势掷骰（Advantage, D&D）？',
    answer: '点击两次 d20 按钮，将两个 d20 骰子放入袋中。掷骰后，观察两个独立的结果并取较高值。显示的“总计”将是两者的和，但您可以在结果明细中查看每个骰子的具体点数。',
  },
  {
    question: '结果中的绿色或红色代表什么？',
    answer: '绿色的结果表示该骰子掷出了可能的最大值（“大成功”或“暴击”）。红色的结果代表最小值（“1”，最糟糕的结果）。这让您能一眼发现关键成功或大失败。',
  },
  {
    question: '我可以添加多个同类型的骰子吗？',
    answer: '可以。每次点击一个骰子都会将其添加到投掷池中。如果您点击 d6 三次，投掷池将显示“3d6”。如需减少数量，点击投掷池中每个骰子组旁边的“−”按钮即可。',
  },
  {
    question: '数字骰子和物理骰子一样随机吗？',
    answer: '从统计学上讲，是的。现代 JavaScript 引擎使用高质量的均匀分布伪随机算法（xorshift128+）。现实中的物理骰子可能会因制造工艺的小瑕疵产生偏差；数字骰子则完全不存在这个问题。',
  },
  {
    question: '什么是 d100，它该如何使用？',
    answer: 'd100（或 d%）会生成 1 到 100 之间的数字，常用于基于百分比的游戏系统，如《克苏鲁的呼唤》或《战锤奇幻角色扮演》。它代表“直接概率”：如果您的潜行技能是 65%，那么您需要掷出 65 或更小的数字才能成功。',
  },
];

const howTo: DiceRollerLocaleContent['howTo'] = [
  { name: '构建骰子池', text: '点击骰子按钮（d4、d6、d8...）将它们添加到池中。每次点击都会添加一个所选类型的骰子。您可以在同一次投掷中混合不同类型的骰子。' },
  { name: '调整修正值', text: '使用修正值旁边的“+”和“−”按钮来应用奖励或惩罚（如 D&D 中的属性修正值）。修正值会自动累加到总计中。' },
  { name: '掷骰子', text: '点击“掷骰子”按钮。右侧面板显示最终总计以及每个骰子的具体点数，大成功（最大值）以绿色标记，大失败（最小值）以红色标记。' },
  { name: '查看历史记录', text: '每次投掷都会连同使用的骰子表达式、总计结果和精确时间一起记录在历史中。您可以使用相应按钮清除历史记录。' },
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

export const content: DiceRollerLocaleContent = {
  slug,
  title,
  description,
  faqTitle: '常见问题解答',
  bibliographyTitle: '概率文献',
  ui: {
    title: '在线掷骰子',
    description: '愿运气与你同在。',
    rollBtn: '掷骰子',
    totalLabel: '总计',
    historyLabel: '历史记录',
    clearHistoryBtn: '清除历史',
    faqTitle: '常见问题',
    bibliographyTitle: '参考资料',
    addDiceLabel: '将骰子添加到池中',
    bagLabel: '投掷池',
    emptyBagBtn: '清空',
    emptyBagText: '点击骰子进行添加',
    modifierLabel: '修正值',
    rollManyLabel: '投掷 $COUNT 个骰子',
    rollOneLabel: '投掷 $COUNT 个骰子',
    preRollText: '添加骰子后掷骰',
    emptyHistoryText: '投掷历史将显示在此处'
  },
  seo: [
    { type: 'title', text: '随机的艺术：骰子的历史与数学', level: 2 },
    { type: 'paragraph', html: '骰子是人类最古老的随机数生成器之一。早在公元前 5000 年，美索不达米亚和埃及就曾将<strong>距骨</strong>（牛羊的足踝骨）用作原始的四面骰子。从雕刻骨头到现代环氧树脂二十面体的演变不仅仅是美学上的追求，更是一段穿越概率论和游戏机制设计的旅程。' },
    { type: 'title', text: '标准骰子系列', level: 3 },
    { type: 'paragraph', html: '自 1974 年由 <strong>《龙与地下城》</strong> 推而广之以来，角色扮演游戏中最广泛使用的骰子组合由五个柏拉图多面体加上两个额外形状组成：d4（正四面体）、d6（正六面体/立方体）、d8（正八面体）、d10（五角偏方三八面体）、d12（正十二面体）、d20（正二十面体）以及 d100（百分比骰）。每种多面体都保证了均匀分布：所有面出现的概率完全相同。' },
    { type: 'list', items: [
      '<strong>d4 – 正四面体:</strong> 如果赤脚踩到它是最危险的。四个三角形面，每面概率 25%。通常用于匕首伤害或低级法术。',
      '<strong>d6 – 立方体:</strong> 最通用的骰子。自埃及塞尼特棋以来就存在于所有棋盘游戏中。其立方几何形状保证了完美的等概率分布。',
      '<strong>d8 – 正八面体:</strong> 长矛或战斧的骰子。八个等边三角形面，每面概率 12.5%。',
      '<strong>d10 – 五角偏方三八面体:</strong> 标准组合中唯一的非柏拉图多面体。每个“顶点”有两个相对的面。是 d100（两个 d10 组合）的基础。',
      '<strong>d12 – 正十二面体:</strong> 野蛮人之骰。十二个正五边形面。在很多系统中被低估，但在 D&D 5e 的野蛮人职业中是主角。',
      '<strong>d20 – 正二十面体:</strong> RPG 之王。二十个三角形面。d20 系统的核心：决定了几乎所有动作的成败。',
      '<strong>d100 – 百分比骰:</strong> 两个 d10 组合（十位+个位）。在《克苏鲁的呼唤》或《战锤》等系统中定义精细概率。',
    ]},
    { type: 'stats', items: [
      { value: '5000 BC', label: '首个骰子（距骨）', icon: 'mdi:history' },
      { value: '1974', label: 'D&D 普及了此组合', icon: 'mdi:sword' },
      { value: '7 种', label: '标准 RPG 骰子', icon: 'mdi:dice-multiple' },
      { value: '2¹²⁸', label: 'JS 随机周期', icon: 'mdi:function-variant' },
    ], columns: 4 },
    { type: 'title', text: '概率与分布曲线', level: 3 },
    { type: 'paragraph', html: '当您掷单个骰子时，会得到<strong>离散均匀分布</strong>：每个结果的概率完全相同 (1/n)。但只要您组合多个骰子，数学魔法就会将平坦的曲线转化为<strong>近似正态分布</strong>。这就是为什么 2d6 不等于 1d12：使用两个六面骰子掷出 7 的概率是 6/36 ≈ 16.7%，而极端结果（2 和 12）仅占 2.8%。' },
    { type: 'tip', title: '优势与劣势 (D&D 5e)', html: '<strong>优势</strong>机制是指掷 2d20 并取较高值。从数学上讲，这会将平均值从 10.5 提高到约 13.8。<strong>劣势</strong>反之：取较低值，平均值降至约 7.2。我们的模拟器允许您通过向袋中添加两个 d20 并比较结果来模拟这一点。' },
    { type: 'title', text: '修正值：骰子与角色之间的桥梁', level: 3 },
    { type: 'paragraph', html: '在大多数 RPG 系统中，骰子并非独立工作：会加减代表角色能力的<strong>修正值</strong>。在 D&D 5e 中，力量修正值为 +5 意味着您掷 1d20 后加 5，并根据敌人的护甲等级 (AC) 检查结果。我们的模拟器包含修正值控制功能，以如实反映这些机制。' },
    { type: 'tip', title: '骰子记法标准', html: '<strong>XdY+Z</strong> 记法是角色扮演游戏中的事实标准：X 个 Y 面的骰子，带有修正值 Z。“3d6+2”意味着掷三个六面骰子并将结果加 2。我们的工具在历史记录中使用此记法，方便您轻松共享或记录您的掷骰结果。' },
    { type: 'glossary', items: [
      { term: '暴击 (Critical Hit)', definition: '掷出骰子的最大值（例如 d20 掷出 20）。在大多数 RPG 系统中通常会触发特殊的奖励效果。' },
      { term: '大失败 / 自发 1 (Nat 1)', definition: '掷出骰子的最小值 (1)。通产导致戏剧性的失败或负面后果。' },
      { term: '骰子池 (Dice Pool)', definition: '同时掷出的一组骰子。我们工具中的投掷池会按数量分组显示每种骰子类型（例如 3d6 + 2d8）。' },
      { term: '修正值 (Modifier)', definition: '一个加在或减去掷骰结果的固定数值，代表角色的技能、属性奖励或环境惩罚。' },
      { term: '百分号掷骰 (Percentile Roll)', definition: '使用两个 d10 产生 1-100 结果的掷骰，用于基于技能且能力以百分比衡量的系统。' },
    ]},
  ],
  faq,
  bibliography: [
    { name: 'D&D Beyond – 掷骰机制规则', url: 'https://www.dndbeyond.com/sources/basic-rules/using-ability-scores' },
    { name: 'Roll20 – 虚拟桌面与骰子系统', url: 'https://roll20.net/' },
    { name: 'Pathfinder – d20 系统参考', url: 'https://paizo.com/pathfinder' },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
