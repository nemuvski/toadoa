import React from 'react'
import usePageTitle from '~/hooks/usePageTitle'
import TaskDashboard from '~/features/task/components/TaskDashboard'
import { SelectTaskStatusProvider } from '~/features/task/Context/SelectTaskStatusProvider'

const DashboardPage = () => {
  usePageTitle('Dashboard')

  return (
    <SelectTaskStatusProvider>
      <TaskDashboard />
    </SelectTaskStatusProvider>
  )
}

export default DashboardPage
