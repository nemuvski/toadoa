import { supabase } from '~/libs/supabase'
import RestError from '~/exceptions/RestError'
import { buildTask, DatabaseTask, FormTask, Task, TaskStatusType } from '~/features/task/models/task'

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
        deadline: deadline || null,
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

export async function updateTask(preTask: Task, formTask: FormTask) {
  const { content, status, deadline } = formTask

  const { data, error } = await supabase
    .from<DatabaseTask>('task')
    .update({
      content,
      status,
      deadline: deadline || null,
    })
    .eq('id', preTask.id)
    .limit(1)
    .single()

  if (error) {
    throw new RestError(error)
  }
  if (!data) {
    throw new RestError('Failed to get the updated Task entity')
  }
  return buildTask(data)
}

export async function deleteTask(id: Alias.UUIDV4) {
  const { error } = await supabase.from<DatabaseTask>('task').delete().match({ id })

  if (error) {
    throw new RestError(error)
  }
}
