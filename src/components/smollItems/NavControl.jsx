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
    text-decoration:${props => (props.current ? 'underline' : 'none')};
    outline:none;
    padding:1rem;
    color:${props => props.theme.mainBG};
    font-weight:600;
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
