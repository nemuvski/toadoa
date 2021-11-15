import React from 'react'
import useAuthChange from '~/hooks/useAuthChange'
import Router from '~/features/router/components/Router'

const App = () => {
  useAuthChange()

  return <Router />
}

export default App
