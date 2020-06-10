import Type from '../types'

const initialState = {
  newsList: null,

}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.GET_ALL_NEWS:
      return {
        ...state,
        test: action.payload,
      }
    default:
      return state
  }
}
export default reducer
