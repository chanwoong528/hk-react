import { StrictMode, } from 'react'
import { createRoot } from 'react-dom/client'

import CompMainNewsletterList from './CompMainNewsletterList'

const app = createRoot(document.getElementById('newsletter-main-root')!)

app.render(
  <StrictMode>
    <CompMainNewsletterList />
  </StrictMode>,
)