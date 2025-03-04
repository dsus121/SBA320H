import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import COapp from './COapp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <COapp />
  </StrictMode>,
)
