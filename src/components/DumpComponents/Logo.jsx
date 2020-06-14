import React from 'react'
import styled from 'styled-components'
import {
  Link,
} from 'react-router-dom'

import developer from '../../img/Developer.png'

const Wrapper = styled.div`
    width:5rem;
    height: 5rem;
    padding:${props => props.theme.mainPad};
    border:0.1rem solid${props => props.theme.darkHotBg};
    border-radius:0.1rem;
    background-image: url(${developer});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    cursor:pointer;
    transition:0.2s;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    :hover{
        box-shadow:${props => props.theme.darkSmollBottomShdw};
    }
    :active{
        transform:scale(0.97);
    }
`
const WrapLink = styled(Link)`
    text-decoration:none;
    outline:none;
    margin-left:0.5rem;
`

const Logo = () => (
  <WrapLink to="/about_me">
    <Wrapper />
  </WrapLink>
)

export default Logo
