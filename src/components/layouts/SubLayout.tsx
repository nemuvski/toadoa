import React from 'react'
import { Outlet } from 'react-router-dom'
import { CenteringFrame } from '~/components/styled/CenteringFrame'

const SubLayout = () => (
  <CenteringFrame>
    <Outlet />
  </CenteringFrame>
)

export default SubLayout
