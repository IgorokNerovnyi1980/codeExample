import React, {
  useState,
} from 'react'

import BaseComponent from '../components/BaseComponent'
import connectComponent from '../redux/connectComponent'
import InDevelopment from '../components/DumpComponents/InDevelopment'
import LikeTrello from '../components/LikeTrello'

const InDevelopmentPage = () => {
  const [work] = useState(false)
  return (
    work ? (
      <BaseComponent>
        <InDevelopment />
      </BaseComponent>
    )
      : (
        <BaseComponent>
          <LikeTrello />
        </BaseComponent>
      )
  )
}
export default connectComponent(InDevelopmentPage)
