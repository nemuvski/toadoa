import React from 'react'
import LoginForm from '~/features/auth/components/LoginForm'
import { Card, CardHeader, CardContentSeparator, CardBody } from '~/styles/styled/card.component'
import { CenteringFrameHeading } from '~/styles/styled/centering-frame.component'
import { Circle } from '~/styles/styled/circle.component'

const FrontPage = () => (
  <>
    <CenteringFrameHeading>
      <Circle>🐸</Circle>
    </CenteringFrameHeading>
    <Card>
      <CardHeader>
        <h2>ToaDoa</h2>
        <p>
          This application is a personal to-do list.
          <br />
          Sign in and get started!
        </p>
      </CardHeader>
      <CardContentSeparator />
      <CardBody>
        <LoginForm />
      </CardBody>
    </Card>
  </>
)

export default FrontPage
