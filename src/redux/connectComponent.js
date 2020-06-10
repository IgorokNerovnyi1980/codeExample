
import {
  connect,
} from 'react-redux'

import {
  GetAllNews,
} from './actions/index'

const mapSTP = ({
  news,
}) => ({
  newsList: news.newsList,
})

export default Page => connect(
  mapSTP,
  {
    GetAllNews,
  },
)(Page)
