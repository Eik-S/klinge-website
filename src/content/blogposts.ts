import { PostProps } from '../components/post'

type BlogPostProps = Omit<PostProps, 'direction'>

export const blogposts: BlogPostProps[] = [
  {
    headlineText: 'Ein grünes Dorf in der Stadt…',
    headlineImage: {
      src: '/images/karlhelgableibt_rund.png',
      alt: 'unser logo.',
    },
    content: [
      `kArL HeLgA eV. WAGEnpLAtZ

      Was und wer ist das eigentlich?
      Wir sind LehrerInnen, HandwerkerInnen, Künstlerlnnen, Wissenschaft-lerInnen, Erwerbsfreie, Kinder uvm. – eben ein Querschnitt der Gesellschaft. Wir haben uns entschieden in einem selbstverwalteten Gemeinschaftsprojekt in Wagen zu leben. Zwar ist unsere Wohnform im Alltag häufig etwas aufwendiger und bedeutet mehr Arbeit, von Wasser holen, Holzhacken, bis Plena, - der Preis für Freiheit;-) –  gleichzeitig ermöglicht es selbstbestimmt, auch selbstverantwortlich, kooperativ und bezahlbar zu leben! Mit Konzerten, Theater, Festivals, Ausstellungen, Handwerk, Wissensaustausch, oder einfach als Begegnungs- und Vernetzungsort gestalten wir einen soziokulturellen Freiraum im kiEz lebendig und unkommerziell. Auch politische und ökologische Aspekte spielen für uns bei der Frage wie wir leben wollen eine wichtige Rolle und wir möchten den Herausforderungen unserer Zeit  – zB. Klimakatastrophe, Rassismus , soziale Isolation, - praktisch und vor allem jetzt etwas entgegensetzen! 

      Durch Wägen auf Rädern, statt versiegelnde Betonfundamente, Renaturierung der erhaltenen Freifläche mit einer großen Biodiversität, tragen wir zu einem guten und diversen Stadtklima bei. Wagenleben ermöglicht Konsum und kapitalistische Verwertungslogik kritisch zu hinterfragen. Weniger ist mehr und dadurch nachhaltiger, ob durch Selberbauen, Reparieren, Recyclen, statt neu kaufen, regenerative Energien, wie Solar- und Windenergie, Konzerte auf Spendenbasis, Küfa (Küche für alle), eine ehrenamtlich organisierte Bauplatte, zahlreiche soziale und kulturelle Angebote, Gärtnern, Fahrrad- und Lastenradwerkstätten/-bau. 

      Als soziokultureller Freiraum ist karlhelga ein offener, queerer und unkommerzieller Begegnungs- und Vernetzungsort für Freund*innen, Nachbar*innen, Besucher*innen jeden Alters, Musiker*innen und Künstler*innen von lokal bis international. Wir positionieren uns klar gegen rechts, Rassismus, Sexismus, Diskriminierung, Ausgrenzung und Ausbeutung auf Kosten von Umwelt, Menschen und Tieren!
      `,
      {
        src: '/images/blogpost1.jpeg',
        alt: 'Unser Wagenplatz im Frühling.',
      },
    ],
  },
]
