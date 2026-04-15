import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { FortuneCookieLocaleContent } from '../index';

const slug = 'lyckokaka-online';
const title = 'Lyckokaka';
const description = 'Kontrollera ditt dagliga öde och upptäck dina lyckonummer. En spådom per dag, avslöjad med ett klick.';

const faq: FortuneCookieLocaleContent['faq'] = [
  {
    question: 'Kan jag öppna mer än en kaka per dag?',
    answer: 'Ödet talar bara en gång om dagen. Vi sparar din spådom på enheten så att den vägleder dig under hela dagen.'
  },
  {
    question: 'Är spådomarna slumpmässigt genererade?',
    answer: 'Ja – en slumpmässig spådom väljs varje dag och sparas lokalt. Var och en av de 25 spådomarna har lika stor chans att väljas, vilket garanterar variation över tid.'
  }
];

const howTo: FortuneCookieLocaleContent['howTo'] = [
  { name: 'Knäck kakan', text: 'Klicka upprepade gånger på kakan för att knäcka den.' },
  { name: 'Läs din spådom', text: 'Upptäck det dolda meddelandet inuti och dina lyckonummer för dagen.' }
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
  inLanguage: 'sv',
};

export const content: FortuneCookieLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor',
  bibliographyTitle: 'Ödesbibliografi',
  ui: {
    title: 'Online Lyckokaka',
    description: 'Ditt dagliga digitala orakel.',
    instruction: 'Slå på kakan för att öppna ditt öde',
    dailyStatus: 'Ditt öde har avslöjats för idag.',
    shareBtn: 'Dela visdom',
    shareTitle: 'Min lyckokaka',
    shareText: 'Ödet har talat: "$TEXT"\nMina nummer: $NUMS\n\nUpptäck din lycka här:',
    copied: 'Kopierad!',
    fortunes: JSON.stringify([
      "Lyckan du söker finns i en annan kaka.",
      "Räkna inte dagarna, se till att dagarna räknas.",
      "En resa på tusen mil börjar med ett enda steg.",
      "Misstag är inledningen till upptäckt.",
      "Din förmåga att lära är din största tillgång.",
      "Le, universum iakttar dig.",
      "Tålamod är ett träd med en bitter rot men mycket söt frukt.",
      "Var inte rädd för att växa långsamt, var endast rädd för att stå stilla.",
      "Idag är den morgondag du oroade dig för igår.",
      "Lycka är inte något färdigt. Det kommer från dina egna handlingar.",
      "Om du inte kan ändra vindens riktning, justera dina segel.",
      "Det du planterar nu kommer du att skörda senare.",
      "Kreativitet är intelligens som har roligt.",
      "Leta inte efter fel, leta efter lösningar.",
      "Din attityd, inte din begåvning, kommer att avgöra din höjd.",
      "Framgång är summan av små ansträngningar upprepade dag efter dag.",
      "Tro att du kan och du är halvvägs där.",
      "Det enda sättet att göra ett fantastiskt jobb är att älska det du gör.",
      "Livet är till 10 % vad som händer dig och 90 % hur du reagerar på det.",
      "Var den förändring du vill se i världen.",
      "Det bästa sättet att förutsäga framtiden är att uppfinna den.",
      "Enkelhet är den ultimata sofistikeringen.",
      "Du är herren över ditt öde och kaptenen över din själ.",
      "Snart kommer du att få nyheter som ändrar ditt perspektiv.",
      "En oväntad resa kommer att ge dig stor glädje."
    ]),
    faqTitle: 'FAQ',
    bibliographyTitle: 'Referenser'
  },
  seo: [
    { type: 'title', text: 'Lyckokakans mysterium', level: 2 },
    { type: 'paragraph', html: 'Har du någonsin undrat var dessa märkliga kakor kommer ifrån? Även om vi förknippar dem med kinesisk mat, är deras ursprung en fascinerande resa mellan Japan och USA. Lyckokakan som vi känner den idag uppfanns troligen i Kalifornien under tidigt 1900-tal, inte i Kina – där de är praktiskt taget okända.' },
    { type: 'tip', title: 'Så fungerar vårt orakel', html: 'Varje dag kan du öppna en kaka. Systemet sparar ditt öde så att du kommer ihåg det i 24 timmar. Spådomen lagras lokalt i din webbläsare – helt privat, ingen server är inblandad. Kom tillbaka imorgon för en ny förutsägelse!' },
    { type: 'title', text: 'Orakelns filosofi', level: 3 },
    { type: 'paragraph', html: 'Människor har alltid sökt vägledning i osäkra tider. Från oraklet i Delfi till I Ching, spådomssystem tjänar en konsekvent psykologisk funktion: de ger oss tillåtelse att <strong>stanna upp och reflektera</strong>. En lyckokaka förutsäger inte framtiden – den uppmanar dig att tänka på den.' },
    { type: 'list', items: [
      '<strong>Forntida Kina:</strong> I Ching (Förvandlingarnas bok, ca 1000 f.Kr.) använde hexagram för att vägleda beslut och tolka ödet.',
      '<strong>Klassiska Grekland:</strong> Oraklet i Delfi lockade både härskare och medborgare med kryptiska uttalanden som tolkades som gudomlig vägledning.',
      '<strong>Moderna Japan:</strong> Omikuji-spådomar vid Shinto-helgedomar, knutna till trädgrenar, blandar öde med ritual.',
      '<strong>1900-talets USA:</strong> Lyckokakor dök upp i japansk-amerikanska samhällen innan de blev synonymt med kinesisk-amerikansk matkultur.'
    ]},
    { type: 'stats', items: [
      { value: '3 miljarder+', label: 'Lyckokakor som tillverkas årligen', icon: 'mdi:cookie' },
      { value: 'ca 1000 f.Kr.', label: 'I Chings ursprung', icon: 'mdi:book-open-variant' },
      { value: '25', label: 'Spådomar i detta orakel', icon: 'mdi:star-shooting' },
      { value: '1/dag', label: 'Ett öde per dygn', icon: 'mdi:calendar-today' }
    ], columns: 4 },
  ],
  faq,
  bibliography: [
    { name: 'Lyckokakans historia (engelska)', url: 'https://en.wikipedia.org/wiki/Fortune_cookie' }
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
