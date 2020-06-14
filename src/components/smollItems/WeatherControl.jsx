import React from 'react'
import {
  useDispatch, useSelector,
} from 'react-redux'

import Btn from '../Button'
import textData from '../../lib/textData.json'

import SmollContainer from './SmollContainer'

const WeatherControl = () => {
  const dispatch = useDispatch()
  const currentLang = useSelector(state => state.lang.currentLang)
  const {
    weather,
  } = textData

  return (
    <SmollContainer
      flexJustify
      marginTop
    >
      <Btn
        label={weather.button[currentLang]}
        // fhClick={}
        dark
      />
    </SmollContainer>
  )
}
export default WeatherControl
