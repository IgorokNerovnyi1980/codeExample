import {
  combineReducers,
}
  from 'redux'

import news from './newsReducer'
import theme from './themeReducer'
import lang from './langReducer'
import warning from './warningReducer'

export default combineReducers({
  news,
  theme,
  lang,
  warning,
})
