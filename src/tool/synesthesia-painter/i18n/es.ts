import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SynesthesiaPainterLocaleContent } from '../index';

const slug = 'pintor-sinestesia';
const title = 'Pintor de Sinestesia';
const description = 'Visualiza tus palabras en color según la sinestesia grafema-color. Cada letra tiene su propio color, convirtiendo el texto en arte cromático.';

const faq: SynesthesiaPainterLocaleContent['faq'] = [
  {
    question: '¿Todos los sinestésicos ven los mismos colores para cada letra?',
    answer: 'No. Los colores sinestésicos son únicos para cada persona. Existen tendencias estadísticas (la A tiende a ser roja para muchos), pero no hay dos sinestésicos con exactamente la misma paleta. Esta herramienta usa los colores más frecuentemente reportados en estudios de población, no los "correctos".',
  },
  {
    question: '¿Puedo desarrollar sinestesia con el uso continuado de esta herramienta?',
    answer: 'No en el sentido neurológico estricto. La sinestesia genuina es una característica del sistema nervioso, no una habilidad aprendida. Sin embargo, el uso repetido de asociaciones color-letra sí puede crear memorias asociativas fuertes. Algunos estudios sugieren que practicar con estas asociaciones puede mejorar la memoria de textos.',
  },
  {
    question: '¿Para qué sirve el modo "Aura"?',
    answer: 'El modo Aura simula cómo algunos sinestésicos describen ver colores "flotando" o "brillando" alrededor de las letras en lugar de estar integrados en ellas. Crea una experiencia visual más atmosférica e inmersiva, especialmente sobre fondo oscuro.',
  },
  {
    question: '¿El modo "Puntos" tiene alguna base científica?',
    answer: 'Es una abstracción artística. Reduce el texto a su "esencia cromática" eliminando la forma reconocible de las letras. El resultado se parece a visualizaciones de datos cromáticos o a pinturas puntillistas, y permite ver la "firma de color" de un texto sin que el significado interfiera.',
  },
  {
    question: '¿Por qué algunas letras como la I y la O son blancas o negras?',
    answer: 'En los estudios de sinestesia, las vocales I y O, y la letra W, son frecuentemente descritas como blancas, transparentes o negras. Esta herramienta adapta esos colores al fondo activo: blanco sobre fondo oscuro, negro sobre fondo claro, para garantizar siempre visibilidad.',
  },
];

const howTo: SynesthesiaPainterLocaleContent['howTo'] = [
  { name: 'Escribir el texto', text: 'Haz clic en el área de escritura y empieza a escribir. Cada letra aparecerá coloreada según su asociación sinestésica estadística.' },
  { name: 'Cambiar el modo de visualización', text: 'Usa los botones de la esquina superior derecha para cambiar entre Letras (texto coloreado), Puntos (círculos de color) y Aura (letras luminosas con halo cromático).' },
  { name: 'Explorar diferentes textos', text: 'Escribe nombres, palabras en distintos idiomas o frases para descubrir su paleta cromática única. Las palabras largas crean gradientes visuales fascinantes.' },
  { name: 'Borrar y empezar de nuevo', text: 'Usa el botón "Borrar" en la barra inferior para limpiar el lienzo y explorar un nuevo texto.' },
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
  inLanguage: 'es',
};

export const content: SynesthesiaPainterLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  bibliographyTitle: 'Bibliografía de la Mente',
  ui: {
    title: 'Pintor de Sinestesia',
    description: 'Convierte tus palabras en arte cromático.',
    modeLetters: 'Letras',
    modeDots: 'Puntos',
    modeAura: 'Aura',
    placeholder: 'Escribe aquí...',
    footerText: 'Escribe para descubrir tu paleta de colores personal',
    clearBtn: 'Borrar',
    faqTitle: 'FAQ',
    bibliographyTitle: 'Referencias'
  },
  seo: [
    { type: 'title', text: '¿Qué es la sinestesia grafema-color y por qué fascina a la neurociencia?', level: 2 },
    { type: 'paragraph', html: 'La <strong>sinestesia</strong> es una condición neurológica en la que la activación de un sentido desencadena automáticamente una respuesta en otro. La variante más estudiada y prevalente es la <strong>sinestesia grafema-color</strong>: quienes la tienen perciben cada letra o número con un color intrínseco, constante y vivaz. No es imaginación ni metáfora; para un sinestésico, la "A" es roja de la misma forma que el fuego es caliente. La herramienta que tienes ante ti aplica una <em>paleta estadística</em> basada en los colores más frecuentemente reportados para cada grafema en estudios de población.' },
    { type: 'title', text: 'Neurología del fenómeno: la teoría del cross-activation', level: 3 },
    { type: 'paragraph', html: 'El modelo neurológico más aceptado para explicar la sinestesia grafema-color es el de la <strong>activación cruzada</strong> (<em>cross-activation</em>). Las áreas del córtex temporal involucradas en el reconocimiento de formas de letras (giro fusiforme) son anatómicamente adyacentes a las regiones que procesan el color (área V4). En personas con sinestesia, existe mayor conectividad estructural o funcional entre estas regiones, de modo que reconocer una letra activa también las neuronas de color. La investigación mediante neuroimagen funcional (fMRI) ha confirmado que los sinestésicos muestran activación genuina en V4 cuando leen texto, incluso cuando éste es monocromático.' },
    { type: 'tip', title: 'Los tres modos de visualización', html: '<strong>Letras:</strong> El texto original coloreado según su grafema. Ideal para ver la "melodía cromática" de un texto completo. <strong>Puntos:</strong> Cada carácter se convierte en un círculo de su color; el texto desaparece y queda solo la música de colores. <strong>Aura:</strong> Las letras emiten un halo de luz de su color, como si el texto brillara con energía propia.' },
    { type: 'title', text: 'Estadísticas y universales de color', level: 3 },
    { type: 'paragraph', html: 'Aunque los colores sinestésicos son únicos a cada individuo, los estudios de Simner et al. (2006) y Eagleman et al. (2007) encontraron patrones estadísticos significativos. La vocal <strong>A</strong> tiende a ser roja para la mayoría; la <strong>O</strong> es blanca o negra; la <strong>S</strong> aparece en tonos teal o verde; la <strong>E</strong> aparece como verde o blanca. Curiosamente, las asociaciones color-letra son más consistentes dentro de una cultura lingüística que entre culturas distintas, lo que sugiere un papel del aprendizaje temprano del alfabeto.' },
    { type: 'list', items: [
      '<strong>Prevalencia:</strong> Aproximadamente el 4% de la población tiene sinestesia grafema-color en alguna medida, aunque estudios más recientes elevan esta cifra al 6-8% cuando se incluyen formas subclínicas.',
      '<strong>Sesgo de género:</strong> La sinestesia es entre 3 y 6 veces más frecuente en mujeres que en hombres, aunque las causas de esta diferencia aún no están completamente explicadas.',
      '<strong>Heredabilidad:</strong> Tiene un componente genético claro: tiende a transmitirse en familias, aunque no siempre con el mismo tipo de sinestesia.',
      '<strong>Constancia:</strong> A diferencia de las asociaciones aprendidas, los colores sinestésicos son extraordinariamente estables a lo largo del tiempo. Estudios de seguimiento a 10 años demuestran más del 90% de consistencia en las asociaciones grafema-color.',
      '<strong>Sinestésicos famosos:</strong> Vladimir Nabokov, Wassily Kandinsky, Nikola Tesla y Billy Joel han descrito públicamente experiencias sinestésicas que influyeron en sus obras.',
    ]},
    { type: 'title', text: 'Arte y sinestesia: cuando los sentidos se fusionan', level: 3 },
    { type: 'paragraph', html: 'La sinestesia ha tenido una influencia profunda en el arte del siglo XX. <strong>Wassily Kandinsky</strong>, fundador del expresionismo abstracto, experimentaba tanto sinestesia grafema-color como música-color: escuchaba los instrumentos en colores (el amarillo era un trompetín, el azul profundo un chelo) y usó estas percepciones para crear su teoría del arte abstracto. Su obra <em>Composición IV</em> es inseparable de esta experiencia sensorial. En música, <strong>Alexander Scriabin</strong> compuso el <em>Prometheus: El Poema del Fuego</em> con una parte para "tastiera per luce" (teclado de luz), diseñada para proyectar los colores correspondientes a cada nota.' },
    { type: 'tip', title: 'Paleta cromática de esta herramienta', html: 'La asignación de colores está inspirada en los datos estadísticos más comunes de la literatura científica y en la tradición artística de la sinestesia. <strong>A → rojo</strong>, <strong>E → verde</strong>, <strong>I → blanco/negro según el fondo</strong>, <strong>O → negro/blanco</strong>, <strong>U → ámbar</strong>. Las consonantes siguen patrones menos uniformes, pero siempre se prioriza el contraste con el fondo para garantizar legibilidad.' },
    { type: 'title', text: 'Aplicaciones prácticas: diseño, música y terapia', level: 3 },
    { type: 'paragraph', html: 'Más allá de la curiosidad científica, la sinestesia grafema-color tiene aplicaciones concretas. En <strong>diseño tipográfico</strong>, entender estas asociaciones ayuda a elegir paletas de color para logotipos que "resuenen" con el nombre de la marca. En <strong>educación</strong>, se han desarrollado sistemas de aprendizaje del abecedario que usan los colores estadísticamente reportados para facilitar la memorización en niños pequeños. En <strong>musicoterapia</strong>, las visualizaciones sinestésicas se usan para ayudar a pacientes con afasia a reconectar con el lenguaje a través del canal visual-cromático.' },
    { type: 'stats', items: [
      { value: '4–8%', label: 'Población con sinestesia', icon: 'mdi:brain' },
      { value: '+90%', label: 'Consistencia de color a 10 años', icon: 'mdi:check-circle' },
      { value: '3–6×', label: 'Más frecuente en mujeres', icon: 'mdi:gender-female' },
      { value: '26+10', label: 'Letras y dígitos coloreados', icon: 'mdi:alphabetical' },
    ], columns: 4 },
  ],
  faq,
  bibliography: [
    { name: 'Simner et al. (2006) – Synaesthesia: The prevalence of atypical cross-modal experiences', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1626536/' },
    { name: 'Eagleman et al. (2007) – A standardized test battery for the study of synesthesia', url: 'https://www.sciencedirect.com/science/article/pii/S0010945207000087' },
    { name: 'Kandinsky, W. – De lo espiritual en el arte (1911)', url: 'https://es.wikipedia.org/wiki/De_lo_espiritual_en_el_arte' },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
