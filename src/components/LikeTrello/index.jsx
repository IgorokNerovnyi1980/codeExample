import React, {
  useEffect, useState,
} from 'react'
// import {
//   useSelector, useDispatch,
// } from 'react-redux'
import Media from 'react-media'
import shortid from 'shortid'

import CenterLayout from '../DumpComponents/CenterLayout'

const LikeTrello = () => {
  const isLogin = useSelector(store => store.user.isLogin)
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
        />
      )}
    </Media>
  )
}
export default LikeTrello
