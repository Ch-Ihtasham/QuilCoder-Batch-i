import React, { useState } from "react";


function App() {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  const apiKey = '5a5b9db67354136d5ab2c73981bb2ded'

  const featchWeather = async (lat, long) => {
    let url;
    // if (!city) {
    //   alert('plese enter city name')
    //   return;
    // }
    if (city) {
      url = (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)

    }
    else if (lat && long) {
      url = (`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${long}&appid=${apiKey}`)
      setCity('')
    }

    else {
      alert("Please enter a city name or allow location access.");
      return;
    }

    try {
      const response = await fetch(url)
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
  function location() {
    setCity('')
    if (navigator.geolocation) {
      
      navigator.geolocation.getCurrentPosition(
        amara => {
          let lat = amara.coords.latitude;
          let long = amara.coords.longitude
          console.log(lat, long)
          setCity('')
          featchWeather(lat, long)
          
        },
        error => {

          alert('Unable to retrieve your location. Please allow location access and try again.');
        }
      );


    } else {
      alert('Geolocation is not supported by this browser.');
    }

  }


  // time zone conversion
  // const timezoneOffset = 18000; // in seconds
  // const localTime = new Date(new Date().getTime() + timezoneOffset * 1000);
  // console.log(localTime.toLocaleString());


  return (
    <div className=' bg-blue-500 h-screen'>
      <div className="text-center">
        <div className="text-5xl mb-5 text-white font-semibold pt-4">Weather App</div>
        <div>
          <input type="text"
            placeholder="Enter Your City Name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && featchWeather()}
            className="border-2 border-white rounded-md outline-white"
          />
          <button className="ml-4 bg-blue-900 border border-white text-white px-4 py-1 rounded-lg" onClick={featchWeather}>Enter</button>
        </div>
        <div>
          <div></div>
          {weather &&
            <div className="text-white">
              <div className="text-2xl font-medium my-2">{weather.name}</div>
              <div className="text-3xl font-semibold">{weather.main.temp} °C</div>
              <div className="flex gap-10 justify-center my-3">
                <div><span className="font-semibold text-xl">Feels Like:</span> {weather.main.feels_like}</div>
                <div><span className="font-semibold text-xl">Humidity:</span> {weather.main.humidity}</div>
                <div>{new Date(weather.dt * 1000).toLocaleString()}</div>
              </div>
            </div>
          }
        </div>
        <button className="border border-white" onClick={location}>location</button>
      </div>
    </div>
  );



}


export default App;
