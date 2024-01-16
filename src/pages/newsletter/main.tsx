import { StrictMode, } from 'react'
import { createRoot } from 'react-dom/client'

import PageNewsLetter from "./PageNewsLetter"

const app = createRoot(document.getElementById('newsletter-root')!)

app.render(
  <StrictMode>
    <PageNewsLetter />
  </StrictMode>,
)