import React, {
  useState, useRef,
} from 'react'
import styled from 'styled-components'
import {
  Transition,
} from 'react-transition-group'

const Wrapper = styled.div`
    position:fixed;
    z-index:3;
    top:8rem;
    ${props => (props.left ? `right:${props.side}` : `left:${props.side}`)};
    width:80%;
    min-width:20rem;
    max-width:51.2rem;
    min-height:calc(100vh - 6rem);
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
      ${props => (props.left ? 'right:-3rem;' : 'left:-3rem;')}; 
      width:6rem;
      height:6rem;
      background-color:${props => props.theme.accentBg};
      border:0.1rem solid${props => props.theme.darkHotBg};
      border-radius:50%;
      opacity:0.6;
    }
    @media (min-width: 901px) {
      width:20%;
      position: relative;
      top:unset;
      left:unset;
      right:unset;
      z-index:1;
      :before{display:none}
    }
    
`

const SidePiece = ({
  children, left = false,
}) => {
  const wrapperRef = useRef(null)
  const [flag, setFlag] = useState(false)
  const [position] = useState('100%')

  const toggler = (e) => {
    const width = window.innerWidth
    if (e.target === wrapperRef.current && e.target && width <= 900) {
      setFlag(!flag)
    }
  }
  const onListOpen = (node) => {
    const {
      style,
    } = node
    /*eslint-disable */
    if (left) {
      style.right = '20%'
    }else{
      style.left = '20%'
    }
     /* eslint-enable */
  }

  const onListClose = (node) => {
    const {
      style,
    } = node
    /*eslint-disable */
    if (left) {
      style.right = '100%'
    }else{
      style.left = '100%'
    }
     /* eslint-enable */
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
        onClick={e => toggler(e)}
        ref={wrapperRef}
      >
        {children}
      </Wrapper>
    </Transition>
  )
}
export default SidePiece
