import { Dayjs } from 'dayjs'
import dayjs from '~/libs/dayjs'

export function getFormattedCurrentDate() {
  return dayjs.utc().format()
}

export function formatDateYMD(date: Dayjs) {
  return date.format('YYYY-MM-DD')
}
