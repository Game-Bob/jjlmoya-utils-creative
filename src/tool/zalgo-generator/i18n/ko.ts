import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ZalgoGeneratorLocaleContent } from '../index';

const slug = 'zalgo-generator';
const title = '잘고 텍스트 생성기';
const description = '폭포수처럼 쏟아지는 유니코드 문자로 메시지를 오염시키세요. 글리치 효과의 강도와 방향을 조정할 수 있습니다.';

const faq: ZalgoGeneratorLocaleContent['faq'] = [
  { question: '잘고(Zalgo) 텍스트란 무엇인가요?', answer: '유니코드 결합 문자(발음 구별 부호)를 과도하게 사용한 텍스트의 일종입니다. 수직으로 쌓이면 이 문자들이 원래의 행을 "넘쳐나게" 되어 인터넷 문화에서 인기 있는 오염, 무질서, 또는 공포의 시각적 효과를 만들어냅니다.' },
  { question: '잘고 텍스트는 왜 이렇게 이상하게 보이나요?', answer: '기본 문자 위, 아래 또는 중간에 기호를 추가할 수 있는 유니코드 표준의 기능을 이용합니다. 추가할 수 있는 기호의 수에 엄격한 제한이 없기 때문에 텍스트가 위나 아래 행을 "침범"할 수 있습니다.' },
  { question: '이 텍스트를 소셜 미디어에서 사용할 수 있나요?', answer: '네, 인스타그램, 트위터, 디스코드 등 대부분의 현대 플랫폼은 유니코드를 지원합니다. 하지만 일부 네트워크나 장치에서는 인터페이스 가독성을 유지하기 위해 아주 높은 강도에서 과도한 문자를 필터링하거나 잘라낼 수 있습니다.' },
  { question: '텍스트에서 잘고 효과를 어떻게 제거할 수 있나요?', answer: '오염된 텍스트를 깨끗하게 하려면 자바스크립트 문자열 정규화를 사용하거나 일반 텍스트만 허용하는 기본 텍스트 편집기에 붙여넣으세요. 이 도구는 순수하게 창의적인 목적이며 원본 콘텐츠를 손상시키지 않습니다.' },
];

const howTo: ZalgoGeneratorLocaleContent['howTo'] = [
  { name: '기본 메시지 작성', text: '기본 텍스트 상자에 "오염"시키고 싶은 텍스트를 입력하세요.' },
  { name: '혼돈 강도 조정', text: '슬라이더를 움직여 쌓을 결합 문자의 수를 결정하세요. 강도가 높을수록 읽기 어려워집니다.' },
  { name: '범람 방향 선택', text: '오염이 위로, 아래로, 또는 모든 방향으로 동시에 커질지 선택하세요.' },
  { name: '결과 복사', text: '복사 버튼을 클릭하세요. 생성된 텍스트에는 글리치 효과를 유지하는 데 필요한 모든 투명 바이트가 포함됩니다.' },
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

export const content: ZalgoGeneratorLocaleContent = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  bibliographyTitle: '혼돈의 참고 문헌',
  ui: {
    title: '잘고 생성기',
    description: '모̵든̵ ̷것̵이̸ ̴오̶염̷되̴었̴습̶니̸다̵',
    inputPlaceholder: '여기에 일반 메시지를 입력하세요...',
    intensityLabel: '오염 수준',
    outputLabel: '오염된 결과',
    copyBtn: '혼돈 복사',
    copied: '복사됨!',
    faqTitle: 'FAQ',
    bibliographyTitle: '참고 문헌',
    configTitle: '구성',
    intensity: '강도',
    upLabel: '상단 오염',
    midLabel: '중간 노이즈',
    downLabel: '하단 오염',
    resetBtn: '값 초기화',
    warningText: '경고: 잘고 텍스트는 시각적으로 컨테이너를 넘어갈 수 있는 결합된 유니코드 문자를 사용합니다. 소셜 미디어에서 주의해서 사용하세요.',
    previewLabel: '실시간 미리보기',
    emptyLabel: '비어 있음',
    charLabel: '문자',
    noteText: '참고: 일부 브라우저에서는 결합 문자의 렌더링을 제한할 수 있습니다'
  },
  seo: [
    { type: 'title', text: '잘고 텍스트란 무엇이며 시각적 오염은 어떻게 작동하나요?', level: 2 },
    { type: 'paragraph', html: '잘고 텍스트는 유니코드 표준의 특정 기능인 <strong>결합 문자</strong>를 이용한 타이포그래픽 조작의 한 형태입니다. 일반 문자와 달리 이러한 발음 구별 부호는 수평 공간을 차지하지 않고 기본 문자 위에 수직으로 쌓여 인터넷 문화에서 인기 있는 "디지털 혼돈" 또는 "코즈믹 호러" 미학을 만들어냅니다.' },
    { type: 'title', text: '프로세스의 해부학', level: 3 },
    { type: 'paragraph', html: '당사의 생성기는 각 문자를 독립적으로 처리하며 세 가지 개별 벡터, 즉 <strong>상단</strong>(위에 쌓이는 부호), <strong>중간</strong>(문자를 관통하는 부호), <strong>하단</strong>(아래에 매달리는 부호)에 무작위 유니코드 코드 포인트를 주입합니다.' },
    { type: 'tip', title: '오염 알고리즘', html: '각 기본 문자에 대해 <code>개수 = 강도 × 30</code>이 계산됩니다. 각 벡터에 그만큼의 무작위 부호가 추가됩니다. 강도 1.5에서는 한 글자당 최대 45개의 결합 문자를 얻을 수 있습니다.' },
    { type: 'title', text: '에티켓 및 응용', level: 3 },
    { type: 'list', items: [
      '<strong>소셜 미디어:</strong> 인스타그램이나 틱톡에서 시선을 사로잡으세요. 관습을 깨고 싶은 프로필 소개에 적합합니다.',
      '<strong>공포 스토리텔링:</strong> 가상 내러티브, 크리피파스타 또는 침해된 시스템 시뮬레이션을 극적으로 연출하세요.',
      '<strong>접근성:</strong> 경고 — 잘고 텍스트는 스크린 리더로 읽을 수 없습니다. 시각적 장식으로만 사용하고 중요한 콘텐츠에는 절대 사용하지 마세요.',
      '<strong>SEO:</strong> 핵심 키워드(H1, 메타 타이틀)에는 절대 잘고를 사용하지 마세요. 인덱싱 봇이 이러한 문자를 정규화하지 못할 수 있습니다.'
    ]},
    { type: 'title', text: '기원: Something Awful에서 글리치 아트까지', level: 3 },
    { type: 'paragraph', html: '잘고는 생성기로 시작된 것이 아니라 고전 만화에 대한 개입으로 시작되었습니다. 2000년대 중반 사용자 Shmorky는 Nancy나 Archie 같은 캐릭터를 변형시키고 얼룩과 왜곡을 추가하기 시작했습니다. <strong>"그가 온다(He comes)"</strong>라는 문구는 현실을 집어삼키는 존재의 도착을 알리며 이 작품들의 운명을 결정지었습니다.' },
    { type: 'glossary', items: [
      { term: '결합 문자', definition: '기본 문자 위, 아래 또는 중간에 배치되도록 설계된 유니코드 코드 포인트입니다. 아랍어, 베트남어, 힌디어 같은 언어에서 합법적으로 사용됩니다.' },
      { term: '발음 구별 부호', definition: '발음이나 의미를 수정하기 위해 기본 문자에 추가되는 기호입니다. 잘고는 시각적 범람을 만들기 위해 이를 남용합니다.' },
      { term: '유니코드 블록', definition: '인접한 유니코드 코드 포인트의 범위입니다. 잘고 문자는 대부분 "결합용 발음 구별 부호" 블록(U+0300–U+036F)에서 가져옵니다.' },
      { term: '글리치 아트', definition: '표현 기법으로서 디지털 미디어의 오류, 아티팩트 및 오염을 의도적으로 통합하거나 시뮬레이션하는 미학입니다.' }
    ]},
  ],
  faq,
  bibliography: [
    { name: '유니코드 표준 - 결합 문자 (영어)', url: 'https://www.unicode.org/standard/principles.html#Combining_Characters' },
    { name: '잘고 텍스트 현상 (영어)', url: 'https://knowyourmeme.com/memes/zalgo' },
    { name: 'MDN - 문자열 정규화', url: 'https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/normalize' }
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
