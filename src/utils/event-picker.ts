import { CalendarEvent } from '../content/events'
import { calendarEvents } from '../content/events'

export function getEventsForDate(date: Date): CalendarEvent[] {
  const events: CalendarEvent[] = []
  calendarEvents.forEach((event) => {
    const eventDate = new Date(event.date)
    if (sameDatum(eventDate, date)) {
      events.push(event)
    } else if (event.repeat === 'weekly') {
      if (eventOccuredBeforeDate(eventDate, date) && sameDay(eventDate, date)) {
        events.push(event)
      }
    }
  })

  return events
}

function eventOccuredBeforeDate(eventDate: Date, date: Date) {
  const before = eventDate.getTime() <= date.getTime()
  return before
}

function sameDay(date1: Date, date2: Date): boolean {
  return date1.getDay() === date2.getDay()
}

function sameDatum(date1: Date, date2: Date): boolean {
  return sameDate(date1, date2) && sameMonth(date1, date2) && sameYear(date1, date2)
}
function sameDate(date1: Date, date2: Date): boolean {
  return date1.getDate() === date2.getDate()
}
function sameMonth(date1: Date, date2: Date): boolean {
  return date1.getMonth() === date2.getMonth()
}
function sameYear(date1: Date, date2: Date): boolean {
  return date1.getFullYear() === date2.getFullYear()
}
