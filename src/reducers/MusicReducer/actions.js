import { LAST_FM_API } from '../../store/lastFmMiddleware'
import * as action_types from './constants'

export const getMusicList = () => {
  return {
    [LAST_FM_API]: {
      type: action_types.GET_MUSIC,
      endpoint: '/2.0/',
      method: 'GET',
      params: {
        method: 'chart.gettoptracks',
        api_key: localStorage.getItem("api_key"),
        format: 'json',
        limit: '10'
      }
    }
  }
}
