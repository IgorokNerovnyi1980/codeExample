import React from 'react'
import {
  useSelector,
} from 'react-redux'
import styled from 'styled-components'
import shortid from 'shortid'
import {
  NavLink, useLocation,
} from 'react-router-dom'

import textData from '../../lib/textData.json'

import SmollContainer from './SmollContainer'

const WrapLink = styled(NavLink)`
    min-width:10rem;
    text-decoration:${props => (props.current ? 'underline' : 'none')};
    outline:none;
    padding:${props => props.theme.mainPad};
    border:0.1rem solid${props => props.theme.darkHotBg};
    border-radius:0.1rem;
    color:${props => props.theme.mainBG};
    font-weight:500;
    display:flex;
    justify-content:center;
    align-items:center;
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
    <SmollContainer
      marginTop
      flexJustify
    >
      {nav_menu.list[currentLang].map(({
        label, rout,
      }) => (
        <WrapLink
          to={rout}
          key={shortid.generate()}
          current={pathname === rout}
        >
          {label}
        </WrapLink>
      ))}

    </SmollContainer>
  )
}

export default NavMenu
