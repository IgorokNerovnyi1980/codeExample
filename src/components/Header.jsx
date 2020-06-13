import React from 'react'
import styled from 'styled-components'
import {
  useSelector,
} from 'react-redux'

import textData from '../lib/textData.json'

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

const Header = () => {
  const {
    login, logo,
  } = textData
  const currentLang = useSelector(state => state.lang.currentLang)
  const currentPage = useSelector(state => state.page.currentPage)
  return (
    <Wrapper>
      <Logo label={logo[currentLang]} />
      {currentPage === 'news' && <Search />}
      <Button
        label={login[currentLang]}
        dark
      />
    </Wrapper>
  )
}

export default Header
