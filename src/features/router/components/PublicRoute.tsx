import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectAuthSession } from '~/features/auth/stores/Auth.selector'

type Props = {
  redirectPath?: string
}

const PublicRoute: React.FC<Props> = ({ redirectPath = '/dashboard', children }) => {
  const session = useSelector(selectAuthSession)
  return session ? <Navigate replace to={redirectPath} /> : <>{children}</>
}

export default PublicRoute
