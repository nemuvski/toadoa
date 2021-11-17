import React from 'react'
import LoginForm from '~/features/auth/components/LoginForm'
import { Card, CardHeader, CardContentSeparator, CardBody } from '~/components/Card.styled'
import { CenteringFrameHeading } from '~/components/CenteringFrame.styled'
import { Circle } from '~/components/Circle.styled'

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
