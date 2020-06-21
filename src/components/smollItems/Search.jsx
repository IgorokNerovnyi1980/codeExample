import React from 'react'
import styled from 'styled-components'
import {
  useSelector,
} from 'react-redux'

import textData from '../../lib/textData.json'
import Button from '../Button'

const Wrapper = styled.form`
    width:50%;
    min-width:15rem;
    max-width:25rem;
    height:3.5rem;
    display:flex;
    border:0.1rem solid${props => props.theme.darkHotBg};
    border-radius:0.1rem;
    color:${props => props.theme.greetingsBG};
    background-color:${props => props.theme.mainBG};
    input{
        width:70%;
        min-width:10rem;
        max-width:20rem;
        padding-left:1rem;
    }
`

const Search = ({
  fnChange = () => { },
  fnSubmit = () => { },
  value,
}) => {
  const currentLang = useSelector(state => state.lang.currentLang)
  const {
    search,
  } = textData
  return (
    <Wrapper onSubmit={fnSubmit}>
      <input
        type="text"
        name="search"
        value={value}
        placeholder={search.placeholder[currentLang]}
        onChange={fnChange}
      />
      <Button
        label={search.button[currentLang]}
        type="submit"
        dark
      />

    </Wrapper>

  )
}

export default Search
