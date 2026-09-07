import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import ProductCard from "@/components/ProductCard";
import FindProviderCTA from "@/components/FindProviderCTA";
import Callout from "@/components/Callout";

// S68 R3 — ROLLOUT REBUILD to the R8 pattern. Title and H1 byte-unchanged. Award
// labels, rank numerals, anchor ids and card order are UNCHANGED, with ONE correction
// under the S68 R3 ride-along ruling: "Best for Full Rooms" on the Johnstone's 750ml tin
// misstated its own listing, which rates the paint at 3 m² per litre — about 2.25 m² per
// tin — so the label is now the neutral descriptor "Paint to Cover Damp, 750ml".
//
// THE DESCRIPTION IS REWRITTEN. It said "remediating condensation damp and mould"; no
// product here diagnoses the cause, and the listings themselves say the cause must be
// fixed first.
//
// THE FAQ IS REMOVED, BLOCK AND SCHEMA TOGETHER (Law 190). Its four questions are
// answered in the body: painting over untreated mould at #limits, the Awaab's Law
// question at #legal, the primer question at #what-decides.
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Damp-Proof Paint & Mould Treatment UK 2026",
    description:
      "Mould killer sprays, stain-blocking primers and anti-mould paints for landlords, with what the Awaab's Law guidance requires and what the listings state.",
    alternates: {
      canonical: "https://pestproindex.com/best/damp-proof-paint-mould-treatment",
    },
    openGraph: {
      title: "Best Damp-Proof Paint & Mould Treatment UK 2026",
      description:
        "Mould killer sprays, stain-blocking primers and anti-mould paints for landlords, with what the Awaab's Law guidance requires and what the listings state.",
      url: "https://pestproindex.com/best/damp-proof-paint-mould-treatment",
      type: "article",
      siteName: "PestPro Index",
    },
  };
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Damp-Proof Paint & Mould Treatment UK 2026",
  description:
    "Mould killer sprays, stain-blocking primers and anti-mould paints for landlords, with what the Awaab's Law guidance requires and what the listings state.",
  datePublished: "2026-04-07",
  dateModified: "2026-09-07",
  author: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  publisher: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://pestproindex.com/best/damp-proof-paint-mould-treatment",
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
      name: "Best Damp-Proof Paint & Mould Treatment UK 2026",
      item: "https://pestproindex.com/best/damp-proof-paint-mould-treatment",
    },
  ],
};

// SOURCES. Every quotation was extracted by byte range from a body on disk and verified
// by exact string match before it was written here (Law 164). The citation names the
// host actually fetched (Law 194): one GOV.UK body, fetched 2026-09-07 and kept at
// ~/pp-s68r3/sources/awaabs-landlords under Law 175.
const SRC = {
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
// the S45-C window. A property is asserted only where the listing's own title, detail
// table or feature text states it (S52-E, S50-H); a cell the listing does not state reads
// "not stated". Manufacturer self-praise — "effortlessly eliminates all moulds",
// "unparalleled adhesion" — is trimmed and not restated (S47-F).
const products: ProductRecord[] = [
  {
    anchorId: "hg-mould-spray",
    asin: "B000IU40HQ",
    rank: 1,
    cardName: "HG Mould Spray 500ml",
    cardLabel: "Best Overall",
    features: [
      "500ml trigger spray",
      "Listed with a bleaching effect; the listing says to test first in an inconspicuous place",
      "Listed for plastered walls, tiles, bathroom seals, grout and windows",
      "Listed for indoor or outdoor use",
      "Listing does not name the active substance",
    ],
    tableCells: ["HG Mould Spray", "500ml spray", "not stated", "Best Overall"],
    h2Label: "Best Overall",
    h2Name: "HG Mould Spray 500ml",
    tocLabel: "Best Overall",
    tocName: "HG Mould Spray 500ml",
  },
  {
    anchorId: "hg-remover",
    asin: "B01CRBEUVO",
    rank: 2,
    cardName: "HG Mould Remover Foam Spray 500ml",
    cardLabel: "Best for Porous Surfaces",
    features: [
      "500ml foam spray; the listing says the foam stays on the surface longer than a liquid",
      "Listed as containing sodium hypochlorite, with a bleaching effect",
      "Listed for plastered walls, tiles, bathroom seals, grout and windows",
      "Listed as low odour; test first in an inconspicuous place",
    ],
    tableCells: [
      "HG Mould Remover Foam",
      "500ml foam spray",
      "sodium hypochlorite",
      "Best for Porous Surfaces",
    ],
    h2Label: "Best for Porous Surfaces",
    h2Name: "HG Mould Remover Foam Spray 500ml",
    tocLabel: "Best for Porous Surfaces",
    tocName: "HG Mould Remover Foam Spray",
  },
  {
    anchorId: "hg-mould-killer",
    asin: "B0DDKX1GKY",
    rank: 3,
    cardName: "HG Mould Spray 500ml — Pack of 2",
    cardLabel: "Best Pre-Paint Preparation",
    features: [
      "Two 500ml sprays; listed at 1,000 millilitres in total",
      "Listed with a bleaching effect; test first in an inconspicuous place",
      "The listing says to check the label for surfaces it is not recommended on, naming wood and plastic",
      "Listing does not name the active substance",
    ],
    tableCells: ["HG Mould Spray x2", "2 x 500ml spray", "not stated", "Best Pre-Paint"],
    h2Label: "Best Pre-Paint Preparation",
    h2Name: "HG Mould Spray 500ml, Pack of 2",
    tocLabel: "Best Pre-Paint Preparation",
    tocName: "HG Mould Spray, Pack of 2",
  },
  {
    anchorId: "zinsser-bin",
    asin: "B00A4975FU",
    rank: 4,
    cardName: "Zinsser B-I-N Primer-Sealer & Stain Killer 1L",
    cardLabel: "Best Stain Blocker",
    features: [
      "1 litre shellac-based stain-blocking primer",
      "Coverage listed as 12.5 m² per litre",
      "Listed for interior ceilings, walls and doors, and spot priming outside",
      "Listed as blocking water, smoke and tannin stains and odours",
    ],
    tableCells: ["Zinsser B-I-N", "1 litre primer, 12.5 m²/litre", "shellac primer", "Best Stain Blocker"],
    h2Label: "Best Stain Blocker",
    h2Name: "Zinsser B-I-N Primer-Sealer & Stain Killer 1L",
    tocLabel: "Best Stain Blocker",
    tocName: "Zinsser B-I-N 1L",
  },
  {
    anchorId: "ronseal-damp-seal",
    asin: "B008W4CP04",
    rank: 5,
    cardName: "Ronseal One Coat Damp Seal 500ml",
    cardLabel: "Best Damp Sealer",
    features: [
      "500ml one-coat damp seal, white",
      "The listing says it can be applied to damp walls and painted or papered over when dry",
      "The listing's own instruction: make sure the cause of damp has been fixed first",
      "Coverage not stated on the listing",
    ],
    tableCells: ["Ronseal Damp Seal", "500ml sealer", "polyurethane, synthetic rubber", "Best Damp Sealer"],
    h2Label: "Best Damp Sealer",
    h2Name: "Ronseal One Coat Damp Seal 500ml",
    tocLabel: "Best Damp Sealer",
    tocName: "Ronseal One Coat Damp Seal",
  },
  {
    anchorId: "ronseal",
    asin: "B007UXTUT2",
    rank: 6,
    cardName: "Ronseal Anti Mould Paint 750ml — White Matt",
    cardLabel: "Best All-Rounder",
    features: [
      "750ml white matt paint",
      "Coverage listed as 13 m² per litre",
      "Listed as washable; brush listed as included",
      "The listing carries a detail table and no feature text — how it acts on mould is not stated",
    ],
    tableCells: ["Ronseal Anti Mould Paint", "750ml paint, 13 m²/litre", "not stated", "Best All-Rounder"],
    h2Label: "Best All-Rounder",
    h2Name: "Ronseal Anti Mould Paint 750ml",
    tocLabel: "Best All-Rounder",
    tocName: "Ronseal Anti Mould Paint 750ml",
  },
  {
    anchorId: "rapide",
    asin: "B07NJFLYNW",
    rank: 7,
    cardName: "Rapide Anti Mould Spray Paint 400ml",
    cardLabel: "Best for Small Areas",
    features: [
      "400ml aerosol, white",
      "The listing's only feature line: protects walls and ceilings from mould growth",
      "Coverage in square metres not stated",
      "Active substance not stated",
    ],
    tableCells: ["Rapide Spray Paint", "400ml aerosol", "not stated", "Best for Small Areas"],
    h2Label: "Best for Small Areas",
    h2Name: "Rapide Anti Mould Spray Paint 400ml",
    tocLabel: "Best for Small Areas",
    tocName: "Rapide Anti Mould Spray Paint",
  },
  {
    anchorId: "johnstones",
    asin: "B00OUULC4Y",
    rank: 8,
    cardName: "Johnstone's Paint to Cover Damp 750ml — White",
    cardLabel: "Paint to Cover Damp, 750ml",
    features: [
      "750ml white paint for plaster, brickwork, cement and stone, as listed",
      "Coverage listed as 3 m² per litre — about 2.25 m² from one tin",
      "The listing says it can be over-coated with the maker's emulsion",
      "The listing's own note: ensure the reason for the damp is fixed",
    ],
    tableCells: ["Johnstone's Cover Damp", "750ml paint, 3 m²/litre", "not stated", "Paint to Cover Damp, 750ml"],
    h2Label: "Paint to Cover Damp, 750ml",
    h2Name: "Johnstone's Paint to Cover Damp 750ml",
    tocLabel: "Paint to Cover Damp, 750ml",
    tocName: "Johnstone's Paint to Cover Damp",
  },
];

const tocItems = [
  { id: "situation", title: "Start With the Cause, Not the Tin" },
  { id: "legal", title: "What Awaab's Law Guidance Requires" },
  { id: "limits", title: "Where These Products Do Not Work" },
  { id: "what-decides", title: "What Decides the Choice" },
  ...products.map((p) => ({ id: p.anchorId, title: `${p.tocLabel} — ${p.tocName}` })),
  { id: "alternatives", title: "If Paint Is Not the Answer" },
  { id: "using", title: "Order of Work" },
  { id: "compared", title: "Products Compared" },
];

export default function BestDampProofPaintMouldTreatmentPage() {
  return (
    <GuideLayout
      title="Best Damp-Proof Paint &amp; Mould Treatment Products for Landlords (2026)"
      subtitle="Mould killer sprays, stain-blocking primers and anti-mould paints for landlords — eight compared on what their listings state, beside what the Awaab's Law guidance asks of a landlord"
      lastUpdated="September 2026"
      readingTime="8 min"
      breadcrumbParent={{ label: "Best", href: "/best" }}
      tocItems={tocItems}
      relatedGuides={[
        { title: "Landlord Pest Control Responsibilities", href: "/guides/landlord-pest-control" },
        {
          title: "Awaab's Law & Pest Control: What Landlords Need to Know",
          href: "/blog/awaabs-law-pest-control-landlords",
        },
        { title: "Pest Control Costs UK 2026", href: "/guides/pest-control-costs" },
        {
          title: "How to Get Rid of Silverfish: Complete UK Guide",
          href: "/guides/how-to-get-rid-of-silverfish",
        },
      ]}
      relatedProducts={[
        {
          title: "Best Damp & Mould Equipment for Landlords (Awaab's Law)",
          href: "/best/awaabs-law-damp-mould-equipment",
        },
        { title: "Best Commercial Dehumidifiers UK 2026", href: "/best/commercial-dehumidifiers" },
        { title: "Best Silverfish Treatments UK 2026", href: "/best/silverfish-treatments" },
      ]}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
    >
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
        Three kinds of product are on this page: sprays that clean mould off a
        surface, primers that stop a stain coming back through paint, and paints
        sold as resisting mould. None of them finds out why the wall was wet. Two
        of the listings say so themselves.
      </p>

      {/* DECISION BLOCK — situation first, product second. NOT a card: no Amazon link,
          no price, no image, no award. */}
      <div className="not-prose my-6 rounded-xl border border-slate-300 bg-slate-50 p-4">
        <p className="m-0 mb-3 text-sm font-semibold uppercase tracking-wide text-slate-600">
          Start with your situation
        </p>
        <ul className="m-0 list-none space-y-2 p-0 text-sm text-slate-800">
          <li>
            <strong>You are a social landlord with a report of damp or mould.</strong>{" "}
            The guidance sets fixed timeframes for investigation and work —{" "}
            <a href="#legal" className="underline">
              what the guidance requires
            </a>
            .
          </li>
          <li>
            <strong>You do not yet know what is causing it.</strong> Ronseal and
            Johnstone&rsquo;s both tell you to fix the cause before you open the
            tin —{" "}
            <a href="#situation" className="underline">
              start with the cause
            </a>
            .
          </li>
          <li>
            <strong>You have painted over it before and it came back.</strong>{" "}
            That is the case these products are not for —{" "}
            <a href="#limits" className="underline">
              where they do not work
            </a>
            .
          </li>
          <li>
            <strong>You need to clean an existing patch.</strong> Three HG sprays
            here, one of them a foam —{" "}
            <a href="#hg-mould-spray" className="underline">
              the 500ml spray
            </a>
            ,{" "}
            <a href="#hg-remover" className="underline">
              the foam
            </a>{" "}
            and{" "}
            <a href="#hg-mould-killer" className="underline">
              the two-pack
            </a>
            .
          </li>
          <li>
            <strong>You need to redecorate a stained but dry wall.</strong> A
            primer first —{" "}
            <a href="#zinsser-bin" className="underline">
              Zinsser B-I-N
            </a>{" "}
            or{" "}
            <a href="#ronseal-damp-seal" className="underline">
              Ronseal Damp Seal
            </a>{" "}
            — then a paint.
          </li>
        </ul>
      </div>

      <div className="not-prose">
        <Callout type="warning">
          <p>
            The HG foam is listed as containing sodium hypochlorite, and all
            three HG sprays are listed with a bleaching effect. Each listing says
            to test on an inconspicuous area first and to keep the spray off
            clothing and gloss paint.
          </p>
        </Callout>
      </div>

      {/* [0] Situation */}
      <h2 id="situation">Start With the Cause, Not the Tin</h2>
      <p>
        Two products on this page carry the instruction on their own listings.
        Ronseal&rsquo;s One Coat Damp Seal says, before you start, make sure the
        cause of damp has been fixed. Johnstone&rsquo;s Paint to Cover Damp says
        to ensure the reason for the damp is fixed. Neither product claims to do
        that for you.
      </p>
      <p>
        The government&rsquo;s guidance for social landlords puts the same point
        the other way round. Where a hazard comes from the building, the
        landlord owns the cause:{" "}
        <em>
          &ldquo;Where a hazard is caused by a structural defect or deficiency,
          such as poor design or missing components, the landlord is responsible
          for addressing the root cause under Awaab’s Law.&rdquo;
        </em>{" "}
        (
        <a href={SRC.awaabs} rel="nofollow">
          GOV.UK
        </a>
        ). A tin of paint does not discharge that.
      </p>

      {/* [1] Legal */}
      <h2 id="legal">What Awaab&rsquo;s Law Guidance Requires</h2>
      <p>
        The guidance fetched for this page is the one written for social
        landlords in England. It sets timeframes rather than products. A social
        landlord must{" "}
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
        (
        <a href={SRC.awaabs} rel="nofollow">
          GOV.UK
        </a>
        ). The guidance treats damp and mould as a hazard to health, and this
        page goes no further into that than the guidance does.
      </p>
      <p>
        It also closes off one explanation:{" "}
        <em>
          &ldquo;It is unacceptable for social landlords to assume that the
          cause of a hazard, such as damp and mould, is due to the tenant’s
          ‘lifestyle’.&rdquo;
        </em>{" "}
        Nothing on this page holds a fetched source on how or when these
        timeframes reach private tenancies, so this page does not say.
      </p>

      {/* [2] Limits */}
      <h2 id="limits">Where These Products Do Not Work</h2>
      <p>
        <strong>On a wall that is still wet.</strong> The sealer and the damp
        paint both say the cause must be fixed first. A stain blocked while the
        water is still arriving is a stain that will return through the new
        coat, because nothing about the wall has changed.
      </p>
      <p>
        <strong>As a mould killer, if the listing does not say what is in it.</strong>{" "}
        Of the three HG sprays, only the foam names its active substance.
        The two anti-mould paints and the aerosol name none at all. The
        comparison table says &ldquo;not stated&rdquo; where that is the case,
        and this page does not fill the gap.
      </p>
      <p>
        <strong>As a full-room paint, from a 750ml tin.</strong> Johnstone&rsquo;s
        listing rates its damp paint at 3 m² per litre, which is about 2.25 m²
        from the tin on this page. That covers a patch, not a room, and the
        label on its card now says only what it is.
      </p>

      {/* [3] Criteria */}
      <h2 id="what-decides">What Decides the Choice</h2>
      <h3>1. Clean, block or coat</h3>
      <p>
        The sprays remove what is on the surface. The primers stop a mark from
        coming through a new coat. The paints are the finish. They are not
        substitutes for one another, and the order of work below is the reason
        eight products sit on one page.
      </p>
      <h3>2. Whether the listing states coverage</h3>
      <p>
        Three listings give a figure: Zinsser at 12.5 m² per litre, Ronseal
        Anti Mould at 13 m² per litre, Johnstone&rsquo;s at 3 m² per litre.
        The other paints and the sealer state none. Buy by the stated figure
        and the area you have measured, not by the size of the tin.
      </p>
      <h3>3. Whether the listing names the active substance</h3>
      <p>
        One does — the HG foam, sodium hypochlorite. For a landlord recording
        what was used in a property, that is the difference between a product
        you can name on a job sheet and one you cannot.
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
                "A 500ml trigger spray listed for plastered walls, tiles, bathroom seals, grout and windows, indoors or out. The listing gives it a bleaching effect and says to test first; it does not name the active substance.",
                "The same maker's foam, and the one product here whose listing names its active substance: sodium hypochlorite. The listing says the foam stays on the surface longer than a liquid and reduces splashing, which is the reason for its label.",
                "Two of the 500ml sprays, listed at 1,000 millilitres together. The listing adds one line the single spray's does not: check the label for surfaces it is not recommended on, naming wood and plastic.",
                "A 1 litre shellac primer listed at 12.5 m² per litre and for interior ceilings, walls and doors. The listing describes it as blocking water, smoke and tannin stains and odours; it says nothing about mould, and neither does this page.",
                "A 500ml sealer the listing says can go onto damp walls and be painted or papered over when dry. Its own instruction — fix the cause of damp first — is the instruction this whole page turns on. Coverage is not stated.",
                "A 750ml white matt paint listed at 13 m² per litre and as washable, with a brush included. The listing is a detail table with no feature text, so how it acts on mould is not stated and this page does not say.",
                "A 400ml aerosol whose listing carries one feature line, that it protects walls and ceilings from mould growth. No coverage figure and no active substance are stated.",
                "A 750ml paint listed for plaster, brickwork, cement and stone at 3 m² per litre — about 2.25 m² a tin — and over-coatable with the maker's emulsion. The listing says to ensure the reason for the damp is fixed.",
              ][i]
            }
          </p>
        </div>
      ))}

      {/* Alternatives */}
      <h2 id="alternatives">If Paint Is Not the Answer</h2>
      <p>
        <strong>Find the water.</strong> Condensation, a leak and rising damp
        are different faults with different fixes, and nothing on this page
        tells them apart. Our{" "}
        <a href="/best/awaabs-law-damp-mould-equipment">damp and mould equipment</a>{" "}
        page covers meters and monitoring.
      </p>
      <p>
        <strong>Reduce the moisture in the air.</strong> Where the cause is
        condensation, a <a href="/best/commercial-dehumidifiers">dehumidifier</a>{" "}
        addresses the air rather than the paint.
      </p>
      <p>
        <strong>Get the investigation done.</strong> For a social landlord the
        guidance above fixes the timeframe, and a survey is a different job from
        a spray.
      </p>

      {/* Using them */}
      <h2 id="using">Order of Work</h2>
      <ol>
        <li>
          <strong>Fix the cause.</strong> Both the sealer and the damp paint say
          so on their listings.
        </li>
        <li>
          <strong>Clean the surface.</strong> A spray or foam, tested first on an
          inconspicuous area as each HG listing says, and kept off clothing and
          gloss paint.
        </li>
        <li>
          <strong>Let it dry.</strong> The sealer is the one product here listed
          for application to a wall that is still damp; the others are not.
        </li>
        <li>
          <strong>Prime the stain.</strong> Zinsser B-I-N or Ronseal Damp Seal,
          by the coverage figure where one is stated.
        </li>
        <li>
          <strong>Coat.</strong> Then the finish paint, again by the stated
          coverage and the area you measured.
        </li>
      </ol>

      {/* Comparison table */}
      <h2 id="compared">Products Compared</h2>
      <p>
        Every column below is what the Amazon listing itself states. Where a
        listing does not state something, the cell says so rather than guessing.
      </p>
      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left p-2 border-b font-semibold">Product</th>
              <th className="text-left p-2 border-b font-semibold">Size and coverage, as listed</th>
              <th className="text-left p-2 border-b font-semibold">Active or base, as listed</th>
              <th className="text-left p-2 border-b font-semibold">Label</th>
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

      <FindProviderCTA
        heading="Damp or mould you cannot trace?"
        subtext="Where the cause is not obvious, compare damp and pest specialists near you — no fees, no commissions."
      />
    </GuideLayout>
  );
}
