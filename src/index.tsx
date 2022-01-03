import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Global } from '@emotion/react'
import App from '~/components/App'
import Styles from '~/styles/global'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Global styles={Styles} />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('app')
)
