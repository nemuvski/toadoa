import React, { Suspense, useContext } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { SelectTaskStatusContext } from '~/features/task/Context/SelectTaskStatusProvider'
import { TaskStatus } from '~/features/task/models/task'
import TaskCreateForm from '~/features/task/components/TaskCreateForm'
import TaskList from '~/features/task/components/TaskList'
import CardListSkeleton from '~/components/CardListSkeleton'
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
  const { status, changeStatus } = useContext(SelectTaskStatusContext)

  return (
    <>
      <StatusSelector>
        <Button
          onClick={() => changeStatus(TaskStatus.Ready)}
          color={TaskStatus.Ready === status ? 'primary' : undefined}
          disabled={TaskStatus.Ready === status}
        >
          Ready
        </Button>
        <Button
          onClick={() => changeStatus(TaskStatus.InProgress)}
          color={TaskStatus.InProgress === status ? 'primary' : undefined}
          disabled={TaskStatus.InProgress === status}
        >
          In progress
        </Button>
        <Button
          onClick={() => changeStatus(TaskStatus.Done)}
          color={TaskStatus.Done === status ? 'primary' : undefined}
          disabled={TaskStatus.Done === status}
        >
          Done
        </Button>
      </StatusSelector>

      <TaskCreateForm />

      <ErrorBoundary fallback={<Paragraph alignment='center'>Oops, an error occurred.</Paragraph>}>
        <Suspense fallback={<CardListSkeleton />}>
          <TaskList status={status} />
        </Suspense>
      </ErrorBoundary>
    </>
  )
}

export default TaskDashboard
