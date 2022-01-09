import { Dayjs } from 'dayjs'
import dayjs from '~/libs/dayjs'

export function getSavingDateString(dateString: Alias.DateString | null) {
  if (!dateString) {
    return null
  }
  return dayjs(dateString).utc().format()
}

export function formatDateYMD(date: Dayjs) {
  return date.utc().format('YYYY-MM-DD')
}
