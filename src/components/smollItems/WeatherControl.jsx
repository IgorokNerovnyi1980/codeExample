import React from 'react'

import connectComponent from '../../redux/connectComponent'
import Btn from '../Button'
import textData from '../../lib/textData.json'

import SmollContainer from './SmollContainer'

const WeatherControl = ({
  currentLang, baseWarning,
}) => {
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
        fnClick={() => baseWarning('in development', currentLang)}
        dark
      />
    </SmollContainer>
  )
}
export default connectComponent(WeatherControl)
