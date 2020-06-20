import Type from '../types'

const initialState = {
  children: null,
  isOpen: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.OPEN_MODAL:
      return {
        ...state,
        children: action.payload,
        isOpen: true,
      }
    case Type.CLOSE_MODAL:
      return {
        ...state,
        children: null,
        isOpen: false,
      }
    default:
      return state
  }
}
export default reducer
