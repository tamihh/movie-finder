import { LOADING_MOVIES, LOADED_MOVIES, FAILED_MOVIES, NO_RESULT_MOVIES } from 'Redux/actions/movies';

const initialState = {
  loadingMovies: false,
  movies: [],
  errorMovies: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_MOVIES:
      return {
        ...state,
        loadingMovies: true
      };
    case LOADED_MOVIES:
      return {
        ...state,
        loadingMovies: false,
        movies: action.payload,
        noResults: false,
        errorMovies: false
      };
    case NO_RESULT_MOVIES:
      return {
        ...state,
        loadingMovies: false,
        movies: [],
        noResults: true,
        errorMovies: false
      };
    case FAILED_MOVIES:
      return {
        ...state,
        loadingMovies: false,
        errorMovies: true
      };

    default:
      return state;
  }
};