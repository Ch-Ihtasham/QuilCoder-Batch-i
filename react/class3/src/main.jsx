import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Cards from './components/cards/Cards.jsx'
import Us from './components/Us/Us.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Cards name='ihtasham' degree='bsit' /> */}
    {/* <Cards name='azka nawaz ' degree='mscs'/>
    <Cards name='eesha alam' degree='mbbs' />
    <Cards name='amara saeed' degree='fcps-2' /> */}
    <Us/>
  </StrictMode>,
)
