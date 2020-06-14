import {
  combineReducers,
}
  from 'redux'

import news from './newsReducer'
import theme from './themeReducer'
import lang from './langReducer'

export default combineReducers({
  news,
  theme,
  lang,
})
