import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const Paragraph = styled.p<{ alignment?: 'left' | 'center' | 'right' }>(
  css`
    margin: 1rem 0;
    line-height: 1.5;
  `,
  ({ alignment = 'left' }) => css`
    text-align: ${alignment};
  `
)
