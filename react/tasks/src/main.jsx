import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Task4 from './tasks/Task4\'Link and routing Task\'.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Task4 />
  </StrictMode>,
)
