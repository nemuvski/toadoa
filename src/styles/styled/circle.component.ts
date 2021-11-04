import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const Circle = styled.div(
  css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
    background-color: var(--color-gray-dark);
    border-radius: 50%;
    font-size: 2rem;
  `
)
