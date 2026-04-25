import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { GlitchImageDistorterLocaleContent } from '../index';

const slug = 'distorsionador-imagenes-glitch';
const title = 'Distorsionador de Imágenes Glitch';
const description = 'Transforma tus fotos en arte glitch con separaciones RGB, líneas de escaneo, pixel sorting y distorsiones animadas. Sin Photoshop.';

const faq: GlitchImageDistorterLocaleContent['faq'] = [
  {
    question: '¿Qué es el arte glitch?',
    answer: 'El arte glitch es una forma de expresión digital que consiste en manipular imágenes o datos para producir errores visuales intencionados. Estos "glitches" generan colores fragmentados, formas distorsionadas y patrones impredecibles que crean una estética de corrupción digital y caos.',
  },
  {
    question: '¿Puedo usar mis propias imágenes?',
    answer: '¡Sí! Puedes subir cualquier imagen en formato PNG, JPG o WebP, arrastrarla y soltarla en el lienzo, o pegarla directamente desde el portapapeles usando Ctrl+V. También tienes disponible una imagen de ejemplo para explorar la herramienta.',
  },
  {
    question: '¿Qué hacen los diferentes efectos de distorsión?',
    answer: 'La Corrupción separa los canales RGB para un efecto de aberración cromática. La Interferencia añade líneas de escaneo similares a monitores antiguos con temblor opcional. El Pixel Sorting hace que los píxeles brillantes "goteen" en una dirección. El Ruido Estático añade la clásica nieve de televisor.',
  },
  {
    question: '¿Puedo animar el efecto glitch?',
    answer: '¡Claro! El modo "Animación Glitch" aplica movimientos aleatorios sutiles a los parámetros, creando un efecto vibrante y dinámico que se repite continuamente. Puedes exportarlo como un GIF animado o WebP para redes sociales.',
  },
  {
    question: '¿En qué formatos puedo exportar?',
    answer: 'Puedes descargar un PNG de alta calidad para imágenes estáticas, o exportar como GIF o WebP animado si activaste el modo de animación. Estos formatos son perfectos para compartir en Instagram, Discord y otras plataformas.',
  },
  {
    question: '¿Para qué sirve el botón Caos?',
    answer: 'El botón "Caos Aleatorio" cambia instantáneamente todos los valores de los controles, generando combinaciones de glitch inesperadas y sorprendentes. Es ideal para explorar el potencial creativo de la herramienta sin ajustes manuales.',
  },
];

const howTo: GlitchImageDistorterLocaleContent['howTo'] = [
  { name: 'Carga una imagen', text: 'Arrastra y suelta una imagen, pégala con Ctrl+V, súbela desde tu dispositivo o usa la imagen de ejemplo para empezar de inmediato.' },
  { name: 'Ajusta los efectos', text: 'Usa los controles de Corrupción, Interferencia, Pixel Sorting y Ruido para aplicar diferentes efectos. La vista previa se actualiza en tiempo real.' },
  { name: 'Activa la animación', text: 'Pulsa el botón "Animación Glitch" para añadir vibraciones y parpadeos aleatorios. La imagen cobrará vida con un efecto glitch dinámico.' },
  { name: 'Exporta tu creación', text: 'Descarga como PNG para arte estático o exporta como GIF/WebP si activaste la animación. ¡Comparte tu arte glitch en redes sociales!' },
  { name: 'Experimenta con el Caos', text: 'Haz clic en el botón "Caos Aleatorio" para descubrir combinaciones de efectos sorprendentes de forma automática.' },
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

export const content: GlitchImageDistorterLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  ui: {
    title: 'Distorsionador Glitch',
    description: 'Crea arte glitch en segundos.',
    dragDropText: 'Arrastra una imagen aquí o haz clic para subir',
    pasteHint: 'Truco: También puedes pegar una imagen con Ctrl+V',
    exampleImageBtn: 'Usar imagen de ejemplo',
    corruptionLabel: 'Corrupción (Separación RGB)',
    interferenceLabel: 'Interferencia (Líneas)',
    tremorLabel: 'Temblor',
    pixelSortLabel: 'Pixel Sorting',
    pixelSortDirectionLabel: 'Dirección',
    noiseLabel: 'Ruido Estático',
    animateBtn: 'Animación Glitch',
    chaosBtn: 'Caos Aleatorio',
    downloadPngBtn: 'Descargar PNG',
    downloadGifBtn: 'Descargar GIF',
    undoBtn: 'Deshacer',
    redoBtn: 'Rehacer',
    footerText: 'Crea arte digital corrupto en menos de 30 segundos',
    faqTitle: 'FAQ',
    bibliographyTitle: 'Referencias'
  },
  seo: [
    { type: 'title', text: '¿Qué es el Arte Glitch?', level: 2 },
    { type: 'paragraph', html: 'El <strong>arte glitch</strong> es una práctica creativa que explota intencionadamente los errores digitales, los datos corruptos y los artefactos visuales para producir resultados estéticos. A diferencia del arte tradicional, que busca la perfección, el glitch celebra la belleza inesperada del fallo tecnológico: colores fragmentados y patrones caóticos que surgen del error.' },
    { type: 'title', text: 'Orígenes y Estética Digital', level: 3 },
    { type: 'paragraph', html: 'Esta estética surgió a principios de los 2000, cuando artistas digitales empezaron a experimentar con archivos corruptos y fallos de hardware. Artistas como <strong>Rosa Menkman</strong> elevaron el glitch a la categoría de arte mediante la investigación de la poética de los artefactos digitales. La estética se nutre de la degradación del VHS, los errores de transmisión y el "ruido" de los sistemas digitales.' },
    { type: 'title', text: 'Técnicas Clave de Glitch', level: 3 },
    { type: 'list', items: [
      '<strong>Separación RGB:</strong> Desfasar los canales rojo, verde y azul para crear aberración cromática.',
      '<strong>Líneas de Escaneo:</strong> Simular las líneas horizontales de los antiguos monitores CRT para un toque retro.',
      '<strong>Pixel Sorting:</strong> Ordenar píxeles por brillo y desplazarlos para crear un efecto de "derretido".',
      '<strong>Data Moshing:</strong> Manipular datos de códecs de vídeo para mezclar fotogramas de forma inesperada.',
      '<strong>Bit Shifting:</strong> Alterar datos binarios directamente para obtener distorsiones geométricas dramáticas.',
    ]},
    { type: 'tip', title: 'La Filosofía del Glitch', html: 'El arte glitch desafía la idea de la representación digital "perfecta". Al abrazar el error, cuestionamos la fiabilidad de la tecnología y exploramos cómo ésta media en nuestra percepción de la realidad. Es arte sobre el fallo del sistema y la belleza oculta en el caos.' },
    { type: 'title', text: 'Aplicaciones Contemporáneas', level: 3 },
    { type: 'paragraph', html: 'Hoy en día, la estética glitch está en todas partes: portadas de discos, videoclips, moda y diseño gráfico. Esta herramienta democratiza la creación de este estilo, permitiendo que cualquiera genere piezas profesionales de corrupción digital sin conocimientos técnicos profundos.' },
    { type: 'stats', items: [
      { value: '2000s', label: 'Aparición del arte glitch', icon: 'mdi:history' },
      { value: '∞', label: 'Combinaciones posibles', icon: 'mdi:shuffle-variant' },
      { value: '<30s', label: 'Tiempo de creación', icon: 'mdi:flash' },
      { value: '3+', label: 'Formatos de exportación', icon: 'mdi:download-multiple' },
    ], columns: 4 },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
