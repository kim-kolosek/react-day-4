import * as action_types from './constants'
import { Record } from 'immutable'
import musicReducer from './reducer'

describe('Music reducer', () => {
  it('should return the initial state', () => {
    expect(musicReducer(undefined, {})["musicList"]).toEqual([])
  })

  it('should handle GET_MUSIC', () => {
    expect(
      musicReducer(['track1', 'track2'], {
        type: action_types.GET_MUSIC,
      })
    ).toEqual([
       'track1',
       'track2'
    ])
  })
})
