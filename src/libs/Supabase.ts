import { createClient, SupabaseClientOptions } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY
const supabaseClientOptions: SupabaseClientOptions = {}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, supabaseClientOptions)
