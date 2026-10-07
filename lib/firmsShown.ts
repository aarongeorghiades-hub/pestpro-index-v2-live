import { countPestPage, countServing, countTagged } from '@/lib/areaDirectory';
import type { ShownList } from '@/lib/featuredContext';

/**
 * How many firms that directory URL lists.
 * A place page counts based-in firms and also-covering firms together.
 * A hub that lists nobody returns 0. A failed read returns null.
 */
export async function countFirmsShown(list: ShownList): Promise<number | null> {
  if (list.list === 'none') return 0;
  if (list.list === 'place') return countTagged(list.area, 'residential');
  if (list.list === 'residential') return countServing(list.area, 'residential');
  if (list.list === 'commercial') return countServing(list.area, 'commercial');
  if (list.list === 'all') return countServing(list.area, 'all');
  if (list.list === 'pest') return countPestPage(list.area, list.pestColumn);
  return 0;
}
