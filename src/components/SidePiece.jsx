import React, {
  useState,
} from 'react'
import styled from 'styled-components'
import {
  Transition,
} from 'react-transition-group'

const Wrapper = styled.div`
    position:fixed;
    top:8rem;
    ${props => (props.left ? `right:${props.side}` : `left:${props.side}`)};
    width:80%;
    min-width:20rem;
    max-width:51.2rem;
    min-height:calc(100vh - 8rem);
    padding:${props => props.theme.mainPad};
    background-color:${props => props.theme.lightColdBg};
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    transition:0.5s;
    :before{
      content:'';
      position: absolute;
      top:50%;
      ${props => (props.left ? 'right:-5rem;' : 'left:-5rem;')}; 
      width:10rem;
      height:10rem;
      background-color:grey;
      border-radius:50%;

    }
`

const SidePiece = ({
  children, left = false,
}) => {
  const [flag, setFlag] = useState(false)
  const [position] = useState('95%')

  const toggler = () => {
    setFlag(!flag)
  }
  const onListOpen = (node) => {
    const {
      style,
    } = node
    if (left) {
      style.right = '20%'
    }
    style.left = '20%'
  }

  const onListClose = (node) => {
    const {
      style,
    } = node
    if (left) {
      style.right = '95%'
    }
    style.left = '95%'
  }
  return (
    <Transition
      in={flag}
      timeout={400}
      onEnter={onListOpen}
      onExit={onListClose}
    >
      <Wrapper
        left={left}
        side={position}
        onClick={toggler}
      >
        {children}
      </Wrapper>
    </Transition>
  )
}
export default SidePiece

// const Wrapper = styled.div`
//     width:20%;
//     min-width:20rem;
//     max-width:51.2rem;
//     min-height:calc(100vh - 8rem);
//     padding:${props => props.theme.mainPad};
//     background-color:${props => props.theme.lightColdBg};
//     display:flex;
//     flex-direction:column;
//     justify-content:flex-start;
//     align-items:center;
// `

// const SidePiece = ({
//   children,
// }) => (
//   <Wrapper>{children}</Wrapper>
// )
// export default SidePiece
