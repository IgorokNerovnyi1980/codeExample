import React from 'react'

import connectComponent from '../../redux/connectComponent'
import Btn from '../Button'
import textData from '../../lib/textData.json'

import SmollContainer from './SmollContainer'

const UserControl = ({
  currentLang, baseWarning,
}) => {
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
        fnClick={() => baseWarning('in development', currentLang)}
        dark
      />
    </SmollContainer>
  )
}
export default connectComponent(UserControl)
