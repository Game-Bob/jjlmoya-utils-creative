import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SynesthesiaPainterLocaleContent } from '../index';

const slug = 'peintre-de-synesthesie';
const title = 'Peintre de Synesthésie';
const description = 'Visualisez la couleur des mots selon la synesthésie graphème couleur. Chaque lettre possède sa propre couleur, transformant le texte en art chromatique.';

const faq: SynesthesiaPainterLocaleContent['faq'] = [
  {
    question: 'Tous les synesthètes voient-ils les mêmes couleurs pour chaque lettre ?',
    answer: 'Non. Les couleurs synesthésiques sont uniques à chaque personne. Il existe des tendances statistiques (le A a tendance à être rouge pour beaucoup), mais aucun couple de synesthètes n\'a exactement la même palette. Cet outil utilise les couleurs les plus fréquemment rapportées dans les études de population, et non les "bonnes" couleurs.',
  },
  {
    question: 'Puis-je développer la synesthésie en utilisant cet outil de manière continue ?',
    answer: 'Pas au sens neurologique strict. La véritable synesthésie est une caractéristique du système nerveux, pas une compétence acquise. Cependant, l\'utilisation répétée d\'associations couleur-lettre peut créer de forts souvenirs associatifs. Certaines études suggèrent que pratiquer ces associations peut améliorer la mémoire textuelle.',
  },
  {
    question: 'À quoi sert le mode "Aura" ?',
    answer: 'Le mode Aura simule la façon dont certains synesthètes décrivent voir les couleurs "flotter" ou "rayonner" autour des lettres plutôt qu\'intégrées à celles-ci. Cela crée une expérience visuelle plus atmosphérique et immersive, particulièrement sur un fond sombre.',
  },
  {
    question: 'Le mode "Points" a-t-il une base scientifique ?',
    answer: 'C\'est une abstraction artistique. Il réduit le texte à son "essence chromatique" en éliminant la forme reconnaissable des lettres. Le résultat ressemble à des visualisations de données chromatiques ou à des peintures pointillistes, et permet de voir la "signature colorée" d\'un texte sans que le sens n\'interfère.',
  },
  {
    question: 'Pourquoi certaines lettres comme I et O sont-elles blanches ou noires ?',
    answer: 'Dans les études sur la synesthésie, les voyelles I et O, ainsi que la lettre W, sont fréquemment décrites comme blanches, transparentes ou noires. Cet outil adapte ces couleurs au fond actif : blanc sur fond sombre, noir sur fond clair, pour toujours garantir la visibilité.',
  },
];

const howTo: SynesthesiaPainterLocaleContent['howTo'] = [
  { name: 'Écrire du texte', text: 'Cliquez sur la zone d\'écriture et commencez à taper. Chaque lettre apparaîtra colorée selon son association synesthésique statistique.' },
  { name: 'Changer le mode de visualisation', text: 'Utilisez les boutons en haut à droite pour basculer entre Lettres (texte coloré), Points (cercles de couleur) et Aura (lettres lumineuses avec halos chromatiques).' },
  { name: 'Explorer différents textes', text: 'Écrivez des noms, des mots dans différentes langues ou des phrases pour découvrir leur palette chromatique unique. Les mots longs créent des dégradés visuels fascinants.' },
  { name: 'Effacer et recommencer', text: 'Utilisez le bouton "Effacer" dans la barre inférieure pour vider le canevas et explorer un nouveau texte.' },
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

export const content: SynesthesiaPainterLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquemment Posées',
  bibliographyTitle: 'Bibliographie de l\'Esprit',
  ui: {
    title: 'Peintre de Synesthésie',
    description: 'Transformez vos mots en art chromatique.',
    modeLetters: 'Lettres',
    modeDots: 'Points',
    modeAura: 'Aura',
    placeholder: 'Écrivez ici...',
    footerText: 'Écrivez pour découvrir votre palette de couleurs personnelle',
    clearBtn: 'Effacer',
    faqTitle: 'FAQ',
    bibliographyTitle: 'Références'
  },
  seo: [
    { type: 'title', text: 'Qu\'est-ce que la Synesthésie Graphème Couleur ?', level: 2 },
    { type: 'paragraph', html: 'La <strong>synesthésie</strong> est une condition neurologique dans laquelle la stimulation d\'un sens déclenche automatiquement une réponse dans un autre. La variante la plus étudiée et la plus répandue est la <strong>synesthésie graphème-couleur</strong> : ceux qui en sont atteints perçoivent chaque lettre ou chiffre avec une couleur intrinsèque, constante et vive. Ce n\'est ni de l\'imagination ni une métaphore ; pour un synesthète, la lettre "A" est rouge de la même manière que le feu est chaud. Cet outil applique une <em>palette statistique</em> basée sur les couleurs les plus fréquemment rapportées pour chaque graphème dans les études de population.' },
    { type: 'title', text: 'Neurosciences : La Théorie de l\'Activation Croisée', level: 3 },
    { type: 'paragraph', html: 'Le modèle neurologique le plus largement accepté pour la synesthésie graphème-couleur est l\'<strong>activation croisée</strong>. Les zones du cortex temporal impliquées dans la reconnaissance de la forme des lettres (gyrus fusiforme) sont anatomiquement adjacentes aux régions qui traitent la couleur (zone V4). Chez les personnes synesthètes, il existe une connectivité structurelle ou fonctionnelle accrue entre ces régions, de sorte que la reconnaissance d\'une lettre active également les neurones de la couleur. La recherche par neuro-imagerie fonctionnelle (IRMf) a confirmé que les synesthètes montrent une véritable activation de V4 lors de la lecture d\'un texte, même s\'il est monochromatique.' },
    { type: 'tip', title: 'Les Trois Modes de Visualisation', html: '<strong>Lettres :</strong> Le texte original coloré par graphème. Idéal pour voir la "mélodie chromatique" d\'un texte complet. <strong>Points :</strong> Chaque caractère devient un cercle de sa couleur ; le texte disparaît et seule la musique des couleurs subsiste. <strong>Aura :</strong> Les lettres émettent un halo de leur couleur, comme si le texte rayonnait de sa propre énergie.' },
    { type: 'title', text: 'Statistiques et Universaux de Couleur', level: 3 },
    { type: 'paragraph', html: 'Bien que les couleurs synesthésiques soient uniques à chaque individu, des études comme celles de Simner et al. (2006) et Eagleman et al. (2007) ont trouvé des schémas statistiques significatifs. La voyelle <strong>A</strong> a tendance à être rouge pour la majorité ; le <strong>O</strong> est blanc ou noir ; le <strong>S</strong> apparaît dans des tons bleu-vert ou vert ; le <strong>E</strong> apparaît comme vert ou blanc. Fait intéressant, les associations couleur-lettre sont plus cohérentes au sein d\'une culture linguistique qu\'entre différentes cultures, ce qui suggère un rôle de l\'apprentissage précoce de l\'alphabet.' },
    { type: 'list', items: [
      '<strong>Prévalence :</strong> Environ 4 % de la population présente une synesthésie graphème-couleur à un certain degré, bien que des études plus récentes portent ce chiffre à 6-8 % en incluant les formes subcliniques.',
      '<strong>Biais de genre :</strong> La synesthésie est 3 à 6 fois plus fréquente chez les femmes que chez les hommes, bien que les causes de cette différence ne soient pas encore totalement expliquées.',
      '<strong>Hérédité :</strong> Elle a une composante génétique claire : elle a tendance à être présente dans les familles, bien que pas toujours sous le même type de synesthésie.',
      '<strong>Constance :</strong> Contrairement aux associations apprises, les couleurs synesthésiques sont extraordinairement stables dans le temps. Des études de suivi sur 10 ans démontrent une cohérence supérieure à 90 % dans les associations graphème-couleur.',
      '<strong>Synesthètes célèbres :</strong> Vladimir Nabokov, Wassily Kandinsky, Nikola Tesla et Billy Joel ont publiquement décrit des expériences synesthésiques qui ont influencé leur travail.',
    ]},
    { type: 'stats', items: [
      { value: '4–8%', label: 'Population synesthète', icon: 'mdi:brain' },
      { value: '90%+', label: 'Constance des couleurs sur 10 ans', icon: 'mdi:check-circle' },
      { value: '3–6×', label: 'Plus fréquent chez les femmes', icon: 'mdi:gender-female' },
      { value: '26+10', label: 'Lettres et chiffres colorés', icon: 'mdi:alphabetical' },
    ], columns: 4 },
    { type: 'title', text: 'Art et Synesthésie : Quand les Sens Fusionnent', level: 3 },
    { type: 'paragraph', html: '<strong>Wassily Kandinsky</strong>, fondateur de l\'expressionnisme abstrait, expérimentait à la fois la synesthésie graphème-couleur et musique-couleur : il entendait les instruments en couleurs (le jaune était une trompette, le bleu profond un violoncelle) et utilisait ces perceptions pour créer sa théorie de l\'art abstrait. En musique, <strong>Alexandre Scriabine</strong> a composé <em>Prométhée : Le Poème du Feu</em> avec une partie pour "clavier à lumières" (tastiera per luce), conçue pour projeter des couleurs correspondant à chaque note.' },
    { type: 'tip', title: 'Palette de Couleurs de cet Outil', html: 'Les attributions de couleurs s\'inspirent des données statistiques les plus courantes dans la littérature scientifique. <strong>A → rouge</strong>, <strong>E → vert</strong>, <strong>I → blanc/noir selon le fond</strong>, <strong>O → noir/blanc</strong>, <strong>U → ambre</strong>. Les consonnes suivent des schémas moins uniformes, mais le contraste avec l\'arrière-plan est toujours privilégié pour garantir la lisibilité.' },
  ],
  faq,
  bibliography: [
    { name: 'Simner et al. (2006) – Synaesthesia: The prevalence of atypical cross-modal experiences', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1626536/' },
    { name: 'Eagleman et al. (2007) – A standardized test battery for the study of synesthesia', url: 'https://www.sciencedirect.com/science/article/pii/S0010945207000087' },
    { name: 'Kandinsky, W. – Du Spirituel dans l\'Art (1911)', url: 'https://fr.wikipedia.org/wiki/Du_spirituel_dans_l\'art' },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
