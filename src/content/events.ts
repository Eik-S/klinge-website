import { ImageProps } from '../components/post'

export interface CalendarEvent {
  date: string
  time: string
  shortName: 'Küfa' | 'Konzi' | 'Demo' | 'Party' // use only those values and extend if needed
  name: string
  text?: string
  image?: ImageProps
  repeat?: 'weekly'
  cancellations?: string[]
}

export const calendarEvents: CalendarEvent[] = [
  {
    date: '2022-06-26',
    time: '18:00',
    repeat: 'weekly',
    cancellations: ['2022-07-17'],
    name: 'Küche für alle',
    shortName: 'Küfa',
    text: `Jeden Sonntag gibts bei uns Essen auf Spendenbasis. 
    
    Pünktlich sein lohnt sich.`,
  },
  {
    date: '2022-06-26',
    time: '22:30',
    name: 'Konzert - Christian Steiffen',
    shortName: 'Konzi',
    text: 'Der Gott des Schlager Live bei uns aufm Platz!',
    image: {
      alt: 'Der Gott des Schlager.',
      src: '/images/christian-steiffen.jpg',
    },
  },
  {
    date: '2022-06-26',
    name: 'Konzert - Christian Steiffen',
    shortName: 'Konzi',
    text: 'Der Gott des Schlager Live bei uns aufm Platz!',
    image: {
      alt: 'Der Gott des Schlager.',
      src: '/images/christian-steiffen.jpg',
    },
  },
]
