import { useMutation } from 'react-query'
import { useAuthUser } from '~/features/auth/hooks/auth'
import { insertTask } from '~/features/task/infrastructure/task'
import { FormTask } from '~/features/task/models/task'

export function useInsertTask() {
  const authUser = useAuthUser()
  return useMutation('task/create', (formTask: FormTask) => insertTask(authUser.id, formTask))
}
