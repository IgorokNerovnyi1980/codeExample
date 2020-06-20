import React from 'react'
import styled from 'styled-components'

import useInput from '../../hooks/useInput'
import Button from '../Button'
// import {
//   AutorizationData,
// } from '../../lib/constants'

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
  background-color:${props => props.theme.mainBG};
  padding-left:0.5rem;
`

const Autorization = () => {
  const [login, setLogin, resetLogin] = useInput('')
  const [password, setPassword, resetPassword] = useInput('')

  const submit = (e) => {
    e.preventDefault()
    resetLogin()
    resetPassword()
  }
  return (
    <Wrapper>
      <label>login</label>
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
