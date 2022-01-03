import React from 'react'
import { CenteringFrame, CenteringFrameHeading } from '~/components/styled/CenteringFrame'
import { IconWrapper } from '~/components/styled/IconWrapper'
import { Paragraph } from '~/components/styled/Paragraph'
import LoadingIcon from '~/components/icons/LoadingIcon'

const PageSkeleton = () => (
  <CenteringFrame>
    <CenteringFrameHeading>Loading</CenteringFrameHeading>
    <Paragraph alignment='center'>
      <IconWrapper size='large'>
        <LoadingIcon />
      </IconWrapper>
    </Paragraph>
  </CenteringFrame>
)

export default PageSkeleton
