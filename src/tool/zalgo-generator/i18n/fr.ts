import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ZalgoGeneratorLocaleContent } from '../index';

const slug = 'generateur-zalgo';
const title = 'Générateur Zalgo';
const description = 'Corrompez vos messages avec une cascade de caractères Unicode débordants. Ajustez l\'intensité et la direction de l\'effet glitch.';

const faq: ZalgoGeneratorLocaleContent['faq'] = [
  { question: 'Qu\'est-ce que le texte Zalgo ?', answer: 'C\'est un type de texte qui utilise excessivement les caractères de combinaison Unicode (diacritiques). Lorsqu\'ils sont empilés verticalement, ces caractères "débordent" de leur ligne d\'origine, créant un effet visuel de corruption, de désordre ou d\'horreur populaire dans la culture internet.' },
  { question: 'Pourquoi le texte Zalgo a-t-il l\'air si étrange ?', answer: 'Il exploite une fonctionnalité de la norme Unicode qui permet d\'ajouter des marques au-dessus, en dessous ou à travers une lettre de base. Comme il n\'y a pas de limite stricte au nombre de marques pouvant être ajoutées, le texte peut "envahir" les lignes supérieures ou inférieures.' },
  { question: 'Puis-je utiliser ce texte sur les réseaux sociaux ?', answer: 'Oui, la plupart des plateformes modernes (Instagram, Twitter, Discord) prennent en charge l\'Unicode. Cependant, certains réseaux ou appareils peuvent filtrer ou tronquer les caractères excédentaires à très haute intensité pour maintenir la lisibilité de l\'interface.' },
  { question: 'Comment puis-je supprimer l\'effet Zalgo d\'un texte ?', answer: 'Pour nettoyer un texte corrompu, vous pouvez utiliser la normalisation de chaîne JavaScript ou simplement le coller dans un éditeur de texte basique qui n\'accepte que le texte brut. Notre outil est purement créatif et n\'endommage pas le contenu original.' },
];

const howTo: ZalgoGeneratorLocaleContent['howTo'] = [
  { name: 'Écrire le message de base', text: 'Entrez le texte que vous souhaitez "corrompre" dans la zone de texte principale.' },
  { name: 'Ajuster l\'intensité du chaos', text: 'Déplacez le curseur pour définir le nombre de caractères de combinaison à empiler. Plus l\'intensité est élevée, plus il est difficile à lire.' },
  { name: 'Sélectionner la direction du débordement', text: 'Choisissez si la corruption doit croître vers le haut, vers le bas ou dans toutes les directions simultanément.' },
  { name: 'Copier le résultat', text: 'Cliquez sur le bouton de copie. Le texte résultant inclut tous les octets invisibles nécessaires pour maintenir l\'effet glitch.' },
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

export const content: ZalgoGeneratorLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquemment Posées',
  bibliographyTitle: 'Bibliographie du Chaos',
  ui: {
    title: 'Générateur Zalgo',
    description: 'T̴o̴u̴t̴ ̴e̸s̶t̶ ̶c̶o̷r̵r̶o̸m̵p̶u̸',
    inputPlaceholder: 'Écrivez votre message normal ici...',
    intensityLabel: 'Niveau de Corruption',
    outputLabel: 'Résultat Corrompu',
    copyBtn: 'Copier le Chaos',
    copied: 'Copié !',
    faqTitle: 'FAQ',
    bibliographyTitle: 'Références',
    configTitle: 'Configuration',
    intensity: 'Intensité',
    upLabel: 'Corruption Supérieure',
    midLabel: 'Bruit Central',
    downLabel: 'Corruption Inférieure',
    resetBtn: 'Réinitialiser les Valeurs',
    warningText: 'AVERTISSEMENT : Le texte Zalgo utilise des caractères combinés Unicode qui peuvent déborder visuellement de leur conteneur. À utiliser avec précaution sur les réseaux sociaux.',
    previewLabel: 'Aperçu en Temps Réel',
    emptyLabel: 'Vide',
    charLabel: 'CARACTÈRES',
    noteText: 'Note : Certains navigateurs peuvent limiter le rendu des caractères combinés'
  },
  seo: [
    { type: 'title', text: 'Qu\'est-ce que le Texte Zalgo et comment fonctionne la corruption visuelle ?', level: 2 },
    { type: 'paragraph', html: 'Le texte Zalgo est une forme de manipulation typographique qui exploite une fonctionnalité spécifique de la norme Unicode : les <strong>caractères de combinaison</strong>. Contrairement aux caractères normaux, ces diacritiques ne prennent pas d\'espace horizontal — ils s\'empilent verticalement sur la lettre de base, créant ce "chaos numérique" ou cette esthétique "d\'horreur cosmique" si populaire dans la culture internet.' },
    { type: 'title', text: 'Anatomie du Processus', level: 3 },
    { type: 'paragraph', html: 'Notre générateur traite chaque caractère indépendamment, injectant des rafales aléatoires de points de code Unicode dans trois vecteurs distincts : <strong>supérieur</strong> (diacritiques qui s\'empilent au-dessus), <strong>médian</strong> (qui traversent la lettre) et <strong>inférieur</strong> (qui pendent en dessous).' },
    { type: 'tip', title: 'Algorithme de Corruption', html: 'Pour chaque caractère de base, un calcul <code>nombre = intensité × 30</code> est effectué. Ce nombre de diacritiques aléatoires est ajouté dans chaque vecteur. À une intensité de 1,5, vous pouvez obtenir jusqu\'à 45 caractères de combinaison par lettre.' },
    { type: 'title', text: 'Étiquette et Applications', level: 3 },
    { type: 'list', items: [
      '<strong>Réseaux Sociaux :</strong> Attirez l\'attention sur Instagram ou TikTok. Parfait pour les biographies cherchant à rompre avec la convention.',
      '<strong>Narration d\'Horreur :</strong> Dramatisez des récits de fiction, des creepypastas ou des simulations de systèmes compromis.',
      '<strong>Accessibilité :</strong> Attention — le texte Zalgo est illisible par les lecteurs d\'écran. Utilisez-le uniquement comme décoration visuelle, jamais pour un contenu critique.',
      '<strong>SEO :</strong> N\'utilisez jamais de texte Zalgo dans vos mots-clés principaux (H1, méta-titres). Les robots d\'indexation peuvent échouer à normaliser ces caractères.',
    ]},
    { type: 'title', text: 'L\'Origine : De Something Awful à l\'Art Glitch', level: 3 },
    { type: 'paragraph', html: 'Zalgo n\'a pas commencé comme un générateur, mais comme une intervention dans des bandes dessinées classiques. L\'utilisateur Shmorky, au milieu des années 2000, a commencé à déformer des personnages comme Nancy ou Archie, en ajoutant des taches et des distorsions. La phrase <strong>"Il arrive"</strong> (He comes) a scellé le destin de ces œuvres, annonçant l\'arrivée d\'une entité qui dévorait la réalité.' },
    { type: 'glossary', items: [
      { term: 'Caractère de Combinaison', definition: 'Un point de code Unicode conçu pour être placé au-dessus, en dessous ou à travers un caractère de base. Utilisé légitimement dans des langues comme l\'arabe, le vietnamien et le hindi.' },
      { term: 'Diacritique', definition: 'Une marque ajoutée à une lettre de base pour modifier sa prononciation ou sa signification. Zalgo en abuse pour créer un débordement visuel.' },
      { term: 'Bloc Unicode', definition: 'Une plage contiguë de points de code Unicode. Les caractères Zalgo proviennent principalement du bloc "Combining Diacritical Marks" (U+0300–U+036F).' },
      { term: 'Art Glitch', definition: 'Une esthétique qui incorpore ou simule intentionnellement des erreurs, des artefacts et des corruptions dans les médias numériques comme technique expressive.' },
    ]},
  ],
  faq,
  bibliography: [
    { name: 'Norme Unicode - Caractères de Combinaison', url: 'https://www.unicode.org/standard/principles.html#Combining_Characters' },
    { name: 'Le Phénomène du Texte Zalgo (Know Your Meme)', url: 'https://knowyourmeme.com/memes/zalgo' },
    { name: 'MDN - Normalisation de chaîne JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize' },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
