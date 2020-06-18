import {
  api, newsApi,
} from '../../lib/constants'
import Type from '../types'

export const GetLastNews = (cantry = 'us') => async (dispatch) => {
  // &apiKey=${newsApi.key}
  if (newsApi.key) {
    api.defaults.headers.common['X-Api-Key'] = newsApi.key
  }
  try {
    const {
      data, status,
    } = await api.get(
      `/top-headlines?country=${cantry}`,
    )
    if (status === 'ok' || status === 200) {
      dispatch({
        type: Type.GET_ALL_NEWS,
        payload: data.articles,
      })
    }
  } catch (err) {
    dispatch({
      type: 'SHOW_WARNING',
      payload: err.message,
    })
  }
}

export const SearchNews = ({
  key,
}) => async (dispatch) => {
  // if (newsApi.key) {
  //   api.defaults.headers.common['X-Api-Key'] = newsApi.key
  // }
  // dispatch({
  //   type: Type.GET_ALL_NEWS,
  //   payload: null,
  // })
  try {
    const {
      data, status,
    } = await api.get(
      `/everything?q=${key}&apiKey=${newsApi.key}`,
    )
    if (status === 'ok' || status === 200) {
      dispatch({
        type: Type.GET_ALL_NEWS,
        payload: data.articles,
      })
    }
  } catch (err) {
    dispatch({
      type: 'SHOW_WARNING',
      payload: err.message,
    })
  }
}

//
