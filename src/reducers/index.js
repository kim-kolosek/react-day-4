import { combineReducers } from 'redux'

import movieReducer from './MovieReducer/reducer';
import musicReducer from './MusicReducer/reducer'

export default combineReducers({
  movies: movieReducer,
  music: musicReducer,
});
