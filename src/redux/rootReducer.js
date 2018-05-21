import { combineReducers } from 'redux';
import moviesReducer from 'Redux/reducers/movies';
import uiReducers from 'Redux/reducers/ui';

export default combineReducers({
  loadedMovies: moviesReducer,
  ui: uiReducers
});