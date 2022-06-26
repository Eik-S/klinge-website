import { css } from '@emotion/react'
import React, { useEffect, useState } from 'react'
import { CalendarView } from '../calendar/calendar-view'
import { EventPost } from '../components/post'
import { CalendarEvent } from '../content/events'
import { formatDateToPrettyDate } from '../utils/date-formatter'
import { getEventsForDate } from '../utils/event-picker'

export function Calendar() {
  const [activeDay, setActiveDay] = useState<Date>(new Date())
  const [shownEvents, setShownEvents] = useState<CalendarEvent[]>([])

  useEffect(() => {
    setShownEvents(getEventsForDate(activeDay))
  }, [activeDay])

  function handleActiveDayChanges(newActiveDay: Date): void {
    setActiveDay(newActiveDay)
  }

  return (
    <React.Fragment>
      <CalendarView
        activeDay={activeDay}
        onActiveDayChanges={(newActiveDay) => handleActiveDayChanges(newActiveDay)}
      />
      <h1 css={styles.headline}>Events am {formatDateToPrettyDate(activeDay)}</h1>
      {shownEvents.map((event, index) => (
        <EventPost
          name={event.name}
          time={event.time}
          image={event.image}
          text={event.text}
          direction={index % 2 === 0 ? 'right' : 'left'}
          key={index}
        />
      ))}
    </React.Fragment>
  )
}

const styles = {
  headline: css`
    text-align: center;
    padding: 0 32px;
  `,
}
