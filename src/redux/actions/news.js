import {
  newsAccess, newsApi,
} from '../../lib/constants'
import Type from '../types'

export const GetLastNews = (cantry = 'us') => async (dispatch) => {
  try {
    const {
      data, status,
    } = await newsApi.get(
      `/top-headlines?country=${cantry}&apiKey=${newsAccess.key}`,
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
  try {
    const {
      data, status,
    } = await newsApi.get(
      `/everything?q=${key}&apiKey=${newsAccess.key}`,
    )
    if (status === 'ok' || status === 200) {
      dispatch({
        type: Type.GET_ALL_NEWS,
        payload: data.articles,
      })
      dispatch({
        type: Type.SEARCH_RESULT,
        payload: key,
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
