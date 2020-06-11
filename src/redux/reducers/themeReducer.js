import Type from '../types'

const initialState = {
  currentTheme: 'base',

}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.MAIN_THEME:
      return {
        ...state,
        currentTheme: 'base',
      }
    case Type.SECONDARY_THEME:
      return {
        ...state,
        currentTheme: 'secondary',
      }
    default:
      return state
  }
}
export default reducer
