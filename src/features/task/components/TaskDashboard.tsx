import React, { useState } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { TaskStatus, TaskStatusType } from '~/features/task/models/task'
import TaskCreateForm from '~/features/task/components/TaskCreateForm'
import { Button } from '~/components/styled/Button'
import { Paragraph } from '~/components/styled/Paragraph'

const StatusSelector = styled.div(
  css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;

    > button {
      width: 100%;
      padding-right: 0.4rem;
      padding-left: 0.4rem;
    }
  `
)

const TaskDashboard = () => {
  const [viewStatus, setViewStatus] = useState<TaskStatusType>(TaskStatus.Ready)

  return (
    <>
      <StatusSelector>
        <Button
          onClick={() => setViewStatus(TaskStatus.Ready)}
          color={TaskStatus.Ready === viewStatus ? 'primary' : undefined}
          disabled={TaskStatus.Ready === viewStatus}
        >
          Ready
        </Button>
        <Button
          onClick={() => setViewStatus(TaskStatus.InProgress)}
          color={TaskStatus.InProgress === viewStatus ? 'primary' : undefined}
          disabled={TaskStatus.InProgress === viewStatus}
        >
          In progress
        </Button>
        <Button
          onClick={() => setViewStatus(TaskStatus.Done)}
          color={TaskStatus.Done === viewStatus ? 'primary' : undefined}
          disabled={TaskStatus.Done === viewStatus}
        >
          Done
        </Button>
      </StatusSelector>

      <TaskCreateForm />

      <Paragraph alignment='center'>No data</Paragraph>
    </>
  )
}

export default TaskDashboard
