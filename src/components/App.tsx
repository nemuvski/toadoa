import React from 'react'
import { Route, Switch } from 'react-router-dom'
import useAuthChange from '~/hooks/useAuthChange'
import FrontPage from '~/pages/Front.page'
import NotFoundPage from '~/pages/NotFound.page'

const App = () => {
  useAuthChange()

  return (
    <Switch>
      <Route exact path='/' component={FrontPage} />
      <Route component={NotFoundPage} />
    </Switch>
  )
}

export default App
