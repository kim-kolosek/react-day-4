import * as actions from './actions'
import * as action_types from './constants'
import { LAST_FM_API } from '../../store/lastFmMiddleware'


const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
}
global.localStorage = localStorageMock

describe('actions', () => {
  it('should create an action to get all tracks', () => {
    const expectedAction = {
      [LAST_FM_API] : {
        type: action_types.GET_MUSIC,
        endpoint: '/2.0/',
        method: 'GET',
        params: {
          method: 'chart.gettoptracks',
          api_key: localStorage.getItem("api_key"),
          format: 'json',
          limit: '10'
        }
      },
    }
    expect(actions.getMusicList()).toEqual(expectedAction)
  })
})
