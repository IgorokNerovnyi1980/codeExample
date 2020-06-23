import React, {
  useState, useEffect,
} from 'react'
import styled from 'styled-components'
import {
  useSelector,
} from 'react-redux'

import textData from '../../lib/textData.json'
import SmollContainer from '../smollItems/SmollContainer'
import concatinationPrice from '../../helpers/concatinationPrice'

const Content = styled.div`
      width:100%;
      height:100%;
      display: flex;
      flex-wrap:wrap;
      justify-content:flex-start;
      .total{
        margin-left:0.5rem;
      }
  `
const Line = styled.div`
  width:100%;
  padding:${props => props.theme.secondaryPad};
   display: flex;
  justify-content:space-between;
  align-items:center;
  .name{
    width:45%;
    font-size:${props => props.theme.secondayFZ};
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .quantity{
    font-size:${props => props.theme.secondayFZ};
  }
  .price{
    font-weight:500;
  }`

const TotalPrice = () => {
  const userChoise = useSelector(store => store.user.userChoise)
  const currentLang = useSelector(store => store.lang.currentLang)
  const {
    price,
  } = textData
  const [total, setTotal] = useState(0)
  const [flag, setFlag] = useState(false)

  const isData = userChoise.length > 0

  useEffect(() => {
    if (isData && flag) {
      setFlag(false)
      concatinationPrice(setTotal)
    }
  }, [flag])//eslint-disable-line

  useEffect(() => {
    if (isData) {
      setFlag(true)
    }
  }, [userChoise])//eslint-disable-line

  return (
    <SmollContainer>
      <Content>
        {isData ? userChoise.map(obj => (
          <Line
            key={obj.id}
          >
            <p className="name">{obj.name}</p>
            <p className="quantity">{obj.quantity}</p>
            <p
              className="price"
              id="price"
              data-value={(obj.quantity * obj.price).toFixed(2)}
            >
              {`${(obj.quantity * obj.price).toFixed(2)} $`}
            </p>
          </Line>
        )) : <p>{price.nothing[currentLang]}</p>}
        {isData && <p className="total">{`${price.total[currentLang]}: ${total} $`}</p>}
      </Content>
    </SmollContainer>
  )
}

export default TotalPrice
