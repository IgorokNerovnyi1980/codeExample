import Type from '../types'

const initialState = {
  currentWeather: null,

}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.GET_WEATHER:
      return {
        ...state,
        currentWeather: action.payload,
      }
    default:
      return state
  }
}
export default reducer
