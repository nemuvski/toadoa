import React from 'react'
import { CenteringFrame, CenteringFrameHeading } from '~/components/CenteringFrame.styled'
import { IconWrapper } from '~/components/IconWrapper.styled'
import { Paragraph } from '~/components/Paragraph.styled'
import LoadingIcon from '~/components/icons/LoadingIcon'

const PageLoadingSkeleton = () => (
  <CenteringFrame>
    <CenteringFrameHeading>Loading</CenteringFrameHeading>
    <Paragraph alignment='center'>
      <IconWrapper size='large'>
        <LoadingIcon />
      </IconWrapper>
    </Paragraph>
  </CenteringFrame>
)

export default PageLoadingSkeleton
