import React from 'react'
import {
  useDispatch, useSelector,
} from 'react-redux'
import styled from 'styled-components'

import Btn from '../Button'
import textData from '../../lib/textData.json'

const Wrapper = styled.div`
    width:100%;
    padding:${props => props.theme.mainPad};
    display:flex;
    justify-content:space-between;
    align-items:center;
`

const ThemeControler = () => {
  const dispatch = useDispatch()
  const currentLang = useSelector(state => state.lang.currentLang)
  const {
    theme_selector,
  } = textData

  return (
    <Wrapper>
      <Btn
        label={theme_selector.sand[currentLang]}
        fhClick={() => dispatch({
          type: 'SECONDARY_THEME',
        })}
        dark
      />
      <Btn
        label={theme_selector.ocean[currentLang]}
        fhClick={() => dispatch({
          type: 'MAIN_THEME',
        })}
        dark
      />
    </Wrapper>
  )
}
export default ThemeControler
