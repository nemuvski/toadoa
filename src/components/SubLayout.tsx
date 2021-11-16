import React from 'react'
import { Outlet } from 'react-router-dom'
import { CenteringFrame } from '~/styles/CenteringFrame.styled'

const SubLayout = () => (
  <CenteringFrame>
    <Outlet />
  </CenteringFrame>
)

export default SubLayout
