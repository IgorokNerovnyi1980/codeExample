import React, {
  useState,
} from 'react'
import styled from 'styled-components'
import {
  useSelector, useDispatch,
} from 'react-redux'

import textData from '../../lib/textData.json'

const Wrapper = styled.div`
    position:relative;
    width:5rem;
    height:5rem;
    background-color:grey;
    display:flex;
    justify-content:center;
    align-items:center;
    button{
        cursor: pointer;
    }
`
const SelectList = styled.ul`
    position: absolute;
    bottom:-5rem;
    left:0;  
    width:100%;
    height:110%;
    background-color:red;
    display:${props => (props.visible ? 'flex' : 'none')};
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    
`

const LangSelector = () => {
  const currentLang = useSelector(state => state.lang.currentLang)
  const dispatch = useDispatch()
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
    localStorage.setItem('currentLang', lang)
    setIsShow(false)
  }

  return (
    <Wrapper>
      <button
        type="button"
        onClick={toggleSelect}
      >
        {currentLang.toUpperCase()}
      </button>
      <SelectList visible={isShow}>
        {lang_list.map((el) => {
          if (el === currentLang) {
            return null
          }
          return (
            <li>
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
