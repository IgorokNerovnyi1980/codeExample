import Type from '../types'

const initialState = {
  currentPage: 'base',

}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.MAIN_PAGE:
      return {
        ...state,
        currentPage: 'base',
      }
    case Type.NEWS_PAGE:
      return {
        ...state,
        currentPage: 'news',
      }
    default:
      return state
  }
}
export default reducer
