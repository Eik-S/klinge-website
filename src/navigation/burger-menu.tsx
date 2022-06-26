import { css } from '@emotion/react'
import React, { useState } from 'react'
import { colors } from '../assets/colors'
import { NavigationLinks } from './navigation-links'

export function BurgerMenu({ ...props }) {
  const [open, setOpen] = useState(false)

  return (
    <div css={styles.burgerMenuWrapper} {...props}>
      <div css={styles.burgerIcon(open)} onClick={() => setOpen((prevOpen) => !prevOpen)}>
        {open ? '×' : '☰'}
      </div>
      {open && (
        <React.Fragment>
          <div css={styles.burgerMenuCurtain} onClick={() => setOpen(false)} />
          <div css={styles.burgerLinksWrapper}>
            <NavigationLinks
              onLinkClicked={() => setOpen(false)}
              css={styles.burgerNavigationLinks}
            />
          </div>
        </React.Fragment>
      )}
    </div>
  )
}

const styles = {
  burgerMenuWrapper: css`
    position: relative;
    margin-left: auto;
    margin-right: 16px;
  `,
  burgerIcon: (open: boolean) => css`
    cursor: pointer;
    position: relative;
    font-size: 60px;
    z-index: 2;
    ${open &&
    css`
      font-weight: 300;
      font-size: 70px;
    `}
  `,
  burgerMenuCurtain: css`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
  `,
  burgerLinksWrapper: css`
    position: absolute;
    top: -8px;
    right: -24px;
    background-color: ${colors.almostBlack};
    z-index: 1;
    padding: 16px 62px 32px;
  `,
  burgerNavigationLinks: css`
    flex-direction: column;
    row-gap: 18px;
  `,
}
