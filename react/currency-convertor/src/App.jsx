import { useState } from 'react'
import UseCurrencyInfo from './hooks/UseCurrencyInfo'
import { InputBox } from './components'
function App() {
  const [amount, setAmount] = useState('')
  const [convertedAmount, setConvertedAmount] = useState('')
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('pkr')
  const currencyInfo = UseCurrencyInfo(from)
  const option = currencyInfo ? Object.keys(currencyInfo) : []
  function convert() {
    if (currencyInfo && currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to])
    } else {
      setConvertedAmount(0)
    }
  }
  function swap() {
    setFrom(preFrom => {
      setTo(preFrom)
      return to
    })

    setAmount(pre => {
      setConvertedAmount(pre);
      return convertedAmount
    });


  }

  return (
    <div>
      <form
        className='flex flex-col gap-10'
        onSubmit={(e) => {
          e.preventDefault()
          convert()
        }}
      >
        <InputBox
          label={'From'}
          amount={amount}
          onAmountChange={setAmount}
          selectCurrency={from}
          onCurrencyChnage={setFrom}
          options={option}
        />

        <InputBox
          label={'to'}
          amount={convertedAmount}
          onAmountChange={setConvertedAmount}
          selectCurrency={to}
          onCurrencyChnage={setTo}
          options={option}


        />
        <input type="submit"
          value={`Convert ${from.toUpperCase()} To ${to.toUpperCase()}`}
          className='bg-blue-200 px-2 py-1 rounded' />
      </form>
      <button className='fixed top-24 bg-red-300 px-2 py-1' onClick={swap}>Swap</button>

    </div>
  )
}

export default App
