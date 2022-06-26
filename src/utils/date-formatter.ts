export function formatStringToPrettyDate(inputStringDate: string): string {
  const jsDate = new Date(inputStringDate)
  return formatDateToPrettyDate(jsDate)
}

export function formatStringToPrettyTime(inputTime: string): string {
  if (inputTime.endsWith('00')) {
    return `${inputTime.split(':')[0]} Uhr`
  } else {
    return `${inputTime} Uhr`
  }
}

export function formatDateToPrettyDate(inputDate: Date): string {
  const options: any = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  const stringDate = inputDate.toLocaleDateString('de-DE', options)
  return stringDate
}
