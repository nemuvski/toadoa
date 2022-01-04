import { useForm } from 'react-hook-form'
import { formatDateYMD } from '~/utils/date'
import { Task, TaskStatus, TaskStatusType } from '~/features/task/models/task'

type TaskFormFields = {
  content: string
  deadline: Alias.DateString
  status: TaskStatusType
}

export function useTaskForm(task?: Task) {
  return useForm<TaskFormFields>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      content: task ? task.content : '',
      deadline: task && task.deadline ? formatDateYMD(task.deadline) : '',
      status: task ? task.status : TaskStatus.Ready,
    },
  })
}
