import React from 'react'
import { Outlet } from 'react-router-dom'
import { CenteringFrame } from '~/components/styled/CenteringFrame'

const Layout = () => (
  <CenteringFrame>
    <Outlet />
  </CenteringFrame>
)

export default Layout
