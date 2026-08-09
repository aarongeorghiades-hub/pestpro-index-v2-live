// SERVER COMPONENT. The product rows are read here, on the server, so the
// product markup ships in the initial HTML. Previously this page was
// client-only and fetched in a useEffect, which meant the server sent an empty
// shell: no product names, no Amazon links, nothing for a crawler to see.
//
// The interactive part - the email capture form - keeps its own 'use client'
// in CommercialProductsClient; passing server-fetched rows into a client
// component still server-renders that component's initial HTML.
//
// force-dynamic is retained: no ISR, consistent with the rest of the app.
import { createServerClient } from '@/utils/supabase-server';
import CommercialProductsClient, { type Product } from './CommercialProductsClient';

export const dynamic = 'force-dynamic';

export default async function CommercialProductsPage() {
  const supabase = createServerClient();
  // Explicit column list, not select('*'): these six are the only fields the
  // page renders. price_range, rating and review_count are deliberately NOT
  // fetched - they must never appear on this surface.
  const { data, error } = await supabase
    .from('amazon_products')
    .select('id, asin, product_name, product_type, notes, pest_category')
    .eq('product_context', 'commercial')
    .eq('is_active', true)
    .order('pest_category', { ascending: true })
    .order('product_name', { ascending: true });

  if (error) console.error('[SSR fetch] commercial-products:', error.message);

  return <CommercialProductsClient products={(data ?? []) as Product[]} />;
}
