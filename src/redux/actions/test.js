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

export const testRequest = () => async () => {
  try {
    const {
      data, status,
    } = await api.get(
      `/everything?q=bitcoin&from=2020-05-08&sortBy=publishedAt&apiKey=${newsApi.key}`,
    )
    if (status) {
      console.log('data', data)//eslint-disable-line
    }
  } catch (err) {
    console.warn('err in test request', err)//eslint-disable-line
  }
}
