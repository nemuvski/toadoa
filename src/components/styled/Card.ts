import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const Card = styled.div<{ clickable?: boolean }>(
  css`
    width: 100%;
    box-shadow: 0 0.4rem 0.6rem var(--color-shadow);
    background-color: var(--color-white);
    border-radius: var(--size-border-radius);
  `,
  ({ clickable = false }) => {
    if (clickable) {
      return css`
        cursor: pointer;

        &:hover {
          box-shadow: 0 0.1rem 0.15rem var(--color-shadow);
        }
      `
    }
  }
)

export const CardHeaderAction = styled.div(
  css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `
)

export const CardHeaderActionButton = styled.button<{ color?: 'primary' | 'secondary' }>(
  css`
    display: flex;
    align-items: center;
    gap: 0.2rem;
    padding: 0.1rem;

    &:hover {
      text-decoration: underline;
    }
  `,
  ({ color = 'primary' }) => {
    if (color === 'primary') {
      return css`
        color: var(--color-primary-main);
      `
    } else if (color === 'secondary') {
      return css`
        color: var(--color-secondary-main);
      `
    }
  }
)
CardHeaderActionButton.defaultProps = { type: 'button' }

export const CardHeader = styled.div(
  css`
    padding: 2.5rem 1rem;
    text-align: center;

    h2 {
      letter-spacing: 0.08rem;
    }
    h2 + p {
      margin-top: 1rem;
      line-height: 1.5;
    }
  `
)

export const CardContentSeparator = styled.hr(css`
  margin: 0;
  border: 0;
  border-top: 1px solid var(--color-shadow);
`)

export const CardBody = styled.div(
  css`
    padding: 1rem;
  `
)

export const CardList = styled.div(css`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`)
