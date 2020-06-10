import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.button`
    padding:${props => props.theme.mainPad};
    border:0.1rem solid${props => props.theme.darkHotBg};
    border-radius:0.1rem;
    color:${props => props.theme.mainBG};
    background-color:inherit;
    transition:0.2s;
    :hover{
        box-shadow:${props => props.theme.darkSmollBottomShdw};
    }
    :active{
        transform:scale(0.97);
    }
`

const Logo = ({
  fhClick = () => { },
}) => (
  <Wrapper
    type="button"
    onClick={fhClick}
  >
    Your Logo

  </Wrapper>

)

export default Logo
