import {
  api, newsApi,
} from '../../constants'
import Type from '../types'

export const getTestData = () => (dispatch) => {
  dispatch({
    type: Type.GET_TEST,
    payload: 'update data in store',
  })
}

export const GetAllNews = () => async (dispatch) => {
  try {
    const {
      data, status,
    } = await api.get(
      `/everything?q=bitcoin&from=2020-05-08&sortBy=publishedAt&apiKey=${newsApi.key}`,
    )
    console.log('data', data)//eslint-disable-line
    if (status === 'ok') {
      dispatch({
        type: Type.GET_ALL_NEWS,
        payload: data.articles,
      })
    }
  } catch (err) {
      console.warn('err in test request', err)//eslint-disable-line
  }
}
