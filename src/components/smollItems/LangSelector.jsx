import React, {
  useState, useEffect, useRef,
} from 'react'
import styled from 'styled-components'
import {
  useSelector, useDispatch,
} from 'react-redux'
import shortid from 'shortid'

import textData from '../../lib/textData.json'

const Wrapper = styled.div`
    position:relative;
    padding:${props => props.theme.mainPad};
    background-color:${props => props.theme.darkHotBg};
    button{
        cursor: pointer;
        color:${props => props.theme.mainBG};
    }
    :hover{
        box-shadow:${props => props.theme.darkSmollBottomShdw};
    }
`
const SelectList = styled.ul`
    position: absolute;
    bottom:-150%;
    left:0;  
    width:100%;
    background-color:${props => props.theme.darkHotBg};
    display:${props => (props.visible ? 'flex' : 'none')};
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    box-shadow:${props => props.theme.darkSmollBottomShdw};
    li{
      padding-top:${props => props.theme.mainPad};
      color:${props => props.theme.mainBG};
      transition:0.2s;
      :last-child{
        padding-bottom:${props => props.theme.mainPad};
      }
      button{
        :hover{
          color:${props => props.theme.accentBg};
        }
      }
    }
    
`

const LangSelector = () => {
  const currentLang = useSelector(state => state.lang.currentLang)
  const dispatch = useDispatch()
  const listRef = useRef(null)
  const wrapRef = useRef(null)

  const {
    lang_list,
  } = textData
  const [isShow, setIsShow] = useState(false)

  const toggleSelect = () => {
    setIsShow(!isShow)
  }
  const changeLang = (lang) => {
    dispatch({
      type: 'CHANGE_LANG',
      payload: lang,
    })
    sessionStorage.setItem('currentLang', lang)
    setIsShow(false)
  }

  const handleMouseClick = (e) => {
    if (e.target !== listRef.current && e.target !== wrapRef.current) setIsShow(false)
  }

  useEffect(() => {
    window.addEventListener('click', handleMouseClick)
    return () => window.removeEventListener('click', handleMouseClick)
  })

  return (
    <Wrapper>
      <button
        ref={wrapRef}
        type="button"
        onClick={toggleSelect}
      >
        {currentLang.toUpperCase()}
      </button>
      <SelectList
        visible={isShow}
        ref={listRef}
      >
        {lang_list.map((el) => {
          if (el === currentLang) {
            return null
          }
          return (
            <li key={shortid.generate()}>
              <button
                type="button"
                onClick={() => changeLang(el)}
              >
                {el.toUpperCase()}
              </button>
            </li>
          )
        })}
      </SelectList>
    </Wrapper>
  )
}
export default LangSelector
