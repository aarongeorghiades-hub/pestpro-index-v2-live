// The header nav for the products index.
//
// WHY THIS FILE EXISTS AT ALL: UsPageLayout requires `homeHref` and `clusterNav`
// explicitly. There is no default behind either prop, so every cluster states its
// own here rather than inheriting another cluster's identity by omission.
//
// THE CLUSTER IS ONE PAGE, AND IT IS DELIBERATELY NOT A TOPIC CLUSTER. The index
// spans the whole estate rather than a subject within it, so listing any pest page
// here would assert a sibling relationship that does not exist. It lists itself,
// which is the same shape choosingServiceNav.ts uses for the other utility page.
// Under the S62 R5 amendment to Law 172, links INTO a cluster from an unclustered
// page are legitimate, so the index links out freely without being a cluster.

export const PRODUCTS_INDEX_HOME = '/us';

export const PRODUCTS_INDEX_NAV = [
  { title: 'Products', href: '/us/products' },
];
