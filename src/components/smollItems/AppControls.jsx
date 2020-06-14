import React from 'react'
import {
  useDispatch, useSelector,
} from 'react-redux'

import Btn from '../Button'
import textData from '../../lib/textData.json'

import SmollContainer from './SmollContainer'
import LangSelector from './LangSelector'

const AppControls = () => {
  const dispatch = useDispatch()
  const currentLang = useSelector(state => state.lang.currentLang)
  const {
    theme_selector,
  } = textData

  const setBaseTheme = () => {
    dispatch({
      type: 'MAIN_THEME',
    })
    sessionStorage.setItem('currentTheme', 'base')
  }
  const setSecondaryTheme = () => {
    dispatch({
      type: 'SECONDARY_THEME',
    })
    sessionStorage.setItem('currentTheme', 'secondary')
  }

  return (
    <SmollContainer
      height="30vh"
      flexJustify
    >
      <Btn
        label={theme_selector.sand[currentLang]}
        fnClick={setSecondaryTheme}
        dark
      />
      <Btn
        label={theme_selector.ocean[currentLang]}
        fnClick={setBaseTheme}
        dark
      />
      <LangSelector />
    </SmollContainer>
  )
}
export default AppControls
