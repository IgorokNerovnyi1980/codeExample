
import {
  connect,
} from 'react-redux'

import {
  GetLastNews, SearchNews, baseWarning, getCurrentWeather,
} from './actions/index'

const mapSTP = ({
  news, theme, lang, weather,
}) => ({
  newsList: news.newsList,
  currentTheme: theme.currentTheme,
  currentLang: lang.currentLang,
  currentWeather: weather.currentWeather,
})

export default Page => connect(
  mapSTP,
  {
    GetLastNews,
    SearchNews,
    baseWarning,
    getCurrentWeather,
  },
)(Page)
