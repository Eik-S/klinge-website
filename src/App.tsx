import { css } from '@emotion/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { colors } from './assets/colors'
import { Calendar } from './pages/calendar'
import { Home } from './pages/home'
import { Press } from './pages/press'
import { Support } from './pages/support'

function App() {
  return (
    <div css={styles.websiteContent}>
      <img
        css={styles.headerImage}
        src={'/header.jpg'}
        alt="Ein Zirkus-Festival auf unserem Wagenplatz."
      />
      <div css={styles.contentBackground}>
        <div css={styles.content}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="calendar" element={<Calendar />} />
              <Route path="support" element={<Support />} />
              <Route path="press" element={<Press />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  )
}

const styles = {
  websiteContent: css`
    height: 100vh;
    width: 100vw;
    position: relative;
  `,
  headerImage: css`
    width: 100vw;
    position: fixed;
    top: -100px;
    z-index: -1;
  `,
  contentBackground: css`
    margin-top: 45vw;
    background-color: ${colors.almostBlack};
    min-height: 100vh;
    position: flex;
    flex-direction: column;
  `,
  content: css`
    color: ${colors.font};
    padding: 64px 32px;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
  `,
}

export default App
