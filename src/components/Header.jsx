import React, {
  useState,
} from 'react'
import {
  useHistory,
  useLocation,
} from 'react-router-dom'
import styled from 'styled-components'
import Media from 'react-media'

import connectComponent from '../redux/connectComponent'
import textData from '../lib/textData.json'

import Button from './Button'
import NavMenu from './NavMenu'
import Logo from './DumpComponents/Logo'
import UserAvatar from './user/UserAvatar'
import Search from './smollItems/Search'

const Wrapper = styled.div`
    position: fixed;
    top:0;
    left:0;
    width:100%;
    height:8rem;
    padding:${props => props.pagging};
    z-index:2;
    background-color:${props => props.theme.darkColdBg};
    box-shadow:${props => props.theme.darkSmollBottomShdw};
    display:flex;
    justify-content:space-between;
    align-items:center;
`

const Header = ({
  currentLang, SearchNews, isLogin,
}) => {
  const history = useHistory()
  const {
    pathname,
  } = useLocation()
  // TODO - decide whether to use it here

  const {
    logo, autorization,
  } = textData
  const [userWord, setUserWord] = useState('')

  const getMySearch = (e) => {
    e.preventDefault()
    SearchNews({
      key: userWord,
    })
  }
  const changeInput = (e) => {
    setUserWord(e.target.value)
  }

  return (
    <Media queries={{
      small: '(max-width: 900px)',
    }}
    >
      {({
        small,
      }) => (
        <Wrapper pagging={small ? '2.4rem 0.5rem' : '2.4rem'}>
          <Logo label={logo[currentLang]} />
          { pathname === '/examples/news'
            ? (
              <Search
                fnChange={changeInput}
                fnSubmit={getMySearch}
                value={userWord}
              />
            ) : <NavMenu />}
          {isLogin
            ? <UserAvatar />
            : (
              <Button
                label={autorization.login[currentLang]}
                fnClick={() => { history.push('/user') }}
                dark
              />
            )}
        </Wrapper>
      )}
    </Media>
  )
}

export default connectComponent(Header)
