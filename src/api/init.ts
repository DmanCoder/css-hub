import axios from 'axios';

// CHECK PRODUCTION
const isProd: boolean = process.env.NODE_ENV === 'production' ? true : false;

// BASE URL STRING
const dbURL = !isProd ? 'http://localhost:5000' : process.env.REACT_APP_CSS_HUB_NODE_API;

// IMAGE URL
const imgURL = 'https://image.tmdb.org/t/p'; // SMALL CANVAS
const imgFilterURL = `${imgURL}/w1920_and_h1080_multi_faces/`; // LARGE CANVAS
/*
  "backdrop_sizes": [
    "w300",
    "w780",
    "w1280",
    "original"
  ],
  "logo_sizes": [
    "w45",
    "w92",
    "w154",
    "w185",
    "w300",
    "w500",
    "original"
  ],
  "poster_sizes": [
    "w92",
    "w154",
    "w185",
    "w342",
    "w500",
    "w780",
    "original"
  ],
  "profile_sizes": [
    "w45",
    "w185",
    "h632",
    "original"
  ],
  "still_sizes": [
    "w92",
    "w185",
    "w300",
    "original"
  ]
*/

// AXIOS INSTANCE: BASE URL FOR THE MOVIE DATA BASE
const dbAPI = axios.create({
  baseURL: dbURL,
});

export { dbAPI, dbURL, imgURL, imgFilterURL, isProd };
