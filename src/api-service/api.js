import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = 'aaa12d4440cdf67f9c9c4c90ab823aeb';

export const fetchTrendingFilms = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${KEY}`);
  return response.data;
};

export const fetchFilmsByKeyword = async keyword => {
  const response = await axios.get(
    `search/movie?api_key=${KEY}&language=en-US&query=${keyword}&include_adult=false`
  );
  return response.data;
};

export const fetchPrimaryInformationAboutFilm = async id => {
  const response = await axios.get(`movie/${id}?api_key=${KEY}&language=en-US`);
  return response.data;
};

export const fetchCastInformation = async id => {
  const response = await axios.get(
    `movie/${id}/credits?api_key=${KEY}&language=en-US`
  );
  return response.data;
};

export const fetchFilmsReviews = async id => {
  const response = await axios.get(
    `movie/${id}/reviews?api_key=${KEY}&language=en-US`
  );
  return response.data;
};
