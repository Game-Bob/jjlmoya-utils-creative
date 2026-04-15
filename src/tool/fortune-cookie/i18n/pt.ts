import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { FortuneCookieLocaleContent } from '../index';

const slug = 'biscoito-da-sorte-online';
const title = 'Biscoito da Sorte';
const description = 'Verifique o seu destino diário e descubra os seus números da sorte. Um biscoito por dia, revelado com um clique.';

const faq: FortuneCookieLocaleContent['faq'] = [
  {
    question: 'Posso abrir mais do que um biscoito por dia?',
    answer: 'O destino fala apenas uma vez por dia. Guardamos a sua sorte no dispositivo para que o guie ao longo do dia.'
  },
  {
    question: 'As frases são geradas aleatoriamente?',
    answer: 'Sim — uma sorte aleatória é selecionada a cada dia e guardada localmente. Cada uma das 25 frases tem a mesma probabilidade de ser escolhida, garantindo variedade ao longo do tempo.'
  }
];

const howTo: FortuneCookieLocaleContent['howTo'] = [
  { name: 'Partir o biscoito', text: 'Clique repetidamente no biscoito para o abrir.' },
  { name: 'Ler a sua sorte', text: 'Descubra a mensagem oculta no interior e os seus números da sorte para o dia.' }
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

export const content: FortuneCookieLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  bibliographyTitle: 'Bibliografia do Destino',
  ui: {
    title: 'Biscoito da Sorte Online',
    description: 'O seu oráculo digital diário.',
    instruction: 'Bata no biscoito para abrir o seu destino',
    dailyStatus: 'O seu destino foi revelado para hoje.',
    shareBtn: 'Partilhar Sabedoria',
    shareTitle: 'O Meu Biscoito da Sorte',
    shareText: 'O destino falou: "$TEXT"\nOs meus números: $NUMS\n\nDescubra a sua sorte aqui:',
    copied: 'Copiado!',
    fortunes: JSON.stringify([
      "A sorte que procura está noutro biscoito.",
      "Não conte os dias, faça os dias valerem a pena.",
      "Uma viagem de mil milhas começa com um único passo.",
      "O erro é o preâmbulo da descoberta.",
      "A sua capacidade de aprender é o seu maior trunfo.",
      "Sorria, o universo está a olhar para si.",
      "A paciência é uma árvore com uma raiz amarga, mas frutos muito doces.",
      "Não tenha medo de crescer lentamente, tenha medo apenas de ficar parado.",
      "Hoje é o amanhã com que se preocupou ontem.",
      "A felicidade não é algo pronto. Ela vem das suas próprias ações.",
      "Se não puder mudar a direção do vento, ajuste as suas velas.",
      "O que plantar agora, colherá mais tarde.",
      "Criatividade é a inteligência a divertir-se.",
      "Não procure erros, procure soluções.",
      "A sua atitude, não a sua aptidão, determinará a sua altitude.",
      "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
      "Acredite que consegue e estará a meio caminho.",
      "A única maneira de fazer um excelente trabalho é amar o que faz.",
      "A vida é 10% o que lhe acontece e 90% como reage a isso.",
      "Seja a mudança que quer ver no mundo.",
      "A melhor maneira de prever o futuro é inventá-lo.",
      "Simplicidade é a sofisticação máxima.",
      "É o mestre do seu destino e o capitão da sua alma.",
      "Em breve receberá notícias que mudarão a sua perspetiva.",
      "Uma viagem inesperada trar-lhe-á grandes alegrias."
    ]),
    faqTitle: 'FAQ',
    bibliographyTitle: 'Referências'
  },
  seo: [
    { type: 'title', text: 'O Mistério do Biscoito da Sorte', level: 2 },
    { type: 'paragraph', html: 'Já se perguntou de onde vêm estes curiosos biscoitos? Embora os associemos à comida chinesa, a sua origem é uma viagem fascinante entre o Japão e os Estados Unidos. O biscoito da sorte como o conhecemos hoje foi provavelmente inventado na Califórnia do início do século XX, não na China — onde são praticamente desconhecidos.' },
    { type: 'tip', title: 'Como Funciona o Nosso Oráculo', html: 'Cada dia pode abrir um biscoito. O sistema guarda o seu destino para que se lembre dele durante 24 horas. A sorte é guardada localmente no seu navegador — completamente privada, sem servidores envolvidos. Volte amanhã para uma nova previsão!' },
    { type: 'title', text: 'A Filosofia dos Oráculos', level: 3 },
    { type: 'paragraph', html: 'Os seres humanos sempre procuraram orientação em tempos de incerteza. Do Oráculo de Delfos ao I Ching, os sistemas de adivinhação cumprem uma função psicológica consistente: dão-nos permissão para <strong>parar e refletir</strong>. Um biscoito da sorte não prevê o futuro — incentiva-o a pensar sobre ele.' },
    { type: 'list', items: [
      '<strong>China Antiga:</strong> O I Ching (Livro das Mutações, ~1000 a.C.) utilizava hexagramas para guiar decisões e interpretar o destino.',
      '<strong>Grécia Clássica:</strong> O Oráculo de Delfos atraía governantes e cidadãos com pronunciamentos crípticos interpretados como orientação divina.',
      '<strong>Japão Moderno:</strong> As tiras da sorte Omikuji nos santuários xintoístas, atadas a ramos de árvores, misturam o fado com o ritual.',
      '<strong>EUA Século XX:</strong> Os biscoitos da sorte surgiram nas comunidades nipo-americanas antes de se tornarem sinónimo da gastronomia sino-americana.'
    ]},
    { type: 'stats', items: [
      { value: '3 mil milhões+', label: 'Biscoitos da sorte feitos anualmente', icon: 'mdi:cookie' },
      { value: '~1000 a.C.', label: 'Origem do I Ching', icon: 'mdi:book-open-variant' },
      { value: '25', label: 'Frases neste oráculo', icon: 'mdi:star-shooting' },
      { value: '1/dia', label: 'Um destino por dia', icon: 'mdi:calendar-today' }
    ], columns: 4 },
  ],
  faq,
  bibliography: [
    { name: 'História do Biscoito da Sorte', url: 'https://pt.wikipedia.org/wiki/Biscoito_da_sorte' }
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
