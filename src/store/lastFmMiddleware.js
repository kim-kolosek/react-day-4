import axios from 'axios'
export const LAST_FM_API = 'LAST_FM_API'

const SERVER_URL = 'http://ws.audioscrobbler.com/';

async function promisedCall(endpoint, method, data, params) {
  return axios({
    method: method,
    url: `${SERVER_URL}${endpoint}`,
    data: data,
    params: params
  }).then((response) => {
      if (response.status !== 200) {
        throw data;
      }
      return response.data;
    })
}

const lastFMMiddleware = store => next => action => {
  console.log("aa")
  const lastFM = action[LAST_FM_API]
  if(typeof lastFM === 'undefined') {
    return next(action)
  }
  const { type, endpoint, method, data, params } = lastFM
  next({
    action: action,
    type: `${type}_START`
  })

  return promisedCall(endpoint, method, data, params)
    .then(
      (data) => {
        next({
          data: data,
          type: `${type}_SUCCESS`
        })
      },
      (error) => {
        next({
          error: error,
          type: `${type}_ERROR`
        })
      })
}

export default lastFMMiddleware
