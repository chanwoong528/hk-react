import { StrictMode, } from 'react'
import { createRoot } from 'react-dom/client'
import AboutPage from './AboutPage'


const app = createRoot(document.getElementById('about-root')!)

app.render(
  <StrictMode>
    <AboutPage />
  </StrictMode>,
)