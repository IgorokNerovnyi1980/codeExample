import React, {
  useEffect,
} from 'react'

import BaseComponent from '../components/BaseComponent'
import connectComponent from '../redux/connectComponent'
import SidePiece from '../components/SidePiece'
import Center from '../components/Center'
import AppControls from '../components/smollItems/AppControls'
import UserControl from '../components/smollItems/UserControl'
import Welcome from '../components/Welcome'
import WeatherControl from '../components/smollItems/WeatherControl'

const HomePage = () => (
  <BaseComponent>
    <SidePiece left>
      <UserControl />
    </SidePiece>
    <Center>
      <Welcome />
    </Center>
    <SidePiece>
      <AppControls />
      <WeatherControl />
    </SidePiece>
  </BaseComponent>
)
export default connectComponent(HomePage)
