import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '~/features/auth/hooks/useAuth'
import LoadingIcon from '~/components/icons/LoadingIcon'
import Styles from '~/styles/SignOutPage'
import { CenteringFrameHeading } from '~/styles/CenteringFrame.styled'
import { Paragraph } from '~/styles/Paragraph.styled'

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
      <Paragraph alignment='center'>
        <LoadingIcon css={Styles.loadingIcon} />
      </Paragraph>
    </>
  )
}

export default SignOutPage
