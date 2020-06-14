import React from 'react'
import {
  useDispatch, useSelector,
} from 'react-redux'

import Btn from '../Button'
import textData from '../../lib/textData.json'

import SmollContainer from './SmollContainer'

const UserControl = () => {
  const dispatch = useDispatch()
  const currentLang = useSelector(state => state.lang.currentLang)
  const {
    login, right_side,
  } = textData

  return (
    <SmollContainer
      height="30vh"
      flexJustify
    >
      <p>{right_side[currentLang]}</p>
      <Btn
        label={login[currentLang]}
        // fhClick={}
        dark
      />
    </SmollContainer>
  )
}
export default UserControl
