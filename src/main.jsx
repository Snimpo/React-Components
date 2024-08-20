import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Heading from './Heading.jsx'
import Content from './Content.jsx'
import Footer from './Footer.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Heading />
    <Content />
    <Footer />
    <Content />
  </StrictMode>,
)
