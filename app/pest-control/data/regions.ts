export interface RegionCity {
  name: string;
  slug: string;
  status: 'live' | 'coming-soon';
  providerCount?: number;
  residentialLink?: string;
  commercialLink?: string;
  areasLink?: string;
}

export interface Region {
  name: string;
  slug: string;
  status: 'live' | 'coming-soon';
  description: string;
  metaTitle: string;
  metaDescription: string;
  cities: RegionCity[];
}

export const regions: Region[] = [
  {
    name: "Greater London",
    slug: "greater-london",
    status: "live",
    description: "Find trusted pest control and pest removal providers across all 33 London boroughs. PestPro Index lists 391 residential and commercial pest control companies in Greater London with verified Google ratings — no lead fees, no commissions.",
    metaTitle: "Pest Control in Greater London | 391 Verified Providers | PestPro Index",
    metaDescription: "Compare 391 pest control and pest removal providers across Greater London. Verified Google ratings, no lead fees, no commissions. Find trusted pest control in your borough.",
    cities: [
      {
        name: "London Residential",
        slug: "london-residential",
        status: "live",
        providerCount: 391,
        residentialLink: "/residential",
      },
      {
        name: "London Commercial",
        slug: "london-commercial",
        status: "live",
        providerCount: 240,
        commercialLink: "/commercial",
      },
      {
        name: "Browse by Borough",
        slug: "london-boroughs",
        status: "live",
        areasLink: "/pest-control",
      }
    ]
  },
  {
    name: "West Midlands",
    slug: "west-midlands",
    status: "live",
    description: "Find trusted pest control and pest removal providers across the West Midlands. PestPro Index currently covers Birmingham with 42 verified providers, with expansion to Coventry, Wolverhampton, and the wider West Midlands region coming soon.",
    metaTitle: "Pest Control in the West Midlands | Birmingham & Surrounding Areas | PestPro Index",
    metaDescription: "Compare pest control and pest removal providers across the West Midlands. Currently covering Birmingham with 42 verified providers. No lead fees, no commissions.",
    cities: [
      {
        name: "Birmingham Residential",
        slug: "birmingham-residential",
        status: "live",
        providerCount: 42,
        residentialLink: "/birmingham/residential",
      },
      {
        name: "Birmingham Commercial",
        slug: "birmingham-commercial",
        status: "live",
        commercialLink: "/birmingham/commercial",
      },
      {
        name: "Coventry",
        slug: "coventry",
        status: "coming-soon",
      },
      {
        name: "Wolverhampton",
        slug: "wolverhampton",
        status: "coming-soon",
      },
      {
        name: "Solihull",
        slug: "solihull",
        status: "coming-soon",
      },
      {
        name: "Walsall",
        slug: "walsall",
        status: "coming-soon",
      },
      {
        name: "Dudley",
        slug: "dudley",
        status: "coming-soon",
      },
      {
        name: "Staffordshire",
        slug: "staffordshire",
        status: "coming-soon",
      },
      {
        name: "Warwickshire",
        slug: "warwickshire",
        status: "coming-soon",
      },
      {
        name: "Worcestershire",
        slug: "worcestershire",
        status: "coming-soon",
      },
      {
        name: "Shropshire",
        slug: "shropshire",
        status: "coming-soon",
      }
    ]
  },
  {
    name: "North West",
    slug: "north-west",
    status: "coming-soon",
    description: "PestPro Index is expanding to the North West. We will soon cover Manchester, Liverpool, Lancashire, Cheshire, and Cumbria with verified pest control providers. No lead fees, no commissions — just honest, transparent directory listings.",
    metaTitle: "Pest Control in the North West | Manchester, Liverpool & More | PestPro Index",
    metaDescription: "PestPro Index is expanding to the North West. Soon covering Manchester, Liverpool, Lancashire, and Cheshire. Neutral pest control directory — no lead fees, no commissions.",
    cities: [
      { name: "Manchester", slug: "manchester", status: "coming-soon" },
      { name: "Liverpool", slug: "liverpool", status: "coming-soon" },
      { name: "Lancashire", slug: "lancashire", status: "coming-soon" },
      { name: "Cheshire", slug: "cheshire", status: "coming-soon" },
      { name: "Cumbria", slug: "cumbria", status: "coming-soon" }
    ]
  },
  {
    name: "Yorkshire & the Humber",
    slug: "yorkshire-and-the-humber",
    status: "coming-soon",
    description: "PestPro Index is expanding to Yorkshire and the Humber. We will soon cover Leeds, Sheffield, Bradford, Hull, York, and the wider Yorkshire region with verified pest control providers.",
    metaTitle: "Pest Control in Yorkshire & the Humber | Leeds, Sheffield & More | PestPro Index",
    metaDescription: "PestPro Index is expanding to Yorkshire and the Humber. Soon covering Leeds, Sheffield, Bradford, Hull, and York. Neutral pest control directory — no lead fees.",
    cities: [
      { name: "Leeds", slug: "leeds", status: "coming-soon" },
      { name: "Sheffield", slug: "sheffield", status: "coming-soon" },
      { name: "Bradford", slug: "bradford", status: "coming-soon" },
      { name: "Hull", slug: "hull", status: "coming-soon" },
      { name: "York", slug: "york", status: "coming-soon" },
      { name: "North Yorkshire", slug: "north-yorkshire", status: "coming-soon" },
      { name: "South Yorkshire", slug: "south-yorkshire", status: "coming-soon" },
      { name: "West Yorkshire", slug: "west-yorkshire", status: "coming-soon" },
      { name: "East Riding of Yorkshire", slug: "east-riding", status: "coming-soon" }
    ]
  },
  {
    name: "South East",
    slug: "south-east",
    status: "coming-soon",
    description: "PestPro Index is expanding to the South East. We will soon cover Kent, Surrey, Sussex, Hampshire, Berkshire, Buckinghamshire, Oxfordshire, Hertfordshire, and Essex with verified pest control providers.",
    metaTitle: "Pest Control in the South East | Kent, Surrey, Hampshire & More | PestPro Index",
    metaDescription: "PestPro Index is expanding to the South East. Soon covering Kent, Surrey, Sussex, Hampshire, and more. Neutral pest control directory — no lead fees, no commissions.",
    cities: [
      { name: "Kent", slug: "kent", status: "coming-soon" },
      { name: "Surrey", slug: "surrey", status: "coming-soon" },
      { name: "East Sussex", slug: "east-sussex", status: "coming-soon" },
      { name: "West Sussex", slug: "west-sussex", status: "coming-soon" },
      { name: "Hampshire", slug: "hampshire", status: "coming-soon" },
      { name: "Berkshire", slug: "berkshire", status: "coming-soon" },
      { name: "Buckinghamshire", slug: "buckinghamshire", status: "coming-soon" },
      { name: "Oxfordshire", slug: "oxfordshire", status: "coming-soon" },
      { name: "Hertfordshire", slug: "hertfordshire", status: "coming-soon" },
      { name: "Essex", slug: "essex", status: "coming-soon" }
    ]
  },
  {
    name: "South West",
    slug: "south-west",
    status: "coming-soon",
    description: "PestPro Index is expanding to the South West. We will soon cover Bristol, Bath, Devon, Cornwall, Somerset, Dorset, Wiltshire, and Gloucestershire with verified pest control providers.",
    metaTitle: "Pest Control in the South West | Bristol, Bath, Devon & More | PestPro Index",
    metaDescription: "PestPro Index is expanding to the South West. Soon covering Bristol, Bath, Devon, Cornwall, and more. Neutral pest control directory — no lead fees, no commissions.",
    cities: [
      { name: "Bristol", slug: "bristol", status: "coming-soon" },
      { name: "Bath", slug: "bath", status: "coming-soon" },
      { name: "Devon", slug: "devon", status: "coming-soon" },
      { name: "Cornwall", slug: "cornwall", status: "coming-soon" },
      { name: "Somerset", slug: "somerset", status: "coming-soon" },
      { name: "Dorset", slug: "dorset", status: "coming-soon" },
      { name: "Wiltshire", slug: "wiltshire", status: "coming-soon" },
      { name: "Gloucestershire", slug: "gloucestershire", status: "coming-soon" }
    ]
  },
  {
    name: "East of England",
    slug: "east-of-england",
    status: "coming-soon",
    description: "PestPro Index is expanding to the East of England. We will soon cover Norfolk, Suffolk, Cambridgeshire, and Bedfordshire with verified pest control providers.",
    metaTitle: "Pest Control in the East of England | Norfolk, Suffolk, Cambridge & More | PestPro Index",
    metaDescription: "PestPro Index is expanding to the East of England. Soon covering Norfolk, Suffolk, Cambridgeshire, and Bedfordshire. Neutral pest control directory — no lead fees.",
    cities: [
      { name: "Norfolk", slug: "norfolk", status: "coming-soon" },
      { name: "Suffolk", slug: "suffolk", status: "coming-soon" },
      { name: "Cambridgeshire", slug: "cambridgeshire", status: "coming-soon" },
      { name: "Bedfordshire", slug: "bedfordshire", status: "coming-soon" }
    ]
  },
  {
    name: "East Midlands",
    slug: "east-midlands",
    status: "coming-soon",
    description: "PestPro Index is expanding to the East Midlands. We will soon cover Nottingham, Leicester, Derby, Northampton, and Lincolnshire with verified pest control providers.",
    metaTitle: "Pest Control in the East Midlands | Nottingham, Leicester, Derby & More | PestPro Index",
    metaDescription: "PestPro Index is expanding to the East Midlands. Soon covering Nottingham, Leicester, Derby, and more. Neutral pest control directory — no lead fees, no commissions.",
    cities: [
      { name: "Nottinghamshire", slug: "nottinghamshire", status: "coming-soon" },
      { name: "Leicestershire", slug: "leicestershire", status: "coming-soon" },
      { name: "Derbyshire", slug: "derbyshire", status: "coming-soon" },
      { name: "Northamptonshire", slug: "northamptonshire", status: "coming-soon" },
      { name: "Lincolnshire", slug: "lincolnshire", status: "coming-soon" }
    ]
  },
  {
    name: "North East",
    slug: "north-east",
    status: "coming-soon",
    description: "PestPro Index is expanding to the North East. We will soon cover Newcastle, Sunderland, County Durham, and Teesside with verified pest control providers.",
    metaTitle: "Pest Control in the North East | Newcastle, Sunderland & More | PestPro Index",
    metaDescription: "PestPro Index is expanding to the North East. Soon covering Newcastle, Sunderland, County Durham, and Teesside. Neutral pest control directory — no lead fees.",
    cities: [
      { name: "Newcastle upon Tyne", slug: "newcastle", status: "coming-soon" },
      { name: "Sunderland", slug: "sunderland", status: "coming-soon" },
      { name: "County Durham", slug: "county-durham", status: "coming-soon" },
      { name: "Teesside", slug: "teesside", status: "coming-soon" },
      { name: "Northumberland", slug: "northumberland", status: "coming-soon" }
    ]
  },
  {
    name: "Scotland",
    slug: "scotland",
    status: "coming-soon",
    description: "PestPro Index is expanding to Scotland. We will soon cover Glasgow, Edinburgh, Aberdeen, Dundee, and the wider Scottish regions with verified pest control providers.",
    metaTitle: "Pest Control in Scotland | Glasgow, Edinburgh, Aberdeen & More | PestPro Index",
    metaDescription: "PestPro Index is expanding to Scotland. Soon covering Glasgow, Edinburgh, Aberdeen, and Dundee. Neutral pest control directory — no lead fees, no commissions.",
    cities: [
      { name: "Glasgow", slug: "glasgow", status: "coming-soon" },
      { name: "Edinburgh", slug: "edinburgh", status: "coming-soon" },
      { name: "Aberdeen", slug: "aberdeen", status: "coming-soon" },
      { name: "Dundee", slug: "dundee", status: "coming-soon" },
      { name: "Fife", slug: "fife", status: "coming-soon" },
      { name: "Stirling", slug: "stirling", status: "coming-soon" },
      { name: "Ayrshire", slug: "ayrshire", status: "coming-soon" },
      { name: "Lanarkshire", slug: "lanarkshire", status: "coming-soon" }
    ]
  },
  {
    name: "Wales",
    slug: "wales",
    status: "coming-soon",
    description: "PestPro Index is expanding to Wales. We will soon cover Cardiff, Swansea, Newport, and North Wales with verified pest control providers.",
    metaTitle: "Pest Control in Wales | Cardiff, Swansea, Newport & More | PestPro Index",
    metaDescription: "PestPro Index is expanding to Wales. Soon covering Cardiff, Swansea, Newport, and North Wales. Neutral pest control directory — no lead fees, no commissions.",
    cities: [
      { name: "Cardiff", slug: "cardiff", status: "coming-soon" },
      { name: "Swansea", slug: "swansea", status: "coming-soon" },
      { name: "Newport", slug: "newport", status: "coming-soon" },
      { name: "North Wales", slug: "north-wales", status: "coming-soon" }
    ]
  },
  {
    name: "Northern Ireland",
    slug: "northern-ireland",
    status: "coming-soon",
    description: "PestPro Index is expanding to Northern Ireland. We will soon cover Belfast, Derry, and the wider Northern Ireland region with verified pest control providers.",
    metaTitle: "Pest Control in Northern Ireland | Belfast, Derry & More | PestPro Index",
    metaDescription: "PestPro Index is expanding to Northern Ireland. Soon covering Belfast, Derry, Lisburn, and Newry. Neutral pest control directory — no lead fees, no commissions.",
    cities: [
      { name: "Belfast", slug: "belfast", status: "coming-soon" },
      { name: "Derry / Londonderry", slug: "derry", status: "coming-soon" },
      { name: "Lisburn", slug: "lisburn", status: "coming-soon" },
      { name: "Newry", slug: "newry", status: "coming-soon" }
    ]
  }
];

export function getRegionBySlug(slug: string): Region | undefined {
  return regions.find(region => region.slug === slug);
}

export function getAllRegions(): Region[] {
  return regions;
}
