import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width:20%;
    min-width:20rem;
    max-width:51.2rem;
    min-height:calc(100vh - 8rem);
    padding:${props => props.theme.mainPad};
    background-color:${props => props.theme.lightColdBg};
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
`

const SidePiece = ({
  children,
}) => (
  <Wrapper>{children}</Wrapper>
)
export default SidePiece
