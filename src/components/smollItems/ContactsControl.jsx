import React, {
  useContext,
} from 'react'
import styled, {
  ThemeContext,
} from 'styled-components'
import {
  useSelector, useDispatch,
} from 'react-redux'

import {
  ReactComponent as Facebook,
} from '../../img/svgIcons/fb_icon.svg'
import {
  ReactComponent as GitHub,
} from '../../img/svgIcons/git_icon.svg'
import {
  ReactComponent as Linkedin,
} from '../../img/svgIcons/linkedin_icon.svg'
import {
  ReactComponent as Email,
} from '../../img/svgIcons/email_icon.svg'
import {
  ReactComponent as Phone,
} from '../../img/svgIcons/phone_icon.svg'
import {
  ReactComponent as Telegramm,
} from '../../img/svgIcons/tg_icon.svg'
import textData from '../../lib/textData.json'

import SmollContainer from './SmollContainer'

const Content = styled.div`
      width:100%;
      height:100%;
      max-height:10rem;
      display: flex;
      flex-wrap:wrap;
      justify-content:space-between;
      align-items:center;
  `
const TargetLink = styled.a`
    width:26%;
    text-decoration:none;
    outline:none;
    cursor:poiner;
    transition:0.2s;
    :active{
      transform:scale(0.98)
  }
  `
const Line = styled.div`
    width:100%;
    margin-top:1rem;
    display: flex;
    justify-content:space-between;
    align-items:center;
    p{
      font-size:${props => props.theme.secondayFZ};
    }
    input{
      max-width:80%;
      font-size:${props => props.theme.secondayFZ};
      text-align:right;
      cursor:pointer;
    }
  `

const ContactsControl = () => {
  const isLogin = useSelector(store => store.user.isLogin)
  const currentLang = useSelector(store => store.lang.currentLang)
  const dispatch = useDispatch()
  const theme = useContext(ThemeContext)
  const iconWidth = '100%'
  const iconHeight = '100%'
  const copyIconWidth = '1.5rem'
  const copyIconHeight = '1.5rem'
  const iconFill = theme.darkHotBg

  const {
    user_control, contacts,
  } = textData

  const img = {
    Facebook,
    GitHub,
    Linkedin,
    Email,
    Phone,
    Telegramm,
  }

  const copyText = (id) => {
    const myNode = document.querySelector(`#${id}`)
    myNode.select()
    myNode.setSelectionRange(0, 99999) /* For mobile devices */
    document.execCommand('copy')
    dispatch({
      type: 'SHOW_WARNING',
      payload: `${contacts.copi_to_cliboard[currentLang]}`,
    })
  }
  return (
    <SmollContainer
      flexJustify
      height="20rem"
    >

      <Content>
        {isLogin
          ? (
            <>
              {contacts.links.map(({
                link, icon,
              }) => {
                const Icon = img[icon]
                return (
                  <TargetLink
                    key={icon}
                    href={link}
                    target="blank"
                  >
                    <Icon
                      width={iconWidth}
                      height={iconHeight}
                      fill={iconFill}
                    />
                  </TargetLink>
                )
              })}
              {contacts.copy.map(({
                link, icon, id,
              }) => {
                const Icon = img[icon]

                return (
                  <Line key={icon}>
                    <Icon
                      width={copyIconWidth}
                      height={copyIconHeight}
                      fill={iconFill}
                    />
                    <input
                      type="text"
                      value={link}
                      id={id}
                      onClick={() => copyText(id)}
                    />
                  </Line>
                )
              })}
            </>
          )
          : <p>{user_control.logout_social[currentLang]}</p>}
      </Content>
    </SmollContainer>
  )
}

export default ContactsControl
