import React from 'react'

import BaseComponent from '../components/BaseComponent'
import connectComponent from '../redux/connectComponent'
import SidePiece from '../components/SidePiece'
import Center from '../components/Center'
import AppControls from '../components/smollItems/AppControls'
import UserControl from '../components/smollItems/UserControl'
import Exsamples from '../components/other/Examples'
import WeatherControl from '../components/smollItems/WeatherControl'

const ExamplesPage = () => (
  <BaseComponent>
    <SidePiece left>
      <UserControl />
    </SidePiece>
    <Center>
      <Exsamples />
    </Center>
    <SidePiece>
      <AppControls />
      <WeatherControl />
    </SidePiece>
  </BaseComponent>
)
export default connectComponent(ExamplesPage)
