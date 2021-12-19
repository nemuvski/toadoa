import { useEffect } from 'react'
import { SITE_NAME } from '~/constants/page'

export default function usePageTitle(pageTitle?: string) {
  useEffect(() => {
    if (pageTitle) {
      document.title = `${pageTitle} — ${SITE_NAME}`
    } else {
      document.title = SITE_NAME
    }
  }, [pageTitle])
}
