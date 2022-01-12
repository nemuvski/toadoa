import React from 'react'
import { Card, CardBody, CardList } from '~/components/styled/Card'
import ContentLoader from 'react-content-loader'

const CardSkeleton = () => {
  return (
    <Card>
      <CardBody>
        <ContentLoader
          speed={1}
          width='100%'
          height={68}
          backgroundColor='var(--color-gray-main)'
          foregroundColor='var(--color-white)'
          foregroundOpacity={0.1}
        >
          <rect x='78%' y='2' rx='3' ry='3' width='22%' height='30' />
          <rect x='0' y='42' rx='3' ry='3' width='100%' height='8' />
          <rect x='0' y='60' rx='3' ry='3' width='60%' height='8' />
        </ContentLoader>
      </CardBody>
    </Card>
  )
}

const CardListSkeleton = () => {
  return (
    <CardList>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </CardList>
  )
}

export default CardListSkeleton
