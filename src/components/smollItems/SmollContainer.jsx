import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width:90%;
    height:${props => props.height};
    min-height:10vh;
    padding:${props => props.theme.mainPad};
    border-radius:0.5rem;
    color:${props => props.theme.mainBG};
    background-color:${props => props.theme.darkColdBg};
    display:flex;
    flex-direction:column;
    justify-content:${props => (props.flexJustify ? 'space-around' : 'flex-start')};
    align-items:${props => (props.flexJustify ? 'center' : 'flex-start')};
`

const SmollContainer = ({
  children, height, flexJustify = false,
}) => (
  <Wrapper
    height={height}
    flexJustify={flexJustify}
  >
    {children}
  </Wrapper>

)

export default SmollContainer
