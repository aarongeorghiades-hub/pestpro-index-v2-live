export interface EdinburghBoroughData {
  name: string;
  slug: string;
  description: string;
}

export const edinburghBoroughs: EdinburghBoroughData[] = [
  {
    name: "Edinburgh City Centre",
    slug: "edinburgh-city-centre",
    description: "Covering Old Town, New Town, Grassmarket, Royal Mile, and the central EH1-EH3 postcodes",
  },
  {
    name: "Leith",
    slug: "leith",
    description: "Covering Leith, Leith Walk, Newhaven, and the EH6 postcode area",
  },
  {
    name: "Southside",
    slug: "southside",
    description: "Covering Newington, Marchmont, Morningside borders, Sciennes, and the EH9-EH10 area",
  },
  {
    name: "Stockbridge",
    slug: "stockbridge",
    description: "Covering Stockbridge, Comely Bank, Dean Village, and the EH3-EH4 area",
  },
  {
    name: "Morningside",
    slug: "morningside",
    description: "Covering Morningside, Bruntsfield, Churchhill, and the EH10 postcode area",
  },
  {
    name: "Portobello",
    slug: "portobello",
    description: "Covering Portobello, Joppa, Duddingston, and the EH15 postcode area",
  },
  {
    name: "Musselburgh",
    slug: "musselburgh",
    description: "Covering Musselburgh, Wallyford, Inveresk, and the EH21 postcode area",
  },
  {
    name: "Dalkeith & Midlothian",
    slug: "dalkeith-midlothian",
    description: "Covering Dalkeith, Bonnyrigg, Lasswade, Loanhead, Penicuik, and the wider Midlothian area",
  },
];

export function getBoroughBySlug(slug: string): EdinburghBoroughData | undefined {
  return edinburghBoroughs.find(b => b.slug === slug);
}

export function getAllBoroughs(): EdinburghBoroughData[] {
  return edinburghBoroughs;
}
