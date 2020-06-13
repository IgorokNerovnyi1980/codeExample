import React from 'react'
import styled from 'styled-components'

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
    :hover{
        box-shadow:${props => props.theme.darkSmollBottomShdw};
    }
    :active{
        transform:scale(0.97);
    }
`

const Logo = () => {
  const fnClick = () => {}
  return (
    <Wrapper
      onClick={fnClick}
    />
  )
}

export default Logo
