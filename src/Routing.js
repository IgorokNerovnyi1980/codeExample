import React from 'react'
import {
  Route, Switch,
} from 'react-router-dom'

import HomePage from './pages/HomePage'
import AboutMePage from './pages/AboutMePage'
import NewsPage from './pages/NewsPage'

const Routing = () => (
  <Switch>
    <Route
      path="/"
      exact
      component={HomePage}
    />
    <Route
      path="/home"
      component={HomePage}
    />
    <Route
      path="/about_me"
      component={AboutMePage}
    />
    <Route
      path="/news"
      component={NewsPage}
    />
  </Switch>
)

export default Routing
