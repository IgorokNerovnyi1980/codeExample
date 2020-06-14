import React from 'react'
import styled from 'styled-components'
import {
  useLocation,
} from 'react-router-dom'

import connectComponent from '../redux/connectComponent'
import textData from '../lib/textData.json'

import Button from './Button'
import NavMenu from './NavMenu'
import Logo from './DumpComponents/Logo'
import Search from './smollItems/Search'

const Wrapper = styled.div`
    position: fixed;
    top:0;
    left:0;
    width:100%;
    height:8rem;
    padding:2.4rem;
    background-color:${props => props.theme.darkColdBg};
    box-shadow:${props => props.theme.darkSmollBottomShdw};
    display:flex;
    justify-content:space-between;
    align-items:center;
`

const Header = ({
  baseWarning, currentLang,
}) => {
  const {
    pathname,
  } = useLocation()
  const {
    login, logo,
  } = textData

  return (
    <Wrapper>
      <Logo label={logo[currentLang]} />
      {pathname === '/news' ? <Search /> : <NavMenu />}
      <Button
        label={login[currentLang]}
        fnClick={() => baseWarning('in development', currentLang)}
        dark
      />
    </Wrapper>
  )
}

export default connectComponent(Header)
