import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const Form = styled.form()
Form.defaultProps = {
  onSubmit: (ev) => ev.preventDefault(),
}

export const FormField = styled.div<{ withLabel?: boolean }>(
  css`
    margin: 1rem 0;
  `,
  ({ withLabel = false }) => {
    if (withLabel) {
      return css`
        display: flex;
        align-items: center;
        gap: 0.6rem;

        > label {
          display: block;
          min-width: 4.5rem;
          font-size: 0.9rem;
          font-weight: normal;

          &::after {
            content: ':';
          }
        }
      `
    }
  }
)

export const FormFieldHelp = styled.p(
  css`
    margin: 0.25rem 0;
    font-size: 0.9rem;
    text-align: right;
    line-height: 1.5;
  `
)

export const FormActions = styled.div(
  css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.6rem;
    margin-top: 1rem;
  `
)

const inputBaseStyle = css`
  display: block;
  height: 2.5rem;
  padding: 0.5rem 0.8rem;
  border-radius: var(--size-border-radius);
  border-width: 1px;
  border-style: solid;
  border-color: var(--color-gray-main);
  font-size: 0.8rem;
`

export const FormTextInput = styled.input(
  inputBaseStyle,
  css`
    width: 100%;
    // 固定
    font-size: 16px;
  `
)
FormTextInput.defaultProps = {
  type: 'text',
}

export const FormDateInput = styled.input(
  inputBaseStyle,
  css`
    width: 11rem;
  `
)
FormDateInput.defaultProps = {
  type: 'date',
  pattern: '\\d{4}-\\d{2}-\\d{2}',
}

export const FormSelect = styled.select(
  inputBaseStyle,
  css`
    width: 11rem;
    appearance: none;
  `
)
FormSelect.defaultProps = {
  multiple: false,
}
