import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { BeadPatternGeneratorLocaleContent } from '../index';

const slug = 'bead-pattern-generator-ko';
const title = '도안 생성기';
const description = '사진을 사용하여 미유키 또는 하마 비즈를 위한 픽셀 아트 및 도안을 만들어보세요. 색상 양자화 알고리즘, 터널 시야 모드, ZIP 내보내기 기능을 지원합니다.';

const faq: BeadPatternGeneratorLocaleContent['faq'] = [
  { question: '도안에서 색상 양자화란 무엇인가요?', answer: '사진의 수천 가지 색상을 실제 사용 가능한 비즈 색상(예: 미유키 또는 하마)에 맞춰 몇 가지로 줄이는 과정입니다. 스마트 알고리즘을 사용하여 최소한의 팔레트로도 시각적 유사성을 유지합니다.' },
  { question: '이 도안을 십자수에 사용할 수 있나요?', answer: '네, 생성기는 십자수와 완벽하게 호환되는 그리드 차트를 만듭니다. 원단(Aida 14, 18 등)에 맞는 그리드 크기를 선택하기만 하면 됩니다.' },
  { question: '미유키 비즈와 하마 비즈의 차이점은 무엇인가요?', answer: '미유키 델리카 비즈는 보석 제작을 위한 매우 작고 정밀한 유리 비즈입니다. 하마 비즈는 플라스틱 재질로 다리미로 녹여서 붙입니다. 저희 도구는 사용되는 재료에 따라 도안이 왜곡되지 않도록 가로세로 비율을 조정할 수 있습니다.' },
  { question: '디더링 알고리즘은 어떻게 작동하나요?', answer: '디더링은 서로 다른 색상의 픽셀을 일정한 간격의 패턴으로 섞어 더 많은 색상이 있는 것 같은 착시를 일으킵니다. 제한된 비즈 팔레트에서도 색상 그라데이션이 더 매끄럽게 보이도록 도와줍니다.' },
];

const howTo: BeadPatternGeneratorLocaleContent['howTo'] = [
  { name: '선명한 이미지 업로드', text: '도안을 따라 하기 쉽도록 대비가 좋고 세부 묘사가 너무 복잡하지 않은 사진을 선택하세요.' },
  { name: '그리드 크기 조절', text: '최종 작품의 가로세로 비즈 개수를 정의하세요. 비즈가 많을수록 디테일은 살지만 난이도는 높아집니다.' },
  { name: '색상 팔레트 최적화', text: '보유하고 있는 공예 키트의 비즈와 일치할 때까지 색상 수를 줄이세요.' },
  { name: '가이드 도안 내보내기', text: '색상 코드가 포함된 최종 도안을 생성하여 보드에 조립하거나 실을 꿸 때 참고용으로 사용하세요.' },
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
  inLanguage: 'ko',
};

export const content: BeadPatternGeneratorLocaleContent = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  bibliographyTitle: '전문가 참고 자료',
  ui: {
    title: '도안 연구소',
    subtitle: '당신의 손을 위한 색상 공학',
    description: '사진에서 비즈 도안으로.',
    gridSizeLabel: '크기 (너비)',
    colorCountLabel: '색상 수',
    optionsLabel: '옵션',
    rulersLabel: '자',
    symbolsTooltip: '깜짝 도안',
    symbolsLabel: '기호',
    downloadBtn: '다운로드',
    uploadTitle: '비전 업로드',
    uploadSubtitle: '디지털 마법이 시작됩니다',
    paletteTitle: '색채 DNA',
    reuploadBtn: '이미지 변경',
    tunnelVisionTitle: '터널 시야',
    tunnelVisionSubtitle: '한 줄씩 정확하게 조립할 수 있게 도와주는 도우미.',
    uploadLabel: '사진 업로드',
    pixelateBtn: '도안 생성',
    faqTitle: 'FAQ',
    bibliographyTitle: '참고 문헌'
  },
  seo: [
    { type: 'title', text: '디지털 연금술: 픽셀을 만질 수 있는 예술로 변환하기', level: 2 },
    { type: 'paragraph', html: '<strong>궁극의 도안 스튜디오</strong>에 오신 것을 환영합니다. 픽셀 아트 설계자, 미유키 마스터, 십자수 선구자들을 위해 설계된 <em>색채 지능 엔진</em>입니다. 디지털과 수공예 사이의 가교 역할을 합니다.' },
    { type: 'card', icon: 'mdi:grid', title: '지능형 그리드', html: '본 사이트의 <strong>공간 서브샘플링</strong> 알고리즘은 이미지를 단순히 "축소"하는 것이 아닙니다. 시각적 구조를 분석하여 복잡한 픽셀 그룹을 개별 셀에 매핑함으로써, 전문 일러스트레이터처럼 실루엣과 가장자리의 무결성을 유지합니다.' },
    { type: 'card', icon: 'mdi:palette', title: 'K Means 색상 양자화', html: '이미지의 "중심" 톤을 수학적으로 찾아내는 <strong>K-Means 클러스터링</strong> 알고리즘의 변형을 구현합니다. 12, 24 또는 32색의 미니멀한 팔레트로도 놀라운 시각적 정확도를 제공합니다.' },
    { type: 'title', text: '3단계 마스터하기', level: 3 },
    { type: 'card', icon: 'mdi:image-search', title: '완벽한 선택', html: '<strong>높은 대비</strong>, 드라마틱한 조명 및 상징적인 형태를 찾으세요. 깨끗한 배경의 인물 사진, 로고, 벡터 아트는 매우 아름답게 변환됩니다.' },
    { type: 'card', icon: 'mdi:ruler', title: '차원 보정', html: '<strong>미유키 델리카:</strong> 50개 비즈 ≈ 8cm · <strong>하마 미디:</strong> 50개 비즈 ≈ 25cm · <strong>십자수:</strong> 1셀 = 1땀.' },
    { type: 'card', icon: 'mdi:eye-check', title: '선(Zen)의 실행 (터널 시야 모드)', html: '본 사이트의 <strong>터널 시야</strong> 시스템은 시각적 소음을 줄이고 현재 활성화된 행만 정확하게 강조하는 개인 비서 역할을 합니다. 절대적인 집중을 가능하게 합니다.' },
    { type: 'title', text: '무한한 캔버스', level: 3 },
    { type: 'list', items: [
      '<strong>직물 보석:</strong> 직조기 및 기하학적 팔찌를 위한 복잡한 도안.',
      '<strong>십자수:</strong> 픽셀 단위로 수놓을 준비가 된 현대적인 도안.',
      '<strong>모자이크:</strong> 단순화된 세라믹 타일을 사용한 대형 벽화.',
      '<strong>레트로 게임:</strong> 정통 8비트 에셋 및 스프라이트를 단 몇 초 만에 제작.',
    ]},
    { type: 'stats', items: [
      { value: '10–100', label: '비즈 너비 범위', icon: 'mdi:arrow-expand-horizontal' },
      { value: '2–32', label: '색상 팔레트 슬롯', icon: 'mdi:palette-swatch' },
      { value: 'K-Means', label: '양자화 알고리즘', icon: 'mdi:function-variant' },
      { value: 'ZIP', label: '내보내기 형식 (도안 + 가이드)', icon: 'mdi:zip-box' },
    ], columns: 4 },
    { type: 'paragraph', html: '덧없는 화면의 시대에 물리적인 무언가를 만드는 것은 혁명적인 행위입니다. 이 도구는 예술을 자동화하려는 것이 아니라 <strong>장인의 능력을 강화</strong>하기 위한 것입니다. 당신의 손이 지속적인 유산을 쌓을 수 있도록 계산적인 정밀함을 제공합니다.' },
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
