import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const Card = styled.div(
  css`
    width: 100%;
    box-shadow: 0 0.4rem 0.6rem var(--color-shadow);
    background-color: var(--color-white);
    border-radius: var(--size-border-radius);
  `
)

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
