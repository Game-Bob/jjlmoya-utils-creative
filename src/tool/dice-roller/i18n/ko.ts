import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DiceRollerLocaleContent } from '../index';

const slug = 'dice-roller';
const title = '주사위 굴리기';
const description = 'RPG 및 보드게임을 위한 완벽한 주사위 시뮬레이터입니다. 수정치 및 기록 기능과 함께 d4, d6, d8, d10, d12, d20, d100을 굴려보세요.';

const faq: DiceRollerLocaleContent['faq'] = [
  {
    question: '유리함(Advantage) 판정(D&D)은 어떻게 시뮬레이션 하나요?',
    answer: 'd20 버튼을 두 번 클릭하여 주사위 주머니에 d20 두 개를 추가하세요. 주사위를 굴린 후, 두 개의 개별 결과 중 더 높은 값을 취하면 됩니다. 표시되는 합계는 두 주사위의 합이지만, 결과 상세 내역을 통해 각 주사위의 눈을 개별적으로 확인할 수 있습니다.',
  },
  {
    question: '결과값에 표시되는 초록색과 빨간색은 무엇을 의미하나요?',
    answer: '초록색 결과는 주사위에서 나올 수 있는 최댓값이 나왔음("크리티컬")을 나타냅니다. 빨간색 결과는 최솟값("1", 즉 펌블)이 나왔음을 의미합니다. 이를 통해 크리티컬 성공과 대실패를 한눈에 파악할 수 있습니다.',
  },
  {
    question: '같은 종류의 주사위를 여러 개 추가할 수 있나요?',
    answer: '네. 주사위 버튼을 클릭할 때마다 주머니에 추가됩니다. d6을 세 번 클릭하면 주머니에 "3d6"이라고 표시됩니다. 개수를 줄이려면 주머니의 각 주사위 그룹 옆에 나타나는 "−" 버튼을 클릭하세요.',
  },
  {
    question: '디지털 주사위가 실제 주사위만큼 무작위한가요?',
    answer: '통계적으로 그렇습니다. 현대의 자바스크립트 엔진은 매우 높은 품질의 균등 분포를 가진 의사 난수 알고리즘(xorshift128+)을 사용합니다. 실제 주사위는 제조상의 미세한 결함으로 인해 결과가 편향될 수 있지만, 디지털 주사위는 그런 문제가 없습니다.',
  },
  {
    question: 'd100은 무엇이며 어떻게 사용되나요?',
    answer: 'd100(또는 d%)은 1부터 100까지의 숫자를 생성하며, ‘크툴루의 부름’이나 ‘워해머 판타지 RPG’와 같은 퍼센트 기반 게임 시스템에서 사용됩니다. 이는 "직접 확률"을 나타냅니다. 예를 들어, 은신 기술 수치가 65%라면 성공하려면 굴림 결과가 65 이하여야 합니다.',
  },
];

const howTo: DiceRollerLocaleContent['howTo'] = [
  { name: '주사위 풀 구성', text: '주사위 버튼(d4, d6, d8...)을 클릭하여 풀에 추가하세요. 클릭할 때마다 해당 유형의 주사위가 하나씩 추가됩니다. 한 번의 굴림에 여러 유형을 섞어서 사용할 수 있습니다.' },
  { name: '수정치 조정', text: '수정치 옆의 "+" 및 "−" 버튼을 사용하여 보너스 또는 페널티(D&D의 능력치 수정치 등)를 적용하세요. 수정치는 합계에 자동으로 반영됩니다.' },
  { name: '주사위 굴리기', text: '"주사위 굴리기" 버튼을 누르세요. 오른쪽 패널에 최종 합계와 각 주사위의 개별 결과가 표시되며, 크리티컬(최댓값)은 초록색으로, 펌블(최솟값)은 빨간색으로 표시됩니다.' },
  { name: '기록 확인', text: '모든 굴림은 사용된 주사위 표현식, 총 결과, 정확한 시간과 함께 기록에 남습니다. 기록은 해당 버튼으로 초기화할 수 있습니다.' },
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

export const content: DiceRollerLocaleContent = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  bibliographyTitle: '확률 참고 자료',
  ui: {
    title: '주사위 굴리기',
    description: '행운이 당신과 함께하기를.',
    rollBtn: '주사위 굴리기',
    totalLabel: '합계',
    historyLabel: '기록',
    clearHistoryBtn: '기록 삭제',
    faqTitle: 'FAQ',
    bibliographyTitle: '참고 문헌',
    addDiceLabel: '주머니에 주사위 추가',
    bagLabel: '주사위 주머니',
    emptyBagBtn: '비우기',
    emptyBagText: '주사위를 클릭하여 추가하세요',
    modifierLabel: '수정치',
    rollManyLabel: '주사위 $COUNT개 굴리기',
    rollOneLabel: '주사위 $COUNT개 굴리기',
    preRollText: '주사위를 추가하고 굴리세요',
    emptyHistoryText: '주사위 기록이 여기에 표시됩니다'
  },
  seo: [
    { type: 'title', text: '무작위의 예술: 주사위의 역사와 수학', level: 2 },
    { type: 'paragraph', html: '주사위는 인류가 가진 가장 오래된 무작위 생성기 중 하나입니다. 양과 염소의 발목뼈인 <strong>아스트라갈리(Astragali)</strong>는 기원전 5000년경 메소포타미아와 이집트에서 원시적인 4면체 주사위로 사용되었습니다. 깎아 만든 뼈에서 현대의 에폭시 수지 정이십면체에 이르기까지의 진화는 단순히 미적인 것뿐만 아니라, 확률 이론과 게임 메커니즘 설계의 여정이기도 합니다.' },
    { type: 'title', text: '표준 주사위 세트', level: 3 },
    { type: 'paragraph', html: '1974년 <strong>Dungeons &amp; Dragons</strong>에 의해 대중화된 롤플레잉 게임용 주사위 세트는 5개의 플라톤 다면체와 2개의 추가 형태로 구성됩니다: d4(정사면체), d6(정육면체), d8(정팔면체), d10(오각 트라페조헤드론), d12(정십이면체), d20(정이십면체) 및 d100(백분율 주사위). 각 다면체는 모든 면이 나올 확률이 정확히 동일한 균등 분포를 보장합니다.' },
    { type: 'list', items: [
      '<strong>d4 – 정사면체:</strong> 맨발로 밟았을 때 가장 위험합니다. 4개의 삼각형 면을 가지며, 면당 확률은 25%입니다. 주로 단검 피해량이나 저레벨 주문에 사용됩니다.',
      '<strong>d6 – 정육면체:</strong> 가장 보편적인 주사위입니다. 이집트의 세네트 이후 모든 보드게임에 등장합니다. 정육면체 기하학은 완벽한 균등 배분을 보장합니다.',
      '<strong>d8 – 정팔면체:</strong> 창이나 배틀액스의 주사위입니다. 8개의 정삼각형 면을 가지며, 면당 확률은 12.5%입니다.',
      '<strong>d10 – 오각 트라페조헤드론:</strong> 표준 세트 중 유일하게 플라톤 다면체가 아닌 형태입니다. 각 "정점"당 두 개의 마주보는 면이 있습니다. d100(두 개의 d10 결합)에 필수적입니다.',
      '<strong>d12 – 정십이면체:</strong> 바바리안의 주사위입니다. 12개의 오각형 면을 가집니다. 많은 시스템에서 저평가되기도 하지만, D&D 5판 바바리안의 주역입니다.',
      '<strong>d20 – 정이십면체:</strong> RPG의 왕입니다. 20개의 삼각형 면을 가집니다. d20 시스템의 주역으로, 거의 모든 행동의 성패를 결정합니다.',
      '<strong>d100 – 백분율:</strong> 두 개의 d10을 결합(십의 자리 + 일의 자리)한 것입니다. ‘크툴루의 부름’이나 ‘워해머 판타지’와 같은 시스템에서 세밀한 확률을 정의합니다.',
    ]},
    { type: 'stats', items: [
      { value: '기원전 5000년', label: '최초의 주사위 (아스트라갈리)', icon: 'mdi:history' },
      { value: '1974년', label: 'D&D를 통한 세트의 대중화', icon: 'mdi:sword' },
      { value: '7가지 종류', label: '표준 RPG 주사위', icon: 'mdi:dice-multiple' },
      { value: '2¹²⁸', label: '자바스크립트 난수 주기', icon: 'mdi:function-variant' },
    ], columns: 4 },
    { type: 'title', text: '확률과 분포 곡선', level: 3 },
    { type: 'paragraph', html: '주사위 한 개를 굴리면 <strong>이산 균등 분포</strong>를 얻게 됩니다. 즉, 모든 결과의 확률이 정확히 동일(1/n)합니다. 하지만 여러 개의 주사위를 결합하면 수학적인 마법이 일어나 평평했던 곡선을 <strong>정규 분포에 근접</strong>하게 변형시킵니다. 이것이 2d6이 1d12와 다른 이유입니다. 두 개의 6면 주사위로 7을 굴릴 확률은 6/36 ≈ 16.7%인 반면, 양 끝값(2와 12)이 나올 확률은 2.8%에 불과합니다.' },
    { type: 'tip', title: '유리함과 불리함 (D&D 5e)', html: '<strong>유리함(Advantage)</strong> 메커니즘은 2d20을 굴려 더 높은 결과를 취하는 것입니다. 통계적으로 이는 평균값을 10.5에서 약 13.8로 높여줍니다. <strong>불리함(Disadvantage)</strong>은 반대로 더 낮은 결과를 취하여 평균을 약 7.2로 떨어뜨립니다. 본 시뮬레이터에서는 주머니에 두 개의 d20을 추가하고 결과를 비교함으로써 이를 시뮬레이션할 수 있습니다.' },
    { type: 'title', text: '수정치: 주사위와 캐릭터 사이의 가교', level: 3 },
    { type: 'paragraph', html: '대부분의 RPG 시스템에서 주사위는 단독으로 작동하지 않으며, 캐릭터의 능력을 나타내는 <strong>수정치(Modifier)</strong>가 더해지거나 빼집니다. D&D 5판에서 근력 수정치가 +5라면 1d20을 굴려 5를 더한 뒤 적의 방어력(AC)과 비교합니다. 본 시뮬레이터는 이러한 메커니즘을 충실히 반영하기 위해 수정치 제어 기능을 포함하고 있습니다.' },
    { type: 'tip', title: '주사위 표기 표준', html: '<strong>XdY+Z</strong> 표기법은 롤플레잉 게임의 표준입니다. Y면체 주사위 X개를 굴리고 수정치 Z를 더한다는 의미입니다. "3d6+2"는 6면체 주사위 3개를 굴리고 합계에 2를 더하라는 뜻입니다. 저희 도구는 기록 기능에 이 표기법을 사용하여 굴림 결과를 쉽게 공유하거나 기록할 수 있게 합니다.' },
    { type: 'glossary', items: [
      { term: '크리티컬 히트', definition: '주사위 눈의 최댓값이 나오는 것(예: d20에서 20이 나오는 것). 대부분의 RPG 시스템에서 특별 보너스 효과를 발생시킵니다.' },
      { term: '펌블 / 1 자연수 (Nat 1)', definition: '주사위의 최솟값(1)이 나오는 것. 종종 극적인 실패나 부정적인 결과를 초래합니다.' },
      { term: '주사위 풀', definition: '동시에 굴려지는 주사위들의 모음입니다. 본 도구의 풀에서는 각 주사위 유형이 개수별로 그룹화되어 표시됩니다(예: 3d6 + 2d8).' },
      { term: '수정치 (Modifier)', definition: '캐릭터의 숙련도, 능력치 보너스 또는 상황적 페널티를 나타내며 주사위 결과에 더하거나 빼는 고정된 숫자입니다.' },
      { term: '백분율 굴림', definition: '두 개의 d10을 사용하여 1부터 100까지의 결과를 내는 것으로, 능력치가 백분율로 측정되는 기술 기반 시스템에서 사용됩니다.' },
    ]},
  ],
  faq,
  bibliography: [
    { name: 'D&D Beyond – 주사위 메커니즘 규칙', url: 'https://www.dndbeyond.com/sources/basic-rules/using-ability-scores' },
    { name: 'Roll20 – 가상 테이블탑 및 주사위 시스템', url: 'https://roll20.net/' },
    { name: 'Pathfinder – d20 시스템 참조', url: 'https://paizo.com/pathfinder' },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
