import { MetadataRoute } from 'next';
import { getAllRegions } from './pest-control/data/regions';
import { getAllBoroughs } from './pest-control/borough-data';
import { getAllBoroughs as getAllManchesterBoroughs } from './pest-control/manchester/manchester-boroughs';
import { getAllBoroughs as getAllLiverpoolBoroughs } from './pest-control/liverpool/liverpool-boroughs';
import { posts } from './blog/data/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pestproindex.com';

  // Get all regions
  const regions = getAllRegions();
  const regionUrls = regions.map((region) => ({
    url: `${baseUrl}/pest-control/${region.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: region.status === 'live' ? 0.8 : 0.7,
  }));

  // Get all London boroughs
  const boroughs = getAllBoroughs();
  const boroughUrls = boroughs.map((borough) => ({
    url: `${baseUrl}/pest-control/${borough.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Get all Manchester boroughs
  const manchesterBoroughs = getAllManchesterBoroughs();
  const manchesterBoroughUrls = manchesterBoroughs.map((borough) => ({
    url: `${baseUrl}/pest-control/manchester/${borough.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Get all Liverpool boroughs
  const liverpoolBoroughs = getAllLiverpoolBoroughs();
  const liverpoolBoroughUrls = liverpoolBoroughs.map((borough) => ({
    url: `${baseUrl}/pest-control/liverpool/${borough.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Blog posts
  const blogPostUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/residential`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/commercial`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/birmingham/residential`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/birmingham/commercial`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/manchester/residential`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/manchester/commercial`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/liverpool/residential`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/liverpool/commercial`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pest-control`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pest-control/regions`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/professionals`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/commercial-products`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    ...blogPostUrls,
    ...regionUrls,
    ...boroughUrls,
    ...manchesterBoroughUrls,
    ...liverpoolBoroughUrls,
  ];
}
