// import React, { useEffect, useState } from 'react'
// import Nav from '../HomeScreen/Nav'
// import { Banner } from '../REquest/Banner'
// import HomeScreen from '../HomeScreen/HomeScreen'
// import Content from '../HomeScreen/Content'
// import { Row } from '../HomeScreen/Row'
// import requests from '../REquest/Request'
// import axios from '../REquest/axios';
// import { ContentRow } from './ContentRow'

// export const ContentByWeather = () => {

//     const [byMovies, setByMovies] = useState([]);

//     useEffect(() => {

//         async function fetchData() {
//             const request = await axios.get(requests.fetchRomanticMovies);
//             setByMovies(request.data.results);

//             return request;

//         }
//         fetchData();
//     }, [])

   
//         const dramaHandle =()=>{
//             setByMovies(byMovies.filter((mov) => mov.genre_ids.includes(28)));
//         }

     
//     console.log(byMovies);

//     return (
//         <div className='container'>
//             <h2>Content BY Weather</h2>
//             <button onClick={dramaHandle}> Check Drama </button>
           
//             <ContentRow byMovies={byMovies}> </ContentRow>
 
//         </div>
//     )
// }
