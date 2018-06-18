import * as action_types from './constants'
import { Record } from 'immutable'

const InitialState = Record({
  musicList: [],
})

const initialState = new InitialState();

function musicReducer(state = initialState, action) {
  switch(action.type) {
    case `${action_types.GET_MUSIC}_START`: {
      return state.set('musicList', []);
    }
    case `${action_types.GET_MUSIC}_SUCCESS`: {
      return state.set('musicList', action.data);
    }
    default: {
      break;
    }
  }
  return state;
};


export default musicReducer;
