import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ExcuseGeneratorLocaleContent } from '../index';

const slug = 'gerador-de-desculpas';
const title = 'Gerador de Desculpas';
const description = 'Máquina de jogo semântica para se livrar de compromissos com estilo. Gere desculpas surreais e irrefutáveis instantaneamente.';

const faq: ExcuseGeneratorLocaleContent['faq'] = [
  {
    question: 'Este gerador pode salvar o meu casamento?',
    answer: 'Embora não sejamos terapeutas, evitar aquele jantar com os sogros usando uma emergência técnica plausível pode reduzir significativamente a tensão. Use com responsabilidade.'
  },
  {
    question: 'Por que frases tão surreais?',
    answer: 'A estratégia baseia-se na Dissonância Cognitiva. Se disser algo aborrecido, é verificável. Se disser algo absurdo, a surpresa bloqueia a capacidade de sentir raiva.'
  }
];

const howTo: ExcuseGeneratorLocaleContent['howTo'] = [
  { name: 'Gerar', text: 'Clique no botão gerar para criar uma nova desculpa.' },
  { name: 'Copiar', text: 'Clique no botão copiar para levar a desculpa para a área de transferência.' }
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

export const content: ExcuseGeneratorLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  bibliographyTitle: 'Bibliografia de Lazer',
  ui: {
    title: 'Gerador de Desculpas Surreais',
    description: 'Calculadora de álibis de próxima geração.',
    subjectLabel: 'Sujeito',
    actionLabel: 'Ação',
    victimLabel: 'Vítima',
    generateBtn: 'GERAR DESCULPA',
    copyBtn: 'Copiar esta loucura',
    copied: 'Copiado!',
    starts: JSON.stringify([
      "O meu gato", "A minha avó", "O presidente", "Um alienígena", "O meu vizinho do 5º andar",
      "O wifi", "O meu horóscopo", "Um viajante do tempo", "A máquina de lavar", "O meu frigorífico",
      "O espírito do Natal", "A minha sombra", "Um ninja", "A polícia vegan", "Siri",
      "A minha planta carnívora", "O estafeta da Amazon", "O meu clone maligno", "Um feiticeiro", "Godzilla"
    ]),
    middles: JSON.stringify([
      "declarou guerra a", "comeu", "sequestrou", "incendiou",
      "está a organizar uma festa em", "vomitou em", "recusa-se a sair de",
      "hackeou", "roubou", "apaixonou-se por", "está a meditar sobre",
      "lançou um feitiço em", "está a protestar contra", "fundou um culto em",
      "está a dançar samba em", "invocou um demónio em", "bloqueou o acesso a",
      "transformou-se em ouro", "está a tentar vender", "escreveu um livro sobre"
    ]),
    ends: JSON.stringify([
      "as chaves da minha casa.", "a minha vontade de viver.", "o portão da garagem.",
      "as minhas calças favoritas.", "o router da sala.", "o meu único par de sapatos.",
      "as leis da física.", "a minha dignidade.", "o elevador do prédio.",
      "a minha conta da Netflix.", "a minha escova de dentes.", "as escrituras da casa.",
      "a minha coleção de pogs.", "o travão de mão do carro.", "o meu desejo de socializar.",
      "o meu stock de café.", "a tampa da sanita.", "o comando da TV.",
      "as minhas meias da sorte.", "a civilização ocidental."
    ]),
    faqTitle: 'FAQ',
    bibliographyTitle: 'Referências'
  },
  seo: [
    { type: 'title', text: 'A arte científica da desculpa perfeita', level: 2 },
    { type: 'paragraph', html: 'Vivemos na era da hiperconectividade. O seu telemóvel vibra, o seu relógio notifica-o e a sua agenda social parece um jogo de Tetris prestes a perder. A pressão para dizer "sim" a tudo criou uma epidemia de exaustão social.' },
    { type: 'title', text: 'O Renascimento do JOMO (Joy of Missing Out)', level: 3 },
    { type: 'paragraph', html: 'Enquanto o FOMO (Fear of Missing Out) dominou a última década, especialistas em bem-estar digital defendem agora o <strong>JOMO: a alegria de ficar de fora</strong>. Não se trata de isolamento, mas de intencionalidade.' },
    { type: 'tip', title: 'A fórmula para o álibi irrefutável', html: '<strong>O sujeito dissociado:</strong> você nunca é o culpado. É "o wifi", "o meu gato", "o universo". Transfira a culpa para uma entidade externa.<br><strong>A ação hiperbólica:</strong> a situação deve ser suficientemente absurda ou técnica para que ninguém peça detalhes.<br><strong>O bloqueio físico:</strong> o resultado final deve ser binário: ou eu vou ou fico em casa.' },
    { type: 'title', text: 'Breve história da desculpa', level: 3 },
    { type: 'list', items: [
      '<strong>Idade Média:</strong> "O meu cavalo perdeu uma herradura" (um clássico intemporal).',
      '<strong>Revolução Industrial:</strong> "A máquina a vapor sobreaqueceu".',
      '<strong>Era Digital:</strong> "A minha internet caiu bem no meio de uma atualização".',
    ]},
    { type: 'proscons', items: [
      { pro: 'Alivia instantaneamente a pressão social', con: 'O uso excessivo corrói a confiança' },
      { pro: 'Protege a sua energia e os seus limites', con: 'Pode gerar culpa se usado sem cuidado' },
      { pro: 'O tom criativo e humorístico dissipa a tensão', con: 'Não é adequado para contextos formais ou profissionais' },
    ]},
  ],
  faq,
  bibliography: [
    { name: 'Manifesto do Procrastinador', url: 'https://example.com/manifesto' }
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
