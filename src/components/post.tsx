import { css } from '@emotion/react'
import { colors } from '../assets/colors'
import { formatStringToPrettyDate } from '../utils/date-formatter'
import { Direction, Headline } from './headline'

export interface ImageProps {
  src: string
  alt: string
}

export type ContentElement = string | ImageProps

export interface PostProps {
  headlineText: string
  headlineImage?: ImageProps
  content: ContentElement[]
  direction: Direction
  date: string
}
export function Post({ headlineText, headlineImage, content, date, direction }: PostProps) {
  const formattedDate = formatStringToPrettyDate(date)

  return (
    <div css={styles.postGridContainer}>
      <Headline text={headlineText} direction={direction} image={headlineImage}></Headline>
      {formattedDate !== 'Invalid Date' && (
        <p css={css([styles.paragraph(2), styles.date])}>{formattedDate}</p>
      )}
      {content.map((element, index) => {
        if (typeof element === 'string') {
          return (
            <p
              css={styles.paragraph(index + 3)}
              dangerouslySetInnerHTML={{ __html: element }}
              key={index}
            />
          )
        } else {
          return (
            <img
              css={styles.contentImage(index + 3, direction)}
              alt={element.alt}
              src={element.src}
              key={index}
            />
          )
        }
      })}
    </div>
  )
}

const styles = {
  postGridContainer: css`
    position: relative;
    padding: 16px 0;
    color: ${colors.almostBlack};

    display: grid;
    grid-template-columns: 1fr minmax(auto, 600px) 1fr;
    grid-auto-rows: auto;
    grid-row-gap: 32px;
    margin-top: 86px;
    @media screen and (max-width: 664px) {
      margin-top: 48px;
    }
    &:first-of-type {
      margin-top: 0;
    }
  `,
  date: css`
    color: ${`${colors.font}`};
    font-weight: 300;
    text-align: right;
    margin-bottom: -12px;
  `,
  paragraph: (index: number) => css`
    grid-column: 2;
    grid-row: ${index};
    font-size: 22px;
    font-weight: bold;
    margin: 0;

    a {
      color: ${colors.green};

      &:visited,
      &:active {
        color: ${`${colors.green}99`};
      }
    }
    @media screen and (max-width: 664px) {
      padding: 0 32px;
      font-size: 16px;
    }
  `,
  contentImage: (index: number, direction: Direction) => css`
    ${direction === 'left' &&
    css`
      grid-column: 1 / span 2;
      grid-row: ${index};
    `}
    ${direction === 'right' &&
    css`
      grid-column: 2 / span 2;
      grid-row: ${index};
    `}
    max-width: 100%;
  `,
}
