import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width:90%;
    min-height:10rem;
    margin-bottom:1rem;
    padding:${props => props.theme.mainPad};
    border-radius:0.5rem;
    box-shadow:${props => props.theme.boxShadow};
    color:${props => props.theme.greetingsBG};
    .autor{
      color:${props => props.theme.lightHotBg};
      font-size:${props => props.theme.accentFZ};
      margin-bottom:0.5rem;  
    }
    .title{
      font-size:${props => props.theme.accentFZ};
      font-weight:600;
      margin-bottom:0.5rem;  
    }
    .content{
      margin-top:0.5rem; 
      font-size:${props => props.theme.mainFZ};
    }
    img{
        max-width:80%;
    }
    a{
      margin-top:0.5rem; 
    }
`

const NewsItem = ({
  news,
}) => (
  <Wrapper>
    <h2 className="autor">{news.author}</h2>
    <h4 className="title">{news.title}</h4>
    <img
      src={news.urlToImage}
      alt={news.title}
    />
    <p className="content">{news.content}</p>
    <a
      href={news.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      link

    </a>
  </Wrapper>
)

export default NewsItem
