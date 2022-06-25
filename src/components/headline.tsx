import { css } from '@emotion/react'
import React from 'react'
import { colors } from '../assets/colors'
import { ImageProps } from './post'

export type Direction = 'left' | 'right'
interface HeadlineProps {
  text: string
  image?: ImageProps
  direction: Direction
}

export function Headline({ text, direction, image }: HeadlineProps) {
  const lines = splitInHalf(text)

  function splitInHalf(text: string) {
    const words = text.split(' ')
    const headline1 = words.slice(0, Math.ceil(words.length / 2)).join(' ')
    const headline2 = words.slice(Math.ceil(words.length / 2)).join(' ')
    return [headline1, headline2]
  }

  return (
    <React.Fragment>
      <div css={styles.backgroundContainer(direction)} />
      <h2 css={styles.headlineText(direction)}>
        {lines[0]}
        {lines.length === 2 && (
          <React.Fragment>
            <br />
            {lines[1]}
          </React.Fragment>
        )}
      </h2>
      {image && <img css={styles.logo(direction)} alt={image.alt} src={image.src} />}
    </React.Fragment>
  )
}

const styles = {
  logo: (direction: Direction) => css`
    ${direction === 'left' &&
    css`
      grid-column: 1;
      grid-row: 1;
      justify-self: left;
      margin-left: 32px;
    `}
    ${direction === 'right' &&
    css`
      grid-column: 3;
      grid-row: 1;
      justify-self: right;
      margin-right: 32px;
    `}
    position: absolute;
    max-height: 200px;
    top: -20px;
  `,
  backgroundContainer: (direction: Direction) => css`
    background-color: ${colors.green};
    grid-row: 1;
    ${direction === 'left' &&
    css`
      grid-column: 1 / span 2;
    `}
    ${direction === 'right' &&
    css`
      grid-column: 2 / span 2;
    `}
  `,
  headlineText: (direction: Direction) => css`
    font-size: 36px;
    font-weight: 900;
    color: ${colors.almostBlack};
    text-transform: uppercase;
    grid-column: 2;
    grid-row: 1;
    padding: 0 64px;
    letter-spacing: 0.04em;
    line-height: 48px;

    ${direction === 'left' &&
    css`
      text-align: right;
    `}
  `,
}
