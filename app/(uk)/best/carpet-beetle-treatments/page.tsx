import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import ProductCard from "@/components/ProductCard";
import FindProviderCTA from "@/components/FindProviderCTA";
import Callout from "@/components/Callout";

// S69 R1 — ROLLOUT REBUILD to the R8 pattern, on sources. GROUP B.
//
// HEALTH STATEMENTS ON THIS PAGE: FOUR, all quoted from Penn State Extension's article
// "Carpet Beetle Dermatitis", and none in this site's own voice. No diagnosis, no
// treatment recommendation, and no symptom checklist offered as guidance — the symptom
// wording that appears is inside a quotation describing what dermatologists reported,
// and the page says immediately that a skin question belongs with a pharmacist or a GP
// and links nothing clinical.
//
// A CARD WAS REMOVED UNDER THE S67 R10 MISMATCH RULING. B09F31QSQB, "Cedarwood Moth
// Repellent for Wardrobes (28 Pieces)", carried the award "Best Natural Prevention" on a
// carpet beetle route. Its banked listing body — 716,153 characters — contains the
// string "beetle" ZERO times, in any case. It is a clothes-moth product and it is off
// this route. It appeared nowhere else on the estate: not in data/pest-products.ts, not
// on /products, not on any other /best route. Rank numerals 1, 2 and 3 on the surviving
// records are unchanged and the card order is unchanged.
//
// UC IPM INDEPENDENTLY UNDERMINES THE CLAIM THAT CARD MADE. Its Pest Note says the
// effectiveness of cedar chests and closet floors made of cedar is debatable; that
// quotation is on the page, in the alternatives section, where a reader who came looking
// for the cedar option will meet it.
//
// LAW 188 — TWO CARD LABELS DISAGREED WITH THEIR OWN h2 AND THE h2 WINS. cardLabel
// "Best Spray Treatment" -> "Best Spray" and "Best Monitoring Trap" -> "Best Trap".
// After the correction the three labels are Best Spray, Best Trap, Best Powder: no
// duplicate award on the route, measured on both label surfaces.
//
// S52-E — "Rentokil Pheromone Trap" IS WITHDRAWN AS A NAME. The word "pheromone" does
// not occur in that listing's own text at all; the four occurrences in its banked body
// are in sponsored carousels for other products. The trap is named from its own title.
//
// TITLE AND H1: the H1's claim clause read "Killer Products", and the title's read
// "Sprays & Traps" while a powder is carded. Both now name what the page cards. Head
// keyword kept byte-identical.
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Carpet Beetle Treatments UK 2026 — Sprays, Traps & Powder",
    description:
      "Carpet beetle treatments compared on their own listings: a spray, a pheromone trap and a powder, with UC IPM and Penn State on the pest.",
    alternates: {
      canonical: "https://pestproindex.com/best/carpet-beetle-treatments",
    },
    openGraph: {
      title: "Best Carpet Beetle Treatments UK 2026 — Sprays, Traps & Powder",
      description:
        "Carpet beetle treatments compared on their own listings: a spray, a pheromone trap and a powder, with UC IPM and Penn State on the pest.",
      url: "https://pestproindex.com/best/carpet-beetle-treatments",
      type: "article",
      siteName: "PestPro Index",
    },
  };
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Carpet Beetle Treatments UK 2026 — Sprays, Traps & Powder",
  description:
    "Carpet beetle treatments compared on their own listings: a spray, a pheromone trap and a powder, with UC IPM and Penn State on the pest.",
  datePublished: "2026-03-18",
  dateModified: "2026-09-09",
  author: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  publisher: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://pestproindex.com/best/carpet-beetle-treatments",
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
      name: "Best Carpet Beetle Treatments UK 2026",
      item: "https://pestproindex.com/best/carpet-beetle-treatments",
    },
  ],
};

// SOURCES. Every quotation was extracted by byte range from a body on disk and verified
// by exact string match before it was written here (Law 164). Each citation names the
// host actually fetched (Law 194). Both bodies were fetched 2026-09-09 and are kept
// under Law 175 at ~/pp-s69r1/sources/ as ucipm-carpet-beetles.src.txt and
// psu-carpet-beetle-dermatitis.src.txt.
//
// UC IPM IS A CALIFORNIAN SOURCE. Its three-species list is Californian and none of it
// is restated here as a UK fact (Law 135). What is quoted is its account of control
// method and of cedar, which is a statement about the method rather than about a place.
const SRC = {
  ucipm: "https://ipm.ucanr.edu/PMG/PESTNOTES/pn7436.html",
  psu: "https://extension.psu.edu/carpet-beetle-dermatitis",
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

// Records are addressed BY IDENTITY, never by position (Law 107). This is what made the
// removal above a one-record edit rather than a renumbering.
//
// Feature text and comparison cells are rebuilt from the banked Amazon bodies at
// ~/pp-s61r1/uk/, inside the S45-C window. A property is asserted only where the
// listing's own text states it (S52-E); a cell the listing does not state reads
// "not stated". Maker self-praise is trimmed and never restated (S47-F): the powder's
// listing calls itself the strongest on the market and that line appears nowhere below.
//
// LAW 146 — THE TRAP'S LISTING CONTRADICTS ITSELF THREE TIMES and all three readings are
// rendered rather than resolved: its title says Carpet Beetle & Cloth Moth Trap, its
// target species row says Mouse, its style row says Moth Killer Kit, and its
// "Is electric" row says Yes.
const products: ProductRecord[] = [
  {
    anchorId: "best-spray",
    asin: "B06Y19DMBG",
    rank: 1,
    cardName: "Zero In Carpet Beetle & Moth Killer Spray 300ml",
    cardLabel: "Best Spray",
    features: [
      "A 300ml aerosol; item form listed as Spray, item weight 0.22 kg",
      "The maker states up to three months of protection per application",
      "Listed for carpets, upholstery and household items",
      "The maker describes it as odour-free on treated fabrics",
      "No active substance is named anywhere in the listing",
    ],
    tableCells: [
      "Zero In Carpet Beetle & Moth Killer Spray 300ml",
      "Aerosol surface spray",
      "not stated",
      "300 ml; up to 3 months, per the maker",
    ],
    h2Label: "Best Spray",
    h2Name: "Zero In Carpet Beetle & Moth Killer",
    tocLabel: "Best Spray",
    tocName: "Zero In Carpet Beetle & Moth Killer",
  },
  {
    anchorId: "best-trap",
    asin: "B097C28LVM",
    rank: 2,
    cardName: "Rentokil Carpet Beetle & Cloth Moth Trap (2 Traps)",
    cardLabel: "Best Trap",
    features: [
      "Two traps per pack, as the listing title states",
      "Described in its own title as poison free",
      "The listing carries no feature bullets and no product description at all",
      "Its target species row reads Mouse, which its title contradicts",
      "Its style row reads Moth Killer Kit and its Is electric row reads Yes",
    ],
    tableCells: [
      "Rentokil Carpet Beetle & Cloth Moth Trap (2 Traps)",
      "Trap, poison free per the title",
      "None — poison free, per the listing",
      "Two traps; no duration stated",
    ],
    h2Label: "Best Trap",
    h2Name: "Rentokil Carpet Beetle & Cloth Moth Trap",
    tocLabel: "Best Trap",
    tocName: "Rentokil Carpet Beetle & Moth Trap",
  },
  {
    anchorId: "best-powder",
    asin: "B011UTS3VW",
    rank: 3,
    cardName: "Pest Expert Formula 'P' Carpet Beetle Killer Powder 2 x 300g",
    cardLabel: "Best Powder",
    features: [
      "Two 300 gram puffer packs, listed at 600 grams in total",
      "The maker names permethrin as the active",
      "The maker's own title describes it as HSE approved and tested",
      "Listed for any surface, furniture and carpets, and for use around power points",
      "Target species row reads Insects rather than Carpet Beetle",
    ],
    tableCells: [
      "Pest Expert Formula 'P' Carpet Beetle Killer Powder 2 x 300g",
      "Insecticidal dust",
      "Permethrin, named by the maker",
      "600 g in two puffer packs, as listed",
    ],
    h2Label: "Best Powder",
    h2Name: "Pest Expert Formula 'P' Carpet Beetle Killer Powder",
    tocLabel: "Best Powder",
    tocName: "Pest Expert Formula 'P'",
  },
];

const faqs = [
  {
    q: "Can carpet beetles hurt you?",
    a: "Penn State Extension's article on carpet beetle dermatitis reports that dermatologists have described an apparent allergic reaction to the larval hairs, and that it appears to affect only people with years of exposure. It is not this page's place to say whether that is what is happening to you. If your skin is the reason you are reading this, a pharmacist or a GP is the right place to take it.",
  },
  {
    q: "Is there a cedar option?",
    a: "There was a cedarwood product on this page and it has been removed, for two independent reasons. Its own listing is a clothes moth product and does not contain the word beetle anywhere. And UC IPM writes that the effectiveness of cedar chests and closet floors made of cedar is debatable, noting that some cedar contains an oil that does not affect large larvae but can kill small ones, and that cedar loses this oil as it ages.",
  },
  {
    q: "Do I actually need an insecticide?",
    a: "UC IPM says not necessarily: successful control depends on a combination of sanitation and exclusion, and if exclusion and sanitation are successful, insecticide treatments are not required. It also says a few adult beetles indoors should not be cause for alarm, and that management only needs to occur if you find larvae developing in fabrics or other areas in your home.",
  },
  {
    q: "Why is this so hard to clear?",
    a: "UC IPM's own answer: carpet beetles are among the most difficult indoor pests to control because they can find food in obscure places and disperse widely throughout a building. Nothing on this page changes that, and a product page that implied otherwise would be misleading you.",
  },
  {
    q: "How do I tell carpet beetles from moths?",
    a: "UC IPM says it is not always possible to tell from the damage, but that in general carpet beetles are more likely to damage a large area on one portion of a garment or carpet while moth damage more often appears as scattered holes. It adds that carpet beetle larvae leave brown, shell-like, bristly-looking cast skins when they molt, and that these skins and a lack of webbing are usually good clues.",
  },
  {
    q: "Does the trap work for any species?",
    a: "Not by itself. UC IPM writes that pheromone traps are species-specific, so it is important to use one that attracts the species causing your problems. The trap carded here does not state a pheromone or a species in its own text — its title names carpet beetles and cloth moths, and its detail rows say something different again.",
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
  { id: "situation", title: "What the Larvae Are Eating" },
  { id: "health", title: "What Penn State Extension Reports About the Hairs" },
  { id: "legal", title: "What the Label Governs" },
  { id: "limits", title: "Where a Treatment Does Not Work" },
  { id: "what-decides", title: "What Decides the Choice" },
  ...products.map((p) => ({ id: p.anchorId, title: `${p.tocLabel} — ${p.tocName}` })),
  { id: "alternatives", title: "If a Product Is Not the Answer" },
  { id: "using", title: "Using Them" },
  { id: "compared", title: "The Three Compared" },
  { id: "faq", title: "Frequently Asked Questions" },
];

export default function BestCarpetBeetleTreatmentsPage() {
  return (
    <GuideLayout
      title="Best Carpet Beetle Treatments UK 2026 &mdash; Sprays, Traps &amp; Powder"
      subtitle="An aerosol spray, a two-trap pack and a permethrin powder, described by what their own listings state — beside what the University of California and Penn State Extension say about the pest and about its larval hairs"
      lastUpdated="September 2026"
      readingTime="8 min"
      breadcrumbParent={{ label: "Best", href: "/best" }}
      tocItems={tocItems}
      relatedGuides={[
        { title: "Carpet Beetle Control", href: "/guides/carpet-beetle-control" },
        { title: "Pest Control Costs UK 2026", href: "/guides/pest-control-costs" },
        { title: "Landlord Pest Control Responsibilities", href: "/guides/landlord-pest-control" },
      ]}
      relatedProducts={[
        { title: "Best Moth Killers UK 2026", href: "/best/moth-killers" },
        { title: "Best Moth Traps UK 2026", href: "/best/moth-traps" },
        { title: "Best Silverfish Treatments UK 2026", href: "/best/silverfish-treatments" },
        { title: "Best Woodworm Treatments UK 2026", href: "/best/woodworm-treatments" },
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
        Three products: an aerosol, a two-trap pack and a permethrin dust. A
        fourth used to sit here and has been removed, because its own listing
        was for clothes moths and never mentioned a beetle at all.
      </p>

      {/* DECISION BLOCK — situation first, product second. NOT a card: no Amazon link,
          no price, no image, no award. */}
      <div className="not-prose my-6 rounded-xl border border-slate-300 bg-slate-50 p-4">
        <p className="m-0 mb-3 text-sm font-semibold uppercase tracking-wide text-slate-600">
          Start with your situation
        </p>
        <ul className="m-0 list-none space-y-2 p-0 text-sm text-slate-800">
          <li>
            <strong>You have found beetles at a window and nothing else.</strong>{" "}
            <a href="#limits" className="underline">
              UC IPM says that is not the trigger for treatment
            </a>
            .
          </li>
          <li>
            <strong>You have found larvae or cast skins in a carpet.</strong>{" "}
            <a href="#best-spray" className="underline">
              The aerosol
            </a>{" "}
            is listed for carpets and upholstery.
          </li>
          <li>
            <strong>You want to know where they are before you treat.</strong>{" "}
            <a href="#best-trap" className="underline">
              The two-trap pack
            </a>{" "}
            is the monitoring option, with the caveat below.
          </li>
          <li>
            <strong>They are under a skirting or in a wall void.</strong>{" "}
            <a href="#best-powder" className="underline">
              The puffer powder
            </a>{" "}
            is listed for exactly that.
          </li>
          <li>
            <strong>Your skin is the reason you are here.</strong>{" "}
            <a href="#health" className="underline">
              What Penn State Extension reports
            </a>
            , and then a pharmacist or a GP.
          </li>
        </ul>
      </div>

      <div className="not-prose">
        <Callout type="warning">
          <p>
            Two of the three products here are insecticides. Where each may be
            applied, at what rate and with what precautions is set by its own
            label, and that label governs over anything on this page.
          </p>
        </Callout>
      </div>

      {/* [0] Situation */}
      <h2 id="situation">What the Larvae Are Eating</h2>
      <p>
        The adults are not the problem. The University of California&rsquo;s
        Statewide IPM Program is direct about how hard the larvae are to reach:{" "}
        <em>
          &ldquo;Carpet beetles are among the most difficult indoor pests to
          control because they can find food in obscure places and disperse
          widely throughout a building.&rdquo;
        </em>{" "}
        (
        <a href={SRC.ucipm} rel="nofollow">
          UC IPM
        </a>
        ).
      </p>
      <p>
        Its remedy is not a bottle first:{" "}
        <em>
          &ldquo;Successful control depends on a combination of sanitation and
          exclusion. If exclusion and sanitation are successful, insecticide
          treatments are not required.&rdquo;
        </em>{" "}
        Two of the three products below are insecticides, and this is the
        sentence a reader should have before either.
      </p>

      {/* [1] Health — attributed, quoted, no diagnosis, no treatment advice */}
      <h2 id="health">What Penn State Extension Reports About the Hairs</h2>
      <p>
        People arrive at this page because their skin is itching, so here is
        what a named source says, quoted, with nothing added. Penn State
        Extension&rsquo;s article on carpet beetle dermatitis reports:{" "}
        <em>
          &ldquo;Various reports describe what appears to be an acquired
          allergic reaction to carpet beetle larval hairs and hemolymph (insect
          blood).&rdquo;
        </em>{" "}
        (
        <a href={SRC.psu} rel="nofollow">
          Penn State Extension
        </a>
        ).
      </p>
      <p>
        On what those reports described:{" "}
        <em>
          &ldquo;These hypersensitivity reactions are characterized by
          complaints of being bitten by something causing an intense itching and
          rash.&rdquo;
        </em>{" "}
        and{" "}
        <em>
          &ldquo;Additionally, in some patients, irritation of the respiratory
          tract and eyes may develop.&rdquo;
        </em>
      </p>
      <p>
        And on who it appears to affect:{" "}
        <em>
          &ldquo;Apparently, only individuals who have long-term exposure
          (years) to these hairs become sensitized.&rdquo;
        </em>
      </p>
      <p>
        That is the whole of what this page will say about it. Those are
        descriptions of what dermatologists reported, not a way of working out
        what is on your own skin, and nothing here is a diagnosis or a
        treatment. If your skin is the reason you are reading a product page,
        take it to a pharmacist or a GP instead.
      </p>

      {/* [2] Legal */}
      <h2 id="legal">What the Label Governs</h2>
      <p>
        The aerosol and the powder are insecticides, each sold with a label
        stating where it may be applied, at what rate, and what must be kept
        away from it. The powder&rsquo;s own listing title describes it as HSE
        approved and tested. That is the maker&rsquo;s description of its
        product; what any such approval covers is set out in the approval and on
        the label, not here.
      </p>
      <p>
        The aerosol&rsquo;s maker adds a caution of its own — that it should not
        be used near food surfaces or pets during application. Read it on the
        can rather than here.
      </p>
      <p>
        The trap is described in its own title as poison free and its listing
        names no active substance, so no pesticide label governs it.
      </p>

      {/* [3] Limits */}
      <h2 id="limits">Where a Treatment Does Not Work</h2>
      <p>
        <strong>When there is nothing to treat.</strong> UC IPM says a few adult
        beetles indoors should not be cause for alarm, and that management only
        needs to occur if you find larvae developing in fabrics or other areas
        in your home. Beetles at a window sill are not, on their own, an
        infestation.
      </p>
      <p>
        <strong>Against a trap for the wrong species.</strong>{" "}
        <em>
          &ldquo;Pheromone traps are species-specific, so it is important to use
          one that attracts the species causing your problems.&rdquo;
        </em>{" "}
        (
        <a href={SRC.ucipm} rel="nofollow">
          UC IPM
        </a>
        ). The trap carded below does not name a pheromone or a target species
        in its own text at all, and the card says so.
      </p>
      <p>
        <strong>On the surface of a stuffed item.</strong> UC IPM notes that
        where carpet beetles get into hair or feather stuffing in furniture,
        mattresses or pillows, you cannot control them simply by spraying the
        outside surface of the item.
      </p>
      <p>
        <strong>Without reading the label first.</strong>{" "}
        <em>
          &ldquo;Find a product that lists carpet beetles on its label, and
          closely follow the directions.&rdquo;
        </em>{" "}
        Two of the three products here name carpet beetles in their titles; the
        label on the container is the document that settles it.
      </p>

      {/* [4] Criteria */}
      <h2 id="what-decides">What Decides the Choice</h2>
      <h3>1. Whether the listing names an active substance</h3>
      <p>
        Only one of the three does. The powder names permethrin. The aerosol
        names none anywhere in its listing, and the trap is described as poison
        free. The comparison table below reports each of those as it stands.
      </p>
      <h3>2. Surface or void</h3>
      <p>
        The aerosol is listed for carpets, upholstery and household items. The
        powder comes in a puffer pack listed for cracks and the area around
        power points. UC IPM&rsquo;s own application advice is spot treatment at
        the edges of floor coverings, beneath rugs and furniture, and in cracks
        and crevices that accumulate lint — which is the same division.
      </p>
      <h3>3. Whether you are treating or still looking</h3>
      <p>
        UC IPM recommends traps placed throughout a building to show where
        beetles are coming from, and to monitor whether control practices are
        working, checked once or twice a week. That is a different job from
        killing anything, and it is the job the two-trap pack is for.
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
                "A 300ml aerosol listed for carpets, upholstery and household items, with the maker claiming up to three months of protection per application and describing the finish as odour-free on treated fabrics. Its listing names no active substance anywhere — not in its bullets, not in its detail rows — and the comparison cell says \"not stated\" rather than guessing at one.",
                "The thinnest listing on this page, and the card reports that rather than dressing it up: two traps, described in the title as poison free, with no feature bullets and no product description at all. Its detail rows then disagree with its own title three times over, giving the target species as Mouse, the style as Moth Killer Kit and Is electric as Yes. All four readings are on the card because none of them can be resolved from the listing itself.",
                "Two 300 gram puffer packs, 600 grams in total, with permethrin named as the active and the maker's own title describing the product as HSE approved and tested. It is listed for any surface, furniture and carpets, and specifically for application around power points and other hard-to-reach areas. Its target species row reads Insects rather than Carpet Beetle.",
              ][i]
            }
          </p>
        </div>
      ))}

      {/* Alternatives */}
      <h2 id="alternatives">If a Product Is Not the Answer</h2>
      <p>
        <strong>Vacuuming.</strong> UC IPM calls frequent, thorough vacuuming an
        effective way of removing food sources as well as carpet beetle eggs,
        larvae and adults, and says to dispose of the bag promptly afterwards
        because it can contain all three.
      </p>
      <p>
        <strong>Laundering or dry cleaning.</strong> Its own words are that
        thoroughly laundering washable items in hot water or dry cleaning them
        will kill all stages of these insects, and that this is the most
        important method for controlling fabric pests in clothing, blankets and
        other washable articles.
      </p>
      <p>
        <strong>Cedar, and why it is not carded here.</strong>{" "}
        <em>
          &ldquo;The effectiveness of cedar chests and closet floors made of
          cedar is debatable.&rdquo;
        </em>{" "}
        (
        <a href={SRC.ucipm} rel="nofollow">
          UC IPM
        </a>
        ). It adds that some cedar contains an oil that does not affect large
        larvae but can kill small ones, and that cedar loses this oil as it
        ages. A cedarwood product carried an award on this page until this
        round; it is gone, on that and on the fact that its listing was for
        clothes moths.
      </p>
      <p>
        <strong>Freezing or heating a single item.</strong> UC IPM describes
        heating an infested object in an oven for at least 30 minutes at 120°F
        or higher, or bagging it and freezing it for two weeks below 18°F, with
        the caveat that either may damage the object.
      </p>
      <p>
        <strong>The wider job.</strong> Our{" "}
        <a href="/guides/carpet-beetle-control">carpet beetle guide</a> covers
        the house rather than the product, and our{" "}
        <a href="/best/moth-killers">moth killers</a> page covers the pest this
        one is most often confused with.
      </p>

      {/* Using them */}
      <h2 id="using">Using Them</h2>
      <ol>
        <li>
          <strong>Find the larvae first.</strong> Cast skins and a lack of
          webbing are UC IPM&rsquo;s clue that it is beetles rather than moths.
        </li>
        <li>
          <strong>Clean before you treat.</strong> Lint, hair and dead insects
          are the food; removing them is the step that makes anything else
          worthwhile.
        </li>
        <li>
          <strong>Spot treat, do not blanket.</strong> Edges of floor coverings,
          under rugs and furniture, closet floors and shelving — not clothing
          and not bedding.
        </li>
        <li>
          <strong>Put the dust where a spray will not go.</strong> Wall voids,
          crevices and around power points, per both the listing and UC IPM.
        </li>
        <li>
          <strong>Check the traps weekly.</strong> Once or twice a week is UC
          IPM&rsquo;s interval, and their purpose is to show you where the
          beetles are coming from.
        </li>
      </ol>

      {/* Comparison table */}
      <h2 id="compared">The Three Compared</h2>
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
              <th className="text-left p-2 border-b font-semibold">Type</th>
              <th className="text-left p-2 border-b font-semibold">Active, as listed</th>
              <th className="text-left p-2 border-b font-semibold">Quantity or duration, as listed</th>
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
        heading="A carpet beetle problem that outlasts the cleaning"
        subtext="Compare pest control providers near you — no fees, no commissions."
      />
    </GuideLayout>
  );
}
