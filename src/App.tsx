import { css } from '@emotion/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { colors } from './assets/colors'
import { Navigation } from './navigation/navigation'
import { Calendar } from './pages/calendar'
import { Home } from './pages/home'
import { Press } from './pages/press'
import { Support } from './pages/support'

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div css={styles.websiteContent}>
        <div css={styles.headerImageContainer} />
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
      </div>
    </BrowserRouter>
  )
}

const styles = {
  websiteContent: css`
    max-width: 100vw;
    position: relative;
  `,
  headerImageContainer: css`
    height: 50vh;
    min-height: 300px;
    margin-top: -200px;
    background-image: url('/images/header.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    @media screen and (max-width: 890px) {
      margin-top: -100px;
    }
  `,
  contentBackground: css`
    background-color: ${colors.almostBlack};
    position: flex;
    flex-direction: column;
  `,
  content: css`
    color: ${colors.font};
    padding: 64px 0;
  `,
}

export default App
