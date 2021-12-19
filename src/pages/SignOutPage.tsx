import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '~/stores/store'
import { clearAccountState } from '~/features/auth/stores/account.slice'
import useAuth from '~/features/auth/hooks/useAuth'
import LoadingIcon from '~/components/icons/LoadingIcon'
import { CenteringFrameHeading } from '~/components/styled/CenteringFrame'
import { Paragraph } from '~/components/styled/Paragraph'
import { Card, CardBody } from '~/components/styled/Card'
import { IconWrapper } from '~/components/styled/IconWrapper'

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
