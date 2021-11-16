import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '~/components/MainLayout'
import SubLayout from '~/components/SubLayout'
import PublicRoute from '~/features/router/components/PublicRoute'
import PrivateRoute from '~/features/router/components/PrivateRoute'
import FrontPage from '~/features/page/components/FrontPage'
import DashboardPage from '~/features/page/components/DashboardPage'
import SignOutPage from '~/features/page/components/SignOutPage'
import NotFoundPage from '~/features/page/components/NotFoundPage'

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
