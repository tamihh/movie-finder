import { combineReducers } from 'redux';
import moviesReducer from 'Redux/reducers/movies';

export default combineReducers({
  loadedMovies: moviesReducer,
});