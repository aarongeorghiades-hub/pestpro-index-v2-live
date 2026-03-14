export interface BelfastBoroughData {
  name: string;
  slug: string;
  description: string;
}

export const belfastBoroughs: BelfastBoroughData[] = [
  {
    name: "Belfast City Centre",
    slug: "belfast-city-centre",
    description: "Covering the Cathedral Quarter, City Hall, Linen Quarter, and the commercial core",
  },
  {
    name: "South Belfast",
    slug: "south-belfast",
    description: "Covering Queen's Quarter, Botanic, Ormeau, and the university area",
  },
  {
    name: "East Belfast",
    slug: "east-belfast",
    description: "Covering Titanic Quarter, Stormont, Belmont, and Ballyhackamore",
  },
  {
    name: "West Belfast",
    slug: "west-belfast",
    description: "Covering Falls Road, Andersonstown, Colin area, and residential communities",
  },
  {
    name: "North Belfast",
    slug: "north-belfast",
    description: "Covering Antrim Road, Cavehill, Cliftonville, and mixed residential areas",
  },
  {
    name: "Lisburn Road",
    slug: "lisburn-road",
    description: "Covering the popular commercial and residential corridor south of the city centre",
  },
  {
    name: "Holywood",
    slug: "holywood",
    description: "Covering the coastal town east of Belfast and its affluent residential area",
  },
  {
    name: "Dunmurry",
    slug: "dunmurry",
    description: "Covering the south-west suburb with residential estates and green space",
  },
];

export function getBoroughBySlug(slug: string): BelfastBoroughData | undefined {
  return belfastBoroughs.find(b => b.slug === slug);
}

export function getAllBoroughs(): BelfastBoroughData[] {
  return belfastBoroughs;
}
