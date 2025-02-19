import { useState } from 'react'
import UseCurrencyInfo from './hooks/UseCurrencyInfo'
function App() {
  const [count, setCount] = useState(0)
  const currencyInfo = UseCurrencyInfo('usd')

  return (
    <div>


    </div>
  )
}

export default App
