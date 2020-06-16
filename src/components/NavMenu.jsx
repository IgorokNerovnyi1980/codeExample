import React from 'react'
import {
  useSelector,
} from 'react-redux'
import styled from 'styled-components'
import shortid from 'shortid'
import {
  NavLink, useLocation,
} from 'react-router-dom'

import textData from '../lib/textData.json'

const Wrapper = styled.nav`
    min-width:10rem;
    display:flex;
    justify-content:space-around;
    align-items:center;
`
const WrapLink = styled(NavLink)`
    text-decoration:${props => (props.current ? 'underline' : 'none')};
    outline:none;
    margin-left:0.7rem;
    padding:${props => props.theme.mainPad};
    border:0.1rem solid${props => props.theme.darkHotBg};
    border-radius:0.1rem;
    color:${({
    theme, current,
  }) => (current ? theme.accentBg : theme.mainBG)};
    font-weight:500;
    transition:0.2s;
    transform:${props => (props.current ? 'scale(1.05)' : 'unset')};
    :active{
        color:${props => props.theme.accentBg};
    }
`

const NavMenu = () => {
  const {
    pathname,
  } = useLocation()
  const currentLang = useSelector(state => state.lang.currentLang)
  const {
    nav_menu,
  } = textData
  return (
    <Wrapper>
      {nav_menu.list[currentLang].map(({
        label, rout,
      }) => (
        <WrapLink
          to={rout}
          key={shortid.generate()}
          current={(pathname === rout) ? true : false}//eslint-disable-line
        >
          {label}
        </WrapLink>
      ))}

    </Wrapper>
  )
}

export default NavMenu
