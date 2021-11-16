import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectAuthSession } from '~/features/auth/stores/Auth.selector'

type Props = {
  redirectPath?: string
}

const PrivateRoute: React.FC<Props> = ({ redirectPath = '/', children }) => {
  const session = useSelector(selectAuthSession)
  return session ? <>{children}</> : <Navigate replace to={redirectPath} />
}

export default PrivateRoute
