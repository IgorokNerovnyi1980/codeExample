
import {
  connect,
} from 'react-redux'

import {
  GetAllNews,
} from './actions/index'

const mapSTP = ({
  news, theme, lang,
}) => ({
  newsList: news.newsList,
  currentTheme: theme.currentTheme,
  currentLang: lang.currentLang,
})

export default Page => connect(
  mapSTP,
  {
    GetAllNews,
  },
)(Page)
