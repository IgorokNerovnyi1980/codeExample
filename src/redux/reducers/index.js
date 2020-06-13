import {
  combineReducers,
}
  from 'redux'

import test from './testReduser'
import news from './newsReducer'
import theme from './themeReducer'
import lang from './langReducer'
import page from './pageReducer'

export default combineReducers({
  test,
  news,
  theme,
  lang,
  page,
})
