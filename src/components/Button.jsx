import React, {
  forwardRef,
} from 'react'
import styled from 'styled-components'

const Wrapper = styled.button`
    min-width:${props => props.minWidth};
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
    :disabled{
      background-color:${props => props.theme.lightHotBg};
      :hover{
        box-shadow:unset;
        cursor:default;
    }
  }
`

const Button = forwardRef(({
  label = 'default',
  fnClick = () => { },
  type = 'button',
  dark = false,
  minWidth = '0',
  disable = false,
}, ref) => (
  <Wrapper
    dark={dark}
    type={type}
    minWidth={minWidth}
    onClick={fnClick}
    ref={ref}
    disabled={disable}
  >
    {label}

  </Wrapper>

))

export default Button
