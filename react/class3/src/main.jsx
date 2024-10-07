import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Cards from './components/cards/Cards.jsx'
import Us from './components/Us/Us.jsx'
import Class from './components/UseEffects.jsx/class.jsx'
createRoot(document.getElementById('root')).render(
  <div>
    {/* <App /> */}
    {/* <Cards name='ihtasham' degree='bsit' /> */}
    {/* <Cards name='azka nawaz ' degree='mscs'/>
    <Cards name='eesha alam' degree='mbbs' />
    <Cards name='amara saeed' degree='fcps-2' /> */}
    {/* <Us/> */}

    <Class />
  </div>
)
