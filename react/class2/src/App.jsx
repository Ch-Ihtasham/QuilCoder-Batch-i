import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <nav>
          <ul className='nav'>
            <li>home</li>
            <li>read more</li>
            <li>blog</li>
            <li>contact us</li>
            <li>about us</li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default App
