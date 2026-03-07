export interface NewcastleBoroughData {
  name: string;
  slug: string;
  description: string;
}

export const newcastleBoroughs: NewcastleBoroughData[] = [
  {
    name: "Newcastle City Centre",
    slug: "newcastle-city-centre",
    description: "Central Newcastle including Jesmond, Gosforth, Quayside and Heaton",
  },
  {
    name: "Gateshead",
    slug: "gateshead",
    description: "Gateshead town centre, Low Fell, Whickham and surrounding areas",
  },
  {
    name: "North Tyneside",
    slug: "north-tyneside",
    description: "North Shields, Whitley Bay, Wallsend, Tynemouth and Cullercoats",
  },
  {
    name: "South Tyneside",
    slug: "south-tyneside",
    description: "South Shields, Hebburn, Jarrow and Boldon",
  },
  {
    name: "Sunderland",
    slug: "sunderland",
    description: "Sunderland city centre, Houghton le Spring and Washington",
  },
  {
    name: "Washington & Houghton",
    slug: "washington-houghton",
    description: "Washington, Houghton le Spring and surrounding Wearside areas",
  },
  {
    name: "Cramlington & Northumberland",
    slug: "cramlington-northumberland",
    description: "Cramlington, Blyth, Morpeth and the Northumberland fringe",
  },
  {
    name: "Consett & County Durham",
    slug: "consett-county-durham",
    description: "Consett, Seaham, Stanley and the County Durham fringe",
  },
];

export function getBoroughBySlug(slug: string): NewcastleBoroughData | undefined {
  return newcastleBoroughs.find(b => b.slug === slug);
}

export function getAllBoroughs(): NewcastleBoroughData[] {
  return newcastleBoroughs;
}
