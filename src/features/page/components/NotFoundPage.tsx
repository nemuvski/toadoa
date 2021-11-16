import React from 'react'
import usePageTitle from '~/features/page/hooks/usePageTitle'

const NotFoundPage = () => {
  usePageTitle('Not found')

  return <div>The link you followed probably broken, or the page has been removed.</div>
}

export default NotFoundPage
