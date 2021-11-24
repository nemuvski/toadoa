import React from 'react'
import { useSelector } from 'react-redux'
import { useRoutes, Navigate } from 'react-router-dom'
import { selectAuthSession } from '~/features/auth/stores/Auth.selector'
import { RouteObject } from 'react-router-dom'
import MainLayout from '~/components/MainLayout'
import SubLayout from '~/components/SubLayout'
import FrontPage from '~/features/page/components/FrontPage'
import DashboardPage from '~/features/page/components/DashboardPage'
import SignOutPage from '~/features/page/components/SignOutPage'
import NotFoundPage from '~/features/page/components/NotFoundPage'

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

  return <>{element}</>
}

export default AppRouter
