import { useState } from 'react'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  const [name, setName] = useState('')
  return (
    <UserContextProvider>
      <h1> Login Page</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
