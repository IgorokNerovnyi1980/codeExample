import React from 'react'

import BaseComponent from '../components/BaseComponent'
import connectComponent from '../redux/connectComponent'
import SidePiece from '../components/SidePiece'
import Center from '../components/Center'
import AppControls from '../components/smollItems/AppControls'
import UserControl from '../components/smollItems/UserControl'
import WeatherControl from '../components/smollItems/WeatherControl'
import Price from '../components/price'
import TotalPrice from '../components/price/TotalPrice'

const PricePage = () => (
  <BaseComponent>

    <SidePiece left>
      <TotalPrice />
      <UserControl />
    </SidePiece>
    <Center>
      <Price />
    </Center>
    <SidePiece>
      <AppControls />
      <WeatherControl />
    </SidePiece>

  </BaseComponent>
)
export default connectComponent(PricePage)
