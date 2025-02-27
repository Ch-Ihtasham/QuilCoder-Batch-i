import { useRef, useState, useEffect } from 'react'
import './App.css'

function App() {
  const [focus, setFocus] = useState(false)
  const inputRef = useRef(null)
  function handleOutsideClick(event) {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setFocus(false)
    }
  }
  useEffect(() => {
    if (focus) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [focus]);
  return (
    <div className='bg-blue-100'>
      {!focus &&
        (<div className='text-center'>
          <input type="text"
            className='border border-black'
            placeholder='Take Notes'
            onFocus={() => setFocus(true)}
          />
        </div>)}

      {focus &&
        (<div ref={inputRef} className='flex gap-4 justify-center items-center flex-col border border-black'>
          <input type="text"
            placeholder='Title'
            className='border border-black w-64' />
          <input type="text"
            placeholder='Take a Notes'
            className='border border-black w-64' />
        </div>)}

    </div>
  )
}

export default App
