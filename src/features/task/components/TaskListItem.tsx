import React, { useState } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Either from '~/components/Either'
import { Task } from '~/features/task/models/task'
import { Card, CardBody, CardHeaderCancelButton } from '~/components/styled/Card'
import TaskFieldDeadline from '~/features/task/components/TaskFieldDeadline'
import TaskForm from '~/features/task/components/TaskForm'

const FieldContent = styled.div(css`
  word-break: break-all;
  line-height: 1.7;
`)

type Props = {
  task: Task
}

const TaskListItem: React.FC<Props> = ({ task }) => {
  const [isEditMode, setIsEditMode] = useState(false)

  return (
    <Card clickable={!isEditMode} onClick={() => !isEditMode && setIsEditMode(true)}>
      <CardBody>
        <Either
          test={isEditMode}
          match={
            <div onClick={(event) => event.stopPropagation()}>
              <CardHeaderCancelButton onClick={() => setIsEditMode(false)}>Cancel</CardHeaderCancelButton>
              <TaskForm task={task} />
            </div>
          }
          not={
            <>
              <TaskFieldDeadline deadline={task.deadline} />
              <FieldContent>{task.content}</FieldContent>
            </>
          }
        />
      </CardBody>
    </Card>
  )
}

export default TaskListItem
