export interface LeicesterBoroughData {
  name: string;
  slug: string;
  description: string;
}

export const leicesterBoroughs: LeicesterBoroughData[] = [
  {
    name: "Leicester City Centre",
    slug: "leicester-city-centre",
    description: "Covering the city centre, LE1 postcode area, and the main commercial district",
  },
  {
    name: "Highfields",
    slug: "highfields",
    description: "Covering Highfields, Spinney Hills, and the LE2 postcode area",
  },
  {
    name: "Evington",
    slug: "evington",
    description: "Covering Evington, Evington Valley, and the LE5 postcode area",
  },
  {
    name: "Oadby",
    slug: "oadby",
    description: "Covering Oadby, South Wigston borders, and the LE2 5xx postcode area",
  },
  {
    name: "Wigston",
    slug: "wigston",
    description: "Covering Wigston, South Wigston, and the LE18 postcode area",
  },
  {
    name: "Braunstone",
    slug: "braunstone",
    description: "Covering Braunstone, Braunstone Town, Western Park, and the LE3 postcode area",
  },
  {
    name: "Beaumont Leys",
    slug: "beaumont-leys",
    description: "Covering Beaumont Leys, Belgrave, Abbey Lane, and the LE4 postcode area",
  },
  {
    name: "Knighton",
    slug: "knighton",
    description: "Covering Knighton, Clarendon Park, Stoneygate, and the LE2 3xx postcode area",
  },
];

export function getBoroughBySlug(slug: string): LeicesterBoroughData | undefined {
  return leicesterBoroughs.find(b => b.slug === slug);
}

export function getAllBoroughs(): LeicesterBoroughData[] {
  return leicesterBoroughs;
}
