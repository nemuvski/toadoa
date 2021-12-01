import React, { Suspense, lazy } from 'react'
import { useSelector } from 'react-redux'
import { useRoutes, Navigate } from 'react-router-dom'
import { selectAuthSession } from '~/features/auth/stores/Auth.selector'
import { RouteObject } from 'react-router-dom'
import MainLayout from '~/components/MainLayout'
import SubLayout from '~/components/SubLayout'

const FrontPage = lazy(() => import('~/features/routes/components/FrontPage'))
const DashboardPage = lazy(() => import('~/features/routes/components/DashboardPage'))
const SignOutPage = lazy(() => import('~/features/routes/components/SignOutPage'))
const NotFoundPage = lazy(() => import('~/features/routes/components/NotFoundPage'))

/**
 * 匿名ユーザー、認証済みユーザーの両方がアクセス可能なルート群
 */
const commonRoutes: Array<RouteObject> = [
  {
    path: '/',
    element: <SubLayout />,
    children: [
      {
        path: 'sign-out',
        element: <SignOutPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]

/**
 * 匿名ユーザーのみがアクセス可能なルート群
 */
const anonymousOnlyRoutes: Array<RouteObject> = [
  {
    path: '/',
    element: <SubLayout />,
    children: [
      {
        index: true,
        element: <FrontPage />,
      },
    ],
  },
]

/**
 * 認証済みユーザーのみがアクセス可能なルート群
 */
const authenticationOnlyRoutes: Array<RouteObject> = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        // ルートパスにアクセスされた時はダッシュボードページへリダイレクト
        element: <Navigate replace to='/dashboard' />,
      },
      {
        path: 'dashboard',
        element: <DashboardPage />,
      },
    ],
  },
]

const AppRouter = () => {
  const session = useSelector(selectAuthSession)
  const protectedRoutes = session ? authenticationOnlyRoutes : anonymousOnlyRoutes
  const element = useRoutes([...commonRoutes, ...protectedRoutes])

  return <Suspense fallback={<div>Loading</div>}>{element}</Suspense>
}

export default AppRouter
