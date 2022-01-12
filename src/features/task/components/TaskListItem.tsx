import React from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Task } from '~/features/task/models/task'
import { Card, CardBody } from '~/components/styled/Card'
import TaskFieldDeadline from '~/features/task/components/TaskFieldDeadline'

const FieldContent = styled.div(css`
  word-break: break-all;
  line-height: 1.7;
`)

type Props = {
  task: Task
}

const TaskListItem: React.FC<Props> = ({ task }) => {
  return (
    <Card>
      <CardBody>
        <TaskFieldDeadline deadline={task.deadline} />
        <FieldContent>{task.content}</FieldContent>
      </CardBody>
    </Card>
  )
}

export default TaskListItem
