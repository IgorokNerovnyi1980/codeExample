import React, {
  useEffect,
} from 'react'

import BaseComponent from '../components/BaseComponent'
import connectComponent from '../redux/connectComponent'
import SidePiece from '../components/SidePiece'
import Center from '../components/Center'
import AppControls from '../components/smollItems/AppControls'
import News from '../components/News/News'
import NavControl from '../components/smollItems/NavControl'
import WeatherControl from '../components/smollItems/WeatherControl'
import UserControl from '../components/smollItems/UserControl'

const NewsPage = ({
  GetLastNews, newsList,
}) => {
  useEffect(() => {
    GetLastNews()
  }, [GetLastNews])

  return (
    <BaseComponent>
      <SidePiece left>
        <UserControl />
      </SidePiece>
      <Center>
        {newsList ? <News newsList={newsList} /> : <p>Loading...</p>}
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
