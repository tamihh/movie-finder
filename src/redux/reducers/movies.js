import { LOADING_MOVIES, LOADED_MOVIES, FAILED_MOVIES  } from 'Redux/actions/movies';

const initialState = {
  loadingMovies: false,
  movies: [],
  errorMovies: false
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
        errorMovies: false
      };
    case FAILED_MOVIES:
      return {
        ...state,
        errorMovies: true,
        loadingMovies: false
      };

    default:
      return state;
  }
};