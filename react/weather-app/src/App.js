import React, { useState } from "react";


function App() {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  const apiKey = '5a5b9db67354136d5ab2c73981bb2ded'

  const featchWeather = async () => {
    if (!city) {
      alert('plese enter city name')
    }
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      if (!response.ok) {
        throw new Error('the city data  is not avaliable')
      }
      const data = await response.json()
      console.log(data)
      setWeather(data)
    }
    catch (amara) {
      
      console.log(amara)
    }
  }
  return (
    <div className=''>
      <div className="text-center">
        <div className="text-5xl mb-5">Weather App</div>
        <div>
          <input type="text"
            placeholder="Enter Your City Name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="border-2 border-black rounded-lg"
          />
          <button className="ml-4 bg-blue-600 text-white px-4 py-1 rounded-lg" onClick={featchWeather}>Enter</button>
        </div>
        <div>
          <div>data</div>
          {weather &&
            <div>{weather.main.temp}</div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
