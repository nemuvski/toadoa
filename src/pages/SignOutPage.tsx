import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSignOut } from '~/features/auth/hooks/auth'
import LoadingIcon from '~/components/icons/LoadingIcon'
import { CenteringFrameHeading } from '~/components/styled/CenteringFrame'
import { Paragraph } from '~/components/styled/Paragraph'
import { Card, CardBody } from '~/components/styled/Card'
import { IconWrapper } from '~/components/styled/IconWrapper'

const SignOutPage = () => {
  const navigate = useNavigate()
  const signOutMutation = useSignOut()

  useEffect(() => {
    signOutMutation.mutateAsync().finally(() => {
      navigate('/', { replace: true })
    })
  }, [navigate, signOutMutation])

  return (
    <>
      <CenteringFrameHeading>Sign out</CenteringFrameHeading>
      <Card>
        <CardBody>
          <Paragraph alignment='center'>Processing...</Paragraph>
          <Paragraph alignment='center'>
            <IconWrapper size='large'>
              <LoadingIcon />
            </IconWrapper>
          </Paragraph>
        </CardBody>
      </Card>
    </>
  )
}

export default SignOutPage
