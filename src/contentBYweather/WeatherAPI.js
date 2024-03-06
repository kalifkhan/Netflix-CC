import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import WeatherContent from './WeatherContent';
import { ContentRow } from './ContentRow';
import './Weather.css';

const API_KEY = '4690f756c37f0177c7cc0a8f0129e372';
const city_name = "Mumbai"

const WeatherAPI = ({ byMovies }) => {
  const [weatherData, setWeatherData] = useState(null);
  const locationRef = useRef(null);
  const [loc, setLoc] = useState('');
  const [weatherType, setWeatherType] = useState('');
  const [dataFilter, setFilter] = useState(byMovies);
  const [popupClose, setPopupClose] = useState(true);
  const [errorMsg, setErrorMsg] = useState();

  // const city_name = changeLocation;


  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${API_KEY}`);
        // console.log("weatherAPI useEffect" + city_name);
        if (response && response.status === 200) {
          setWeatherData(response.data);
          setWeatherType(response.data.weather[0].main);
        } else {
          throw new Error('API is not working');
        }
      } catch (error) {
        setErrorMsg(error.message);
        console.log(error.message);
      }
    };
    fetchWeatherData();
    //filterData();
  }, [loc]);

  useEffect(() => {
    const filterData = () => {
      if (weatherType === "Clouds") {
        // rometinc 10749 fantacy 14
        setFilter(dataFilter.filter((mov) => (mov.genre_ids.includes(14) || mov.genre_ids.includes(10749))));
      }
      else if (weatherType === "Haze") {
        //biography 18 documentary 99 Hitory 36
        setFilter(dataFilter.filter((mov) => (mov.genre_ids.includes(18) || mov.genre_ids.includes(99) || mov.genre_ids.includes(36))));
      }
      else {
        setFilter(byMovies);
      }
    }
    filterData();
  }, [weatherType])

  const handleWeatherDataReceived = () => {
    setLoc(locationRef.current.value);
    locationRef.current.value = '';
  }
  const handleClosePopup = () => {
    setPopupClose(false);
  }
  const handleOpenPopup = () => {
    setPopupClose(true);
  }
  // if (errorMsg) return <div className='load-container' > {errorMsg} -
  //   <p > Enter Valid Location  </p>
  // </div>
  return (
    <div>
      {!weatherData && popupClose && <div className='popup-element'>
        <button className='close-btn' onClick={handleClosePopup}> X </button>
        <div className='popup'>
          <input type="text" ref={locationRef} />
          <button className="popup-btn" onClick={handleWeatherDataReceived} >SET LOCATION </button>
        </div></div>}
      {weatherData ? (
        <div>
          <div></div>
          <ContentRow byMovies={dataFilter}> </ContentRow>
          {/* <WeatherContent weatherData={weatherData} />  */}
        </div>
      ) : (
        errorMsg ? (<p className='load-container' > {errorMsg} - <h4 onClick={handleOpenPopup}>Enter Valid Location  </h4> </p> ):<p className='load-container'> Loading data..... </p> 
      )}
    </div>
  );
};

export default WeatherAPI;
