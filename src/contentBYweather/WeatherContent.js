import React from 'react';
import './Weather.css';

 const WeatherContent = ({ weatherData }) => {


  return (
    <div className='container'>
      <div className='weather__cast'>
        <div  className='weather_city'> <h2>{weatherData.name }{','}</h2>
        <h3>{weatherData.sys.country}</h3> </div>

        <div className='weather__pressure' >
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Pressure: {weatherData.main.pressure} hPa</p>
        </div>
        <div className='weather__temp'>
          <span>Temp: {Math.round(weatherData.main.temp - 273.15)}°C</span>
          <span className='temp_min'> {weatherData.weather[0].main} </span>
        </div>
      </div>
    </div>
  );
};

export default WeatherContent
