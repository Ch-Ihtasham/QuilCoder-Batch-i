import { useCallback, useEffect, useState } from 'react'
function App() {

  const [password, setPassword] = useState('passowrd')
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const passwordgenerator = useCallback(() => {
    let pass = ''
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (numberAllowed) str = '1234567890' + str;
    if (characterAllowed) str += '!@#$%^&*()?<>/|~'
    console.log(str)
    for (let i = 0; i < length; i++) {
      let v = Math.floor(Math.random() * str.length)
      console.log(v)
      pass += str.charAt(v)
    }
    console.log(pass)
    setPassword(pass)


  }, [length, numberAllowed, characterAllowed, setPassword])
  useEffect(() => {
    passwordgenerator()
  }, [length, numberAllowed, characterAllowed, setPassword])
  return (
    <>
      <div>
        <input type="text"
          value={password}
        />
        <button>copy</button>
      </div>
      <div>
        <div>
          <input type="range"
            value={length}
            min={6}
            max={20}
            onChange={(e) => {
              setLength(e.target.value)
            }}
          />
          <label>length{length}</label>
        </div>
        <div>
          <input type="checkbox"
            checked={numberAllowed}
            onChange={() => setNumberAllowed((preValue) => !preValue)}
          />
          <label>Number Allowed</label>
        </div>
        <div>
          <input type="checkbox"
            checked={characterAllowed}
            onChange={() => setCharacterAllowed((preV) => !preV)}
          />
          <label>Special Character</label>
        </div>

      </div>
    </>
  )
}

export default App
