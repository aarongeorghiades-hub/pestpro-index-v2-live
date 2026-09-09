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
// G3 CLEARED — THIS ROUTE WAS THE ESTATE'S WORST OUTSIDE THE PROTECTED /products
// CONTROL, at 4 asserted hits on the served surface from 2 source strings:
//   feature "UK sizing (Double 135x190cm, 30cm deep) — Silentnight trusted brand"
//   prose   "Silentnight is a name tenants recognise and trust, which matters when ..."
// Both are this site's own voice about a brand, which Law 153 does not excuse — that
// rule protects proper nouns carrying the stem, not a claim we make about a maker. The
// feature now states the listing's own size facts and nothing else; the prose sentence
// is deleted rather than softened, because there is no source for it.
//
// LAW 189 — THE h2s WERE MISCLASSIFIED AND ARE REBUILT. `h2Label` held a rank numeral
// and a product name ("#1 Silentnight Complete Encasement") while `h2Name` held the
// award ("Best Overall for Landlords"), and on one record `h2Name` held an unsourced
// popularity claim ("Popular in the Rental Market"). Law 188 does not reach that shape.
// On rebuild the h2 gains the award the card already shows, product name retained, card
// label unchanged. The popularity claim has no source and does not survive.
//
// AWARD LABELS, RANK NUMERALS AND CARD ORDER ARE UNCHANGED. Nothing was removed under
// the mismatch ruling on this route: all five listings support what their cards claim.
//
// PM RULING, S69 R3 — THE COTTON AWARD MOVED. Referred at S69 R2 and ruled this round.
// "Best Cotton Encasement" sat on the rank-4 card, whose listing's fabric row reads
// "80% Cotton / 20% Polyester ; Other Sides : 100% Polyester" and whose material type row
// reads Polycotton — while the rank-2 card's listing states a 100% cotton terry top. The
// award now sits on the product the listings support:
//   rank 2  B00WI09NM6  "Best Professional-Grade"  ->  "Best Cotton Encasement"
//   rank 4  B0C5XFD8X5  "Best Cotton Encasement"   ->  "Best Lab-Certified Cover"
// The replacement label is drawn from the rank-4 listing's own words: its second bullet
// reads "LAB-CERTIFIED PROTECTION AGAINST BED BUGS & MITES ... tested and certified in a
// laboratory (Laboratoire T.E.C.)". Nothing about cotton survives on that card's label.
// Rank numerals and card order do not move; only the two labels changed, on cardLabel,
// h2Label and tocLabel together so no card disagrees with its own h2 (Law 188). Written
// by file and ASIN, never globally (Law 98): "Best Professional-Grade" appears on ten
// other routes and none of them was touched. No duplicate award on this route after the
// swap, measured on both label surfaces.
//
// THE SUBTITLE AND DESCRIPTION carried own-voice claims — "saves mattresses, prevents
// infestations, and pays for itself after one avoided replacement", and "Bed bug proof
// mattress encasements". Replaced with what the listings and the sources state.
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Professional Mattress Encasements UK (2026)",
    description:
      "Five products for landlords and HMO operators: four zipped encasements and a set of interceptors, compared on their own listings.",
    alternates: {
      canonical: "https://pestproindex.com/best/professional-mattress-encasements",
    },
    openGraph: {
      title: "Best Professional Mattress Encasements UK (2026)",
      description:
        "Five products for landlords and HMO operators: four zipped encasements and a set of interceptors, compared on their own listings.",
      url: "https://pestproindex.com/best/professional-mattress-encasements",
      type: "article",
      siteName: "PestPro Index",
    },
  };
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Professional Mattress Encasements UK (2026)",
  description:
    "Five products for landlords and HMO operators: four zipped encasements and a set of interceptors, compared on their own listings.",
  datePublished: "2026-04-06",
  dateModified: "2026-09-09",
  author: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  publisher: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://pestproindex.com/best/professional-mattress-encasements",
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
      name: "Best Professional Mattress Encasements UK 2026",
      item: "https://pestproindex.com/best/professional-mattress-encasements",
    },
  ],
};

// SOURCES. Every quotation was extracted by byte range from a body on disk and verified
// by exact string match before it was written here (Law 164). Each citation names the
// host actually fetched (Law 194). ipm.ucanr.edu fetched 2026-09-09, kept at
// ~/pp-s69r1/sources/ucipm-bedbugs.src.txt; www.nhs.uk fetched 2026-09-09, kept at
// ~/pp-s68r8/sources/nhs-bedbugs.src.txt; www.gov.uk fetched 2026-09-09, kept at
// ~/pp-s69r2/sources/gov-private-renting-repairs.src.txt. All under Law 175.
const SRC = {
  ucipm: "https://ipm.ucanr.edu/PMG/PESTNOTES/pn7454.html",
  nhs: "https://www.nhs.uk/conditions/bedbugs/",
  gov: "https://www.gov.uk/private-renting/repairs",
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

// Records are addressed BY IDENTITY, never by position (Law 107).
//
// Feature text and comparison cells are rebuilt from the banked Amazon bodies at
// ~/pp-s61r1/uk/, inside the S45-C window. A property is asserted only where the
// listing's own text states it (S52-E); a cell the listing does not state reads
// "not stated". Maker self-praise is trimmed and never restated (S47-F).
//
// FOUR OF THE FIVE ARE SIX-SIDED ZIPPED ENCASEMENTS. THE FIFTH IS NOT AN ENCASEMENT AT
// ALL — it is a set of under-leg interceptor traps, and its card and the page's opening
// paragraph both say so rather than letting the route's title carry the implication.
const products: ProductRecord[] = [
  {
    anchorId: "silentnight",
    asin: "B0FHRPBZGR",
    rank: 1,
    cardName: "Silentnight Complete Encasement Waterproof Mattress Protector",
    cardLabel: "Best Overall",
    features: [
      "Six-sided encasement with a secure zip, per the listing",
      "The maker states protection against bed bugs and dust mites",
      "Listed as fitting mattress depths up to 30cm; size row reads Double",
      "Waterproof top and sides over a polypropylene backing, as listed",
      "Listed as fully machine washable",
    ],
    tableCells: [
      "Silentnight Complete Encasement",
      "Six-sided, zipped",
      "Bed bugs and dust mites, per the maker",
      "Double; up to 30cm depth, as listed",
    ],
    h2Label: "Best Overall",
    h2Name: "Silentnight Complete Encasement",
    tocLabel: "Best Overall",
    tocName: "Silentnight Complete Encasement",
  },
  {
    anchorId: "sureguard",
    asin: "B00WI09NM6",
    rank: 2,
    cardName: "SureGuard Mattress Encasement — Queen, 13-16 in. Deep",
    cardLabel: "Best Cotton Encasement",
    features: [
      "The maker states the mattress is sealed from bed bugs only when used with its own box spring encasement",
      "100% cotton terry top, described by the maker as noiseless and moisture-wicking",
      "The maker states it is free from vinyl, PVC, phthalates and fire retardants",
      "The maker states independent lab testing and GREENGUARD Gold certification",
      "Listed in US sizing: Queen, 60 by 80 inches, fits 13 to 16 inches deep",
    ],
    tableCells: [
      "SureGuard Mattress Encasement",
      "Six-sided, zipped",
      "Bed bug proof with the matching box spring cover, per the maker",
      "Queen 60\" x 80\"; fits 13–16 in. deep, as listed",
    ],
    h2Label: "Best Cotton Encasement",
    h2Name: "SureGuard Mattress Encasement",
    tocLabel: "Best Cotton Encasement",
    tocName: "SureGuard Encasement",
  },
  {
    anchorId: "utopia",
    asin: "B077STRSZ7",
    rank: 3,
    cardName: "Utopia Bedding Premium Waterproof Mattress Encasement — Double 135x190x30 cm",
    cardLabel: "Best Budget",
    features: [
      "The only card here listed in UK sizing: Double, 135 x 190 x 30 cm",
      "The maker describes a mini-zipper securing all 360 degrees",
      "Thick knitted polyester with a TPU backing on all six sides, as listed",
      "The maker states it repels dust mites and bacteria",
      "Listed as machine washable and tumble dryable",
    ],
    tableCells: [
      "Utopia Bedding Premium Encasement",
      "Six-sided, zipped",
      "Bed bugs and dust mites, per the maker",
      "Double 135 x 190 x 30 cm, as listed",
    ],
    h2Label: "Best Budget",
    h2Name: "Utopia Bedding Premium Encasement",
    tocLabel: "Best Budget",
    tocName: "Utopia Bedding Encasement",
  },
  {
    anchorId: "wrappybag",
    asin: "B0C5XFD8X5",
    rank: 4,
    cardName: "Wrappybag Bed Bug Mattress Protector — Waterproof Encasement 135x190x20",
    cardLabel: "Best Lab-Certified Cover",
    features: [
      "Fabric row reads 80% cotton and 20% polyester on top, 100% polyester on the other sides",
      "The maker states laboratory testing and certification by Laboratoire T.E.C.",
      "The maker states OEKO-TEX 100 certification and dermatological testing by Dermatest",
      "Listed as a full encasement, described by the maker as airtight",
      "Listed at 135 x 190 x 20 cm, with other sizes stated as available",
    ],
    tableCells: [
      "Wrappybag Bed Bug Mattress Protector",
      "Six-sided, zipped",
      "Lab tested and certified against bed bugs and mites, per the maker",
      "135 x 190 x 20 cm, as listed",
    ],
    h2Label: "Best Lab-Certified Cover",
    h2Name: "Wrappybag Bed Bug Mattress Protector",
    tocLabel: "Best Lab-Certified Cover",
    tocName: "Wrappybag Mattress Protector",
  },
  {
    anchorId: "interceptors",
    asin: "B07MG8BD7X",
    rank: 5,
    cardName: "Bed Bug Blocker (Pro) Interceptor Traps — 8 Pack",
    cardLabel: "Best Interceptor Traps",
    features: [
      "Not an encasement: eight cups that sit under bed and furniture legs",
      "Target species row reads Bed Bug; the listing states no chemicals or pesticides",
      "The maker describes bed bugs climbing the textured exterior and being unable to escape the inner reservoir",
      "The maker states eight traps cover two beds or other pieces of furniture",
      "Listed for homes, hotels, hostels, dormitories, hospitals and nursing homes",
    ],
    tableCells: [
      "Bed Bug Blocker (Pro) Interceptor Traps",
      "Under-leg traps, not an encasement",
      "Detection and trapping, per the maker; no pesticide",
      "8 traps, stated as covering two beds",
    ],
    h2Label: "Best Interceptor Traps",
    h2Name: "Bed Bug Blocker (Pro) Interceptor Traps",
    tocLabel: "Best Interceptor Traps",
    tocName: "Bed Bug Blocker Interceptors",
  },
];

const faqs = [
  {
    q: "Do encasements work?",
    a: "UC IPM says mattress encasements specifically designed to prevent bed bugs from establishing harbourages on mattresses are commercially available and have been shown to be effective through laboratory research, and that bugs trapped inside encasements will eventually die due to starvation. It adds that encasements are particularly useful for hotels or other facilities with many beds, which is the situation most readers of this page are in. Those are the source's findings about the product class, not claims by this page about any of the five items below.",
  },
  {
    q: "How long do I leave one on?",
    a: "No source read for this page states a figure and no listing here states one either. UC IPM says trapped bugs die of starvation without giving a period. A number invented here would look exactly like a number that had been measured, so there is none.",
  },
  {
    q: "Why is a trap on a page about encasements?",
    a: "Because it answers the question an encasement cannot. UC IPM writes that several kinds of bed bug detection traps are available to help determine if there is an infestation, and describes commercially available double-cupped monitors installed under bed legs as a temporary exclusion measure. The rank-5 card is that product, it is not an encasement, and its card says so in its first line.",
  },
  {
    q: "What are my duties as a landlord here?",
    a: "GOV.UK states that a landlord is always responsible for repairs to the property's structure and exterior, and that where repairs are not done a tenant should contact the environmental health department at their local council, who must take action if they think the problems could harm the tenant or cause a nuisance to others. It also describes the Housing Health and Safety Rating System assessment a council will carry out. This page is not legal advice and none of that is displaced by buying a mattress cover.",
  },
  {
    q: "Will a cover on its own clear an infestation?",
    a: "No source read here says so. The NHS says it is very difficult to get rid of bedbugs yourself because they can be hard to find and may be resistant to some insecticides, and that you should contact your local council or pest control service. UC IPM lists bed frames, headboards, baseboards and furniture among the hiding places. A mattress cover covers a mattress.",
  },
  {
    q: "Are the bites a health risk?",
    a: "The NHS says bedbug bites can be itchy but do not usually cause other health problems, and UC IPM says bed bugs are not known to spread diseases although scratching bites can lead to infections. Anything about a tenant's own skin, or your own, is a question for a pharmacist or a GP rather than for a product page.",
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
  { id: "situation", title: "What an Encasement Does, According to UC IPM" },
  { id: "health", title: "What the NHS and UC IPM Say About the Bites" },
  { id: "legal", title: "The Landlord Position, According to GOV.UK" },
  { id: "limits", title: "Where an Encasement Does Not Work" },
  { id: "what-decides", title: "What Decides the Choice" },
  ...products.map((p) => ({ id: p.anchorId, title: `${p.tocLabel} — ${p.tocName}` })),
  { id: "alternatives", title: "If a Cover Is Not the Answer" },
  { id: "using", title: "Use and Placement" },
  { id: "compared", title: "The Five Compared" },
];

export default function BestProfessionalMattressEncasementsPage() {
  return (
    <GuideLayout
      title="Best Professional Mattress Encasements for Landlords &amp; HMO Operators (2026)"
      subtitle="Four six-sided zipped covers and one set of under-leg interceptor traps, described by what their own listings state — beside the University of California on what an encasement does and GOV.UK on where a tenant goes next"
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
        { title: "Best Bed Bug Mattress Encasement UK 2026", href: "/best/bed-bug-mattress-encasement" },
        { title: "Best Professional Bed Bug Steamers UK 2026", href: "/best/professional-bed-bug-steamers" },
        { title: "Best Bed Bug Treatments UK 2026", href: "/best/bed-bug-treatments" },
        { title: "Best Commercial Insect Monitors UK 2026", href: "/best/commercial-insect-monitors" },
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
        Five items, and only four of them are encasements. The fifth is a set of
        cups that go under the bed legs, and it is here because it answers a
        question no cover can: whether there is anything in the room at all.
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
            <strong>A tenant has reported bites and you are the landlord.</strong>{" "}
            <a href="#legal" className="underline">
              What GOV.UK says about repairs and the council
            </a>{" "}
            comes before any purchase.
          </li>
          <li>
            <strong>You are hoping a cover ends the infestation.</strong>{" "}
            <a href="#limits" className="underline">
              Where an encasement does not work
            </a>{" "}
            — the NHS answers this and the answer is no.
          </li>
          <li>
            <strong>You do not know whether there is an infestation yet.</strong>{" "}
            <a href="#interceptors" className="underline">
              The interceptor traps
            </a>{" "}
            are the item that tells you, and they are not a cover.
          </li>
          <li>
            <strong>You are buying for UK beds in quantity.</strong>{" "}
            <a href="#utopia" className="underline">
              The 135 x 190 x 30 cm cover
            </a>{" "}
            is the only one here listed in UK sizes.
          </li>
          <li>
            <strong>You need the strongest claim on the listing.</strong>{" "}
            <a href="#wrappybag" className="underline">
              The lab-certified cover
            </a>{" "}
            names its testing house; the others do not.
          </li>
        </ul>
      </div>

      <div className="not-prose">
        <Callout type="warning">
          <p>
            The NHS says it is very difficult to get rid of bedbugs yourself and
            that you should contact your local council or pest control service.
            A mattress cover does not change that, and nothing on this page
            treats a room.
          </p>
        </Callout>
      </div>

      {/* [0] Situation */}
      <h2 id="situation">What an Encasement Does, According to UC IPM</h2>
      <p>
        The University of California&rsquo;s Statewide IPM Program describes the
        product class rather than any particular cover:{" "}
        <em>
          &ldquo;Mattress encasements specifically designed to prevent bed bugs
          from establishing harborages on mattresses are commercially available
          and have been shown to be effective through laboratory research.&rdquo;
        </em>{" "}
        (
        <a href={SRC.ucipm} rel="nofollow">
          UC IPM
        </a>
        ).
      </p>
      <p>
        For the readers of this page in particular:{" "}
        <em>&ldquo;Encasements are particularly useful for hotels or other facilities with many beds.&rdquo;</em>{" "}
        And the mechanism, in one sentence:{" "}
        <em>&ldquo;Bugs trapped inside encasements will eventually die due to starvation.&rdquo;</em>{" "}
        No period is given for that, by UC IPM or by any listing here, so none
        appears on this page.
      </p>
      <p>
        On the fifth item, the same source:{" "}
        <em>&ldquo;Several kinds of bed bug detection traps are available to help determine if there is an infestation.&rdquo;</em>{" "}
        Detection is a different job from containment, and it usually comes
        first.
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
        UC IPM, with the one qualification it attaches:{" "}
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
        That is the whole of it. There is no symptom list here for anyone to
        check themselves or a tenant against. A skin question goes to a
        pharmacist or a GP, not to a page about mattress covers.
      </p>

      {/* [2] Legal */}
      <h2 id="legal">The Landlord Position, According to GOV.UK</h2>
      <p>
        Almost everyone buying from this page is buying for a property someone
        else lives in. GOV.UK sets out the baseline:{" "}
        <em>&ldquo;Your landlord is always responsible for repairs to: the property’s structure and exterior&rdquo;</em>{" "}
        (
        <a href={SRC.gov} rel="nofollow">
          GOV.UK
        </a>
        ), among the other items on its list.
      </p>
      <p>
        And where that does not happen:{" "}
        <em>
          &ldquo;Contact the environmental health department at your local
          council for help. They must take action if they think the problems
          could harm you or cause a nuisance to others.&rdquo;
        </em>{" "}
        The same page describes what follows if a home is not fit to live in:{" "}
        <em>
          &ldquo;They’ll do a Housing Health and Safety Rating System (HHSRS)
          assessment and must take action if they think your home has serious
          health and safety hazards.&rdquo;
        </em>
      </p>
      <p>
        This site reports what GOV.UK publishes and does not rule on how it
        applies to your tenancy. A mattress cover is a purchase, not a discharge
        of a duty.
      </p>

      {/* [3] Limits */}
      <h2 id="limits">Where an Encasement Does Not Work</h2>
      <p>
        <strong>Everywhere that is not the mattress.</strong> The NHS:{" "}
        <em>
          &ldquo;Bedbugs can hide in many places, including on bed frames,
          mattresses, clothing, furniture, behind pictures and under loose
          wallpaper.&rdquo;
        </em>{" "}
        (
        <a href={SRC.nhs} rel="nofollow">
          NHS
        </a>
        ). A cover addresses exactly one item on that list.
      </p>
      <p>
        <strong>As a whole treatment.</strong> UC IPM states that insecticide
        applications alone will not control a bed bug infestation, and requires
        them to be combined with cleaning, non-chemical tactics and ongoing
        detection (
        <a href={SRC.ucipm} rel="nofollow">
          UC IPM
        </a>
        ). If that is true of the insecticides, it is true of a barrier that
        carries none.
      </p>
      <p>
        <strong>On a bed you have not measured.</strong> Four covers, four depth
        ranges, and three of the four are stated in inches for US bed sizes.
        A cover that will not close is not a cover.
      </p>
      <p>
        <strong>Once it is opened.</strong> Containment is the mechanism UC IPM
        describes, and it stops the moment the zip does.
      </p>
      <p>
        <strong>Where the mattress itself is the wrong target.</strong> UC IPM
        also notes that pesticides are not generally applied to mattresses or
        bedding, because of the potential risk to people (
        <a href={SRC.ucipm} rel="nofollow">
          UC IPM
        </a>
        ). A cover is what fills that gap — but only that gap.
      </p>

      {/* [4] Criteria */}
      <h2 id="what-decides">What Decides the Choice</h2>
      <h3>1. What the listing claims, and how strongly</h3>
      <p>
        All four covers make a bed bug claim; they are not the same claim. One
        names a testing laboratory. One states independent lab testing and a
        third-party certification. One states the seal only in combination with
        the same maker&rsquo;s box spring cover. One states protection without
        naming a test. The cards keep those four apart rather than flattening
        them into a single tick.
      </p>
      <h3>2. Sizing, which is where a bulk order goes wrong</h3>
      <p>
        Only one of the four is listed in UK dimensions. The others are Queen 60
        by 80 inches, Double 135 x 190 x 30 cm and 135 x 190 x 20 cm, and a
        30cm-depth Double. For a landlord ordering for several beds, the depth
        row is the specification that decides whether the delivery is usable.
      </p>
      <h3>3. Whether you are containing or still detecting</h3>
      <p>
        UC IPM puts detection traps and encasements in different paragraphs
        because they do different jobs. If nobody has confirmed there are bed
        bugs, the interceptors answer that and a cover does not.
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
                "A six-sided zipped cover from a mattress maker rather than a pest brand, listed as fitting depths up to 30cm with a size row of Double. Its maker states protection against bed bugs and dust mites, a waterproof top and sides over a polypropylene backing, and full machine washability. It names no test and no certification, which is a difference from two of the others rather than a fault.",
                "The only cover here whose listing states a 100% cotton terry top, which is what the award on it now names — the one other card that mentioned cotton gives 80% on the top panel and 100% polyester on every other side. It is also the only listing that makes its bed bug claim conditional: its maker states the mattress is sealed from bed bugs when used together with its own box spring encasement. It states independent lab testing and GREENGUARD Gold certification, and lists what the fabric is free from. Listed in US sizing at Queen, 60 by 80 inches, for a 13 to 16 inch mattress.",
                "The one card on this page sized for a UK bed: Double, 135 x 190 x 30 cm, with a mini-zipper the maker describes as securing all 360 degrees and a TPU backing on all six sides. Its maker states it repels dust mites and bacteria and describes the fabric as thick knitted polyester. For a landlord buying several, this is the listing whose dimensions need no conversion.",
                "The listing that names its testing house, which is what the award on it names: its maker states laboratory testing and certification by Laboratoire T.E.C., plus OEKO-TEX 100 certification and dermatological testing by Dermatest. Its fabric row reads 80% cotton and 20% polyester on top with 100% polyester on the other sides, and its material type row reads Polycotton — so it is a part-cotton cover rather than a cotton one, and its label no longer says otherwise. Listed at 135 x 190 x 20 cm with other sizes stated as available.",
                "Not an encasement, and the card says so first. Eight cups that sit under bed and furniture legs, with a target species row of Bed Bug and a listing that states no chemicals or pesticides. Its maker describes bed bugs climbing the textured exterior and being unable to escape the inner reservoir, and states that eight traps cover two beds. UC IPM describes this class as a detection tool and as a temporary exclusion measure.",
              ][i]
            }
          </p>
        </div>
      ))}

      {/* Alternatives */}
      <h2 id="alternatives">If a Cover Is Not the Answer</h2>
      <p>
        <strong>Replacing the mattress at turnover.</strong> UC IPM names
        regularly replacing beds, mattresses and bedding materials as a
        proactive step a manager can take (
        <a href={SRC.ucipm} rel="nofollow">
          UC IPM
        </a>
        ). For an HMO operator that is a scheduling decision rather than a
        purchase from this page.
      </p>
      <p>
        <strong>Heat.</strong> Our{" "}
        <a href="/best/professional-bed-bug-steamers">
          professional bed bug steamers
        </a>{" "}
        page covers the steam route, with UC IPM&rsquo;s penetration caveat
        attached to it.
      </p>
      <p>
        <strong>Treating the room.</strong> Our{" "}
        <a href="/best/commercial-insect-monitors">
          commercial bed bug treatment
        </a>{" "}
        page covers the sprays and kits, and our{" "}
        <a href="/best/bed-bug-treatments">bed bug treatments</a> page the
        consumer versions.
      </p>
      <p>
        <strong>The council or a professional.</strong> The NHS&rsquo;s first
        instruction, and GOV.UK&rsquo;s route when a repair is not done. Our{" "}
        <a href="/guides/landlord-pest-control">landlord guide</a> covers the
        duty side.
      </p>

      {/* Use and placement */}
      <h2 id="using">Use and Placement</h2>
      <ol>
        <li>
          <strong>Measure the depth before you order anything.</strong> Every
          cover here states a depth range and three of the four state it in
          inches.
        </li>
        <li>
          <strong>Detect first if nobody has confirmed it.</strong> The
          interceptors go under all four legs of the bed, per the listing.
        </li>
        <li>
          <strong>Launder before you seal.</strong> The NHS names a 60C wash and
          at least 30 minutes in a hot tumble dryer.
        </li>
        <li>
          <strong>Close it fully and leave it closed.</strong> Containment ends
          when the zip opens.
        </li>
        <li>
          <strong>Treat the frame and the room separately.</strong> Bed frames
          and headboards are on the NHS&rsquo;s own list of hiding places and no
          mattress cover reaches them.
        </li>
      </ol>

      {/* Comparison table — LISTING facts only, "not stated" where absent */}
      <h2 id="compared">The Five Compared</h2>
      <p>
        Every column below is what the Amazon listing itself states, with each
        claim attributed to the maker who makes it. Where a listing does not
        state something, the cell says so rather than guessing.
      </p>
      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left p-2 border-b font-semibold">Product</th>
              <th className="text-left p-2 border-b font-semibold">What it is</th>
              <th className="text-left p-2 border-b font-semibold">Bed bug claim, as listed</th>
              <th className="text-left p-2 border-b font-semibold">Size and depth, as listed</th>
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
        heading="Bed bugs in a let property are the pest the NHS says to get help with"
        subtext="Compare pest control providers near you — no fees, no commissions."
      />
    </GuideLayout>
  );
}
