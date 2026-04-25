import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { SynesthesiaPainterLocaleContent } from '../index';

const slug = 'synesthesia-painter';
const title = '共感覚ペインター';
const description = '書記素-色共感覚に基づき、文字の色を可視化します。各文字が固有の色を持ち、テキストを色彩豊かなアートへと変換します。';

const faq: SynesthesiaPainterLocaleContent['faq'] = [
  {
    question: '共感覚を持つ人は皆、各文字に対して同じ色を見ているのですか？',
    answer: 'いいえ。共感覚に基づく色は、一人一人の個人によって異なります。統計的な傾向（多くの人にとって「A」は赤に見えやすいなど）は存在しますが、全く同じパレットを持つ共感覚者は二人といません。このツールは、科学的な「正解」ではなく、人口調査で最も頻繁に報告された色を使用しています。',
  },
  {
    question: 'このツールを使い続ければ、共感覚を身につけることができますか？',
    answer: '厳密な神経学的な意味では不可能です。本物の共感覚は神経系の特性であり、学習によって習得できるスキルではありません。しかし、色と文字の関連付けを繰り返し体験することで、強い連想記憶が形成されることがあります。いくつかの研究では、これらの関連付けを練習することによって、テキストの記憶力が向上する可能性が示唆されています。',
  },
  {
    question: '「オーラ」モードは何のためのものですか？',
    answer: 'オーラモードは、一部の共感覚者が語る「文字の中に色が塗りつぶされているのではなく、文字の周囲に色が浮いていたり、光り輝いたりして見える」という感覚を再現したものです。特に暗い背景では、より幻想的で没入感のある視覚体験を提供します。',
  },
  {
    question: '「ドット」モードには科学的な根拠がありますか？',
    answer: 'これは芸術的な抽象化です。見慣れた文字の形を排除することで、テキストをその「色彩的な本質」へと還元します。その結果、点描画やデータの可視化のような視覚効果が生まれ、意味に邪魔されることなく、テキストが持つ「色の署名」を感じ取ることができます。',
  },
  {
    question: 'なぜ「I」や「O」などの一部の文字が白や黒なのですか？',
    answer: '共感覚の研究において、母音の「I」や「O」、あるいは「W」などは、しばしば白や透明、あるいは黒として描写されます。このツールでは、視認性を常に確保するため、背景色に合わせてこれらの色を調整しています（暗い背景では白、明るい背景では黒）。',
  },
];

const howTo: SynesthesiaPainterLocaleContent['howTo'] = [
  { name: 'テキストを書く', text: '入力エリアをクリックして、文字を打ち込みます。各文字は、統計的な共感覚の関連付けに基づいた色で表示されます。' },
  { name: '表示モードを切り替える', text: '右上のボタンを使用して、「文字」（色のついたテキスト）、「ドット」（色の円）、「オーラ」（色彩の光彩を放つ文字）を切り替えます。' },
  { name: '様々なテキストを試す', text: '名前や異国の言葉、文章などを入力して、ユニークな色彩パレットを発見してください。長い単語は魅力的な色のグラデーションを生み出します。' },
  { name: '消去してやり直す', text: '下部バーの「消去」ボタンを使用してキャンバスをリセットし、新しいテキストで探索を続けましょう。' },
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
  inLanguage: 'ja',
};

export const content: SynesthesiaPainterLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  ui: {
    title: '共感覚ペインター',
    description: '言葉を色彩のアートへと変換。',
    modeLetters: '文字',
    modeDots: 'ドット',
    modeAura: 'オーラ',
    placeholder: 'ここに入力...',
    footerText: '文字を入力して、あなただけのカラーパレットを見つけましょう',
    clearBtn: '消去',
    faqTitle: 'FAQ',
    bibliographyTitle: '参考文献'
  },
  seo: [
    { type: 'title', text: '書記素-色共感覚とは？', level: 2 },
    { type: 'paragraph', html: '<strong>共感覚（シナスタジア）</strong>とは、ある一つの刺激に対して、通常の感覚に加えて別の種類の感覚が自動的に引き起こされる神経学的な状態を指します。最も研究が進んでおり、一般的な種類が<strong>書記素-色共感覚</strong>です。これを持つ人は、各文字や数字に対して、固有で不変の鮮やかな色を感じます。これは想像や比喩ではなく、共感覚者にとって文字「A」が赤であることは、火が熱いことと同じくらい自明な事実です。このツールは、人口調査で各書記素に対して最も頻繁に報告された色に基づく<em>統計的パレット</em>を適用しています。' },
    { type: 'title', text: '神経科学：交差活性化理論', level: 3 },
    { type: 'paragraph', html: '書記素-色共感覚の最も有力な神経学的モデルは<strong>交差活性化（クロスタクティベーション）</strong>です。文字の形を認識する側の側頭皮質（紡錘状回）は、色を処理する領域（V4野）と解剖学的に隣接しています。共感覚を持つ人では、これらの領域間の構造的または機能的な結合が強いため、文字を認識すると同時に色のニューロンも活性化されます。機能的磁気共鳴画像法（fMRI）を用いた研究では、共感覚者がモノクロのテキストを読んでいる際にも、V4野に本物の活性化が見られることが確認されています。' },
    { type: 'tip', title: '3つの表示モード', html: '<strong>文字：</strong> 書記素ごとに色分けされたオリジナルのテキスト。文章全体の「色彩的なメロディ」を見るのに適しています。<strong>ドット：</strong> 各文字がその色の円に変わります。テキストの意味が消え、色の音楽だけが残ります。<strong>オーラ：</strong> 文字が自らエネルギーを放つように、その色の光彩をまといます。' },
    { type: 'title', text: '統計と色の普遍性', level: 3 },
    { type: 'paragraph', html: '共感覚の色は個人特有のものですが、Simnerら（2006）やEaglemanら（2007）の研究により、顕著な統計的パターンが見出されました。多くの人にとって母音の<strong>A</strong>は赤く、<strong>O</strong>は白または黒、<strong>S</strong>は青緑や緑系、<strong>E</strong>は緑や白に見える傾向があります。興味深いことに、色と文字の関連性は言語文化内では一貫性が高い一方で、異なる言語間では異なることがあり、幼少期のアルファベット学習が影響している可能性が示唆されています。' },
    { type: 'list', items: [
      '<strong>有病率：</strong> 人口の約4%がある程度の書記素-色共感覚を持っているとされています。潜在的なケースを含めると6〜8%に達するという近年の研究もあります。',
      '<strong>男女差：</strong> その原因は完全には解明されていませんが、共感覚は男性よりも女性に3〜6倍多く見られることが知られています。',
      '<strong>遺伝性：</strong> 明確な遺伝的要素があり、家族内で受け継がれる傾向があります（ただし、常に同じ種類の共感覚とは限りません）。',
      '<strong>一貫性：</strong> 後天的な学習とは異なり、共感覚の色は長期間にわたって極めて安定しています。10年間の追跡調査でも、90%以上の一貫性が示されています。',
      '<strong>有名な共感覚者：</strong> ウラジーミル・ナボコフ、ワシリー・カンディンスキー、ニコラ・テスラ、ビリー・ジョエルなどが、作品に影響を与えた共感覚体験を公表しています。'
    ]},
    { type: 'stats', items: [
      { value: '4–8%', label: '共感覚を持つ人口', icon: 'mdi:brain' },
      { value: '90%+', label: '10年後でも変わらない色の一貫性', icon: 'mdi:check-circle' },
      { value: '3–6倍', label: '女性に多く見られる傾向', icon: 'mdi:gender-female' },
      { value: '26+10', label: '対応する文字と数字の色', icon: 'mdi:alphabetical' }
    ], columns: 4 },
    { type: 'title', text: '芸術と共感覚：感覚が融合する時', level: 3 },
    { type: 'paragraph', html: '抽象表現主義の創始者である<strong>ワシリー・カンディンスキー</strong>は、書記素-色と音楽-色の両方の共感覚を持っていました。彼は楽器の音を色で聞き（黄色はトランペット、深い青はチェロなど）、その感覚を抽象芸術の理論構築に役立てました。音楽界では、<strong>アレクサンドル・スクリャービン</strong>が交響曲『プロメテウス：火の詩』において、音に対応する色を投影する装置「色光ピアノ」のためのパートを書き上げました。' },
    { type: 'tip', title: 'このツールのカラーパレット', html: 'このツールの色割り当ては、科学文献における最も一般的な統計データに基づいています。<strong>A → 赤</strong>、<strong>E → 緑</strong>、<strong>I → 背景に応じた白/黒</strong>、<strong>O → 黒/白</strong>、<strong>U → 琥珀色</strong>。子音についてはパレットが多様ですが、視認性を最優先し、背景とのコントラストを重視しています。' }
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
