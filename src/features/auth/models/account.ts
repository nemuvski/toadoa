import { buildEntityBase, EntityBase, DatabaseEntityBase } from '~/models/entity-base'

/**
 * Accountエンティティ
 */
export interface Account extends EntityBase {
  status: AccountStatusType
}

/**
 * DB上のAccountエンティティ
 */
export interface DatabaseAccount extends DatabaseEntityBase {
  status: AccountStatusType
}

/**
 * Accountのステータスの内容
 */
export const AccountStatus = {
  Active: 'active',
  Inactive: 'inactive',
} as const
export type AccountStatusType = typeof AccountStatus[keyof typeof AccountStatus]

/**
 * Accountエンティティのオブジェクトを返却する
 *
 * @param response
 */
export function buildAccount(response: DatabaseAccount): Account {
  return {
    ...buildEntityBase(response),
    status: response.status,
  }
}
