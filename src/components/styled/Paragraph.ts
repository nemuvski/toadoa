import { css } from '@emotion/react'
import styled from '@emotion/styled'

type Props = {
  alignment?: 'left' | 'center' | 'right'
}

export const Paragraph = styled.p<Props>(
  css`
    margin: 1rem 0;
    line-height: 1.5;
  `,
  ({ alignment = 'left' }) => css`
    text-align: ${alignment};
  `
)
