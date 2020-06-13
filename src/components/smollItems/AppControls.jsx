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

  return (
    <SmollContainer
      height="50vh"
      flexJustify
    >
      <Btn
        label={theme_selector.sand[currentLang]}
        fhClick={() => dispatch({
          type: 'SECONDARY_THEME',
        })}
        dark
      />
      <Btn
        label={theme_selector.ocean[currentLang]}
        fhClick={() => dispatch({
          type: 'MAIN_THEME',
        })}
        dark
      />
      <LangSelector />
    </SmollContainer>
  )
}
export default AppControls
