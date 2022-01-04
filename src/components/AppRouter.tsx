import React, { lazy } from 'react'
import { useRoutes, Navigate } from 'react-router-dom'
import { RouteObject } from 'react-router-dom'
import AuthUserLayout from '~/components/layouts/AuthUserLayout'
import Layout from '~/components/layouts/Layout'
import { useAuthSessionSubscription } from '~/features/auth/hooks/auth'

const FrontPage = lazy(() => import('~/pages/FrontPage'))
const DashboardPage = lazy(() => import('~/pages/DashboardPage'))
const SignOutPage = lazy(() => import('~/pages/SignOutPage'))
const NotFoundPage = lazy(() => import('~/pages/NotFoundPage'))

/**
 * 匿名ユーザー、認証済みユーザーの両方がアクセス可能なルート群
 */
const commonRoutes: Array<RouteObject> = [
  {
    path: '/',
    element: <Layout />,
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
    element: <Layout />,
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
    element: <AuthUserLayout />,
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
  const session = useAuthSessionSubscription()

  const protectedRoutes = session ? authenticationOnlyRoutes : anonymousOnlyRoutes
  const element = useRoutes([...commonRoutes, ...protectedRoutes])

  return <>{element}</>
}

export default AppRouter
