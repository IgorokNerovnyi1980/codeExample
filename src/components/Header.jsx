import React from 'react'
import styled from 'styled-components'
import {
  useLocation,
} from 'react-router-dom'
import Media from 'react-media'

import connectComponent from '../redux/connectComponent'
import textData from '../lib/textData.json'

import Button from './Button'
import NavMenu from './NavMenu'
import MobileNavMenu from './smollItems/MobileNavControl'
import Logo from './DumpComponents/Logo'
import Search from './smollItems/Search'

const Wrapper = styled.div`
    position: fixed;
    top:0;
    left:0;
    width:100%;
    height:8rem;
    padding:${props => props.pagging};
    z-index:2;
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
    <Media query={{
      maxWidth: 900,
    }}
    >
      {matches => (matches ? (
        <Wrapper pagging="2.4rem 0.5rem">
          <Logo label={logo[currentLang]} />
          {pathname === '/news' ? <Search /> : <MobileNavMenu />}
          <Button
            label={login[currentLang]}
            fnClick={() => baseWarning('in development', currentLang)}
            dark
          />
        </Wrapper>
      ) : (
        <Wrapper pagging="2.4rem ">
          <Logo label={logo[currentLang]} />
          {pathname === '/news' ? <Search /> : <NavMenu />}
          <Button
            label={login[currentLang]}
            fnClick={() => baseWarning('in development', currentLang)}
            dark
          />
        </Wrapper>
      ))}

    </Media>
  )
}

export default connectComponent(Header)
