import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '~/features/auth/hooks/useAuth'
import LoadingIcon from '~/components/icons/LoadingIcon'
import { CenteringFrameHeading } from '~/components/CenteringFrame.styled'
import { Paragraph } from '~/components/Paragraph.styled'
import { Card, CardBody } from '~/components/Card.styled'
import { IconWrapper } from '~/components/IconWrapper.styled'

const SignOutPage = () => {
  const navigate = useNavigate()
  const { signOut } = useAuth()

  useEffect(() => {
    const process = async () => {
      await signOut()
    }
    process().finally(() => {
      navigate('/', { replace: true })
    })
  }, [navigate, signOut])

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
