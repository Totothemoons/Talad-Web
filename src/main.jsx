import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header.jsx'
import App from './App.jsx'
import Footer from './footer.jsx'
import Poster from './TaladPoster.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Poster/>
    
  </StrictMode>,
)
