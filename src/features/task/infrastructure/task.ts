import { supabase } from '~/libs/supabase'
import RestError from '~/exceptions/RestError'
import { getSavingDateString } from '~/utils/date'
import { buildTask, DatabaseTask, FormTask } from '~/features/task/models/task'

const taskQueryBuilder = supabase.from<DatabaseTask>('task')

/**
 * Taskを作成
 */
export async function insertTask(userUID: Alias.UserUID, formTask: FormTask) {
  const { content, status, deadline } = formTask

  const { data, error } = await taskQueryBuilder
    .insert([
      {
        uid: userUID,
        content,
        status,
        deadline: getSavingDateString(deadline),
      },
    ])
    .limit(1)
    .single()

  if (error) {
    throw new RestError(error)
  }
  if (!data) {
    throw new RestError('Failed to get the created Task entity')
  }
  return buildTask(data)
}
