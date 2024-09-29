import React from 'react'
import { useState } from 'react'

export default function Esha() {

  const [age, SetAge] = useState(21)
  let ageplus = () => {
    SetAge(age + 1)

  }
  function ageminus() {
    SetAge(age - 1)

  }
  return (
    <div>
      this is my age {age}
      {age}
      <br />
      <button onClick={ageplus} style={{cursor:'pointer'}}>Increase age</button> <br /> <br />
      <button onClick={ageminus}>decrease age</button>
    </div>
  )


}
