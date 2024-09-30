import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './components/navbar/Navbar.jsx'
import App from './App.jsx'
import Card from './components/card/Card.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Card name='esha' role='founder' />
    <Card name='ammara' role='co founder' />
    <Card name='ihtasham' role='teacher' />

  </StrictMode>,
)
