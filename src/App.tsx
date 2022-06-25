import { css } from '@emotion/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { colors } from './assets/colors'
import { Navigation } from './navigation'
import { Calendar } from './pages/calendar'
import { Home } from './pages/home'
import { Press } from './pages/press'
import { Support } from './pages/support'

function App() {
  return (
    <div css={styles.websiteContent}>
      <div css={styles.headerImageContainer} />
      <BrowserRouter>
        <Navigation />
        <div css={styles.contentBackground}>
          <div css={styles.content}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="calendar" element={<Calendar />} />
              <Route path="support" element={<Support />} />
              <Route path="press" element={<Press />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

const styles = {
  websiteContent: css`
    height: 100vh;
    max-width: 100vw;
    position: relative;
  `,
  headerImageContainer: css`
    width: 100vw;
    height: 60vh;
    position: fixed;
    z-index: -1;
    background-image: url('/images/header.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  `,
  contentBackground: css`
    margin-top: 40vh;
    background-color: ${colors.almostBlack};
    min-height: 100vh;
    position: flex;
    flex-direction: column;
  `,
  content: css`
    color: ${colors.font};
    padding: 64px 0;
  `,
}

export default App
