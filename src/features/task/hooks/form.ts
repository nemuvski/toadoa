import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { formatDateYMD } from '~/utils/date'
import { SelectTaskStatusContext } from '~/features/task/context/SelectTaskStatusProvider'
import { Task, TaskStatusType } from '~/features/task/models/task'

type TaskFormFields = {
  content: string
  deadline: Alias.DateString
  status: TaskStatusType
}

export function useTaskForm(task?: Task) {
  const { status } = useContext(SelectTaskStatusContext)

  return useForm<TaskFormFields>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      content: task ? task.content : '',
      deadline: task && task.deadline ? formatDateYMD(task.deadline) : '',
      // 新規作成時のステータスの初期値は、現在選択している（一覧で表示している）ステータスとする
      status: task ? task.status : status,
    },
  })
}
