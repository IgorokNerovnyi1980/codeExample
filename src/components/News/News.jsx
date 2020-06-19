import React from 'react'
import styled from 'styled-components'
import shortid from 'shortid'

import NewsItem from './NewsItem'

const Background = styled.div`
  width:100%;
  padding:${props => props.theme.mainPad};
  box-shadow:${props => props.theme.darkSmollBottomShdw};
  display:flex;
  justify-content:center;
  align-items:center;
`
const Wrapper = styled.div`
  width:98%;
  min-width:32rem;
  max-width:80rem;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
  transition:0.2s;
  @media (min-width: 901px) {
    height:calc(100vh - 12rem);
    width:95%;
    overflow:auto;
    display:block;
    
    }
`
const News = ({
  newsList,
}) => (
  <Background>
    <Wrapper>
      {newsList.map(item => (
        <NewsItem
          key={shortid.generate()}
          news={item}
        />
      ))}
    </Wrapper>
  </Background>
)

export default News
