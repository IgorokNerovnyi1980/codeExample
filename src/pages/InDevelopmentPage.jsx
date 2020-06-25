import React from 'react'

import BaseComponent from '../components/BaseComponent'
import connectComponent from '../redux/connectComponent'
import InDevelopment from '../components/DumpComponents/InDevelopment'

const InDevelopmentPage = () => (
  <BaseComponent>
    <InDevelopment />
  </BaseComponent>
)
export default connectComponent(InDevelopmentPage)
