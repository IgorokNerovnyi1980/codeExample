import {
  combineReducers,
}
  from 'redux'

import news from './newsReducer'
import theme from './themeReducer'
import lang from './langReducer'
import warning from './warningReducer'
import modal from './modalReducer'
import weather from './weatherReducer'
import user from './userReducer'

export default combineReducers({
  news,
  theme,
  lang,
  warning,
  weather,
  modal,
  user,
})
