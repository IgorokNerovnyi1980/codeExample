import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width:98%;
    min-width:30rem;
    padding:${props => props.theme.mainPad};
    background-color:${props => props.theme.lightColdBg};
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    @media (min-width: 901px) {
     width:60%;
    }
`

const SidePiece = ({
  children,
}) => (
  <Wrapper>{children}</Wrapper>
)
export default SidePiece
