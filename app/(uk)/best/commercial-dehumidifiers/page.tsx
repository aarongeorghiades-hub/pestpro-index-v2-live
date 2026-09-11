import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import ProductCard from "@/components/ProductCard";
import FindProviderCTA from "@/components/FindProviderCTA";
import Callout from "@/components/Callout";
import DecisionBox from '@/components/DecisionBox';

// S68 R4 — ROLLOUT REBUILD to the R8 pattern, the last Group A route. Title and H1
// carry no claim clause and are unchanged. Award labels, rank numerals, anchor ids and
// card order are UNCHANGED. Two h2s held descriptors rather than awards — "Wi-Fi
// Control" on the Arete Two and "WiFi Control" on the VonHaus — and under Law 189 each
// takes the award its card already shows, in this route's mixed layout (product name
// first on those two records, award first on the other three), product name retained.
//
// THE LISTINGS DISAGREE WITH THEMSELVES IN THREE PLACES AND ALL THREE ARE RENDERED
// (Law 146). The MeacoDry Arete One is titled "25L" and its listing states 14 litres a
// day. The Arete Two is titled 20L, its feature text says 20 litres a day, its detail
// table says 25. The electriQ's feature text says a 7-litre tank; its detail table says
// 30 litres, which is the extraction figure.
//
// GONE, BY NAME: "the UK's most trusted dehumidifier brand" (a G3 hit), "first choice
// for serious property managers", the 15°C / 5°C compressor claims, the running-cost
// arithmetic, the pest-humidity thresholds and the whole ROI section — none was on a
// listing or a fetched source.
//
// THE FAQ IS ONE ARRAY (Law 190): three questions, schema derived from the same array.
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Commercial Dehumidifiers for Landlords UK (2026)",
    description:
      "Dehumidifiers for landlords: what the government's damp and mould guidance puts before any appliance, and five compared on extraction, tank and area as listed.",
    alternates: {
      canonical: "https://pestproindex.com/best/commercial-dehumidifiers",
    },
    openGraph: {
      title: "Best Commercial Dehumidifiers for Landlords UK (2026)",
      description:
        "Dehumidifiers for landlords: what the government's damp and mould guidance puts before any appliance, and five compared on extraction, tank and area as listed.",
      url: "https://pestproindex.com/best/commercial-dehumidifiers",
      type: "article",
      siteName: "PestPro Index",
    },
  };
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Commercial Dehumidifiers for Landlords UK (2026)",
  description:
    "Dehumidifiers for landlords: what the government's damp and mould guidance puts before any appliance, and five compared on extraction, tank and area as listed.",
  datePublished: "2026-04-06",
  dateModified: "2026-09-07",
  author: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  publisher: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://pestproindex.com/best/commercial-dehumidifiers",
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
      name: "Commercial Dehumidifiers",
      item: "https://pestproindex.com/best/commercial-dehumidifiers",
    },
  ],
};

// SOURCES. Every quotation was extracted by byte range from a body on disk and verified
// by exact string match before it was written here (Law 164). Each citation names the
// host actually fetched (Law 194). Bodies kept under Law 175: gov-damp-mould at
// ~/pp-s68r4/sources (fetched 2026-09-07); awaabs-landlords at ~/pp-s68r3/sources.
// The Energy Saving Trust damp page was attempted once and returned HTTP 403 — blocked,
// recorded, not cited.
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

// Feature text and comparison cells are rebuilt from the banked Amazon bodies, fetched
// 2026-09-01 and inside the S45-C window. A property is asserted only where the listing
// states it (S52-E, S50-H); a cell the listing does not state reads "not stated".
// "Multi-award winning" and "best large low energy dehumidifier" are the makers' own
// words and are not restated (S47-F).
const products: ProductRecord[] = [
  {
    anchorId: "best-overall",
    asin: "B08TRT57ZP",
    rank: 1,
    cardName: "electriQ ECD30 Industrial 30L Dehumidifier — Metal Body, Large Wheels",
    cardLabel: "Best Overall",
    features: [
      "Extraction listed as up to 30 litres a day; 650 watts",
      "Tank stated two ways on the listing: 7 litres in the feature text, 30 litres in the detail table",
      "Permanent drainage option, humidistat and 24-hour timer, as listed",
      "Metal body on wheels, listed at 26 kilograms and 65.5 x 45 x 65.5 cm",
      "Listed for warehouses, garages, basements and offices; automatic defrost",
    ],
    tableCells: ["electriQ ECD30", "30 L/day, 650 W", "7 L (text) / 30 L (table); drain option", "not stated", "Best Overall"],
    h2Label: "Best Overall",
    h2Name: "electriQ ECD30 Industrial 30L Dehumidifier",
    tocLabel: "Best Overall",
    tocName: "electriQ ECD30",
  },
  {
    anchorId: "best-professional",
    asin: "B093TLCDVC",
    rank: 2,
    cardName: "MeacoDry Arete One 25L Dehumidifier & HEPA Air Purifier",
    cardLabel: "Best Professional-Grade",
    features: [
      "Extraction listed as up to 14 litres a day — 25L is the model name, not the daily figure",
      "4.8 litre front-loading tank, as listed; 267 watts",
      "H13 HEPA filter, laundry mode, night mode and smart humidity mode, as listed",
      "Floor area listed as 86 square metres; sound level listed as 40 dB",
      "Listed at 16 kilograms; warranty stated two ways, 5 years in the title and 2 in the table",
    ],
    tableCells: ["MeacoDry Arete One", "14 L/day, 267 W", "4.8 L", "86 m²", "Best Professional-Grade"],
    h2Label: "Best Professional-Grade",
    h2Name: "MeacoDry Arete One 25L Dehumidifier & HEPA Air Purifier",
    tocLabel: "Best Professional-Grade",
    tocName: "MeacoDry Arete One",
  },
  {
    anchorId: "arete-two",
    asin: "B0CTKK5WHR",
    rank: 3,
    cardName: "Meaco MeacoDry Arete Two 20L Dehumidifier & HEPA Air Purifier",
    cardLabel: "Best 20L Unit",
    features: [
      "Extraction stated two ways on the listing: up to 20 litres a day in the text, 25 in the detail table",
      "204 watts; noise listed as 38, 40 and 50 dB across three fan speeds",
      "Meaco app with Alexa and Google control, as listed",
      "Floor area listed as 80 square metres; suitable for 3 to 4 bedroom houses, as listed",
      "H13 HEPA filter and laundry mode, as listed; 15.1 kilograms",
    ],
    tableCells: ["Meaco Arete Two", "20 L/day (text) / 25 (table), 204 W", "not stated", "80 m²", "Best 20L Unit"],
    h2Label: "Meaco Arete Two 20L Dehumidifier & HEPA Air Purifier",
    h2Name: "Best 20L Unit",
    tocLabel: "Meaco Arete Two 20L",
    tocName: "Best 20L Unit",
  },
  {
    anchorId: "best-budget",
    asin: "B01DNZ2A5G",
    rank: 4,
    cardName: "Meaco 25L Ultra Low Energy Dehumidifier",
    cardLabel: "Best Budget",
    features: [
      "Extraction listed as 25 litres a day; 330 watts",
      "Digital display, variable humidistat, 24-hour timer and child lock, as listed",
      "Laundry mode, quiet mode and auto mode, as listed; four fan speeds",
      "The listing says it switches to fan-only once the target humidity is reached and re-tests after 30 minutes",
      "Listed at 15 kilograms; tank size and floor area not stated",
    ],
    tableCells: ["Meaco 25L Ultra Low Energy", "25 L/day, 330 W", "not stated", "not stated", "Best Budget"],
    h2Label: "Best Budget",
    h2Name: "Meaco 25L Ultra Low Energy Dehumidifier",
    tocLabel: "Best Budget",
    tocName: "Meaco 25L Ultra Low Energy",
  },
  {
    anchorId: "vonhaus-30l",
    asin: "B0FT3LZJZD",
    rank: 5,
    cardName: "VonHaus 30L Smart Dehumidifier — WiFi Control",
    cardLabel: "Best Smart Control",
    features: [
      "Extraction listed as 30 litres a day; 430 watts",
      "5.3 litre tank with a drain hose for continuous drainage, as listed",
      "TUYA Smart app with Alexa and Google Home, as listed",
      "Room size listed as 30 to 40 square metres; noise 44 dB",
      "24-hour timer, auto defrost and child lock, as listed; 14.1 kilograms",
    ],
    tableCells: ["VonHaus 30L Smart", "30 L/day, 430 W", "5.3 L; drain hose", "30–40 m²", "Best Smart Control"],
    h2Label: "VonHaus 30L Smart Dehumidifier",
    h2Name: "Best Smart Control",
    tocLabel: "VonHaus 30L Smart",
    tocName: "Best Smart Control",
  },
];

// ONE FAQ ARRAY (Law 190). The visible block and the FAQPage schema both read it.
const faqs: { q: string; a: string }[] = [
  {
    q: "Can I leave a dehumidifier running unattended in a rental property?",
    a: "Two listings here state a continuous-drainage option — the electriQ's permanent drainage and the VonHaus's drain hose — and four state a humidistat or target-humidity mode that switches the unit off when the setting is reached. Whether a given unit is left running is a decision for the person responsible for the property; no listing here states a rule about it, and this page does not add one.",
  },
  {
    q: "What humidity level should I set?",
    a: "No listing on this page states a target figure, and no fetched source gives one, so this page does not. The government's guidance names consistently high relative humidity, assessed with a moisture meter or environmental monitors, as one of the internal checks a landlord should make — which is a reason to measure before and after, whatever the setting.",
  },
  {
    q: "Will a dehumidifier stop the damp?",
    a: "The government's guidance is that tenant management of condensation should not be a substitute for addressing the underlying issue, and that simply removing surface mould will not stop it reappearing. A dehumidifier removes moisture from the air in the room it is in; it does not find or fix a leak, a bridged damp-proof course or a missing extractor fan.",
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
  { id: "situation", title: "Is the Air the Problem?" },
  { id: "legal", title: "What the Guidance Asks of a Landlord" },
  { id: "limits", title: "Where a Dehumidifier Does Not Help" },
  { id: "what-decides", title: "What Decides the Choice" },
  ...products.map((p) => ({ id: p.anchorId, title: `${p.tocLabel} — ${p.tocName}` })),
  { id: "alternatives", title: "If a Dehumidifier Is Not the Answer" },
  { id: "using", title: "Siting and Running One" },
  { id: "compared", title: "Dehumidifiers Compared" },
  { id: "faq", title: "Frequently Asked Questions" },
];

export default function BestCommercialDehumidifiersPage() {
  return (
    <GuideLayout
      title="Best Commercial Dehumidifiers for Landlords &amp; Property Managers (2026)"
      subtitle="Compressor dehumidifiers for rented and commercial property — five compared on extraction, tank and floor area as their listings state them, beside what the government's damp and mould guidance asks of a landlord first"
      lastUpdated="September 2026"
      readingTime="7 min"
      breadcrumbParent={{ label: "Best", href: "/best" }}
      tocItems={tocItems}
      relatedGuides={[
        { title: "Landlord Pest Control Responsibilities", href: "/guides/landlord-pest-control" },
        {
          title: "How to Get Rid of Silverfish: Complete UK Guide",
          href: "/guides/how-to-get-rid-of-silverfish",
        },
        {
          title: "How to Get Rid of Cockroaches: Complete UK Guide",
          href: "/guides/how-to-get-rid-of-cockroaches",
        },
        { title: "Pest Control Costs UK 2026", href: "/guides/pest-control-costs" },
      ]}
      relatedProducts={[
        { title: "Best Silverfish Treatments UK 2026", href: "/best/silverfish-treatments" },
        { title: "Best Cockroach Killers UK 2026", href: "/best/cockroach-killers" },
        { title: "Best Carpet Beetle Treatments UK 2026", href: "/best/carpet-beetle-treatments" },
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
        A dehumidifier takes water out of the air in the room it stands in. All
        five here are compressor units with a tank or a drain, and their
        listings rate them from 14 to 30 litres a day. What none of them does
        is find out where the water is coming from — and the government&rsquo;s
        guidance to landlords starts there.
      </p>

      {/* DECISION BLOCK — situation first, product second. NOT a card: no Amazon link,
          no price, no image, no award. */}
      <DecisionBox>
          <li>
            <strong>A tenant has reported damp or mould.</strong> The guidance
            puts the underlying cause first and rules out blaming lifestyle —{" "}
            <a href="#legal" className="underline">
              what the guidance asks of a landlord
            </a>
            .
          </li>
          <li>
            <strong>You do not know whether it is condensation, a leak or rising damp.</strong>{" "}
            A dehumidifier addresses only the first —{" "}
            <a href="#situation" className="underline">
              is the air the problem
            </a>
            .
          </li>
          <li>
            <strong>You have run one before and the mould came back.</strong>{" "}
            That is the case the guidance describes —{" "}
            <a href="#limits" className="underline">
              where a dehumidifier does not help
            </a>
            .
          </li>
          <li>
            <strong>You need a unit that drains itself.</strong> Two listings
            state a drain option —{" "}
            <a href="#best-overall" className="underline">
              the electriQ
            </a>{" "}
            and{" "}
            <a href="#vonhaus-30l" className="underline">
              the VonHaus
            </a>
            .
          </li>
          <li>
            <strong>You want to see the humidity from your phone.</strong> Two
            listings state an app —{" "}
            <a href="#arete-two" className="underline">
              the Arete Two
            </a>{" "}
            and{" "}
            <a href="#vonhaus-30l" className="underline">
              the VonHaus
            </a>
            .
          </li>
        </DecisionBox>

      <div className="not-prose">
        <Callout type="warning">
          <p>
            Two of the five listings state a different extraction figure in
            their title or feature text from the one in their detail table. The
            cards and the table below carry both figures where that happens,
            and this page does not pick one.
          </p>
        </Callout>
      </div>

      {/* [0] Situation */}
      <h2 id="situation">Is the Air the Problem?</h2>
      <p>
        A dehumidifier lowers the moisture in the air. It helps where the water
        on the walls came out of the air — condensation — and does nothing
        where it came through them. The government&rsquo;s guidance for rented
        housing lists what to check for, and the list is mostly about the
        building: it names{" "}
        <em>
          &ldquo;consistently high relative humidity, as assessed using a
          moisture meter or environmental monitors&rdquo;
        </em>{" "}
        alongside peeling wallpaper, defective plaster, low insulation and
        blocked or absent mechanical ventilation (
        <a href={SRC.govDamp} rel="nofollow">
          GOV.UK
        </a>
        ). Measure before you buy; a reading is the only way to know whether
        the air is the fault.
      </p>

      {/* [1] Legal */}
      <h2 id="legal">What the Guidance Asks of a Landlord</h2>
      <p>
        The government&rsquo;s guidance treats damp and mould as a hazard to
        health and this page goes no further into that than the guidance does.
        What it asks of a landlord is to{" "}
        <em>
          &ldquo;identify and tackle the underlying causes of damp and mould,
          including building deficiencies, inadequate ventilation and
          condensation.&rdquo;
        </em>{" "}
        And it is direct about who is not to blame:{" "}
        <em>
          &ldquo;We are absolutely clear that it is totally unreasonable to
          blame damp and mould in the home on ‘lifestyle choices’.&rdquo;
        </em>{" "}
        (
        <a href={SRC.govDamp} rel="nofollow">
          GOV.UK
        </a>
        ). Buying a tenant a dehumidifier is not the same as finding out why
        the room is wet.
      </p>
      <p>
        For social landlords in England the timeframes are now fixed. The
        Awaab&rsquo;s Law guidance says a social landlord must{" "}
        <em>
          &ldquo;Investigate any potential significant hazards within 10
          working days of becoming aware of them&rdquo;
        </em>{" "}
        and{" "}
        <em>
          &ldquo;Undertake relevant safety work within 5 working days of the
          investigation concluding, if the investigation identifies a
          significant hazard.&rdquo;
        </em>{" "}
        (
        <a href={SRC.awaabs} rel="nofollow">
          GOV.UK
        </a>
        ). This page holds no fetched source on how those timeframes reach
        private tenancies, so it does not say.
      </p>

      {/* [2] Limits */}
      <h2 id="limits">Where a Dehumidifier Does Not Help</h2>
      <p>
        <strong>As a substitute for fixing the cause.</strong> The guidance is
        explicit:{" "}
        <em>
          &ldquo;Tenant management of condensation and small amounts of mould
          should not be a substitute for assessing and addressing the
          underlying issue, which should always be the priority.&rdquo;
        </em>{" "}
        (
        <a href={SRC.govDamp} rel="nofollow">
          GOV.UK
        </a>
        ). A unit running in a room with a leak is drying the symptom.
      </p>
      <p>
        <strong>Where the mould has already been wiped off.</strong> The same
        guidance:{" "}
        <em>
          &ldquo;Simply removing surface mould will not prevent the damp and
          mould from reappearing&rdquo;
        </em>
        . Cleaning and drying are two steps; neither is the repair.
      </p>
      <p>
        <strong>Where the listing cannot say how much it extracts.</strong> The
        Arete One is titled 25L and listed at 14 litres a day. The Arete Two is
        listed at 20 litres a day in its text and 25 in its table. Both are on
        the cards as the listings state them.
      </p>

      {/* [3] Criteria */}
      <h2 id="what-decides">What Decides the Choice</h2>
      <h3>1. Extraction rate, as listed</h3>
      <p>
        From 14 litres a day on the Arete One to 30 on the electriQ and the
        VonHaus. Litres a day is the maker&rsquo;s test figure; the guidance
        names a humidity reading, not a litre figure, as the check that matters
        in the room.
      </p>
      <h3>2. Tank size and whether it drains, as listed</h3>
      <p>
        Tanks stated run from 4.8 litres to 7; two listings state a drain
        option. A unit rated at 30 litres a day with a 5.3 litre tank is a unit
        emptied five or six times a day unless the hose is fitted.
      </p>
      <h3>3. Floor area, as listed</h3>
      <p>
        Three listings give an area — 86 m², 80 m² and 30 to 40 m² — and two
        give none. The comparison table says &ldquo;not stated&rdquo; where a
        listing is silent, and this page does not convert a litre figure into
        a room size.
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
                "A 650 watt metal-bodied unit on wheels, listed at up to 30 litres a day with a humidistat, a 24-hour timer and a permanent drainage option. Its listing says a 7 litre tank in one place and 30 in another; the card carries both. Listed for warehouses, garages, basements and offices, and at 26 kilograms.",
                "A 267 watt unit with a 4.8 litre front-loading tank and an H13 HEPA filter, listed for a floor area of 86 square metres at 40 dB. Its listing rates it at up to 14 litres a day; the 25L in its name is the model, not the figure, and the card says so.",
                "A 204 watt unit listed at up to 20 litres a day in its text and 25 in its detail table, with the Meaco app, three fan speeds from 38 dB and an 80 square metre floor area. The h2 above now carries the card's award under Law 189.",
                "A 330 watt unit listed at 25 litres a day, with a variable humidistat, laundry, quiet and auto modes, a 24-hour timer and a child lock. Its listing says it drops to fan-only at the target humidity and re-tests after 30 minutes. Tank size and floor area are not stated.",
                "A 430 watt unit listed at 30 litres a day, a 5.3 litre tank with a drain hose, the TUYA Smart app, a 24-hour timer, auto defrost and a child lock, for a room of 30 to 40 square metres at 44 dB. The h2 above now carries the card's award under Law 189.",
              ][i]
            }
          </p>
        </div>
      ))}

      {/* Alternatives */}
      <h2 id="alternatives">If a Dehumidifier Is Not the Answer</h2>
      <p>
        <strong>Find the water.</strong> Our{" "}
        <a href="/best/awaabs-law-damp-mould-equipment">damp and mould equipment</a>{" "}
        page covers meters and monitors — the reading the guidance names.
      </p>
      <p>
        <strong>Fix the ventilation.</strong> The guidance names blocked,
        absent or switched-off mechanical ventilation among the checks, and
        humidity-controlled fans among the remedies. That is a building job,
        not an appliance.
      </p>
      <p>
        <strong>Treat the surface after the cause.</strong> Our{" "}
        <a href="/best/damp-proof-paint-mould-treatment">mould treatment</a>{" "}
        page covers sprays, primers and paints, and says the same thing about
        order of work.
      </p>

      {/* Using them */}
      <h2 id="using">Siting and Running One</h2>
      <ol>
        <li>
          <strong>Take a reading first.</strong> A moisture meter or monitor is
          the check the guidance names.
        </li>
        <li>
          <strong>Put it in the room that is wet.</strong> A unit removes
          moisture from the air it can reach; a closed door is the edge of its
          reach.
        </li>
        <li>
          <strong>Fit the hose if the listing has one.</strong> Two do. The
          others are emptied by hand.
        </li>
        <li>
          <strong>Use the humidistat, where listed.</strong> Four listings state
          one; a unit that stops at its target is not drying the air past the
          point the reading asked for.
        </li>
        <li>
          <strong>Take the reading again.</strong> If it does not fall, the water
          is not coming out of the air, and the guidance&rsquo;s underlying-cause
          list is where to look next.
        </li>
      </ol>

      {/* Comparison table */}
      <h2 id="compared">Dehumidifiers Compared</h2>
      <p>
        Every column below is what the Amazon listing itself states. Where a
        listing gives two figures, both are shown; where it gives none, the
        cell says so rather than guessing.
      </p>
      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[var(--color-paper-sunk)]">
              <th className="text-left p-2 border-b font-semibold">Product</th>
              <th className="text-left p-2 border-b font-semibold">Extraction and power, as listed</th>
              <th className="text-left p-2 border-b font-semibold">Tank, as listed</th>
              <th className="text-left p-2 border-b font-semibold">Floor area, as listed</th>
              <th className="text-left p-2 border-b font-semibold">Award</th>
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
        subtext="Where the reading does not fall, compare damp and pest specialists near you — no fees, no commissions."
      />
    </GuideLayout>
  );
}
