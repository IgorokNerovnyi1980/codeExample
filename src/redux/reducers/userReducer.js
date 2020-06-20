import Type from '../types'

const initialState = {
  isLogin: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.LOGIN:
      return {
        ...state,
        isLogin: true,
      }
    case Type.LOGOUT:
      return {
        ...state,
        isLogin: false,
      }
    default:
      return state
  }
}
export default reducer
