import { css } from '@emotion/react'
import { colors } from '../assets/colors'
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
}
export function Post({ headlineText, headlineImage: image, content, direction }: PostProps) {
  return (
    <div css={styles.postGridContainer}>
      <Headline text={headlineText} direction={direction} image={image}></Headline>
      {content.map((element, index) => {
        if (typeof element === 'string') {
          return (
            <p css={styles.paragraph(index + 2)} dangerouslySetInnerHTML={{ __html: element }} />
          )
        } else {
          return (
            <img
              css={styles.contentImage(index + 2, direction)}
              alt={element.alt}
              src={element.src}
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
  `,
  paragraph: (index: number) => css`
    grid-column: 2;
    grid-row: ${index};
    font-size: 22px;
    font-weight: bold;

    a {
      color: ${colors.green};

      &:visited,
      &:active {
        color: ${`${colors.green}99`};
      }
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
