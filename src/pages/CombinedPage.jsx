import React, {
  useEffect, useState,
} from 'react'
import {
  useLocation,
} from 'react-router-dom'

import connectComponent from '../redux/connectComponent'

import PricePage from './PricePage'
import NewsPage from './NewsPage'
import NotFoundPage from './NotFoundPage'
import InDevelopmentPage from './InDevelopmentPage'

const CombinedPage = () => {
  const {
    pathname,
  } = useLocation()
  const [Component, setComponent] = useState(null)
  const [isData, setIsData] = useState(false)

  useEffect(() => {
    if (!isData && Component)setIsData(true)
  }, [Component])//eslint-disable-line

  useEffect(() => {
    switch (pathname) {
      case '/examples/news':
        setComponent(NewsPage)
        break
      case '/examples/price':
        setComponent(PricePage)
        break
      case '/examples/drag_and_drop':
        setComponent(InDevelopmentPage)
        break
      default: setComponent(null)
    }
  }, [pathname])

  return (
    Component && isData ? <Component /> : <NotFoundPage />

  )
}
export default connectComponent(CombinedPage)
