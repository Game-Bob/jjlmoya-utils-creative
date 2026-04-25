import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { GlitchImageDistorterLocaleContent } from '../index';

const slug = 'glitch-image-distorter';
const title = '故障艺术生成器';
const description = '无需 Photoshop，即可通过 RGB 分离、扫描线、像素排序和动态扭曲，将您的照片转换成迷人的故障艺术作品。';

const faq: GlitchImageDistorterLocaleContent['faq'] = [
  {
    question: '什么是故障艺术 (Glitch Art)？',
    answer: '故障艺术是一种通过操纵数字图像或数据来产生故意视觉错误的数字艺术形式。这些“故障”表现为色彩碎片化、形状扭曲和不可预测的模式，营造出一种数字损坏与混沌的独特美学。',
  },
  {
    question: '我可以使用自己的图片吗？',
    answer: '可以！您可以上传任何 PNG、JPG 或 WebP 格式的图片，将其拖放到画布上，或使用 Ctrl+V 直接从剪贴板粘贴图片。您也可以使用示例图片来体验该工具。',
  },
  {
    question: '各种扭曲效果的作用是什么？',
    answer: '“损坏 (Corruption)”分离 RGB 通道以产生色差效果。“干扰 (Interference)”添加类似旧监视器的扫描线，并可选择震颤效果。“像素排序 (Pixel Sorting)”使明亮的像素向选定方向“流动”。“静态噪声 (Static Noise)”叠加经典的电视雪花。',
  },
  {
    question: '我可以让故障效果动起来吗？',
    answer: '当然可以！“故障动画”模式会对参数应用微小的随机变动，产生一种持续循环的生动闪烁效果。您可以将其导出为动态 GIF 或 WebP 格式。',
  },
  {
    question: '我可以导出什么格式？',
    answer: '您可以下载高质量的 PNG 图片用于静态展示，如果启用了动画模式，则可以导出动态 GIF 或 WebP 格式。非常适合在 Instagram、Discord 等平台分享。',
  },
  {
    question: '“混沌”按钮是做什么的？',
    answer: '“随机混沌”按钮会立即随机化所有滑块的值，创造出意想不到且往往令人惊喜的故障组合。非常适合在不进行手动调整的情况下探索该工具的创意潜力。',
  },
];

const howTo: GlitchImageDistorterLocaleContent['howTo'] = [
  { name: '加载图片', text: '将图片拖放到画布上，使用 Ctrl+V 粘贴，通过文件按钮上传，或点击“使用示例图片”立即开始。' },
  { name: '调整滑块', text: '使用损坏、干扰、像素排序和噪声滑块来应用不同的故障效果。预览会实时更新。' },
  { name: '启用动画', text: '开启“故障动画”按钮以添加振动和闪烁。图片将随动态故障效果变得栩栩如生。' },
  { name: '导出您的创作', text: '下载 PNG 用于静态艺术，或在启用动画时导出为 GIF/WebP。在社交媒体上分享您的故障艺术！' },
  { name: '尝试混沌模式', text: '点击“随机混沌”按钮，自动发现令人惊喜的故障效果组合。' },
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

export const content: GlitchImageDistorterLocaleContent = {
  slug,
  title,
  description,
  faqTitle: '常见问题',
  ui: {
    title: '故障扭曲器',
    description: '秒间创作故障艺术。',
    dragDropText: '将图片拖到此处或点击上传',
    pasteHint: '提示：您也可以使用 Ctrl+V 粘贴图片',
    exampleImageBtn: '使用示例图片',
    corruptionLabel: '损坏 (RGB 分离)',
    interferenceLabel: '干扰 (扫描线)',
    tremorLabel: '震颤',
    pixelSortLabel: '像素排序',
    pixelSortDirectionLabel: '方向',
    noiseLabel: '静态噪声',
    animateBtn: '故障动画',
    chaosBtn: '随机混沌',
    downloadPngBtn: '下载 PNG',
    downloadGifBtn: '下载 GIF',
    undoBtn: '撤销',
    redoBtn: '重做',
    footerText: '在 30 秒内创作损坏的数字艺术',
    faqTitle: 'FAQ',
    bibliographyTitle: '参考文献'
  },
  seo: [
    { type: 'title', text: '什么是故障艺术？', level: 2 },
    { type: 'paragraph', html: '<strong>故障艺术 (Glitch Art)</strong> 是一种创意实践，它刻意利用数字错误、损坏的数据和视觉伪影来产生审美结果。与追求完美的传统艺术不同，故障艺术赞美技术故障带来的意外之美——从错误中诞生的碎片化色彩和混沌模式。' },
    { type: 'title', text: '起源与数字美学', level: 3 },
    { type: 'paragraph', html: '故障美学出现于 2000 年代初期，当时数字艺术家开始尝试使用损坏的图像文件和硬件故障进行创作。像 <strong>Rosa Menkman</strong> 这样的艺术家通过调查数字伪影的诗学，将故障艺术提升到了美术的高度。这种美学从 VHS 降级、传输错误和数字系统可见的“噪声”中汲取灵感。' },
    { type: 'title', text: '关键故障技术', level: 3 },
    { type: 'list', items: [
      '<strong>RGB 分离：</strong> 偏移红、绿、蓝颜色通道以产生色差。',
      '<strong>扫描线：</strong> 模拟旧式 CRT 监视器的水平线，增添复古氛围。',
      '<strong>像素排序：</strong> 按亮度等对像素进行排序并移动，产生“融化”效果。',
      '<strong>Data Moshing：</strong> 操纵视频编解码数据，以意想不到的方式混合帧。',
      '<strong>位移 (Bit Shifting)：</strong> 直接修改二进制数据，产生剧烈的颜色和形状扭曲。',
    ]},
    { type: 'tip', title: '故障背后的哲学', html: '故障艺术挑战了“完美”数字表征的观念。通过拥抱错误，我们质疑技术的可靠性，并探索技术如何调节我们对现实的感知。它是关于系统故障以及隐藏在混沌中的美丽的艺术。' },
    { type: 'title', text: '当代应用', level: 3 },
    { type: 'paragraph', html: '如今，故障美学无处不在：专辑封面、音乐录影带、时尚和平面设计。该工具使故障艺术创作变得大众化，让任何人都可以在没有深厚技术知识的情况下生成看起来非常专业的数字损坏作品。' },
    { type: 'stats', items: [
      { value: '2000s', label: '故障艺术的兴起', icon: 'mdi:history' },
      { value: '∞', label: '无限的故障组合', icon: 'mdi:shuffle-variant' },
      { value: '<30s', label: '创作时间', icon: 'mdi:flash' },
      { value: '3+', label: '导出格式', icon: 'mdi:download-multiple' },
    ], columns: 4 },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
