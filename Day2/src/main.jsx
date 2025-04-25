import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Full_stack from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Full_stack></Full_stack>
  </StrictMode>,
)
