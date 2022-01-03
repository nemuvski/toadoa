import { css } from '@emotion/react'
import styled from '@emotion/styled'

type ButtonProps = {
  color?: 'primary' | 'secondary'
}

export const Button = styled.button<ButtonProps>(
  css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    min-height: 2.25rem;
    padding: 0.2rem 0.8rem;
    border-radius: var(--size-border-radius);
    letter-spacing: 0.08rem;
    line-height: 1.15;
  `,
  ({ color }) => {
    let bgColor = 'var(--color-gray-dark)'
    if (color === 'primary') {
      bgColor = 'var(--color-primary-main)'
    } else if (color === 'secondary') {
      bgColor = 'var(--color-secondary-main)'
    }
    return css`
      background-color: ${bgColor};
      color: var(--color-white);
    `
  }
)
Button.defaultProps = {
  type: 'button',
}

export const ButtonIcon = styled.i(
  css`
    display: inline-block;
    width: 1.2rem;
    font-style: normal;

    svg {
      width: 100%;
      height: auto;
      vertical-align: middle;
    }
  `
)
ButtonIcon.defaultProps = {
  'aria-hidden': true,
}
