import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SynesthesiaPainterLocaleContent } from '../index';

const slug = 'synesthesia-painter-zh';
const title = '联觉绘画家';
const description = '根据“书记素-色彩联觉”可视化文字颜色。每个字母都有其专属色彩，将文本转化为色度艺术。';

const faq: SynesthesiaPainterLocaleContent['faq'] = [
  {
    question: '所有的联觉者看到的字母颜色都一样吗？',
    answer: '不。联觉颜色对每个人来说都是独特的。虽然存在统计学上的倾向（对许多人来说 A 趋向于红色），但没有两个联觉者的调色板是完全相同的。此工具使用的是人口研究中最常报告的颜色，而非某种“正确”的色彩。',
  },
  {
    question: '不断使用这个工具能让我产生联觉吗？',
    answer: '严格意义上，从神经学上讲是不可能的。真正的联觉是神经系统的一种特征，而非习得的技能。然而，重复使用颜色-字母关联可以建立强大的关联记忆。一些研究表明，练习这些关联可以提高对文本的记忆力。',
  },
  {
    question: '“光环”模式有什么用？',
    answer: '光晕（Aura）模式模拟了一些联觉者的描述，即看到颜色“漂浮”或“发光”在字母周围，而不是融入其中。它创造了一种更具氛围感和沉浸式的视觉体验，尤其是在深色背景下。',
  },
  {
    question: '“圆点”模式有科学依据吗？',
    answer: '这是一种艺术抽象。它通过消除字母的可识别形状，将文本简化为其“色彩本质”。结果类似于色彩数据可视化或点彩画，让您在没有任何含义干扰的情况下看到文本的“色彩签名”。',
  },
  {
    question: '为什么像 I 和 O 这样的字母是白色或黑色的？',
    answer: '在联觉研究中，元音 I 和 O，以及字母 W，经常被描述为白色、透明或黑色。此工具会根据当前背景调整这些颜色：深色背景为白色，浅色背景为黑色，以始终确保可见性。',
  },
];

const howTo: SynesthesiaPainterLocaleContent['howTo'] = [
  { name: '编写文本', text: '点击书写区域并开始输入。每个字母都会根据其统计联觉关联显示颜色。' },
  { name: '更改可视化模式', text: '使用右上角的按钮在“字母”（彩色文本）、“圆点”（彩色圆圈）和“光环”（带有色彩光晕的发光字母）之间切换。' },
  { name: '探索不同的文本', text: '编写姓名、不同语言的单词或句子，以发现它们独特的色彩调色板。长单词会创造出迷人的视觉渐变。' },
  { name: '清除并重新开始', text: '使用底部栏的“清除”按钮清空画布并探索新文本。' },
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

export const content: SynesthesiaPainterLocaleContent = {
  slug,
  title,
  description,
  faqTitle: '常见问题解答',
  bibliographyTitle: '精神文献',
  ui: {
    title: '联觉绘画家',
    description: '将您的文字转化为色度艺术。',
    modeLetters: '字母',
    modeDots: '圆点',
    modeAura: '光环',
    placeholder: '在此输入...',
    footerText: '输入以发现您的个人调色板',
    clearBtn: '清除',
    faqTitle: 'FAQ',
    bibliographyTitle: '参考资料'
  },
  seo: [
    { type: 'title', text: '什么是书记素-色彩联觉？', level: 2 },
    { type: 'paragraph', html: '<strong>联觉（Synesthesia）</strong>是一种神经系统状况，其中一种感觉的刺激会自动触发另一种感觉的反应。研究最广泛且最普遍的变体是<strong>书记素-色彩联觉</strong>：拥有这种体质的人会感知每个字母或数字具有内在的、恒定的且鲜明的颜色。这并非想象或比喻；对于联觉者来说，字母“A”是红色的，就像火是热的一样。此工具应用了基于人口研究中每个书记素最常报告的颜色的<em>统计调色板</em>。' },
    { type: 'title', text: '神经科学：交叉激活理论', level: 3 },
    { type: 'paragraph', html: '书记素-色彩联觉最被广泛接受的神经学模型是<strong>交叉激活</strong>。颞叶皮层中涉及识别字母形状的区域（梭状回）在解剖学上邻近处理颜色的区域（V4 区）。在联觉者中，这些区域之间存在更强的结构或功能连接，因此识别字母也会激活颜色神经元。功能性核磁共振成像（fMRI）研究已确认，联觉者在阅读文本时（即使文本是单色的）在 V4 区显示出真实的激活。' },
    { type: 'tip', title: '三种可视化模式', html: '<strong>字母：</strong> 按书记素着色的原始文本。非常适合观察完整文本的“色彩旋律”。<strong>圆点：</strong> 每个字符都变成其所属颜色的圆圈；文本消失，只剩下色彩音乐。<strong>光环：</strong> 字母散发出其所属颜色的光晕，仿佛文本正散发着自身的能量。' },
    { type: 'title', text: '统计学与色彩普遍性', level: 3 },
    { type: 'paragraph', html: '虽然联觉颜色对每个人来说都是独特的，但 Simner 等（2006）和 Eagleman 等（2007）的研究发现了显著的统计模式。元音 <strong>A</strong> 对大多数人来说往往是红色的；<strong>O</strong> 是白色或黑色；<strong>S</strong> 出现在青色或绿色调中；<strong>E</strong> 表现为绿色或白色。有趣的是，颜色-字母关联在同一种语言文化中比在不同文化之间更具一致性，这暗示了早期字母学习的作用。' },
    { type: 'list', items: [
      '<strong>流行率：</strong> 大约 4% 的人口在一定程度上拥有书记素-色彩联觉，不过如果包括临床以下表现，最近的研究将这一数字提高到 6-8%。',
      '<strong>性别偏差：</strong> 尽管原因尚未完全解释，但联觉在女性中发生的频率是男性的 3 到 6 倍。',
      '<strong>遗传性：</strong> 它具有明显的遗传成分：它倾向于在家族中出现，尽管并不总是表现为同一种类型的联觉。',
      '<strong>一致性：</strong> 与后天学习习惯不同，联觉颜色随时间推移表现出极高的稳定性。长达 10 年的随访研究表明，书记素-色彩关联的一致性超过 90%。',
      '<strong>著名的联觉者：</strong> 弗拉基米尔·纳博科夫、瓦西里·康定斯基、尼古拉·特斯拉和比利·乔尔都曾公开描述过联觉体验，这些体验也影响了他们的作品。'
    ]},
    { type: 'stats', items: [
      { value: '4–8%', label: '拥有联觉的人口', icon: 'mdi:brain' },
      { value: '90%+', label: '10 年间的颜色一致性', icon: 'mdi:check-circle' },
      { value: '3–6倍', label: '在女性中更常见', icon: 'mdi:gender-female' },
      { value: '26+10', label: '彩色字母与数字', icon: 'mdi:alphabetical' }
    ], columns: 4 },
    { type: 'title', text: '艺术与联觉：当感官融合', level: 3 },
    { type: 'paragraph', html: '抽象表现主义的创始人<strong>瓦西里·康定斯基</strong>同时经历了书记素-色彩和音乐-色彩联觉：他能听到色彩中的乐器声（黄色是小号，深蓝色是大提琴），并利用这些感知创造了他的抽象艺术理论。在音乐方面，<strong>亚历山大·斯克里亚宾</strong>为《普罗米修斯：火之诗》创作了一个“光键盘”（tastiera per luce）声部，旨在投射出与每个音符相对应的颜色。' },
    { type: 'tip', title: '此工具的色盘', html: '颜色分配受到科学文献中最常见的统计数据的启发。<strong>A → 红色</strong>，<strong>E → 绿色</strong>，<strong>I → 根据背景显示白/黑</strong>，<strong>O → 黑/白</strong>，<strong>U → 琥珀色</strong>。辅音遵循较不统一的模式，但始终优先考虑与背景的对比度，以保证可读性。' }
  ],
  faq,
  bibliography: [
    { name: 'Simner et al. (2006) – 联觉：非典型跨模态体验的流行率', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1626536/' },
    { name: 'Eagleman et al. (2007) – 用于联觉研究的标准化测试电池', url: 'https://www.sciencedirect.com/science/article/pii/S0010945207000087' },
    { name: '康定斯基，《艺术中的精神性》（1911）', url: 'https://zh.wikipedia.org/wiki/瓦西里·康定斯基' }
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
