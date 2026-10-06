import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import ProductCard from "@/components/ProductCard";
import TopPicks, { ProsList } from "@/components/TopPicks";
import FindProviderCTA from "@/components/FindProviderCTA";
import Callout from "@/components/Callout";
import DecisionBox from '@/components/DecisionBox';

// S69 R2 — ROLLOUT REBUILD to the R8/R69R1 pattern, on sources. GROUP B.
//
// HEALTH STATEMENTS ON THIS PAGE: TWO, one NHS and one UC IPM, both quoted and both
// attributed. Neither is in this site's own voice. No diagnosis, no treatment
// recommendation, no symptom checklist offered as guidance; a skin question is sent to a
// pharmacist or a GP and nothing clinical is linked.
//
// G3 CLEARED. One source string, two served hits: "Professional-strength products from a
// trusted UK pest control brand". That is this site's own voice about a maker, which
// Law 153 does not excuse. Deleted rather than softened; there is no source for it.
//
// THE ROUTE SLUG AND THE PAGE SUBJECT DIVERGE, AND THAT IS REPORTED, NOT FIXED. The
// route is /best/commercial-insect-monitors; the page is about commercial bed bug
// treatment and has been since before this rebuild, carding three insecticides, a room
// kit and one monitoring product. The title and H1 describe the page accurately, so the
// standing title ruling has no false clause to replace. Changing the slug would break a
// live URL and is a PM decision, not a rebuild's.
//
// UC IPM CONTRADICTS ONE OF THE CARDED PRODUCTS AND THE PAGE SAYS SO. The rank-4 kit
// includes a fogger bomb. UC IPM states that over-the-counter total-release aerosol
// foggers have been shown to be ineffective for bed bug control and potentially harmful
// to residents. The card is kept — its label describes what is in the box accurately and
// nothing in the listing is misstated — but the source's position is quoted in the
// limits section and again on the card itself. A page that carded it silently would be
// hiding the one thing a reader most needs.
//
// AWARD LABELS, RANK NUMERALS AND CARD ORDER ARE UNCHANGED. Nothing was removed under
// the mismatch ruling: all five listings support what their cards claim.
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Commercial Bed Bug Treatment UK 2026 | Sprays & Monitors",
    description:
      "Professional-grade bed bug treatment for UK hotels, B&Bs and commercial premises. Concentrate kits, sprays, bulk treatments and monitoring traps.",
    alternates: {
      canonical: "https://pestproindex.com/best/commercial-insect-monitors",
    },
    openGraph: {
      title: "Commercial Bed Bug Treatment UK 2026 | Sprays & Monitors",
      description:
        "Professional-grade bed bug treatment for UK hotels, B&Bs and commercial premises. Concentrate kits, sprays, bulk treatments and monitoring traps.",
      url: "https://pestproindex.com/best/commercial-insect-monitors",
      type: "article",
      siteName: "PestPro Index",
    },
  };
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Commercial Bed Bug Treatment UK 2026 | Sprays & Monitors",
  description:
    "Professional-grade bed bug treatment for UK hotels, B&Bs and commercial premises. Concentrate kits, sprays, bulk treatments and monitoring traps.",
  datePublished: "2026-03-18",
  dateModified: "2026-09-09",
  author: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  publisher: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://pestproindex.com/best/commercial-insect-monitors",
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
      name: "Commercial Bed Bug Treatment UK 2026",
      item: "https://pestproindex.com/best/commercial-insect-monitors",
    },
  ],
};

// SOURCES. Every quotation was extracted by byte range from a body on disk and verified
// by exact string match before it was written here (Law 164). Each citation names the
// host actually fetched (Law 194). ipm.ucanr.edu fetched 2026-09-09, kept at
// ~/pp-s69r1/sources/ucipm-bedbugs.src.txt; www.nhs.uk fetched 2026-09-09, kept at
// ~/pp-s68r8/sources/nhs-bedbugs.src.txt. Both under Law 175.
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
  // S70 R1 (Law 195) selling layer: top-picks reason, benefit-led blurb, pros.
  // Every fact in them is one the features above already carry from the listing.
  pick: string;
  blurb: string;
  pros: string[];
};

// Records are addressed BY IDENTITY, never by position (Law 107).
//
// Feature text and comparison cells are rebuilt from the banked Amazon bodies at
// ~/pp-s61r1/uk/, inside the S45-C window. A property is asserted only where the
// listing's own text states it (S52-E); a cell the listing does not state reads
// "not stated". Four of these five listings open with a superlative about themselves —
// the most powerful, the strongest, the most cost-effective — and not one of those lines
// is restated below (S47-F).
//
// LAW 146 — TWO LISTINGS CONTRADICT THEMSELVES AND BOTH READINGS ARE RENDERED. The
// concentrate lists its item form as Aerosol and its unit count as 100 millilitres while
// its own text says it makes 10 litres. The room kit lists its item form as Aerosol and
// its unit count as 2,000 grams.
const products: ProductRecord[] = [
  {
    anchorId: "best-professional-kit",
    asin: "B098XMZM6M",
    rank: 1,
    cardName: "Pest Expert Ultimate Bed Bug Killer Spray Concentrate + 5L Pressure Sprayer",
    cardLabel: "Best Professional Treatment Kit",
    features: [
      "A concentrate, not a ready-to-use spray: the maker states it makes 10 litres",
      "The maker names three actives and gives tetramethrin at 0.9%",
      "Supplied with a 5 litre pressure sprayer, per the listing",
      "The maker states the formulation was recently approved for amateur use",
      "Its item form row reads Aerosol and its unit count row reads 100 millilitres",
    ],
    tableCells: [
      "Pest Expert Ultimate Concentrate + 5L Sprayer",
      "Concentrate + sprayer",
      "Three actives, tetramethrin 0.9% named",
      "Makes 10 L, per the maker",
      "Best Professional Treatment Kit",
    ],
    h2Label: "Best Professional Treatment Kit",
    h2Name: "Pest Expert Ultimate Concentrate + 5L Sprayer",
    tocLabel: "Best Professional Treatment Kit",
    tocName: "Pest Expert Ultimate Concentrate",
    pick: "Best for several rooms: a concentrate the maker says makes 10 litres, with a 5L sprayer.",
    blurb: "This suits a hotel, hostel or landlord with several rooms to treat. The maker states the concentrate makes ten litres of spray, and a 5 litre pressure sprayer comes in the box. Three actives are stated, with tetramethrin given at 0.9%, so follow the label's dilution exactly.",
    pros: ["Makes 10 litres, per the maker", "5 litre pressure sprayer included", "Tetramethrin 0.9% named among three actives", "Approved for amateur use, per the maker"],
  },
  {
    anchorId: "best-professional-spray",
    asin: "B076KQQT8F",
    rank: 2,
    cardName: "Pest Expert Bed Bug Killer Spray 2 x 1L Formula 'C+'",
    cardLabel: "Best Professional Spray",
    features: [
      "Two 1 litre bottles, ready to use; unit count row reads 2,000 millilitres",
      "The maker states three actives including an insect growth regulator",
      "The maker states coverage of 50 square metres in a single application",
      "Listed as water-based, non-staining and low-odour, for bed frames and mattresses",
      "No active substance is named in the listing's detail rows",
    ],
    tableCells: [
      "Pest Expert Formula 'C+' 2 x 1L",
      "Ready-to-use spray",
      "Three actives incl. an IGR, per the maker; none named in the rows",
      "2 L; 50 m² per application, per the maker",
      "Best Professional Spray",
    ],
    h2Label: "Best Professional Spray",
    h2Name: "Pest Expert Formula 'C+' 2 x 1L",
    tocLabel: "Best Professional Spray",
    tocName: "Pest Expert Formula C+ 2 x 1L",
    pick: "Best if you want to start today: two 1 litre bottles, ready to use with nothing to dilute.",
    blurb: "Pick this when you want to start straight away, with nothing to dilute and no sprayer to set up. You get two 1 litre bottles, and the maker states three actives including an insect growth regulator, with 50 square metres covered in a single application. The listing's detail rows name no active, so check the label for them.",
    pros: ["Ready to use: two 1 litre bottles", "Three actives including an insect growth regulator, per the maker", "50 square metres per application, per the maker", "Water-based, non-staining and low-odour, as listed"],
  },
  {
    anchorId: "best-bulk",
    asin: "B0973D1DB8",
    rank: 3,
    cardName: "NOPE! CP Bed Bug Killer Spray 5L + Pressure Sprayer",
    cardLabel: "Best Bulk Treatment",
    features: [
      "5 litres with a pressure sprayer, as listed",
      "Actives row names cypermethrin and tetramethrin; the maker gives cypermethrin at 0.1% w/w",
      "The maker states residual action continuing for up to 3 months",
      "The maker describes it as HSE registered and approved for household environments",
      "Listed as solvent-free, water-based, odourless and non-staining",
    ],
    tableCells: [
      "NOPE! CP 5L + Sprayer",
      "Ready-to-use spray in bulk",
      "Cypermethrin and tetramethrin, named in the rows",
      "5 L; up to 3 months residual, per the maker",
      "Best Bulk Treatment",
    ],
    h2Label: "Best Bulk Treatment",
    h2Name: "NOPE! CP Bed Bug Killer 5L + Sprayer",
    tocLabel: "Best Bulk Treatment",
    tocName: "NOPE! CP 5L + Sprayer",
    pick: "Best for volume: five litres with a pressure sprayer, cypermethrin and tetramethrin named.",
    blurb: "This is for a premises that needs volume. Five litres of ready-to-use spray arrive with a pressure sprayer, and the detail rows name cypermethrin and tetramethrin, with cypermethrin given at 0.1% w/w. The maker states residual action for up to three months, and it is listed as solvent-free, water-based, odourless and non-staining.",
    pros: ["5 litres ready to use, with a pressure sprayer", "Cypermethrin and tetramethrin named in the listing", "Up to 3 months residual action, per the maker", "Water-based, odourless and non-staining, as listed"],
  },
  {
    anchorId: "best-room-kit",
    asin: "B01E724WFK",
    rank: 4,
    cardName: "Pest Expert Bed Bug Treatment Kit (Standard)",
    cardLabel: "Best Complete Room Kit",
    features: [
      "Three items in the box: 1 litre of Formula 'C+', 300g of powder and a fogger bomb",
      "READ THE LIMITS SECTION: UC IPM does not recommend total-release aerosol foggers for bed bugs",
      "The maker states the kit provides a treatment in one room",
      "The maker states a residue that continues to protect for up to 12 weeks",
      "Its item form row reads Aerosol and its unit count row reads 2,000 grams",
    ],
    tableCells: [
      "Pest Expert Bed Bug Treatment Kit (Standard)",
      "Spray + powder + fogger bomb",
      "not stated",
      "One room, per the maker; up to 12 weeks residue",
      "Best Complete Room Kit",
    ],
    h2Label: "Best Complete Room Kit",
    h2Name: "Pest Expert Bed Bug Treatment Kit (Standard)",
    tocLabel: "Best Complete Room Kit",
    tocName: "Pest Expert Treatment Kit (Standard)",
    pick: "Best for one room in one order: spray, powder and a fogger bomb in a single box.",
    blurb: "This suits you if you want everything for one room in a single order. The box holds a litre of Formula 'C+' spray, 300g of powder and a fogger bomb, and the maker states a residue that continues for up to twelve weeks. UC IPM does not recommend over-the-counter total-release foggers for bed bugs, so read the limits section before you use that part.",
    pros: ["Spray, powder and fogger in one box", "1 litre of Formula 'C+' and 300g of powder", "Up to 12 weeks residue, per the maker"],
  },
  {
    anchorId: "best-monitoring",
    asin: "B07MG8BD7X",
    rank: 5,
    cardName: "Bed Bug Blocker (Pro) Interceptor Traps 8-Pack",
    cardLabel: "Best Monitoring Add-On",
    features: [
      "The only item here that carries no insecticide at all",
      "Eight cups for under bed and furniture legs; target species row reads Bed Bug",
      "The maker describes bed bugs climbing the textured exterior and being unable to escape",
      "The maker states eight traps cover two beds or other pieces of furniture",
      "Listed for hotels, hostels, dormitories, hospitals and nursing homes",
    ],
    tableCells: [
      "Bed Bug Blocker (Pro) Interceptor Traps",
      "Under-leg detection traps",
      "None — no chemicals or pesticides, per the listing",
      "8 traps, stated as covering two beds",
      "Best Monitoring Add-On",
    ],
    h2Label: "Best Monitoring Add-On",
    h2Name: "Bed Bug Blocker (Pro) Interceptor Traps",
    tocLabel: "Best Monitoring Add-On",
    tocName: "Bed Bug Blocker Interceptors",
    pick: "Best for checking results: eight insecticide-free cups for under bed and furniture legs.",
    blurb: "Add these to any treatment above to find out whether bed bugs remain. The eight cups sit under bed and furniture legs, and the maker describes bed bugs climbing the textured outside and being unable to escape. The listing states no chemicals or pesticides and says eight traps cover two beds or other pieces of furniture.",
    pros: ["No chemicals or pesticides, per the listing", "8 traps, stated as covering two beds", "Sit under bed and furniture legs", "Listed for hotels, hostels and dormitories"],
  },
];

const faqs = [
  {
    q: "Will these clear an infestation on their own?",
    a: "UC IPM says insecticide applications alone will not control bed bug infestations, and that they must be combined with removing and cleaning infested beds and bedding, non-chemical tactics such as steam or heat, and ongoing detection. Four of the five products here are insecticides. The fifth tells you whether they are working.",
  },
  {
    q: "Why does one of the kits contain something the source advises against?",
    a: "Because it does, and hiding that would be worse than carding it. The rank-4 kit includes a fogger bomb. UC IPM writes that using over-the-counter total-release aerosol foggers has been shown to be ineffective for bed bug control and potentially harmful to residents, and that they are therefore not recommended. The kit is listed accurately by its maker; the source's position is on the card and in the limits section so a reader meets it before buying.",
  },
  {
    q: "Are these the same products a professional would use?",
    a: "UC IPM says the most effective bed bug pesticides are available to commercial pesticide applicators only, and that professionals also have the equipment and expertise for a more precise application. Two of these listings state they were approved for amateur use, which is the maker telling you the same thing from the other direction.",
  },
  {
    q: "What do the interceptor traps actually do?",
    a: "They tell you where you are. UC IPM describes commercially available double-cupped monitors installed under bed legs as a temporary exclusion measure, and separately says several kinds of bed bug detection traps are available to help determine if there is an infestation. On a commercial site with many rooms, that is how you find out whether a treatment worked without stripping every bed again.",
  },
  {
    q: "What should a hotel or landlord do first?",
    a: "The NHS says that if you think you have bedbugs you should contact your local council or pest control service, and that it is very difficult to get rid of bedbugs yourself because they can be hard to find and may be resistant to some insecticides. Nothing on this page displaces that, and on a commercial premises the reputational cost of a half-treatment is usually larger than the cost of the treatment.",
  },
  {
    q: "Are bed bug bites a health risk to guests or tenants?",
    a: "The NHS says bedbug bites can be itchy but do not usually cause other health problems, and UC IPM says bed bugs are not known to spread diseases although scratching bites can lead to infections. Anyone worried about their own skin should be pointed to a pharmacist or a GP rather than to a product page.",
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

const SAFETY_NOTE = (
  <>
    Four of these are insecticides: use each one only as its label directs.{" "}
    <a href="#legal" className="underline">
      What the label governs
    </a>
    .
  </>
);

const tocItems = [
  { id: "compared", title: "The Five Compared" },
  ...products.map((p) => ({ id: p.anchorId, title: `${p.tocLabel} — ${p.tocName}` })),
  { id: "situation", title: "What UC IPM Says a Treatment Has to Include" },
  { id: "health", title: "What the NHS and UC IPM Say About the Bites" },
  { id: "legal", title: "What the Label Governs" },
  { id: "limits", title: "Where These Products Do Not Work" },
  { id: "what-decides", title: "What Decides the Choice" },
  { id: "alternatives", title: "If a Spray Is Not the Answer" },
  { id: "using", title: "Use and Placement" },
];

export default function CommercialBedBugTreatmentPage() {
  return (
    <GuideLayout
      title="Best Commercial Bed Bug Treatment UK 2026: Professional Sprays, Kits &amp; Monitors"
      subtitle="Bed bug sprays, a room kit and interceptor traps for hotels, hostels and landlords with several rooms to treat."
      lastUpdated="September 2026"
      readingTime="9 min"
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
        { title: "Best Professional Mattress Encasements UK 2026", href: "/best/professional-mattress-encasements" },
        { title: "Best Professional Bed Bug Steamers UK 2026", href: "/best/professional-bed-bug-steamers" },
      ]}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      topPicks={
        <TopPicks
          note={SAFETY_NOTE}
          picks={products.slice(0, 3).map((p) => ({
            label: p.cardLabel,
            name: p.cardName,
            reason: p.pick,
            asin: p.asin,
            anchorId: p.anchorId,
          }))}
        />
      }
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
        These picks suit hotels, hostels and landlords dealing with bed bugs in
        more than one room. The Pest Expert concentrate comes with a 5 litre
        pressure sprayer and, the maker says, makes 10 litres. Formula
        &lsquo;C+&rsquo; is ready to use straight away, and the NOPE! CP 5L is
        the bulk option. Put the interceptor traps under bed legs to check
        whether bed bugs remain.
      </p>

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
            <tr className="bg-[var(--color-paper-sunk)]">
              <th className="text-left p-2 border-b font-semibold">Product</th>
              <th className="text-left p-2 border-b font-semibold">What is in the box</th>
              <th className="text-left p-2 border-b font-semibold">Actives, as listed</th>
              <th className="text-left p-2 border-b font-semibold">Quantity or coverage, as listed</th>
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
      <p>
        UC IPM does not recommend over-the-counter total-release foggers for bed
        bugs, and the room kit at rank 4 includes one (
        <a href={SRC.ucipm} rel="nofollow">
          UC IPM
        </a>
        ).
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
          <p>{p.blurb}</p>
          <ProsList pros={p.pros} />
        </div>
      ))}

      {/* DECISION BLOCK — situation first, product second. The legal line and the
          does-not-work line sit ABOVE every product line. NOT a card: no Amazon link,
          no price, no image, no award. */}
      <DecisionBox>
          <li>
            <strong>A guest or tenant has reported bites.</strong>{" "}
            <a href="#limits" className="underline">
              What the NHS and UC IPM say to do
            </a>{" "}
            comes before any purchase.
          </li>
          <li>
            <strong>Every one of these is an insecticide but one.</strong>{" "}
            <a href="#legal" className="underline">
              The label governs
            </a>{" "}
            where each may be applied and at what rate.
          </li>
          <li>
            <strong>You are treating several rooms.</strong>{" "}
            <a href="#best-professional-kit" className="underline">
              The concentrate
            </a>{" "}
            makes ten litres;{" "}
            <a href="#best-bulk" className="underline">
              the 5 litre
            </a>{" "}
            arrives ready to use.
          </li>
          <li>
            <strong>You are treating one room and want it in a box.</strong>{" "}
            <a href="#best-room-kit" className="underline">
              The three-part kit
            </a>{" "}
            — read what UC IPM says about the fogger in it first.
          </li>
          <li>
            <strong>You need to know whether it worked.</strong>{" "}
            <a href="#best-monitoring" className="underline">
              The interceptor traps
            </a>{" "}
            are the only item here that answers that.
          </li>
        </DecisionBox>

      <div className="not-prose">
        <Callout type="warning">
          <p>
            Four of the five products here are insecticides. Where each may be
            applied, at what rate and with what ventilation is set by its own
            label, and one of them contains a fumigation device with separate
            instructions about leaving and re-entering the room.
          </p>
        </Callout>
      </div>

      {/* [0] Situation */}
      <h2 id="situation">What UC IPM Says a Treatment Has to Include</h2>
      <p>
        The University of California&rsquo;s Statewide IPM Program starts from
        the limit rather than the product:{" "}
        <em>&ldquo;Insecticide applications alone won&rsquo;t control bed bug infestations.&rdquo;</em>{" "}
        (
        <a href={SRC.ucipm} rel="nofollow">
          UC IPM
        </a>
        ). It goes on to require insecticides be combined with removing and
        cleaning infested beds and bedding, with non-chemical tactics such as
        steam or heat, and with ongoing detection.
      </p>
      <p>
        It is also candid about what is on sale:{" "}
        <em>&ldquo;The most effective bed bug pesticides are available to commercial pesticide applicators only.&rdquo;</em>{" "}
        Two of the listings below tell you the same thing from the other side,
        by stating that their formulation was approved for amateur use.
      </p>
      <p>
        And on the fifth product here:{" "}
        <em>&ldquo;Several kinds of bed bug detection traps are available to help determine if there is an infestation.&rdquo;</em>{" "}
        On a premises with many rooms that is not an add-on, it is how you find
        out whether any of the rest worked.
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
        UC IPM, with the qualification it attaches:{" "}
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
        That is the whole of what this page says about health, and there is no
        symptom list here to check a guest or a tenant against. Anyone worried
        about their own skin should be pointed to a pharmacist or a GP.
      </p>

      {/* [2] Legal */}
      <h2 id="legal">What the Label Governs</h2>
      <p>
        Four of these five are insecticides, and each is sold with a label
        stating where it may be applied, at what rate, at what dilution, and
        what must be kept away from it. One is a concentrate, which means the
        dilution instruction on its label is load-bearing rather than advisory.
      </p>
      <p>
        One kit includes a fumigation device. That device carries its own
        separate instructions about vacating and re-entering a room, and on a
        commercial premises those instructions govern who may be in the building
        and when.
      </p>
      <p>
        One listing describes itself as HSE registered and approved for use in
        household environments by the Health and Safety Executive. That is the
        maker&rsquo;s description of its own product; what any such registration
        covers is set out in the registration and on the label, not here.
      </p>

      {/* [3] Limits */}
      <h2 id="limits">Where These Products Do Not Work</h2>
      <p>
        <strong>The fogger, according to the source.</strong> UC IPM:{" "}
        <em>
          &ldquo;Using over-the-counter total-release aerosol foggers has been
          shown to be ineffective for bed bug control and potentially harmful to
          residents; therefore, they aren&rsquo;t recommended.&rdquo;
        </em>{" "}
        (
        <a href={SRC.ucipm} rel="nofollow">
          UC IPM
        </a>
        ). The rank-4 kit on this page contains one. Its maker lists it
        accurately and this page cards it accurately; a reader who buys that kit
        should know what the source says about one of the three items in it.
      </p>
      <p>
        <strong>As the whole treatment.</strong> The same source&rsquo;s first
        sentence on insecticides is that applications alone will not control an
        infestation. Cleaning, laundering, heat and monitoring are all outside
        the box.
      </p>
      <p>
        <strong>Against a population you have not found.</strong> The NHS says
        it is{" "}
        <em>
          &ldquo;very difficult to get rid of bedbugs yourself because they can
          be hard to find and may be resistant to some insecticides.&rdquo;
        </em>{" "}
        (
        <a href={SRC.nhs} rel="nofollow">
          NHS
        </a>
        ). Its instruction is:{" "}
        <em>
          &ldquo;If you think you have bedbugs, you should contact your local
          council or pest control service.&rdquo;
        </em>
      </p>
      <p>
        <strong>On the mattress itself.</strong> UC IPM notes that pesticides
        are not generally applied to mattresses or bedding because of potential
        risk to people. That is the gap a zipped cover fills, and none of these
        five is one.
      </p>

      {/* [4] Criteria */}
      <h2 id="what-decides">What Decides the Choice</h2>
      <h3>1. Concentrate or ready to use</h3>
      <p>
        One product here is a concentrate its maker states makes ten litres; two
        arrive ready to use at two and five litres. For a premises with several
        rooms the concentrate is the cheaper litre and the greater chance of a
        dilution error. The label decides, not the listing.
      </p>
      <h3>2. Whether the listing names an active substance</h3>
      <p>
        Only two of the four insecticides do. The 5 litre names cypermethrin and
        tetramethrin in its detail rows; the concentrate names tetramethrin at
        0.9% in its text. The 2 x 1 litre describes three actives including a
        growth regulator without naming them, and the room kit names none. The
        comparison table says so rather than guessing.
      </p>
      <h3>3. Whether anything here tells you it worked</h3>
      <p>
        One item does. UC IPM puts detection in its own paragraph precisely
        because a treatment you cannot measure is a treatment you will repeat
        blind.
      </p>


      {/* Alternatives */}
      <h2 id="alternatives">If a Spray Is Not the Answer</h2>
      <p>
        <strong>Steam and heat.</strong> UC IPM names steam and heat treatment
        among the non-chemical methods a treatment has to include. Our{" "}
        <a href="/best/professional-bed-bug-steamers">
          professional bed bug steamers
        </a>{" "}
        page covers that class, with the source&rsquo;s penetration caveat
        attached.
      </p>
      <p>
        <strong>A barrier on the mattress.</strong> Our{" "}
        <a href="/best/professional-mattress-encasements">
          professional mattress encasements
        </a>{" "}
        page covers the zipped covers, which is where a pesticide is not meant
        to go.
      </p>
      <p>
        <strong>Laundering and hot drying.</strong> The NHS names a 60C wash and
        at least 30 minutes in a hot tumble dryer. On a commercial premises that
        is a linen process, not a purchase.
      </p>
      <p>
        <strong>A professional.</strong> UC IPM says the most effective
        pesticides are available to commercial applicators only. Our{" "}
        <a href="/guides/how-to-get-rid-of-bed-bugs">bed bug guide</a> sets out
        what engaging one involves.
      </p>

      {/* Use and placement */}
      <h2 id="using">Use and Placement</h2>
      <ol>
        <li>
          <strong>Find them before you treat.</strong> Put the interceptors
          under the legs first; a treatment you cannot measure is one you will
          repeat blind.
        </li>
        <li>
          <strong>Strip and launder.</strong> The NHS&rsquo;s 60C wash and hot
          tumble dry come before any spray, not instead of it.
        </li>
        <li>
          <strong>Treat frames, seams and joints.</strong> Every spray listing
          here describes bed frames and mattresses rather than open floor.
        </li>
        <li>
          <strong>Dilute by the label, not by the listing.</strong> The
          concentrate is the one product where getting this wrong changes what
          you have applied.
        </li>
        <li>
          <strong>Follow the fumigation device&rsquo;s own instructions.</strong>{" "}
          One kit contains one, and on a commercial premises that governs who
          may be in the building.
        </li>
        <li>
          <strong>Check the traps again afterwards.</strong> That is the only
          measurement on this page.
        </li>
      </ol>


      {/* FAQ — rendered from the same array the schema above is derived from */}
      <h2 id="faq">Frequently Asked Questions</h2>
      {faqs.map((f) => (
        <div key={f.q}>
          <h3>{f.q}</h3>
          <p>{f.a}</p>
        </div>
      ))}

      <FindProviderCTA
        heading="Bed bugs on a commercial premises are the pest the NHS says to get help with"
        subtext="Compare pest control providers near you — no fees, no commissions."
      />
    </GuideLayout>
  );
}
