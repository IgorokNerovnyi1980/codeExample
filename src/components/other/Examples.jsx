import React, {
  useState, useEffect,
} from 'react'
import styled from 'styled-components'
import {
  useSelector, useDispatch,
} from 'react-redux'
import {
  NavLink,
} from 'react-router-dom'
import shortid from 'shortid'

import CenterLayout from '../DumpComponents/CenterLayout'
import textData from '../../lib/textData.json'

const Paragraph = styled.p`
  margin-top:0.5rem;
  line-height: 1.5;
  text-align:justify;
`
const WrapLink = styled(NavLink)`
  text-decoration:none;
  outline:none;
  margin-top:0.5rem;
  line-height: 1.5;
  color:${props => props.theme.greetingsBG};
  :active{
        color:${props => props.theme.accentBg};
    }
`
const ItemList = styled.li`
  margin-bottom:1rem;
  padding:${props => props.theme.mainPad};
  box-shadow:${props => props.theme.darkSmollBottomShdw};
  font-size:${props => props.theme.mainFZ};
  h3{
      text-align:center;
      font-size:${props => props.theme.accentFZ};
  }
`

const Examples = () => {
  const currentLang = useSelector(state => state.lang.currentLang)
  const {
    examples,
  } = textData
  const host = document.location.host
  const dispatch = useDispatch()
  const [access, setAccess] = useState(false)

  useEffect(() => {
    if (host.includes('localhost'))setAccess(true)
  }, [])//eslint-disable-line

  return (
    <CenterLayout align="flex-start">
      <ul>
        {examples.dataList.map((obj) => {
          switch (obj.rout) {
            case 'news':
              if (access) {
                return (
                  <WrapLink
                    key={shortid.generate()}
                    to={`/examples/${obj.rout}`}
                  >
                    <ItemList>
                      <h3>
                        {obj.label[currentLang]}
                      </h3>
                      <Paragraph>{obj.description[currentLang]}</Paragraph>
                    </ItemList>
                  </WrapLink>
                )
              }
              return (
                (
                  <button
                    key={shortid.generate()}
                    type="button"
                    onClick={() => dispatch({
                      type: 'SHOW_WARNING',
                      payload: 'only for localhost',
                    })}
                  >
                    <ItemList>
                      <h3>
                        {obj.label[currentLang]}
                      </h3>
                      <Paragraph>{obj.description[currentLang]}</Paragraph>
                    </ItemList>
                  </button>
                )
              )
            default: return (
              <WrapLink
                key={shortid.generate()}
                to={`/examples/${obj.rout}`}
              >
                <ItemList>
                  <h3>
                    {obj.label[currentLang]}
                  </h3>
                  <Paragraph>{obj.description[currentLang]}</Paragraph>
                </ItemList>
              </WrapLink>
            )
          }
        })}
      </ul>

    </CenterLayout>
  )
}
export default Examples
