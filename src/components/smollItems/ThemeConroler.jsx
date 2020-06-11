import React from 'react'
import {
  useDispatch,
} from 'react-redux'
import styled from 'styled-components'

import Btn from '../Button'

const Wrapper = styled.div`
    width:100%;
    padding:${props => props.theme.mainPad};
    display:flex;
    justify-content:space-between;
    align-items:center;
`

const ThemeControler = () => {
  const dispatch = useDispatch()

  return (
    <Wrapper>
      <Btn
        label="sand Theme"
        fhClick={() => dispatch({
          type: 'SECONDARY_THEME',
        })}
        dark
      />
      <Btn
        label="ocean Theme"
        fhClick={() => dispatch({
          type: 'MAIN_THEME',
        })}
        dark
      />
    </Wrapper>
  )
}
export default ThemeControler
