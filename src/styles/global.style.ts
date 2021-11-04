import { css } from '@emotion/react'
import { bp, Breakpoint } from '~/styles/mixins/breakpoints.mixin'

const variables = css`
  :root {
    --size-border-radius: 0.2rem;
    --color-scrollbar: rgba(180, 188, 196, 0.8);
    --color-shadow: rgb(184, 187, 188, 0.2);
    --color-black: rgb(12, 18, 20);
    --color-white: rgb(252, 253, 254);
    --color-gray-main: rgba(239, 240, 243);
    --color-gray-dark: rgb(57, 62, 70);
    --color-primary-light: rgb(170, 216, 211);
    --color-primary-main: rgb(0, 173, 181);
    --color-primary-dark: rgb(12, 66, 113);
    --color-secondary-light: rgb(245, 111, 173);
    --color-secondary-main: rgb(195, 43, 173);
    --color-secondary-dark: rgb(112, 39, 160);
    --color-success-dark: rgb(30, 71, 32);
    --color-success-main: rgb(93, 182, 97);
    --color-success-light: rgb(237, 247, 237);
    --color-info-dark: rgb(0, 67, 97);
    --color-info-main: rgb(38, 178, 245);
    --color-info-light: rgb(230, 246, 253);
    --color-warning-dark: rgb(102, 60, 0);
    --color-warning-main: rgb(255, 162, 41);
    --color-warning-light: rgb(255, 244, 229);
    --color-error-dark: rgb(95, 34, 33);
    --color-error-main: rgb(241, 100, 97);
    --color-error-light: rgb(253, 237, 237);
  }
`

const baseStyles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 15px;
    ${bp(Breakpoint.M_MIN)} {
      font-size: 16px;
    }
  }

  ::-webkit-scrollbar {
    width: 0.8rem;
  }
  ::-webkit-scrollbar-track {
    border-radius: 0.8rem;
  }
  ::-webkit-scrollbar-thumb {
    border: 0.2rem solid transparent;
    background-color: var(--color-scrollbar);
    background-clip: content-box;
    border-radius: 0.8rem;
  }

  ::selection {
    background-color: var(--color-primary-main);
    color: var(--color-white);
  }

  body {
    margin: 0;
    text-rendering: optimizeSpeed;
    background-color: var(--color-gray-main);
    color: var(--color-black);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Noto Sans', Ubuntu, Cantarell, 'Helvetica Neue',
      sans-serif;
    font-size: 1rem;
    letter-spacing: 0.02rem;
    line-height: 1.15;
  }

  h1,
  h2 {
    margin: 0;
    font-weight: bold;
  }

  p {
    margin: 0;
  }

  img,
  picture {
    display: block;
    max-width: 100%;
  }

  input,
  button {
    appearance: none;
    &:disabled {
      cursor: not-allowed;
      opacity: 0.8;
    }
  }

  button {
    padding: 0;
    cursor: pointer;
    outline: none;
    border: 0;
    background-color: transparent;
  }

  svg {
    width: 100%;
    height: auto;
    vertical-align: middle;
  }
`

export default css(variables, baseStyles)
