import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { SynesthesiaPainterLocaleContent } from '../index';

const slug = 'synesthesie-schilder';
const title = 'Synesthesie Schilder';
const description = 'Visualiseer de kleur van woorden volgens grafeem-kleur synesthesie. Elke letter heeft zijn eigen kleur, waardoor tekst verandert in chromatische kunst.';

const faq: SynesthesiaPainterLocaleContent['faq'] = [
  {
    question: 'Zien alle synestheten dezelfde kleuren voor elke letter?',
    answer: 'Nee. Synesthetische kleuren zijn uniek voor elke persoon. Er bestaan statistische tendensen (A is voor velen vaak rood), maar geen twee synestheten hebben exact hetzelfde palet. Deze tool gebruikt de kleuren die het vaakst worden gerapporteerd in populatiestudies, niet de "juiste".',
  },
  {
    question: 'Kan ik synesthesie ontwikkelen door deze tool continu te gebruiken?',
    answer: 'Niet in de strikt neurologische zin. Echte synesthesie is een kenmerk van het zenuwstelsel, geen aangeleerde vaardigheid. Herhaald gebruik van kleur-letterassociaties kan echter sterke associatieve herinneringen creëren. Sommige studies suggereren dat het oefenen van deze associaties de tekstgeheugen kan verbeteren.',
  },
  {
    question: 'Waar dient de "Aura"-modus voor?',
    answer: 'De Aura-modus simuleert hoe sommige synestheten beschrijven dat ze kleuren zien "zweven" of "gloeien" rond letters in plaats van dat ze erin zijn geïntegreerd. Het creëert een meer atmosferische en immersieve visuele ervaring, vooral op een donkere achtergrond.',
  },
  {
    question: 'Heeft de "Dots"-modus een wetenschappelijke basis?',
    answer: 'Het is een artistieke abstractie. Het reduceert de tekst tot zijn "chromatische essentie" door de herkenbare vorm van de letters te elimineren. Het resultaat lijkt op chromatische datavisualisaties of pointillistische schilderijen, en stelt je in staat de "kleursignatuur" van een tekst te zien zonder dat de betekenis interfereert.',
  },
  {
    question: 'Waarom zijn sommige letters zoals I en O wit of zwart?',
    answer: 'In synesthesiestudies worden de klinkers I en O, en de letter W, vaak beschreven als wit, transparant of zwart. Deze tool past die kleuren aan op de actieve achtergrond: wit op een donkere achtergrond, zwart op een lichte achtergrond, om altijd de leesbaarheid te garanderen.',
  },
];

const howTo: SynesthesiaPainterLocaleContent['howTo'] = [
  { name: 'Schrijf tekst', text: 'Klik op het schrijfgebied en begin met typen. Elke letter verschijnt gekleurd volgens zijn statistische synesthetische associatie.' },
  { name: 'Verander visualisatiemodus', text: 'Gebruik de knoppen rechtsboven om te schakelen tussen Letters (gekleurde tekst), Dots (kleurencirkels) en Aura (lichtgevende letters met chromatische halo\'s).' },
  { name: 'Verken verschillende teksten', text: 'Schrijf namen, woorden in verschillende talen of zinnen om hun unieke chromatische palet te ontdekken. Lange woorden creëren fascinerende visuele gradiënten.' },
  { name: 'Wissen en opnieuw beginnen', text: 'Gebruik de knop "Wissen" in de onderste balk om het canvas leeg te maken en een nieuwe tekst te verkennen.' },
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

export const content: SynesthesiaPainterLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde Vragen',
  ui: {
    title: 'Synesthesie Schilder',
    description: 'Transformeer je woorden in chromatische kunst.',
    modeLetters: 'Letters',
    modeDots: 'Dots',
    modeAura: 'Aura',
    placeholder: 'Typ hier...',
    footerText: 'Typ om je persoonlijke kleurenpalet te ontdekken',
    clearBtn: 'Wissen',
    faqTitle: 'FAQ',
    bibliographyTitle: 'Referenties'
  },
  seo: [
    { type: 'title', text: 'Wat is grafeem-kleur synesthesie?', level: 2 },
    { type: 'paragraph', html: '<strong>Synesthesie</strong> is een neurologische aandoening waarbij de stimulatie van één zintuig automatisch een reactie in een ander zintuig teweegbrengt. De meest bestudeerde en voorkomende variant is <strong>grafeem-kleur synesthesie</strong>: degenen die het hebben, nemen elke letter of elk cijfer waar met een intrinsieke, constante en levendige kleur. Het is geen verbeelding of metafoor; voor een synestheet is de letter "A" rood op dezelfde manier als vuur heet is. Deze tool past een <em>statistisch palet</em> toe op basis van de kleuren die het vaakst worden gerapporteerd voor elk grafeem in populatiestudies.' },
    { type: 'title', text: 'Neurowetenschap: de cross-activatietheorie', level: 3 },
    { type: 'paragraph', html: 'Het meest geaccepteerde neurologische model voor grafeem-kleur synesthesie is <strong>cross-activatie</strong>. De gebieden van de temporale cortex die betrokken zijn bij het herkennen van lettervormen (gyrus fusiformis) grenzen anatomisch aan de regio\'s die kleur verwerken (gebied V4). Bij mensen met synesthesie is er een grotere structurele of functionele connectiviteit tussen deze regio\'s, zodat het herkennen van een letter ook kleurneuronen activeert. Functionele neuroimaging (fMRI) onderzoek heeft bevestigd dat synestheten echte activatie in V4 vertonen bij het lezen van tekst, zelfs als deze monochroom is.' },
    { type: 'tip', title: 'De drie visualisatiemodi', html: '<strong>Letters:</strong> de originele tekst gekleurd per grafeem. Ideaal voor het zien van de "chromatische melodie" van een volledige tekst. <strong>Dots:</strong> elk karakter wordt een cirkel van zijn kleur; de tekst verdwijnt en alleen de kleurmuziek blijft over. <strong>Aura:</strong> letters stralen een halo uit van hun kleur, alsof de tekst gloeit met zijn eigen energie.' },
    { type: 'title', text: 'Statistieken en kleuruniversalia', level: 3 },
    { type: 'paragraph', html: 'Hoewel synesthetische kleuren uniek zijn voor elk individu, vonden studies van Simner et al. (2006) en Eagleman et al. (2007) significante statistische patronen. De klinker <strong>A</strong> is voor de meesten vaak rood; <strong>O</strong> is wit of zwart; <strong>S</strong> verschijnt in blauwgroene of groene tinten; <strong>E</strong> verschijnt als groen of wit. Interessant is dat kleur-letterassociaties consistenter zijn binnen een taalcultuur dan over verschillende culturen heen, wat wijst op een rol voor het vroege leren van het alfabet.' },
    { type: 'list', items: [
      '<strong>Prevalentie:</strong> ongeveer 4% of de bevolking heeft in zekere mate grafeem-kleur synesthesie, hoewel recentere studies dit cijfer verhogen naar 6-8% wanneer subklinische vormen worden meegerekend.',
      '<strong>Genderbias:</strong> synesthesie komt 3 tot 6 keer vaker voor bij vrouwen dan bij mannen, hoewel de oorzaken van dit verschil nog niet volledig zijn verklaard.',
      '<strong>Erfelijkheid:</strong> het heeft een duidelijke genetische component: het komt vaak voor in families, hoewel niet altijd met hetzelfde type synesthesie.',
      '<strong>Consistentie:</strong> in tegenstelling tot aangeleerde associaties zijn synesthetische kleuren buitengewoon stabiel in de loop van de tijd. 10-jarige vervolgstudies tonen een consistentie van meer dan 90% aan in grafeem-kleurassociaties.',
      '<strong>Beroemde synestheten:</strong> Vladimir Nabokov, Wassily Kandinsky, Nikola Tesla en Billy Joel hebben publiekelijk synesthetische ervaringen beschreven die hun werk hebben beïnvloed.',
    ]},
    { type: 'stats', items: [
      { value: '4–8%', label: 'Bevolking met synesthesie', icon: 'mdi:brain' },
      { value: '90%+', label: 'Kleurconsistentie over 10 jaar', icon: 'mdi:check-circle' },
      { value: '3–6×', label: 'Vaker voorkomend bij vrouwen', icon: 'mdi:gender-female' },
      { value: '26+10', label: 'Gekleurde letters & cijfers', icon: 'mdi:alphabetical' },
    ], columns: 4 },
    { type: 'title', text: 'Kunst en synesthesie: wanneer de zintuigen samensmelten', level: 3 },
    { type: 'paragraph', html: '<strong>Wassily Kandinsky</strong>, grondlegger van het abstract expressionisme, ervoer zowel grafeem-kleur als muziek-kleur synesthesie: hij hoorde instrumenten in kleuren (geel was een trompet, diepblauw een cello) und gebruikte deze percepties om zijn theorie van abstracte kunst te creëren. In de muziek componeerde <strong>Alexander Scriabin</strong> <em>Prometheus: The Poem of Fire</em> met een partij voor "tastiera per luce" (lichtklavier), ontworpen om kleuren te projecteren die overeenkomen met elke noot.' },
    { type: 'tip', title: 'Kleurenpalet van deze tool', html: 'De kleurtoewijzingen zijn geïnspireerd op de meest voorkomende statistische gegevens in de wetenschappelijke literatuur. <strong>A → rood</strong>, <strong>E → groen</strong>, <strong>I → wit/zwart afhankelijk van de achtergrond</strong>, <strong>O → zwart/wit</strong>, <strong>U → amber</strong>. Medeklinkers volgen minder uniforme patronen, maar het contrast met de achtergrond krijgt altijd prioriteit om de leesbaarheid te garanderen.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
