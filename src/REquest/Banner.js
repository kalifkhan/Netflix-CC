import React, { useEffect, useState } from 'react'
import './Banner.css'
import requests from './Request';
import axios from './axios';

export const Banner = () => {
  const [movie , setMovie]= useState([]);

  useEffect( ()=>{

        async function fetchData(){

          const request = await axios.get(requests.fetchTrending);
          setMovie(
            request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]
          );
          return request;
        }

        fetchData();

  } , [])
  
  

  function truncate(string , n){
    return string?.length > n ? string.substr(0, n-1) + '....' : string 
  };

  return (
    <header 
    className='banner'
    style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://www.themoviedb.org/t/p/original${movie?.backdrop_path}")` ,
         backgroundPosition: "center center"

        }}>
           
        <div  className='banner_contain'>
            <h1 className='banner_title'>
              {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className='banner__buttons'>
                <button className='banner_button'>Play </button>
                <button className='banner_button'>My list  </button>
            </div> 
          <h1 className='banner__description'> {truncate(movie?.overview ,100 ) } </h1>
           </div>

           <div className='banner--fadeBottom'> </div>

    </header>
  )
}
