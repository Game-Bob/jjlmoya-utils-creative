import type { DiceRollerLocaleContent } from '../index';

export const content: DiceRollerLocaleContent = {
  slug: 'lanceur-de-des',
  title: 'Lanceur de Dés',
  description: 'Un simulateur de dés complet pour vos JdR et jeux de société. Lancez des d4, d6, d8, d10, d12, d20 et d100 avec modificateurs et historique.',
  faqTitle: 'Questions Fréquemment Posées',
  bibliographyTitle: 'Bibliographie du Hasard',
  ui: {
    title: 'Lanceur de Dés',
    description: 'Que la chance soit avec vous.',
    rollBtn: 'Lancer les dés',
    totalLabel: 'Total',
    historyLabel: 'Historique',
    clearHistoryBtn: 'Effacer l\'historique',
    faqTitle: 'FAQ',
    bibliographyTitle: 'Références',
    addDiceLabel: 'Ajouter des dés au sac',
    bagLabel: 'Sac de dés',
    emptyBagBtn: 'Vider',
    emptyBagText: 'Cliquez sur les dés pour les ajouter',
    modifierLabel: 'Modificateur',
    rollManyLabel: 'Lancer $COUNT dés',
    rollOneLabel: 'Lancer $COUNT dé',
    preRollText: 'Ajoutez des dés et lancez',
    emptyHistoryText: 'L\'historique des lancers apparaîtra ici'
  },
  seo: [
    { type: 'title', text: 'L\'Art du Hasard : Histoire et Mathématiques des Dés', level: 2 },
    { type: 'paragraph', html: 'Les dés sont l\'un des plus anciens générateurs de hasard de l\'humanité. Les <strong>astragales</strong> — osselets de chevilles de moutons et de chèvres — étaient utilisés comme dés primitifs à quatre faces dès 5000 av. J.-C. en Mésopotamie et en Égypte. L\'évolution de l\'os sculpté aux icosaèdres modernes en résine époxy n\'est pas seulement esthétique : c\'est un voyage à travers la théorie des probabilités et la conception des mécaniques de jeu.' },
    { type: 'title', text: 'La Famille des Dés Standards', level: 3 },
    { type: 'paragraph', html: 'L\'ensemble de dés le plus répandu dans les jeux de rôle — popularisé par <strong>Dungeons &amp; Dragons</strong> en 1974 — se compose des cinq solides de Platon plus deux formes additionnelles : d4 (tétraèdre), d6 (cube), d8 (octaèdre), d10 (trapézoèdre pentagonal), d12 (dodécaèdre), d20 (icosaèdre) et d100 (dé centile). Chaque polyèdre garantit une distribution uniforme : toutes les faces ont exactement la même probabilité de sortir.' },
    { type: 'list', items: [
      '<strong>d4 – Tétraèdre :</strong> Le plus dangereux si l\'on marche dessus pieds nus. Quatre faces triangulaires, 25 % de probabilité par face. Couramment utilisé pour les dégâts de dague ou les sorts de bas niveau.',
      '<strong>d6 – Cube :</strong> Le dé le plus universel. Présent dans tous les jeux de société depuis le senet égyptien. Sa géométrie cubique garantit une équidistribution parfaite.',
      '<strong>d8 – Octaèdre :</strong> Le dé de la lance ou de la hache de bataille. Huit faces triangulaires équilatérales. 12,5 % de probabilité par face.',
      '<strong>d10 – Trapézoèdre pentagonal :</strong> Le seul solide non-platonique de l\'ensemble standard. Deux faces opposées par "sommet". Essentiel pour le d100 (deux d10 combinés).',
      '<strong>d12 – Dodécaèdre :</strong> Le dé du barbare. Douze faces pentagonales. Sous-estimé dans de nombreux systèmes, il est le protagoniste du Barbare dans D&D 5e.',
      '<strong>d20 – Icosaèdre :</strong> Le roi du JdR. Vingt faces triangulaires. Protagoniste du système d20 : il détermine le succès ou l\'échec de presque toutes les actions.',
      '<strong>d100 – Centile :</strong> Deux d10 combinés (dizaines + unités). Définit des probabilités fines dans des systèmes comme l\'Appel de Cthulhu ou Warhammer Fantasy.',
    ]},
    { type: 'stats', items: [
      { value: '5000 av. J.-C.', label: 'Premiers dés (astragales)', icon: 'mdi:history' },
      { value: '1974', label: 'D&D popularise l\'ensemble', icon: 'mdi:sword' },
      { value: '7 types', label: 'Dés standards de JdR', icon: 'mdi:dice-multiple' },
      { value: '2¹²⁸', label: 'Période aléatoire JS', icon: 'mdi:function-variant' },
    ], columns: 4 },
    { type: 'title', text: 'Probabilités et Courbes de Distribution', level: 3 },
    { type: 'paragraph', html: 'Lorsque vous lancez un seul dé, vous obtenez une <strong>distribution uniforme discrète</strong> : chaque résultat a exactement la même probabilité (1/n). Mais dès que vous combinez plusieurs dés, la magie mathématique transforme cette courbe plate en une <strong>distribution normale approximative</strong>. C\'est pourquoi 2d6 n\'est pas la même chose qu\'un 1d12 : avec deux dés à six faces, la probabilité d\'obtenir un 7 est de 6/36 ≈ 16,7 %, tandis que les extrêmes (2 et 12) ne surviennent que 2,8 % du temps.' },
    { type: 'tip', title: 'Avantage et Désavantage (D&D 5e)', html: 'La mécanique d\'<strong>Avantage</strong> consiste à lancer 2d20 et à garder le résultat le plus élevé. Mathématiquement, cela fait passer la moyenne de 10,5 à environ 13,8. Le <strong>Désavantage</strong> fait l\'inverse : on prend le plus bas, faisant chuter la moyenne à environ 7,2. Notre lanceur vous permet de simuler cela en ajoutant deux d20 au sac et en comparant les résultats individuels.' },
    { type: 'title', text: 'Modificateurs : Le Pont entre le Dé et le Personnage', level: 3 },
    { type: 'paragraph', html: 'Dans la plupart des systèmes de JdR, le dé n\'agit pas seul : un <strong>modificateur</strong> représentant les capacités du personnage est ajouté ou soustrait. Dans D&D 5e, un modificateur de Force de +5 signifie que vous lancez 1d20, ajoutez 5, et comparez le résultat à la Classe d\'Armure de l\'ennemi. Notre lanceur inclut un contrôle de modificateur pour refléter fidèlement ces mécaniques.' },
    { type: 'tip', title: 'Standard de Notation des Dés', html: 'La notation <strong>XdY+Z</strong> est le standard de facto dans les jeux de rôle : X dés de Y faces avec un modificateur Z. "3d6+2" signifie lancer trois dés à six faces et ajouter 2 au total. Notre outil utilise cette notation dans l\'historique afin que vous puissiez facilement partager ou enregistrer vos lancers.' },
    { type: 'glossary', items: [
      { term: 'Coup Critique', definition: 'Un lancer de la valeur maximale sur un dé (ex: obtenir 20 sur un d20). Déclenche généralement des effets bonus spéciaux dans la plupart des systèmes de JdR.' },
      { term: 'Échec Critique / Nat 1', definition: 'Obtenir la valeur minimale (1) sur un dé. Entraîne souvent un échec dramatique ou une conséquence négative.' },
      { term: 'Réserve de Dés', definition: 'Une collection de dés lancés simultanément. La réserve dans notre outil affiche chaque type de dé groupé par nombre (ex: 3d6 + 2d8).' },
      { term: 'Modificateur', definition: 'Un nombre fixe ajouté ou soustrait d\'un résultat de lancer, représentant la compétence d\'un personnage, un bonus d\'attribut ou une pénalité situationnelle.' },
      { term: 'Lancer Centile', definition: 'Un lancer utilisant deux d10 pour produire un résultat de 1 à 100, utilisé dans les systèmes basés sur les compétences où les capacités sont mesurées en pourcentages.' },
    ]},
  ],
  faq: [
    {
      question: 'Comment simuler un lancer avec avantage (D&D) ?',
      answer: 'Ajoutez deux dés d20 à votre réserve en cliquant deux fois sur le bouton d20. Lors du lancer, observez les deux résultats individuels et gardez le plus élevé. Le total affiché sera la somme, mais vous pouvez voir chaque dé séparément dans le détail du résultat.',
    },
    {
      question: 'Que signifient les couleurs verte ou rouge sur les résultats ?',
      answer: 'Les résultats en vert indiquent que le dé a obtenu sa valeur maximale possible (un "critique"). Les résultats en rouge indiquent la valeur minimale (un "1", le pire résultat possible). Cela permet de repérer les critiques et les échecs d\'un coup d\'œil.',
    },
    {
      question: 'Puis-je ajouter plusieurs dés du même type ?',
      answer: 'Oui. Chaque clic sur un dé l\'ajoute à votre réserve. Si vous cliquez trois fois sur le d6, la réserve affichera "3d6". Pour réduire le nombre, cliquez sur le bouton "−" qui apparaît à côté de chaque groupe de dés.',
    },
    {
      question: 'Les dés numériques sont-ils aussi aléatoires que les physiques ?',
      answer: 'Statistiquement, oui. Les moteurs JavaScript modernes utilisent des algorithmes pseudo-aléatoires (xorshift128+) avec une distribution uniforme de très haute qualité. Un vrai dé physique peut présenter de petites imperfections de fabrication qui biaisent les résultats ; le dé numérique n\'a pas ce problème.',
    },
    {
      question: 'Qu\'est-ce que le d100 et comment est-il utilisé ?',
      answer: 'Le d100 (ou d%) génère un nombre de 1 à 100 et est utilisé dans les systèmes de jeu basés sur les pourcentages, tels que l\'Appel de Cthulhu ou Warhammer Fantasy. Il représente une "probabilité directe" : si votre compétence en Discrétion est de 65 %, vous devez obtenir 65 ou moins pour réussir.',
    },
  ],
  bibliography: [
    { name: 'D&D Beyond – Règles des mécaniques de dés', url: 'https://www.dndbeyond.com/sources/basic-rules/using-ability-scores' },
    { name: 'Roll20 – Table de jeu virtuelle et systèmes de dés', url: 'https://roll20.net/' },
    { name: 'Pathfinder – Référence du système d20', url: 'https://paizo.com/pathfinder' },
  ],
  howTo: [
    { name: 'Composer la réserve de dés', text: 'Cliquez sur les boutons des dés (d4, d6, d8...) pour les ajouter à votre réserve. Chaque clic ajoute un dé du type sélectionné. Vous pouvez mélanger différents types dans le même lancer.' },
    { name: 'Ajuster le modificateur', text: 'Utilisez les boutons "+" et "−" à côté du modificateur pour appliquer des bonus ou des pénalités (comme le modificateur de caractéristique dans D&D). Le modificateur est automatiquement ajouté au total.' },
    { name: 'Lancer les dés', text: 'Appuyez sur le bouton "Lancer les dés". Le panneau de droite affiche le total final et le détail de chaque dé individuel, avec les critiques (maximum) en vert et les échecs (minimum) en rouge.' },
    { name: 'Consulter l\'historique', text: 'Chaque lancer est enregistré dans l\'historique avec l\'expression de dés utilisée, le résultat total et l\'heure exacte. Vous pouvez effacer l\'historique avec le bouton correspondant.' },
  ],
  schemas: []
};
