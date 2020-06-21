import React from 'react'
import styled from 'styled-components'
import Media from 'react-media'

const Wrapper = styled.div`
margin-bottom:${props => (props.marginBottom ? '1rem' : 'unset')};
width:${props => props.rowWidth};
height:100%;
min-height:${props => props.minHeight};
background-color:grey;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
overflow:auto;
`

const Row = ({
  children,
}) => (
  <Media queries={{
    small: '(max-width: 900px)',
  }}
  >
    {({
      small,
    }) => (
      <Wrapper
        rowWidth={small ? '100%' : '32%'}
        minHeight={small ? 'auto' : 'calc(100vh - 12.4rem)'}
        marginBottom={!!small}
      >
        {children}

      </Wrapper>
    )}
  </Media>
)
export default Row
