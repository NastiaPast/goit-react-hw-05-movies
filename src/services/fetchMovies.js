import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '0bd052a36cb17fd9656e5b38bc680abf';

export const fetchTrendMovies = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  return data;
};

export const fetchMovieByName = async name => {
  const { data } = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${name}&page=1&include_adult=false`
  );
  return data;
};

export const fetchMovieCast = async id => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

export const fetchMovieById = async id => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

export const fetchMovieReviews = async id => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${id}}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return data;
};
