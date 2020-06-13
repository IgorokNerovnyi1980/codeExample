import {
  combineReducers,
}
  from 'redux'

import test from './testReduser'
import news from './newsReducer'
import theme from './themeReducer'
import lang from './langReducer'

export default combineReducers({
  test,
  news,
  theme,
  lang,
})
