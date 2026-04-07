import type { DiceRollerLocaleContent } from '../index';

export const content: DiceRollerLocaleContent = {
  slug: 'tirador-dados',
  title: 'Tirador de Dados',
  description: 'Simulador de dados virtual con bolsa personalizable, modificadores y historial de tiradas para tus juegos de rol y tablero.',
  faqTitle: 'Preguntas Frecuentes',
  bibliographyTitle: 'Bibliografía del Azar',
  ui: {
    title: 'Tirador de Dados',
    description: 'Que la suerte te acompañe.',
    rollBtn: 'Lanzar Dados',
    totalLabel: 'Total',
    historyLabel: 'Historial',
    clearHistoryBtn: 'Limpiar Historial',
    faqTitle: 'FAQ',
    bibliographyTitle: 'Referencias',
    addDiceLabel: 'Añadir dados a la bolsa',
    bagLabel: 'Bolsa de dados',
    emptyBagBtn: 'Vaciar',
    emptyBagText: 'Haz clic en los dados para añadirlos',
    modifierLabel: 'Modificador',
    rollManyLabel: 'Lanzar $COUNT dados',
    rollOneLabel: 'Lanzar $COUNT dado',
    preRollText: 'Añade dados y lanza',
    emptyHistoryText: 'El historial de tiradas aparecerá aquí'
  },
  seo: [
    { type: 'title', text: 'El arte de la aleatoriedad: historia y matemáticas de los dados', level: 2 },
    { type: 'paragraph', html: 'Los dados son uno de los generadores de azar más antiguos de la humanidad. Los <strong>astrágalos</strong> —huesos de tobillo de ovejas y cabras— se usaban ya en el 5000 a.C. como primitivos dados de cuatro caras en Mesopotamia y Egipto. Pero la evolución desde el hueso tallado hasta el icosaedro de resina epoxi moderno no es solo estética: es un viaje a través de la teoría de probabilidades y el diseño de mecanismos de juego.' },
    { type: 'title', text: 'La familia estándar de dados', level: 3 },
    { type: 'paragraph', html: 'El conjunto de dados más extendido en los juegos de rol —popularizado por <strong>Dungeons &amp; Dragons</strong> en 1974— está compuesto por los cinco sólidos platónicos más dos formas adicionales: d4 (tetraedro), d6 (cubo), d8 (octaedro), d10 (pentagonal trapezoedro), d12 (dodecaedro), d20 (icosaedro) y d100 (dado percentil). Cada poliedro garantiza una distribución uniforme: todas las caras tienen exactamente la misma probabilidad de caer.' },
    { type: 'list', items: [
      '<strong>d4 – Tetraedro:</strong> El más lesivo si lo pisas descalzo. Cuatro caras triangulares, probabilidad de 25% por cara. Muy usado para daño de daga o hechizos de bajo nivel.',
      '<strong>d6 – Cubo:</strong> El dado más universal. Presente en todos los juegos de mesa desde el senet egipcio. Su geometría cúbica garantiza perfecta equidistribución.',
      '<strong>d8 – Octaedro:</strong> El dado de la lanza o el hacha de batalla. Ocho caras triangulares equiláteras. Probabilidad de 12,5% por cara.',
      '<strong>d10 – Trapezoedro pentagonal:</strong> El único no platónico del set estándar. Dos caras opuestas por "vértice". Esencial para el d100 (dos d10 combinados).',
      '<strong>d12 – Dodecaedro:</strong> El dado del bárbaro. Doce caras pentagonales. Infravalorado en muchos sistemas, protagonista en Barbarian de D&D 5e.',
      '<strong>d20 – Icosaedro:</strong> El rey del rol. Veinte caras triangulares. Protagonista del sistema d20 de D&D: determina éxito o fracaso de casi todas las acciones.',
      '<strong>d100 – Percentil:</strong> Dos d10 combinados (decenas + unidades). Define probabilidades finas en sistemas como Call of Cthulhu o Warhammer Fantasy.',
    ]},
    { type: 'title', text: 'Probabilidades y curvas de distribución', level: 3 },
    { type: 'paragraph', html: 'Cuando lanzas un único dado, obtienes una <strong>distribución uniforme discreta</strong>: cada resultado tiene exactamente la misma probabilidad (1/n). Pero en cuanto combinas múltiples dados, la magia matemática transforma esa curva plana en una <strong>distribución normal aproximada</strong>. Por eso 2d6 no es lo mismo que 1d12: con dos dados de seis la probabilidad de obtener 7 es 6/36 ≈ 16,7%, mientras que los extremos (2 y 12) solo ocurren el 2,8% del tiempo.' },
    { type: 'tip', title: 'Ventaja y Desventaja (sistema D&D 5e)', html: 'El mecanismo de <strong>Ventaja</strong> consiste en lanzar 2d20 y quedarse con el mayor resultado. Matemáticamente, esto sube la media de 10,5 a aproximadamente 13,8. La <strong>Desventaja</strong> hace lo contrario: toma el menor, bajando la media a unos 7,2. Nuestro tirador te permite simular esto añadiendo dos d20 a la bolsa y comparando los resultados individualmente.' },
    { type: 'title', text: 'Modificadores: el puente entre dados y personaje', level: 3 },
    { type: 'paragraph', html: 'En la mayoría de sistemas de rol, el dado no actúa solo: se suma o resta un <strong>modificador</strong> que representa las habilidades del personaje. En D&D 5e, un modificador de Fuerza +5 significa que lanzas 1d20, sumas 5, y compruebas el resultado contra la Clase de Armadura del enemigo. Nuestro tirador incorpora un control de modificador para reflejar fielmente estas mecánicas.' },
    { type: 'title', text: 'Integridad aleatoria: ¿son justos los dados digitales?', level: 3 },
    { type: 'paragraph', html: 'El método <code>Math.random()</code> de JavaScript utiliza un algoritmo <strong>xorshift128+</strong> (en los motores V8 modernos), que produce valores pseudoaleatorios con un período de 2¹²⁸. Para los propósitos del juego de mesa y del rol, esta calidad estadística es completamente suficiente. De hecho, supera en uniformidad a un dado físico mal equilibrado. La crítica principal es que no es criptográficamente seguro (no deberías usar <code>Math.random()</code> para claves de seguridad), pero para determinar si tu Ladrón roba con éxito es más que adecuado.' },
    { type: 'tip', title: 'Bolsa de dados y notación estándar', html: 'La notación <strong>XdY+Z</strong> es el estándar de facto en juegos de rol: X dados de Y caras con modificador Z. "3d6+2" significa lanzar tres dados de seis y sumar 2 al total. Nuestra herramienta utiliza esta notación en el historial para que puedas compartir o anotar tus tiradas fácilmente.' },
    { type: 'stats', items: [
      { value: '5000 a.C.', label: 'Primeros dados (astrágalos)', icon: 'mdi:history' },
      { value: '1974', label: 'D&D popularizó el set', icon: 'mdi:sword' },
      { value: '7 tipos', label: 'Dados estándar de rol', icon: 'mdi:dice-multiple' },
      { value: '2¹²⁸', label: 'Período del aleatorio JS', icon: 'mdi:function-variant' },
    ], columns: 4 },
    { type: 'glossary', items: [
      { term: 'Crítico', definition: 'Obtener el valor máximo en un dado (ej. sacar 20 en un d20). Normalmente activa efectos especiales de bonificación en la mayoría de sistemas.' },
      { term: 'Pifia / Nat 1', definition: 'Sacar el valor mínimo (1) en un dado. A menudo resulta en un fallo dramático o consecuencia negativa.' },
      { term: 'Bolsa de dados', definition: 'Conjunto de dados lanzados simultáneamente. La bolsa en nuestra herramienta muestra cada tipo de dado agrupado por cantidad (ej. 3d6 + 2d8).' },
      { term: 'Modificador', definition: 'Número fijo que se suma o resta al resultado de un dado, representando la habilidad o atributo de un personaje.' },
      { term: 'Tirada percentil', definition: 'Tirada usando dos d10 para producir un resultado del 1 al 100, usada en sistemas de habilidades basados en porcentajes.' },
    ]},
  ],
  faq: [
    {
      question: '¿Cómo puedo simular una tirada con ventaja (D&D)?',
      answer: 'Añade dos dados d20 a la bolsa haciendo clic dos veces en el botón d20. Al lanzar, observa los dos resultados individuales y quédate con el mayor. El total mostrado será la suma, pero puedes ver cada dado por separado en el desglose de resultados.',
    },
    {
      question: '¿Qué significa el color verde o rojo en los resultados?',
      answer: 'Los resultados en verde indican que ese dado ha sacado su valor máximo posible (un "crítico"). Los resultados en rojo indican el valor mínimo (un "1", el peor resultado posible). Esto facilita identificar críticos y pifias de un vistazo.',
    },
    {
      question: '¿Puedo añadir varios dados del mismo tipo?',
      answer: 'Sí. Cada clic en un dado lo añade a la bolsa. Si haces clic tres veces en d6, la bolsa mostrará "3d6". Para reducir la cantidad, haz clic en el botón "−" que aparece junto a cada grupo de dados en la bolsa.',
    },
    {
      question: '¿Los dados digitales son tan aleatorios como los físicos?',
      answer: 'Estadísticamente, sí. Los motores JavaScript modernos usan algoritmos pseudoaleatorios (xorshift128+) con distribución uniforme de muy alta calidad. Un dado físico real puede tener pequeñas imperfecciones de fabricación que sesguen los resultados; el dado digital no tiene ese problema.',
    },
    {
      question: '¿Qué es el d100 y cómo se usa?',
      answer: 'El d100 (o d%) genera un número del 1 al 100 y se usa en sistemas de juego basados en porcentajes, como Call of Cthulhu o Warhammer Fantasy Roleplay. Representa "probabilidad directa": si tu habilidad de Sigilo es 65%, necesitas sacar 65 o menos para tener éxito.',
    },
  ],
  bibliography: [
    { name: 'D&D Beyond – Reglas de mecánicas de dados', url: 'https://www.dndbeyond.com/sources/basic-rules/using-ability-scores' },
    { name: 'Roll20 – Virtual tabletop y sistemas de dados', url: 'https://roll20.net/' },
    { name: 'Pathfinder – Sistema d20 de referencia', url: 'https://paizo.com/pathfinder' },
  ],
  howTo: [
    { name: 'Construir la bolsa de dados', text: 'Haz clic en los botones de dado (d4, d6, d8...) para añadirlos a tu bolsa. Cada clic añade un dado del tipo seleccionado. Puedes mezclar tipos distintos en la misma tirada.' },
    { name: 'Ajustar el modificador', text: 'Usa los botones "+" y "−" junto al modificador para aplicar bonificaciones o penalizaciones (como el modificador de habilidad en D&D). El modificador se suma automáticamente al total.' },
    { name: 'Lanzar los dados', text: 'Pulsa el botón "Lanzar dados". El panel derecho muestra el total final y el desglose de cada dado individual, con los críticos (máximo) en verde y las pifias (mínimo) en rojo.' },
    { name: 'Consultar el historial', text: 'Cada tirada queda registrada en el historial con la expresión de dados usada, el resultado total y la hora exacta. Puedes limpiar el historial con el botón correspondiente.' },
  ],
  schemas: []
};
