import type { ExcuseGeneratorLocaleContent } from '../index';

export const content: ExcuseGeneratorLocaleContent = {
  slug: 'generateur-excuses',
  title: 'Générateur d\'Excuses',
  description: 'Machine à sous sémantique pour vous libérer de vos engagements avec style.',
  faqTitle: 'Foire Aux Questions',
  bibliographyTitle: 'Bibliographie des Loisirs',
  ui: {
    title: 'Générateur d\'Excuses Surrealistes',
    description: 'Calculateur d\'alibis de dernière génération.',
    subjectLabel: 'Sujet',
    actionLabel: 'Action',
    victimLabel: 'Victime',
    generateBtn: 'GÉNÉRER EXCUSE',
    copyBtn: 'Copier cette folie',
    copied: 'Copié!',
    starts: JSON.stringify([
      "Mon chat", "Ma grand-mère", "Le président", "Un extraterrestre", "Mon voisin du cinquième",
      "Le wifi", "Mon horoscope", "Un voyageur du temps", "La machine à laver", "Mon frigo",
      "L'esprit de Noël", "Mon ombre", "Un ninja", "La police végane", "Siri",
      "Ma plante carnivore", "Le livreur Amazon", "Mon clone maléfique", "Un magicien", "Godzilla"
    ]),
    middles: JSON.stringify([
      "a déclaré la guerre à", "a mangé", "a kidnappé", "a mis le feu à",
      "organise une fête dans", "a vomi sur", "refuse de quitter",
      "a piraté", "a volé", "est tombé amoureux de", "médite sur",
      "a jeté un sort sur", "proteste contre", "a fondé une secte dans",
      "danse la samba dans", "a convoqué un démon dans", "a bloqué l'accès à",
      "a transformé en or", "essaie de vendre", "a écrit un livre sur"
    ]),
    ends: JSON.stringify([
      "mes clés de maison.", "ma volonté de vivre.", "la porte du garage.",
      "mon pantalon préféré.", "le routeur du salon.", "ma seule paire de chaussures.",
      "les lois de la physique.", "ma dignité.", "l'ascenseur de l'immeuble.",
      "mon compte Netflix.", "ma brosse à dents.", "mes titres de propriété.",
      "ma collection de pogs.", "le frein à main de la voiture.", "mon envie de socialiser.",
      "ma réserve de café.", "le couvercle des toilettes.", "la télécommande.",
      "mes chaussettes porte-bonheur.", "la civilisation occidentale."
    ])
  },
  seo: [
    { type: 'title', text: "L'Art Scientifique de l'Excuse Parfaite", level: 2 },
    { type: 'paragraph', html: "Nous vivons dans l'ère de l'hyperconnexivité. Votre téléphone vibre, votre montre vous avertit, et votre agenda social ressemble à un jeu de Tetris sur le point de perdre. La pression de dire « oui » à tout a créé une épidémie d'épuisement social." }
  ],
  faq: [
  ],
  bibliography: [],
  howTo: [],
  schemas: []
};
