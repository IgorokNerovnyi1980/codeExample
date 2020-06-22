// <CenterLayout>
//   <InDevelopment />
// </CenterLayout>

import React, {
  useEffect, useState,
} from 'react'
import Media from 'react-media'
import shortid from 'shortid'

import CenterLayout from '../DumpComponents/CenterLayout'
import separateArr from '../../helpers/separateArr'

import Row from './Row'
import CategoriesItem from './CategoriesItem'
import toolsList from './dataList'

const Price = () => {
  const [value, setValue] = useState(null)
  const [state, setState] = useState([])

  useEffect(() => {
    setValue(Math.ceil(toolsList.length / 3))
  }, [])

  useEffect(() => {
    if (value)setState(separateArr(toolsList, value))
  }, [value])

  const toggler = (id, categoryId) => {
    const concatinateArr = state.flatMap(arr => arr)
    const findObj = concatinateArr.find(obj => obj.id === categoryId)
    const toggle = {
      ...findObj,
      data: findObj.data.map((obj) => {
        if (obj.id === id) {
          return {
            ...obj,
            isActive: !obj.isActive,
          }
        }
        return obj
      }),
    }
    const changeObj = concatinateArr.map((obj) => {
      if (obj.id === categoryId) {
        return toggle
      }
      return obj
    })
    setState(separateArr(changeObj, value))
  }

  return (
    <Media queries={{
      small: '(max-width: 900px)',
    }}
    >
      {({
        small,
      }) => (
        <CenterLayout
          width="96%"
          marginTop="0.5rem"
          flexDirection={small ? 'column' : 'row'}
          justify={small ? 'flex-start' : 'space-evenly'}
          align="flex-start"
        >
          {(state && state.length > 0) && state.map(arr => (
            <Row key={shortid.generate()}>
              { arr.map(obj => (
                <CategoriesItem
                  key={obj.id}
                  label={obj.label}
                  content={obj.data}
                  currentCategory={obj.id}
                  fnToggle={toggler}
                />
              ))}
            </Row>
          ))}
        </CenterLayout>
      )}
    </Media>
  )
}
export default Price
