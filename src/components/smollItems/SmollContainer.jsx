import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width:90%;
    margin-bottom:1rem;
    height:${props => props.height};
    min-height:${props => props.minHeight};
    padding:${props => props.theme.mainPad};
    border-radius:0.5rem;
    color:${props => props.theme.greetingsBG};
    background-color:${props => props.theme.darkColdBg};
    box-shadow:${props => props.theme.darkSmollBottomShdw};
    display:flex;
    flex-direction:column;
    justify-content:${props => (props.flexJustify ? 'space-around' : 'flex-start')};
    align-items:${props => (props.flexJustify ? 'center' : 'flex-start')};
`

const SmollContainer = ({
  children, height = '10rem', flexJustify = false, minHeight = '17rem',
}) => (
  <Wrapper
    height={height}
    minHeight={minHeight}
    flexJustify={flexJustify}
  >
    {children}
  </Wrapper>

)

export default SmollContainer
