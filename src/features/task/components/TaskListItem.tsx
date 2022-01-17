import React, { useRef, useState } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { BiTrash } from 'react-icons/bi'
import useEscKeydown from '~/hooks/useEscKeydown'
import Either from '~/components/Either'
import { Task } from '~/features/task/models/task'
import { Card, CardBody, CardHeaderAction, CardHeaderActionButton } from '~/components/styled/Card'
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
  const elementRef = useRef<HTMLDivElement | null>(null)
  useEscKeydown(elementRef, () => setIsEditMode(false))

  return (
    <Card clickable={!isEditMode} onClick={() => !isEditMode && setIsEditMode(true)}>
      <CardBody>
        <Either
          test={isEditMode}
          match={
            <div ref={elementRef} onClick={(event) => event.stopPropagation()}>
              <CardHeaderAction>
                <CardHeaderActionButton onClick={() => setIsEditMode(false)}>
                  Cancel [<kbd>ESC</kbd>]
                </CardHeaderActionButton>
                <CardHeaderActionButton color='secondary'>
                  <BiTrash />
                  Delete
                </CardHeaderActionButton>
              </CardHeaderAction>
              <TaskForm task={task} actionAfterSubmit={() => setIsEditMode(false)} />
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
