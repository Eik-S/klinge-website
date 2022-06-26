import { ImageProps } from '../components/post'

export interface CalendarEvent {
  date: string
  time: string
  shortName: 'Küfa' | 'Konzi' | 'Demo' | 'Party' // use only those values and extend if needed
  name: string
  text?: string
  image?: ImageProps
  repeat?: 'weekly'
}

export const calendarEvents: CalendarEvent[] = [
  {
    date: '2022-06-26',
    time: '18:00',
    repeat: 'weekly',
    name: 'Küche für alle',
    shortName: 'Küfa',
    text: `Jeden Sonntag gibts bei Essen auf Spendenbasis. 
    
    Pünktlich sein lohnt sich.`,
  },
  {
    date: '2022-06-26',
    time: '22:00',
    name: 'Konzert - Christian Steiffen',
    shortName: 'Konzi',
    text: 'Der Gott des Schlager Live bei uns!',
  },
]
