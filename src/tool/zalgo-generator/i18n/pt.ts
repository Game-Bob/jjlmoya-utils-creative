import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ZalgoGeneratorLocaleContent } from '../index';

const slug = 'gerador-zalgo';
const title = 'Gerador Zalgo';
const description = 'Corrompa as suas mensagens com caracteres Unicode em cascata que transbordam. Ajuste a intensidade e a direção do efeito glitch.';

const faq: ZalgoGeneratorLocaleContent['faq'] = [
  { question: 'O que é o texto Zalgo?', answer: 'É um tipo de texto que utiliza excessivamente caracteres de combinação Unicode (diacríticos). Quando empilhados verticalmente, estes caracteres "transbordam" da sua linha original, criando um efeito visual de corrupção, desordem ou horror popular na cultura da internet.' },
  { question: 'Por que o texto Zalgo parece tão estranho?', answer: 'Ele explora uma funcionalidade do padrão Unicode que permite adicionar marcas acima, abaixo ou através de uma letra base. Como não há um limite estrito para o número de marcas que podem ser adicionadas, o texto pode "invadir" as linhas superiores ou inferiores.' },
  { question: 'Posso usar este texto nas redes sociais?', answer: 'Sim, a maioria das plataformas modernas (Instagram, Twitter, Discord) suporta Unicode. No entanto, algumas redes ou dispositivos podem filtrar ou truncar o excesso de caracteres em intensidades muito altas para manter a legibilidade da interface.' },
  { question: 'Como posso remover o efeito Zalgo do texto?', answer: 'Para limpar texto corrompido, pode usar a normalização de strings do JavaScript ou simplesmente colá-lo num editor de texto básico que aceite apenas texto simples. A nossa ferramenta é puramente criativa e não danifica o conteúdo original.' },
];

const howTo: ZalgoGeneratorLocaleContent['howTo'] = [
  { name: 'Escrever a mensagem base', text: 'Introduza o texto que deseja "corromper" na caixa de texto principal.' },
  { name: 'Ajustar a intensidade do caos', text: 'Mova o seletor para definir quantos caracteres de combinação devem ser empilhados. Maior intensidade = mais difícil de ler.' },
  { name: 'Selecionar a direção do transbordo', text: 'Escolha se a corrupção deve crescer para cima, para baixo ou em todas as direções simultaneamente.' },
  { name: 'Copiar o resultado', text: 'Clique no botão de copiar. O texto resultante inclui todos os bytes invisíveis necessários para manter o efeito glitch.' },
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

export const content: ZalgoGeneratorLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  bibliographyTitle: 'Bibliografia do Caos',
  ui: {
    title: 'Gerador Zalgo',
    description: 'T̴u̵d̸o̸ ̵e̷s̶t̸á̶ ̷c̴o̷r̸r̸o̷m̸p̸i̷d̷o̷',
    inputPlaceholder: 'Escreva aqui a sua mensagem normal...',
    intensityLabel: 'Nível de Corrupção',
    outputLabel: 'Resultado Corrompido',
    copyBtn: 'Copiar Caos',
    copied: 'Copiado!',
    faqTitle: 'FAQ',
    bibliographyTitle: 'Referências',
    configTitle: 'Configuração',
    intensity: 'Intensidade',
    upLabel: 'Corrupção Superior',
    midLabel: 'Ruído Central',
    downLabel: 'Corrupção Inferior',
    resetBtn: 'Repor Valores',
    warningText: 'AVISO: O texto Zalgo utiliza caracteres Unicode combinados que podem transbordar visualmente do seu contentor. Use com cautela nas redes sociais.',
    previewLabel: 'Pré-visualização em Tempo Real',
    emptyLabel: 'Vazio',
    charLabel: 'CARACTERES',
    noteText: 'Nota: alguns browsers podem limitar a renderização de caracteres combinados'
  },
  seo: [
    { type: 'title', text: 'O que é Texto Zalgo e como funciona a corrupção visual?', level: 2 },
    { type: 'paragraph', html: 'O Texto Zalgo é uma forma de manipulação tipográfica que explora uma funcionalidade específica do padrão Unicode: <strong>caracteres de combinação</strong>. Ao contrário dos caracteres normais, estes diacríticos não ocupam espaço horizontal — eles empilham-se verticalmente no topo da letra base, criando aquela estética de "caos digital" ou "horror cósmico" tão popular na cultura da internet.' },
    { type: 'title', text: 'Anatomia do Processo', level: 3 },
    { type: 'paragraph', html: 'O nosso gerador processa cada caractere de forma independente, injetando sequências aleatórias de code points Unicode em três vetores distintos: <strong>superior</strong> (diacríticos que se empilham acima), <strong>médio</strong> (que perfuram a letra) e <strong>inferior</strong> (pendurados abaixo).' },
    { type: 'tip', title: 'Algoritmo de Corrupção', html: 'Para cada caractere base, é calculado um <code>contagem = intensidade × 30</code>. Esse número de diacríticos aleatórios é adicionado em cada vetor. Com intensidade 1.5, pode obter até 45 caracteres de combinação por letra.' },
    { type: 'title', text: 'Etiqueta e Aplicações', level: 3 },
    { type: 'list', items: [
      '<strong>Redes Sociais:</strong> Capte a atenção no Instagram ou TikTok. Perfeito para biografias que procuram romper com a convenção.',
      '<strong>Narrativa de Horror:</strong> Dramatize narrativas de ficção, creepypastas ou simulações de sistemas comprometidos.',
      '<strong>Acessibilidade:</strong> Aviso — o texto Zalgo é ilegível por leitores de ecrã. Use-o apenas como decoração visual, nunca para conteúdo crítico.',
      '<strong>SEO:</strong> Nunca use Zalgo em palavras-chave principais (H1, meta títulos). Os bots de indexação podem falhar ao normalizar estes caracteres.',
    ]},
    { type: 'title', text: 'A Origem: De Something Awful à Glitch Art', level: 3 },
    { type: 'paragraph', html: 'Zalgo não começou como um gerador, mas sim como uma intervenção em tiras de banda desenhada clássicas. O utilizador Shmorky, em meados dos anos 2000, começou a deformar personagens como Nancy ou Archie, adicionando manchas e distorções. A frase <strong>"Ele vem"</strong> selou o destino destas obras, anunciando a chegada de uma entidade que devorava a realidade.' },
    { type: 'glossary', items: [
      { term: 'Caractere de Combinação', definition: 'Um code point Unicode desenhado para ser colocado acima, abaixo ou através de um caractere base. Usado legitimamente em idiomas como árabe, vietnamita e hindi.' },
      { term: 'Diacrítico', definition: 'Uma marca adicionada a uma letra base para modificar a sua pronúncia ou significado. Zalgo abusa destes para criar um transbordo visual.' },
      { term: 'Bloco Unicode', definition: 'Um intervalo contíguo de code points Unicode. Os caracteres Zalgo vêm principalmente do bloco "Combining Diacritical Marks" (U+0300–U+036F).' },
      { term: 'Glitch Art', definition: 'Uma estética que incorpora ou simula intencionalmente erros, artefactos e corrupções em media digital como uma técnica expressiva.' },
    ]},
  ],
  faq,
  bibliography: [
    { name: 'Padrão Unicode - Caracteres de Combinação (inglês)', url: 'https://www.unicode.org/standard/principles.html#Combining_Characters' },
    { name: 'O Fenómeno do Texto Zalgo (inglês)', url: 'https://knowyourmeme.com/memes/zalgo' },
    { name: 'MDN - Normalização de strings', url: 'https://developer.mozilla.org/pt-PT/docs/Web/JavaScript/Reference/Global_Objects/String/normalize' },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
