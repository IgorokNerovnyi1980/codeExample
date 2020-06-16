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
  width:95%;
  min-width:32rem;
  max-width:80rem;
  transition:0.2s;
  @media (min-width: 901px) {
    height:calc(100vh - 12rem);
    overflow:auto;
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
