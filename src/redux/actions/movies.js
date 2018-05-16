import { getMoviesByTitle } from 'services';

export const LOADING_MOVIES = 'loading_movies';
export const LOADED_MOVIES = 'loaded_movies';
export const FAILED_MOVIES = 'failed_movies';
export const NO_RESULT_MOVIES = 'no_result_movies';

export function loadMovies(term) {
  return dispatch => {
    dispatch(loadingMovies());
    getMoviesByTitle(term)
      .then(result => (
        result.data.length > 0 ?
          dispatch(loadedMovies(getMovieData(result))) :
          dispatch(noResultMovies())
      ))
      .catch(error => dispatch(failedMovies()));
  };
}

export function getMovieData(result) {
  const movies = result.data.filter(movie => movie.Type === "movie");

  return Object.assign({}, result, {data: movies});
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

export const noResultMovies = () => ({
  type: NO_RESULT_MOVIES
});