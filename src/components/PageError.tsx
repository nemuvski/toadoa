import React from 'react'
import { CenteringFrame, CenteringFrameHeading } from '~/components/styled/CenteringFrame'
import { Circle } from '~/components/styled/Circle'
import { Paragraph } from '~/components/styled/Paragraph'

const PageError = () => (
  <CenteringFrame>
    <CenteringFrameHeading>
      <Circle size='large'>😭</Circle>
    </CenteringFrameHeading>
    <Paragraph alignment='center'>Oops, an error occurred.</Paragraph>
  </CenteringFrame>
)

export default PageError
