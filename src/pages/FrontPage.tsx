import React from 'react'
import LoginForm from '~/features/auth/components/LoginForm'
import { Card, CardHeader, CardContentSeparator, CardBody } from '~/components/styled/Card'
import { CenteringFrameHeading } from '~/components/styled/CenteringFrame'
import { Circle } from '~/components/styled/Circle'

const FrontPage = () => (
  <>
    <CenteringFrameHeading>
      <Circle size='large'>🐸</Circle>
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
