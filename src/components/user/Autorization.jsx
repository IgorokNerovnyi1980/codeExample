import React from 'react'
import styled from 'styled-components'
import {
  useDispatch, useSelector,
} from 'react-redux'

import useInput from '../../hooks/useInput'
import Button from '../Button'
import {
  AutorizationData,
} from '../../lib/constants'
import dataText from '../../lib/textData.json'

const Wrapper = styled.form`
   min-width:30rem;
   height:30rem;
   padding:${props => props.theme.mainPad};
   background-color:${props => props.theme.lightColdBg};
   border-radius:0.5rem;
   display:flex;
   flex-direction:column;
   justify-content:space-evenly;
   align-items:center;
`
const WrapInput = styled.input`
  height:3rem;
  background-color:${props => props.theme.mainBG};
  padding-left:0.5rem;
`

const Autorization = () => {
  const {
    autorization,
  } = dataText
  const dispatch = useDispatch()
  const currentLang = useSelector(state => state.lang.currentLang)
  const [login, setLogin, resetLogin] = useInput('')
  const [password, setPassword, resetPassword] = useInput('')
  // login: 'new User',
  // password: '123W45',

  const submit = (e) => {
    e.preventDefault()
    if (login === AutorizationData.login && password === AutorizationData.password) {
      dispatch({
        type: 'LOGIN',
      })
      dispatch({
        type: 'SHOW_WARNING',
        payload: autorization.welcome[currentLang],
      })
      sessionStorage.setItem('isLogin', true)
    } else {
      dispatch({
        type: 'SHOW_WARNING',
        payload: autorization.not_valid[currentLang],
      })
    }
    resetLogin()
    resetPassword()
  }
  return (
    <Wrapper onSubmit={submit}>
      <label>name</label>
      <WrapInput
        type="text"
        {...setLogin}
      />
      <label>Password</label>
      <WrapInput
        type="text"
        {...setPassword}
      />
      <Button
        label="login"
        dark
        fnClick={submit}
        disable={!(login.length >= 3 && password.length >= 1)}
      />
    </Wrapper>
  )
}

export default Autorization
