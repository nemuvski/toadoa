import React from 'react'
import useAuthChange from '~/features/auth/hooks/useAuthChange'
import AppRouter from '~/features/page/components/AppRouter'

const App = () => {
  useAuthChange()

  return <AppRouter />
}

export default App
