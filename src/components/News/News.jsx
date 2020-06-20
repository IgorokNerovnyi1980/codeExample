import React from 'react'
import styled from 'styled-components'
import shortid from 'shortid'

import CenterLayout from '../DumpComponents/CenterLayout'

import NewsItem from './NewsItem'

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
  <CenterLayout>
    <Wrapper>
      {newsList.map(item => (
        <NewsItem
          key={shortid.generate()}
          news={item}
        />
      ))}
    </Wrapper>
  </CenterLayout>
)

export default News
