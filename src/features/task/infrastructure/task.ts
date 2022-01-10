import { supabase } from '~/libs/supabase'
import RestError from '~/exceptions/RestError'
import { getSavingDateString } from '~/utils/date'
import { buildTask, DatabaseTask, FormTask, TaskStatusType } from '~/features/task/models/task'

/**
 * Taskを取得
 */
export async function getTasks(status: TaskStatusType) {
  const { data, error } = await supabase
    .from<DatabaseTask>('task')
    .select()
    // uidについてはRLSで絞られるので、ここでのクエリ条件は省略できる
    .eq('status', status)
    .order('updatedAt', { ascending: false })

  if (error) {
    throw new RestError(error)
  }
  if (!data) {
    throw new RestError('Failed to get Task entities')
  }
  return data.map((task) => buildTask(task))
}

/**
 * Taskを作成
 */
export async function insertTask(userUID: Alias.UserUID, formTask: FormTask) {
  const { content, status, deadline } = formTask

  const { data, error } = await supabase
    .from<DatabaseTask>('task')
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
