import { Dayjs } from 'dayjs'

export function formatDateYMD(date: Dayjs) {
  return date.tz().format('YYYY-MM-DD')
}

/**
 * 日付a - 日付bの日単位の差分を算出し、返却する
 */
export function getDiffDay(a: Dayjs, b: Dayjs) {
  return a.diff(b, 'd')
}
