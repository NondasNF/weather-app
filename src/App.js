import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Temperature from './Temperature';

function App() {
  const [weatherData, setWeatherData] = useState(false);
  const [degrees, setDegrees] = useState("℃");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude
      const lon = position.coords.longitude
      axios.get(`https://weather-proxy.freecodecamp.rocks/api/current?lat=${lat}&lon=${lon}`)
        .then(response => setWeatherData(response.data))
    })
  }, [])

  return (
    <div className="App">
      {weatherData ?
        <div className="weather">
          <p className="weather__city">
            {weatherData.name}
          </p>
          <div className="weather__temperature">
            <img className="weather__temperature__icon"
              src={weatherData.weather[0].icon}
              alt={weatherData.weather[0].description}
            />
            <Temperature
              celcious={weatherData.main.temp}
              fahrenheit={weatherData.main.temp * 9 / 5 + 32}
              setDegrees={setDegrees}
              degrees={degrees}
            />

          </div>
          <p className="weather__type">
            {weatherData.weather[0].main}
          </p>
          <p className="weather__feel">
            Feel like: {Math.floor(weatherData.main.feels_like)} ℃
          </p>
          <p className="weather__humidity">
            Humidity: {weatherData.main.humidity}%
          </p>
        </div>
        :
        <p>Loading...</p>
      }
    </div>
  );
}

export default App;
