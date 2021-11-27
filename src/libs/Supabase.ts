import { createClient, SupabaseClientOptions } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY
const supabaseClientOptions: SupabaseClientOptions = {}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, supabaseClientOptions)
