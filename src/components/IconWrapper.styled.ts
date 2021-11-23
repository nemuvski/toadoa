import { css } from '@emotion/react'
import styled from '@emotion/styled'

type IconWrapperProps = {
  size?: 'small' | 'medium' | 'large'
}

export const IconWrapper = styled.i<IconWrapperProps>(
  css`
    display: inline-block;
  `,
  ({ size = 'medium' }) => {
    let width = '1.5rem'
    if (size === 'large') {
      width = '2rem'
    } else if (size === 'small') {
      width = '1rem'
    }
    return css`
      width: ${width};
    `
  }
)
