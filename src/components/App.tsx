import React from 'react'
import useAuthChange from '~/features/auth/hooks/useAuthChange'
import useFetchAccount from '~/features/auth/hooks/useFetchAccount'
import AppRouter from '~/features/routes/components/AppRouter'

const App = () => {
  useAuthChange()
  useFetchAccount()

  return <AppRouter />
}

export default App
