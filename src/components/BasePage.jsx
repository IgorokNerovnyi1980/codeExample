import React from 'react'
import styled from 'styled-components'

import Header from './Header'
import SidePiece from './SidePiece'
import Center from './Center'
import ThemeControler from './smollItems/ThemeConroler'
import LangSelector from './smollItems/LangSelector'

const Wrapper = styled.div`
    width:100vw;
`
const Content = styled.div`
    width:100%;
    margin-top:8rem;
    min-height:calc(100vh - 8rem);
    display:flex;
    justify-content:space-between;
    align-items:center;
    background-color:${props => props.theme.lightColdBg};
`
const BasePage = () => (
  <Wrapper>
    <Header />
    <Content>
      <SidePiece>
        <p>Left Side</p>
        <LangSelector />
      </SidePiece>
      <Center>
        <p>Center</p>
      </Center>
      <SidePiece>
        <p>Right Side</p>
        <ThemeControler />
      </SidePiece>
    </Content>
  </Wrapper>
)
export default BasePage
