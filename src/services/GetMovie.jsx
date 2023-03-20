import axios from 'axios';

const KEY = '8378c884a6341b6bb6a7cfb362550079';
axios.defaults.baseURL = `https://api.themoviedb.org/3/`;

export async function getTrendFilms() {
  const { data } = await axios.get(`trending/all/day?api_key=${KEY}`);
  return data;
}

export async function getSearchFilms(query) {
  const { data } = await axios.get(
    `search/movie?api_key=${KEY}&query=${query}&page=1`
  );
  return data;
}

export async function getFilmInfo(movie_id) {
  const { data } = await axios.get(`movie/${movie_id}?api_key=${KEY}`);
  return data;
}

export async function getFilmCredits(movie_id) {
  const { data } = await axios.get(`movie/${movie_id}/credits?api_key=${KEY}`);
  return data;
}

export async function getFilmReviews(movie_id) {
  const { data } = await axios.get(`movie/${movie_id}/reviews?api_key=${KEY}`);
  return data;
}
