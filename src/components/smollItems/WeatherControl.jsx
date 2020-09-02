import React, {
  useEffect, useState,
} from 'react'
import {
  useDispatch
} from 'react-redux'

import connectComponent from '../../redux/connectComponent'
import Btn from '../Button'
import textData from '../../lib/textData.json'

import SmollContainer from './SmollContainer'

const WeatherControl = ({
  currentLang, baseWarning, getCurrentWeather, currentWeather,
}) => {
  const {
    weather,
  } = textData

  const dispatch = useDispatch()

  const [ userCoords, setUserCoords ] = useState(null)

  useEffect(() => {
    const onSuccess = (position) => {
      const {
        latitude, longitude,
      } = position.coords
      setUserCoords({
        lat: latitude,
        long: longitude,
      })
    }
    const onError = () => baseWarning('in geolocation', currentLang)

    navigator.geolocation.getCurrentPosition(onSuccess, onError)
  }, []) //eslint-disable-line

  return (
    <SmollContainer
      flexJustify
    >

      {currentWeather && currentWeather.success
      && (
      <>
        <p>{currentWeather.location.name}</p>
        <p>{`${currentWeather.current.temperature} ℃`}</p>
      </>
      )}
      <Btn
        label={currentWeather ? weather.button.update[currentLang] : weather.button.get[currentLang]}
        // fnClick={() => (userCoords ? getCurrentWeather(userCoords) : baseWarning('in weather', currentLang))}
        fnClick={() => dispatch({type:'SHOW_WARNING', payload:'this service not work'})}

        dark
      />
    </SmollContainer>
  )
}
export default connectComponent(WeatherControl)
