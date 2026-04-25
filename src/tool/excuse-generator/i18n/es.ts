import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { ExcuseGeneratorLocaleContent } from '../index';

const slug = 'generador-excusas';
const title = 'Generador de Excusas';
const description = 'Máquina de azar semántica para librarte de compromisos con estilo.';

const faq: ExcuseGeneratorLocaleContent['faq'] = [
  {
    question: '¿Puede este generador salvar mi matrimonio?',
    answer: 'Aunque no somos terapeutas, evitar esa cena con los suegros utilizando una emergencia técnica plausible puede reducir la tensión significativamente.'
  },
  {
    question: '¿Por qué frases tan surrealistas?',
    answer: 'La estrategia se basa en la Disonancia Cognitiva. Si dices algo aburrido es comprobable. Si dices algo absurdo, la sorpresa bloquea la capacidad de enfado.'
  }
];

const howTo: ExcuseGeneratorLocaleContent['howTo'] = [
  { name: 'Generar', text: 'Pulsa el botón de generar para crear una nueva excusa.' },
  { name: 'Copiar', text: 'Haz clic en el botón de copiar para llevar la excusa a tu portapapeles.' }
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

export const content: ExcuseGeneratorLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  ui: {
    title: 'Generador de Excusas Surrealistas',
    description: 'Calculadora de coartadas de última generación.',
    subjectLabel: 'Sujeto',
    actionLabel: 'Acción',
    victimLabel: 'Víctima',
    generateBtn: 'GENERAR EXCUSA',
    copyBtn: 'Copiar esta locura',
    copied: '¡Copiado!',
    starts: JSON.stringify([
      "Mi gato", "Mi abuela", "El presidente", "Un alienígena", "Mi vecino del quinto",
      "El wifi", "Mi horóscopo", "Un viajero del tiempo", "La lavadora", "Mi nevera",
      "El espíritu de la navidad", "Mi sombra", "Un ninja", "La policía vegana", "Siri",
      "Mi planta carnívora", "El repartidor de Amazon", "Mi clon malvado", "Un mago", "Godzilla"
    ]),
    middles: JSON.stringify([
      "ha declarado la guerra a", "se ha comido", "ha secuestrado a", "ha prendido fuego a",
      "está organizando una fiesta en", "ha vomitado sobre", "se niega a abandonar",
      "ha hackeado", "ha robado", "se ha enamorado de", "está meditando sobre",
      "ha lanzado un hechizo a", "está protestando contra", "ha fundado una secta en",
      "está bailando samba en", "ha invocado a un demonio en", "ha bloqueado el acceso a",
      "ha convertido en oro", "está intentando vender", "ha escrito un libro sobre"
    ]),
    ends: JSON.stringify([
      "mis llaves de casa.", "mi voluntad de vivir.", "la puerta del garaje.",
      "mis pantalones favoritos.", "el router del salón.", "mi único par de zapatos.",
      "las leyes de la física.", "mi dignidad.", "el ascensor del edificio.",
      "mi cuenta de Netflix.", "mi cepillo de dientes.", "las escrituras de mi casa.",
      "mi colección de tazos.", "el freno de mano del coche.", "mis ganas de socializar.",
      "mi reserva de café.", "la tapa del inodoro.", "el mando de la tele.",
      "mis calcetines de la suerte.", "la civilización occidental."
    ])
  },
  seo: [
    { type: 'title', text: 'El Arte Científico de la Excusa Perfecta', level: 2 },
    { type: 'paragraph', html: 'Vivimos en la era de la hiperconexión. Tu teléfono vibra, tu reloj te notifica, y tu agenda social parece un juego de Tetris a punto de perder. La presión por decir "sí" a todo ha creado una epidemia de agotamiento social.' },
    { type: 'title', text: 'El Renacimiento del JOMO (Joy of Missing Out)', level: 3 },
    { type: 'paragraph', html: 'Mientras que el FOMO (Fear of Missing Out) dominó la década pasada, los expertos en bienestar digital ahora abogan por el <strong>JOMO: El Placer de Perderse Cosas</strong>. No se trata de aislamiento, sino de intencionalidad.' },
    { type: 'tip', title: 'La Fórmula de la Coartada Irrefutable', html: '<strong>El Sujeto Disociado:</strong> Nunca eres tú el culpable. Es "el wifi", "mi gato", "el universo". Desplaza la culpa hacia un ente externo.<br><strong>La Acción Hiperbólica:</strong> La situación debe ser lo suficientemente absurda o técnica como para que nadie pida detalles.<br><strong>El Bloqueo Físico:</strong> El resultado final debe ser binario: o voy o me quedo.' },
    { type: 'title', text: 'Historia Breve de la Excusa', level: 3 },
    { type: 'list', items: [
      '<strong>Edad Media:</strong> "Mi caballo ha perdido una herradura" (Un clásico atemporal).',
      '<strong>Revolución Industrial:</strong> "La máquina de vapor se ha sobrecalentado".',
      '<strong>Era Digital:</strong> "Se me ha caído internet justo en medio de una actualización".'
    ]},
    { type: 'stats', items: [
      { value: '20', label: 'Sujetos posibles', icon: 'mdi:account-multiple' },
      { value: '20', label: 'Acciones disponibles', icon: 'mdi:lightning-bolt' },
      { value: '20', label: 'Desenlaces distintos', icon: 'mdi:door-open' },
      { value: '8.000', label: 'Combinaciones posibles', icon: 'mdi:shuffle-variant' },
    ], columns: 4 },
    { type: 'proscons', items: [
      { pro: 'Alivia la presión social al instante', con: 'El uso excesivo erosiona la confianza' },
      { pro: 'Protege tu energía y tus límites personales', con: 'Puede generar culpa si se usa sin cuidado' },
      { pro: 'El tono creativo y humorístico difunde la tensión', con: 'No apta para contextos formales o profesionales' },
    ]},
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
