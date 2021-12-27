import { css } from '@emotion/react'
import styled from '@emotion/styled'

type CircleProps = {
  size?: 'large' | 'medium'
}

export const Circle = styled.div<CircleProps>(
  css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-gray-dark);
    border-radius: 50%;
    line-height: 1;
  `,
  ({ size = 'medium' }) => {
    if (size === 'medium') {
      return css`
        width: 3.25rem;
        height: 3.25rem;
        font-size: 1.75rem;
      `
    }
    if (size === 'large') {
      return css`
        width: 4rem;
        height: 4rem;
        font-size: 2rem;
      `
    }
  }
)
