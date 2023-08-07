import React, { useState, useEffect, useRef } from 'react'
import './HomeScreen.css'
import { ContentRow } from '../contentBYweather/ContentRow';
import requests from '../REquest/Request'
import axios from '../REquest/axios';
import WeatherAPI from '../contentBYweather/WeatherAPI';

export const Toggle = (props) => {
    const [byMovies, setByMovies] = useState([]);
    const [location, setLocation] = useState('');

    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(requests.fetchRomanticMovies);
            setByMovies(request.data.results);

            return request;
        }
        fetchData();
    }, [])

    const handleToggle = () => {
        props.toggleHandle();
    }

    return (
        <div>
            <div className='button__toggle'>
                <button className={`toggle-button  ${props.isToggled ? 'on' : 'off'}`} onClick={handleToggle}></button>
            </div>
            {props.isToggled && <WeatherAPI byMovies={byMovies}> </WeatherAPI>}
        </div>
    )
}
