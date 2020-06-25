import React, {
  useEffect, useState,
} from 'react'
import {
  useSelector, useDispatch,
} from 'react-redux'
import Media from 'react-media'
import shortid from 'shortid'

import CenterLayout from '../DumpComponents/CenterLayout'
import separateArr from '../../helpers/separateArr'

import Row from './Row'
import CategoriesItem from './CategoriesItem'
import toolsList from './dataList'

const Price = () => {
  const isLogin = useSelector(store => store.user.isLogin)
  const userChoise = useSelector(store => store.user.userChoise)
  const dispatch = useDispatch()
  const [value, setValue] = useState(null)
  const [state, setState] = useState([])
  const [isOpenCategory, setIsOpenCategory] = useState('')

  useEffect(() => {
    setValue(Math.ceil(toolsList.length / 3))
  }, [])

  useEffect(() => {
    if (value)setState(separateArr(toolsList, value))
    setIsOpenCategory(toolsList[0].id)
  }, [value])

  const categoryToogler = (categoryIndex) => {
    setIsOpenCategory(categoryIndex)
  }

  const updateChoise = (category, id, type) => {
    const obj = category.data.find(el => el.id === id)
    if (userChoise.length > 0) {
      const isHave = userChoise.find(el => el.id === obj.id)
      if (isHave) {
        switch (type) {
          case 'toggle':
            dispatch({
              type: 'UPDATE_CHOISE',
              payload: userChoise.filter(el => (el.id !== obj.id)),
            })
            break
          case 'setQantity':
            dispatch({
              type: 'UPDATE_CHOISE',
              payload: obj.isActive
                ? userChoise.map((el) => { if (el.id === obj.id) { return obj } return el })
                : userChoise.filter(el => (el.id !== obj.id)),
            })
            break
          default: break
        }
      } else {
        dispatch({
          type: 'UPDATE_CHOISE',
          payload: [...userChoise, obj],
        })
      }
    } else {
      dispatch({
        type: 'UPDATE_CHOISE',
        payload: [obj],
      })
    }
  }

  const toggler = (id, categoryId) => {
    if (isLogin) {
      const concatinateArr = state.flatMap(arr => arr)
      const findObj = concatinateArr.find(obj => obj.id === categoryId)

      const toggle = {
        ...findObj,
        data: findObj.data.map((obj) => {
          if (obj.id === id) {
            return {
              ...obj,
              isActive: !obj.isActive,
              quantity: obj.isActive ? obj.quantity : 1,
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
      updateChoise(toggle, id, 'toggle')
      setState(separateArr(changeObj, value))
    } else {
      dispatch({
        type: 'SHOW_WARNING',
        payload: 'for authorized users only',
      })
    }
  }

  const calculation = (type, quantity) => {
    switch (type) {
      case 'plus':
        return quantity + 1
      case 'minus':
        if (quantity <= 0) {
          return 0
        }
        return quantity - 1

      default: return quantity
    }
  }

  const setQantity = (typeAction, id, categoryId) => {
    const concatinateArr = state.flatMap(arr => arr)
    const findObj = concatinateArr.find(obj => obj.id === categoryId)
    const toggle = {
      ...findObj,
      data: findObj.data.map((obj) => {
        if (obj.id === id) {
          return {
            ...obj,
            quantity: calculation(typeAction, obj.quantity),
            isActive: calculation(typeAction, obj.quantity) === 0 ? false : obj.isActive,
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
    updateChoise(toggle, id, 'setQantity')
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
          // width="96%"
          // marginTop="0.5rem"
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
                  fnSetQantity={setQantity}
                  isOpenCategory={isOpenCategory}
                  fnToggleIsOpen={categoryToogler}
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
