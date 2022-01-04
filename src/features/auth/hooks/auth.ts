import { useLayoutEffect, useState } from 'react'
import { useMutation } from 'react-query'
import { supabase } from '~/libs/supabase'
import { queryClient } from '~/libs/react-query'
import SupabaseApiError from '~/exceptions/SupabaseApiError'
import { signIn, signOut } from '~/features/auth/infrastructure/auth'

export function useSignIn() {
  return useMutation('sign-in', (email: string) => signIn(email))
}

export function useSignOut() {
  return useMutation(() => signOut(), {
    onSuccess: () => {
      queryClient.removeQueries()
    },
  })
}

export function useAuthUser() {
  const user = supabase.auth.user()
  // 認証済み前提で実行される想定であるため、ない場合は例外とする
  if (!user) {
    throw new Error('It could not get the User object.')
  }
  return user
}

export function useAuthSessionSubscription() {
  const [authSession, setAuthSession] = useState(supabase.auth.session())

  useLayoutEffect(() => {
    const { data: subscription, error } = supabase.auth.onAuthStateChange((_, newSession) => {
      setAuthSession(newSession)
    })
    if (error) {
      throw new SupabaseApiError(error)
    }
    return () => {
      if (subscription) {
        subscription.unsubscribe()
      }
    }
  }, [])

  return authSession
}
