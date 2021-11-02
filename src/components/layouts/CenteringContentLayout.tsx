import React from 'react'
import Styles from '~/styles/centering-content-layout.style'

const CenteringContentLayout: React.FC = ({ children }) => (
  <div css={Styles.root}>
    <div css={Styles.inner}>{children}</div>
  </div>
)

export default CenteringContentLayout
