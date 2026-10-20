import { headers } from 'next/headers';
import FeaturedBlock from '@/components/listing/FeaturedBlock';
import { pathMightListProviders } from '@/lib/directoryPath';
import { featuredQueryForPath, shownListForPath } from '@/lib/featuredContext';
import { getFeaturedCards } from '@/lib/featuredProviders';
import { countFirmsShown } from '@/lib/firmsShown';

// THE FEATURED BLOCK, RENDERED ON THE SERVER WHERE THE PAGE PUTS IT.
// It used to be fetched in the browser and portalled into an empty slot after
// hydration, which pushed the list down (layout shift 0.64 on a phone) and
// could miss the slot entirely after client-side navigation. Same query as
// /api/featured; every page that renders this is already dynamic.
export default async function FeaturedHere({ context = 'directory' }: { context?: 'directory' | 'finder' }) {
  const path = (await headers()).get('x-pp-pathname') || '';
  if (!path || !pathMightListProviders(path)) return null;
  const query = featuredQueryForPath(path);
  if (!query) return null;
  const shown = shownListForPath(path);
  const firmsShown = shown ? ((await countFirmsShown(shown)) ?? 0) : 0;
  const providers = await getFeaturedCards(query, firmsShown);
  if (providers.length === 0) return null;
  return <FeaturedBlock providers={providers} fromPath={path} context={context} />;
}
