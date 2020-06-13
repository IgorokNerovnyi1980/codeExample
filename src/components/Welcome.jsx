import React from 'react'
import styled from 'styled-components'
import {
  useSelector,
} from 'react-redux'
import shortid from 'shortid'

import welcomeData from '../lib/welcomeData.json'

const Wrapper = styled.div`
    width:100%;
    height:100%;
    color:${props => props.theme.greetingsBG};
    font-size:${props => props.theme.accentFZ};
    h3{
        text-align:center;
        font-size:${props => props.theme.titleFZ};
    }
`
const Paragraph = styled.p`
margin-top:0.5rem;
line-height: 1.5;
text-align:justify;
`
const AccentText = styled(Paragraph)`
    font-weight:500;
    font-style: italic;
    margin-top:0.5rem;
    margin-left:0.5rem;
`
const ItemList = styled.li`
    position:relative;
    margin-left:2.5rem;
    line-height: 2;
    ::before{
        position:absolute;
        top:0;
        left:-2rem;
        content:'-'
    }
`

const Welcome = () => {
  const currentLang = useSelector(state => state.lang.currentLang)
  const {
    title, first_article, second_article, description, finally_article,
  } = welcomeData
  return (
    <Wrapper>
      <h3>{title[currentLang]}</h3>
      <Paragraph>{first_article[currentLang]}</Paragraph>
      <Paragraph>{second_article[currentLang]}</Paragraph>
      <AccentText>{description.title[currentLang]}</AccentText>
      <ul>
        {description.list[currentLang].map(el => (
          <ItemList key={shortid.generate()}>{el}</ItemList>
        ))}
      </ul>
      <Paragraph>{finally_article[currentLang]}</Paragraph>

    </Wrapper>
  )
}
export default Welcome
