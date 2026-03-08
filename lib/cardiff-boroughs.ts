export interface CardiffBoroughData {
  name: string;
  slug: string;
  description: string;
}

export const cardiffBoroughs: CardiffBoroughData[] = [
  {
    name: "Cardiff City Centre",
    slug: "cardiff-city-centre",
    description: "Central Cardiff including the Castle Quarter, St David's and the Civic Centre",
  },
  {
    name: "Cardiff Bay & Butetown",
    slug: "cardiff-bay",
    description: "Cardiff Bay waterfront, Butetown, Tiger Bay and the Barrage area",
  },
  {
    name: "Canton & Pontcanna",
    slug: "canton-pontcanna",
    description: "Canton, Pontcanna, Riverside and Victoria Park areas",
  },
  {
    name: "Roath & Cathays",
    slug: "roath-cathays",
    description: "Roath, Cathays, Plasnewydd and the university quarter",
  },
  {
    name: "North Cardiff",
    slug: "north-cardiff",
    description: "Whitchurch, Rhiwbina, Heath, Llandaff and Tongwynlais",
  },
  {
    name: "Penarth & Vale of Glamorgan",
    slug: "penarth-vale",
    description: "Penarth, Dinas Powys, Barry and the Vale of Glamorgan",
  },
  {
    name: "Newport & Caerphilly",
    slug: "newport-caerphilly",
    description: "Newport city centre, Caerphilly, Risca and the eastern valleys",
  },
  {
    name: "Pontypridd & Rhondda Cynon Taf",
    slug: "pontypridd-rct",
    description: "Pontypridd, Treforest, Aberdare, Tonypandy and the Rhondda valleys",
  },
];

export function getBoroughBySlug(slug: string): CardiffBoroughData | undefined {
  return cardiffBoroughs.find(b => b.slug === slug);
}

export function getAllBoroughs(): CardiffBoroughData[] {
  return cardiffBoroughs;
}
