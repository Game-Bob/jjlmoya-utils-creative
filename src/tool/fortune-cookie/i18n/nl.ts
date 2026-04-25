import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { FortuneCookieLocaleContent } from '../index';
import { bibliography } from '../bibliography';

const slug = 'gelukskoekje-online';
const title = 'Gelukskoekje';
const description = 'Bekijk je dagelijkse bestemming en ontdek je geluksgetallen. Eén voorspelling per dag, onthuld met een klik.';

const faq: FortuneCookieLocaleContent['faq'] = [
  {
    question: 'Kan ik meer dan één koekje per dag openen?',
    answer: 'Het lot spreekt slechts één keer per dag. We bewaren je voorspelling op het apparaat zodat deze je de hele dag door begeleidt.'
  },
  {
    question: 'Worden de voorspellingen willekeurig gegenereerd?',
    answer: 'Ja — elke dag wordt er een willekeurige voorspelling geselecteerd en lokaal opgeslagen. Elk van de 25 voorspellingen heeft evenveel kans om gekozen te worden, wat zorgt voor variatie door de tijd heen.'
  }
];

const howTo: FortuneCookieLocaleContent['howTo'] = [
  { name: 'Breek het koekje', text: 'Klik herhaaldelijk op het koekje om het open te breken.' },
  { name: 'Lees je voorspelling', text: 'Ontdek de verborgen boodschap binnenin en je geluksgetallen voor de dag.' }
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
  inLanguage: 'nl',
};

export const content: FortuneCookieLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde Vragen',
  ui: {
    title: 'Online Gelukskoekje',
    description: 'Jouw dagelijkse digitale orakel.',
    instruction: 'Tik op het koekje om je lot te onthullen',
    dailyStatus: 'Je lot is onthuld voor vandaag.',
    shareBtn: 'Deel Wijsheid',
    shareTitle: 'Mijn Gelukskoekje',
    shareText: 'Het lot heeft gesproken: "$TEXT"\nMijn getallen: $NUMS\n\nOntdek hier jouw voorspelling:',
    copied: 'Gekopieerd!',
    fortunes: JSON.stringify([
      "Het geluk dat je zoekt zit in een ander koekje.",
      "Tel niet de dagen, zorg dat de dagen tellen.",
      "Een reis van duizend mijl begint met een enkele stap.",
      "Een fout is de inleiding tot ontdekking.",
      "Je vermogen om te leren is je grootste bezit.",
      "Glimlach, het universum kijkt naar je.",
      "Geduld is een boom met een bittere wortel maar zeer zoete vruchten.",
      "Wees niet bang om langzaam te groeien, wees alleen bang om stil te blijven staan.",
      "Vandaag is het morgen waar je je gisteren zorgen over maakte.",
      "Geluk is niet iets dat kant-en-klaar is. Het komt voort uit je eigen daden.",
      "Als je de windrichting niet kunt veranderen, pas dan je zeilen aan.",
      "Wat je nu plant, zul je later oogsten.",
      "Creativiteit is intelligentie die plezier heeft.",
      "Zoek niet naar fouten, zoek naar oplossingen.",
      "Je instelling, niet je aanleg, zal je hoogte bepalen.",
      "Succes is de som van kleine inspanningen die dag na dag worden herhaald.",
      "Geloof dat je het kunt en je bent al halverwege.",
      "De enige manier om geweldig werk te leveren is door te houden van wat je doet.",
      "Het leven is 10% wat je overkomt en 90% hoe je erop reageert.",
      "Wees de verandering die je in de wereld wilt zien.",
      "De beste manier om de toekomst te voorspellen is door deze uit te vinden.",
      "Eenvoud is de ultieme verfijning.",
      "Je bent de meester van je lot en de kapitein van je ziel.",
      "Binnenkort ontvang je nieuws dat je perspectief zal veranderen.",
      "Een onverwachte reis zal je veel plezier brengen."
    ]),
    faqTitle: 'FAQ',
  },
  seo: [
    { type: 'title', text: 'Het Mysterie van het Gelukskoekje', level: 2 },
    { type: 'paragraph', html: 'Heb je je ooit afgevraagd waar deze curieuze koekjes vandaan komen? Hoewel we ze associëren met Chinees eten, is hun oorsprong een fascinerende reis tussen Japan en de Verenigde Staten. Het gelukskoekje zoals we dat nu kennen, is waarschijnlijk begin 20e eeuw in Californië uitgevonden, niet in China — waar ze vrijwel onbekend zijn.' },
    { type: 'tip', title: 'Hoe ons Orakel Werkt', html: 'Elke dag kun je één koekje openen. Het systeem bewaart je bestemming zodat je deze 24 uur lang kunt onthouden. De voorspelling wordt lokaal in je browser opgeslagen — volledig privé, geen server bij betrokken. Kom morgen terug voor een nieuwe voorspelling!' },
    { type: 'title', text: 'De Filosofie van Orakels', level: 3 },
    { type: 'paragraph', html: 'Mensen hebben in onzekere tijden altijd naar leiding gezocht. Van het Orakel van Delphi tot de I Ching, waarzegsystemen vervullen een consistente psychologische functie: ze geven ons toestemming om <strong>stil te staan en te reflecteren</strong>. Een gelukskoekje voorspelt de toekomst niet — het zet je aan om erover na te denken.' },
    { type: 'list', items: [
      '<strong>Het oude China:</strong> De I Ching (Boek der Veranderingen, ~1000 v. Chr.) gebruikte hexagrammen om beslissingen te leiden en het lot te interpreteren.',
      '<strong>Klassiek Griekenland:</strong> Het Orakel van Delphi trok zowel heersers als burgers aan met cryptische uitspraken die als goddelijke leiding werden geïnterpreteerd.',
      '<strong>Modern Japan:</strong> Omikuji geluksbriefjes bij Shinto-heiligdommen, vastgebonden aan boomtakken, mengen het lot met ritueel.',
      '<strong>20e-eeuwse VS:</strong> Gelukskoekjes doken op in Japans-Amerikaanse gemeenschappen voordat ze synoniem werden met de Chinees-Amerikaanse keuken.'
    ]},
    { type: 'stats', items: [
      { value: '3 miljard+', label: 'Jaarlijks gemaakte gelukskoekjes', icon: 'mdi:cookie' },
      { value: '~1000 v. Chr.', label: 'Oorsprong I Ching', icon: 'mdi:book-open-variant' },
      { value: '25', label: 'Voorspellingen in dit orakel', icon: 'mdi:star-shooting' },
      { value: '1/dag', label: 'Eén bestemming per dag', icon: 'mdi:calendar-today' }
    ], columns: 4 },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
