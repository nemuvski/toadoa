import { css } from '@emotion/react'

const root = css`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 1.25rem;
  background-color: var(--color-gray);
`

const inner = css`
  overflow-y: auto;
  width: 100%;
  max-width: 540px;
  height: auto;
  max-height: 100%;
  margin: auto;
  box-shadow: 0 0.4rem 0.6rem var(--color-shadow);
  background-color: var(--color-white);
  border-radius: var(--size-border-radius);
  text-align: center;
`

export default {
  root,
  inner,
}
