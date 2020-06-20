import React from 'react'
import {
  useSelector,
} from 'react-redux'

import CenterLayout from '../DumpComponents/CenterLayout'
import InDevelopment from '../DumpComponents/InDevelopment'

import Autorization from './Autorization'

const UserContent = () => {
  const isLogin = useSelector(state => state.user.isLogin)
  return (
    !isLogin
      ? (
        <CenterLayout>
          <Autorization />
        </CenterLayout>
      )
      : <InDevelopment />

  )
}
export default UserContent
