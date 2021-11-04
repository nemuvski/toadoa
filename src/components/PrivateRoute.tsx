import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectAuthSession } from '~/stores/auth/selector'

interface Props extends RouteProps {
  redirectPath?: string
}

const PrivateRoute: React.FC<Props> = ({ redirectPath = '/', ...props }) => {
  const session = useSelector(selectAuthSession)
  if (!session) {
    return <Redirect to={redirectPath} />
  }
  return <Route {...props} />
}

export default PrivateRoute
