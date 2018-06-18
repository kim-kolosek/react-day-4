import { PROMISE_API } from '../../store/customMiddleware';
import * as action_types from './constants';
import * as actions from './actions'

const dispatchMock = jest.fn()

global.dispatch = dispatchMock

describe('actions', () => {
  it('should create an action to get all movies', () => {
    const getMovies = {
      [PROMISE_API]: {
        type: 'GET_MOVIES',
        endpoint: '/films',
        method: 'GET',
      }
    }
    expect(actions.getMovieList()).toEqual(getMovies)
  })

  it('should create an action to select a movie', () => {
    let movie = {}
    const expected = {
      type: action_types.SELECT_MOVIE,
      data: movie,
    }
    expect(typeof actions.selectMovie(movie)).toEqual('function')
    actions.selectMovie({})(dispatch)
    expect(dispatch).toBeCalledWith(expected)
  })
})
