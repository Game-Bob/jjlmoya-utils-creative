import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { ZalgoGeneratorLocaleContent } from '../index';

const slug = 'zalgo-generator';
const title = 'Zalgo 文本生成器';
const description = '使用级联溢出的 Unicode 字符破坏您的信息。调整故障效果的强度和方向。';

const faq: ZalgoGeneratorLocaleContent['faq'] = [
  { question: '什么是 Zalgo 文本？', answer: '这是一种过度使用 Unicode 组合字符（变音符号）的文本类型。当垂直堆叠时，这些字符会“溢出”其原始行，创造出在互联网文化中流行的破坏、混乱或恐怖的视觉效果。' },
  { question: '为什么 Zalgo 文本看起来如此奇怪？', answer: '它利用了 Unicode 标准的一个特性，即允许在基础字母上方、下方或中间添加标记。由于对可以添加多少个标记没有严格限制，文本可以“侵入”上方或下方的行。' },
  { question: '我可以在社交媒体上使用这种文本吗？', answer: '是的，大多数现代平台（Instagram、Twitter、Discord）都支持 Unicode。但是，为了保持界面可读性，某些网络或设备可能会在强度极高时过滤或截断多余字符。' },
  { question: '如何从文本中移除 Zalgo 效果？', answer: '要清除损坏的文本，您可以使用 JavaScript 字符串规范化，或者只需将其粘贴到仅接受纯文本的基础文本编辑器中。我们的工具纯粹是出于创意目的，不会损坏原始内容。' },
];

const howTo: ZalgoGeneratorLocaleContent['howTo'] = [
  { name: '编写基础消息', text: '在主文本框中输入您想要“破坏”的文本。' },
  { name: '调整混乱强度', text: '移动滑块以定义要堆叠多少个组合字符。强度越高 = 越难阅读。' },
  { name: '选择溢出方向', text: '选择破坏是向上增长、向下增长，还是同时向所有方向增长。' },
  { name: '复制结果', text: '点击复制按钮。生成的文本包含维持故障效果所需的所有不可见字节。' },
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

export const content: ZalgoGeneratorLocaleContent = {
  slug,
  title,
  description,
  faqTitle: '常见问题解答',
  ui: {
    title: 'Zalgo 生成器',
    description: '一̵切̷都̵已̵损̷坏̷',
    inputPlaceholder: '在此处输入您的正常信息...',
    intensityLabel: '损坏级别',
    outputLabel: '损坏结果',
    copyBtn: '复制混乱',
    copied: '已复制！',
    faqTitle: 'FAQ',
    bibliographyTitle: '参考资料',
    configTitle: '配置',
    intensity: '强度',
    upLabel: '上方损坏',
    midLabel: '中间噪点',
    downLabel: '下方损坏',
    resetBtn: '重置数值',
    warningText: '警告：Zalgo 文本使用组合 Unicode 字符，可能会在视觉上溢出其容器。在社交媒体上请谨慎使用。',
    previewLabel: '实时预览',
    emptyLabel: '空',
    charLabel: '字符',
    noteText: '注意：某些浏览器可能会限制组合字符的渲染'
  },
  seo: [
    { type: 'title', text: '什么是 Zalgo 文本以及视觉损坏如何运作？', level: 2 },
    { type: 'paragraph', html: 'Zalgo 文本是一种利用 Unicode 标准特定特性的排版操作形式：<strong>组合字符</strong>。与普通字符不同，这些变音符号不占用水平空间——它们垂直堆叠在基础字母顶部，创造出互联网文化中非常流行的“数字混乱”或“宇宙恐怖”美感。' },
    { type: 'title', text: '过程分析', level: 3 },
    { type: 'paragraph', html: '我们的生成器独立处理每个字符，在三个不同的向量中注入随机的 Unicode 码位：<strong>上方</strong>（堆叠在上面的变音符号）、<strong>中间</strong>（穿透字母的符号）和<strong>下方</strong>（悬挂在下面的符号）。' },
    { type: 'tip', title: '损坏算法', html: '对于每个基础字符，计算 <code>数量 = 强度 × 30</code>。在每个向量中添加那么多元随机变音符号。在强度为 1.5 时，每个字母最多可获得 45 个组合字符。' },
    { type: 'title', text: '礼仪与应用', level: 3 },
    { type: 'list', items: [
      '<strong>社交媒体：</strong>在 Instagram 或 TikTok 上吸引注意力。非常适合寻求打破常规的个人简介。',
      '<strong>恐怖叙事：</strong>将虚构叙事、克里皮帕斯塔 (creepypasta) 或受损系统模拟剧本化。',
      '<strong>无障碍：</strong>警告 —— 屏幕阅读器无法读取 Zalgo 文本。仅将其用作视觉装饰，切勿用于关键内容。',
      '<strong>SEO：</strong>切勿在核心关键词（H1、元标题）中使用 Zalgo。索引机器人可能无法规范化这些字符。'
    ]},
    { type: 'title', text: '起源：从 Something Awful 到故障艺术', level: 3 },
    { type: 'paragraph', html: 'Zalgo 最初并不是作为生成器出现的，而是作为对经典连环画的干预。用户 Shmorky 在 2000 年代中期开始变形南希 (Nancy) 或阿奇 (Archie) 等角色，添加污渍和扭曲。短语 <strong>“他来了” (He comes)</strong> 封印了这些作品的命运，宣布了一个吞噬现实的实体的到来。' },
    { type: 'glossary', items: [
      { term: '组合字符', definition: '一种 Unicode 码位，旨在放置在基础字符的顶部、底部或中间。在阿拉伯语、越南语和印地语等语言中被合法使用。' },
      { term: '变音符号', definition: '添加到基础字母上的标记，用于修改其发音或含义。Zalgo 滥用这些符号来产生视觉溢出。' },
      { term: 'Unicode 区段', definition: '一系列连续的 Unicode 码位。Zalgo 字符主要来自“组合变音符号”区段 (U+0300–U+036F)。' },
      { term: '故障艺术', definition: '一种在数字媒体中故意包含或模拟错误、伪影和损坏作为表现技术的审美。' }
    ]},
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
