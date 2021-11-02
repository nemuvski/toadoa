import { css } from '@emotion/react'
import { bp, Breakpoint } from '~/styles/mixins/breakpoints.mixin'

const variables = css`
  :root {
    --size-border-radius: 0.2rem;
    --color-black: rgb(6, 9, 10);
    --color-white: rgb(251, 253, 255);
    --color-gray: rgba(236, 238, 240);
    --color-scrollbar: rgba(180, 188, 196, 0.8);
    --color-shadow: rgb(184, 187, 188, 0.2);
  }
`

export default css(
  variables,
  css`
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    html {
      overflow: hidden;
      height: 100vh;
      max-height: 100vh;
      min-height: -webkit-fill-available;
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

    body,
    #app {
      height: 100%;
      margin: 0;
      padding: 0;
    }

    body {
      text-rendering: optimizeSpeed;
      background-color: var(--color-white);
      color: var(--color-black);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Noto Sans', Ubuntu, Cantarell,
        'Helvetica Neue', sans-serif;
      font-size: 1rem;
      letter-spacing: 0.02rem;
      line-height: 1.15;
    }

    h1 {
      margin: 0;
    }

    img,
    picture {
      display: block;
      max-width: 100%;
    }
  `
)
