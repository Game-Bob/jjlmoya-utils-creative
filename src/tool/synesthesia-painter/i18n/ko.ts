import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SynesthesiaPainterLocaleContent } from '../index';

const slug = 'synesthesia-painter';
const title = '공감각 페인터';
const description = '음소-색 공감각에 따라 단어의 색상을 시각화합니다. 각 글자는 고유한 색상을 가지며, 텍스트를 색채 예술로 변환합니다.';

const faq: SynesthesiaPainterLocaleContent['faq'] = [
  {
    question: '모든 공감각자가 각 글자에 대해 동일한 색상을 보나요?',
    answer: '아니요. 공감각적 색상은 개인마다 고유합니다. 통계적인 경향(많은 사람에게 A는 빨간색인 경향)은 존재하지만, 완전히 동일한 팔레트를 가진 공감각자는 없습니다. 이 도구는 과학적인 "정답"이 아니라 인구 조사에서 가장 빈번하게 보고된 색상을 사용합니다.',
  },
  {
    question: '이 도구를 계속 사용하면 공감각이 생길 수 있나요?',
    answer: '엄격한 신경학적 의미에서는 불가능합니다. 진정한 공감각은 신경계의 특성이지 학습된 기술이 아닙니다. 하지만 색상-글자 연관성을 반복적으로 사용하면 강력한 연상 기억이 형성될 수 있습니다. 일부 연구에 따르면 이러한 연관성을 연습하면 텍스트 기억력이 향상될 수 있다고 합니다.',
  },
  {
    question: '"아우라" 모드는 무엇을 위한 것인가요?',
    answer: '아우라 모드는 일부 공감각자들이 색상이 글자에 통합된 것이 아니라 글자 주위에 "떠 있거나" "빛나는" 것으로 묘사하는 감각을 재현한 것입니다. 특히 어두운 배경에서 더욱 분위기 있고 몰입감 있는 시각적 경험을 제공합니다.',
  },
  {
    question: '"도트" 모드에 과학적 근거가 있나요?',
    answer: '이것은 예술적 추상화입니다. 글자의 인식 가능한 형태를 제거함으로써 텍스트를 "색채적 본질"로 환원합니다. 그 결과는 점묘화나 데이터 시각화와 유사하며, 의미의 방해 없이 텍스트의 "색채 시그니처"를 느낄 수 있게 해줍니다.',
  },
  {
    question: '왜 I나 O 같은 일부 글자는 흰색이나 검은색인가요?',
    answer: '공감각 연구에서 모음 I와 O, 그리고 글자 W는 종종 흰색, 투명 또는 검은색으로 묘사됩니다. 이 도구는 시인성을 항상 확보하기 위해 배경색에 맞춰 이러한 색상을 조정합니다(어두운 배경에서는 흰색, 밝은 배경에서는 검은색).',
  },
];

const howTo: SynesthesiaPainterLocaleContent['howTo'] = [
  { name: '텍스트 쓰기', text: '입력 영역을 클릭하고 타이핑을 시작하세요. 각 글자는 통계적 공감각 연관성에 따른 색상으로 나타납니다.' },
  { name: '시각화 모드 변경', text: '우측 상단의 버튼을 사용하여 글자(색상 텍스트), 도트(색상 원), 아우라(색채 광륜이 있는 빛나는 글자) 모드 사이를 전환하세요.' },
  { name: '다양한 텍스트 탐색', text: '이름, 외국어 단어 또는 문장을 써서 고유한 색채 팔레트를 발견하세요. 긴 단어는 매혹적인 시각적 그라데이션을 만들어냅니다.' },
  { name: '지우고 다시 시작', text: '하단 바의 "지우기" 버튼을 사용하여 캔버스를 초기화하고 새로운 텍스트를 탐색하세요.' },
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

export const content: SynesthesiaPainterLocaleContent = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  bibliographyTitle: '정신의 참고 문헌',
  ui: {
    title: '공감각 페인터',
    description: '당신의 단어를 색채 예술로 변환하세요.',
    modeLetters: '글자',
    modeDots: '도트',
    modeAura: '아우라',
    placeholder: '여기에 입력...',
    footerText: '타이핑하여 당신만의 컬러 팔레트를 발견하세요',
    clearBtn: '지우기',
    faqTitle: 'FAQ',
    bibliographyTitle: '참고 문헌'
  },
  seo: [
    { type: 'title', text: '글자 색 공감각이란 무엇인가요?', level: 2 },
    { type: 'paragraph', html: '<strong>공감각</strong>은 한 감각의 자극이 자동으로 다른 감각의 반응을 유발하는 신경학적 상태입니다. 가장 많이 연구되고 널리 퍼진 변형은 <strong>글자-색 공감각</strong>입니다. 이를 가진 사람들은 각 글자나 숫자를 고유하고 불변하며 선명한 색상으로 인식합니다. 이것은 상상이나 비유가 아닙니다. 공감각자에게 글자 "A"가 빨간색인 것은 불이 뜨거운 것과 마찬가지로 당연한 사실입니다. 이 도구는 인구 조사에서 각 음소에 대해 가장 빈번하게 보고된 색상을 기반으로 한 <em>통계적 팔레트</em>를 적용합니다.' },
    { type: 'title', text: '신경과학: 교차 활성화 이론', level: 3 },
    { type: 'paragraph', html: '글자-색 공감각에 대해 가장 널리 받아들여지는 신경학적 모델은 <strong>교차 활성화</strong>입니다. 글자 형태를 인식하는 측두엽 피질 영역(방추상회)은 색상을 처리하는 영역(V4 영역)과 해부학적으로 인접해 있습니다. 공감각이 있는 사람들은 이러한 영역 사이에 구조적 또는 기능적 연결성이 더 높아 글자를 인식할 때 색상 뉴런도 함께 활성화됩니다. 기능적 자기공명영상(fMRI) 연구에 따르면 공감각자들은 단색 텍스트를 읽을 때도 V4 영역에서 실제 활성화가 나타나는 것으로 확인되었습니다.' },
    { type: 'tip', title: '세 가지 시각화 모드', html: '<strong>글자:</strong> 음소별로 색상이 입혀진 원본 텍스트입니다. 전체 텍스트의 "색채적 멜로디"를 보기에 이상적입니다. <strong>도트:</strong> 각 캐릭터가 자신의 색상을 가진 원이 됩니다. 텍스트는 사라지고 색상의 음악만 남습니다. <strong>아우라:</strong> 글자가 마치 고유한 에너지를 발산하는 것처럼 자신의 색상으로 된 후광을 내뿜습니다.' },
    { type: 'title', text: '통계와 색상의 보편성', level: 3 },
    { type: 'paragraph', html: '공감각적 색상은 개인마다 고유하지만, Simner 등(2006)과 Eagleman 등(2007)의 연구는 유의미한 통계적 패턴을 발견했습니다. 모음 <strong>A</strong>는 많은 사람에게 빨간색인 경향이 있고, <strong>O</strong>는 흰색 또는 검은색, <strong>S</strong>는 청록색 또는 녹색 계열, <strong>E</strong>는 녹색 또는 흰색으로 나타납니다. 흥미롭게도 색상-글자 연관성은 서로 다른 문화보다 동일한 언어 문화 내에서 더 일관성이 높으며, 이는 초기 알파벳 학습의 역할을 시사합니다.' },
    { type: 'list', items: [
      '<strong>유병률:</strong> 인구의 약 4%가 일정 수준의 글자-색 공감각을 가지고 있으며, 하위 임상적 형태를 포함하면 최근 연구에서는 이 수치를 6-8%까지 높여 잡기도 합니다.',
      '<strong>성별 편향:</strong> 공감각은 남성보다 여성에게서 3~6배 더 흔하게 나타나지만, 이러한 차이의 원인은 아직 완전히 설명되지 않았습니다.',
      '<strong>유전성:</strong> 명확한 유전적 요인이 있습니다. 가족 내에서 나타나는 경향이 있으나 항상 동일한 유형의 공감각이 나타나는 것은 아닙니다.',
      '<strong>일관성:</strong> 학습된 연관성과 달리 공감각적 색상은 시간이 지나도 매우 안정적입니다. 10년 추적 연구에 따르면 글자-색 연관성에서 90% 이상의 일관성을 보입니다.',
      '<strong>유명한 공감각자:</strong> 블라디미르 나보코프, 바실리 칸딘스키, 니콜라 테슬라, 빌리 조엘 등이 자신의 작품에 영향을 준 공감각적 경험을 공개적으로 묘사한 바 있습니다.'
    ]},
    { type: 'stats', items: [
      { value: '4–8%', label: '공감각 보유 인구', icon: 'mdi:brain' },
      { value: '90%+', label: '10년 후의 색상 일관성', icon: 'mdi:check-circle' },
      { value: '3–6배', label: '여성에게 더 흔히 발견됨', icon: 'mdi:gender-female' },
      { value: '26+10', label: '컬러 글자 및 숫자', icon: 'mdi:alphabetical' }
    ], columns: 4 },
    { type: 'title', text: '예술과 공감각: 감각이 융합될 때', level: 3 },
    { type: 'paragraph', html: '추상 표현주의의 창시자인 <strong>바실리 칸딘스키</strong>는 글자-색과 음악-색 공감각을 모두 경험했습니다. 그는 악기 소리를 색으로 들었으며(노란색은 트럼펫, 짙은 파란색은 첼로), 이러한 지각을 추상 예술 이론을 정립하는 데 사용했습니다. 음악 분야에서는 <strong>알렉산드르 스크랴빈</strong>이 각 음표에 해당하는 색상을 투사하도록 설계된 "색채 건반(tastiera per luce)"을 위한 파트가 포함된 『프로메테우스: 불의 시』를 작곡했습니다.' },
    { type: 'tip', title: '이 도구의 컬러 팔레트', html: '색상 할당은 과학 문헌의 가장 일반적인 통계 데이터에서 영감을 얻었습니다. <strong>A → 빨강</strong>, <strong>E → 초록</strong>, <strong>I → 배경에 따른 흰색/검은색</strong>, <strong>O → 검정/흰색</strong>, <strong>U → 황색</strong>. 자음은 비교적 덜 균일한 패턴을 따르지만, 가독성을 보장하기 위해 배경과의 대비를 항상 우선시합니다.' }
  ],
  faq,
  bibliography: [
    { name: 'Simner et al. (2006) – 공감각: 비전형적인 교차 감각 경험의 유병률', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1626536/' },
    { name: 'Eagleman et al. (2007) – 공감각 연구를 위한 표준화된 테스트 배터리', url: 'https://www.sciencedirect.com/science/article/pii/S0010945207000087' },
    { name: '칸딘스키, 바실리 – 예술에 있어서 정신적인 것에 대하여 (1911)', url: 'https://ko.wikipedia.org/wiki/예술에_있어서_정신적인_것에_대하여' }
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
