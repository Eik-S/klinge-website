import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { css, Global } from '@emotion/react'
import { colors } from './assets/colors'

const globalStyles = css`
  @font-face {
    font-family: 'roboto';
    src: url('/roboto/Roboto-Medium.ttf') format('truetype');
  }
  @font-face {
    font-family: 'roboto';
    src: url('/roboto/Roboto-Thin.ttf') format('truetype');
    font-weight: 100;
  }
  @font-face {
    font-family: 'roboto';
    src: url('/roboto/Roboto-Light.ttf') format('truetype');
    font-weight: 300;
  }
  @font-face {
    font-family: 'roboto';
    src: url('/roboto/Roboto-Bold.ttf') format('truetype');
    font-weight: 700;
  }
  @font-face {
    font-family: 'roboto';
    src: url('/roboto/Roboto-Black.ttf') format('truetype');
    font-weight: 900;
  }

  * {
    font-family: roboto, sans-serif;
  }

  p,
  h1,
  h2,
  h3,
  a {
    color: ${colors.font};
  }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
      'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <Global styles={globalStyles}></Global>
    <App />
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
