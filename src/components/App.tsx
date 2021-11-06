import React from 'react'
import { Route, Routes } from 'react-router-dom'
import useAuthChange from '~/hooks/useAuthChange'
import PrivateRoute from '~/components/routing/PrivateRoute'
import PublicRoute from '~/components/routing/PublicRoute'
import FrontPage from '~/pages/Front.page'
import DashboardPage from '~/pages/Dashboard.page'
import SignOutPage from '~/pages/SignOut.page'
import NotFoundPage from '~/pages/NotFound.page'

const App = () => {
  useAuthChange()

  return (
    <Routes>
      <Route
        path='/'
        element={
          <PublicRoute>
            <FrontPage />
          </PublicRoute>
        }
      />
      <Route
        path='/dashboard'
        element={
          <PrivateRoute>
            <DashboardPage />
          </PrivateRoute>
        }
      />
      <Route path='/sign-out' element={<SignOutPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
