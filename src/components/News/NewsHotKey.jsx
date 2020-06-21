import React, {
  useEffect,
} from 'react'
import styled from 'styled-components'
import {
  useDispatch,
} from 'react-redux'

import SmollContainer from '../smollItems/SmollContainer'
import connectComponent from '../../redux/connectComponent'

const Content = styled.div`
    width:100%;
    height:100%;
    display: flex;
    flex-wrap:wrap;
    justify-content:flex-start;
`
const Tab = styled.button`
    position:relative;
    margin:${props => props.theme.secondaryPad};
    padding:0.5rem 2rem 0.5rem 0.5rem;
    border:1px solid${props => props.theme.greetingsBG};
    border-radius:0.5rem;
    cursor: pointer;
    transition:0.2s;
    :active{
        transform:scale(0.95);
    }
`

const Cross = styled.span`
    position:absolute;
    right:0.2rem;
    bottom:0.5rem;
`

const NewsHotKey = ({
  keyWordList, SearchNews,
}) => {
  const dispatch = useDispatch()
  useEffect(() => {
    const isHaveKeys = JSON.parse(sessionStorage.getItem('keys'))
    if (isHaveKeys) {
      dispatch({
        type: 'UPDATE_KEYS',
        payload: isHaveKeys,
      })
    }
  }, [])//eslint-disable-line

  const deleteKey = (id) => {
    const result = keyWordList.filter(obj => obj.id !== id)
    dispatch({
      type: 'UPDATE_KEYS',
      payload: result,
    })
    sessionStorage.setItem('keys', JSON.stringify(result))
  }

  const action = (type, value) => {
    switch (type) {
      case 'search':
        return SearchNews({
          key: value,
        })
      case 'delete': return deleteKey(value)
      default: return //eslint-disable-line
    }
  }

  return (
    <SmollContainer>
      <Content>
        {(keyWordList && keyWordList.length >= 0) && keyWordList.map(({
          id, key,
        }) => (
          <Tab
            type="button"
            key={id}
            onClick={() => action('search')}
          >
            {key}
            <Cross onClick={() => action('delete', id)}>&#10006;</Cross>
          </Tab>
        ))}
      </Content>
    </SmollContainer>
  )
}

export default connectComponent(NewsHotKey)
