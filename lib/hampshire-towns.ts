export interface HampshireTownData {
  name: string;
  slug: string;
  description: string;
  cityNames: string[];
}

export const hampshireTowns: HampshireTownData[] = [
  {
    name: "Basingstoke",
    slug: "basingstoke",
    description: "Covering Basingstoke town centre and surrounding areas",
    cityNames: ["Basingstoke"],
  },
  {
    name: "Southampton",
    slug: "southampton",
    description: "Covering Southampton city and the surrounding Solent area",
    cityNames: ["Southampton"],
  },
  {
    name: "Portsmouth",
    slug: "portsmouth",
    description: "Covering Portsmouth, Southsea, and Portsea Island",
    cityNames: ["Portsmouth"],
  },
  {
    name: "Alton",
    slug: "alton",
    description: "Covering Alton, Four Marks, and east Hampshire countryside",
    cityNames: ["Alton"],
  },
  {
    name: "Andover",
    slug: "andover",
    description: "Covering Andover, the Test Valley, and north-west Hampshire",
    cityNames: ["Andover"],
  },
  {
    name: "Lymington",
    slug: "lymington",
    description: "Covering Lymington, New Milton, and the New Forest coast",
    cityNames: ["Lymington"],
  },
  {
    name: "Winchester",
    slug: "winchester",
    description: "Covering Winchester city and the surrounding Winchester district",
    cityNames: ["Winchester"],
  },
  {
    name: "Fleet",
    slug: "fleet",
    description: "Covering Fleet, Church Crookham, and the Hart district",
    cityNames: ["Fleet"],
  },
  {
    name: "Fareham",
    slug: "fareham",
    description: "Covering Fareham, Portchester, and the surrounding borough",
    cityNames: ["Fareham"],
  },
  {
    name: "Havant",
    slug: "havant",
    description: "Covering Havant, Leigh Park, and Hayling Island borders",
    cityNames: ["Havant"],
  },
  {
    name: "Waterlooville",
    slug: "waterlooville",
    description: "Covering Waterlooville, Cowplain, and Horndean",
    cityNames: ["Waterlooville"],
  },
  {
    name: "Hook",
    slug: "hook",
    description: "Covering Hook, Odiham, and north-east Hampshire",
    cityNames: ["Hook"],
  },
  {
    name: "Farnham",
    slug: "farnham",
    description: "Covering Farnham and the Hampshire-Surrey border",
    cityNames: ["Farnham"],
  },
  {
    name: "Farnborough",
    slug: "farnborough",
    description: "Covering Farnborough, Cove, and the Rushmoor area",
    cityNames: ["Farnborough"],
  },
  {
    name: "Gosport",
    slug: "gosport",
    description: "Covering Gosport peninsula, Lee-on-the-Solent, and Alverstoke",
    cityNames: ["Gosport"],
  },
  {
    name: "Bordon",
    slug: "bordon",
    description: "Covering Bordon, Whitehill, and the former garrison area",
    cityNames: ["Bordon"],
  },
  {
    name: "Romsey",
    slug: "romsey",
    description: "Covering Romsey, the Test Valley, and surrounding villages",
    cityNames: ["Romsey"],
  },
  {
    name: "Eastleigh",
    slug: "eastleigh",
    description: "Covering Eastleigh, Chandler's Ford, and the airport area",
    cityNames: ["Eastleigh"],
  },
  {
    name: "Ringwood",
    slug: "ringwood",
    description: "Covering Ringwood, Fordingbridge, and the western New Forest",
    cityNames: ["Ringwood"],
  },
  {
    name: "Isle of Wight",
    slug: "isle-of-wight",
    description: "Covering Ryde, Brading, Bembridge, and the wider Isle of Wight",
    cityNames: ["Ryde", "Brading", "Bembridge"],
  },
];

export function getTownBySlug(slug: string): HampshireTownData | undefined {
  return hampshireTowns.find(t => t.slug === slug);
}

export function getAllTowns(): HampshireTownData[] {
  return hampshireTowns;
}
