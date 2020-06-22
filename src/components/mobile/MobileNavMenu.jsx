import React, {
  useState, useRef, useEffect,
} from 'react'
import {
  useSelector,
} from 'react-redux'
import styled from 'styled-components'
import shortid from 'shortid'
import {
  NavLink, useLocation,
} from 'react-router-dom'

import textData from '../../lib/textData.json'
import Button from '../Button'

const Wrapper = styled.div`
    display:${props => (props.isShow ? 'flex' : 'none')};
    position:absolute;
    top:2rem;
    left:calc(50% - 10rem);
    padding:${props => props.theme.mainPad};
    background-color:${props => props.theme.darkColdBg};
    box-shadow:${props => props.theme.darkSmollBottomShdw};
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    min-width:10rem;
    min-height:20rem;
`

const WrapLink = styled(NavLink)`
    text-decoration:${props => (props.current ? 'underline' : 'none')};
    outline:none;
    min-width:12rem;
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

const MobileNavMenu = () => {
  const listRef = useRef(null)
  const wrapRef = useRef(null)
  const {
    pathname,
  } = useLocation()
  const currentLang = useSelector(state => state.lang.currentLang)
  const {
    nav_menu,
  } = textData
  const [isShow, setIsShow] = useState(false)

  const toggler = () => {
    setIsShow(!isShow)
  }

  const handleMouseClick = (e) => {
    if (e.target !== listRef.current && e.target !== wrapRef.current && isShow)setIsShow(false)
  }

  useEffect(() => {
    window.addEventListener('click', handleMouseClick)
    return () => window.removeEventListener('click', handleMouseClick)
  })

  return (
    <>
      <Button
        label="menu"
        fnClick={toggler}
        minWidth="12rem"
        ref={wrapRef}
      />
      <Wrapper
        isShow={isShow}
      >
        {nav_menu.list[currentLang].map(({
          label, rout,
        }) => (
          <WrapLink
            to={rout}
            key={shortid.generate()}
            current={(pathname === rout)}
            ref={listRef}
          >
            {label}
          </WrapLink>
        ))}

      </Wrapper>
    </>
  )
}

export default MobileNavMenu
