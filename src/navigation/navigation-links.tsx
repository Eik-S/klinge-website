import { css } from '@emotion/react'
import { NavLink } from 'react-router-dom'
import { colors } from '../assets/colors'

interface NavigationLinksProps {
  onLinkClicked?: () => void
}

export function NavigationLinks({ onLinkClicked = () => null, ...props }: NavigationLinksProps) {
  return (
    <nav css={styles.navigation} {...props}>
      <NavLink to="/" onClick={() => onLinkClicked()}>
        Home
      </NavLink>
      <NavLink to="calendar" onClick={() => onLinkClicked()}>
        Kalender
      </NavLink>
      <NavLink to="support" onClick={() => onLinkClicked()}>
        Support
      </NavLink>
      <NavLink to="press" onClick={() => onLinkClicked()}>
        Presse
      </NavLink>
    </nav>
  )
}

const styles = {
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
