import React from 'react'
import styled from 'styled-components'
import Media from 'react-media'

const Wrapper = styled.div`
margin-bottom:${props => (props.marginBottom ? '1rem' : 'unset')};
width:${props => props.rowWidth};
min-height:${props => props.height};
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center; 
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
        height={small ? 'auto' : 'calc(100vh - 12.4rem)'}
        marginBottom={!small}
      >
        {children}

      </Wrapper>
    )}
  </Media>
)
export default Row
