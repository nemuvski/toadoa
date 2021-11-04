import React from 'react'
import { Route, Switch } from 'react-router-dom'
import useAuthChange from '~/hooks/useAuthChange'
import PrivateRoute from '~/components/PrivateRoute'
import PublicRoute from '~/components/PublicRoute'
import FrontPage from '~/pages/Front.page'
import DashboardPage from '~/pages/Dashboard.page'
import SignOutPage from '~/pages/SignOut.page'
import NotFoundPage from '~/pages/NotFound.page'

const App = () => {
  useAuthChange()

  return (
    <Switch>
      <PublicRoute exact path='/' component={FrontPage} />
      <PrivateRoute exact path='/dashboard' component={DashboardPage} />
      <PrivateRoute exact path='/sign-out' component={SignOutPage} />
      <Route component={NotFoundPage} />
    </Switch>
  )
}

export default App
