import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width:${props => props.width};
  height:100%;
  min-height:calc(100vh - 10.4rem);
  margin-top:${props => props.marginTop};
  padding:${props => (props.pad ? props.theme.mainPad : 'unset')};
  box-shadow:${props => props.theme.darkSmollBottomShdw};
  display:flex;
  flex-direction:${props => props.flexDirection};
  justify-content:${props => props.justify};
  align-items:${props => props.align};
`

const CenterLayout = ({
  children, width = '100%', marginTop = 'unset', justify = 'center', align = 'center',
  flexDirection = 'row', pad = true,
}) => (
  <Wrapper
    width={width}
    marginTop={marginTop}
    flexDirection={flexDirection}
    justify={justify}
    align={align}
    pad={pad}
  >
    {children}
  </Wrapper>
)
export default CenterLayout
