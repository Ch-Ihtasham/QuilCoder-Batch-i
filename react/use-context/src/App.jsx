import { useCallback, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



import Child from './components/Child'
import { Counts } from './context/Context'
// const num = new Array(30_000_000).fill(0).map((v, i) => {
//   return {
//     index: i,
//     ismagical: i === 29_000_000
//   }
// })




function App() {
  
  const [count, setCount] = useState(0)
  
  // const [number, setNumber] = useState(num)
  
  // const ans = useMemo(() => number.find((item) => item.ismagical),[])
  const amara = useCallback(() => {
    return 'hello world'
  },[])


  return (
    <>
      {/* <Counts.Provider value={count}> */}
      <Child count={1} fun={amara} />
      {/* {ans.index}  */}
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {/* </Counts.Provider> */}
    </>
  )
}

export default App
