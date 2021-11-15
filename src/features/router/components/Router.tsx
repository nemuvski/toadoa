import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PublicRoute from '~/features/router/components/PublicRoute'
import PrivateRoute from '~/features/router/components/PrivateRoute'
import FrontPage from '~/pages/Front.page'
import DashboardPage from '~/pages/Dashboard.page'
import SignOutPage from '~/pages/SignOut.page'
import NotFoundPage from '~/pages/NotFound.page'

const Router = () => (
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

export default Router
