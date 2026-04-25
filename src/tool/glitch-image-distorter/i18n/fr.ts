import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { GlitchImageDistorterLocaleContent } from '../index';

const slug = 'distorsion-image-glitch';
const title = 'Distorsion d\'Image Glitch';
const description = 'Transformez vos images en art glitch avec séparations RGB, lignes de balayage, pixel sorting et distorsions animées. Sans Photoshop.';

const faq: GlitchImageDistorterLocaleContent['faq'] = [
  {
    question: 'Qu\'est-ce que l\'art glitch ?',
    answer: 'L\'art glitch est une forme d\'art numérique créée en manipulant des images ou des données pour produire des erreurs visuelles intentionnelles. Ces "glitchs" génèrent des couleurs fragmentées, des formes distordues et des motifs imprévisibles qui créent une esthétique de corruption numérique et de chaos.',
  },
  {
    question: 'Puis-je utiliser mes propres images ?',
    answer: 'Oui ! Vous pouvez télécharger n\'importe quelle image PNG, JPG ou WebP, la glisser-déposer sur le canevas, ou coller une image directement depuis votre presse-papiers avec Ctrl+V. Vous pouvez aussi utiliser l\'image d\'exemple.',
  },
  {
    question: 'Que font les différents effets de distorsion ?',
    answer: 'La Corruption sépare les canaux RGB pour un effet d\'aberration chromatique. L\'Interférence ajoute des lignes de balayage façon vieux moniteurs. Le Pixel Sorting fait "couler" les pixels brillants dans une direction choisie. Le Bruit Statique ajoute de la neige télévisuelle classique.',
  },
  {
    question: 'Puis-je animer l\'effet glitch ?',
    answer: 'Tout à fait ! Le mode "Animation Glitch" applique des micro-mouvements aléatoires aux paramètres, créant un effet vibrant et vivant qui boucle continuellement. Vous pouvez l\'exporter en GIF animé ou WebP.',
  },
  {
    question: 'Quels formats puis-je exporter ?',
    answer: 'Vous pouvez télécharger un PNG de haute qualité pour les images fixes, ou exporter en GIF ou WebP animé si vous avez activé le mode animation. Parfait pour Instagram, Discord ou d\'autres plateformes.',
  },
  {
    question: 'À quoi sert le bouton Chaos ?',
    answer: 'Le bouton "Chaos Aléatoire" randomise instantanément toutes les valeurs des curseurs, créant des combinaisons de glitch inattendues et surprenantes. C\'est l\'outil idéal pour explorer le potentiel créatif sans réglages manuels.',
  },
];

const howTo: GlitchImageDistorterLocaleContent['howTo'] = [
  { name: 'Charger une image', text: 'Glissez-déposez une image, collez-la avec Ctrl+V, importez-la depuis votre appareil ou cliquez sur "Utiliser l\'image d\'exemple" pour commencer.' },
  { name: 'Ajuster les curseurs', text: 'Utilisez les commandes de Corruption, Interférence, Pixel Sort et Bruit pour appliquer différents effets glitch. L\'aperçu se met à jour en temps réel.' },
  { name: 'Activer l\'animation', text: 'Basculez le bouton "Animation Glitch" pour ajouter des mouvements et des scintillements. L\'image s\'animera avec un effet glitch dynamique.' },
  { name: 'Exporter votre création', text: 'Téléchargez en PNG pour une œuvre statique, ou exportez en GIF/WebP si l\'animation est activée. Partagez votre art glitch sur les réseaux sociaux !' },
  { name: 'Expérimenter avec le Chaos', text: 'Cliquez sur le bouton "Chaos Aléatoire" pour découvrir automatiquement des combinaisons d\'effets surprenantes.' },
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
  inLanguage: 'fr',
};

export const content: GlitchImageDistorterLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Foire Aux Questions',
  ui: {
    title: 'Distorsion Glitch',
    description: 'Créez de l\'art glitch en quelques secondes.',
    dragDropText: 'Glissez-déposez une image ici ou cliquez pour importer',
    pasteHint: 'Astuce : Vous pouvez aussi coller une image avec Ctrl+V',
    exampleImageBtn: 'Utiliser l\'image d\'exemple',
    corruptionLabel: 'Corruption (Séparation RGB)',
    interferenceLabel: 'Interférence (Lignes)',
    tremorLabel: 'Tremblement',
    pixelSortLabel: 'Pixel Sorting',
    pixelSortDirectionLabel: 'Direction',
    noiseLabel: 'Bruit Statique',
    animateBtn: 'Animation Glitch',
    chaosBtn: 'Chaos Aléatoire',
    downloadPngBtn: 'Télécharger PNG',
    downloadGifBtn: 'Télécharger GIF',
    undoBtn: 'Annuler',
    redoBtn: 'Rétablir',
    footerText: 'Créez de l\'art numérique corrompu en moins de 30 secondes',
    faqTitle: 'FAQ',
    bibliographyTitle: 'Références'
  },
  seo: [
    { type: 'title', text: 'Qu\'est-ce que l\'Art Glitch ?', level: 2 },
    { type: 'paragraph', html: 'L\'<strong>art glitch</strong> est une pratique créative qui exploite intentionnellement les erreurs numériques, les données corrompues et les artefacts visuels pour produire des résultats esthétiques. Contrairement à l\'art traditionnel qui recherche la perfection, le glitch célèbre la beauté inattendue de la panne technologique — des couleurs fragmentées et des motifs chaotiques surgissant de l\'erreur.' },
    { type: 'title', text: 'Origines et Esthétique Numérique', level: 3 },
    { type: 'paragraph', html: 'L\'esthétique glitch est apparue au début des années 2000, lorsque des artistes numériques ont commencé à expérimenter avec des fichiers corrompus et des pannes matérielles. Des artistes comme <strong>Rosa Menkman</strong> ont élevé le glitch au rang d\'art en explorant la poétique des artefacts numériques. L\'esthétique s\'inspire de la dégradation VHS, des erreurs de transmission et du "bruit" des systèmes numériques.' },
    { type: 'title', text: 'Techniques Clés du Glitch', level: 3 },
    { type: 'list', items: [
      '<strong>Séparation RGB :</strong> Décaler les canaux rouge, vert et bleu pour créer une aberration chromatique.',
      '<strong>Lignes de balayage :</strong> Simuler les lignes horizontales des anciens moniteurs CRT pour un effet rétro.',
      '<strong>Pixel Sorting :</strong> Trier les pixels par luminosité et les décaler pour créer un effet de "fusion".',
      '<strong>Data Moshing :</strong> Manipuler les données des codecs vidéo pour mélanger les images de façon imprévisible.',
      '<strong>Bit Shifting :</strong> Altérer directement les données binaires pour obtenir des distorsions géométriques dramatiques.',
    ]},
    { type: 'tip', title: 'La Philosophie du Glitch', html: 'L\'art glitch remet en question l\'idée d\'une représentation numérique "parfaite". En acceptant l\'erreur, nous interrogeons la fiabilité de la technologie et explorons comment elle influence notre perception de la réalité. C\'est un art sur la défaillance du système et la beauté cachée dans le chaos.' },
    { type: 'title', text: 'Applications Contemporaines', level: 3 },
    { type: 'paragraph', html: 'Aujourd\'hui, l\'esthétique glitch est partout : pochettes d\'albums, clips, mode et design graphique. Cet outil démocratise la création de ce style, permettant à chacun de générer des pièces professionnelles de corruption numérique sans connaissances techniques approfondies.' },
    { type: 'stats', items: [
      { value: '2000s', label: 'Apparition de l\'art glitch', icon: 'mdi:history' },
      { value: '∞', label: 'Combinaisons possibles', icon: 'mdi:shuffle-variant' },
      { value: '<30s', label: 'Temps de création', icon: 'mdi:flash' },
      { value: '3+', label: 'Formats d\'exportation', icon: 'mdi:download-multiple' },
    ], columns: 4 },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
