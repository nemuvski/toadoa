import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { IoLogOutOutline } from 'react-icons/io5'
import { Button, ButtonIcon } from '~/components/styled/Button'
import { Circle } from '~/components/styled/Circle'
import { useCheckAccount } from '~/features/auth/hooks/account'
import PageSkeleton from '~/components/PageSkeleton'

const Header = styled.header(
  css`
    position: fixed;
    z-index: 10;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    backdrop-filter: blur(1px);
  `
)

const HeaderInner = styled.div(
  css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: calc(650px + 1rem);
    margin: 0 auto;
    padding: 0.75rem 0.5rem;
  `
)

const Main = styled.main(
  css`
    width: 100%;
    max-width: calc(600px + 1rem);
    margin: 8rem auto 5rem;
    padding: 0 0.5rem;
  `
)

const AuthUserLayout = () => {
  const navigate = useNavigate()
  const isLoading = useCheckAccount()

  if (isLoading) {
    return <PageSkeleton />
  }

  return (
    <>
      <Header>
        <HeaderInner>
          <Circle>🐸</Circle>
          <Button onClick={() => navigate('/sign-out')}>
            <ButtonIcon>
              <IoLogOutOutline />
            </ButtonIcon>
            Sign out
          </Button>
        </HeaderInner>
      </Header>
      <Main>
        <Outlet />
      </Main>
    </>
  )
}

export default AuthUserLayout
