import { supabase } from '~/libs/supabase'
import { AccountStatus, buildAccount, DatabaseAccount } from '~/features/auth/models/account'
import RestError from '~/exceptions/RestError'
import dayjs from '~/libs/dayjs'

/**
 * Accountを取得
 *
 * @param id 取得するUserUID
 */
export const getAccount = async (id: Alias.UserUID) => {
  const { data, error } = await supabase.from<DatabaseAccount>('account').select().filter('id', 'eq', id)

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
 * @param id 作成するUserUID
 */
export const createAccount = async (id: Alias.UserUID) => {
  const currentDateString = dayjs().utc().format()
  const { data, error } = await supabase
    .from<DatabaseAccount>('account')
    .insert([{ id, status: AccountStatus.Active, createdAt: currentDateString, updatedAt: currentDateString }])

  if (error) {
    throw new RestError(error)
  }
  if (!data || !data.length) {
    return null
  }
  return buildAccount(data[0])
}
