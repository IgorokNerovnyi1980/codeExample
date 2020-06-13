import {
  api, newsApi,
} from '../../lib/constants'
import Type from '../types'

export const getTestData = () => (dispatch) => {
  dispatch({
    type: Type.GET_TEST,
    payload: 'update data in store',
  })
}

export const GetAllNews = (
  lang = 'us',
) => async (dispatch) => {
  try {
    const {
      data, status, response,
    } = await api.get(

      `/latest-news?language=${lang}&apiKey=${newsApi.key}`,
    )
    console.log('data', data)//eslint-disable-line
    console.log('response', response)
    // if (status === 'ok') {
    //   dispatch({
    //     type: Type.GET_ALL_NEWS,
    //     payload: data.articles,
    //   })
    // }
  } catch (err) {
      console.warn('err in test request', err)//eslint-disable-line
  }
}
