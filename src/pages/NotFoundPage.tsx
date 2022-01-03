import React from 'react'
import usePageTitle from '~/hooks/usePageTitle'
import { Card, CardBody } from '~/components/styled/Card'
import { CenteringFrameHeading } from '~/components/styled/CenteringFrame'
import { Circle } from '~/components/styled/Circle'
import { Paragraph } from '~/components/styled/Paragraph'

const NotFoundPage = () => {
  usePageTitle('Page not found')

  return (
    <>
      <CenteringFrameHeading>
        <Circle size='large'>👻</Circle>
      </CenteringFrameHeading>
      <Card>
        <CardBody>
          <Paragraph>The link you followed probably broken, or the page has been removed.</Paragraph>
        </CardBody>
      </Card>
    </>
  )
}

export default NotFoundPage
