import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const Form = styled.form()
Form.defaultProps = {
  onSubmit: (ev) => ev.preventDefault(),
}

export const FormActions = styled.div(
  css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.6rem;
    margin-top: 1rem;
  `
)

export const FormTextInput = styled.input(
  css`
    display: block;
    width: 100%;
    padding: 0.5rem 0.8rem;
    border-radius: var(--size-border-radius);
    border-width: 1px;
    border-style: solid;
    border-color: var(--color-gray-main);
    // 固定
    font-size: 16px;
  `
)
FormTextInput.defaultProps = {
  type: 'text',
}
