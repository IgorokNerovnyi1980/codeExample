import React from 'react'
import styled from 'styled-components'
import {
  useSelector,
} from 'react-redux'
import {
  NavLink,
} from 'react-router-dom'

import developer from '../../img/developer.png'
import textData from '../../lib/textData.json'

const Background = styled.div`
  width:100%;
  height:100%;
  min-height:calc(100vh - 10.4rem);
  padding:${props => props.theme.mainPad};
  box-shadow:${props => props.theme.darkSmollBottomShdw};
  display:flex;
  justify-content:center;
  align-items:center;
`
const Wrapper = styled(NavLink)`
  text-decoration:none;
  outline:none;
  width:90%;
  min-width:32rem;
  max-width:80rem;
  cursor:pointer;
  transition:0.2s;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  /* :hover{
      box-shadow:${props => props.theme.darkSmollBottomShdw};
  } */
  :active{
      transform:scale(0.97);
  }
  p{
    padding:1rem 0;
    text-align:center;
    color:${props => props.theme.greetingsBG};
    font-size:${props => props.theme.mainFZ};
    font-weight:500;
  }
`

const LogoImg = styled.img`
  width:100%;
  min-width:32rem;
  max-width:51.2rem;
  display: block;
  margin:0 auto;
`
const InDevelopment = () => {
  const currentLang = useSelector(state => state.lang.currentLang)
  const {
    development,
  } = textData
  return (
    <Background>
      <Wrapper to="/home">
        <p>{development.page[currentLang]}</p>
        <LogoImg src={developer} />

      </Wrapper>
    </Background>
  )
}

export default InDevelopment
