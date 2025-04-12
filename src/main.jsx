import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MainBody from "./components/MainBody.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <MainBody/>
  </StrictMode>,
)
