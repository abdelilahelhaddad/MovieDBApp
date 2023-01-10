import { api_key } from './apiKey.js';


const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=' + api_key + '&language=en-US&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=' + api_key + '&query="';

getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.results);
}