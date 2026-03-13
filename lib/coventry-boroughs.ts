export interface CoventryBoroughData {
  name: string;
  slug: string;
  description: string;
}

export const coventryBoroughs: CoventryBoroughData[] = [
  {
    name: "Coventry City Centre",
    slug: "coventry-city-centre",
    description: "Covering the city centre, CV1 postcode area, and the main commercial district",
  },
  {
    name: "Earlsdon",
    slug: "earlsdon",
    description: "Covering Earlsdon, Chapelfields, and the CV5 postcode area",
  },
  {
    name: "Tile Hill",
    slug: "tile-hill",
    description: "Covering Tile Hill, Westwood Heath, and the CV4 postcode area",
  },
  {
    name: "Canley",
    slug: "canley",
    description: "Covering Canley, University of Warwick campus, and the CV4 postcode area",
  },
  {
    name: "Foleshill",
    slug: "foleshill",
    description: "Covering Foleshill, Longford, and the CV6 postcode area",
  },
  {
    name: "Stoke",
    slug: "stoke",
    description: "Covering Stoke, Gosford Green, and the CV2 postcode area",
  },
  {
    name: "Binley",
    slug: "binley",
    description: "Covering Binley, Willenhall, and the CV3 postcode area",
  },
  {
    name: "Coundon",
    slug: "coundon",
    description: "Covering Coundon, Radford, and the CV6 postcode area",
  },
];

export function getBoroughBySlug(slug: string): CoventryBoroughData | undefined {
  return coventryBoroughs.find(b => b.slug === slug);
}

export function getAllBoroughs(): CoventryBoroughData[] {
  return coventryBoroughs;
}
