import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { supabase } from '~/libs/supabase'
import { AppDispatch } from '~/stores/store'
import { setAuthState } from '~/stores/auth/slice'

const useAuthChange = () => {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    const { data, error } = supabase.auth.onAuthStateChange((_, session) => {
      dispatch(setAuthState(session))
    })

    if (error) {
      console.error(error)
    }

    return () => {
      if (data) {
        data.unsubscribe()
      }
    }
  }, [dispatch])
}

export default useAuthChange
