import React from 'react'

import BaseComponent from '../components/BaseComponent'
import connectComponent from '../redux/connectComponent'
import SidePiece from '../components/SidePiece'
import Center from '../components/Center'
import AppControls from '../components/smollItems/AppControls'
import UserControl from '../components/smollItems/UserControl'
import ContactsControl from '../components/smollItems/ContactsControl'
import Cv from '../components/other/Cv'
import WeatherControl from '../components/smollItems/WeatherControl'

const AboutMePage = () => (
  <BaseComponent>
    <SidePiece left>
      <ContactsControl />
      <UserControl />
    </SidePiece>
    <Center>
      <Cv />
    </Center>
    <SidePiece>
      <AppControls />
      <WeatherControl />
    </SidePiece>
  </BaseComponent>
)
export default connectComponent(AboutMePage)
