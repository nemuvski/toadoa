import { useMutation, useQuery } from 'react-query'
import { useAuthUser } from '~/features/auth/hooks/auth'
import { getTasks, insertTask } from '~/features/task/infrastructure/task'
import { FormTask, TaskStatusType } from '~/features/task/models/task'

export function useFetchTask(status: TaskStatusType) {
  const authUser = useAuthUser()
  return useQuery(['task/get', status], () => getTasks(authUser.id, status))
}

export function useInsertTask() {
  const authUser = useAuthUser()
  return useMutation('task/create', (formTask: FormTask) => insertTask(authUser.id, formTask))
}
