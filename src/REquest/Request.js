const axios = require('axios');

const API_KEY = "c8b60ee0d1425fcf2c1a8de202cad923";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchRomanticMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,

  };
export default requests
 
// https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US
