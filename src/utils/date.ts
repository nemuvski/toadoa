import { Dayjs } from 'dayjs'

export function formatDateYMD(date: Dayjs) {
  return date.tz().format('YYYY-MM-DD')
}
