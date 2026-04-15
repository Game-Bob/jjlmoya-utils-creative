import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { FortuneCookieLocaleContent } from '../index';

const slug = 'online-fortune-cookie-ko';
const title = '포춘 쿠키';
const description = '오늘의 운세를 확인하고 행운의 숫자를 발견하세요. 하루에 하나의 운세를 클릭 한 번으로 확인해보세요.';

const faq: FortuneCookieLocaleContent['faq'] = [
  {
    question: '하루에 두 개 이상의 쿠키를 열 수 있나요?',
    answer: '운명은 하루에 단 한 번만 말해줍니다. 오늘의 운세는 기기에 저장되어 하루 내내 당신을 가이드해 줄 것입니다.'
  },
  {
    question: '운세 메시지는 무작위로 생성되나요?',
    answer: '네, 매일 무작위로 하나의 운세가 선택되어 로컬에 저장됩니다. 25개의 운세는 각각 선택될 확률이 동일하여 매일 새로운 내용을 즐길 수 있습니다.'
  }
];

const howTo: FortuneCookieLocaleContent['howTo'] = [
  { name: '쿠키 깨기', text: '쿠키를 여러 번 클릭하여 반으로 쪼개세요.' },
  { name: '운세 읽기', text: '안에 숨겨진 메시지와 함께 오늘의 행운의 숫자를 확인하세요.' }
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

export const content: FortuneCookieLocaleContent = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  bibliographyTitle: '운명의 참고 문헌',
  ui: {
    title: '온라인 포춘 쿠키',
    description: '당신을 위한 매일의 디지털 신탁.',
    instruction: '쿠키를 눌러 운명을 확인하세요',
    dailyStatus: '오늘의 운세가 이미 공개되었습니다.',
    shareBtn: '지혜 공유하기',
    shareTitle: '나의 포춘 쿠키',
    shareText: '운명이 말했습니다: "$TEXT"\n나의 행운의 숫자: $NUMS\n\n여기서 당신의 운세를 확인해보세요:',
    copied: '복사 완료!',
    fortunes: JSON.stringify([
      "당신이 찾는 행운은 다른 쿠키 안에 있습니다.",
      "날짜를 세지 말고, 하루하루를 의미 있게 만드세요.",
      "천 리 길도 한 걸음부터 시작됩니다.",
      "실수는 발견을 위한 서문입니다.",
      "배우는 능력이야말로 당신의 가장 큰 자산입니다.",
      "미소 지으세요, 우주가 당신을 지켜보고 있습니다.",
      "인내심은 뿌리는 쓰지만 열매는 매우 단 나무입니다.",
      "천천히 성장하는 것을 두려워하지 말고, 오직 멈춰 서 있는 것만을 두려워하세요.",
      "오늘은 어제 당신이 그토록 걱정하던 내일입니다.",
      "행복은 이미 만들어진 것이 아니라, 당신의 행동으로부터 비롯됩니다.",
      "바람의 방향을 바꿀 수 없다면, 돛을 조정하세요.",
      "지금 심는 것을 나중에 수확하게 될 것입니다.",
      "창의성이란 지성이 즐거움을 느끼는 상태입니다.",
      "잘못을 찾지 말고 해결책을 찾으세요.",
      "당신의 적성(Aptitude)이 아니라 태도(Attitude)가 당신의 고도(Altitude)를 결정할 것입니다.",
      "성공은 매일 반복되는 작은 노력의 합계입니다.",
      "할 수 있다고 믿으세요. 그렇다면 당신은 이미 절반은 온 것입니다.",
      "위대한 일을 하는 유일한 방법은 당신이 하는 일을 사랑하는 것입니다.",
      "인생의 10%는 당신에게 일어나는 일이고, 90%는 그것에 어떻게 반응하느냐입니다.",
      "세상에서 보고 싶은 변화, 그 자체가 되세요.",
      "미래를 예측하는 가장 좋은 방법은 그것을 발명하는 것입니다.",
      "단순함이야말로 궁극의 정교함입니다.",
      "당신은 당신 운명의 주인이며 영혼의 선장입니다.",
      "곧 당신의 관점을 바꿔줄 소식을 듣게 될 것입니다.",
      "예기치 못한 여행이 당신에게 큰 기쁨을 가져다줄 것입니다."
    ]),
    faqTitle: 'FAQ',
    bibliographyTitle: '참고 문헌'
  },
  seo: [
    { type: 'title', text: '포춘 쿠키의 미스터리', level: 2 },
    { type: 'paragraph', html: '이 기묘한 쿠키가 어디서 왔는지 궁금해한 적이 있나요? 흔히 중국 음식과 연관 짓지만, 그 기원은 일본과 미국을 잇는 흥미로운 여정입니다. 오늘날 우리가 아는 포춘 쿠키는 중국이 아닌 20세기 초 캘리포니아에서 발명되었을 가능성이 높으며, 정작 중국 본토에서는 거의 알려지지 않았습니다.' },
    { type: 'tip', title: '포춘 쿠키 작동 방식', html: '매일 한 번 쿠키를 열 수 있습니다. 시스템이 오늘의 운세를 24시간 동안 저장하여 기억할 수 있게 돕습니다. 결과는 브라우저의 로컬에만 저장되며, 완전히 비공개로 유지됩니다. 서버로 전송되지도 않습니다. 내일 새로운 예언을 확인하러 다시 오세요!' },
    { type: 'title', text: '신탁의 철학', level: 3 },
    { type: 'paragraph', html: '인류는 불확실한 시대에 언제나 가이드를 찾아왔습니다. 델포이의 신탁에서 주역(I Ching)에 이르기까지, 점술 시스템은 <strong>잠시 멈추어 성찰할 수 있는</strong> 심리적 기능을 수행해왔습니다. 포춘 쿠키는 미래를 예견하는 것이 아니라, 미래에 대해 생각해보게끔 유도하는 장치입니다.' },
    { type: 'list', items: [
      '<strong>고대 중국:</strong> 주역(I Ching, BC 1000년경)은 팔괘를 사용하여 결정을 가이드하고 운명을 해석했습니다.',
      '<strong>고대 그리스:</strong> 델포이의 신탁은 신의 인도라고 여겨지는 함축적인 선언으로 통치자와 시민들을 매료시켰습니다.',
      '<strong>현대 일본:</strong> 신사에서 나뭇가지에 묶는 행운의 종이인 오미쿠지는 숙명과 의식을 결합한 형태입니다.',
      '<strong>20세기 미국:</strong> 포춘 쿠키는 일본계 미국인 커뮤니티에서 등장한 후 중국계 미국인 요리의 대명사가 되었습니다.'
    ]},
    { type: 'stats', items: [
      { value: '30억 개 이상', label: '연간 제조되는 포춘 쿠키 수', icon: 'mdi:cookie' },
      { value: 'BC 1000년경', label: '주역의 기원', icon: 'mdi:book-open-variant' },
      { value: '25', label: '운세 메시지 개수', icon: 'mdi:star-shooting' },
      { value: '1회/일', label: '하루 한 번의 신탁', icon: 'mdi:calendar-today' }
    ], columns: 4 },
  ],
  faq,
  bibliography: [
    { name: '포춘 쿠키의 역사 (영문)', url: 'https://en.wikipedia.org/wiki/Fortune_cookie' }
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
