import React from 'react'
import { TaskStatusType } from '~/features/task/models/task'
import { useFetchTask } from '~/features/task/hooks/task'
import TaskListItem from '~/features/task/components/TaskListItem'
import { CardList } from '~/components/styled/Card'
import { Paragraph } from '~/components/styled/Paragraph'

type Props = {
  status: TaskStatusType
}

const TaskList: React.FC<Props> = ({ status }) => {
  const { data: tasks } = useFetchTask(status)

  if (!tasks || !tasks.length) {
    return <Paragraph alignment='center'>No task</Paragraph>
  }

  return (
    <CardList>
      {tasks.map((task) => {
        return <TaskListItem key={task.id} task={task} />
      })}
    </CardList>
  )
}

export default TaskList
