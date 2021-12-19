import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '~/stores/store'
import { signInAction, signOutAction } from '~/features/auth/stores/auth.action'

export default function useAuth() {
  const dispatch = useDispatch<AppDispatch>()

  const signIn = useCallback(
    async (email: string) => {
      await dispatch(signInAction(email)).unwrap()
    },
    [dispatch]
  )

  const signOut = useCallback(async () => {
    await dispatch(signOutAction()).unwrap()
  }, [dispatch])

  return { signIn, signOut }
}
