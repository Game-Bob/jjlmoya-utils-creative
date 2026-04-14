import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ExcuseGeneratorLocaleContent } from '../index';

const slug = 'generateur-d-excuses';
const title = 'Générateur d\'Excuses';
const description = 'Une machine à sous sémantique pour vous débarrasser de vos engagements avec style. Générez des excuses surréalistes et irréfutables instantanément.';

const faq: ExcuseGeneratorLocaleContent['faq'] = [
  {
    question: 'Ce générateur peut-il sauver mon mariage ?',
    answer: 'Bien que nous ne soyons pas thérapeutes, éviter ce dîner chez les beaux-parents grâce à une urgence technique plausible peut considérablement réduire les tensions. À utiliser avec parcimonie.'
  },
  {
    question: 'Pourquoi des phrases aussi surréalistes ?',
    answer: 'La stratégie repose sur la Dissonance Cognitive. Si vous dites quelque chose d\'ennuyeux, c\'est vérifiable. Si vous dites quelque chose d\'absurde, la surprise paralyse la capacité de colère.'
  }
];

const howTo: ExcuseGeneratorLocaleContent['howTo'] = [
  { name: 'Générer', text: 'Cliquez sur le bouton pour créer une nouvelle excuse.' },
  { name: 'Copier', text: 'Cliquez sur le bouton de copie pour mettre l\'excuse dans votre presse-papiers.' }
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

export const content: ExcuseGeneratorLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquemment Posées',
  bibliographyTitle: 'Bibliographie du Temps Libre',
  ui: {
    title: 'Générateur d\'Excuses Surréalistes',
    description: 'Calculateur d\'alibis de nouvelle génération.',
    subjectLabel: 'Sujet',
    actionLabel: 'Action',
    victimLabel: 'Victime',
    generateBtn: 'GÉNÉRER L\'EXCUSE',
    copyBtn: 'Copier cette folie',
    copied: 'Copié !',
    starts: JSON.stringify([
      "Mon chat", "Ma grand-mère", "Le président", "Un extraterrestre", "Mon voisin du 5ème",
      "Le Wi-Fi", "Mon horoscope", "Un voyageur temporel", "La machine à laver", "Mon frigo",
      "L'esprit de Noël", "Mon ombre", "Un ninja", "La police du véganisme", "Siri",
      "Ma plante carnivore", "Le livreur Amazon", "Mon clone maléfique", "Un magicien", "Godzilla"
    ]),
    middles: JSON.stringify([
      "a déclaré la guerre à", "a mangé", "a kidnappé", "a mis le feu à",
      "organise une fête dans", "a vomi sur", "refuse de quitter",
      "a piraté", "a volé", "est tombé amoureux de", "médite sur",
      "a jeté un sort à", "proteste contre", "a fondé une secte dans",
      "danse la samba dans", "a invoqué un démon dans", "a bloqué l'accès à",
      "s'est transformé en or", "essaie de vendre", "a écrit un livre sur"
    ]),
    ends: JSON.stringify([
      "mes clés de maison.", "mon envie de vivre.", "la porte du garage.",
      "mon pantalon préféré.", "le routeur du salon.", "ma seule paire de chaussures.",
      "les lois de la physique.", "ma dignité.", "l'ascenseur de l'immeuble.",
      "mon compte Netflix.", "ma brosse à dents.", "mes titres de propriété.",
      "ma collection de Pogs.", "le frein à main de la voiture.", "mon envie de sociabiliser.",
      "ma réserve de café.", "l'abattant des toilettes.", "la télécommande.",
      "mes chaussettes porte-bonheur.", "la civilisation occidentale."
    ]),
    faqTitle: 'FAQ',
    bibliographyTitle: 'Références'
  },
  seo: [
    { type: 'title', text: 'L\'Art Scientifique de l\'Excuse Parfaite', level: 2 },
    { type: 'paragraph', html: 'Nous vivons à l\'ère de l\'hyper-connectivité. Votre téléphone vibre, votre montre vous notifie, et votre agenda ressemble à une partie de Tetris sur le point de s\'effondrer. La pression de dire "oui" à tout a créé une épidémie d\'épuisement social.' },
    { type: 'title', text: 'La Renaissance du JOMO (Joy of Missing Out)', level: 3 },
    { type: 'paragraph', html: 'Alors que le FOMO (Fear of Missing Out) a dominé la dernière décennie, les experts du bien-être numérique prônent désormais le <strong>JOMO : La Joie de Passer à Côté</strong>. Il ne s\'agit pas d\'isolement, mais d\'intentionnalité.' },
    { type: 'tip', title: 'La Formule de l\'Alibi Irréfutable', html: '<strong>Le Sujet Dissocié :</strong> Vous n\'êtes jamais le coupable. C\'est "le Wi-Fi", "mon chat", "l\'univers". Déplacez la responsabilité vers une entité externe.<br><strong>L\'Action Hyperbolique :</strong> La situation doit être assez absurde ou technique pour que personne ne demande de détails.<br><strong>Le Blocage Physique :</strong> Le résultat final doit être binaire : soit j\'y vais, soit je reste chez moi.' },
    { type: 'title', text: 'Une Brève Histoire de l\'Excuse', level: 3 },
    { type: 'list', items: [
      '<strong>Moyen Âge :</strong> "Mon cheval a perdu un fer" (Un classique indémodable).',
      '<strong>Révolution industrielle :</strong> "La machine à vapeur a surchauffé".',
      '<strong>Ère numérique :</strong> "Mon internet a coupé en pleine mise à jour".',
    ]},
    { type: 'proscons', items: [
      { pro: 'Soulage instantanément la pression sociale', con: 'L\'usage excessif érode la confiance' },
      { pro: 'Protège votre énergie et vos limites', con: 'Peut générer de la culpabilité si utilisé sans précaution' },
      { pro: 'Le ton créatif et humoristique désamorce la tension', con: 'Inapproprié dans un contexte formel ou professionnel' },
    ]},
  ],
  faq,
  bibliography: [
    { name: 'Manifeste du Procrastinateur', url: 'https://example.com/manifesto' }
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
