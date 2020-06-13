import React from 'react'
import styled from 'styled-components'
import {
  useSelector,
} from 'react-redux'

import Button from '../Button'
import textData from '../../lib/textData.json'

const Wrapper = styled.div`
    width:50%;
    min-width:15rem;
    max-width:25rem;
    height:3.5rem;
    display:flex;
    border:0.1rem solid${props => props.theme.darkHotBg};
    border-radius:0.1rem;
    color:${props => props.theme.secondaryBG};
    background-color:${props => props.theme.mainBG};
    input{
        width:70%;
        min-width:10rem;
        max-width:20rem;
        padding-left:1rem;
    }
`

const Search = ({
  fhChange = () => { },
}) => {
  const currentLang = useSelector(state => state.lang.currentLang)
  const {
    search,
  } = textData
  return (
    <Wrapper>
      <input
        type="text"
        value=""
        placeholder={search.placeholder[currentLang]}
        onChange={fhChange}
      />
      <Button
        label={search.button[currentLang]}
        dark
      />

    </Wrapper>

  )
}

export default Search