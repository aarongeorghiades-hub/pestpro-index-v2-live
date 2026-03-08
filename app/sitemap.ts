import { MetadataRoute } from 'next';
import { getAllRegions } from './pest-control/data/regions';
import { getAllBoroughs } from './pest-control/london/london-boroughs';
import { getAllBoroughs as getAllManchesterBoroughs } from './pest-control/manchester/manchester-boroughs';
import { getAllBoroughs as getAllLiverpoolBoroughs } from './pest-control/liverpool/liverpool-boroughs';
import { getAllBoroughs as getAllLeedsBoroughs } from './pest-control/leeds/leeds-boroughs';
import { getAllBoroughs as getAllNottinghamBoroughs } from './pest-control/nottingham/nottingham-boroughs';
import { getAllBoroughs as getAllBrightonBoroughs } from './pest-control/brighton/brighton-boroughs';
import { getAllBoroughs as getAllSheffieldBoroughs } from './pest-control/sheffield/sheffield-boroughs';
import { getAllBoroughs as getAllBristolBoroughs } from './pest-control/bristol/bristol-boroughs';
import { getAllBoroughs as getAllGlasgowBoroughs } from './pest-control/glasgow/glasgow-boroughs';
import { getAllBoroughs as getAllBradfordBoroughs } from './pest-control/bradford/bradford-boroughs';
import { getAllBoroughs as getAllNewcastleBoroughs } from './pest-control/newcastle/newcastle-boroughs';
import { getAllBoroughs as getAllCardiffBoroughs } from './pest-control/cardiff/cardiff-boroughs';
import { posts } from './blog/data/posts';
import { pestGuides } from '@/data/pest-guides';

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
    url: `${baseUrl}/pest-control/london/${borough.slug}`,
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

  // Get all Leeds boroughs
  const leedsBoroughs = getAllLeedsBoroughs();
  const leedsBoroughUrls = leedsBoroughs.map((borough) => ({
    url: `${baseUrl}/pest-control/leeds/${borough.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Get all Nottingham boroughs
  const nottinghamBoroughs = getAllNottinghamBoroughs();
  const nottinghamBoroughUrls = nottinghamBoroughs.map((borough) => ({
    url: `${baseUrl}/pest-control/nottingham/${borough.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Get all Brighton boroughs
  const brightonBoroughs = getAllBrightonBoroughs();
  const brightonBoroughUrls = brightonBoroughs.map((borough) => ({
    url: `${baseUrl}/pest-control/brighton/${borough.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Get all Sheffield boroughs
  const sheffieldBoroughs = getAllSheffieldBoroughs();
  const sheffieldBoroughUrls = sheffieldBoroughs.map((borough) => ({
    url: `${baseUrl}/pest-control/sheffield/${borough.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Get all Bristol boroughs
  const bristolBoroughs = getAllBristolBoroughs();
  const bristolBoroughUrls = bristolBoroughs.map((borough) => ({
    url: `${baseUrl}/pest-control/bristol/${borough.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Get all Glasgow boroughs
  const glasgowBoroughs = getAllGlasgowBoroughs();
  const glasgowBoroughUrls = glasgowBoroughs.map((borough) => ({
    url: `${baseUrl}/pest-control/glasgow/${borough.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Get all Bradford boroughs
  const bradfordBoroughs = getAllBradfordBoroughs();
  const bradfordBoroughUrls = bradfordBoroughs.map((borough) => ({
    url: `${baseUrl}/pest-control/bradford/${borough.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Get all Newcastle boroughs
  const newcastleBoroughs = getAllNewcastleBoroughs();
  const newcastleBoroughUrls = newcastleBoroughs.map((borough) => ({
    url: `${baseUrl}/pest-control/newcastle/${borough.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Get all Cardiff boroughs
  const cardiffBoroughs = getAllCardiffBoroughs();
  const cardiffBoroughUrls = cardiffBoroughs.map((borough) => ({
    url: `${baseUrl}/pest-control/cardiff/${borough.slug}`,
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
      url: `${baseUrl}/leeds/residential`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/leeds/commercial`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/nottingham/residential`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/nottingham/commercial`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/brighton/residential`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/brighton/commercial`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sheffield/residential`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sheffield/commercial`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/bristol/residential`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/bristol/commercial`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/glasgow/residential`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/glasgow/commercial`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/bradford/residential`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/bradford/commercial`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/newcastle`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/newcastle/residential`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/newcastle/commercial`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cardiff`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cardiff/residential`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cardiff/commercial`,
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
    {
      url: `${baseUrl}/pest-control-costs`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pest-library`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/useful-links`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...pestGuides.map((pest) => ({
      url: `${baseUrl}/pest/${pest.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...blogPostUrls,
    ...regionUrls,
    ...boroughUrls,
    ...manchesterBoroughUrls,
    ...liverpoolBoroughUrls,
    ...leedsBoroughUrls,
    ...nottinghamBoroughUrls,
    ...brightonBoroughUrls,
    ...sheffieldBoroughUrls,
    ...bristolBoroughUrls,
    ...glasgowBoroughUrls,
    ...bradfordBoroughUrls,
    ...newcastleBoroughUrls,
    ...cardiffBoroughUrls,
  ];
}
