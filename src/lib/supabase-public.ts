import "server-only"

import { createClient } from "@supabase/supabase-js"

export function createPublicSupabaseClient() {
    const supabaseUrl =
        process.env.NEXT_PUBLIC_SUPABASE_URL

    const supabasePublishableKey =
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY

    if (!supabaseUrl) {
        throw new Error(
            "NEXT_PUBLIC_SUPABASE_URL manquant"
        )
    }

    if (!supabasePublishableKey) {
        throw new Error(
            "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY manquant"
        )
    }

    return createClient(
        supabaseUrl,
        supabasePublishableKey,
        {
            auth: {
                persistSession: false,
                autoRefreshToken: false,
                detectSessionInUrl: false,
            },
        }
    )
}