import React , {useEffect , useState} from "react";
import '../HomeScreen/Row.css'
import requests from "../REquest/Request";

import axios from '../REquest/axios';

export const ContentRow = (props) => {
    const [movies, setMovies] = useState([]);
    const { title, isLargeRow = false } = { title: "Suggestion Based on Weather", isLargeRow: false };
    const base_url = "https://www.themoviedb.org/t/p/original";
        
    useEffect(()=>{
        setMovies(props.byMovies);
        } , [props.byMovies])

    console.log(title)
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
