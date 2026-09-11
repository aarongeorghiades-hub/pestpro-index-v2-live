import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import ProductCard from "@/components/ProductCard";
import FindProviderCTA from "@/components/FindProviderCTA";
import Callout from "@/components/Callout";
import DecisionBox from '@/components/DecisionBox';

// S68 R8 — ROLLOUT REBUILD to the R8 pattern, on sources. GROUP B: the subject is a
// hazard to health, so health statements are permitted — but only quoted from or closely
// attributed to a named government body, never in our own voice, never as diagnosis or
// treatment. THIS PAGE CARRIES TWO, BOTH GOV.UK, quoted at #situation and #legal.
//
// THE EIGHT JSX-PROP CARDS BECOME ONE ARRAY addressed by identity (Law 107), so a record
// can be removed in future without shifting an index. Award labels, rank numerals, anchor
// ids and card order are UNCHANGED.
//
// THE SUBTITLE AND DESCRIPTION SAID THE EQUIPMENT WOULD "eliminate mould and
// condensation" — an efficacy claim in our own voice about eight appliances, and one the
// government's own guidance contradicts, since it puts the underlying cause ahead of any
// appliance. Both now say what the page is.
//
// THE OUTBOUND LINK TO awaabslawguide.co.uk IS REMOVED. It was presented inside the legal
// section as "our sister site", nothing on this page is quoted from it, and it appears in
// no fetch log (Law 194). The legal section now cites GOV.UK, which is where the duty is.
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Damp & Mould Equipment for Landlords — Awaab's Law 2026",
    description:
      "Damp and mould equipment for landlords: the Awaab's Law timeframes, what the guidance puts before any appliance, and eight products as listed.",
    alternates: {
      canonical: "https://pestproindex.com/best/awaabs-law-damp-mould-equipment",
    },
    openGraph: {
      title: "Best Damp & Mould Equipment for Landlords — Awaab's Law 2026",
      description:
        "Damp and mould equipment for landlords: the Awaab's Law timeframes, what the guidance puts before any appliance, and eight products as listed.",
      url: "https://pestproindex.com/best/awaabs-law-damp-mould-equipment",
      type: "article",
      siteName: "PestPro Index",
    },
  };
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Damp & Mould Control Equipment for Landlords (Awaab's Law 2026)",
  description:
    "Damp and mould equipment for landlords: the Awaab's Law timeframes, what the guidance puts before any appliance, and eight products as listed.",
  datePublished: "2026-04-07",
  dateModified: "2026-09-09",
  author: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  publisher: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://pestproindex.com/best/awaabs-law-damp-mould-equipment",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://pestproindex.com" },
    { "@type": "ListItem", position: 2, name: "Best", item: "https://pestproindex.com/best" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Best Damp & Mould Equipment for Landlords",
      item: "https://pestproindex.com/best/awaabs-law-damp-mould-equipment",
    },
  ],
};

// SOURCES. Every quotation was extracted by byte range from a body on disk and verified
// by exact string match before it was written here (Law 164). Each citation names the
// host actually fetched (Law 194). Bodies kept under Law 175: gov-damp-mould at
// ~/pp-s68r4/sources and awaabs-landlords at ~/pp-s68r3/sources, both GOV.UK.
const SRC = {
  govDamp:
    "https://www.gov.uk/government/publications/damp-and-mould-understanding-and-addressing-the-health-risks-for-rented-housing-providers/understanding-and-addressing-the-health-risks-of-damp-and-mould-in-the-home--2",
  awaabs:
    "https://www.gov.uk/government/publications/awaabs-law-guidance-for-social-landlords/awaabs-law-guidance-for-social-landlords-timeframes-for-repairs-in-the-social-rented-sector",
};

type ProductRecord = {
  anchorId: string;
  asin: string;
  rank: number;
  cardName: string;
  cardLabel: string;
  features: string[];
  tableCells: string[];
  h2Label: string;
  h2Name: string;
  tocLabel: string;
  tocName: string;
};

// Feature text and comparison cells are rebuilt from the banked Amazon bodies, all inside
// the S45-C window. A property is asserted only where the listing states it (S52-E,
// S50-H); a cell the listing does not state reads "not stated".
//
// THREE LISTINGS CONTRADICT THEMSELVES AND EVERY READING IS RENDERED (Law 146): the
// electriQ states a 7 litre tank in its text and 30 litres in its detail row; the Arete
// One is titled 25L and rated at 14 litres a day; the Vent-Axia bundle is sold by i-sells
// as two items with a five-year warranty row and no wattage row of its own.
const products: ProductRecord[] = [
  {
    anchorId: "nuaire-drimaster",
    asin: "B00NIV51RU",
    rank: 1,
    cardName: "Nuaire Drimaster Eco Heat DRI-ECO-HEAT-HCS — Heated PIV with Hall Controls",
    cardLabel: "Best Overall",
    features: [
      "Loft-mounted positive input ventilation with an integral heater behind the diffuser, as listed",
      "Heat output listed as 400 watts; hardwiring required; ceiling mounted",
      "The maker says the system goes into standby in warmer months when there is no evidence of condensation",
      "The listing's own warning: the 4-way heater and boost control switch is not compatible with this model",
      "Room type listed as Loft; the unit is mounted in the loft space",
    ],
    tableCells: ["Nuaire Drimaster Eco Heat", "PIV, heated", "400 W heater, as listed", "Airflow not stated"],
    h2Label: "Best Overall",
    h2Name: "Nuaire Drimaster Eco Heat — Heated PIV",
    tocLabel: "Best Overall",
    tocName: "Nuaire Drimaster Eco Heat",
  },
  {
    anchorId: "dryzone-piv",
    asin: "B0FF4XV6LV",
    rank: 2,
    cardName: "Dryzone PIV Unit with Heater — Loft Whole-House Ventilation Kit",
    cardLabel: "Best Budget",
    features: [
      "Listed for 1 to 5 bedroom properties, with four selectable fan speeds",
      "Airflow listed as up to 49 litres per second",
      "The maker states the heater tempers loft air when it falls below 10 °C",
      "Noise listed as 25 dB(A) at 1 metre; three-year warranty per the listing",
      "Supplied with 1 m of 200 mm flexible duct, a 200 mm ceiling diffuser and fixings, as listed",
    ],
    tableCells: ["Dryzone PIV with heater", "PIV, heated", "Heater wattage not stated", "Up to 49 L/s, as listed"],
    h2Label: "Best Budget",
    h2Name: "Dryzone PIV Unit with Heater",
    tocLabel: "Best Budget",
    tocName: "Dryzone PIV with Heater",
  },
  {
    anchorId: "kair-kalahari",
    asin: "B0914Q4SP5",
    rank: 3,
    cardName: "Kair Kalahari ECO PIV Unit for Condensation Control",
    cardLabel: "Best Budget PIV",
    features: [
      "Loft-mounted PIV supplying filtered air through a ceiling diffuser, as listed",
      "The maker describes very low noise because the unit sits in the loft cavity",
      "No heater is listed on this model",
      "Listed at 33 x 33 x 34 cm and 6.84 kg",
      "The listing carries no airflow, coverage or wattage figure",
    ],
    tableCells: ["Kair Kalahari ECO PIV", "PIV, unheated", "No heater listed", "Airflow not stated"],
    h2Label: "Best Budget PIV",
    h2Name: "Kair Kalahari ECO PIV Unit",
    tocLabel: "Best Budget PIV",
    tocName: "Kair Kalahari ECO PIV",
  },
  {
    anchorId: "vent-axia",
    asin: "B0BTB1VSMP",
    rank: 4,
    cardName: "Vent-Axia PureAir PIV with 500W Heater + Digital Hygrometer Bundle",
    cardLabel: "Premium PIV",
    features: [
      "Sold as two items: the Vent-Axia PureAir Home 479091 unit and an i-sells digital hygrometer",
      "The maker states a 500W heater that removes the chill from incoming air",
      "Hygrometer temperature accuracy listed as 0.1 degrees Celsius",
      "Warranty listed as 5 years; spare part availability listed as 5 years",
      "Brand row reads i-sells rather than Vent-Axia — the bundle is assembled by the seller",
    ],
    tableCells: ["Vent-Axia PureAir + hygrometer", "PIV, heated, with meter", "500 W heater, per the maker", "Airflow not stated"],
    h2Label: "Premium PIV",
    h2Name: "Vent-Axia PureAir PIV with 500W Heater",
    tocLabel: "Premium PIV",
    tocName: "Vent-Axia PureAir PIV",
  },
  {
    anchorId: "electriq-30l",
    asin: "B08TRT57ZP",
    rank: 5,
    cardName: "electriQ ECD30 Industrial 30L Dehumidifier — Metal Body, Large Wheels",
    cardLabel: "Best Professional-Grade",
    features: [
      "Extraction listed as up to 30 litres a day; 650 watts",
      "Tank stated two ways on the listing: 7 litres in the feature text, 30 litres in the detail row",
      "Permanent drainage option, humidistat and 24-hour timer, as listed",
      "Metal body on wheels, listed at 26 kilograms and 65.5 x 45 x 65.5 cm",
      "Listed for warehouses, garages, basements and offices; automatic defrost",
    ],
    tableCells: ["electriQ ECD30", "Dehumidifier", "650 W", "30 L/day, as listed"],
    h2Label: "Best Professional-Grade",
    h2Name: "electriQ ECD30 Industrial 30L Dehumidifier",
    tocLabel: "Best Professional-Grade",
    tocName: "electriQ ECD30",
  },
  {
    anchorId: "meaco-25l",
    asin: "B093TLCDVC",
    rank: 6,
    cardName: "MeacoDry Arete One 25L Dehumidifier & HEPA Air Purifier",
    cardLabel: "Best for Occupied Properties",
    features: [
      "Extraction listed as up to 14 litres a day — 25L is the model name, not the daily figure",
      "4.8 litre front-loading tank, as listed; 267 watts",
      "H13 HEPA filter, laundry mode, night mode and smart humidity mode, as listed",
      "Floor area listed as 86 square metres; sound level listed as 40 dB",
      "Warranty stated two ways on the listing: 5 years in the title, 2 in the detail row",
    ],
    tableCells: ["MeacoDry Arete One", "Dehumidifier", "267 W", "14 L/day; 86 m², as listed"],
    h2Label: "Best for Occupied Properties",
    h2Name: "MeacoDry Arete One 25L Dehumidifier",
    tocLabel: "Best for Occupied Properties",
    tocName: "MeacoDry Arete One",
  },
  {
    anchorId: "dryzone-meter",
    asin: "B099FBZWHJ",
    rank: 7,
    cardName: "Dryzone Moisture Meter — Damp Meter for Wood, Masonry and Building Materials",
    cardLabel: "Best Damp Meter",
    features: [
      "Dual-purpose meter for wood and building materials, with a backlit LCD, as listed",
      "Eight calibration scales for different timbers, as listed",
      "The maker states an audio alert for moisture above 20% in building materials",
      "Listed at 130 g with batteries; batteries required and not included",
      "Manufacturer listed as Safeguard Europe Ltd",
    ],
    tableCells: ["Dryzone Moisture Meter", "Damp meter", "Battery powered", "Audio alert above 20%, per the maker"],
    h2Label: "Best Damp Meter",
    h2Name: "Dryzone Moisture Meter",
    tocLabel: "Best Damp Meter",
    tocName: "Dryzone Moisture Meter",
  },
  {
    anchorId: "hygrometer",
    asin: "B0CZRWVNRJ",
    rank: 8,
    cardName: "Govee WiFi Thermometer Hygrometer — Digital Temperature and Humidity Meter",
    cardLabel: "Best Hygrometer",
    features: [
      "WiFi and Bluetooth, listed at 50 m and 30 m range respectively",
      "The maker states a Swiss-made sensor and temperature accuracy of ±0.3 °C",
      "App alerts when readings fall outside a preset range, as listed",
      "20 days of online data storage with export, per the listing",
      "Battery powered; supplied with a lanyard loop",
    ],
    tableCells: ["Govee WiFi Hygrometer", "Hygrometer", "Battery powered", "±0.3 °C, per the maker"],
    h2Label: "Best Hygrometer",
    h2Name: "Govee WiFi Thermometer Hygrometer",
    tocLabel: "Best Hygrometer",
    tocName: "Govee WiFi Hygrometer",
  },
];

// ONE FAQ ARRAY (Law 190). The visible block and the FAQPage schema both read it.
const faqs: { q: string; a: string }[] = [
  {
    q: "Does buying this equipment satisfy Awaab's Law?",
    a: "No, and nothing on this page should be read as saying it does. The guidance for social landlords sets timeframes for investigating and acting on a hazard, and the health-risks guidance says to identify and tackle the underlying causes of damp and mould, including building deficiencies, inadequate ventilation and condensation. Equipment can be part of the answer to the third of those; it is not a substitute for the investigation.",
  },
  {
    q: "What are the timeframes?",
    a: "The guidance for social landlords in England states that a landlord must investigate any potential significant hazards within 10 working days of becoming aware of them, and undertake relevant safety work within 5 working days of the investigation concluding if it identifies a significant hazard. For an emergency hazard it states that the landlord must investigate the issue within 24 hours. This page holds no fetched source on how those timeframes reach private tenancies, so it does not say.",
  },
  {
    q: "PIV or a dehumidifier?",
    a: "They do different things and the listings say so. A PIV unit sits in the loft and pushes filtered air into the property continuously; a dehumidifier takes moisture out of the air in the room it stands in. Four of the products here are PIV units, two are dehumidifiers, and two measure rather than treat. Which is appropriate is a question about the building, which is what the meters are for.",
  },
  {
    q: "Is it fair to blame how a tenant lives?",
    a: "The government's guidance answers this directly: it says it is totally unreasonable to blame damp and mould in the home on 'lifestyle choices'. It also says tenant management of condensation and small amounts of mould should not be a substitute for assessing and addressing the underlying issue, which should always be the priority.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const tocItems = [
  { id: "situation", title: "Measure Before You Buy" },
  { id: "legal", title: "What Awaab's Law Guidance Requires" },
  { id: "limits", title: "Where Equipment Does Not Work" },
  { id: "what-decides", title: "What Decides the Choice" },
  ...products.map((p) => ({ id: p.anchorId, title: `${p.tocLabel} — ${p.tocName}` })),
  { id: "alternatives", title: "If Equipment Is Not the Answer" },
  { id: "using", title: "Order of Work" },
  { id: "compared", title: "The Eight Compared" },
  { id: "faq", title: "Frequently Asked Questions" },
];

export default function BestAwaabsLawDampMouldEquipmentPage() {
  return (
    <GuideLayout
      title="Best Damp &amp; Mould Control Equipment for Landlords (Awaab's Law 2026)"
      subtitle="Four PIV units, two dehumidifiers and two meters, described by what their own listings state — beside the timeframes Awaab's Law guidance sets and the cause the government's guidance says to tackle first"
      lastUpdated="September 2026"
      readingTime="9 min"
      breadcrumbParent={{ label: "Best", href: "/best" }}
      tocItems={tocItems}
      relatedGuides={[
        { title: "Landlord Pest Control Responsibilities", href: "/guides/landlord-pest-control" },
        {
          title: "Awaab's Law & Pest Control: What Landlords Need to Know",
          href: "/blog/awaabs-law-pest-control-landlords",
        },
        { title: "Pest Control Costs UK 2026", href: "/guides/pest-control-costs" },
        { title: "How to Get Rid of Silverfish: Complete UK Guide", href: "/guides/how-to-get-rid-of-silverfish" },
      ]}
      relatedProducts={[
        { title: "Best Commercial Dehumidifiers UK 2026", href: "/best/commercial-dehumidifiers" },
        {
          title: "Best Damp-Proof Paint & Mould Treatment UK 2026",
          href: "/best/damp-proof-paint-mould-treatment",
        },
        { title: "Best Silverfish Treatments UK 2026", href: "/best/silverfish-treatments" },
      ]}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Affiliate disclosure */}
      <div className="not-prose mb-8 rounded-xl border border-[var(--color-ochre-edge)] bg-[var(--color-ochre-wash)] p-4">
        <p className="text-sm text-[var(--color-ochre-deep)]">
          <strong>Affiliate disclosure:</strong> PestPro Index is
          reader-supported. When you buy through links on this page, we may earn
          a small commission at no extra cost to you. This helps us keep the
          site running and free for everyone. As an Amazon Associate, PestPro
          Index earns from qualifying purchases.
        </p>
      </div>

      <p>
        Eight items: four positive input ventilation units, two dehumidifiers
        and two meters. Six of them move or remove moisture and two of them only
        measure it — and the measuring is where the government&rsquo;s own
        guidance starts, which is why the meters are not an afterthought here.
      </p>

      {/* DECISION BLOCK — situation first, product second. NOT a card: no Amazon link,
          no price, no image, no award. */}
      <DecisionBox>
          <li>
            <strong>A tenant has reported damp or mould.</strong> The clock and
            the duty are set out in guidance, not on a product page —{" "}
            <a href="#legal" className="underline">
              what the guidance requires
            </a>
            .
          </li>
          <li>
            <strong>You do not yet have a reading.</strong> The guidance names
            moisture meters and environmental monitors among its checks —{" "}
            <a href="#situation" className="underline">
              measure before you buy
            </a>
            .
          </li>
          <li>
            <strong>You are about to buy a dehumidifier for a leak.</strong>{" "}
            That is the case the guidance rules out —{" "}
            <a href="#limits" className="underline">
              where equipment does not work
            </a>
            .
          </li>
          <li>
            <strong>You want continuous whole-property ventilation.</strong>{" "}
            Four PIV units here, three with a heater —{" "}
            <a href="#nuaire-drimaster" className="underline">
              Nuaire
            </a>
            ,{" "}
            <a href="#dryzone-piv" className="underline">
              Dryzone
            </a>
            ,{" "}
            <a href="#vent-axia" className="underline">
              Vent-Axia
            </a>
            , and{" "}
            <a href="#kair-kalahari" className="underline">
              Kair without one
            </a>
            .
          </li>
          <li>
            <strong>The property is occupied and noise matters.</strong> Two
            listings state a decibel figure —{" "}
            <a href="#dryzone-piv" className="underline">
              25 dB(A)
            </a>{" "}
            and{" "}
            <a href="#meaco-25l" className="underline">
              40 dB
            </a>
            .
          </li>
        </DecisionBox>

      <div className="not-prose">
        <Callout type="warning">
          <p>
            Three of these products require electrical installation in a loft
            and one states that hardwiring is required. Fitting them is
            controlled work; the government&rsquo;s guidance notes that works to
            heating and ventilation systems must comply with the Building
            Regulations 2010.
          </p>
        </Callout>
      </div>

      {/* [0] Situation */}
      <h2 id="situation">Measure Before You Buy</h2>
      <p>
        The government&rsquo;s guidance for rented housing lists what to check,
        and most of it is about the building rather than the air. Among its
        internal checks it names{" "}
        <em>
          &ldquo;consistently high relative humidity, as assessed using a
          moisture meter or environmental monitors&rdquo;
        </em>{" "}
        (
        <a href={SRC.govDamp} rel="nofollow">
          GOV.UK
        </a>
        ), alongside peeling wallpaper, defective plaster, low insulation and
        ventilation that is damaged, blocked or switched off.
      </p>
      <p>
        Two of the eight products here are the instruments for that check. A
        reading taken before anything is installed is also the only way to show
        afterwards whether the installation changed anything, which matters on a
        property where the work may have to be evidenced.
      </p>

      {/* [1] Legal */}
      <h2 id="legal">What Awaab&rsquo;s Law Guidance Requires</h2>
      <p>
        For social landlords in England the timeframes are fixed. The guidance
        states that a landlord must{" "}
        <em>
          &ldquo;Investigate any potential significant hazards within 10 working
          days of becoming aware of them&rdquo;
        </em>{" "}
        and{" "}
        <em>
          &ldquo;Undertake relevant safety work within 5 working days of the
          investigation concluding, if the investigation identifies a
          significant hazard.&rdquo;
        </em>{" "}
        For an emergency hazard,{" "}
        <em>&ldquo;The landlord must investigate the issue within 24 hours.&rdquo;</em>{" "}
        (
        <a href={SRC.awaabs} rel="nofollow">
          GOV.UK
        </a>
        ). This page holds no fetched source on how those timeframes reach
        private tenancies, so it does not say.
      </p>
      <p>
        The health-risks guidance sets out what the work has to reach. It asks
        landlords to{" "}
        <em>
          &ldquo;identify and tackle the underlying causes of damp and mould,
          including building deficiencies, inadequate ventilation and
          condensation.&rdquo;
        </em>{" "}
        and is unambiguous about where responsibility does not lie:{" "}
        <em>
          &ldquo;We are absolutely clear that it is totally unreasonable to
          blame damp and mould in the home on ‘lifestyle choices’.&rdquo;
        </em>{" "}
        (
        <a href={SRC.govDamp} rel="nofollow">
          GOV.UK
        </a>
        ). Ventilation is one of the three causes it names, which is what the
        PIV units below address; the other two are building work.
      </p>

      {/* [2] Limits */}
      <h2 id="limits">Where Equipment Does Not Work</h2>
      <p>
        <strong>As a substitute for the investigation.</strong> The guidance is
        explicit:{" "}
        <em>
          &ldquo;Tenant management of condensation and small amounts of mould
          should not be a substitute for assessing and addressing the underlying
          issue, which should always be the priority.&rdquo;
        </em>{" "}
        (
        <a href={SRC.govDamp} rel="nofollow">
          GOV.UK
        </a>
        ). A unit installed instead of an inspection is treating the symptom.
      </p>
      <p>
        <strong>After the mould has been wiped away.</strong> The same guidance:{" "}
        <em>
          &ldquo;Simply removing surface mould will not prevent the damp and
          mould from reappearing&rdquo;
        </em>
        . Cleaning, ventilating and repairing are three steps and only the last
        one ends it.
      </p>
      <p>
        <strong>On a leak, a bridged damp course or missing insulation.</strong>{" "}
        None of the eight products here finds or fixes any of those. Two of them
        will show you a number that suggests one is present, which is a
        different and more useful thing than drying the air around it.
      </p>

      {/* [3] Criteria */}
      <h2 id="what-decides">What Decides the Choice</h2>
      <h3>1. Ventilate, dehumidify or measure</h3>
      <p>
        PIV pushes filtered air in continuously from the loft; a dehumidifier
        removes water from the air in one room; a meter tells you whether either
        is warranted. The guidance names inadequate ventilation as a cause in
        its own right, which is the case the four PIV units answer.
      </p>
      <h3>2. Whether the listing states a figure at all</h3>
      <p>
        One PIV states an airflow (49 litres per second) and two state a heater
        wattage (400 W and 500 W). One states none of those. The comparison
        table records &ldquo;not stated&rdquo; four times, and that is a real
        difference between these products rather than an omission here.
      </p>
      <h3>3. Noise, in an occupied property</h3>
      <p>
        Two listings give a decibel figure — 25 dB(A) at one metre for the
        Dryzone PIV and 40 dB for the Arete One. In a tenanted flat that is
        often what decides whether equipment stays switched on.
      </p>

      {products.map((p, i) => (
        <div key={p.asin}>
          <h2 id={p.anchorId}>
            {p.h2Label} &mdash; {p.h2Name}
          </h2>
          <div className="not-prose my-6">
            <ProductCard
              name={p.cardName}
              features={p.features}
              asin={p.asin}
              bestFor={p.cardLabel}
              rank={p.rank}
            />
          </div>
          <p>
            {
              [
                "A loft-mounted PIV unit with the heater sited behind the diffuser, listed at 400 watts of heat output and requiring hardwiring. Its maker says it drops into standby in warmer months when there is no evidence of condensation. Its own listing carries a compatibility warning: the 4-way heater and boost control switch does not work with this model.",
                "A PIV kit listed for one to five bedroom properties with four fan speeds and up to 49 litres per second of airflow — the only airflow figure on this page. Its maker states the heater tempers loft air below 10 °C and quotes 25 dB(A) at a metre, and the kit is listed with duct, diffuser and fixings included.",
                "The one PIV here without a heater: a loft-mounted unit supplying filtered air through a ceiling diffuser, listed at 33 x 33 x 34 cm and 6.84 kg. Its listing states no airflow, coverage or wattage figure at all, which the comparison table records rather than fills in.",
                "A bundle rather than a single product: the Vent-Axia PureAir Home unit with a 500W heater, sold with an i-sells digital hygrometer accurate to 0.1 °C, under a five-year warranty. The brand row reads i-sells rather than Vent-Axia, because the seller assembles the pairing.",
                "A 650 watt metal-bodied dehumidifier on wheels, listed at up to 30 litres a day with a humidistat, a 24-hour timer and a permanent drainage option, for warehouses, garages, basements and offices. Its listing says a 7 litre tank in one place and 30 in another; the card carries both.",
                "A 267 watt unit with a 4.8 litre tank and an H13 HEPA filter, listed for 86 square metres at 40 dB — the quieter of the two dehumidifiers and the one aimed at occupied rooms. Its listing rates it at up to 14 litres a day; the 25L in its name is the model, not the figure.",
                "A dual-purpose damp meter for wood and building materials with a backlit display and eight timber calibration scales, which its maker says gives an audio alert above 20% moisture in building materials. At 130 grams it is the instrument the guidance's moisture-meter check describes.",
                "A WiFi and Bluetooth hygrometer with a Swiss-made sensor, ±0.3 °C accuracy per its maker, app alerts when a preset range is exceeded, and 20 days of online data storage with export. Where a meter gives a spot reading, this is the environmental monitor the guidance names alongside it.",
              ][i]
            }
          </p>
        </div>
      ))}

      {/* Alternatives */}
      <h2 id="alternatives">If Equipment Is Not the Answer</h2>
      <p>
        <strong>Find the defect.</strong> The guidance&rsquo;s check list — damp
        proof course, plaster, insulation, wall temperature, blocked or
        switched-off ventilation — is a survey, not a shopping list.
      </p>
      <p>
        <strong>Fix the extractor before adding a unit.</strong> The guidance
        names damaged, blocked, absent or switched-off mechanical ventilation
        among its internal checks, and humidity-controlled fans among the
        remedies.
      </p>
      <p>
        <strong>Treat the surface after the cause.</strong> Our{" "}
        <a href="/best/damp-proof-paint-mould-treatment">mould treatment</a>{" "}
        page covers sprays, primers and paints, and says the same thing about
        order of work.
      </p>

      {/* Using them */}
      <h2 id="using">Order of Work</h2>
      <ol>
        <li>
          <strong>Take a reading first.</strong> A moisture meter or an
          environmental monitor is the check the guidance names.
        </li>
        <li>
          <strong>Investigate the cause within the timeframe.</strong> Ten
          working days for a potential significant hazard, and 24 hours for an
          emergency, on the guidance quoted above.
        </li>
        <li>
          <strong>Fix the building fault.</strong> Ventilation, insulation and
          defects come before an appliance, in the order the guidance sets out.
        </li>
        <li>
          <strong>Install by the regulations.</strong> Loft PIV work is
          controlled work; one listing here states hardwiring is required.
        </li>
        <li>
          <strong>Read again afterwards.</strong> The same instrument that
          justified the work is what shows whether it did anything.
        </li>
      </ol>

      {/* Comparison table */}
      <h2 id="compared">The Eight Compared</h2>
      <p>
        Every column below is what the Amazon listing itself states, with each
        figure attributed to the maker where it is a claim. Where a listing does
        not state something, the cell says so rather than guessing.
      </p>
      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[var(--color-paper-sunk)]">
              <th className="text-left p-2 border-b font-semibold">Product</th>
              <th className="text-left p-2 border-b font-semibold">Type</th>
              <th className="text-left p-2 border-b font-semibold">Power, as listed</th>
              <th className="text-left p-2 border-b font-semibold">Rated output, as listed</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.asin} className="align-top">
                {p.tableCells.map((c, i) => (
                  <td key={i} className="p-2 border-b">
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* FAQ — rendered from the same array the schema above is derived from */}
      <h2 id="faq">Frequently Asked Questions</h2>
      {faqs.map((f) => (
        <div key={f.q}>
          <h3>{f.q}</h3>
          <p>{f.a}</p>
        </div>
      ))}

      <FindProviderCTA
        heading="Damp you cannot trace to a cause?"
        subtext="Compare damp and pest specialists near you — no fees, no commissions."
      />
    </GuideLayout>
  );
}
