import { ThemeProvider } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { lightTheme } from '../themes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={ lightTheme }>
      {/* <CssBaseline /> */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
)