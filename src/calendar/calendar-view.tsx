import { css } from '@emotion/react'
import ReactCalendar, { CalendarTileProperties } from 'react-calendar'
import { colors } from '../assets/colors'
import { getEventsForDate } from '../utils/event-picker'

interface CalendarViewProps {
  activeDay: Date
  onActiveDayChanges: (newDay: Date) => void
}

export function CalendarView({ activeDay, onActiveDayChanges }: CalendarViewProps) {
  function getTileContent(tileProps: CalendarTileProperties): JSX.Element {
    const tileDate = tileProps.date
    const events = getEventsForDate(tileDate)

    return (
      <div>
        {events.map((event, index) => (
          <span css={styles.tileEvent} key={index}>
            {event.shortName}
          </span>
        ))}
      </div>
    )
  }

  function isTileDisabled(tileProps: CalendarTileProperties): boolean {
    const noEvents = getEventsForDate(tileProps.date).length === 0
    return noEvents
  }
  return (
    <ReactCalendar
      css={styles.calendar}
      onClickDay={(value) => onActiveDayChanges(value)}
      value={activeDay}
      minDetail="month"
      maxDetail="month"
      locale="de-DE"
      showNeighboringMonth={true}
      tileContent={(tileProps) => getTileContent(tileProps)}
      tileDisabled={(tileProps) => isTileDisabled(tileProps)}
    />
  )
}

const styles = {
  calendar: css`
    max-width: 600px;
    padding: 32px;
    margin-left: auto;
    margin-right: auto;
    color: ${colors.almostBlack};

    .react-calendar__navigation {
      display: flex;
      flex-direction: row;

      .react-calendar__navigation__label:disabled {
        background-color: transparent;
        border: none;
        color: ${colors.font};
        font-size: 24px;
      }
    }
    .react-calendar__navigation__arrow {
      border: none;
      color: ${colors.font};
      font-size: 40px;
      font-weight: 900;
      background-color: transparent;
      padding: 0 20px;
    }

    .react-calendar__tile {
      border: 1px solid ${colors.almostBlack};
      min-height: 40px;
      background-color: ${colors.font};
      &:disabled {
        background-color: ${colors.fontDarker};
      }
    }

    .react-calendar__tile--active {
      background-color: ${colors.green};
      color: ${colors.font};
    }
  `,
  tileEvent: css`
    display: block;
    line-height: 15px;
  `,
}
