import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DiceRollerLocaleContent } from '../index';

const slug = 'tarningsgenerator';
const title = 'Tärningsgenerator';
const description = 'En komplett tärningssimulator för dina rollspel och brädspel. Slå d4, d6, d8, d10, d12, d20 och d100 med modifierare och historik.';

const faq: DiceRollerLocaleContent['faq'] = [
  {
    question: 'Hur kan jag simulera ett slag med fördel (advantage) som i D&D?',
    answer: 'Lägg till två d20-tärningar i påsen genom att klicka på d20-knappen två gånger. När du slår, titta på de två individuella resultaten och behåll det högsta. Det visade totalvärdet kommer att vara summan, men du kan se varje tärning separat i resultatöversikten.',
  },
  {
    question: 'Vad betyder den gröna eller röda färgen på resultaten?',
    answer: 'Gröna resultat indikerar att tärningen slog sitt högsta möjliga värde (en "krit"). Röda resultat indikerar det lägsta värdet (en "1", det sämsta möjliga resultatet). Detta gör det enkelt att upptäcka kritiska framgångar och misslyckanden på ett ögonblick.',
  },
  {
    question: 'Kan jag lägga till flera tärningar av samma typ?',
    answer: 'Ja. Varje klick på en tärning lägger till den i påsen. Om du klickar på d6 tre gånger visar påsen "3d6". För att minska antalet, klicka på "−"-knappen som visas bredvid varje tärningsgrupp i påsen.',
  },
  {
    question: 'Är digitala tärningar lika slumpmässiga som fysiska?',
    answer: 'Statistiskt sett, ja. Moderna JavaScript-motorer använder pseudoslumpartade algoritmer (xorshift128+) med en mycket högkvalitativ likformig fördelning. En riktig fysisk tärning kan ha små tillverkningsdefekter som påverkar resultaten; den digitala tärningen har inte det problemet.',
  },
  {
    question: 'Vad är d100 och hur används den?',
    answer: 'd100 (eller d%) genererar ett tal från 1 till 100 och används i procentbaserade spelsystem, som Call of Cthulhu eller Warhammer Fantasy Roleplay. Den representerar "direkt sannolikhet": om din Stealth-färdighet är 65%, behöver du slå 65 eller lägre för att lyckas.',
  },
];

const howTo: DiceRollerLocaleContent['howTo'] = [
  { name: 'Bygg din tärningspool', text: 'Klicka på tärningsknapparna (d4, d6, d8...) för att lägga till dem i din pool. Varje klick lägger till en tärning av den valda typen. Du kan blanda olika typer i samma slag.' },
  { name: 'Justera modifieraren', text: 'Använd "+"- och "−"-knapparna bredvid modifieraren för att lägga till bonusar eller avdrag (som förmågemodifieraren i D&D). Modifieraren läggs automatiskt till i totalen.' },
  { name: 'Slå tärningarna', text: 'Tryck på knappen "Slå tärning". Den högra panelen visar det slutliga resultatet och en översikt av varje enskild tärning, med "krits" (maxvärde) i grönt och misslyckanden (minvärde) i rött.' },
  { name: 'Kontrollera historiken', text: 'Varje slag registreras i historiken med tärningsnotationen som användes, det totala resultatet och den exakta tidpunkten. Du kan rensa historiken med tillhörande knapp.' },
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

export const content: DiceRollerLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor',
  bibliographyTitle: 'Slumpbibliografi',
  ui: {
    title: 'Tärningsgenerator',
    description: 'Må lyckan vara med dig.',
    rollBtn: 'Slå tärning',
    totalLabel: 'Total',
    historyLabel: 'Historik',
    clearHistoryBtn: 'Rensa historik',
    faqTitle: 'FAQ',
    bibliographyTitle: 'Referenser',
    addDiceLabel: 'Lägg till tärningar i påsen',
    bagLabel: 'Tärningspåse',
    emptyBagBtn: 'Töm',
    emptyBagText: 'Klicka på tärningarna för att lägga till',
    modifierLabel: 'Modifierare',
    rollManyLabel: 'Slå $COUNT tärningar',
    rollOneLabel: 'Slå $COUNT tärning',
    preRollText: 'Lägg till tärningar och slå',
    emptyHistoryText: 'Historik över slag visas här'
  },
  seo: [
    { type: 'title', text: 'Slumpens konst: Tärningars historia och matematik', level: 2 },
    { type: 'paragraph', html: 'Tärningar är en av mänsklighetens äldsta slumpgeneratorer. <strong>Astragaler</strong> — fotleder från får och getter — användes som primitiva fyrsidiga tärningar så tidigt som 5000 f.Kr. i Mesopotamien och Egypten. Evolutionen från snidade ben till moderna ikosaedrar i epoxiharts är inte bara estetisk: det är en resa genom sannolikhetsteori och spelmekanisk design.' },
    { type: 'title', text: 'Den vanliga tärningsfamiljen', level: 3 },
    { type: 'paragraph', html: 'Den mest spridda uppsättningen tärningar i rollspel — populariserad av <strong>Dungeons &amp; Dragons</strong> 1974 — består av de fem platonska kropparna plus två ytterligare former: d4 (tetraeder), d6 (kub), d8 (oktaeder), d10 (pentagonal trapetsoeder), d12 (dodekaeder), d20 (ikosaeder) och d100 (procenttärning). Varje polyeder garanterar en likformig fördelning: alla sidor har exakt samma sannolikhet att hamna uppåt.' },
    { type: 'list', items: [
      '<strong>d4 – Tetraeder:</strong> Den farligaste att trampa på barfota. Fyra triangulära sidor, 25% sannolikhet per sida. Används ofta för dolkskada eller trollformler på låg nivå.',
      '<strong>d6 – Kub:</strong> Den mest universella tärningen. Har funnits i alla brädspel sedan det egyptiska senet. Dess kubiska geometri garanterar perfekt fördelning.',
      '<strong>d8 – Oktaeder:</strong> Tärningen för spjut eller stridsyxa. Åtta liksidiga triangulära sidor. 12,5% sannolikhet per sida.',
      '<strong>d10 – Pentagonal trapetsoeder:</strong> Den enda icke-platonska kroppen i standarduppsättningen. Två motsatta sidor per "hörn". Viktig för d100 (två d10:or kombinerade).',
      '<strong>d12 – Dodekaeder:</strong> Barbarens tärning. Tolv femkantiga sidor. Underskattas i många system, men huvudperson för barbaren i D&D 5e.',
      '<strong>d20 – Ikosaeder:</strong> Rollspelens kung. Tjugo triangulära sidor. Huvudperson i d20-systemet: avgör framgång eller misslyckande för nästan alla handlingar.',
      '<strong>d100 – Procenttärning:</strong> Två d10:or kombinerade (tiotal + ental). Definierar exakta sannolikheter i system som Call of Cthulhu eller Warhammer Fantasy.',
    ]},
    { type: 'stats', items: [
      { value: '5000 f.Kr.', label: 'Första tärningarna (astragaler)', icon: 'mdi:history' },
      { value: '1974', label: 'D&D populariserade settet', icon: 'mdi:sword' },
      { value: '7 typer', label: 'Standard-rollspelstärningar', icon: 'mdi:dice-multiple' },
      { value: '2¹²⁸', label: 'JS-slumpens period', icon: 'mdi:function-variant' },
    ], columns: 4 },
    { type: 'title', text: 'Sannolikheter och fördelningskurvor', level: 3 },
    { type: 'paragraph', html: 'När du slår en enkel tärning får du en <strong>diskret likformig fördelning</strong>: varje resultat har exakt samma sannolikhet (1/n). Men så fort du kombinerar flera tärningar omvandlas den platta kurvan till en <strong>approximativ normalfördelning</strong>. Det är därför 2d6 inte är samma sak som 1d12: med två sexsidiga tärningar är sannolikheten att slå en 7:a 6/36 ≈ 16,7%, medan extremvärdena (2 och 12) bara inträffar 2,8% av gångerna.' },
    { type: 'tip', title: 'Fördel och nackdel (Advantage/Disadvantage, D&D 5e)', html: 'Mekaniken <strong>Fördel</strong> innebär att man slår 2d20 och behåller det högre resultatet. Matematiskt höjer detta genomsnittet från 10,5 till ca 13,8. <strong>Nackdel</strong> gör motsatsen: behåll det lägre, vilket sänker genomsnittet till ca 7,2. Vår generator låter dig simulera detta genom att lägga till två d20 i påsen och jämföra resultaten.' },
    { type: 'title', text: 'Modifierare: Bron mellan tärning och karaktär', level: 3 },
    { type: 'paragraph', html: 'I de flesta rollspelssystem agerar inte tärningen ensam: en <strong>modifierare</strong> som representerar karaktärens förmågor läggs till eller dras ifrån. I D&D 5e betyder en Strength-modifierare på +5 att du slår 1d20, lägger till 5 och jämför resultatet mot fiendens Armor Class. Vår generator innehåller en kontroll för modifierare för att troget återspegla dessa mekaniker.' },
    { type: 'tip', title: 'Standard för tärningsnotation', html: 'Notation <strong>XdY+Z</strong> är standard inom rollspel: X tärningar med Y sidor med modifierare Z. "3d6+2" betyder slå tre sexsidiga tärningar och lägg till 2 till totalen. Vårt verktyg använder denna notation i historiken så att du enkelt kan dela eller spara dina slag.' },
    { type: 'glossary', items: [
      { term: 'Kritisk träff', definition: 'Ett slag med det högsta värdet på en tärning (t.ex. en 20:a på en d20). Utlöser vanligtvis speciella bonus-effekter i de flesta rollspelssystem.' },
      { term: 'Fumble / Nat 1', definition: 'Att slå det lägsta värdet (1) på en tärning. Resulterar ofta i ett dramatiskt misslyckande eller negativa konsekvenser.' },
      { term: 'Dice Pool', definition: 'En samling tärningar som slås samtidigt. Poolen i vårt verktyg visar varje tärningstyp grupperad efter antal (t.ex. 3d6 + 2d8).' },
      { term: 'Modifierare', definition: 'Ett fast tal som läggs till eller dras ifrån ett resultat, och som representerar en karaktärs skicklighet, attributbonus eller situationell bestraffning.' },
      { term: 'Procentslag', definition: 'Ett slag som använder två d10 för att producera ett resultat från 1–100, används i färdighetsbaserade system där förmågor mäts i procent.' },
    ]},
  ],
  faq,
  bibliography: [
    { name: 'D&D Beyond – Tärningsmekanikens regler', url: 'https://www.dndbeyond.com/sources/basic-rules/using-ability-scores' },
    { name: 'Roll20 – Virtuellt spelbord och tärningssystem', url: 'https://roll20.net/' },
    { name: 'Pathfinder – d20 System Reference', url: 'https://paizo.com/pathfinder' },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
