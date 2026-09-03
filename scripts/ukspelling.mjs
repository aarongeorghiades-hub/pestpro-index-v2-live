// G4's detection classes: British spelling, defined MORPHOLOGICALLY.
//
// WHY THIS FILE EXISTS. Until S62 R2, G4 was an enumerated list of about
// eighteen words. Its name claimed a concept — "no UK spellings on a US route" —
// while its implementation knew only those eighteen strings. S62 R1 wrote
// "harbourage" twice on a new route and G4 passed, because "harbour" was not on
// the list. That is the M8b failure exactly: a matcher whose name is broader
// than its body, reporting a clean zero it did not earn.
//
// The remedy is not to add the two words that were missed. It is to define the
// classes the concept actually has, so the next word nobody thought of is
// caught by the class it belongs to rather than missed by the list it is absent
// from.
//
// TWO RULES EVERY CLASS BELOW OBEYS:
//
// 1. INFLECTIONS ARE DERIVED, NOT ENUMERATED. A class that catches `harbour`
//    must catch harbours, harboured, harbouring and harbourage. Most classes do
//    this with a trailing `\w*` on a stem that already contains the British
//    letters; where that is unsafe, an explicit suffix set is used instead.
//
// 2. EVERY CLASS CARRIES ITS OWN probePos AND probeNeg, AND BOTH RUN ON EVERY
//    INVOCATION. The negative probe is the important one: it names the word the
//    class must NOT fire on. `organis` matching inside `organism` (S61 R8) is
//    the canonical failure, and the -ise class's probeNeg still asserts it.
//
// WHERE A CLASS IS DELIBERATELY NARROWER THAN ITS NAME, THE COMMENT SAYS SO AND
// SAYS WHY. A false positive on this gate costs a real edit to real prose; a
// stated false negative costs a word the next round can still find by reading.

// ---------------------------------------------------------------------------

// -our / -or. A STEM LIST, not a generic `\w+our\b`, which would fire on four,
// hour, your, pour, tour, flour, sour, devour, contour and detour. Each stem
// already contains "our", so a trailing \w* keeps every inflection inside the
// class: harbour -> harbourage, colour -> colourless, neighbour -> neighbourhood.
//
// NOTE the words NOT here: humorous, vigorous, glamorous, honorary and laborious
// drop the u in BOTH dialects, so they are not British spellings and must not be
// matched. Only forms that RETAIN "our" are in scope.
const OUR_STEMS = [
  'colour', 'behaviour', 'favour', 'flavour', 'harbour', 'honour', 'humour',
  'labour', 'neighbour', 'odour', 'rumour', 'savour', 'splendour', 'valour',
  'vapour', 'vigour', 'armour', 'endeavour', 'candour', 'clamour', 'demeanour',
  'fervour', 'parlour', 'rigour', 'saviour', 'tumour', 'ardour', 'succour',
];

// -ise / -isation. THE HIGHEST FALSE-POSITIVE RISK ON THE PAGE, because dozens
// of -ise words are correct in both dialects: exercise, advise, revise, devise,
// surprise, comprise, compromise, despise, disguise, enterprise, franchise,
// improvise, merchandise, promise, supervise, televise, precise, concise,
// paradise, expertise, demise, premise, chastise, advertise, excise, incise.
// A generic `\w+ise\b` is therefore unusable and is not used.
//
// The suffix set is EXPLICIT rather than `\w*` for one reason: `organis` + `m`
// is `organism`, which is spelled identically in US and UK English. Listing the
// suffixes excludes it by construction. This is the S61 R8 defect, and the
// class probeNeg re-proves the exclusion on every run.
const ISE_STEMS = [
  'organis', 'realis', 'recognis', 'apologis', 'categoris', 'prioritis',
  'summaris', 'utilis', 'minimis', 'maximis', 'specialis', 'characteris',
  'emphasis', 'criticis', 'memoris', 'authoris', 'sterilis', 'fertilis',
  'neutralis', 'stabilis', 'standardis', 'normalis', 'generalis', 'localis',
  'visualis', 'penalis', 'finalis', 'legalis', 'mobilis', 'immunis', 'colonis',
  'harmonis', 'modernis', 'publicis', 'randomis', 'sanitis', 'socialis',
  'symbolis', 'sympathis', 'theoris', 'vaporis', 'energis', 'equalis',
  'familiaris', 'hospitalis', 'idealis', 'immobilis', 'industrialis', 'itemis',
  'jeopardis', 'legitimis', 'marginalis', 'materialis', 'mesmeris', 'moisturis',
  'optimis', 'oxidis', 'pasteuris', 'patronis', 'personalis', 'pulveris',
  'revitalis', 'scrutinis', 'stigmatis', 'subsidis', 'synthesis', 'tantalis',
  'terroris', 'urbanis', 'vandalis', 'victimis', 'vocalis', 'weaponis',
  'computeris', 'popularis', 'centralis', 'decentralis', 'sensitis',
  'desensitis', 'nationalis', 'rationalis', 'commercialis', 'monopolis',
];
// Note the absence of `es` below is deliberate for -yse only; -ise keeps it.
const ISE_SUFFIX = '(?:e|es|ed|ing|er|ers|ation|ations|ational|able|ably)';

// -yse. Suffix set EXCLUDES `es` on purpose. "analyses" is the correct US plural
// of "analysis" as well as the British third-person verb, so matching it would
// fire on correct US prose. That is a STATED FALSE NEGATIVE: a British
// "analyses" will not be caught here and must be found by reading. A false
// positive would be worse, because it would license an edit to correct text.
// "analysis" is excluded by the same suffix set.
const YSE_STEMS = ['analys', 'paralys', 'catalys', 'dialys', 'hydrolys', 'electrolys'];
const YSE_SUFFIX = '(?:e|ed|ing|er|ers)';

// -re / -er. Word-internal matching is allowed on both sides so that kilometre,
// epicentre and millilitre are caught. No US word contains any of these strings:
// the US forms are center, meter, liter, fiber, theater, somber, caliber,
// luster, specter, meager, ocher, saltpeter, maneuver.
const RE_STEMS = [
  'centre', 'metre', 'litre', 'fibre', 'theatre', 'sombre', 'calibre', 'lustre',
  'spectre', 'sceptre', 'meagre', 'ochre', 'saltpetre', 'manoeuvre', 'reconnoitre',
];

// -ce / -se noun/verb pairs. ONLY the forms that are British-only.
//
// practice/practise is the trap the brief names. In US English "practice" is
// BOTH the noun and the verb, so it is correct and is NOT matched. "practise"
// is never US and is matched. The class therefore contains practise and not
// practice — the asymmetry is the whole point.
//
// advice/advise is EXCLUDED ENTIRELY: both are correct in both dialects.
const CE_STEMS = ['licence', 'defence', 'offence', 'pretence', 'practise'];

// -ogue / -og. INCLUDED IN THE MATCHER, BUT SEE THE RULING NOTE.
// catalogue, dialogue and analogue are all listed by US dictionaries as
// acceptable US variants, and "dialogue" is the dominant US form. This class is
// therefore a REPORTING class: it surfaces occurrences for a human decision and
// its hits are not automatically convertible. Kept in G4 so the count is
// visible rather than invisible.
const OGUE_STEMS = [
  'catalogue', 'dialogue', 'analogue', 'monologue', 'epilogue', 'prologue',
  'travelogue', 'homologue', 'demagogue', 'pedagogue',
];

// Doubled consonant before a vowel suffix. A STEM LIST, because a generic
// `\w+lled\b` fires on controlled, compelled, expelled, propelled, patrolled,
// enrolled and installed — all correct in both dialects, because their stress
// falls on the final syllable and both dialects double there. Only stems whose
// final syllable is UNSTRESSED belong here.
const DOUBLE_STEMS = [
  'travel', 'label', 'model', 'cancel', 'counsel', 'jewel', 'marvel', 'signal',
  'fuel', 'total', 'equal', 'level', 'quarrel', 'rival', 'initial', 'channel',
  'dial', 'funnel', 'panel', 'parcel', 'shovel', 'tunnel', 'unravel', 'grovel',
  'snivel', 'pencil', 'stencil', 'councel', 'refuel', 'revel', 'swivel',
];
const DOUBLE_SUFFIX = '(?:ed|ing|er|ers|or|ors|ery|eries|ous|ously)';

// Miscellaneous, each a distinct word rather than a morphological family.
// Every entry here is British-only in its matched form.
//
// THE FOUR THE BRIEF FLAGS, AND HOW EACH IS HANDLED:
//  - storey: matched. "story" is a different word (a tale) and is not touched.
//  - draught: matched, but it is a REPORTING hit — "draught" survives in US use
//    for beer and for the board game, so a hit is read before it is converted.
//  - grey: matched with word boundaries. It is a valid US variant AND a common
//    surname, so it is likewise read before conversion, never blind-converted.
//  - practise: handled in the -ce class above, deliberately without "practice".
//
// The single-l British forms are matched as WHOLE WORDS ONLY: fulfil must not
// match fulfill, and both dialects write fulfilled and fulfilling with two Ls.
const MISC = [
  String.raw`\btyres?\b`, String.raw`\bkerbs?\b`, String.raw`\bploughs?\w*`,
  String.raw`\bmould\w*`, String.raw`\bstorey\w*`, String.raw`\baluminium\b`,
  String.raw`\bdraught\w*`, String.raw`\bsceptic\w*`, String.raw`\bwhilst\b`,
  String.raw`\bamongst\b`, String.raw`\bprogramme\w*`, String.raw`\bjudgement\w*`,
  String.raw`\bgaol\w*`, String.raw`\bpyjamas\b`, String.raw`\bcheques?\b`,
  String.raw`\bartefact\w*`, String.raw`\baeroplane\w*`, String.raw`\bspeciality\b`,
  String.raw`\bspecialities\b`, String.raw`\blearnt\b`, String.raw`\bdreamt\b`,
  String.raw`\bskilful\w*`, String.raw`\bwilful\w*`, String.raw`\binstalment\w*`,
  String.raw`\benrolment\w*`, String.raw`\bfulfil\b`, String.raw`\binstil\b`,
  String.raw`\bdistil\b`, String.raw`\benrol\b`, String.raw`\bappal\b`,
  String.raw`\bgrey\b`, String.raw`\bgreyish\b`, String.raw`\bmoustache\w*`,
  String.raw`\bsulphur\w*`, String.raw`\btonnes?\b`, String.raw`\bcosy\b`,
  String.raw`\bdespatch\w*`, String.raw`\btitbit\w*`, String.raw`\bnumberplate\w*`,
];
// "burnt" and "spelt" are DELIBERATELY ABSENT. Both have ordinary US uses —
// burnt toast, and spelt the grain — so matching them would fire on correct US
// prose. Stated false negative, same trade as -yse above.

// -ae- / -oe- classical digraphs. Not named in the S62 R2 brief, but it is a
// morphological class by the same test as the others, and a pest estate can
// plausibly carry "faeces". US forms drop the first vowel: feces, anemia, fetus,
// pediatric, hemorrhage, diarrhea, edema, esophagus.
//
// "larvae", "pupae" and "antennae" are Latin plurals, correct in both dialects,
// and are excluded by construction: no stem below matches a bare trailing "ae".
const AE_STEMS = [
  'anaemi', 'oedema', 'foetus', 'foetal', 'paediatr', 'oesophag', 'haemo',
  'haema', 'diarrhoea', 'faece', 'faeca', 'orthopaed', 'encyclopaed',
  'leukaemi', 'septicaemi', 'anaesthe', 'gynaecolog', 'palaeo',
];

const alt = (a) => a.join('|');

export const UK_CLASSES = [
  {
    id: 'our',
    name: '-our / -or',
    source: String.raw`\b(?:${alt(OUR_STEMS)})\w*`,
    pos: ['the harbourage behind the colour of his neighbour'],
    neg: ['four hours of your tour', 'a humorous and vigorous labor of honor', 'the color of the harbor'],
  },
  {
    id: 'ise',
    name: '-ise / -isation',
    source: String.raw`\b(?:${alt(ISE_STEMS)})${ISE_SUFFIX}\b`,
    pos: ['they organise, and the organisation emphasised it'],
    neg: [
      // The S61 R8 defect, asserted on every run.
      'every organism and all the organisms in it',
      'we exercise, advise, revise and comprise a franchise',
      'the emphasis of the analysis',
    ],
  },
  {
    id: 'yse',
    name: '-yse / -yze',
    source: String.raw`\b(?:${alt(YSE_STEMS)})${YSE_SUFFIX}\b`,
    pos: ['we analyse it, having analysed and paralysed the rest'],
    neg: ['the analysis and its analyses', 'we analyze it'],
  },
  {
    id: 're',
    name: '-re / -er',
    source: String.raw`\w*(?:${alt(RE_STEMS)})\w*`,
    pos: ['a kilometre from the epicentre, in fibre and litres'],
    neg: ['a kilometer from the center, in fiber and liters', 'a thermometer, a parameter and a diameter'],
  },
  {
    id: 'ce',
    name: '-ce / -se',
    source: String.raw`\b(?:${alt(CE_STEMS)})\w*`,
    pos: ['a licence for the defence, and practising the offence'],
    neg: ['a license for the defense', 'a medical practice that we practice daily', 'advice, and we advise it'],
  },
  {
    id: 'ogue',
    name: '-ogue / -og (REPORTING ONLY — acceptable US variants)',
    source: String.raw`\b(?:${alt(OGUE_STEMS)})\w*`,
    pos: ['the catalogue and the dialogue'],
    neg: ['the catalog and the dialog', 'a rogue and a brogue'],
  },
  {
    id: 'double',
    name: 'doubled consonant (-lled / -lling / -ller)',
    source: String.raw`\b(?:${alt(DOUBLE_STEMS)})l${DOUBLE_SUFFIX}\b`,
    pos: ['travelling, labelled, modelling and a marvellous counsellor'],
    neg: [
      // Every one of these doubles in BOTH dialects; stress falls on the last syllable.
      'controlled, compelled, expelled, propelled, patrolled and installed',
      'traveling, labeled, modeling and a marvelous counselor',
    ],
  },
  {
    id: 'ae',
    name: '-ae- / -oe- digraph',
    source: String.raw`\b(?:${alt(AE_STEMS)})\w*`,
    pos: ['faeces, diarrhoea and a haemorrhage'],
    neg: ['feces, diarrhea and a hemorrhage', 'larvae, pupae and antennae'],
  },
  {
    id: 'misc',
    name: 'miscellaneous British-only forms',
    source: MISC.join('|'),
    pos: ['a grey tyre by the kerb, whilst the mould and the programme'],
    neg: [
      'a gray tire by the curb, while the mold and the program',
      // Whole-word guards: the two-L forms are correct in both dialects.
      'fulfill, fulfilled and fulfilling; install, installed and installing',
      'the story of a burnt loaf and some spelt',
    ],
  },
];

// The union. Order does not matter; alternation is left-to-right per position
// and every class is anchored, so no class can swallow another's match.
export const UK_SPELLING_RE = new RegExp(UK_CLASSES.map((c) => `(?:${c.source})`).join('|'), 'gi');
