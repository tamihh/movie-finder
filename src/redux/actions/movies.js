import { getMoviesByTitle } from 'services';

export const LOADING_MOVIES = 'loading_movies';
export const LOADED_MOVIES = 'loaded_movies';
export const FAILED_MOVIES = 'failed_movies';

export function loadMovies(term) {
  return dispatch => {
    dispatch(loadingMovies());
    getMoviesByTitle(term)
      .then(result => dispatch(loadedMovies(result)))
      .catch(error => dispatch(failedMovies()));
  };
}

export const loadingMovies = () => ({
  type: LOADING_MOVIES
});

export const loadedMovies = movies => ({
  type: LOADED_MOVIES,
  payload: movies
});

export const failedMovies = () => ({
  type: FAILED_MOVIES
});