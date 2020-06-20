import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width:100%;
  height:100%;
  min-height:calc(100vh - 10.4rem);
  padding:${props => props.theme.mainPad};
  box-shadow:${props => props.theme.darkSmollBottomShdw};
  display:flex;
  justify-content:center;
  align-items:center;
`

const CenterLayout = ({
  children,
}) => <Wrapper>{children}</Wrapper>
export default CenterLayout
