import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '~/stores/Store'
import { signInAction, signOutAction } from '~/features/auth/stores/Auth.action'

const useAuth = () => {
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

export default useAuth
