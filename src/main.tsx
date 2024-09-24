import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToDoApp } from './components/ToDoApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToDoApp/>
  </StrictMode>,
)
