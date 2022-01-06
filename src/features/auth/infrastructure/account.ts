import { supabase } from '~/libs/supabase'
import { AccountStatus, buildAccount, DatabaseAccount } from '~/features/auth/models/account'
import RestError from '~/exceptions/RestError'
import { getFormattedCurrentDate } from '~/utils/date'

const accountQueryBuilder = supabase.from<DatabaseAccount>('account')

/**
 * Accountを取得
 *
 * @param userUID 取得するUserUID
 */
export async function getAccount(userUID: Alias.UserUID) {
  const { data, error } = await accountQueryBuilder.select().eq('id', userUID)

  if (error) {
    throw new RestError(error)
  }
  if (!data || !data.length) {
    return null
  }
  // IDカラムで絞っているため、レスポンスに含まれるデータは1件または0件になる
  // さらに、上で0件の場合はnull返却するため、ここでは1件と判断できる
  return buildAccount(data[0])
}

/**
 * Accountを作成
 *
 * @param userUID 作成するUserUID
 */
export async function createAccount(userUID: Alias.UserUID) {
  const currentDateString = getFormattedCurrentDate()
  const { data, error } = await accountQueryBuilder
    .insert([{ id: userUID, status: AccountStatus.Active, createdAt: currentDateString, updatedAt: currentDateString }])
    .limit(1)
    .single()

  if (error) {
    throw new RestError(error)
  }
  if (!data) {
    throw new RestError('Failed to get the created Account entity')
  }
  return buildAccount(data)
}
