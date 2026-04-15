import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DiceRollerLocaleContent } from '../index';

const slug = 'lancador-de-dados';
const title = 'Lançador de Dados';
const description = 'Um simulador de dados completo para os seus jogos de RPG e de tabuleiro. Lance d4, d6, d8, d10, d12, d20 e d100 com modificadores e histórico.';

const faq: DiceRollerLocaleContent['faq'] = [
  {
    question: 'Como posso simular um lançamento com vantagem (D&D)?',
    answer: 'Adicione dois dados d20 ao saco clicando duas vezes no botão d20. Ao lançar, observe os dois resultados individuais e fique com o mais alto. O total apresentado será a soma, mas pode ver cada dado separadamente no detalhe do resultado.',
  },
  {
    question: 'O que significa a cor verde ou vermelha nos resultados?',
    answer: 'Resultados verdes indicam que o dado obteve o seu valor máximo possível (um "crítico"). Resultados vermelhos indicam o valor mínimo (um "1", o pior resultado possível). Isto torna fácil detetar críticos e falhas críticas num relance.',
  },
  {
    question: 'Posso adicionar vários dados do mesmo tipo?',
    answer: 'Sim. Cada clique num dado adiciona-o ao saco. Se clicar no d6 três vezes, o saco mostrará "3d6". Para reduzir a contagem, clique no botão "−" que aparece ao lado de cada grupo de dados no saco.',
  },
  {
    question: 'Os dados digitais são tão aleatórios como os físicos?',
    answer: 'Estatisticamente, sim. Os motores de JavaScript modernos utilizam algoritmos pseudorandom (xorshift128+) com uma distribuição uniforme de altíssima qualidade. Um dado físico real pode ter pequenas imperfeições de fabrico que influenciam os resultados; o dado digital não tem esse problema.',
  },
  {
    question: 'O que é o d100 e como é utilizado?',
    answer: 'O d100 (ou d%) gera um número de 1 a 100 e é utilizado em sistemas de jogo baseados em percentagens, como Call of Cthulhu ou Warhammer Fantasy Roleplay. Representa a "probabilidade direta": se a sua perícia de Stealth for 65%, precisa de lançar 65 ou menos para ter sucesso.',
  },
];

const howTo: DiceRollerLocaleContent['howTo'] = [
  { name: 'Construa o conjunto de dados', text: 'Clique nos botões dos dados (d4, d6, d8...) para os adicionar ao seu conjunto. Cada clique adiciona um dado do tipo selecionado. Pode misturar diferentes tipos no mesmo lançamento.' },
  { name: 'Ajuste o modificador', text: 'Utilize os botões "+" e "−" ao lado do modificador para aplicar bónus ou penalizações (como o modificador de habilidade em D&D). O modificador é automaticamente adicionado ao total.' },
  { name: 'Lance os dados', text: 'Pressione o botão "Lançar Dados". O painel direito mostra o total final e o detalhe de cada dado individual, com críticos (máximo) em verde e falhas (mínimo) em vermelho.' },
  { name: 'Verifique o histórico', text: 'Cada lançamento é registado no histórico com a expressão de dados utilizada, o resultado total e a hora exata. Pode limpar o histórico com o botão correspondente.' },
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
  inLanguage: 'pt',
};

export const content: DiceRollerLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  bibliographyTitle: 'Bibliografia da Sorte',
  ui: {
    title: 'Lançador de Dados',
    description: 'Que a sorte esteja contigo.',
    rollBtn: 'Lançar Dados',
    totalLabel: 'Total',
    historyLabel: 'Histórico',
    clearHistoryBtn: 'Limpar Histórico',
    faqTitle: 'FAQ',
    bibliographyTitle: 'Referências',
    addDiceLabel: 'Adicione dados ao saco',
    bagLabel: 'Saco de dados',
    emptyBagBtn: 'Esvaziar',
    emptyBagText: 'Clique nos dados para adicionar',
    modifierLabel: 'Modificador',
    rollManyLabel: 'Lançar $COUNT dados',
    rollOneLabel: 'Lançar $COUNT dado',
    preRollText: 'Adicione os dados e lance',
    emptyHistoryText: 'O histórico de lançamentos aparecerá aqui'
  },
  seo: [
    { type: 'title', text: 'A Arte da Aleatoriedade: História e Matemática dos Dados', level: 2 },
    { type: 'paragraph', html: 'Os dados são um dos geradores de aleatoriedade mais antigos da humanidade. Os <strong>astrágalos</strong> — ossos do tornozelo de ovelhas e cabras — eram utilizados como dados primitivos de quatro faces já em 5000 a.C. na Mesopotâmia e no Egito. A evolução do osso entalhado para os modernos icosaedros de resina epóxi não é apenas estética: é uma viagem através da teoria da probabilidade e do design de mecânicas de jogo.' },
    { type: 'title', text: 'A Família Padrão de Dados', level: 3 },
    { type: 'paragraph', html: 'O conjunto de dados mais difundido em jogos de interpretação (RPG) — popularizado por <strong>Dungeons &amp; Dragons</strong> em 1974 — consiste nos cinco sólidos platónicos mais duas formas adicionais: d4 (tetraedro), d6 (cubo), d8 (octaedro), d10 (trapezoedro pentagonal), d12 (dodecaedro), d20 (icosaedro) e d100 (dado percentil). Cada poliedro garante uma distribuição uniforme: todas as faces têm exatamente a mesma probabilidade de sair.' },
    { type: 'list', items: [
      '<strong>d4 – Tetraedro:</strong> O mais perigoso se for pisado descalço. Quatro faces triangulares, 25% de probabilidade por face. Comumente utilizado para dano de adagas ou feitiços de nível baixo.',
      '<strong>d6 – Cubo:</strong> O dado mais universal. Presente em todos os jogos de tabuleiro desde o senet egípcio. A sua geometria cúbica garante uma equidistribuição perfeita.',
      '<strong>d8 – Octaedro:</strong> O dado da lança ou do machado de batalha. Oito faces triangulares equiláteras. 12,5% de probabilidade por face.',
      '<strong>d10 – Trapezoedro Pentagonal:</strong> O único sólido não platónico no conjunto padrão. Duas faces opostas por "vértice". Essencial para o d100 (dois d10 combinados).',
      '<strong>d12 – Dodecaedro:</strong> O dado do bárbaro. Doze faces pentagonais. Subvalorizado em muitos sistemas, protagonista no Bárbaro de D&D 5e.',
      '<strong>d20 – Icosaedro:</strong> O rei do RPG. Vinte faces triangulares. Protagonista do sistema d20: determina o sucesso ou falha de quase todas as ações.',
      '<strong>d100 – Percentil:</strong> Dois d10 combinados (dezenas + unidades). Define probabilidades precisas em sistemas como Call of Cthulhu ou Warhammer Fantasy.',
    ]},
    { type: 'stats', items: [
      { value: '5000 a.C.', label: 'Primeiros dados (astrágalos)', icon: 'mdi:history' },
      { value: '1974', label: 'D&D popularizou o conjunto', icon: 'mdi:sword' },
      { value: '7 tipos', label: 'Dados padrão de RPG', icon: 'mdi:dice-multiple' },
      { value: '2¹²⁸', label: 'Período aleatório de JS', icon: 'mdi:function-variant' },
    ], columns: 4 },
    { type: 'title', text: 'Probabilidades e Curvas de Distribuição', level: 3 },
    { type: 'paragraph', html: 'Quando lança um único dado, obtém uma <strong>distribuição uniforme discreta</strong>: cada resultado tem exatamente a mesma probabilidade (1/n). Mas assim que combina vários dados, a magia matemática transforma essa curva plana numa <strong>distribuição normal aproximada</strong>. É por isso que 2d6 não é o mesmo que 1d12: com dois dados de seis faces a probabilability de lançar um 7 é 6/36 ≈ 16,7%, enquanto os extremos (2 e 12) ocorrem apenas 2,8% das vezes.' },
    { type: 'tip', title: 'Vantagem e Desvantagem (D&D 5e)', html: 'A mecânica de <strong>Vantagem</strong> consiste em lançar 2d20 e ficar com o resultado mais alto. Matematicamente, isto eleva a média de 10,5 para aproximadamente 13,8. A <strong>Desvantagem</strong> faz o oposto: escolha o mais baixo, baixando a média para cerca de 7,2. O nosso lançador permite simular isto adicionando dois d20 ao saco e comparando os resultados individuais.' },
    { type: 'title', text: 'Modificadores: A Ponte entre o Dado e a Personagem', level: 3 },
    { type: 'paragraph', html: 'Na maioria dos sistemas de RPG, o dado não atua sozinho: um <strong>modificador</strong> representativo das habilidades da personagem é adicionado ou subtraído. No D&D 5e, um modificador de Força de +5 significa que lança 1d20, adiciona 5 e verifica o resultado contra a Classe de Armadura do inimigo. O nosso lançador inclui um controlo de modificador para refletir fielmente estas mecânicas.' },
    { type: 'tip', title: 'Padrão de Notação de Dados', html: 'A notação <strong>XdY+Z</strong> é o padrão de facto em jogos de RPG: X dados de Y faces com modificador Z. "3d6+2" significa lançar três dados de seis faces e somar 2 ao total. A nossa ferramenta utiliza esta notazione no histórico para que possa facilmente partilhar ou registar os seus lançamentos.' },
    { type: 'glossary', items: [
      { term: 'Ataque Crítico', definition: 'Um lançamento do valor máximo num dado (ex., lançar 20 num d20). Geralmente ativa efeitos de bónus especiais na maioria dos sistemas de RPG.' },
      { term: 'Falha Crítica / 1 Natural', definition: 'Lançar o valor mínimo (1) num dado. Frequentemente resulta numa falha dramática ou consequência negativa.' },
      { term: 'Dice Pool', definition: 'Uma coleção de dados lançados simultaneamente. O conjunto na nossa ferramenta mostra cada tipo de dado agrupado por contagem (ex., 3d6 + 2d8).' },
      { term: 'Modificador', definition: 'Um número fixo somado ou subtraído do resultado de um lançamento, representando a habilidade da personagem, bónus de atributo ou penalização situacional.' },
      { term: 'Lançamento Percentil', definition: 'Um lançamento que utiliza dois d10 para produzir um resultado de 1–100, utilizado em sistemas baseados em perícias onde as habilidades são medidas em percentagens.' },
    ]},
  ],
  faq,
  bibliography: [
    { name: 'D&D Beyond – Regras de mecânicas de dados', url: 'https://www.dndbeyond.com/sources/basic-rules/using-ability-scores' },
    { name: 'Roll20 – Mesa virtual e sistemas de dados', url: 'https://roll20.net/' },
    { name: 'Pathfinder – Referência de Sistema d20', url: 'https://paizo.com/pathfinder' },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
