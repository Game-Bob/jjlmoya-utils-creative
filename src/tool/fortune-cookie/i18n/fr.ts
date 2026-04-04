import type { FortuneCookieLocaleContent } from '../index';

export const content: FortuneCookieLocaleContent = {
  slug: 'biscuit-fortune',
  title: 'Biscuit de la Fortune',
  description: 'Consultez votre destin quotidien et découvrez vos numéros de chance.',
  faqTitle: 'Foire Aux Questions',
  bibliographyTitle: 'Bibliographie du Destin',
  ui: {
    title: 'Biscuit de la Fortune en ligne',
    description: 'Votre oracle numérique quotidien.',
    instruction: 'Frappez le biscuit pour ouvrir votre destin',
    dailyStatus: 'Votre destin a été révélé pour aujourd\'hui.',
    shareBtn: 'Partager la Sagesse',
    shareTitle: 'Mon Biscuit de la Fortune 🥠',
    shareText: '🥠 Le destin m\'a parlé : "$TEXT"\n✨ Mes numéros : $NUMS\n\nDécouvrez votre fortune ici :',
    copied: 'Copié!',
    fortunes: JSON.stringify([
      "La chance que tu cherches est dans un autre biscuit.",
      "Ne compte pas les jours, fais que les jours comptent.",
      "Un voyage de mille lieues commence par un seul pas.",
      "L'erreur est le préambule de la découverte.",
      "Ta capacité d'apprendre est ton plus grand atout.",
      "Souris, l'univers te regarde.",
      "La patience est un arbre aux racines amères mais aux fruits très doux.",
      "Ne crains pas de grandir lentement, crains seulement de rester immobile.",
      "Aujourd'hui est le demain pour lequel tu t'inquiétais hier.",
      "Le bonheur n'est pas quelque chose de fait. Il provient de tes propres actions.",
      "Si tu ne peux pas changer la direction du vent, ajuste tes voiles.",
      "Ce que tu plantes maintenant, tu le récolteras plus tard.",
      "La créativité, c'est l'intelligence qui s'amuse.",
      "Ne cherche pas des erreurs, cherche des solutions.",
      "Ton attitude, pas ton aptitude, déterminera ton altitude.",
      "Le succès est la somme de petits efforts répétés jour après jour.",
      "Crois que tu le peux et tu seras déjà à mi-chemin.",
      "La seule façon de faire du bon travail est d'aimer ce que tu fais.",
      "La vie, c'est 10% ce qui t'arrive et 90% comment tu y réagis.",
      "Sois le changement que tu veux voir dans le monde.",
      "La meilleure façon de prédire l'avenir est de l'inventer.",
      "La simplicité est la sophistication suprême.",
      "Tu es le maître de ton destin et le capitaine de ton âme.",
      "Bientôt vous recevrez une nouvelle qui changera votre perspective.",
      "Un voyage inattendu vous apportera de grandes joies."
    ]),
    faqTitle: 'FAQ',
    bibliographyTitle: 'Références'
  },
  seo: [
    { type: 'title', text: 'Le Mystère du Biscuit de la Fortune', level: 2 },
    { type: 'paragraph', html: "Vous êtes-vous déjà demandé d'où viennent ces curieux biscuits ? Bien que nous les associions à la cuisine chinoise, leur origine est un voyage fascinant entre le Japon et les États-Unis." }
  ],
  faq: [],
  bibliography: [],
  howTo: [],
  schemas: []
};
