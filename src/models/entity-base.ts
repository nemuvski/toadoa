import { Dayjs } from 'dayjs'
import dayjs from '~/libs/dayjs'

/**
 * アプリケーション上で扱うエンティティベース
 */
export interface EntityBase {
  id: Alias.UUIDV4
  createdAt: Dayjs
  updatedAt: Dayjs
}

/**
 * DB上のデータのエンティティベース
 */
export interface DatabaseEntityBase {
  id: Alias.UUIDV4
  createdAt: Alias.DateString
  updatedAt: Alias.DateString
}

/**
 * EntityBaseのオブジェクトを返却する
 *
 * @param response Supabaseから取得したエンティティデータ
 */
export const buildEntityBase = (response: DatabaseEntityBase) => {
  const { id, createdAt, updatedAt } = response
  return {
    id,
    createdAt: dayjs(createdAt),
    updatedAt: dayjs(updatedAt),
  }
}
