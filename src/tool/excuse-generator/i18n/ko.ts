import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { ExcuseGeneratorLocaleContent } from '../index';

const slug = 'excuse-generator';
const title = '핑계 생성기';
const description = '의무감에서 멋지게 벗어나기 위한 시맨틱 도박기입니다. 초현실적이고 반박할 수 없는 핑계를 즉시 생성하세요.';

const faq: ExcuseGeneratorLocaleContent['faq'] = [
  {
    question: '이 생성기가 제 결혼 생활을 구할 수 있을까요?',
    answer: '저희가 전문 상담가는 아니지만, 그럴듯한 기술적 비상사태를 핑계로 처가/시댁 식구들과의 식사 자리를 피하는 것은 긴장을 완화하는 데 큰 도움이 될 수 있습니다. 책임감 있게 사용하세요.'
  },
  {
    question: '왜 이렇게 초현실적인 문구들인가요?',
    answer: '이 전략은 인지 부조화에 기초합니다. 지루한 핑계는 검증 가능하지만, 황당한 핑계는 상대방을 당황하게 만들어 화를 낼 타이밍을 놓치게 만듭니다.'
  }
];

const howTo: ExcuseGeneratorLocaleContent['howTo'] = [
  { name: '생성', text: '생성 버튼을 클릭하여 새로운 핑계를 만드세요.' },
  { name: '복사', text: '복사 버튼을 클릭하여 생성된 핑계를 클립보드에 저장하세요.' }
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

export const content: ExcuseGeneratorLocaleContent = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  ui: {
    title: '초현실적 핑계 생성기',
    description: '차세대 알리바이 계산기.',
    subjectLabel: '주어',
    actionLabel: '행동',
    victimLabel: '대상',
    generateBtn: '핑계 생성하기',
    copyBtn: '이 광기를 복사하기',
    copied: '복사 완료!',
    starts: JSON.stringify([
      "우리 집 고양이가", "할머니께서", "대통령이", "외계인이", "5층 옆집 이웃이",
      "와이파이가", "내 별자리가", "시간 여행자가", "세탁기가", "우리 집 냉장고가",
      "크리스마스의 유령이", "내 그림자가", "닌자가", "채식 경찰이", "시리가",
      "내 식충식물이", "아마존 배달원이", "나의 사악한 클론이", "마법사가", "고질라가"
    ]),
    middles: JSON.stringify([
      "에게 선전포고를 해서", "를 먹어 치워서", "를 납치해서", "에 불을 질러서",
      "에서 파티를 열고 있어서", "에 구토를 해서", "에서 나가기를 거부해서",
      "를 해킹해서", "를 훔쳐 가서", "와 사랑에 빠져서", "에 대해 명상 중이라서",
      "에게 주문을 걸어서", "에 반대하는 시위를 해서", "에 사이비 종교를 세워서",
      "에서 삼바 춤을 추고 있어서", "에서 악마를 소환해서", "의 접속을 차단해서",
      "가 황금으로 변해버려서", "를 팔려고 시도 중이라서", "에 대한 책을 쓰고 있어서"
    ]),
    ends: JSON.stringify([
      "집 열쇠를 찾을 수 없습니다.", "삶의 의욕을 잃었습니다.", "차고 문이 고장 났습니다.",
      "가장 아끼는 바지가 찢어졌습니다.", "거실 공유기가 폭발했습니다.", "신발 한 짝이 사라졌습니다.",
      "물리학의 법칙을 거스르고 있습니다.", "존엄성을 잃었습니다.", "건물 엘리베이터가 멈췄습니다.",
      "넷플릭스 계정이 도용당했습니다.", "칫솔이 가출했습니다.", "집 문서가 타버렸습니다.",
      "딱지 컬렉션이 엉망이 되었습니다.", "자동차 핸드브레이크가 풀렸습니다.", "사회적 욕구가 소진되었습니다.",
      "커피 원두가 떨어졌습니다.", "변기 뚜껑이 열리지 않습니다.", "TV 리모컨이 사라졌습니다.",
      "행운의 양말을 잃어버렸습니다.", "서구 문명이 붕괴 직전입니다."
    ]),
    faqTitle: 'FAQ',
    bibliographyTitle: '참고 문헌'
  },
  seo: [
    { type: 'title', text: '완벽한 핑계를 위한 과학적 예술', level: 2 },
    { type: 'paragraph', html: '우리는 초연결 시대에 살고 있습니다. 휴대폰은 진동하고, 시계는 알림을 보내며, 사교 일정은 마치 지기 직전의 테트리스 게임처럼 보입니다. 모든 것에 "예"라고 답해야 한다는 압박감은 사회적 소진이라는 유행병을 만들어냈습니다.' },
    { type: 'title', text: 'JOMO(Joy of Missing Out)의 르네상스', level: 3 },
    { type: 'paragraph', html: '지난 10년 동안 FOMO(소외되는 것에 대한 두려움)가 지배적이었다면, 이제 디지털 웰빙 전문가들은 <strong>JOMO: 놓치는 것에 대한 즐거움</strong>을 옹호합니다. 이것은 고립이 아니라 의도적인 선택에 관한 것입니다.' },
    { type: 'tip', title: '반박할 수 없는 알리바이를 위한 공식', html: '<strong>주어 분리하기:</strong> 당신은 결코 가해자가 아닙니다. "와이파이", "우리 집 고양이", "우주" 등 외부 존재에게 책임을 전가하세요.<br><strong>과장된 행동:</strong> 상황은 아무도 세부 사항을 묻고 싶지 않을 만큼 황당하거나 기술적이어야 합니다.<br><strong>물리적 차단:</strong> 최종 결과는 이분법적이어야 합니다. 가거나, 아니면 집에 남거나.' },
    { type: 'title', text: '핑계의 짧은 역사', level: 3 },
    { type: 'list', items: [
      '<strong>중세 시대:</strong> "내 말의 편자가 빠졌다" (시대를 초월한 고전).',
      '<strong>산업 혁명:</strong> "증기 기관이 과열되었다".',
      '<strong>디지털 시대:</strong> "업데이트 도중에 인터넷이 끊겼다".'
    ]},
    { type: 'proscons', items: [
      { pro: '사회적 압박으로부터 즉각적인 해방', con: '과도한 사용은 신뢰를 떨어뜨림' },
      { pro: '자신의 에너지와 경계 보호', con: '부주의하게 사용하면 죄책감이 생길 수 있음' },
      { pro: '창의적이고 유머러스한 어조로 긴장 완화', con: '공식적이거나 전문적인 상황에는 부적합함' }
    ]},
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
