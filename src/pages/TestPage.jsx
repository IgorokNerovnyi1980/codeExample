import React from 'react'

import BaseComponent from '../components/BaseComponent'
import connectComponent from '../redux/connectComponent'
import Price from '../components/price'

const TestPage = () => (
  <BaseComponent>
    <Price />
  </BaseComponent>
)
export default connectComponent(TestPage)
