import React from 'react'

import BaseComponent from '../components/BaseComponent'
import connectComponent from '../redux/connectComponent'
import SidePiece from '../components/SidePiece'
import Center from '../components/Center'
import AppControls from '../components/smollItems/AppControls'
import UserControl from '../components/smollItems/UserControl'
import WeatherControl from '../components/smollItems/WeatherControl'
import Autorization from '../components/user/Autorization'

const UserPage = () => (
  <BaseComponent>
    <SidePiece left>
      <UserControl />
    </SidePiece>
    <Center>
      <Autorization />
    </Center>
    <SidePiece>
      <AppControls />
      <WeatherControl />
    </SidePiece>
  </BaseComponent>
)
export default connectComponent(UserPage)
