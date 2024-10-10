import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Stopwatch from './Components/Stopwatch/Stopwatch.jsx'
import Class5 from './Components/Class5/Class5.jsx'
import Class6 from './Components/Class6/Class6.jsx'
import Class7 from './Components/Class7/Class7.jsx'

createRoot(document.getElementById('root')).render(
  <div>
    {/* <App /> */}
    {/* <Stopwatch /> */}
    {/* <Class5 /> */}
    {/* <Class6 /> */}
    <Class7 />

  </div>
)
