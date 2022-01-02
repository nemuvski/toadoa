import { Dayjs } from 'dayjs'
import dayjs from '~/libs/dayjs'
import { buildEntityBase, DatabaseEntityBase, EntityBase } from '~/models/entity-base'

/**
 * Taskエンティティ
 */
export interface Task extends EntityBase {
  accountId: Alias.UserUID
  content: string
  status: TaskStatusType
  deadline: Dayjs | null
}

/**
 * DB上のTaskエンティティ
 */
export interface DatabaseTask extends DatabaseEntityBase {
  accountId: Alias.UserUID
  content: string
  status: TaskStatusType
  deadline: Alias.DateString | null
}

/**
 * Taskのステータスの内容
 */
export const TaskStatus = {
  Ready: 'ready',
  InProgress: 'in-progress',
  Done: 'done',
}
export type TaskStatusType = typeof TaskStatus[keyof typeof TaskStatus]

/**
 * Taskエンティティのオブジェクトを返却する
 *
 * @param response
 */
export function buildTask(response: DatabaseTask): Task {
  const { accountId, content, status, deadline } = response
  return {
    ...buildEntityBase(response),
    accountId,
    content,
    status,
    deadline: deadline ? dayjs(deadline) : null,
  }
}
