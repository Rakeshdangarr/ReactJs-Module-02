import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GroceryApp from './components/groceryApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GroceryApp/>
  </StrictMode>,
)
