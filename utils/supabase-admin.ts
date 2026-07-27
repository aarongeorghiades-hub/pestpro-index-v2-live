// ============================================================================
// SERVER-ONLY — NEVER import this into a client component.
//
// This module reads SUPABASE_SERVICE_ROLE_KEY, which bypasses Row Level
// Security entirely. The variable deliberately has no NEXT_PUBLIC_ prefix so
// Next.js will not inline it into the browser bundle. Importing this file from
// any file carrying the 'use client' directive would leak full database
// credentials to every visitor.
//
// Use only from route handlers, server actions, or server components.
// For public anonymous reads use utils/supabase.ts (browser) or
// utils/supabase-server.ts (server components) instead.
// ============================================================================

import { createClient as createSupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

export function createAdminClient() {
  if (!supabaseUrl) {
    throw new Error(
      '[supabase-admin] NEXT_PUBLIC_SUPABASE_URL is not set. ' +
        'Add it to .env.local locally, or to the Railway service variables in production.'
    )
  }

  if (!serviceRoleKey) {
    throw new Error(
      '[supabase-admin] SUPABASE_SERVICE_ROLE_KEY is not set. ' +
        'This key is required for server-side writes because RLS blocks the anon key. ' +
        'Add it to .env.local locally, or to the Railway service variables in production. ' +
        'It must NOT have a NEXT_PUBLIC_ prefix.'
    )
  }

  return createSupabaseClient(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  })
}
