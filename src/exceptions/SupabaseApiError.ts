import { ApiError } from '@supabase/gotrue-js/dist/module/GoTrueApi'

export default class SupabaseApiError extends Error {
  constructor(error: ApiError) {
    super(`[${error.status}] ${error.message}`)
  }
}
