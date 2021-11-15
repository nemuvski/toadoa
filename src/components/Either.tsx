import React from 'react'

type Props = {
  test: boolean
  match: React.ReactNode
  not: React.ReactNode
}

const Either: React.FC<Props> = ({ test, match, not }) => <>{test ? <>{match}</> : <>{not}</>}</>

export default Either
