import React, { createContext, useState } from 'react'
import { TaskStatus, TaskStatusType } from '~/features/task/models/task'

export type SelectTaskStatus = {
  status: TaskStatusType
  changeStatus: (status: TaskStatusType) => void
}

export const SelectTaskStatusContext = createContext<SelectTaskStatus>({
  status: TaskStatus.Ready,
  changeStatus: () => {
    // Providerで実装される
  },
})

export const SelectTaskStatusProvider: React.FC = ({ children }) => {
  const [viewStatus, setViewStatus] = useState<TaskStatusType>(TaskStatus.Ready)

  return (
    <SelectTaskStatusContext.Provider
      value={{
        status: viewStatus,
        changeStatus: (status: TaskStatusType) => setViewStatus(status),
      }}
    >
      {children}
    </SelectTaskStatusContext.Provider>
  )
}
