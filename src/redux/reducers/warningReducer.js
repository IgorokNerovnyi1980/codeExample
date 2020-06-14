import Type from '../types'

const initialState = {
  currentWarning: null,

}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.SHOW_WARNING:
      return {
        ...state,
        currentWarning: action.payload,
      }
    case Type.REMOVE_WARNING:
      return {
        ...state,
        currentWarning: null,
      }
    default:
      return state
  }
}
export default reducer
