import React from 'react'
import usePageTitle from '~/hooks/usePageTitle'
import TaskDashboard from '~/features/task/components/TaskDashboard'

const DashboardPage = () => {
  usePageTitle('Dashboard')

  return <TaskDashboard />
}

export default DashboardPage
