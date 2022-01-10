import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useAuthUser } from '~/features/auth/hooks/auth'
import { getTasks, insertTask } from '~/features/task/infrastructure/task'
import { FormTask, TaskStatusType } from '~/features/task/models/task'

export function useFetchTask(status: TaskStatusType) {
  return useQuery(['task/get', { type: status }], () => getTasks(status))
}

export function useInsertTask() {
  const authUser = useAuthUser()
  const queryClient = useQueryClient()
  return useMutation('task/create', (formTask: FormTask) => insertTask(authUser.id, formTask), {
    onSuccess: (responseTask) => {
      queryClient.invalidateQueries(['task/get', { type: responseTask.status }])
    },
  })
}
