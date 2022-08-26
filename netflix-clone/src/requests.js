import { API_KEY } from "./apikey.js";

const requests = {
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}`,
  fetchTopRatedTv: `/tv/top_rated?api_key=${API_KEY}`,
  fetchDramaMovies: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
  fetchCrimeMovies: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchMysteryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
};

export default requests;

// 커다란 자료형
// &language=en-US
