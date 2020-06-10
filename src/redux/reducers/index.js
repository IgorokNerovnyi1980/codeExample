import {
  combineReducers,
}
  from 'redux'

import test from './testReduser'
import news from './newsReducer'

export default combineReducers({
  test,
  news,
})
