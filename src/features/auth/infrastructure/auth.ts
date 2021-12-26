import { supabase } from '~/libs/supabase'
import SupabaseApiError from '~/exceptions/SupabaseApiError'

/**
 * Supabaseのサインイン処理
 *
 * @param email Eメールアドレス
 */
export async function signIn(email: string) {
  const { session, error } = await supabase.auth.signIn(
    { email },
    {
      redirectTo: `${import.meta.env.PUBLIC_BASE_URL}/dashboard`,
    }
  )
  if (error) {
    throw new SupabaseApiError(error)
  }
  return session
}

/**
 * Supabaseのサインアウト処理
 */
export async function signOut() {
  const { error } = await supabase.auth.signOut()
  if (error) {
    throw new SupabaseApiError(error)
  }
}
