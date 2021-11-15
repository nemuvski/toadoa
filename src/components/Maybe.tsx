import React from 'react'

type Props = {
  test: boolean
}

const Maybe: React.FC<Props> = ({ test, children }) => <>{test && children}</>

export default Maybe
