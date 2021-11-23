import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '~/stores/Store'
import { clearAccountState } from '~/features/auth/stores/Account.slice'
import useAuth from '~/features/auth/hooks/useAuth'
import LoadingIcon from '~/components/icons/LoadingIcon'
import { CenteringFrameHeading } from '~/components/CenteringFrame.styled'
import { Paragraph } from '~/components/Paragraph.styled'
import { Card, CardBody } from '~/components/Card.styled'
import { IconWrapper } from '~/components/IconWrapper.styled'

const SignOutPage = () => {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const { signOut } = useAuth()

  useEffect(() => {
    const process = async () => {
      await signOut()
      // ストアをクリア
      dispatch(clearAccountState())
    }
    process().finally(() => {
      navigate('/', { replace: true })
    })
  }, [dispatch, navigate, signOut])

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
