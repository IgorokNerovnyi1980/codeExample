import React from 'react'
import {
  useSelector,
} from 'react-redux'

import textData from '../../lib/textData.json'
import SmollContainer from '../smollItems/SmollContainer'

const SearchResult = () => {
  const searchResult = useSelector(store => store.user.searchResult)
  const currentLang = useSelector(store => store.lang.currentLang)

  const {
    search,
  } = textData

  return (
    <SmollContainer
      height="10vh"
      minHeight="10vh"
      flexJustify
    >
      <p>{`${search.result[currentLang]}${searchResult}`}</p>
    </SmollContainer>
  )
}
export default SearchResult
