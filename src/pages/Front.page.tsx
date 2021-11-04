import React from 'react'
import LoginForm from '~/components/LoginForm'
import { Card, CardHeader, CardContentSeparator, CardBody } from '~/styles/styled/card.component'
import { CenteringLayout, CenteringLayoutHeading } from '~/styles/styled/centering-layout.component'
import { Circle } from '~/styles/styled/circle.component'

const FrontPage = () => (
  <CenteringLayout>
    <CenteringLayoutHeading>
      <Circle>🐸</Circle>
    </CenteringLayoutHeading>
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
  </CenteringLayout>
)

export default FrontPage
