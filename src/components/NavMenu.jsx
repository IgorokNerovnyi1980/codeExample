import React from 'react'
import {
  useSelector,
} from 'react-redux'
import styled from 'styled-components'

import textData from '../lib/textData.json'

const Wrapper = styled.nav`
    min-width:10rem;
    padding:${props => props.theme.mainPad};
    border:0.1rem solid${props => props.theme.darkHotBg};
    border-radius:0.1rem;
    display:flex;
    justify-content:space-around;
    align-items:center;
`

const NavMenu = () => {
  const currentLang = useSelector(state => state.lang.currentLang)
  const {
    nav_menu,
  } = textData
  return (
    <Wrapper>
      <p>{nav_menu.test[currentLang]}</p>
    </Wrapper>
  )
}

export default NavMenu
