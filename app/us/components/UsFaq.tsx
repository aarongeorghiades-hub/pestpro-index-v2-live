// FAQ rendering and FAQPage schema, generated from ONE array.
//
// The estate's rule is that schema must never describe content that is not on
// the page. On the UK pages the visible FAQ and the FAQPage schema are written
// out twice, by hand, which makes them capable of drifting apart. Here they are
// two views of a single `faqs` array, so a question can only appear in the
// schema if it is also rendered as visible text. This is the convention later US
// clusters should inherit.

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
