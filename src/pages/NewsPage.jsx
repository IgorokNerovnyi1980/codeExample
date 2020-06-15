import React, {
  useEffect,
} from 'react'

import BaseComponent from '../components/BaseComponent'
import connectComponent from '../redux/connectComponent'
import SidePiece from '../components/SidePiece'
import Center from '../components/Center'
import AppControls from '../components/smollItems/AppControls'
import InDevelopment from '../components/DumpComponents/InDevelopment'
import NavControl from '../components/smollItems/NavControl'
import WeatherControl from '../components/smollItems/WeatherControl'
import UserControl from '../components/smollItems/UserControl'

const NewsPage = ({
  GetAllNews, newsList,
}) => {
  useEffect(() => {
    GetAllNews()
        console.log('newsList', newsList)// eslint-disable-line
      }, [])// eslint-disable-line
  return (
    <BaseComponent>
      <SidePiece left>
        <UserControl />
      </SidePiece>
      <Center>
        <InDevelopment />
      </Center>
      <SidePiece>
        <AppControls />
        <NavControl />
        <WeatherControl />
      </SidePiece>
    </BaseComponent>
  )
}
export default connectComponent(NewsPage)
