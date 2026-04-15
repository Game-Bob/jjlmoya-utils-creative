import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SynesthesiaPainterLocaleContent } from '../index';

const slug = 'pintor-de-sinestesia';
const title = 'Pintor de Sinestesia';
const description = 'Visualize a cor das palavras de acordo com a sinestesia grafema-cor. Cada letra tem a sua própria cor, transformando o texto em arte cromática.';

const faq: SynesthesiaPainterLocaleContent['faq'] = [
  {
    question: 'Todos os sinestetas veem as mesmas cores para cada letra?',
    answer: 'Não. As cores sinestésicas são únicas para cada pessoa. Existem tendências estatísticas (o A tende a ser vermelho para muitos), mas não há dois sinestetas com exatamente a mesma paleta. Esta ferramenta utiliza as cores relatadas com mais frequência em estudos populacionais, não as "corretas".',
  },
  {
    question: 'Posso desenvolver sinestesia ao usar esta ferramenta continuamente?',
    answer: 'Não no sentido neurológico estrito. A sinestesia genuína é uma característica do sistema nervoso, não uma habilidade aprendida. No entanto, o uso repetido de associações cor-letra pode criar memórias associativas fortes. Alguns estudos sugerem que praticar estas associações pode melhorar a memória do texto.',
  },
  {
    question: 'Para que serve o modo "Aura"?',
    answer: 'O modo Aura simula como alguns sinestetas descrevem ver cores "flutuando" ou "brilhando" ao redor das letras, em vez de integradas nelas. Cria uma experiência visual mais atmosférica e imersiva, especialmente num fundo escuro.',
  },
  {
    question: 'O modo "Pontos" tem alguma base científica?',
    answer: 'É uma abstração artística. Reduz o texto à sua "essência cromática" ao eliminar a forma reconhecível das letras. O resultado assemelha-se a visualizações de dados cromáticos ou pinturas pontilhistas, e permite ver a "assinatura de cor" de um texto sem a interferência do significado.',
  },
  {
    question: 'Por que algumas letras como I e O são brancas ou pretas?',
    answer: 'Em estudos de sinestesia, as vogais I e O, e a letra W, são frequentemente descritas como brancas, transparentes ou pretas. Esta ferramenta adapta essas cores ao fundo ativo: branco em fundo escuro, preto em fundo claro, para garantir sempre a visibilidade.',
  },
];

const howTo: SynesthesiaPainterLocaleContent['howTo'] = [
  { name: 'Escrever texto', text: 'Clique na área de escrita e comece a digitar. Cada letra aparecerá colorida de acordo com a sua associação sinestésica estatística.' },
  { name: 'Alterar modo de visualização', text: 'Use os botões no canto superior direito para alternar entre Letras (texto colorido), Pontos (círculos de cor) e Aura (letras luminosas com halos cromáticos).' },
  { name: 'Explorar diferentes textos', text: 'Escreva nomes, palavras em diferentes idiomas ou frases para descobrir a sua paleta cromática única. Palavras longas criam gradientes visuais fascinantes.' },
  { name: 'Limpar e começar de novo', text: 'Use o botão "Limpar" na barra inferior para esvaziar a tela e explorar um novo texto.' },
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

export const content: SynesthesiaPainterLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  bibliographyTitle: 'Bibliografia da Mente',
  ui: {
    title: 'Pintor de Sinestesia',
    description: 'Transforme as suas palavras em arte cromática.',
    modeLetters: 'Letras',
    modeDots: 'Pontos',
    modeAura: 'Aura',
    placeholder: 'Escreva aqui...',
    footerText: 'Digite para descobrir a sua paleta de cores pessoal',
    clearBtn: 'Limpar',
    faqTitle: 'FAQ',
    bibliographyTitle: 'Referências'
  },
  seo: [
    { type: 'title', text: 'O que é a Sinestesia Grafema Cor?', level: 2 },
    { type: 'paragraph', html: 'A <strong>sinestesia</strong> é uma condição neurológica em que a estimulação de um sentido desencadeia automaticamente uma resposta noutro. A variante mais estudada e prevalente é a <strong>sinestesia grafema-cor</strong>: quem a possui percebe cada letra ou número com uma cor intrínseca, constante e vívida. Não é imaginação ou metáfora; para um sinesteta, a letra "A" é vermelha da mesma forma que o fogo é quente. Esta ferramenta aplica uma <em>paleta estatística</em> baseada nas cores relatadas com mais frequência para cada grafema em estudos populacionais.' },
    { type: 'title', text: 'Neurociência: A Teoria da Ativação Cruzada', level: 3 },
    { type: 'paragraph', html: 'O modelo neurológico mais amplamente aceite para a sinestesia grafema-cor é a <strong>ativação cruzada</strong>. As áreas do córtex temporal envolvidas no reconhecimento das formas das letras (giro fusiforme) são anatomicamente adjacentes às regiões que processam a cor (área V4). Em pessoas com sinestesia, existe uma maior conectividade estrutural ou funcional entre estas regiões, pelo que reconhecer uma letra também ativa os neurónios da cor. A investigação por neuroimagem funcional (fMRI) confirmou que os sinestetas mostram uma ativação genuína em V4 ao ler texto, mesmo quando este é monocromático.' },
    { type: 'tip', title: 'Os Três Modos de Visualização', html: '<strong>Letras:</strong> O texto original colorido por grafema. Ideal para ver a "melodia cromática" de um texto completo. <strong>Pontos:</strong> Cada caractere torna-se um círculo da sua cor; o texto desaparece e resta apenas a música das cores. <strong>Aura:</strong> As letras emitem um halo da sua cor, como se o texto brilhasse com a sua própria energia.' },
    { type: 'title', text: 'Estatísticas e Universais da Cor', level: 3 },
    { type: 'paragraph', html: 'Embora as cores sinestésicas sejam únicas para cada indivíduo, estudos de Simner et al. (2006) e Eagleman et al. (2007) encontraram padrões estatísticos significativos. A vogal <strong>A</strong> tende a ser vermelha para a maioria; o <strong>O</strong> é branco ou preto; o <strong>S</strong> aparece em tons de cerceta ou verde; o <strong>E</strong> aparece como verde ou branco. Curiosamente, as associações cor-letra são mais consistentes dentro de uma cultura linguística do que entre diferentes culturas, sugerindo um papel para a aprendizagem precoce do alfabeto.' },
    { type: 'list', items: [
      '<strong>Prevalência:</strong> Aproximadamente 4% da população tem sinestesia grafema-cor em algum grau, embora estudos mais recentes elevem este valor para 6–8% quando formas subclínicas são incluídas.',
      '<strong>Viés de género:</strong> A sinestesia é 3 a 6 vezes mais comum em mulheres do que em homens, embora as causas desta diferença ainda não estejam totalmente explicadas.',
      '<strong>Hereditariedade:</strong> Tem uma componente genética clara: tende a ocorrer em famílias, embora nem sempre com o mesmo tipo de sinestesia.',
      '<strong>Consistência:</strong> Ao contrário das associações aprendidas, as cores sinestésicas são extraordinariamente estáveis ao longo do tempo. Estudos de acompanhamento de 10 anos demonstram mais de 90% de consistência nas associações grafema-cor.',
      '<strong>Sinestetas famosos:</strong> Vladimir Nabokov, Wassily Kandinsky, Nikola Tesla e Billy Joel descreveram publicamente experiências sinestésicas que influenciaram o seu trabalho.',
    ]},
    { type: 'stats', items: [
      { value: '4–8%', label: 'População com sinestesia', icon: 'mdi:brain' },
      { value: '90%+', label: 'Consistência de cor em 10 anos', icon: 'mdi:check-circle' },
      { value: '3–6×', label: 'Mais comum em mulheres', icon: 'mdi:gender-female' },
      { value: '26+10', label: 'Letras e dígitos coloridos', icon: 'mdi:alphabetical' },
    ], columns: 4 },
    { type: 'title', text: 'Arte e Sinestesia: Quando os Sentidos se Fundem', level: 3 },
    { type: 'paragraph', html: '<strong>Wassily Kandinsky</strong>, fundador do expressionismo abstrato, experimentou sinestesia tanto grafema-cor como música-cor: ouvia instrumentos em cores (o amarelo era um trompete, o azul profundo um violoncelo) e usou estas perceções para criar a sua teoria da arte abstrata. Na música, <strong>Alexander Scriabin</strong> compôs <em>Prometheus: The Poem of Fire</em> com uma parte para "tastiera per luce" (teclado de luz), projetado para projetar cores correspondentes a cada nota.' },
    { type: 'tip', title: 'Paleta de Cores Desta Ferramenta', html: 'As atribuições de cores são inspiradas nos dados estatísticos mais comuns na literatura científica. <strong>A → vermelho</strong>, <strong>E → verde</strong>, <strong>I → branco/preto dependendo do fundo</strong>, <strong>O → preto/branco</strong>, <strong>U → âmbar</strong>. As consoantes seguem padrões menos uniformes, mas o contraste com o fundo é sempre priorizado para garantir a legibilidade.' },
  ],
  faq,
  bibliography: [
    { name: 'Simner et al. (2006) – Synaesthesia: The prevalence of atypical cross-modal experiences', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1626536/' },
    { name: 'Eagleman et al. (2007) – A standardized test battery for the study of synesthesia', url: 'https://www.sciencedirect.com/science/article/pii/S0010945207000087' },
    { name: 'Kandinsky, W. – Do Espiritual na Arte (1911)', url: 'https://pt.wikipedia.org/wiki/Wassily_Kandinsky' },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
