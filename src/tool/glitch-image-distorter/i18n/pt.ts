import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { GlitchImageDistorterLocaleContent } from '../index';

const slug = 'distorcedor-imagens-glitch';
const title = 'Distorcedor de Imagens Glitch';
const description = 'Transforme suas fotos em arte glitch com separações RGB, linhas de varredura, pixel sorting e distorções animadas. Sem Photoshop.';

const faq: GlitchImageDistorterLocaleContent['faq'] = [
  {
    question: 'O que é arte glitch?',
    answer: 'A arte glitch é uma forma de expressão digital que consiste em manipular imagens ou dados para produzir erros visuais intencionais. Estes "glitches" geram cores fragmentadas, formas distorcidas e padrões imprevisíveis que criam uma estética de corrupção digital e caos.',
  },
  {
    question: 'Posso usar minhas próprias imagens?',
    answer: 'Sim! Você pode fazer upload de qualquer imagem PNG, JPG ou WebP, arrastá-la para a tela ou colá-la diretamente da área de transferência usando Ctrl+V. Também pode usar a imagem de exemplo.',
  },
  {
    question: 'O que fazem os diferentes efeitos de distorção?',
    answer: 'A Corrupção separa os canais RGB para um efeito de aberração cromática. A Interferência adiciona linhas de varredura semelhantes a monitores antigos com tremor opcional. O Pixel Sorting faz com que os píxeis brilhantes "escorram" numa direção. O Ruído Estático adiciona a clássica neve de TV.',
  },
  {
    question: 'Posso animar o efeito glitch?',
    answer: 'Com certeza! O modo "Animação Glitch" aplica micro-movimentos aleatórios aos parâmetros, criando um efeito vibrante e dinâmico que se repete continuamente. Pode exportá-lo como um GIF animado ou WebP.',
  },
  {
    question: 'Quais formatos posso exportar?',
    answer: 'Pode descarregar um PNG de alta qualidade para imagens estáticas, ou exportar como GIF ou WebP animado se ativou o modo de animação. Perfeito para o Instagram, Discord e outras plataformas.',
  },
  {
    question: 'Para que serve o botão Caos?',
    answer: 'O botão "Caos Aleatório" muda instantaneamente todos os valores dos controlos, gerando combinações de glitch inesperadas e surpreendentes. É ideal para explorar o potencial criativo da ferramenta sem ajustes manuais.',
  },
];

const howTo: GlitchImageDistorterLocaleContent['howTo'] = [
  { name: 'Carregar uma imagem', text: 'Arraste uma imagem, cole com Ctrl+V, faça upload do seu dispositivo ou use a imagem de exemplo para começar.' },
  { name: 'Ajustar os controlos', text: 'Use os controlos de Corrupção, Interferência, Pixel Sorting e Ruído para aplicar efeitos. A pré-visualização atualiza-se em tempo real.' },
  { name: 'Ativar a animação', text: 'Clique no botão "Animação Glitch" para adicionar vibrações e cintilações aleatórias. A imagem ganhará vida com um efeito dinâmico.' },
  { name: 'Exportar a criação', text: 'Descarregue como PNG para arte estática ou exporte como GIF/WebP se ativou a animação. Partilhe a sua arte glitch nas redes sociais!' },
  { name: 'Experimentar com o Caos', text: 'Clique no botão "Caos Aleatório" para descobrir automaticamente combinações de efeitos surpreendentes.' },
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

export const content: GlitchImageDistorterLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  ui: {
    title: 'Glitch Distorter',
    description: 'Crie arte glitch em segundos.',
    dragDropText: 'Arraste uma imagem aqui ou clique para carregar',
    pasteHint: 'Dica: Também pode colar uma imagem com Ctrl+V',
    exampleImageBtn: 'Usar imagem de exemplo',
    corruptionLabel: 'Corrupção (Separação RGB)',
    interferenceLabel: 'Interferência (Linhas)',
    tremorLabel: 'Tremor',
    pixelSortLabel: 'Pixel Sorting',
    pixelSortDirectionLabel: 'Direção',
    noiseLabel: 'Ruído Estático',
    animateBtn: 'Animação Glitch',
    chaosBtn: 'Caos Aleatório',
    downloadPngBtn: 'Descarregar PNG',
    downloadGifBtn: 'Descarregar GIF',
    undoBtn: 'Desfazer',
    redoBtn: 'Refazer',
    footerText: 'Crie arte digital corrompida em menos de 30 segundos',
    faqTitle: 'FAQ',
    bibliographyTitle: 'Referências'
  },
  seo: [
    { type: 'title', text: 'O que é Arte Glitch?', level: 2 },
    { type: 'paragraph', html: 'A <strong>arte glitch</strong> é uma prática criativa que explora intencionalmente erros digitais, dados corrompidos e artefactos visuais para produzir resultados estéticos. Ao contrário da arte tradicional, que procura a perfeição, o glitch celebra a beleza inesperada da falha tecnológica — cores fragmentadas e padrões caóticos que surgem do erro.' },
    { type: 'title', text: 'Origens e Estética Digital', level: 3 },
    { type: 'paragraph', html: 'Esta estética surgiu no início dos anos 2000, quando artistas digitais começaram a experimentar com ficheiros corrompidos e falhas de hardware. Artistas como <strong>Rosa Menkman</strong> elevaram o glitch à categoria de arte ao investigar a poética dos artefactos digitais. A estética nutre-se da degradação do VHS, dos erros de transmissão e do "ruído" dos sistemas digitais.' },
    { type: 'title', text: 'Técnicas Chave de Glitch', level: 3 },
    { type: 'list', items: [
      '<strong>Separação RGB:</strong> Desfasar os canais vermelho, verde e azul para criar aberração cromática.',
      '<strong>Linhas de Varredura:</strong> Simular as linhas horizontais dos antigos monitores CRT para um toque retro.',
      '<strong>Pixel Sorting:</strong> Ordenar píxeis por brilho e deslocá-los para criar um efeito de "derretimento".',
      '<strong>Data Moshing:</strong> Manipular dados de codecs de vídeo para misturar fotogramas de forma inesperada.',
      '<strong>Bit Shifting:</strong> Alterar dados binários diretamente para obter distorções geométricas dramáticas.',
    ]},
    { type: 'tip', title: 'A Filosofia do Glitch', html: 'A arte glitch desafia a ideia da representação digital "perfeita". Ao abraçar o erro, questionamos a fiabilidade da tecnologia e exploramos como esta media a nossa perceção da realidade. É arte sobre a falha do sistema e a beleza oculta no caos.' },
    { type: 'title', text: 'Aplicações Contemporâneas', level: 3 },
    { type: 'paragraph', html: 'Hoje em dia, a estética glitch está em todo o lado: capas de discos, videoclipes, moda e design gráfico. Esta ferramenta democratiza a criação deste estilo, permitindo que qualquer pessoa gere peças profissionais de corrupção digital sem conhecimentos técnicos profundos.' },
    { type: 'stats', items: [
      { value: '2000s', label: 'Aparição da arte glitch', icon: 'mdi:history' },
      { value: '∞', label: 'Combinações possíveis', icon: 'mdi:shuffle-variant' },
      { value: '<30s', label: 'Tempo de criação', icon: 'mdi:flash' },
      { value: '3+', label: 'Formatos de exportação', icon: 'mdi:download-multiple' },
    ], columns: 4 },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
