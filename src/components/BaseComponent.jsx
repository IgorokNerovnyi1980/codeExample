import React from 'react'
import styled from 'styled-components'

import Header from './Header'

const Wrapper = styled.div`
  width:100%;
`
const Content = styled.div`
  position:relative;
  width:100%;
  margin-top:8rem;
  min-height:calc(100vh - 8rem);
  display:flex;
  justify-content:space-around;
  align-items:flex-start;
  background-color:${props => props.theme.lightColdBg};
`
const BaseComponent = ({
  children,
}) => (
  <Wrapper>
    <Header />
    <Content>
      {children}
    </Content>
  </Wrapper>
)
export default BaseComponent
