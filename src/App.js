import React, {
  useState, useEffect,
} from 'react'
import {
  createGlobalStyle, ThemeProvider,
} from 'styled-components'
import {
  useDispatch,
} from 'react-redux'

import themes from './lib/themes'
import connectComponent from './redux/connectComponent'
import Routing from './Routing'
import Warning from './components/DumpComponents/Warning'
import Modal from './components/DumpComponents/Modal'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    ::-webkit-scrollbar {
    width: 4px;
    background: grey;
    border-radius: 2.5px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 2.5px;
    background-color: black;
    -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
    box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
  }
  }

  *:after, *:before {
    box-sizing: inherit;
  }

  p, ul, li, h1, h2, h3, h4 ,h5 ,h6, html, body{
    margin: 0;
    padding: 0;
  }
  li{
    list-style-type: none;
  }
  h1, h2, h3, h4,h5, h6{
    font-weight: normal;
  }
  
  input, textarea, button{
    outline: none;
    border:none;
    background:none;
  }
  html{
    font-size: 62.5%;  /* 1rem = 10px */
  }

  body{
    font-family: 'Helvetica', sans-serif;
    font-size:1.4rem;
    color: #000000;
    font-weight: 400;
    min-width: 320px;
    overflow-x: hidden;
    background: #ffffff;
    line-height: normal;
  }

  @media (min-width: 1921px) {
  body {
    font-size: 1.6rem;
  }
}
`

function App({
  currentTheme, modalStatus, modalChildren,
}) {
  const dispatch = useDispatch()
  const [isRender, setIsRender] = useState(false)
  const [children, setChildren] = useState(null)

  useEffect(() => {
    const isHaveTheme = sessionStorage.getItem('currentTheme')
    if (isHaveTheme) {
      switch (isHaveTheme) {
        case 'base':
          dispatch({
            type: 'MAIN_THEME',
          })
          break
        case 'secondary':
          dispatch({
            type: 'SECONDARY_THEME',
          })
          break
        default: dispatch({
          type: 'MAIN_THEME',
        })
      }
    }
    const isHaveLang = sessionStorage.getItem('currentLang')
    if (isHaveLang) {
      dispatch({
        type: 'CHANGE_LANG',
        payload: isHaveLang,
      })
    } else {
      const userLang = navigator.language || navigator.userLanguage
      switch (userLang) {
        case 'uk': dispatch({
          type: 'CHANGE_LANG',
          payload: 'uk',
        })
          sessionStorage.setItem('currentLang', 'uk')
          break
        case 'en': dispatch({
          type: 'CHANGE_LANG',
          payload: 'en',
        })
          sessionStorage.setItem('currentLang', 'en')
          break
        case 'ru': dispatch({
          type: 'CHANGE_LANG',
          payload: 'ru',
        })
          sessionStorage.setItem('currentLang', 'ru')
          break
        default: dispatch({
          type: 'CHANGE_LANG',
          payload: 'en',
        })
          sessionStorage.setItem('currentLang', 'en')
      }
    }
    setIsRender(true)
  }, [])// eslint-disable-line

  useEffect(() => {
    const isHaveAccess = JSON.parse(sessionStorage.getItem('isLogin'))
    if (isHaveAccess) {
      dispatch({
        type: 'LOGIN',
      })
    }
  }, [])// eslint-disable-line

  useEffect(() => {
    if (modalChildren) {
      switch (modalChildren) {
        default: setChildren(null)
      }
    }
  }, [modalChildren, modalStatus])

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <GlobalStyle />
      {isRender
      && (
      <>
        <Routing />
        <Warning />
        {modalStatus && (
        <Modal>
          {children}
        </Modal>
        )}
      </>
      )}

    </ThemeProvider>
  )
}

export default connectComponent(App)
