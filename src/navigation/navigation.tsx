import { css } from '@emotion/react'
import React from 'react'
import { colors } from '../assets/colors'
import { BurgerMenu } from './burger-menu'
import { NavigationLinks } from './navigation-links'

export function Navigation() {
  return (
    <React.Fragment>
      <div css={styles.navbarGap} />
      <div css={styles.navbar}>
        <Logo />
        <NavigationLinks css={styles.desktopOnly} />
        <BurgerMenu css={styles.mobileOnly} />
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
  desktopOnly: css`
    @media screen and (max-width: 890px) {
      display: none;
    }
  `,
  mobileOnly: css`
    @media screen and (min-width: 891px) {
      display: none;
    }
  `,
  navbarGap: css`
    height: 64px;
    background-color: ${colors.almostBlack};
    @media screen and (max-width: 890px) {
      height: 0;
    }
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
    @media screen and (max-width: 890px) {
      grid-column-gap: 0;
    }
  `,
  wagenplatz: css`
    grid-area: wagenplatz;
    font-size: 18px;
    line-height: 18px;
    align-self: flex-end;
    margin-bottom: -6px;

    @media screen and (max-width: 890px) {
      font-size: 12px;
    }
  `,
  karl: css`
    grid-area: karl;
    font-size: 52px;
    @media screen and (max-width: 890px) {
      font-size: 35px;
    }
  `,
  helga: css`
    grid-area: helga;
    font-size: 84px;
    align-self: center;
    @media screen and (max-width: 890px) {
      font-size: 55px;
    }
  `,
}
