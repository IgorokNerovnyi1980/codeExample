
import {
  connect,
} from 'react-redux'

import {
  GetLastNews, SearchNews, baseWarning, getCurrentWeather,
} from './actions/index'

const mapSTP = ({
  news, theme, lang, weather, modal, user,
}) => ({
  newsList: news.newsList,
  currentTheme: theme.currentTheme,
  currentLang: lang.currentLang,
  currentWeather: weather.currentWeather,
  modalChildren: modal.children,
  modalStatus: modal.isOpen,
  isLogin: user.isLogin,
  keyWordList: user.keyWordList,
  searchResult: user.searchResult,

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
