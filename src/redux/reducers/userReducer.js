import Type from '../types'

const initialState = {
  isLogin: false,
  keyWordList: [],
  searchResult: null,
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

    case Type.UPDATE_KEYS:
      return {
        ...state,
        keyWordList: action.payload,
      }
    case Type.ADD_KEY:
      return {
        ...state,
        keyWordList: [...state.keyWordList, action.payload],
      }
    case Type.DELETE_KEY:
      return {
        ...state,
        keyWordList: state.keyWordList.filter(({
          id,
        }) => id !== action.payload),
      }
    case Type.SEARCH_RESULT:
      return {
        ...state,
        searchResult: action.payload,
      }
    default:
      return state
  }
}
export default reducer
