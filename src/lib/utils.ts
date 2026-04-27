import { clsx, type ClassValue } from 'clsx'
import { format, parseISO } from 'date-fns'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function formatDate(dateString: string): string {
  return format(parseISO(dateString), 'dd MMMM yyyy')
}

export function formatEventDate(dateString: string, endDateString?: string): string {
  const start = parseISO(dateString)
  if (!endDateString) return format(start, 'EEE d MMM yyyy, h:mm a')
  const end = parseISO(endDateString)
  if (format(start, 'yyyy-MM-dd') === format(end, 'yyyy-MM-dd')) {
    return `${format(start, 'EEE d MMM yyyy, h:mm a')} – ${format(end, 'h:mm a')}`
  }
  return `${format(start, 'd MMM')} – ${format(end, 'd MMM yyyy')}`
}
