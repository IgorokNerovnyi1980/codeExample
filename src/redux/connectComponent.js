
import {
  connect,
} from 'react-redux'

import {
  GetLastNews, SearchNews, baseWarning, getCurrentWeather,
} from './actions/index'

const mapSTP = ({
  news, theme, lang, weather, modal,
}) => ({
  newsList: news.newsList,
  currentTheme: theme.currentTheme,
  currentLang: lang.currentLang,
  currentWeather: weather.currentWeather,
  modalChildren: modal.children,
  modalStatus: modal.isOpen,

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
