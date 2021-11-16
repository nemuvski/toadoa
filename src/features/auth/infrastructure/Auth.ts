import { supabase } from '~/libs/Supabase'
import SupabaseApiError from '~/exceptions/SupabaseApiError'

export const signIn = async (email: string) => {
  const { session, error } = await supabase.auth.signIn(
    { email },
    {
      redirectTo: `${process.env.BASE_URL}/sign-in`,
    }
  )
  if (error) {
    throw new SupabaseApiError(error)
  }
  return session
}

export const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  if (error) {
    throw new SupabaseApiError(error)
  }
}
