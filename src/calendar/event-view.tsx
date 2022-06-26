import { CalendarEvent } from '../content/events'
import { formatStringToPrettyTime } from '../utils/date-formatter'

export function EventView({ name, time, image, text }: CalendarEvent) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{formatStringToPrettyTime(time)}</p>
      {image && <img alt={image.alt} src={image.src} />}
      {text && <p>{text}</p>}
    </div>
  )
}
