import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { supabase } from '~/libs/supabase'
import { AppDispatch } from '~/stores/store'
import { setAuthState } from '~/features/auth/stores/auth/slice'

const useAuthChange = () => {
  const dispatch = useDispatch<AppDispatch>()
  const session = supabase.auth.session()

  useEffect(() => {
    if (session) {
      dispatch(setAuthState(session))
    }

    const { data: subscription, error } = supabase.auth.onAuthStateChange((_, sessionChange) => {
      dispatch(setAuthState(sessionChange))
    })
    if (error) {
      console.error(error)
    }
    return () => {
      if (subscription) {
        subscription.unsubscribe()
      }
    }
  }, [dispatch, session])
}

export default useAuthChange
