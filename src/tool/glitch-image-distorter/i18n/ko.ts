import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { GlitchImageDistorterLocaleContent } from '../index';

const slug = 'glitch-image-distorter';
const title = '글리치 아트 생성기';
const description = 'RGB 분리, 스캔라인, 픽셀 정렬 및 애니메이션 왜곡을 사용하여 이미지를 매혹적인 글리치 아트로 변환하세요. 포토샵 없이도 가능합니다.';

const faq: GlitchImageDistorterLocaleContent['faq'] = [
  {
    question: '글리치 아트란 무엇인가요?',
    answer: '글리치 아트는 디지털 이미지나 데이터를 의도적으로 조작하여 시각적 오류를 만들어내는 디지털 아트의 한 형태입니다. 이러한 "글리치(오류)"는 파편화된 색상, 왜곡된 형태, 예측 불가능한 패턴을 만들어내며 디지털 파괴와 혼돈의 미학을 형성합니다.',
  },
  {
    question: '내 이미지를 사용할 수 있나요?',
    answer: '네! PNG, JPG, WebP 형식의 이미지를 업로드하거나 캔버스에 드래그 앤 드롭할 수 있으며, Ctrl+V를 눌러 클립보드에서 직접 붙여넣을 수도 있습니다. 샘플 이미지를 사용하여 도구를 테스트해 볼 수도 있습니다.',
  },
  {
    question: '각 왜곡 효과는 어떤 역할을 하나요?',
    answer: 'Corruption은 RGB 채널을 분리하여 색수차 효과를 줍니다. Interference는 오래된 모니터와 같은 스캔라인과 미세한 떨림을 추가합니다. Pixel Sorting은 밝은 픽셀을 선택한 방향으로 "흐르게" 만듭니다. Static Noise는 고전적인 TV 노이즈를 겹칩니다.',
  },
  {
    question: '글리치 효과를 움직이게 할 수 있나요?',
    answer: '물론입니다! "글리치 애니메이션" 모드를 켜면 매개변수에 미세한 무작위 움직임이 적용되어 끊임없이 변화하는 생동감 있는 효과가 생성됩니다. 이를 애니메이션 GIF나 WebP로 내보낼 수 있습니다.',
  },
  {
    question: '어떤 형식으로 저장할 수 있나요?',
    answer: '정적 이미지는 고화질 PNG로 다운로드할 수 있으며, 애니메이션 모드가 켜진 경우 애니메이션 GIF 또는 WebP로 내보낼 수 있습니다. 인스타그램, 디스코드 등 소셜 미디어 공유에 최적화되어 있습니다.',
  },
  {
    question: '카오스 버튼은 무엇을 하나요?',
    answer: '"카오스 랜덤" 버튼을 누르면 모든 슬라이더 값이 즉시 무작위로 설정되어 예상치 못한 놀라운 글리치 조합이 생성됩니다. 수동 조절 없이 도구의 창의적 가능성을 탐색하기에 완벽합니다.',
  },
];

const howTo: GlitchImageDistorterLocaleContent['howTo'] = [
  { name: '이미지 불러오기', text: '이미지를 캔버스에 드래그 앤 드롭하거나 Ctrl+V로 붙여넣으세요. 파일 버튼으로 업로드하거나 "샘플 이미지 사용"을 클릭하여 시작할 수도 있습니다.' },
  { name: '슬라이더 조정하기', text: 'Corruption, Interference, Pixel Sort, Noise 슬라이더를 사용하여 다양한 글리치 효과를 적용하세요. 미리보기가 실시간으로 업데이트됩니다.' },
  { name: '애니메이션 활성화', text: '"글리치 애니메이션" 버튼을 켜서 진동과 깜빡임을 추가하세요. 이미지가 역동적인 글리치 효과와 함께 살아 움직입니다.' },
  { name: '작품 내보내기', text: '정적 작품은 PNG로, 애니메이션은 GIF/WebP로 다운로드하세요. 완성된 글리치 아트를 SNS에 공유해 보세요!' },
  { name: '카오스로 실험하기', text: '"카오스 랜덤" 버튼을 클릭하여 놀라운 효과 조합을 자동으로 발견해 보세요.' },
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

export const content: GlitchImageDistorterLocaleContent = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  ui: {
    title: '글리치 디스토터',
    description: '몇 초 만에 글리치 아트를 만드세요.',
    dragDropText: '이미지를 여기로 드래그하거나 클릭하여 업로드',
    pasteHint: '팁: Ctrl+V를 눌러 이미지를 붙여넣을 수도 있습니다',
    exampleImageBtn: '샘플 이미지 사용',
    corruptionLabel: '손상 (RGB 분리)',
    interferenceLabel: '간섭 (스캔라인)',
    tremorLabel: '떨림',
    pixelSortLabel: '픽셀 정렬',
    pixelSortDirectionLabel: '방향',
    noiseLabel: '정적 노이즈',
    animateBtn: '글리치 애니메이션',
    chaosBtn: '카오스 랜덤',
    downloadPngBtn: 'PNG 다운로드',
    downloadGifBtn: 'GIF 다운로드',
    undoBtn: '실행 취소',
    redoBtn: '다시 실행',
    footerText: '30초 만에 손상된 디지털 아트를 만드세요',
    faqTitle: 'FAQ',
    bibliographyTitle: '참고 문헌'
  },
  seo: [
    { type: 'title', text: '글리치 아트란 무엇인가요?', level: 2 },
    { type: 'paragraph', html: '<strong>글리치 아트</strong>는 디지털 오류, 손상된 데이터, 시각적 아티팩트를 의도적으로 활용하여 미적 결과를 만들어내는 창작 활동입니다. 완벽함을 추구하는 전통적인 예술과 달리, 글리치는 기술적 고장에서 비롯된 예상치 못한 아름다움, 즉 오류에서 태어난 파편화된 색상과 혼돈의 패턴을 긍정합니다.' },
    { type: 'title', text: '기원과 디지털 미학', level: 3 },
    { type: 'paragraph', html: '글리치 미학은 2000년대 초반 디지털 아티스트들이 손상된 이미지 파일과 하드웨어 오작동을 실험하면서 등장했습니다. <strong>로자 멘크만(Rosa Menkman)</strong>과 같은 아티스트들은 디지털 아티팩트의 시학을 연구함으로써 글리치 아트를 순수 예술의 반열에 올렸습니다. 이 미학은 VHS의 화질 저하, 전송 오류, 디지털 시스템의 가시화된 "노이즈"에서 영감을 얻습니다.' },
    { type: 'title', text: '주요 글리치 기법', level: 3 },
    { type: 'list', items: [
      '<strong>RGB 분리:</strong> 빨강, 초록, 파랑 색상 채널을 어긋나게 하여 색수차를 만드는 기법.',
      '<strong>스캔라인:</strong> 오래된 CRT 모니터의 수평선을 시뮬레이션하여 레트로한 느낌을 더하는 기법.',
      '<strong>픽셀 정렬(Pixel Sorting):</strong> 픽셀을 밝기 등에 따라 정렬하고 이동시켜 "녹아내리는" 듯한 효과를 만드는 기법.',
      '<strong>데이터 모싱(Data Moshing):</strong> 비디오 코덱 데이터를 조작하여 프레임을 예기치 않은 방식으로 섞는 기법.',
      '<strong>비트 시프팅(Bit Shifting):</strong> 이진 데이터를 직접 수정하여 극적인 색상 및 형태 왜곡을 일으키는 기법.',
    ]},
    { type: 'tip', title: '글리치 뒤에 숨겨진 철학', html: '글리치 아트는 "완벽한" 디지털 재현이라는 관념에 도전합니다. 오류를 수용함으로써 우리는 기술의 신뢰성에 의문을 던지고 기술이 우리의 현실 인식을 어떻게 매개하는지 탐구합니다. 이는 시스템의 실패, 그리고 혼돈 속에 숨겨진 아름다움에 대한 예술입니다.' },
    { type: 'title', text: '현대적 응용', level: 3 },
    { type: 'paragraph', html: '오늘날 글리치 미학은 앨범 커버, 뮤직 비디오, 패션, 그래픽 디자인 등 어디에서나 볼 수 있습니다. 이 도구는 글리치 아트 제작을 대중화하여 깊은 기술적 지식 없이도 누구나 전문가 수준의 디지털 파괴 작품을 만들 수 있게 해줍니다.' },
    { type: 'stats', items: [
      { value: '2000년대', label: '글리치 아트의 등장', icon: 'mdi:history' },
      { value: '∞', label: '무한한 글리치 조합', icon: 'mdi:shuffle-variant' },
      { value: '<30초', label: '제작 시간', icon: 'mdi:flash' },
      { value: '3+', label: '내보내기 형식', icon: 'mdi:download-multiple' },
    ], columns: 4 },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
