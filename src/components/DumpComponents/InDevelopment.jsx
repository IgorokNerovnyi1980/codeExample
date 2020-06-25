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

import CenterLayout from './CenterLayout'

const Wrapper = styled(NavLink)`
  text-decoration:none;
  outline:none;
  width:95%;
  min-width:32rem;
  max-width:80rem;
  cursor:pointer;
  transition:0.2s;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  :active{
      transform:scale(0.97);
  }
  p{
    padding:0.5rem 0;
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
    <CenterLayout
      width="96%"
      marginTop="0.5rem"
    >
      <Wrapper to="/home">
        <p>{development.page[currentLang]}</p>
        <LogoImg src={developer} />

      </Wrapper>
    </CenterLayout>
  )
}

export default InDevelopment
