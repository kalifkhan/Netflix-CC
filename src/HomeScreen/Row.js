import React, { useEffect, useState } from 'react'
import axios from '../REquest/axios';
import './Row.css'


export const Row = ({ title, fetchUrl, isLargeRow = false }) => {
    const [movies, setMovies] = useState([]);

    const base_url = "https://www.themoviedb.org/t/p/original";


    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;

        }
        fetchData();
    }, [])
    //console.log(movies);
    return (
        <div className='row'>
            <h2 > {title} </h2>
            <div className='row__posters'>
                {
                    movies.map((movie) => (
                        ((isLargeRow && movie.poster_path) ||
                            (!isLargeRow && movie.backdrop_path)) &&
                        (
                            <img
                                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                                key={movie.id}
                                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
                                    }`} />
                        )

                    ))
                }
            </div>
        </div>
    )
}
