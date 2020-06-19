import {
  weatherApi, weatherAccess,
} from '../../lib/constants'
import Type from '../types'

export const getCurrentWeather = coords => async (dispatch) => {
  try {
    const {
      data, status,
    } = await weatherApi.get(
      `/current?access_key=${weatherAccess.key}&query=${coords.lat},${coords.long}`,
    )
    if (status === 'ok' || status === 200) {
      dispatch({
        type: Type.GET_WEATHER,
        payload: data,
      })
    }
  } catch (err) {
    dispatch({
      type: Type.SHOW_WARNING,
      payload: err.message,
    })
  }
}
