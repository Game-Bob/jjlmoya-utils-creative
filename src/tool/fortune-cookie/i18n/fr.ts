import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { FortuneCookieLocaleContent } from '../index';
import { bibliography } from '../bibliography';

const slug = 'biscuit-de-la-fortune';
const title = 'Biscuit de la Fortune';
const description = 'Consultez votre destin quotidien et découvrez vos numéros de chance. Un biscuit par jour, révélé d\'un simple clic.';

const faq: FortuneCookieLocaleContent['faq'] = [
  {
    question: 'Puis-je ouvrir plus d\'un biscuit par jour ?',
    answer: 'Le destin ne parle qu\'une fois par jour. Nous enregistrons votre fortune sur l\'appareil pour qu\'elle vous guide tout au long de la journée.'
  },
  {
    question: 'Les fortunes sont-elles générées aléatoirement ?',
    answer: 'Oui — une fortune aléatoire est sélectionnée chaque jour et sauvegardée localement. Chacune des 25 fortunes a une chance égale d\'être choisie, garantissant une variété au fil du temps.'
  }
];

const howTo: FortuneCookieLocaleContent['howTo'] = [
  { name: 'Casser le biscuit', text: 'Cliquez de façon répétée sur le biscuit pour l\'ouvrir.' },
  { name: 'Lire votre fortune', text: 'Découvrez le message caché à l\'intérieur et vos numéros de chance pour la journée.' }
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

export const content: FortuneCookieLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquemment Posées',
  ui: {
    title: 'Biscuit de la Fortune en Ligne',
    description: 'Votre oracle numérique quotidien.',
    instruction: 'Cliquez sur le biscuit pour l\'ouvrir',
    dailyStatus: 'Votre destin a été révélé pour aujourd\'hui.',
    shareBtn: 'Partager la Sagesse',
    shareTitle: 'Mon Biscuit de la Fortune',
    shareText: 'Le destin a parlé : "$TEXT"\nMes numéros : $NUMS\n\nDécouvrez votre fortune ici :',
    copied: 'Copié !',
    fortunes: JSON.stringify([
      "La fortune que vous cherchez se trouve dans un autre biscuit.",
      "Ne comptez pas les jours, faites en sorte que les jours comptent.",
      "Un voyage de mille lieues commence toujours par un premier pas.",
      "L'erreur est le préambule de la découverte.",
      "Votre capacité à apprendre est votre plus grand atout.",
      "Souriez, l'univers vous regarde.",
      "La patience est un arbre aux racines amères mais aux fruits très doux.",
      "Ne craignez pas de grandir lentement, craignez seulement de rester immobile.",
      "Aujourd'hui est le demain dont vous vous inquiétiez hier.",
      "Le bonheur n'est pas quelque chose de tout fait. Il découle de vos propres actions.",
      "Si vous ne pouvez pas changer la direction du vent, ajustez vos voiles.",
      "Ce que vous plantez maintenant, vous le récolterez plus tard.",
      "La créativité, c'est l'intelligence qui s'amuse.",
      "Ne cherchez pas d'erreurs, cherchez des solutions.",
      "C'est votre attitude, et non votre aptitude, qui déterminera votre altitude.",
      "Le succès est la somme de petits efforts répétées jour après jour.",
      "Croyez que vous le pouvez et vous aurez fait la moitié du chemin.",
      "La seule façon de faire du bon travail est d'aimer ce que vous faites.",
      "La vie, c'est 10 % ce qui vous arrive et 90 % la façon dont vous y réagissez.",
      "Soyez le changement que vous voulez voir dans le monde.",
      "La meilleure façon de prédire l'avenir est de l'inventer.",
      "La simplicité est la sophistication suprême.",
      "Vous êtes le maître de votre destin et le capitaine de votre âme.",
      "Bientôt, vous recevrez des nouvelles qui changeront votre perspective.",
      "Un voyage inattendu vous apportera de grandes joies."
    ]),
    faqTitle: 'FAQ',
  },
  seo: [
    { type: 'title', text: 'Le Mystère du Biscuit de la Fortune', level: 2 },
    { type: 'paragraph', html: 'Vous êtes-vous déjà demandé d\'où viennent ces curieux biscuits ? Bien qu\'on les associe à la cuisine chinoise, leur origine est un voyage fascinant entre le Japon et les États-Unis. Le biscuit de la fortune tel que nous le connaissons aujourd\'hui a probablement été inventé au début du XXe siècle en Californie, pas en Chine — où ils sont pratiquement inconnus.' },
    { type: 'tip', title: 'Fonctionnement de Notre Oracle', html: 'Chaque jour, vous pouvez ouvrir un seul biscuit. Le système enregistre votre destin pour que vous puissiez vous en souvenir pendant 24 heures. La fortune est stockée localement dans votre navigateur — totalement privé, aucun serveur n\'est impliqué. Revenez demain pour une nouvelle prédiction !' },
    { type: 'title', text: 'La Philosophie des Oracles', level: 3 },
    { type: 'paragraph', html: 'Les humains ont toujours cherché conseil en période d\'incertitude. De l\'Oracle de Delphes au Yi Jing, les systèmes de divination remplissent une fonction psychologique constante : ils nous autorisent à <strong>faire une pause et réfléchir</strong>. Un biscuit de la fortune ne prédit pas l\'avenir — il vous incite à y penser.' },
    { type: 'list', items: [
      '<strong>Chine Ancienne :</strong> Le Yi Jing (Livre des Transformations, ~1000 av. J.-C.) utilisait des hexagrammes pour guider les décisions et interpréter le destin.',
      '<strong>Grèce Classique :</strong> L\'Oracle de Delphes attirait dirigeants et citoyens avec des déclarations cryptiques interprétées comme des conseils divins.',
      '<strong>Japon Moderne :</strong> Les billets de fortune Omikuji dans les sanctuaires shinto, attachés aux branches d\'arbres, mêlent destin et rituel.',
      '<strong>XXe siècle aux USA :</strong> Les biscuits de la fortune sont apparus dans les communautés nippo-américaines avant de devenir synonymes de la cuisine sino-américaine.',
    ]},
    { type: 'stats', items: [
      { value: '3 milliards+', label: 'Biscuits fabriqués par an', icon: 'mdi:cookie' },
      { value: '~1000 av. J.-C.', label: 'Origine du Yi Jing', icon: 'mdi:book-open-variant' },
      { value: '25', label: 'Fortunes dans cet oracle', icon: 'mdi:star-shooting' },
      { value: '1/jour', label: 'Un destin par jour', icon: 'mdi:calendar-today' },
    ], columns: 4 },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
