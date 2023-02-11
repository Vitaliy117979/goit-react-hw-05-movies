import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
export const API_KEY = 'e146a7a5146c0f8a3c3cd99167c5b659';

export async function fetchTrendingMovies() {
  const resp = await axios.get('/trending/movie/week?', {
    params: {
      api_key: API_KEY,
      page: 1,
    },
  });
  return resp.data.results;
}

export async function getMoviesByQuery(query) {
  const resp = axios.get(
    `/search/movie?&language=en-US&query=${query}&page=1&include_adult=false`,
    {
      params: {
        api_key: API_KEY,
        page: 1,
      },
    }
  );
  return (await resp).data.results;
}

export async function getMoviesDetails(id) {
  const resp = axios.get(`/movie/${id}?&language=en-US`, {
    params: {
      api_key: API_KEY,
    },
  });
  return (await resp).data;
}

export async function getMoviesCast(id) {
  const resp = axios.get(`/movie/${id}/credits?&language=en-US`, {
    params: {
      api_key: API_KEY,
    },
  });
  return (await resp).data.cast;
}


export async function getMoviesReviews(id) {
  const resp = axios.get(`/movie/${id}/reviews?&language=en-US`, {
    params: {
      api_key: API_KEY,
    },
  });
  return (await resp).data.results;
}
