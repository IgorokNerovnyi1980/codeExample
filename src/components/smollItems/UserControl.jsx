import React from 'react'
import {
  useHistory,
} from 'react-router-dom'
import {
  useDispatch,
} from 'react-redux'

import connectComponent from '../../redux/connectComponent'
import Btn from '../Button'
import textData from '../../lib/textData.json'

import SmollContainer from './SmollContainer'

const UserControl = ({
  currentLang, isLogin,
}) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const {
    autorization, user_control,
  } = textData

  const logout = () => {
    dispatch({
      type: 'LOGOUT',
    })
    sessionStorage.setItem('isLogin', false)
  }

  const fnClick = () => {
    /*eslint-disable */
    if (isLogin) {
      return logout()
    } else {
      return history.push('/user')
    }
      /* eslint-enable */
  }

  return (
    <SmollContainer
      height="30vh"
      flexJustify
    >
      <p>{isLogin ? user_control.login[currentLang] : user_control.logout[currentLang]}</p>
      <Btn
        label={isLogin ? autorization.logout[currentLang] : autorization.login[currentLang]}
        fnClick={fnClick}
        dark
      />
    </SmollContainer>
  )
}
export default connectComponent(UserControl)
