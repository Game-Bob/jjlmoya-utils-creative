import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { BeadPatternGeneratorLocaleContent } from '../index';

const slug = 'gerador-de-padroes-de-contas';
const title = 'Gerador de Padrões';
const description = 'Crie pixel art e esquemas de contas para Miyuki ou Hama a partir das suas fotos. Algoritmo de quantização de cores, modo visão de túnel e exportação ZIP.';

const faq: BeadPatternGeneratorLocaleContent['faq'] = [
  { question: 'O que é a quantização de cores em padrões?', answer: 'É o processo de reduzir os milhares de cores de uma foto a apenas algumas que correspondem às cores reais das contas disponíveis (ex: Miyuki ou Hama). Utilizamos algoritmos inteligentes para manter a semelhança visual com a paleta mínima possível.' },
  { question: 'Posso usar este padrão para ponto de cruz?', answer: 'Sim, o gerador cria um gráfico de grelha perfeitamente compatível com ponto de cruz. Basta escolher um tamanho de grelha que corresponda ao seu tecido (Aida 14, 18, etc.).' },
  { question: 'Qual é a diferença entre contas Miyuki e Hama?', answer: 'As contas Miyuki Delica são contas de vidro muito pequenas e precisas para joalharia. As contas Hama são de plástico e são fundidas com um ferro de engomar. A nossa ferramenta permite ajustar a proporção para que o padrão não se distorça dependendo do material utilizado.' },
  { question: 'Como funciona o algoritmo de dithering?', answer: 'O dithering cria a ilusão de mais cores ao misturar píxeis de diferentes cores em padrões espaçados. Ajuda os gradientes de cor a parecerem mais suaves, mesmo com uma paleta de contas limitada.' },
];

const howTo: BeadPatternGeneratorLocaleContent['howTo'] = [
  { name: 'Carregue uma imagem nítida', text: 'Selecione uma foto com bom contraste e poucos detalhes pequenos para que o padrão seja mais fácil de seguir.' },
  { name: 'Ajuste o tamanho da grelha', text: 'Defina quantas contas de largura e altura terá a sua peça final. Mais contas = mais detalhe, mas mais dificuldade.' },
  { name: 'Otimize a paleta de cores', text: 'Reduza o número de cores até que correspondam às contas que tem disponíveis no seu kit.' },
  { name: 'Exporte o esquema guia', text: 'Gere o padrão final com códigos de cores para usar como referência enquanto monta as suas contas na placa ou linha.' },
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

export const content: BeadPatternGeneratorLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  bibliographyTitle: 'Bibliografia Artesanal',
  ui: {
    title: 'Laboratório de Padrões',
    subtitle: 'Engenharia de cores para as suas mãos',
    description: 'De foto a esquema de contas.',
    gridSizeLabel: 'Tamanho (Largura)',
    colorCountLabel: 'Cores',
    optionsLabel: 'Opções',
    rulersLabel: 'Réguas',
    symbolsTooltip: 'Padrão Surpresa',
    symbolsLabel: 'Símbolos',
    downloadBtn: 'Descarregar',
    uploadTitle: 'Carregue a Sua Visão',
    uploadSubtitle: 'e deixe a magia digital acontecer',
    paletteTitle: 'ADN Cromático',
    reuploadBtn: 'Alterar Imagem',
    tunnelVisionTitle: 'Visão de Túnel',
    tunnelVisionSubtitle: 'O seu assistente de precisão fila a fila.',
    uploadLabel: 'Carregue a sua foto',
    pixelateBtn: 'Gerar Padrão',
    faqTitle: 'FAQ',
    bibliographyTitle: 'Referências'
  },
  seo: [
    { type: 'title', text: 'Alquimia Digital: Transmuta Píxeis em Arte Tangível', level: 2 },
    { type: 'paragraph', html: 'Bem-vindo ao <strong>Ultimate Pattern Studio</strong>. Um <em>motor de inteligência cromática</em> desenhado para arquitetos de Pixel Art, mestres de Miyuki e visionários de ponto de cruz. A sua ponte entre o digital e o feito à mão.' },
    { type: 'card', icon: 'mdi:grid', title: 'A Grelha Inteligente', html: 'O nosso algoritmo de <strong>subamostragem espacial</strong> não se limita a "encolher" a sua imagem. Analisa a estrutura visual para mapear grupos complexos de píxeis em células individuais, preservando a integridade das silhuetas e arestas como um ilustrador especialista.' },
    { type: 'card', icon: 'mdi:palette', title: 'Quantização de Cores K Means', html: 'Implementamos uma variante do algoritmo <strong>K-Means Clustering</strong> que encontra matematicamente os tons "centróides" da sua imagem. Fidelidade visual surpreendente com uma paleta minimalista de 12, 24 ou 32 cores.' },
    { type: 'title', text: 'Mestria em 3 Passos', level: 3 },
    { type: 'card', icon: 'mdi:image-search', title: 'A Seleção Perfeita', html: 'Procure <strong>alto contraste</strong>, iluminação dramática e formas icónicas. Retratos com fundos limpos, logótipos e vector art traduzem-se maravilhosamente.' },
    { type: 'card', icon: 'mdi:ruler', title: 'Calibração Dimensional', html: '<strong>Miyuki Delica:</strong> 50 contas ≈ 8cm · <strong>Hama Midi:</strong> 50 contas ≈ 25cm · <strong>Ponto de Cruz:</strong> 1 célula = 1 ponto.' },
    { type: 'card', icon: 'mdi:eye-check', title: 'Execução Zen (Modo Visão de Túnel)', html: 'O nosso sistema de <strong>Visão de Túnel</strong> atua como o seu assistente pessoal, diminuindo o ruído visual e destacando cirurgicamente apenas a fila ativa. Concentração absoluta.' },
    { type: 'title', text: 'Telas Infinitas', level: 3 },
    { type: 'list', items: [
      '<strong>Joalharia Têxtil:</strong> Padrões intrincados para teares e pulseiras geométricas.',
      '<strong>Ponto de Cruz:</strong> Esquemas modernos prontos a ser bordados píxel a píxel.',
      '<strong>Mosaicos:</strong> Murais de grande escala utilizando tesselas cerâmicas simplificadas.',
      '<strong>Retro Gaming:</strong> Assets e sprites 8-bit autênticos em segundos.',
    ]},
    { type: 'stats', items: [
      { value: '10–100', label: 'Intervalo de largura de contas', icon: 'mdi:arrow-expand-horizontal' },
      { value: '2–32', label: 'Ranhuras de paleta de cores', icon: 'mdi:palette-swatch' },
      { value: 'K-Means', label: 'Algoritmo de quantização', icon: 'mdi:function-variant' },
      { value: 'ZIP', label: 'Formato de exportação (padrão + guia)', icon: 'mdi:zip-box' },
    ], columns: 4 },
    { type: 'paragraph', html: 'Numa era de ecrãs efémeros, criar algo físico é um ato revolucionário. Esta ferramenta não procura automatizar a arte, mas sim <strong>capacitar o artesão</strong>. Damos-lhe precisão computacional para que as suas mãos possam construir legados duradouros.' },
  ],
  faq,
  bibliography: [
    { name: 'Scikit-Image: Color Quantization using K-Means', url: 'https://scikit-learn.org/0.23/auto_examples/cluster/plot_color_quantization.html' },
    { name: 'Miyuki Delica Beads Specification', url: 'https://www.miyuki-beads.co.jp/english/seedbeads/delica.html' },
    { name: 'Visgraf Lab: Dithering Algorithms', url: 'https://www.visgraf.impa.br/Courses/ip00/proj/Dithering1/floyd_steinberg_dithering.html' },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
