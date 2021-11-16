import React from 'react'
import { Outlet } from 'react-router-dom'
import { CenteringFrame } from '~/styles/styled/centering-frame.component'

const SubLayout = () => (
  <CenteringFrame>
    <Outlet />
  </CenteringFrame>
)

export default SubLayout
