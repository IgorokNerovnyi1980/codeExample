import React from 'react'
import styled from 'styled-components'
import {
  useSelector,
} from 'react-redux'

import textData from '../../lib/textData.json'

const Wrapper = styled.div`
    width:90%;
    min-height:50vh;
    padding:${props => props.theme.mainPad};
    border-radius:0.5rem;
    color:${props => props.theme.mainBG};
    background-color:${props => props.theme.darkColdBg};
`

const DumpTextBlock = () => {
  const currentLang = useSelector(state => state.lang.currentLang)
  const {
    right_side,
  } = textData
  return (
    <Wrapper>
      <p>{right_side[currentLang]}</p>
    </Wrapper>

  )
}

export default DumpTextBlock
