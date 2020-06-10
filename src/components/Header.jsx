import React from 'react'
import styled from 'styled-components'

import Button from './Button'
import Logo from './DumpComponents/Logo'
import Search from './DumpComponents/Search'

const Wrapper = styled.div`
    position: fixed;
    top:0;
    left:0;
    width:100%;
    height:8rem;
    padding:${props => props.theme.mainPad};
    background-color:${props => props.theme.darkColdBg};
    box-shadow:${props => props.theme.darkSmollBottomShdw};
    display:flex;
    justify-content:space-between;
    align-items:center;
`

const Header = () => (
  <Wrapper>
    <Logo />
    <Search />
    <Button
      label="login"
      dark
    />
  </Wrapper>
)

export default Header
