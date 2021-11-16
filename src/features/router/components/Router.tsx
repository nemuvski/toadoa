import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '~/components/MainLayout'
import SubLayout from '~/components/SubLayout'
import PublicRoute from '~/features/router/components/PublicRoute'
import PrivateRoute from '~/features/router/components/PrivateRoute'
import FrontPage from '~/pages/Front.page'
import DashboardPage from '~/pages/Dashboard.page'
import SignOutPage from '~/pages/SignOut.page'
import NotFoundPage from '~/pages/NotFound.page'

const Router = () => (
  <Routes>
    <Route path='/' element={<MainLayout />}>
      <Route
        path='dashboard'
        element={
          <PrivateRoute>
            <DashboardPage />
          </PrivateRoute>
        }
      />
    </Route>

    <Route path='/' element={<SubLayout />}>
      <Route
        index
        element={
          <PublicRoute>
            <FrontPage />
          </PublicRoute>
        }
      />
      <Route path='sign-out' element={<SignOutPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  </Routes>
)

export default Router
