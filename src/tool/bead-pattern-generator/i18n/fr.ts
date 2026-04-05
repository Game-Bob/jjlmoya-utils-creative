import type { BeadPatternGeneratorLocaleContent } from '../index';

export const content: BeadPatternGeneratorLocaleContent = {
  slug: 'generateur-de-modeles-de-perles',
  title: 'Générateur de Modèles',
  description: 'Créez du pixel art et des schémas de perles pour Miyuki ou Hama à partir de vos photos. Algorithme de quantification de couleurs, mode vision tunnel et export ZIP.',
  faqTitle: 'Questions Fréquemment Posées',
  bibliographyTitle: 'Bibliographie de l\'Artisan',
  ui: {
    title: 'Générateur de Modèles',
    description: 'De la photo au schéma de perles.',
    uploadLabel: 'Chargez votre photo',
    gridSizeLabel: 'Taille de grille (perles)',
    pixelateBtn: 'Générer le Modèle',
    downloadBtn: 'Télécharger le Schéma',
    faqTitle: 'FAQ',
    bibliographyTitle: 'Références'
  },
  seo: [
    { type: 'title', text: 'Alchimie Numérique : Transmutez les Pixels en Art Tangible', level: 2 },
    { type: 'paragraph', html: 'Bienvenue dans le <strong>Studio de Modèles Ultime</strong>. Un <em>moteur d\'intelligence chromatique</em> conçu pour les architectes du Pixel Art, les maîtres de la Miyuki et les visionnaires du point de croix. Votre pont entre le numérique et le fait-main.' },
    { type: 'card', icon: 'mdi:grid', title: 'La Grille Intelligente', html: 'Notre algorithme de <strong>sous-échantillonnage spatial</strong> ne se contente pas de "réduire" votre image. Il analyse la structure visuelle pour mapper des groupes de pixels complexes sur des cellules individuelles, préservant l\'intégrité des silhouettes et des contours comme le ferait un illustrateur expert.' },
    { type: 'card', icon: 'mdi:palette', title: 'Quantification de Couleurs K-Means', html: 'Nous implémentons une variante de l\'algorithme <strong>K-Means Clustering</strong> qui trouve mathématiquement les tons "centroïdes" de votre image. Une fidélité visuelle étonnante avec une palette minimaliste de 12, 24 ou 32 couleurs.' },
    { type: 'title', text: 'La Maîtrise en 3 Étapes', level: 3 },
    { type: 'card', icon: 'mdi:image-search', title: 'La Sélection Parfaite', html: 'Recherchez un <strong>contraste élevé</strong>, un éclairage dramatique et des formes iconiques. Les portraits avec des fonds épurés, les logos et l\'art vectoriel se traduisent magnifiquement.' },
    { type: 'card', icon: 'mdi:ruler', title: 'Calibration Dimensionnelle', html: '<strong>Miyuki Delica :</strong> 50 perles ≈ 8 cm · <strong>Hama Midi :</strong> 50 perles ≈ 25 cm · <strong>Point de Croix :</strong> 1 cellule = 1 point.' },
    { type: 'card', icon: 'mdi:eye-check', title: 'Exécution Zen (Mode Vision Tunnel)', html: 'Notre système de <strong>Vision Tunnel</strong> agit comme votre assistant personnel, atténuant le bruit visuel et mettant chirurgicalement en évidence uniquement la rangée active. Une concentration absolue.' },
    { type: 'title', text: 'Canevas Infinis', level: 3 },
    { type: 'list', items: [
      '<strong>Bijouterie Textile :</strong> Modèles complexes pour métiers à tisser et bracelets géométriques.',
      '<strong>Point de Croix :</strong> Schémas modernes prêts à être brodés pixel par pixel.',
      '<strong>Mosaïques :</strong> Murales à grande échelle utilisant des tesselles de céramique simplifiées.',
      '<strong>Retro Gaming :</strong> Sprites et assets 8-bits authentiques en quelques secondes.',
    ]},
    { type: 'stats', items: [
      { value: '10–100', label: 'Largeur en perles', icon: 'mdi:arrow-expand-horizontal' },
      { value: '2–32', label: 'Emplacements de palette', icon: 'mdi:palette-swatch' },
      { value: 'K-Means', label: 'Algorithme de quantification', icon: 'mdi:function-variant' },
      { value: 'ZIP', label: 'Format d\'export (modèle + guide)', icon: 'mdi:zip-box' },
    ], columns: 4 },
    { type: 'paragraph', html: 'À l\'ère des écrans éphémères, créer quelque chose de physique est un acte révolutionnaire. Cet outil ne cherche pas à automatiser l\'art, mais à <strong>donner du pouvoir à l\'artisan</strong>. Nous vous offrons la précision informatique pour que vos mains puissent bâtir des héritages durables.' },
  ],
  faq: [
    { question: 'Qu\'est-ce que la quantification de couleurs dans les modèles ?', answer: 'C\'est le processus de réduction des milliers de couleurs d\'une photo à quelques-unes seulement qui correspondent aux couleurs réelles des perles disponibles (ex: Miyuki ou Hama). Nous utilisons des algorithmes intelligents pour maintenir la ressemblance visuelle avec la palette minimale possible.' },
    { question: 'Puis-je utiliser ce modèle pour le point de croix ?', answer: 'Oui, le générateur crée un diagramme de grille parfaitement compatible avec le point de croix. Il vous suffit de choisir une taille de grille correspondant à votre tissu (Aïda 14, 18, etc.).' },
    { question: 'Quelle est la différence entre les perles Miyuki et Hama ?', answer: 'Les perles Miyuki Delica sont de très petites perles de verre précises pour la bijouterie. Les perles Hama sont en plastique et se fusionnent au fer à repasser. Notre outil vous permet d\'ajuster le rapport d\'aspect pour que le modèle ne se déforme pas selon le matériau utilisé.' },
    { question: 'Comment fonctionne l\'algorithme de tramage (dithering) ?', answer: 'Le tramage crée l\'illusion d\'un plus grand nombre de couleurs en mélangeant des pixels de différentes couleurs dans des motifs espacés. Cela aide les dégradés de couleurs à paraître plus fluides, même avec une palette de perles limitée.' },
  ],
  bibliography: [
    { name: 'Scikit-Image: Quantification de couleurs utilisant K-Means', url: 'https://scikit-learn.org/0.23/auto_examples/cluster/plot_color_quantization.html' },
    { name: 'Spécifications des Perles Miyuki Delica', url: 'https://www.miyuki-beads.co.jp/english/seedbeads/delica.html' },
    { name: 'Visgraf Lab: Algorithmes de Tramage (Dithering)', url: 'https://www.visgraf.impa.br/Courses/ip00/proj/Dithering1/floyd_steinberg_dithering.html' },
  ],
  howTo: [
    { name: 'Charger une image claire', text: 'Sélectionnez une photo avec un bon contraste et peu de petits détails pour que le modèle soit plus facile à suivre.' },
    { name: 'Ajuster la taille de la grille', text: 'Définissez la largeur et la hauteur en perles de votre pièce finale. Plus il y a de perles, plus il y a de détails, mais plus c\'est difficile.' },
    { name: 'Optimiser la palette de couleurs', text: 'Réduisez le nombre de couleurs jusqu\'à ce qu\'elles correspondent aux perles dont vous disposez dans votre kit de loisirs créatifs.' },
    { name: 'Exporter le schéma guide', text: 'Générez le modèle final avec les codes de couleur à utiliser comme référence lors de l\'assemblage de vos perles sur la plaque ou le fil.' },
  ],
  schemas: []
};
