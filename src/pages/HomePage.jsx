import React, {
  useEffect,
} from 'react'

import BaseComponent from '../components/BaseComponent'
import connectComponent from '../redux/connectComponent'
import SidePiece from '../components/SidePiece'
import Center from '../components/Center'
import ThemeControler from '../components/smollItems/ThemeConroler'
import LangSelector from '../components/smollItems/LangSelector'
import DumpTextBlock from '../components/DumpComponents/DumpTextBlock'
import Welcome from '../components/Welcome'

const HomePage = ({
  GetAllNews, newsList,
}) => {
  useEffect(() => {
    GetAllNews()
    console.log('newsList', newsList)// eslint-disable-line
  }, [])// eslint-disable-line
  return (
    <BaseComponent>
      <SidePiece>
        <DumpTextBlock />
      </SidePiece>
      <Center>
        <Welcome />
      </Center>
      <SidePiece>
        <ThemeControler />
        <LangSelector />
      </SidePiece>
    </BaseComponent>
  )
}
export default connectComponent(HomePage)
