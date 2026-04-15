import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ZalgoGeneratorLocaleContent } from '../index';

const slug = 'zalgo-generator-sv';
const title = 'Zalgo generator';
const description = 'Korrumpera dina meddelanden med kaskadliknande överflödiga Unicode-tecken. Justera intensitet och riktning för glitch-effekten.';

const faq: ZalgoGeneratorLocaleContent['faq'] = [
  { question: 'Vad är Zalgo text?', answer: 'Det är en typ av text som använder Unicode-kombinationstecken (diakritiska tecken) överdrivet. När de staplas vertikalt "flödar dessa tecken över" sin ursprungliga rad, vilket skapar en visuell effekt av korruption, oordning eller horror som är populär i internetkulturen.' },
  { question: 'Varför ser Zalgo-text så konstig ut?', answer: 'Den utnyttjar en funktion i Unicode-standarden som gör det möjligt att lägga till märken ovanför, under eller genom en grundbokstav. Eftersom det inte finns någon strikt gräns för hur många märken som kan läggas till, kan texten "invadera" rader ovanför eller under.' },
  { question: 'Kan jag använda den här texten på sociala medier?', answer: 'Ja, de flesta moderna plattformar (Instagram, Twitter, Discord) stöder Unicode. Vissa nätverk eller enheter kan dock filtrera eller korta av överflödiga tecken vid mycket hög intensitet för att bibehålla gränssnittets läsbarhet.' },
  { question: 'Hur kan jag ta bort Zalgo-effekten från text?', answer: 'För att rensa korrumperad text kan du använda JavaScript-strängnormalisering eller helt enkelt klistra in den i en enkel textredigerare som endast accepterar vanlig text. Vårt verktyg är rent kreativt och skadar inte originalinnehållet.' },
];

const howTo: ZalgoGeneratorLocaleContent['howTo'] = [
  { name: 'Skriv grundmeddelandet', text: 'Ange texten du vill "korrumpera" i huvudtextrutan.' },
  { name: 'Justera kaosintensiteten', text: 'Flytta skjutreglaget för att definiera hur många kombinationstecken som ska staplas. Högre intensitet = svårare att läsa.' },
  { name: 'Välj överflödesriktning', text: 'Välj om korruptionen ska växa uppåt, nedåt eller i alla riktningar samtidigt.' },
  { name: 'Kopiera resultatet', text: 'Klicka på kopieringsknappen. Den resulterande texten innehåller alla osynliga bytes som behövs för att bibehålla glitch-effekten.' },
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

export const content: ZalgoGeneratorLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor',
  bibliographyTitle: 'Kaosbibliografi',
  ui: {
    title: 'Zalgo generator',
    description: 'A̵l̸l̸t̶ ̶ä̶r̶ ̶k̵o̶r̵r̴u̷m̶p̷e̸r̶a̷t̵',
    inputPlaceholder: 'Skriv ditt vanliga meddelande här...',
    intensityLabel: 'Korruptionsnivå',
    outputLabel: 'Korrumperat resultat',
    copyBtn: 'Kopiera kaos',
    copied: 'Kopierad!',
    faqTitle: 'FAQ',
    bibliographyTitle: 'Referenser',
    configTitle: 'Konfiguration',
    intensity: 'Intensitet',
    upLabel: 'Övre korruption',
    midLabel: 'Mittenbrus',
    downLabel: 'Nedre korruption',
    resetBtn: 'Återställ värden',
    warningText: 'VARNING: Zalgo-text använder kombinerade Unicode-tecken som visuellt kan flöda över sin behållare. Använd med försiktighet på sociala medier.',
    previewLabel: 'Realtidsförhandsvisning',
    emptyLabel: 'Tom',
    charLabel: 'TECKEN',
    noteText: 'Obs: vissa webbläsare kan begränsa renderingen av kombinerade tecken'
  },
  seo: [
    { type: 'title', text: 'Vad är Zalgo text och hur fungerar visuell korruption?', level: 2 },
    { type: 'paragraph', html: 'Zalgo-text är en form av typografisk manipulation som utnyttjar en specifik funktion i Unicode-standarden: <strong>kombinationstecken</strong>. Till skillnad från normala tecken tar dessa diakritiska tecken inte upp något horisontellt utrymme — de staplas vertikalt ovanpå grundbokstaven, vilket skapar den estetik av "digitalt kaos" eller "kosmisk horror" som är så populär i internetkulturen.' },
    { type: 'title', text: 'Processens anatomi', level: 3 },
    { type: 'paragraph', html: 'Vår generator bearbetar varje tecken oberoende och injicerar slumpmässiga skurar av Unicode-kodpunkter i tre distinkta vektorer: <strong>övre</strong> (diakritiska tecken som staplas ovanför), <strong>mitten</strong> (som genomborrar bokstaven) och <strong>nedre</strong> (som hänger under).' },
    { type: 'tip', title: 'Korruptionsalgoritm', html: 'För varje grundtecken beräknas <code>antal = intensitet × 30</code>. Så många slumpmässiga diakritiska tecken läggs till i varje vektor. Vid intensitet 1,5 kan du få upp till 45 kombinationstecken per bokstav.' },
    { type: 'title', text: 'Etikett och applikationer', level: 3 },
    { type: 'list', items: [
      '<strong>Sociala medier:</strong> Dra till dig uppmärksamhet på Instagram eller TikTok. Perfekt för biografier som vill bryta mot konventioner.',
      '<strong>Skräckberättande:</strong> Dramatisera fiktiva berättelser, creepypastas eller simuleringar av komprometterade system.',
      '<strong>Tillgänglighet:</strong> Varning — Zalgo-text är oläslig för skärmläsare. Använd den endast som visuell dekoration, aldrig för kritiskt innehåll.',
      '<strong>SEO:</strong> Använd aldrig Zalgo i kärnyckelord (H1, metatitlar). Indexeringsbotar kan misslyckas med att normalisera dessa tecken.',
    ]},
    { type: 'title', text: 'Ursprunget: Från Something Awful till Glitch Art', level: 3 },
    { type: 'paragraph', html: 'Zalgo började inte som en generator, utan som en intervention i klassiska tecknade serier. Användaren Shmorky började under mitten av 2000-talet deformera karaktärer som Nancy eller Archie genom att lägga till fläckar och distorsioner. Frasen <strong>"He comes"</strong> beseglade dessa verks öde och tillkännagav ankomsten av en entitet som slukade verkligheten.' },
    { type: 'glossary', items: [
      { term: 'Kombinationstecken', definition: 'En Unicode-kodpunkt designad för att placeras ovanpå, under eller genom ett grundtecken. Används legitimt i språk som arabiska, vietnamesiska och hindi.' },
      { term: 'Diakritiskt tecken', definition: 'Ett märke som läggs till en grundbokstav för att ändra dess uttal eller betydelse. Zalgo missbrukar dessa för att skapa visuellt överflöde.' },
      { term: 'Unicode-block', definition: 'Ett sammanhängande intervall av Unicode-kodpunkter. Zalgo-tecken kommer främst från blocket "Combining Diacritical Marks" (U+0300–U+036F).' },
      { term: 'Glitch Art', definition: 'En estetik som avsiktligt införlivar eller simulerar fel, artefakter och korruptioner i digitala medier som en uttrycksfull teknik.' },
    ]},
  ],
  faq,
  bibliography: [
    { name: 'Unicode-standard - Kombinationstecken (engelska)', url: 'https://www.unicode.org/standard/principles.html#Combining_Characters' },
    { name: 'Zalgo-textfenomenet (engelska)', url: 'https://knowyourmeme.com/memes/zalgo' },
    { name: 'MDN - Strängnormalisering', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize' },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
