import { css } from '@emotion/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { colors } from './assets/colors'

export function Navigation() {
  return (
    <React.Fragment>
      <div css={styles.navbarGap} />
      <div css={styles.navbar}>
        <Logo />
        <nav css={styles.navigation}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="calendar">Kalender</NavLink>
          <NavLink to="support">Support</NavLink>
          <NavLink to="press">Presse</NavLink>
        </nav>
      </div>
    </React.Fragment>
  )
}

function Logo() {
  return (
    <div css={styles.logo}>
      <span css={styles.wagenplatz}>Wagenplatz</span>
      <span css={styles.karl}>Karl</span>
      <span css={styles.helga}>Helga</span>
    </div>
  )
}

const styles = {
  navbarGap: css`
    height: 64px;
  `,
  navbar: css`
    position: sticky;
    top: 0;
    padding: 8px;
    background-color: ${colors.almostBlackWithTransparency};
    display: flex;
    flex-direction: row;
    z-index: 1;
  `,
  logo: css`
    font-weight: bold;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: auto auto;
    grid-template-areas:
      'wagenplatz helga'
      'karl helga';
    grid-column-gap: 8px;
    padding: 8px;
  `,
  wagenplatz: css`
    grid-area: wagenplatz;
    font-size: 18px;
    line-height: 18px;
    align-self: flex-end;
    margin-bottom: -6px;
  `,
  karl: css`
    grid-area: karl;
    font-size: 52px;
  `,
  helga: css`
    grid-area: helga;
    font-size: 84px;
    align-self: center;
  `,
  navigation: css`
    margin-left: auto;
    margin-right: 32px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    column-gap: 32px;
    align-items: center;

    a {
      font-size: 28px;
      font-weight: bold;
      text-decoration: none;
      border-bottom: 4px solid transparent;
      text-transform: lowercase;
      &.active {
        border-bottom: 4px solid ${colors.font};
      }
    }
  `,
}
