import { Metadata } from 'next';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import { SourceList, AsOf, type Source } from '../components/UsSources';
import { CALIFORNIA_NAV, CALIFORNIA_HOME } from '../components/californiaNav';

const URL = 'https://pestproindex.com/us/california-trapping-rules';
const TITLE = 'California Trapping Rules: What Title 14 Section 465.5 Actually Says';
const DESCRIPTION =
  'The text of California Code of Regulations Title 14 Section 465.5 and Fish and Game Code Sections 3950, 4000, 4150 and 4152, quoted by subsection. A record of what the regulation says. Not legal advice.';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: URL },
    openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      url: URL,
      type: 'article',
      siteName: 'PestPro Index',
    },
  };
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: TITLE,
  description: DESCRIPTION,
  datePublished: '2026-08-22',
  dateModified: '2026-08-22',
  author: { '@type': 'Organization', name: 'PestPro Index' },
  publisher: { '@type': 'Organization', name: 'PestPro Index', url: 'https://pestproindex.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': URL },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'California Trapping Rules',
      item: 'https://pestproindex.com/us/california-trapping-rules',
    },
    { '@type': 'ListItem', position: 2, name: 'California Trapping Rules', item: URL },
  ],
};

const faqs: Faq[] = [
  {
    question: 'What does Section 465.5 count as a trap?',
    answer:
      'Subsection (a) is headed Traps Defined and states that traps are defined to include padded-jaw leg-hold, steel-jawed leg-hold, and conibear traps, snares, dead-falls, cage traps, and other devices designed to confine, hold, grasp, grip, clamp or crush animals bodies or body parts. That is the definition the rest of the section runs on. This page records the text and offers no view on what anyone ought to do with it.',
  },
  {
    question: 'What is a body-gripping trap under the section?',
    answer:
      'Subsection (c) states that a body-gripping trap is one that grips the mammals body or body part, including, but not limited to, steel-jawed leg-hold traps, padded-jaw leg-hold traps, conibear traps, and snares. The same subsection states that cage and box traps, nets, suitcase-type live beaver traps, and common rat and mouse traps shall not be considered body-gripping traps. Subsection (c) prohibits trapping with any body-gripping trap for the purposes of recreation or commerce in fur.',
  },
  {
    question: 'What does the section say about steel-jawed leg-hold traps?',
    answer:
      'Subsection (e) states that it is unlawful for any person to use or authorize the use of any steel-jawed leg-hold trap, padded or otherwise, to capture any game mammal, exotic game mammal, furbearing mammal, nongame mammal, protected mammal, or any dog or cat. Subsection (e)(1) states that this prohibition does not apply to federal, state, county, or municipal government employees or their duly authorized agents in the extraordinary case where the otherwise prohibited padded-jaw leg-hold trap is the only method available to protect human health or safety.',
  },
  {
    question: 'How often does the section say traps are visited?',
    answer:
      'Subsection (g)(2) is headed Trap Visitation Requirement and states that all traps shall be visited at least once daily by the owner of the traps or his or her designee. The same subsection states that each time traps are checked all trapped animals shall be removed, and that a designee shall carry on his or her person written authorization, as owners representative, to check traps.',
  },
  {
    question: 'What does the section say happens to a trapped animal?',
    answer:
      'Subsection (g)(1) is headed Immediate Dispatch or Release and states that all furbearing and nongame mammals that are legal to trap must be immediately killed or released. It states that unless released, trapped animals shall be killed by shooting where local ordinances, landowners, and safety permit, and that the regulation does not prohibit employees of federal, state, or local government from using chemical euthanasia to dispatch trapped animals. The obligation the text states is immediacy. The text does not name a location for a release. This page records that and recommends nothing.',
  },
  {
    question: 'Does Section 465.5 name skunks, opossums or raccoons?',
    answer:
      'No. Searched word by word, the section contains no occurrence of skunk, of opossum or of raccoon. It reaches animals by class instead. Subsection (b) is headed Affected Mammals Defined and states that furbearing mammals, game mammals, exotic game mammals, nongame mammals, and protected mammals are those mammals so defined by statute on July 1, 2024, in sections 3950, 3965, 4000, 4150 and 4700 of the Fish and Game Code. Fish and Game Code Section 4000 states in full that the following are fur-bearing mammals: pine marten, fisher, mink, river otter, gray fox, red fox, kit fox, raccoon, beaver, badger, and muskrat. Skunk and opossum appear in neither Section 4000 nor Section 3950.',
  },
  {
    question: 'Does Section 465.5 say anything about relocation?',
    answer:
      'The section contains no provision on relocation or transport. Searching its text returns no occurrence of relocate, relocation, transport, off the property or off-site, and the only three occurrences of release sit inside subsection (g)(1). That is a statement about the text of this one section and nothing more. It is not a statement that moving an animal is lawful. Other sections, other statutes and local ordinances may apply, and this page does not examine them.',
  },
];

const sources: Source[] = [
  {
    label:
      'Cal. Code Regs. Tit. 14, § 465.5 — Use of Traps. READ FROM A MIRROR: Cornell Legal Information Institute, not the official publisher. The mirror states that regulations are updated quarterly',
    publisher: 'California Code of Regulations, via Cornell Legal Information Institute',
    date: 'History note: operative 7/1/2024. Read August 22, 2026',
    href: 'https://www.law.cornell.edu/regulations/california/14-CCR-465.5',
  },
  {
    label: 'California Fish and Game Code § 3950 — Game mammals',
    publisher: 'California Legislative Information (official publisher)',
    date: 'Accessed August 22, 2026',
    href: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=FGC&sectionNum=3950',
  },
  {
    label: 'California Fish and Game Code § 4000 — Fur-bearing mammals',
    publisher: 'California Legislative Information (official publisher)',
    date: 'Accessed August 22, 2026',
    href: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=FGC&sectionNum=4000',
  },
  {
    label: 'California Fish and Game Code § 4150 — Nongame mammals',
    publisher: 'California Legislative Information (official publisher)',
    date: 'Accessed August 22, 2026',
    href: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=FGC&sectionNum=4150',
  },
  {
    label: 'California Fish and Game Code § 4152 — Take of mammals injuring crops or property',
    publisher: 'California Legislative Information (official publisher)',
    date: 'Accessed August 22, 2026',
    href: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=FGC&sectionNum=4152',
  },
];

const tocItems = [
  { id: 'what-this-is', title: 'What This Page Is' },
  { id: 'trap-defined', title: 'What Counts as a Trap' },
  { id: 'body-gripping', title: 'Body-Gripping Traps' },
  { id: 'leg-hold', title: 'Steel-Jawed Leg-Hold Traps' },
  { id: 'property', title: 'Purposes Unrelated to Fur' },
  { id: 'visitation', title: 'Trap Visitation' },
  { id: 'dispatch', title: 'Immediate Dispatch or Release' },
  { id: 'placement', title: 'Trap Placement' },
  { id: 'penalty', title: 'Statutory Penalty' },
  { id: 'statutes', title: 'The Two Statutes Read Together' },
  { id: 'animals', title: 'Which Animals Are Named' },
  { id: 'relocation', title: 'What the Section Does Not Contain' },
  { id: 'faq', title: 'Questions' },
  { id: 'sources', title: 'Sources' },
];

export default function CaliforniaTrappingRulesPage() {
  return (
    <UsPageLayout
      title="California Trapping Rules"
      subtitle="A record of what California Code of Regulations Title 14 Section 465.5 says, quoted subsection by subsection, with the four Fish and Game Code sections it depends on. It is a record of text, not guidance."
      lastUpdated="August 2026"
      readingTime="9 min"
      tocItems={tocItems}
      homeHref={CALIFORNIA_HOME}
      clusterNav={CALIFORNIA_NAV}
      schemas={[articleSchema, breadcrumbSchema, faqPageSchema(faqs)]}
    >
      <h2 id="what-this-is">What This Page Is</h2>
      <p>
        This page quotes the text of one regulation and four statutes and does nothing else with
        them. <strong>It is not legal advice.</strong> It does not tell you to trap anything, not to
        trap anything, or what to do with an animal in a trap. Where the text is silent, this page
        says it is silent and stops there.
      </p>
      <p>
        <strong>Where the text came from, and its limits.</strong> The regulation was read from the{' '}
        <strong>Cornell Legal Information Institute mirror</strong> of the California Code of
        Regulations on August 22, 2026. Cornell is <strong>not</strong> the official publisher of the
        California Code of Regulations, and the official electronic publisher served no text to us on
        that date. The mirror prints its own caveat, that state regulations are updated quarterly.
        The section&rsquo;s own history note reads{' '}
        <AsOf date="operative 7/1/2024">
          &ldquo;amendment of subsections (b) and (e) and amendment of NOTE filed 5-29-2024&rdquo;
        </AsOf>
        . The four Fish and Game Code sections were read from California Legislative Information,
        which <em>is</em> the official publisher of the codes.
      </p>
      <p>
        Regulations change, and this page is a snapshot of one day. The current text of the section,
        and any local ordinance that may also apply, are matters for the reader to check directly.
        Every URL used is listed in full at the foot of this page.
      </p>

      <h2 id="trap-defined">What Counts as a Trap</h2>
      <p>
        Subsection <strong>(a)</strong>, headed <em>Traps Defined</em>, states:
      </p>
      <ul>
        <li>
          <em>
            &ldquo;Traps are defined to include padded-jaw leg-hold, steel-jawed leg-hold, and
            conibear traps, snares, dead-falls, cage traps&rdquo;
          </em>{' '}
          &mdash; § 465.5(a)
        </li>
        <li>
          <em>
            &ldquo;designed to confine, hold, grasp, grip, clamp or crush animals&rsquo; bodies or
            body parts&rdquo;
          </em>{' '}
          &mdash; § 465.5(a)
        </li>
      </ul>

      <h2 id="body-gripping">Body-Gripping Traps</h2>
      <p>
        Subsection <strong>(c)</strong> is headed <em>Prohibition on Trapping for the Purposes of
        Recreation or Commerce in Fur</em>. It both prohibits and defines.
      </p>
      <ul>
        <li>
          <em>&ldquo;It is unlawful for any person to trap for the purposes of recreation or commerce in fur&rdquo;</em>{' '}
          &mdash; § 465.5(c)
        </li>
        <li>
          <em>&ldquo;with any body-gripping trap&rdquo;</em> &mdash; § 465.5(c)
        </li>
        <li>
          <em>&ldquo;A body-gripping trap is one that grips the mammal&rsquo;s body or body part&rdquo;</em>{' '}
          &mdash; § 465.5(c)
        </li>
        <li>
          <em>
            &ldquo;including, but not limited to, steel-jawed leg-hold traps, padded-jaw leg-hold
            traps, conibear traps, and snares&rdquo;
          </em>{' '}
          &mdash; § 465.5(c)
        </li>
        <li>
          <em>
            &ldquo;Cage and box traps, nets, suitcase-type live beaver traps, and common rat and
            mouse traps&rdquo;
          </em>{' '}
          &mdash; § 465.5(c)
        </li>
        <li>
          <em>&ldquo;shall not be considered body-gripping traps&rdquo;</em> &mdash; § 465.5(c)
        </li>
      </ul>

      <h2 id="leg-hold">Steel-Jawed Leg-Hold Traps</h2>
      <p>
        Subsection <strong>(e)</strong> is headed <em>Prohibition on Use of Steel-jawed Leg-hold
        Traps by Individuals</em>.
      </p>
      <ul>
        <li>
          <em>
            &ldquo;It is unlawful for any person to use or authorize the use of any steel-jawed
            leg-hold trap&rdquo;
          </em>{' '}
          &mdash; § 465.5(e)
        </li>
        <li>
          <em>
            &ldquo;padded or otherwise, to capture any game mammal, exotic game mammal, furbearing
            mammal&rdquo;
          </em>{' '}
          &mdash; § 465.5(e)
        </li>
        <li>
          <em>&ldquo;nongame mammal, protected mammal, or any dog or cat&rdquo;</em> &mdash; § 465.5(e)
        </li>
      </ul>
      <p>
        Subsection <strong>(e)(1)</strong> carries an exception:{' '}
        <em>
          &ldquo;does not apply to federal, state, county, or municipal government employees or their
          duly authorized agents&rdquo;
        </em>{' '}
        &mdash; § 465.5(e)(1), and only{' '}
        <em>
          &ldquo;in the extraordinary case where the otherwise prohibited padded-jaw leg-hold trap is
          the only method available&rdquo;
        </em>{' '}
        &mdash; § 465.5(e)(1). The engineering specifications that subsection attaches to such traps
        are in the regulation and are not reproduced here.
      </p>

      <h2 id="property">Purposes Unrelated to Fur</h2>
      <p>
        Subsection <strong>(g)</strong> deals with conibear traps, snares, cage and box traps, nets,
        suitcase-type live beaver traps and common rat and mouse traps used for purposes unrelated to
        recreation or commerce in fur.
      </p>
      <ul>
        <li>
          <em>&ldquo;may be used by individuals to take authorized mammals&rdquo;</em> &mdash; § 465.5(g)
        </li>
        <li>
          <em>&ldquo;including, but not limited to, the protection of property&rdquo;</em> &mdash;
          § 465.5(g)
        </li>
        <li>
          <em>
            &ldquo;Except for common rat and mouse traps, all traps used pursuant to this subsection
            must be numbered&rdquo;
          </em>{' '}
          &mdash; § 465.5(g)
        </li>
      </ul>
      <p>
        The numbering that subsection refers back to is set by subsection <strong>(f)(1)</strong>:{' '}
        <em>&ldquo;shall obtain a trap number issued by and registered with the department&rdquo;</em>{' '}
        &mdash; § 465.5(f)(1), and{' '}
        <em>
          &ldquo;All traps, before being put into use, shall bear only the current registered trap
          number&rdquo;
        </em>{' '}
        &mdash; § 465.5(f)(1).
      </p>

      <h2 id="visitation">Trap Visitation</h2>
      <p>
        Subsection <strong>(g)(2)</strong> is headed <em>Trap Visitation Requirement</em>.
      </p>
      <ul>
        <li>
          <em>
            &ldquo;All traps shall be visited at least once daily by the owner of the traps or
            his/her designee.&rdquo;
          </em>{' '}
          &mdash; § 465.5(g)(2)
        </li>
        <li>
          <em>
            &ldquo;Such designee shall carry on his/her person written authorization, as
            owner&rsquo;s representative&rdquo;
          </em>{' '}
          &mdash; § 465.5(g)(2)
        </li>
        <li>
          <em>&ldquo;Each time traps are checked all trapped animals shall be removed.&rdquo;</em>{' '}
          &mdash; § 465.5(g)(2)
        </li>
      </ul>

      <h2 id="dispatch">Immediate Dispatch or Release</h2>
      <p>
        Subsection <strong>(g)(1)</strong> carries the heading{' '}
        <em>&ldquo;Immediate Dispatch or Release.&rdquo;</em> &mdash; § 465.5(g)(1). Its operative
        sentences are these.
      </p>
      <ul>
        <li>
          <em>
            &ldquo;All furbearing and nongame mammals that are legal to trap must be immediately
            killed or released.&rdquo;
          </em>{' '}
          &mdash; § 465.5(g)(1)
        </li>
        <li>
          <em>&ldquo;Unless released, trapped animals shall be killed by shooting&rdquo;</em> &mdash;
          § 465.5(g)(1)
        </li>
        <li>
          <em>&ldquo;where local ordinances, landowners, and safety permit&rdquo;</em> &mdash;
          § 465.5(g)(1)
        </li>
        <li>
          <em>
            &ldquo;does not prohibit employees of federal, state, or local government from using
            chemical euthanasia&rdquo;
          </em>{' '}
          &mdash; § 465.5(g)(1)
        </li>
      </ul>
      <p>
        <strong>What the text specifies is timing, not place.</strong> The words on site, at the
        site, on the property, where captured and point of capture do not appear anywhere in
        § 465.5. This page records that and draws nothing from it.
      </p>

      <h2 id="placement">Trap Placement</h2>
      <p>
        Subsection <strong>(g)(3)</strong> is headed <em>Trap Placement Requirement</em>.
      </p>
      <ul>
        <li>
          <em>
            &ldquo;Traps may not be set within 150 yards of any structure used as a permanent or
            temporary residence&rdquo;
          </em>{' '}
          &mdash; § 465.5(g)(3)
        </li>
        <li>
          <em>&ldquo;unless such traps are set by a person controlling such property&rdquo;</em>{' '}
          &mdash; § 465.5(g)(3)
        </li>
      </ul>
      <p>
        Subsections (g)(4) and (g)(5) place further restrictions on conibear-type traps and snares,
        including named geographic zones described road by road over several thousand words. Those
        boundaries are in the regulation and are not reproduced or summarized here.
      </p>

      <h2 id="penalty">Statutory Penalty</h2>
      <p>
        Subsection <strong>(h)</strong> is headed <em>Statutory Penalty for Violation of
        Provisions</em>.
      </p>
      <ul>
        <li>
          <em>
            &ldquo;Violation of Section 3003.1 or 3003.2 of the Fish and Game Code, or any rule or
            regulation&rdquo;
          </em>{' '}
          &mdash; § 465.5(h)
        </li>
        <li>
          <em>
            &ldquo;is punishable by a fine of not less than three hundred dollars&rdquo;
          </em>{' '}
          &mdash; § 465.5(h)
        </li>
        <li>
          <em>&ldquo;or more than two thousand dollars&rdquo;</em> &mdash; § 465.5(h)
        </li>
        <li>
          <em>
            &ldquo;or by imprisonment in the county jail for not more than one year, or by
            both&rdquo;
          </em>{' '}
          &mdash; § 465.5(h)
        </li>
      </ul>

      <h2 id="statutes">The Two Statutes Read Together</h2>
      <p>
        Fish and Game Code <strong>§ 4150(a)</strong> supplies a definition:
      </p>
      <ul>
        <li>
          <em>
            &ldquo;A mammal occurring naturally in California that is not a game mammal, exotic
            game mammal, fully protected mammal, or fur-bearing mammal is a nongame mammal.&rdquo;
          </em>{' '}
          &mdash; FGC § 4150(a)
        </li>
        <li>
          <em>&ldquo;A nongame mammal may not be taken or possessed except as provided in this code&rdquo;</em>{' '}
          &mdash; FGC § 4150(a)
        </li>
        <li>
          <em>&ldquo;or in accordance with regulations adopted by the commission&rdquo;</em> &mdash;
          FGC § 4150(a)
        </li>
      </ul>
      <p>
        Fish and Game Code <strong>§ 4152(a)</strong> is the section most often quoted in part, and{' '}
        <strong>the qualifying clause belongs in the same sentence as the permission</strong>. The
        text reads that mammals{' '}
        <em>
          &ldquo;found to be injuring growing crops or other property may be taken at any time or in
          any manner in accordance with this code and regulations adopted pursuant to this
          code&rdquo;
        </em>{' '}
        &mdash; FGC § 4152(a). The subsection continues{' '}
        <em>&ldquo;by the owner or tenant of the premises&rdquo;</em> &mdash; FGC § 4152(a), or{' '}
        <em>
          &ldquo;employees and agents in immediate possession of written permission from the owner or
          tenant&rdquo;
        </em>{' '}
        &mdash; FGC § 4152(a), and opens with{' '}
        <em>&ldquo;Except as provided in Section 4005&rdquo;</em> &mdash; FGC § 4152(a).
      </p>
      <p>
        Section 465.5 appears on the reference list printed in its own authority note alongside
        sections 4150 and 4152 of the Fish and Game Code, which is why the two are set out together
        here.
      </p>

      <h2 id="animals">Which Animals Are Named</h2>
      <p>
        <strong>Section 465.5 does not name a skunk, an opossum or a raccoon anywhere in its
        text.</strong> Searched word by word across the section, each returns no occurrence. The
        section reaches animals by class instead, and subsection <strong>(b)</strong>, headed{' '}
        <em>Affected Mammals Defined</em>, is where the class comes from:
      </p>
      <ul>
        <li>
          <em>
            &ldquo;furbearing mammals, game mammals, exotic game mammals, nongame mammals, and
            protected mammals&rdquo;
          </em>{' '}
          &mdash; § 465.5(b)
        </li>
        <li>
          <em>
            &ldquo;are those mammals so defined by statute on July 1, 2024, in sections 3950, 3965,
            4000, 4150 and 4700 of the Fish and Game Code&rdquo;
          </em>{' '}
          &mdash; § 465.5(b)
        </li>
      </ul>
      <p>
        Following that cross-reference, Fish and Game Code <strong>§ 4000</strong> reads in full:
      </p>
      <p>
        <em>
          &ldquo;The following are fur-bearing mammals: pine marten, fisher, mink, river otter, gray
          fox, red fox, kit fox, raccoon, beaver, badger, and muskrat.&rdquo;
        </em>{' '}
        &mdash; FGC § 4000
      </p>
      <p>
        <strong>The raccoon is listed there by name.</strong> A skunk and an opossum appear neither
        in Section 4000 nor in the list of game mammals at Section 3950, which reads{' '}
        <em>
          &ldquo;Game mammals are: deer ... elk ... prong-horned antelope ... black and brown or
          cinnamon bears&rdquo;
        </em>{' '}
        &mdash; FGC § 3950(a), continuing through mountain lions, jackrabbits and varying hares,
        cottontails, brush rabbits, pygmy rabbits and tree squirrels. Section 3950 also states{' '}
        <em>&ldquo;This section shall become operative on July 1, 2024.&rdquo;</em> &mdash; FGC
        § 3950(c), which is the date subsection (b) above refers to.
      </p>
      <p>
        That is the whole of what the quoted text establishes about these three animals, and this
        page goes no further with it.
      </p>

      <h2 id="relocation">What the Section Does Not Contain</h2>
      <p>
        <strong>Section 465.5 contains no provision on relocation or transport.</strong> Searching the
        text of the section returns no occurrence of relocate, of relocation, of transport, of off
        the property or of off-site, and the only three occurrences of the word release sit inside
        subsection (g)(1), quoted above. <strong>That is a statement about the text of this one
        section and nothing more. It is not a statement that moving an animal is lawful.</strong>{' '}
        Other sections of the same title, other statutes, and local ordinances may apply, and this
        page does not examine them.
      </p>

      <h2 id="faq">Questions</h2>
      <UsFaq faqs={faqs} />

      <h2 id="sources">Sources</h2>
      <p>
        Every quotation above carries its subsection or section citation in the same line. The
        regulation was read from a mirror and the statutes from their official publisher, and each is
        labeled accordingly below. Framing and ordering are our own; no characterization of the law
        by any third party was used in preparing this page.
      </p>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
