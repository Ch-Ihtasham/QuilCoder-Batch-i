import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const navList = [{
    name: 'Home',
    href: '/'
  },
  {
    name: 'About',
    href: '/about'
  },
  {
    name: 'Contact',
    href: '/contact'
  },
  {
    name: 'Blog',
    href: '/blog'
  }
  ]
  const [isOpen, setIsOpen] = useState(false)

  function navBar() {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className=' w-11/12 m-auto flex justify-between items-center '>
        <div className='text-2xl font-thin md:font-medium md:text-3xl lg:text-6xl lg:font-extrabold'>My Logo</div>
        <div className='hidden md:flex  gap-10'>
          {navList.map((list, i) => (
            <div key={i}>
              <a href={list.href}>{list.name}</a>
            </div>
          ))}
        </div>
        <div className='opacity-0'>.</div>
        <div className='md:hidden' onClick={navBar}>
          Menu
        </div>
      </div>
      {/* {isOpen && (
        <div className='h-screen bg-blue-400 md:hidden '>
          {navList.map((list, i) => (
            <div key={i} className=' transition-transform duration-500 ease-in-out'>
              <a href={list.href}>{list.name}</a>
            </div>
          ))}
        </div>
      )} */}
      <div className={`fixed top-0 right-0 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      transition-transform duration-500 ease-in-out md:hidden
      `}>
        <div className='h-screen w-48 bg-blue-400 md:hidden '>
          <div onClick={()=> setIsOpen(!isOpen)}>cross</div>
          {navList.map((list, i) => (
            <div key={i} className=' transition-transform duration-500 ease-in-out'>
              <a href={list.href}>{list.name}</a>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
