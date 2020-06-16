import React, {
  useEffect,
} from 'react'
import styled from 'styled-components'
import {
  Transition,
} from 'react-transition-group'
import {
  useSelector, useDispatch,
} from 'react-redux'

const Wrapper = styled.div`
      position: fixed;
      top:${props => props.top};
      left:50%;
      z-index:3;
      transform:translateX(-50%);
      width:90%;
      max-width:36rem;
      min-height:5rem;
      padding:1rem;
      background-color:${props => props.theme.lightHotBg};
      border:0.1rem solid ${props => props.theme.darkHotBg};
      border-radius:0.5rem;
      box-shadow:${props => props.theme.darkSmollBottomShdw};
      color:${props => props.theme.mainBG};
      font-size:${props => props.theme.accentFs};
      display:flex;
      justify-content:center;
      align-items:center;
      cursor:pointer;
      transition:0.5s;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      p{
        text-align:center;
        
      }
  `

const Warning = () => {
  const text = useSelector(state => state.warning.currentWarning)
  const dispatch = useDispatch()
  const top = '-20%'

  const handleClose = () => {
    dispatch({
      type: 'REMOVE_WARNING',
    })
  }

  const onListOpen = (node) => {
    const {
      style,
    } = node
    style.top = '15%'
  }

  const onListClose = (node) => {
    const {
      style,
    } = node
    style.top = '-10%'
  }

  useEffect(() => {
    const Timer = setTimeout(() => {
      dispatch({
        type: 'REMOVE_WARNING',
      })
    }, 3000)
    return () => clearTimeout(Timer)
  }, [text])//eslint-disable-line

  return (
    <Transition
      in={Boolean(text)}
      timeout={400}
      onEnter={onListOpen}
      onExit={onListClose}
    >
      <Wrapper
        top={top}
        onClick={handleClose}
      >
        <p>{text}</p>
      </Wrapper>
    </Transition>
  )
}

export default Warning
