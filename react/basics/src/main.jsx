import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Classes from './components/Classes.jsx'
import Condition from './components/Condition.jsx'
import Method from './components/method.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App name='Ammara Saeed' age='16' /> */}
    {/* <App name='Eesha Alam' />
    <App>
      <h1>Hello My Name is Ammara Saeed Im a student of bsit</h1>
    </App>  */}
    {/* <Classes /> */}
    {/* <Condition /> */}
    <Method />
  </StrictMode>,
)
