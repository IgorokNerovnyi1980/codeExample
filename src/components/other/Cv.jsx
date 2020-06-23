import React from 'react'
import styled from 'styled-components'
import {
  useSelector,
} from 'react-redux'
import {
  NavLink,
} from 'react-router-dom'
import shortid from 'shortid'

import data from '../../lib/cvData.json'
import CenterLayout from '../DumpComponents/CenterLayout'

const Line = styled.div`
width:100%;
display:flex;
`

const HalfSection = styled.div`
width:${props => (props.white ? '30%' : '70%')};
min-height:5rem;
padding:${props => props.theme.mainPad};
background-color:${props => (props.white ? props.theme.mainBG : props.theme.darkHotBg)};
color:${props => (props.white ? props.theme.greetingsBG : props.theme.mainBG)};
text-align:${props => (props.white ? 'right' : 'left')};
line-height:1.8;
h4{
    font-weight:500;
    font-style: italic;
}

`

const Cv = () => {
  const currentLang = useSelector(state => state.lang.currentLang)
  return (
    <CenterLayout
      flexDirection="column"
      justify="flex-start"
      pad={false}

    >
      {data.map(obj => (
        <Line key={shortid.generate()}>
          <HalfSection
            white
          >
            <h4>{obj.label[currentLang]}</h4>

          </HalfSection>
          <HalfSection>
            <p>{obj.description[currentLang]}</p>
          </HalfSection>
        </Line>
      ))}

    </CenterLayout>
  )
}

export default Cv
