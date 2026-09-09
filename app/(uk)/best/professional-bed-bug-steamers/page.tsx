import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import ProductCard from "@/components/ProductCard";
import FindProviderCTA from "@/components/FindProviderCTA";
import Callout from "@/components/Callout";

// S69 R2 — ROLLOUT REBUILD to the R8/R69R1 pattern, on sources. GROUP B.
//
// HEALTH STATEMENTS ON THIS PAGE: TWO, one NHS and one UC IPM, both quoted and both
// attributed. Neither is in this site's own voice. No diagnosis, no treatment
// recommendation, no symptom checklist offered as guidance; a skin question is sent to a
// pharmacist or a GP and nothing clinical is linked.
//
// A CARD WAS REMOVED UNDER THE MISMATCH RULING. B00G00BTEA, the McCulloch MC1385, was
// carded at rank 3 as "Best Accessory Kit". Its banked listing body — 2,278,031
// characters — contains "bed bug" ZERO times in any case, and its own feature bullet
// reads "Built to meet U.S. voltage requirements. Certified, safety-tested, and
// warrantied for use only in the U.S.", with a Voltage row of 120.0. A 120-volt
// US-certified appliance recommended to UK landlords is not a label problem that can be
// corrected in place; the record is gone. Numerals close up 1-2-3-4, which is the
// S67 R3 and S68 R8 precedent for a removal.
//
// LAW 190 — THIS ROUTE IS NAMED IN CLAUDE.md AS NOT YET COMPLIANT (4 visible questions,
// 2 in schema). It is compliant now: one `faqs` array, the visible block rendered from
// it, the FAQPage schema derived from it, and no second hand-maintained copy.
//
// LAW 189 — THE h2s WERE MISCLASSIFIED. `h2Text` held a rank numeral, a product name and
// a claim ("#1 Polti Cimex Eradicator — The Purpose-Built Bed Bug Steamer"). Law 188
// does not reach that shape. On rebuild the h2 gains the award the card already shows,
// product name retained, card label unchanged.
//
// UNSOURCED OWN-VOICE CLAIMS DELETED, not softened: "150°C+" in three comparison cells
// (no listing states it; the real figures are 180°C, 135°C and 200°C, each from its own
// listing), "Used by professional pest controllers worldwide", "North America's leading
// steam brand", "the most comprehensive available", "Popular with landlords", and "The
// closest thing to genuine professional pest controller equipment on Amazon". The
// subtitle's "kill bed bugs, larvae and eggs on contact — no chemicals, no vacate time"
// and the description's "kills on contact" were own-voice efficacy claims and are gone.
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Professional Bed Bug Steamers UK (2026)",
    description:
      "Four steam cleaners compared on their own listings, beside what UC IPM says about steam, heat and the temperature that kills bed bugs.",
    alternates: {
      canonical: "https://pestproindex.com/best/professional-bed-bug-steamers",
    },
    openGraph: {
      title: "Best Professional Bed Bug Steamers UK (2026)",
      description:
        "Four steam cleaners compared on their own listings, beside what UC IPM says about steam, heat and the temperature that kills bed bugs.",
      url: "https://pestproindex.com/best/professional-bed-bug-steamers",
      type: "article",
      siteName: "PestPro Index",
    },
  };
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Professional Bed Bug Steamers UK (2026)",
  description:
    "Four steam cleaners compared on their own listings, beside what UC IPM says about steam, heat and the temperature that kills bed bugs.",
  datePublished: "2026-04-06",
  dateModified: "2026-09-09",
  author: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  publisher: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://pestproindex.com/best/professional-bed-bug-steamers",
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
      name: "Best Professional Bed Bug Steamers UK 2026",
      item: "https://pestproindex.com/best/professional-bed-bug-steamers",
    },
  ],
};

// SOURCES. Every quotation was extracted by byte range from a body on disk and verified
// by exact string match before it was written here (Law 164). Each citation names the
// host actually fetched (Law 194). ipm.ucanr.edu fetched 2026-09-09, body kept at
// ~/pp-s69r1/sources/ucipm-bedbugs.src.txt; www.nhs.uk fetched 2026-09-09, body kept at
// ~/pp-s68r8/sources/nhs-bedbugs.src.txt. Both under Law 175.
//
// UC IPM IS A CALIFORNIAN SOURCE and the page says so where it matters: its licensing
// remark about heat-treatment providers is Californian and is not restated as UK law
// (Law 135). Its temperature figures are in Fahrenheit because that is how it publishes
// them; they are quoted, not converted, because a converted figure is our arithmetic.
const SRC = {
  ucipm: "https://ipm.ucanr.edu/PMG/PESTNOTES/pn7454.html",
  nhs: "https://www.nhs.uk/conditions/bedbugs/",
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

// Records are addressed BY IDENTITY, never by position (Law 107). That is what made the
// McCulloch removal a one-record edit rather than a renumbering of JSX blocks.
//
// Feature text and comparison cells are rebuilt from the banked Amazon bodies at
// ~/pp-s61r1/uk/, inside the S45-C window. A property is asserted only where the
// listing's own text states it (S52-E); a cell the listing does not state reads
// "not stated". Maker self-praise is trimmed and never restated (S47-F).
//
// LAW 146 — TWO LISTINGS CONTRADICT THEMSELVES AND BOTH READINGS ARE RENDERED. The
// AEOLUS lists a 2,400 watt corded boiler and gives its power source as Battery Powered.
// The Dupray Neat Plus is titled and sold as a UK-plug unit and gives its voltage as
// 120 V.
//
// ONLY TWO OF THE FOUR LISTINGS MENTION BED BUGS AT ALL. That is stated on the cards
// that do not, rather than left for a reader to assume.
const products: ProductRecord[] = [
  {
    anchorId: "polti",
    asin: "B00R3C8OW4",
    rank: 1,
    cardName: "Polti Cimex Eradicator Professional Bed Bug Steamer",
    cardLabel: "Best Overall",
    features: [
      "The only unit here sold as a bed bug device: bed bugs are named in its title",
      "The maker states superheated dry steam up to 180°C",
      "2 litre boiler, 1500 watts, 240 volts, as listed",
      "The maker states it is used with an HPMed detergent, not an insecticide",
      "Its surface recommendation row reads Mattress",
    ],
    tableCells: [
      "Polti Cimex Eradicator",
      "Up to 180°C, per the maker",
      "2 L / 1500 W / 240 V",
      "Bed bugs named in the title",
    ],
    h2Label: "Best Overall",
    h2Name: "Polti Cimex Eradicator",
    tocLabel: "Best Overall",
    tocName: "Polti Cimex Eradicator",
  },
  {
    anchorId: "dupray-neat",
    asin: "B07DJNGYSV",
    rank: 2,
    cardName: "Dupray Neat Steam Cleaner — 17 Piece Kit",
    cardLabel: "Best Value",
    features: [
      "17 accessories, listed for floors, tiles, grout, upholstery and car interiors",
      "Its detail row gives a maximum temperature of 135 degrees Celsius",
      "1.6 litre tank; the maker states up to 50 minutes of continuous steam per fill",
      "1500 watts at 230 volts, listed with a UK plug",
      "Its listing is a general cleaning listing and does not name bed bugs",
    ],
    tableCells: [
      "Dupray Neat, 17-piece",
      "135°C maximum, per the detail row",
      "1.6 L / 1500 W / 230 V",
      "Bed bugs not named in the listing",
    ],
    h2Label: "Best Value",
    h2Name: "Dupray Neat Steam Cleaner",
    tocLabel: "Best Value",
    tocName: "Dupray Neat Steam Cleaner",
  },
  {
    anchorId: "dupray-plus",
    asin: "B0DG6T85WF",
    rank: 3,
    cardName: "Dupray Neat Plus Steam Cleaner — 40 Piece Kit",
    cardLabel: "Best Large Kit",
    features: [
      "40 accessories, the largest kit on this page as listed",
      "The maker states superheated steam up to 135°C and a 90 second heat-up",
      "The maker states refilling without waiting for the unit to cool",
      "Titled and sold as a UK-plug unit; its voltage row reads 120 V",
      "Its listing is a general cleaning listing and does not name bed bugs",
    ],
    tableCells: [
      "Dupray Neat Plus, 40-piece",
      "Up to 135°C, per the maker",
      "not stated / 120 V in the row, UK plug in the title",
      "Bed bugs not named in the listing",
    ],
    h2Label: "Best Large Kit",
    h2Name: "Dupray Neat Plus Steam Cleaner",
    tocLabel: "Best Large Kit",
    tocName: "Dupray Neat Plus",
  },
  {
    anchorId: "aeolus",
    asin: "B0CV5VP2TW",
    rank: 4,
    cardName: "AEOLUS LP01SB Professional Steam Cleaner",
    cardLabel: "Best Professional-Grade",
    features: [
      "Bed bugs and their eggs are named in its title and its first bullet",
      "The maker states dry steam at a temperature of 200°C",
      "2400 watts with a copper boiler and continuous loading, as listed",
      "Supplied accessories are listed individually, including a mattress-capable set",
      "Its power source row reads Battery Powered beside a 2400 watt boiler",
    ],
    tableCells: [
      "AEOLUS LP01SB",
      "200°C, per the maker",
      "2400 W; power source row reads Battery Powered",
      "Bed bugs named in the title",
    ],
    h2Label: "Best Professional-Grade",
    h2Name: "AEOLUS LP01SB Steam System",
    tocLabel: "Best Professional-Grade",
    tocName: "AEOLUS LP01SB",
  },
];

const faqs = [
  {
    q: "Does steam actually kill bed bugs?",
    a: "UC IPM says portable steam cleaners and other steam delivery devices can kill all bed bug life stages, so these items can also be used to clean mattresses and furniture. It attaches a condition in the next sentence: care must be taken to ensure steam penetrates into the areas harbouring bed bugs and their eggs. That is a statement about the method, from a named source, and not a claim by this page about any of the four machines below.",
  },
  {
    q: "What temperature do I need?",
    a: "UC IPM publishes figures for commercial heating services rather than for a hand-held steamer: at least 140°F for two hours or 130°F for three hours, with the minimum lethal temperature given as 113°F. Every machine here states a steam temperature well above that at the nozzle. What no listing states, and what this page will not invent, is how hot the fabric gets a few millimetres in.",
  },
  {
    q: "Is a steamer enough on its own?",
    a: "The NHS says it is very difficult to get rid of bedbugs yourself because they can be hard to find and may be resistant to some insecticides, and that you should contact your local council or pest control service. UC IPM describes steam as one of several non-chemical methods rather than as a complete treatment. A steamer is a tool in a job, not the job.",
  },
  {
    q: "Do all four of these say they are for bed bugs?",
    a: "No, and the cards say which. Two name bed bugs in their own titles — the Polti and the AEOLUS. The two Dupray units are general steam cleaners whose listings never mention bed bugs at all. They are on this page because they are steamers, not because their makers claim anything about the pest.",
  },
  {
    q: "Why did a fifth machine disappear from this page?",
    a: "Because its own listing said it must not be used here. A canister steamer was carded at rank 3 as a bed bug machine; its listing never mentions bed bugs, its voltage row reads 120, and one of its own bullets reads that it is certified, safety-tested and warrantied for use only in the United States. That is not a wording problem that could be fixed on the card, so the record was removed.",
  },
  {
    q: "Are bed bug bites dangerous?",
    a: "The NHS says bedbug bites can be itchy but do not usually cause other health problems, and UC IPM says bed bugs are not known to spread diseases although scratching bites can lead to infections. Anything about your own skin is a question for a pharmacist or a GP rather than for a page about steam cleaners.",
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
  { id: "situation", title: "What Steam Does, According to UC IPM" },
  { id: "health", title: "What the NHS and UC IPM Say About the Bites" },
  { id: "legal", title: "The Legal and Duty Position" },
  { id: "limits", title: "Where a Steamer Does Not Work" },
  { id: "what-decides", title: "What Decides the Choice" },
  ...products.map((p) => ({ id: p.anchorId, title: `${p.tocLabel} — ${p.tocName}` })),
  { id: "alternatives", title: "If a Steamer Is Not the Answer" },
  { id: "using", title: "Use and Placement" },
  { id: "compared", title: "The Four Compared" },
];

export default function BestProfessionalBedBugSteamersPage() {
  return (
    <GuideLayout
      title="Best Professional Bed Bug Steamers for Landlords &amp; Facilities Managers (2026)"
      subtitle="Four steam cleaners described by what their own listings state — beside the University of California's account of what steam does to bed bugs and the condition it attaches to that"
      lastUpdated="September 2026"
      readingTime="8 min"
      breadcrumbParent={{ label: "Best", href: "/best" }}
      tocItems={tocItems}
      relatedGuides={[
        { title: "How to Get Rid of Bed Bugs: Complete UK Guide", href: "/guides/how-to-get-rid-of-bed-bugs" },
        { title: "Landlord Pest Control Responsibilities", href: "/guides/landlord-pest-control" },
        { title: "Pest Control Costs UK 2026", href: "/guides/pest-control-costs" },
      ]}
      relatedProducts={[
        { title: "Best Bed Bug Treatments UK 2026", href: "/best/bed-bug-treatments" },
        { title: "Best Bed Bug Spray UK 2026", href: "/best/bed-bug-spray" },
        { title: "Best Bed Bug Mattress Encasement UK 2026", href: "/best/bed-bug-mattress-encasement" },
        { title: "Best Professional Mattress Encasements UK 2026", href: "/best/professional-mattress-encasements" },
      ]}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Affiliate disclosure */}
      <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
        <p className="text-sm text-amber-800">
          <strong>Affiliate disclosure:</strong> PestPro Index is
          reader-supported. When you buy through links on this page, we may earn
          a small commission at no extra cost to you. This helps us keep the
          site running and free for everyone. As an Amazon Associate, PestPro
          Index earns from qualifying purchases.
        </p>
      </div>

      <p>
        Four steam cleaners. Two are sold as bed bug machines and say so in their
        own titles; two are general cleaning machines that never mention the
        pest. That difference matters more than the accessory count, and the
        cards below lead with it.
      </p>

      {/* DECISION BLOCK — situation first, product second. The legal line and the
          does-not-work line sit ABOVE every product line. NOT a card: no Amazon link,
          no price, no image, no award. */}
      <div className="not-prose my-6 rounded-xl border border-slate-300 bg-slate-50 p-4">
        <p className="m-0 mb-3 text-sm font-semibold uppercase tracking-wide text-slate-600">
          Start with your situation
        </p>
        <ul className="m-0 list-none space-y-2 p-0 text-sm text-slate-800">
          <li>
            <strong>You are a landlord and a tenant has reported them.</strong>{" "}
            <a href="#legal" className="underline">
              The duty and the council route
            </a>{" "}
            come before any purchase.
          </li>
          <li>
            <strong>You are hoping steam finishes the job.</strong>{" "}
            <a href="#limits" className="underline">
              Where a steamer does not work
            </a>{" "}
            — the NHS and UC IPM both answer this, and neither says yes.
          </li>
          <li>
            <strong>You want a machine whose maker names the pest.</strong>{" "}
            <a href="#polti" className="underline">
              The Polti
            </a>{" "}
            or{" "}
            <a href="#aeolus" className="underline">
              the AEOLUS
            </a>{" "}
            — the only two of the four that do.
          </li>
          <li>
            <strong>You want one machine for cleaning and treatment.</strong>{" "}
            <a href="#dupray-neat" className="underline">
              The 17-piece
            </a>{" "}
            or{" "}
            <a href="#dupray-plus" className="underline">
              the 40-piece
            </a>
            , with the caveat that neither listing mentions bed bugs.
          </li>
          <li>
            <strong>You have several rooms and a turnover deadline.</strong>{" "}
            <a href="#alternatives" className="underline">
              What UC IPM says about commercial heat
            </a>{" "}
            instead.
          </li>
        </ul>
      </div>

      <div className="not-prose">
        <Callout type="warning">
          <p>
            The NHS says it is very difficult to get rid of bedbugs yourself and
            that you should contact your local council or pest control service.
            A steamer does not change that, and nothing on this page is a
            substitute for it.
          </p>
        </Callout>
      </div>

      {/* [0] Situation */}
      <h2 id="situation">What Steam Does, According to UC IPM</h2>
      <p>
        The University of California&rsquo;s Statewide IPM Program states the
        capability plainly:{" "}
        <em>
          &ldquo;Portable steam cleaners and other steam delivery devices can
          kill all bed bug life stages, so these items can also be used to clean
          mattresses and furniture.&rdquo;
        </em>{" "}
        (
        <a href={SRC.ucipm} rel="nofollow">
          UC IPM
        </a>
        ).
      </p>
      <p>
        And in the very next sentence, the condition:{" "}
        <em>
          &ldquo;Care must be taken, however, to ensure steam penetrates into
          the areas harboring bed bugs and their eggs.&rdquo;
        </em>{" "}
        Both sentences belong together. A page that quoted only the first would
        be selling the machine rather than describing it.
      </p>
      <p>
        On temperature, the same source publishes figures for commercial heating
        services rather than for hand-held steamers:{" "}
        <em>
          &ldquo;The current recommendation for effective commercial heating
          services calls for a temperature of at least 140°F for two hours or
          130°F for three hours (the minimum lethal temperature is 113°F), which
          will kill most bed bugs and eggs.&rdquo;
        </em>{" "}
        Those figures are quoted in the units the source publishes and are not
        converted here.
      </p>

      {/* [1] Health — attributed, quoted, no diagnosis, no treatment advice */}
      <h2 id="health">What the NHS and UC IPM Say About the Bites</h2>
      <p>
        The NHS:{" "}
        <em>
          &ldquo;Bedbugs are small insects that often live on furniture or
          bedding. Their bites can be itchy but do not usually cause other
          health problems.&rdquo;
        </em>{" "}
        (
        <a href={SRC.nhs} rel="nofollow">
          NHS
        </a>
        ).
      </p>
      <p>
        UC IPM, with one qualification:{" "}
        <em>
          &ldquo;Bed bugs aren&rsquo;t known to spread diseases, but scratching
          bites can lead to infections.&rdquo;
        </em>{" "}
        (
        <a href={SRC.ucipm} rel="nofollow">
          UC IPM
        </a>
        ).
      </p>
      <p>
        That is the whole of what this page says about health. There is no
        symptom list here to check yourself against. If bites are the reason you
        are reading a page about steam cleaners, take that to a pharmacist or a
        GP.
      </p>

      {/* [2] Legal */}
      <h2 id="legal">The Legal and Duty Position</h2>
      <p>
        Most readers of this page are buying for someone else&rsquo;s home. GOV.UK
        sets out where a tenant goes when a property problem is not dealt with:{" "}
        <em>
          &ldquo;Contact the environmental health department at your local
          council for help. They must take action if they think the problems
          could harm you or cause a nuisance to others.&rdquo;
        </em>{" "}
        (
        <a href="https://www.gov.uk/private-renting/repairs" rel="nofollow">
          GOV.UK
        </a>
        ). Buying a steamer does not displace that route; it runs alongside it.
      </p>
      <p>
        Each machine is a mains appliance with its own electrical instructions,
        and one of the four gives a voltage in its detail row that its own title
        contradicts. Read the plate on the unit, not the listing, before it goes
        into a tenanted property.
      </p>
      <p>
        UC IPM notes that in California, providers of heat services must be
        licensed and bonded by the Structural Pest Control Board. That is
        Californian law and it is not restated here as a UK requirement.
      </p>

      {/* [3] Limits */}
      <h2 id="limits">Where a Steamer Does Not Work</h2>
      <p>
        <strong>Wherever the steam does not reach.</strong> UC IPM&rsquo;s own
        condition — that care must be taken to ensure steam penetrates into the
        areas harbouring bed bugs and their eggs — is the whole difficulty. A
        seam treated on its surface is a seam treated on its surface.
      </p>
      <p>
        <strong>As the entire treatment.</strong>{" "}
        <em>&ldquo;Insecticide applications alone won&rsquo;t control bed bug infestations.&rdquo;</em>{" "}
        (
        <a href={SRC.ucipm} rel="nofollow">
          UC IPM
        </a>
        ). If that is true of the chemicals, it is true of a machine that
        carries none.
      </p>
      <p>
        <strong>Against a population you have not located.</strong> The NHS says
        it is{" "}
        <em>
          &ldquo;very difficult to get rid of bedbugs yourself because they can
          be hard to find and may be resistant to some insecticides.&rdquo;
        </em>{" "}
        (
        <a href={SRC.nhs} rel="nofollow">
          NHS
        </a>
        ). Finding them is the harder half and no steamer helps with it.
      </p>
      <p>
        <strong>On a claim its maker never made.</strong> Two of the four
        listings here never mention bed bugs. They are steam cleaners, sold as
        steam cleaners, and their cards say so rather than borrowing the
        page&rsquo;s subject as a claim.
      </p>

      {/* [4] Criteria */}
      <h2 id="what-decides">What Decides the Choice</h2>
      <h3>1. Whether the maker names the pest</h3>
      <p>
        This is the first split and it is not a matter of quality. The Polti and
        the AEOLUS name bed bugs in their own titles, and the Polti&rsquo;s
        surface recommendation row reads Mattress. The two Dupray units name
        neither. Buying a machine whose maker makes no claim about the pest is a
        legitimate choice; buying one under the impression that it does is not.
      </p>
      <h3>2. Nozzle temperature, as each listing states it</h3>
      <p>
        180°C, 135°C, 135°C and 200°C, each figure from the listing that states
        it. Set against UC IPM&rsquo;s minimum lethal temperature of 113°F, every
        one of them is hot enough at the nozzle. What decides the outcome is
        UC IPM&rsquo;s penetration condition, which no listing addresses and this
        page cannot measure.
      </p>
      <h3>3. Run time before a refill</h3>
      <p>
        A 2 litre boiler, a 1.6 litre tank with a stated 50 minutes of
        continuous steam, a unit whose maker states you can refill without
        waiting for it to cool, and a continuous-load professional boiler. On a
        multi-room turnover this is the specification that decides how long the
        job takes.
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
                "The only unit on this page whose title is about the pest rather than about cleaning. Its maker states superheated dry steam up to 180°C used together with an HPMed detergent, a 2 litre boiler at 1500 watts on 240 volts, and its surface recommendation row reads Mattress. Its maker also makes a broad claim about viruses, bacteria and spores which is the maker's own and is not restated here.",
                "A general steam cleaner with 17 accessories, listed for floors, tiles, grout, upholstery and car interiors. Its detail row gives a maximum temperature of 135 degrees Celsius, its tank is 1.6 litres and its maker states up to 50 minutes of continuous steam per fill. Its listing does not mention bed bugs anywhere, and the card leads with that rather than leaving it to be assumed.",
                "The same maker's larger kit: 40 accessories, superheated steam stated up to 135°C, a stated 90 second heat-up, and refilling without waiting for the unit to cool. It is titled and sold as a UK-plug unit while its voltage row reads 120 V; both readings are on the card because the listing cannot settle it. Like the 17-piece, its listing never mentions bed bugs.",
                "A professional boiler rather than a domestic steamer: 2400 watts, copper boiler, continuous loading, and the maker states dry steam at 200°C. Bed bugs and their eggs are named in its title and in its first bullet. Its power source row reads Battery Powered beside that 2400 watt boiler, which is a contradiction inside the listing and is reported rather than resolved.",
              ][i]
            }
          </p>
        </div>
      ))}

      {/* Alternatives */}
      <h2 id="alternatives">If a Steamer Is Not the Answer</h2>
      <p>
        <strong>Commercial heat.</strong> UC IPM describes commercial heating
        services that treat entire rooms, with the temperature and duration
        figures quoted above. That is a service, not a purchase.
      </p>
      <p>
        <strong>The tumble dryer you already own.</strong> UC IPM says a home
        laundry drier at the hottest setting can be used to deliver the
        necessary heat to clothing and bedding, with at least 10 to 15 minutes
        of exposure, and to consider first whether heat will damage the fabric.
      </p>
      <p>
        <strong>A barrier over the mattress.</strong> Our{" "}
        <a href="/best/professional-mattress-encasements">
          professional mattress encasements
        </a>{" "}
        page covers the zipped covers, which carry no heat and no insecticide.
      </p>
      <p>
        <strong>The council or a professional.</strong> The NHS&rsquo;s first
        instruction. Our{" "}
        <a href="/guides/how-to-get-rid-of-bed-bugs">bed bug guide</a> sets out
        what that involves, and our{" "}
        <a href="/guides/landlord-pest-control">landlord guide</a> covers the
        duty side.
      </p>

      {/* Use and placement */}
      <h2 id="using">Use and Placement</h2>
      <ol>
        <li>
          <strong>Find them before you heat anything.</strong> The NHS calls
          them hard to find, and steam applied where they are not does nothing.
        </li>
        <li>
          <strong>Work the seams, tufts and joints.</strong> UC IPM&rsquo;s list
          of hiding places is mattress seams, box spring joints, bed frame
          cracks and behind headboards.
        </li>
        <li>
          <strong>Go slowly enough to penetrate.</strong> The penetration
          condition is the one UC IPM attaches by name, and speed is what
          defeats it.
        </li>
        <li>
          <strong>Read the plate, not the listing.</strong> One of these four
          gives a voltage its own title contradicts.
        </li>
        <li>
          <strong>Expect to repeat, and to check.</strong> Steam is one
          non-chemical method among several in UC IPM&rsquo;s account, not the
          end of the job.
        </li>
      </ol>

      {/* Comparison table — LISTING facts only, "not stated" where absent */}
      <h2 id="compared">The Four Compared</h2>
      <p>
        Every column below is what the Amazon listing itself states, with each
        figure attributed to the maker who states it. Where a listing does not
        state something, the cell says so rather than guessing.
      </p>
      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left p-2 border-b font-semibold">Product</th>
              <th className="text-left p-2 border-b font-semibold">Steam temperature, as listed</th>
              <th className="text-left p-2 border-b font-semibold">Tank, power, voltage, as listed</th>
              <th className="text-left p-2 border-b font-semibold">Does the listing name bed bugs?</th>
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
        heading="Bed bugs are the pest the NHS says to get help with"
        subtext="Compare pest control providers near you — no fees, no commissions."
      />
    </GuideLayout>
  );
}
