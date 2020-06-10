import React, {
  useEffect,
} from 'react'

import BasePage from '../components/BasePage'
import connectComponent from '../redux/connectComponent'

const HomePage = ({
  GetAllNews, newsList,
}) => {
  useEffect(() => {
    GetAllNews()
    console.log('newsList', newsList)// eslint-disable-line
  }, [])// eslint-disable-line
  return (
    <BasePage />
  )
}
export default connectComponent(HomePage)
