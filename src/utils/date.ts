import { Dayjs } from 'dayjs'

export function formatDateYMD(date: Dayjs) {
  return date.format('YYYY-MM-DD')
}
