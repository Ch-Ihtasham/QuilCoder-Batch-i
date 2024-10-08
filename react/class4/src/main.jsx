import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Stopwatch from './Components/Stopwatch/Stopwatch.jsx'

createRoot(document.getElementById('root')).render(
  <div>
    {/* <App /> */}
    <Stopwatch />

  </div>
)
