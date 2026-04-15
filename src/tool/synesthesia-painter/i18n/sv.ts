import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SynesthesiaPainterLocaleContent } from '../index';

const slug = 'synestesi-malare';
const title = 'Synestesi målare';
const description = 'Visualisera färgen på ord enligt grafem-färg-synestesi. Varje bokstav har sin egen färg, vilket förvandlar text till kromatisk konst.';

const faq: SynesthesiaPainterLocaleContent['faq'] = [
  {
    question: 'Ser alla synesteter samma färger för varje bokstav?',
    answer: 'Nej. Synestetiska färger är unika för varje person. Statistiska tendenser finns (A tenderar att vara röd för många), men inga två synesteter har exakt samma palett. Detta verktyg använder de färger som oftast rapporterats i populationsstudier, inte de "rätta".',
  },
  {
    question: 'Kan jag utveckla synestesi genom att använda detta verktyg kontinuerligt?',
    answer: 'Inte i strikt neurologisk mening. Äkta synestesi är en egenskap hos nervsystemet, inte en inlärd färdighet. Däremot kan upprepad användning av färg-bokstav-associationer skapa starka associativa minnen. Vissa studier tyder på att träning av dessa associationer kan förbättra textminnet.',
  },
  {
    question: 'Vad är "Aura"-läget till för?',
    answer: 'Aura-läget simulerar hur vissa synesteter beskriver att de ser färger "flyta" eller "glöda" runt bokstäver snarare än att vara integrerade i dem. Det skapar en mer atmosfärisk och uppslukande visuell upplevelse, särskilt på en mörk bakgrund.',
  },
  {
    question: 'Har "Prickar"-läget någon vetenskaplig grund?',
    answer: 'Det är en konstnärlig abstraktion. Läget reducerar texten till dess "kromatiska essens" genom att eliminera bokstävernas igenkännbara form. Resultatet liknar kromatiska datavisualiseringar eller pointillistiska målningar, och låter dig se en texts "färgmässiga signatur" utan att betydelsen stör.',
  },
  {
    question: 'Varför är vissa bokstäver som I och O vita eller svarta?',
    answer: 'I synestesistudier beskrivs vokalerna I och O, samt bokstaven W, ofta som vita, transparenta eller svarta. Detta verktyg anpassar dessa färger till den aktiva bakgrunden: vitt på mörk bakgrund, svart på ljus bakgrund, för att alltid garantera synlighet.',
  },
];

const howTo: SynesthesiaPainterLocaleContent['howTo'] = [
  { name: 'Skriv text', text: 'Klicka på skrivområdet och börja skriva. Varje bokstav visas färgad enligt dess statistiska synestetiska association.' },
  { name: 'Byt visualiseringsläge', text: 'Använd knapparna i övre högra hörnet för att växla mellan Bokstäver (färgad text), Prickar (färgcirklar) och Aura (lysande bokstäver med kromatiska glorior).' },
  { name: 'Utforska olika texter', text: 'Skriv namn, ord på olika språk eller meningar för att upptäcka deras unika kromatiska palett. Långa ord skapar fascinerande visuella gradienter.' },
  { name: 'Rensa och börja om', text: 'Använd knappen "Rensa" i den nedre panelen för att tömma duken och utforska en ny text.' },
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

export const content: SynesthesiaPainterLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor',
  bibliographyTitle: 'Sinnets bibliografi',
  ui: {
    title: 'Synestesi målare',
    description: 'Förvandla dina ord till kromatisk konst.',
    modeLetters: 'Bokstäver',
    modeDots: 'Prickar',
    modeAura: 'Aura',
    placeholder: 'Skriv här...',
    footerText: 'Skriv för att upptäcka din personliga färgpalett',
    clearBtn: 'Rensa',
    faqTitle: 'FAQ',
    bibliographyTitle: 'Referenser'
  },
  seo: [
    { type: 'title', text: 'Vad är grafem färg synestesi?', level: 2 },
    { type: 'paragraph', html: '<strong>Synestesi</strong> är ett neurologiskt tillstånd där stimulering av ett sinne automatiskt utlöser en reaktion i ett annat. Den mest studerade och utbredda varianten är <strong>grafem-färg-synestesi</strong>: de som har det uppfattar varje bokstav eller siffra med en inneboende, konstant och levande färg. Det är inte fantasi eller metafor; för en synestet är bokstaven "A" röd på samma sätt som eld är varm. Detta verktyg tillämpar en <em>statistisk palett</em> baserad på de färger som oftast rapporterats för varje grafem i populationsstudier.' },
    { type: 'title', text: 'Neurovetenskap: Teorien om korsaktivering', level: 3 },
    { type: 'paragraph', html: 'Den mest accepterade neurologiska modellen för grafem-färg-synestesi är <strong>korsaktivering</strong>. De områden i temporala cortex som är involverade i att känna igen bokstavsformer (gyrus fusiformis) ligger anatomiskt intill de regioner som bearbetar färg (area V4). Hos personer med synestesi finns det en större strukturell eller funktionell konnektivitet mellan dessa regioner, så att igenkänning av en bokstav även aktiverar färgneuroner. Funktionell magnetresonanstomografi (fMRI) har bekräftat att synesteter visar en genuin aktivering i V4 vid läsning av text, även när den är monokrom.' },
    { type: 'tip', title: 'De tre visualiseringslägena', html: '<strong>Bokstäver:</strong> Originaltexten färgad efter grafem. Idealiskt för att se den "kromatiska melodin" i en hel text. <strong>Prickar:</strong> Varje tecken blir en cirkel i sin färg; texten försvinner och endast färgmusiken återstår. <strong>Aura:</strong> Bokstäver avger en gloria av sin färg, som om texten glöder med sin egen energi.' },
    { type: 'title', text: 'Statistik och färguniversaler', level: 3 },
    { type: 'paragraph', html: 'Även om synestetiska färger är unika för varje individ, fann studier av Simner et al. (2006) och Eagleman et al. (2007) signifikanta statistiska mönster. Vokalen <strong>A</strong> tenderar att vara röd för de flesta; <strong>O</strong> är vit eller svart; <strong>S</strong> visas i turkosa eller gröna toner; <strong>E</strong> framstår som grön eller vit. Intressant nog är färg-bokstav-associationer mer konsekventa inom en språkkultur än mellan olika kulturer, vilket tyder på en roll för tidig bokstavsinlärning.' },
    { type: 'list', items: [
      '<strong>Prevalens:</strong> Ungefär 4 % av befolkningen har grafem-färg-synestesi i någon grad, även om nyare studier höjer denna siffra till 6–8 % när subkliniska former inkluderas.',
      '<strong>Könsskillnader:</strong> Synestesi är 3 till 6 gånger vanligare hos kvinnor än hos män, även om orsakerna till denna skillnad ännu inte är helt klarlagda.',
      '<strong>Ärftlighet:</strong> Det finns en tydlig genetisk komponent: det tenderar att gå i familjer, dock inte alltid med samma typ av synestesi.',
      '<strong>Konstans:</strong> Till skillnad från inlärda associationer är synestetiska färger utomordentligt stabila över tid. 10-åriga uppföljningsstudier visar över 90 % konsekvens i grafem-färg-associationer.',
      '<strong>Kända synesteter:</strong> Vladimir Nabokov, Wassily Kandinsky, Nikola Tesla och Billy Joel har offentligt beskrivit synestetiska upplevelser som påverkat deras arbete.',
    ]},
    { type: 'stats', items: [
      { value: '4–8 %', label: 'Befolkning med synestesi', icon: 'mdi:brain' },
      { value: '90 %+', label: 'Färgstabilitet över 10 år', icon: 'mdi:check-circle' },
      { value: '3–6×', label: 'Vanligare hos kvinnor', icon: 'mdi:gender-female' },
      { value: '26+10', label: 'Färgade bokstäver & siffror', icon: 'mdi:alphabetical' },
    ], columns: 4 },
    { type: 'title', text: 'Konst och synestesi: När sinnena smälter samman', level: 3 },
    { type: 'paragraph', html: '<strong>Wassily Kandinsky</strong>, grundare av den abstrakta expressionismen, upplevde både grafem-färg- och musik-färg-synestesi: han hörde instrument i färger (gult var en trumpet, djupt blått en cello) och använde dessa förnimmelser för att skapa sin teori om abstrakt konst. Inom musiken komponerade <strong>Alexander Scriabin</strong> <em>Prometheus: The Poem of Fire</em> med en stämma för "tastiera per luce" (ljusklaviatur), designad för att projicera färger som motsvarar varje ton.' },
    { type: 'tip', title: 'Detta verktygs färgpalett', html: 'Färgtilldelningarna är inspirerade av de vanligaste statistiska data i vetenskaplig litteratur. <strong>A → röd</strong>, <strong>E → grön</strong>, <strong>I → vit/svart beroende på bakgrund</strong>, <strong>O → svart/vit</strong>, <strong>U → bärnsten</strong>. Konsonanter följer mindre enhetliga mönster, men kontrast mot bakgrunden prioriteras alltid för att garantera läsbarhet.' },
  ],
  faq,
  bibliography: [
    { name: 'Simner et al. (2006) – Synaesthesia: The prevalence of atypical cross-modal experiences', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1626536/' },
    { name: 'Eagleman et al. (2007) – A standardized test battery for the study of synesthesia', url: 'https://www.sciencedirect.com/science/article/pii/S0010945207000087' },
    { name: 'Kandinsky, W. – Om det andliga i konsten (1911)', url: 'https://sv.wikipedia.org/wiki/Om_det_andliga_i_konsten' },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
