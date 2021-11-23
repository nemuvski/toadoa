import { PostgrestError } from '@supabase/supabase-js'

export default class RestError extends Error {
  constructor(error: PostgrestError) {
    super(`[${error.code}] ${error.message}, ${error.details}`)
  }
}
