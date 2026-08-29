// FAQ rendering and FAQPage schema, generated from ONE array.
//
// The estate's rule is that schema must never describe content that is not on
// the page. On the UK pages the visible FAQ and the FAQPage schema are written
// out twice, by hand, which makes them capable of drifting apart. Here they are
// two views of a single `faqs` array, so a question can only appear in the
// schema if it is also rendered as visible text. This is the convention later US
// clusters should inherit.
//
// THIS COMPONENT RENDERS NO HEADING, AND THAT IS DELIBERATE — BUT IT IS A CONTRACT
// THE CONSUMER HAS TO KEEP. Every consuming page renders its own
// `<h2 id="faq">Questions</h2>` immediately before <UsFaq />. The id belongs on that
// heading and not in here, because a page's own table of contents links to #faq and
// two elements carrying one id is a defect.
//
// PUTTING THE ID IN HERE WOULD BE WRONG AND WAS MEASURED TO BE WRONG. In S55 R4 the
// component had 42 consumers; 34 of them already rendered that heading. Adding an
// id to this component would have given those 34 pages TWO elements with id="faq".
// The eight that had drifted were repaired in their own files instead.
//
// IF YOU ADD A CONSUMER, ADD THE HEADING. Nothing here can enforce it, so the check
// is a rendered sweep for an href="#faq" with no matching id.

export interface Faq {
  question: string;
  answer: string;
}

export function faqPageSchema(faqs: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export default function UsFaq({ faqs }: { faqs: Faq[] }) {
  return (
    <>
      {faqs.map((faq) => (
        <div key={faq.question}>
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </div>
      ))}
    </>
  );
}
