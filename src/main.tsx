import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { App } from './App.tsx'
import { GlobalStyles } from './styles/index.ts'
import { defaultTheme } from './styles/themes/default.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
    </ThemeProvider>
    <App />
  </StrictMode>
)
