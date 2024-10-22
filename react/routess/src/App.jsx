import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Fotter from './components/Fotter'

function App() {


  return (
    <>
      <Navbar />
      <Outlet />
      <Fotter />
    </>
  )
}

export default App
