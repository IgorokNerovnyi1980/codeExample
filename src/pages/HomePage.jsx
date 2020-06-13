import React, {
  useEffect,
} from 'react'

import BaseComponent from '../components/BaseComponent'
import connectComponent from '../redux/connectComponent'
import SidePiece from '../components/SidePiece'
import Center from '../components/Center'
import AppControls from '../components/smollItems/AppControls'
import SmollContainer from '../components/smollItems/SmollContainer'
import Welcome from '../components/Welcome'
import textData from '../lib/textData.json'

const HomePage = ({
  GetAllNews, newsList, currentLang,
}) => {
  const {
    right_side,
  } = textData
  useEffect(() => {
    GetAllNews()
    console.log('newsList', newsList)// eslint-disable-line
  }, [])// eslint-disable-line
  return (
    <BaseComponent>
      <SidePiece>
        <SmollContainer
          height="50vh"
        >
          <p>{right_side[currentLang]}</p>
        </SmollContainer>
      </SidePiece>
      <Center>
        <Welcome />
      </Center>
      <SidePiece>
        <AppControls />
      </SidePiece>
    </BaseComponent>
  )
}
export default connectComponent(HomePage)
