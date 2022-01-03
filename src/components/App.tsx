import React, { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { queryClient } from '~/libs/react-query'
import AppRouter from '~/components/AppRouter'
import PageSkeleton from '~/components/PageSkeleton'
import PageError from '~/components/PageError'

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary fallback={<PageError />}>
        <Suspense fallback={<PageSkeleton />}>
          <AppRouter />
        </Suspense>
      </ErrorBoundary>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
