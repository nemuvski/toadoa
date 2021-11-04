import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const CenteringLayout = styled.div(
  css`
    width: 100%;
    max-width: calc(420px + 2rem);
    height: auto;
    max-height: 100%;
    margin: 5rem auto;
    padding: 0 1rem;
  `
)

export const CenteringLayoutHeading = styled.h1(
  css`
    margin-bottom: 2.8rem;
    font-size: 1.6rem;
    text-align: center;
    line-height: 1.5;
  `
)
