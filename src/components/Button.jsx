import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.button`
    padding:1rem 2rem;
    border:0.1rem solid${props => props.theme.darkHotBg};
    border-radius:0.1rem;
    background-color:${props => (props.dark ? props.theme.darkHotBg : 'inherit')};
    color:${props => props.theme.mainBG};
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

const Button = ({
  label = 'default',
  fnClick = () => { },
  type = 'button',
  dark = false,
}) => (
  <Wrapper
    dark={dark}
    type={type}
    onClick={fnClick}
  >
    {label}

  </Wrapper>

)

export default Button
