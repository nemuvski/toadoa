import { PostgrestError } from '@supabase/supabase-js'

export default class RestError extends Error {
  constructor(error: PostgrestError | string) {
    if (typeof error === 'string') {
      super(error)
    } else {
      super(`[${error.code}] ${error.message}`)
    }
  }
}
