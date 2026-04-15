import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { BeadPatternGeneratorLocaleContent } from '../index';

const slug = 'bead-pattern-generator-zh';
const title = '串珠图案生成器';
const description = '根据您的照片生成适用于 Miyuki（米珠）或 Hama（拼拼豆豆）的像素艺术和串珠方案。包含颜色量化算法、隧道视野模式及 ZIP 导出功能。';

const faq: BeadPatternGeneratorLocaleContent['faq'] = [
  { question: '图案生成中的“颜色量化”是什么？', answer: '这是将照片中成千上万种颜色减少到仅有的几种的过程，这些颜色对应于实际可用的珠子颜色（如 Miyuki 或 Hama）。我们使用智能算法，在保持视觉相似度的前提下尽可能减少调色板的颜色数量。' },
  { question: '我可以将这个图案用于十字绣吗？', answer: '可以。生成器产生的网格图室与十字绣完美兼容。您只需选择与您的底布（如 Aida 14、18 等）匹配的网格大小。' },
  { question: 'Miyuki 米珠和 Hama 豆豆之间有什么区别？', answer: 'Miyuki Delica 米珠是用于珠宝制作的极小且精密的高品质玻璃珠。Hama 豆豆是塑料材质，通过熨斗加热融合。我们的工具允许您调整纵横比，确保图案不会因所选材质而变形。' },
  { question: '抖动（Dithering）算法是如何工作的？', answer: '抖动算法通过在稀疏图案中混合不同颜色的像素来创造更多颜色的错觉。即使在珠子调色板有限的情况下，它也能帮助颜色渐变看起来更平滑。' },
];

const howTo: BeadPatternGeneratorLocaleContent['howTo'] = [
  { name: '上传清晰的图片', text: '选择对比度高、细节较少的照片，这样生成的图案会更容易制作。' },
  { name: '调整网格大小', text: '定义作品最终的宽度和高度所需的珠子数量。珠子越多，细节越丰富，但也越具挑战。' },
  { name: '优化调色板', text: '减少颜色数量，直到它们与您手工工具包中现有的珠子颜色匹配。' },
  { name: '导出引导方案', text: '生成带有颜色代码的最终图案，在您将珠子组装到板上或穿线时作为参考指南。' },
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

export const content: BeadPatternGeneratorLocaleContent = {
  slug,
  title,
  description,
  faqTitle: '常见问题解答',
  bibliographyTitle: '工匠参考文献',
  ui: {
    title: '图案实验室',
    subtitle: '指尖上的色彩工程',
    description: '从照片到串珠方案。',
    gridSizeLabel: '尺寸（宽度）',
    colorCountLabel: '颜色数量',
    optionsLabel: '选项',
    rulersLabel: '标尺',
    symbolsTooltip: '惊喜图案',
    symbolsLabel: '符号',
    downloadBtn: '下载',
    uploadTitle: '上传您的构思',
    uploadSubtitle: '开启数字魔法',
    paletteTitle: '色彩 DNA',
    reuploadBtn: '更换图片',
    tunnelVisionTitle: '隧道视野',
    tunnelVisionSubtitle: '逐行辅助，助您精确组装。',
    uploadLabel: '上传照片',
    pixelateBtn: '生成图案',
    faqTitle: '常见问题',
    bibliographyTitle: '参考资料'
  },
  seo: [
    { type: 'title', text: '数字炼金术：将像素转化为触手可及的艺术', level: 2 },
    { type: 'paragraph', html: '欢迎来到<strong>终极图案工作室</strong>。这是一个专为像素艺术架构师、Miyuki 大师和十字绣远见者设计的<em>色彩智能引擎</em>。它是连接数字世界与手工艺术的桥梁。' },
    { type: 'card', icon: 'mdi:grid', title: '智能网格', html: '我们的<strong>空间下采样</strong>算法不仅是单纯地“缩小”图片。它会分析视觉结构，将复杂的像素群映射到单个单元格中，像专家插画师一样保留轮廓和边缘的完整性。' },
    { type: 'card', icon: 'mdi:palette', title: 'K Means 颜色量化', html: '我们采用了一种 <strong>K-Means 聚类</strong>算法的变体，通过数学计算找出图像的“主导”色调。即便在只有 12、24 或 32 色的极简调色板下，也能实现惊人的视觉忠实度。' },
    { type: 'title', text: '大师三部曲', level: 3 },
    { type: 'card', icon: 'mdi:image-search', title: '完美选择', html: '寻找<strong>高对比度</strong>、极具戏剧性的光影以及标志性形状。背景简单的肖像、Logo 和矢量艺术都能获得极佳的转换效果。' },
    { type: 'card', icon: 'mdi:ruler', title: '尺寸校准', html: '<strong>Miyuki Delica:</strong> 50 颗珠子 ≈ 8 厘米 · <strong>Hama Midi:</strong> 50 颗珠子 ≈ 25 厘米 · <strong>十字绣:</strong> 1 个单元格 = 1 针。' },
    { type: 'card', icon: 'mdi:eye-check', title: '禅式执行（隧道视野模式）', html: '我们的<strong>隧道视野</strong>系统充当您的个人助手，消除视觉干扰，精准高亮显示当前操作行。为您提供绝对的专注。' },
    { type: 'title', text: '无限画布', level: 3 },
    { type: 'list', items: [
      '<strong>纺织珠宝:</strong> 用于织布机和几何手链的精密图案。',
      '<strong>十字绣:</strong> 现代风格方案，可逐个像素进行绣制。',
      '<strong>马赛克:</strong> 使用简化的陶瓷细工制作的大型壁画。',
      '<strong>复古游戏:</strong> 数秒内即可生成地道的 8 位资产和精灵图。',
    ]},
    { type: 'stats', items: [
      { value: '10–100', label: '珠子宽度范围', icon: 'mdi:arrow-expand-horizontal' },
      { value: '2–32', label: '调色板槽位', icon: 'mdi:palette-swatch' },
      { value: 'K-Means', label: '量化算法', icon: 'mdi:function-variant' },
      { value: 'ZIP', label: '导出格式（图案 + 引导）', icon: 'mdi:zip-box' },
    ], columns: 4 },
    { type: 'paragraph', html: '在转瞬即逝的屏幕时代，亲手创造实体作品是一种革命性的行为。本工具不致力于取代艺术，而是旨在<strong>赋能工匠</strong>。我们为您提供计算精度，助您的双手打造持久的传承。' },
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
