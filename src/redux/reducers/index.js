import {
  combineReducers,
}
  from 'redux'

import test from './testReduser'
import news from './newsReducer'
import theme from './themeReducer'

export default combineReducers({
  test,
  news,
  theme,
})
