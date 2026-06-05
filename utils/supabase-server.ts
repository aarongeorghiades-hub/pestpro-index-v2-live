import { createClient as createSupabaseClient } from '@supabase/supabase-js'

// Server-side Supabase client for use in async Server Components.
// Anonymous public reads only — no auth, no cookies, no session persistence.
// Uses the same NEXT_PUBLIC_ env vars as the browser client (they are
// available server-side too). Export name is distinct from the browser
// client's `createClient` so the two can't be confused at import sites.

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

if (!supabaseUrl || !supabaseAnonKey) console.error('[SSR] Supabase env vars missing at runtime');

export function createServerClient() {
  return createSupabaseClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  })
}
