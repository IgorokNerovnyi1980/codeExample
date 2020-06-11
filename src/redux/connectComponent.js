
import {
  connect,
} from 'react-redux'

import {
  GetAllNews,
} from './actions/index'

const mapSTP = ({
  news, theme,
}) => ({
  newsList: news.newsList,
  currentTheme: theme.currentTheme,
})

export default Page => connect(
  mapSTP,
  {
    GetAllNews,
  },
)(Page)
