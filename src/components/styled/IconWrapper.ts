import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const IconWrapper = styled.i<{ size?: 'small' | 'medium' | 'large' }>(
  css`
    display: inline-block;

    svg {
      width: 100%;
      height: auto;
      vertical-align: middle;
    }
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
